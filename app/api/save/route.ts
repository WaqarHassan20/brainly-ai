import { NextResponse } from "next/server";
import { db, savedItems, tags, savedItemTags } from "@/lib/db";
import { eq } from "drizzle-orm";
import { parseUrlDetails } from "@/app/actions";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    let userId: string | null = null;

    // 1. Try to get userId from Clerk cookies/session first
    const { userId: clerkUserId } = await auth();
    userId = clerkUserId;

    // 2. Fallback to Authorization header if Clerk session is not active
    if (!userId) {
      const authHeader = request.headers.get("authorization");
      if (authHeader?.startsWith("Bearer ")) {
        const key = authHeader.substring(7).trim();
        if (key.startsWith("user_")) {
          userId = key;
        }
      }
    }

    if (!userId) {
      const response = NextResponse.json(
        { error: "Unauthorized. Please login or provide a valid Sync Key." },
        { status: 401 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      return response;
    }

    const body = await request.json();
    const { url, title, tags: tagNames = [] } = body;

    if (!url || !title) {
      const response = NextResponse.json(
        { error: "URL and Title are mandatory fields." },
        { status: 400 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      return response;
    }

    // Parse URL details to resolve platform, iconBg, gradients, etc.
    const details = await parseUrlDetails(url);
    const description = "AI synthesis pending...";

    // 1. Insert saved item record
    const [insertedItem] = await db
      .insert(savedItems)
      .values({
        userId,
        platform: details.platform,
        iconBg: details.iconBg,
        title: title.trim(),
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

      // If conflict occurred, retrieve existing tag
      if (!dbTag) {
        const [existingTag] = await db
          .select()
          .from(tags)
          .where(eq(tags.name, name))
          .limit(1);
        dbTag = existingTag;
      }

      if (dbTag) {
        await db
          .insert(savedItemTags)
          .values({
            savedItemId: insertedItem.id,
            tagId: dbTag.id,
          })
          .onConflictDoNothing();
      }
    }

    const response = NextResponse.json({ success: true, item: insertedItem });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
  } catch (error: any) {
    console.error("API Save Link Error:", error);
    const response = NextResponse.json(
      { error: error.message || "Failed to save link." },
      { status: 500 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  }
}

// Support CORS preflight
export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return new NextResponse(null, { status: 204, headers });
}
