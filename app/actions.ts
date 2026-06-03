"use server";

import { auth } from "@clerk/nextjs/server";
import { db, savedItems, tags, savedItemTags } from "@/lib/db";
import { and, eq } from "drizzle-orm";
import { recentItems } from "@/lib/mock-data";

// Helper to seed standard mock items for a user if they have none
async function seedUserMockData(userId: string) {
  for (const item of recentItems) {
    // 1. Insert saved item record
    const [insertedItem] = await db
      .insert(savedItems)
      .values({
        userId,
        platform: item.platform,
        iconBg: item.iconBg,
        title: item.title,
        url: item.url,
        description: item.description,
        thumbnailGradient: item.thumbnailGradient,
        accentColor: item.accentColor,
        // Approximate creation timestamps based on relative string representation
        createdAt: getApproximateDate(item.time),
      })
      .returning();

    // 2. Insert tags and join relations
    for (const tagName of item.tags) {
      // Upsert tag
      let [dbTag] = await db
        .insert(tags)
        .values({ name: tagName })
        .onConflictDoNothing()
        .returning();

      // If conflict occurred, retrieve the existing tag
      if (!dbTag) {
        const [existingTag] = await db
          .select()
          .from(tags)
          .where(eq(tags.name, tagName))
          .limit(1);
        dbTag = existingTag;
      }

      if (dbTag) {
        // Link item to tag
        await db
          .insert(savedItemTags)
          .values({
            savedItemId: insertedItem.id,
            tagId: dbTag.id,
          })
          .onConflictDoNothing();
      }
    }
  }
}

// Convert mock-data time string like "2 min ago" to approximate Date objects
function getApproximateDate(timeStr: string): Date {
  const now = new Date();
  const lower = timeStr.toLowerCase();

  if (lower.includes("min")) {
    const mins = parseInt(lower) || 2;
    return new Date(now.getTime() - mins * 60 * 1000);
  }
  if (lower.includes("hour")) {
    const hours = parseInt(lower) || 1;
    return new Date(now.getTime() - hours * 60 * 60 * 1000);
  }
  if (lower.includes("yesterday")) {
    return new Date(now.getTime() - 24 * 60 * 60 * 1000);
  }
  if (lower.includes("day")) {
    const days = parseInt(lower) || 2;
    return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  }
  if (lower.includes("week")) {
    const weeks = parseInt(lower) || 1;
    return new Date(now.getTime() - weeks * 7 * 24 * 60 * 60 * 1000);
  }
  if (lower.includes("month")) {
    const months = parseInt(lower) || 1;
    return new Date(now.getTime() - months * 30 * 24 * 60 * 60 * 1000);
  }
  return now;
}

export async function getOrCreateUserSavedItems() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Fetch items for the user along with their associated tags
  let items = await db.query.savedItems.findMany({
    where: eq(savedItems.userId, userId),
    with: {
      savedItemTags: {
        with: {
          tag: true,
        },
      },
    },
    orderBy: (savedItems, { desc }) => [desc(savedItems.createdAt)],
  });

  // If new user, seed mock data first
  if (items.length === 0) {
    await seedUserMockData(userId);

    // Fetch again
    items = await db.query.savedItems.findMany({
      where: eq(savedItems.userId, userId),
      with: {
        savedItemTags: {
          with: {
            tag: true,
          },
        },
      },
      orderBy: (savedItems, { desc }) => [desc(savedItems.createdAt)],
    });
  }

  // Map database format to UI page format
  return items.map((item) => ({
    id: item.id.toString(),
    platform: item.platform,
    iconBg: item.iconBg,
    title: item.title,
    url: item.url,
    time: formatRelativeTime(item.createdAt),
    tags: item.savedItemTags.map((st) => st.tag.name),
    description: item.description,
    thumbnailGradient: item.thumbnailGradient,
    accentColor: item.accentColor ?? undefined,
  }));
}

export async function deleteSavedItem(id: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const itemId = parseInt(id);
  if (isNaN(itemId)) {
    throw new Error("Invalid ID");
  }

  // Delete the item (join records deleted automatically due to CASCADE constraint)
  await db
    .delete(savedItems)
    .where(and(eq(savedItems.id, itemId), eq(savedItems.userId, userId)));

  return { success: true };
}

// Convert Date object to relative time strings for frontend consumption
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHour < 24) return `${diffHour} ${diffHour === 1 ? "hour" : "hours"} ago`;
  if (diffDay === 1) return "Yesterday";
  if (diffDay < 7) return `${diffDay} days ago`;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

// Helper to extract YouTube video ID from URL
function extractYouTubeId(urlStr: string): string | null {
  try {
    const url = new URL(urlStr);
    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v");
    }
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace(/^\/|\/$/g, "");
    }
    return null;
  } catch (e) {
    return null;
  }
}

// Generate a cleaner, more descriptive title from the URL path
function extractDisplayTitle(urlStr: string, platform: string): string {
  try {
    const url = new URL(urlStr);
    const path = url.pathname.replace(/^\/|\/$/g, ""); // strip leading/trailing slashes
    
    if (!path) {
      return `Saved link from ${url.hostname}`;
    }

    if (platform === "YouTube") {
      const v = url.searchParams.get("v");
      return v ? `YouTube Video (ID: ${v})` : "Saved YouTube Video";
    }
    if (platform === "Twitter / X") {
      const parts = path.split("/");
      if (parts.length >= 3 && parts[1] === "status") {
        return `X Post by @${parts[0]}`;
      }
      return `X Profile: @${parts[0] || "User"}`;
    }
    if (platform === "GitHub") {
      return `GitHub Repo: ${path}`;
    }
    if (platform === "Medium") {
      const parts = path.split("/");
      const lastSegment = parts.pop() || "";
      const cleaned = lastSegment.replace(/-[a-f0-9]+$/, "").replace(/-/g, " ");
      if (cleaned) {
        return cleaned.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      }
      return "Medium Article";
    }
    if (platform === "Figma") {
      return "Figma Project Frame";
    }
    if (platform === "Spotify") {
      if (path.includes("episode/")) return "Spotify Podcast Episode";
      if (path.includes("show/")) return "Spotify Podcast Show";
      return "Spotify Track / Playlist";
    }

    // Default fallback
    const segments = path.split("/");
    const last = segments.pop();
    if (last) {
      const cleaned = last.replace(/[-_]/g, " ").replace(/\.[a-z]+$/i, "");
      if (cleaned.trim()) {
        return cleaned.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      }
    }
    return `Saved link from ${url.hostname}`;
  } catch (e) {
    return "Saved Link";
  }
}

// Parse details based on URL domain
export async function parseUrlDetails(urlStr: string) {
  let hostname = "";
  try {
    const parsed = new URL(urlStr);
    hostname = parsed.hostname.toLowerCase();
  } catch (e) {
    hostname = urlStr.toLowerCase();
  }

  let platform = "Article";
  let iconBg = "bg-violet-50/80 border border-violet-100 dark:bg-violet-950/20 dark:border-violet-900/30";
  let thumbnailGradient = "from-blue-500/20 via-indigo-500/20 to-purple-500/20";
  let accentColor = "#7C6AE8";
  let defaultTitle = "Saved Article";

  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
    platform = "YouTube";
    iconBg = "bg-red-50/80 border border-red-100 dark:bg-red-950/20 dark:border-red-900/30";
    thumbnailGradient = "from-red-500/20 via-pink-500/20 to-orange-500/20";
    accentColor = "#FF0000";
    defaultTitle = "YouTube Video";
  } else if (hostname.includes("twitter.com") || hostname.includes("x.com")) {
    platform = "Twitter / X";
    iconBg = "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800";
    thumbnailGradient = "from-gray-800/20 via-slate-700/20 to-zinc-900/20";
    accentColor = "#000000";
    defaultTitle = "Tweet / Thread";
  } else if (hostname.includes("instagram.com")) {
    platform = "Instagram";
    iconBg = "bg-pink-50/80 border border-pink-100 dark:bg-pink-950/20 dark:border-pink-900/30";
    thumbnailGradient = "from-purple-500/20 via-pink-500/20 to-yellow-500/20";
    accentColor = "#d6249f";
    defaultTitle = "Instagram Reel";
  } else if (hostname.includes("spotify.com")) {
    platform = "Spotify";
    iconBg = "bg-green-50/80 border border-green-100 dark:bg-green-950/20 dark:border-green-900/30";
    thumbnailGradient = "from-green-500/20 via-emerald-500/20 to-teal-500/20";
    accentColor = "#1DB954";
    defaultTitle = "Spotify Audio";
  } else if (hostname.includes("github.com")) {
    platform = "GitHub";
    iconBg = "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800";
    thumbnailGradient = "from-gray-700/20 via-slate-600/20 to-gray-800/20";
    accentColor = "#24292F";
    defaultTitle = "GitHub Repository";
  } else if (hostname.includes("figma.com")) {
    platform = "Figma";
    iconBg = "bg-purple-50/80 border border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30";
    thumbnailGradient = "from-purple-500/20 via-red-400/15 to-orange-400/15";
    accentColor = "#A259FF";
    defaultTitle = "Figma Frame";
  } else if (hostname.includes("medium.com")) {
    platform = "Medium";
    iconBg = "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800";
    thumbnailGradient = "from-stone-600/15 via-neutral-700/15 to-zinc-800/15";
    accentColor = "#000000";
    defaultTitle = "Medium Article";
  } else if (hostname.includes("substack.com")) {
    platform = "Substack";
    iconBg = "bg-orange-50/80 border border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30";
    thumbnailGradient = "from-orange-500/20 via-amber-400/15 to-yellow-400/15";
    accentColor = "#FF6719";
    defaultTitle = "Substack Newsletter";
  } else if (hostname.includes("notion.so") || hostname.includes("notion.site")) {
    platform = "Notion";
    iconBg = "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800";
    thumbnailGradient = "from-gray-400/15 via-slate-500/15 to-zinc-600/15";
    accentColor = "#000000";
    defaultTitle = "Notion Page";
  }

  // Generate readable title
  const title = extractDisplayTitle(urlStr, platform) || defaultTitle;

  return {
    platform,
    iconBg,
    thumbnailGradient,
    accentColor,
    title,
  };
}

export async function saveSavedItem(url: string, title: string, tagNames: string[]) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Parse URL details to resolve platform, etc.
  const details = await parseUrlDetails(url);

  const description = "AI synthesis pending...";

  // 1. Insert saved item record
  const [insertedItem] = await db
    .insert(savedItems)
    .values({
      userId,
      platform: details.platform,
      iconBg: details.iconBg,
      title: title.trim() || details.title,
      url,
      description,
      thumbnailGradient: details.thumbnailGradient,
      accentColor: details.accentColor,
    })
    .returning();

  // 2. Insert tags and join relations
  for (const tagName of tagNames) {
    const name = tagName.trim();
    if (!name) continue;

    // Upsert tag
    let [dbTag] = await db
      .insert(tags)
      .values({ name })
      .onConflictDoNothing()
      .returning();

    // If conflict occurred, retrieve the existing tag record
    if (!dbTag) {
      const [existingTag] = await db
        .select()
        .from(tags)
        .where(eq(tags.name, name))
        .limit(1);
      dbTag = existingTag;
    }

    if (dbTag) {
      // Link item to tag
      await db
        .insert(savedItemTags)
        .values({
          savedItemId: insertedItem.id,
          tagId: dbTag.id,
        })
        .onConflictDoNothing();
    }
  }

  // Return formatting consistent with getOrCreateUserSavedItems
  return {
    id: insertedItem.id.toString(),
    platform: insertedItem.platform,
    iconBg: insertedItem.iconBg,
    title: insertedItem.title,
    url: insertedItem.url,
    time: "Just now",
    tags: tagNames,
    description: insertedItem.description,
    thumbnailGradient: insertedItem.thumbnailGradient,
    accentColor: insertedItem.accentColor ?? undefined,
  };
}
