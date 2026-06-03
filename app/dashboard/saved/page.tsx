"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Clock,
  Tag,
  X,
  Bookmark,
  Trash2,
  Loader2,
} from "lucide-react";
import { getOrCreateUserSavedItems, deleteSavedItem } from "@/app/actions";
import { getPlatformIcon } from "@/lib/social-icons";

// Define the shape of items returned from Server Actions
interface SavedItem {
  id: string;
  platform: string;
  iconBg: string;
  title: string;
  url: string;
  time: string;
  tags: string[];
  description: string;
  thumbnailGradient: string;
  accentColor?: string;
}

// Client-side helper to dynamically resolve original link thumbnails on the fly
function getCardThumbnail(urlStr: string): string | null {
  try {
    const url = new URL(urlStr);
    const hostname = url.hostname.toLowerCase();
    if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
      let videoId = url.searchParams.get("v");
      if (!videoId && hostname.includes("youtu.be")) {
        videoId = url.pathname.replace(/^\/|\/$/g, "");
      }
      return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
    }
    if (hostname.includes("github.com")) {
      const pathParts = url.pathname.split("/").filter(Boolean);
      if (pathParts.length >= 2) {
        return `https://opengraph.githubassets.com/1/${pathParts[0]}/${pathParts[1]}`;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

/* ── Detail Modal (centered glassmorphism popup) ── */
function DetailModal({
  item,
  onClose,
  onDelete,
}: {
  readonly item: SavedItem;
  readonly onClose: () => void;
  readonly onDelete: (id: string) => Promise<void>;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const Icon = getPlatformIcon(item.platform);

  // Close on Esc key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close on click outside the card
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this link?")) {
      setIsDeleting(true);
      try {
        await onDelete(item.id);
      } catch (err) {
        console.error(err);
        alert("Failed to delete link.");
        setIsDeleting(false);
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm" />

      {/* Modal card */}
      <motion.div
        ref={dialogRef}
        className="relative z-10 w-full max-w-lg bg-card rounded-2xl border border-border-light overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border-light text-muted hover:text-foreground hover:bg-border-light transition-all cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Thumbnail Header */}
        <div
          className="relative h-44 border-b border-border-light flex items-center justify-center overflow-hidden"
        >
          {getCardThumbnail(item.url) ? (
            <img
              src={getCardThumbnail(item.url) || ""}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${item.thumbnailGradient}`} />
          )}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 bg-card/80 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-xl border border-border-light/70 flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {item.platform}
              </p>
              <p className="text-xs font-semibold text-foreground max-w-[180px] truncate mt-0.5">
                {item.title}
              </p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-5 max-h-[50vh] overflow-y-auto">
          {/* Title */}
          <h2 className="text-sm font-bold text-foreground leading-snug">
            {item.title}
          </h2>

          {/* AI Synthesis */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-3.5 rounded-full bg-accent" />
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                AI Synthesis
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Tag className="w-3 h-3 text-muted" />
              <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
                Tags
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-accent/8 text-accent border border-accent/15 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Source */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <ExternalLink className="w-3 h-3 text-muted" />
              <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
                Source
              </p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline underline-offset-2 font-medium break-all"
            >
              {item.url}
            </a>
          </div>

          {/* Timestamp */}
          <div className="flex items-center gap-1.5 text-xs text-muted pt-3 border-t border-border-light">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>Indexed {item.time}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="px-6 pb-6 flex gap-3 shrink-0">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 text-xs font-semibold disabled:opacity-50 transition-all duration-200 cursor-pointer"
            title="Delete this bookmark"
          >
            {isDeleting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Trash2 className="w-3.5 h-3.5" />
            )}
            <span>Delete</span>
          </button>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-foreground text-cream text-xs font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
          >
            Open Link
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Saved Items Page ── */
export default function SavedItemsPage() {
  const [items, setItems] = useState<SavedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load user saved links from Postgres on mount
  useEffect(() => {
    let active = true;
    async function loadData() {
      try {
        const fetchedItems = await getOrCreateUserSavedItems();
        if (active) {
          setItems(fetchedItems);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
    return () => {
      active = false;
    };
  }, []);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === selectedId) ?? null;
  }, [items, selectedId]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.platform.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [items, searchQuery]);

  const handleDeleteItem = async (id: string) => {
    await deleteSavedItem(id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedId(null);
  };

  return (
    <div className="h-full flex flex-col min-h-0 p-6 lg:p-8">
      {/* Page header */}
      <div className="flex items-center justify-between mb-5 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
            <Bookmark className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">
              Saved Items
            </h1>
            <p className="text-[10px] text-muted">
              {loading ? "Loading..." : `${items.length} links in your vault`}
            </p>
          </div>
        </div>
      </div>

      {/* Full-width list container */}
      <div className="flex-1 flex flex-col bg-card rounded-2xl border border-border-light overflow-hidden shadow-sm min-h-0">
        {/* Search bar header */}
        <div className="px-5 py-3.5 border-b border-border-light bg-border-light/30 shrink-0">
          <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3.5 py-2 focus-within:border-accent/40 focus-within:shadow-sm transition-all">
            <Search className="w-3.5 h-3.5 text-muted shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search saved links…"
              className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted/50 outline-none"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-0.5 rounded-full hover:bg-border-light transition-colors cursor-pointer"
                >
                  <X className="w-3 h-3 text-muted" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scrollable slim list / Loading skeleton */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="p-8 space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 animate-pulse">
                  <div className="w-8 h-8 bg-border-light/60 rounded-lg shrink-0" />
                  <div className="flex-1 h-4 bg-border-light/60 rounded-md" />
                  <div className="w-16 h-3 bg-border-light/60 rounded-md shrink-0" />
                </div>
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-xs text-muted">
                {searchQuery ? `No results for "${searchQuery}"` : "Your vault is empty."}
              </p>
            </div>
          ) : (
            filteredItems.map((item, i) => {
              const Icon = getPlatformIcon(item.platform);
              const isSelected = selectedId === item.id;
              return (
                <motion.button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 cursor-pointer group border-b border-border-light/50 last:border-b-0 ${isSelected
                      ? "bg-accent/5"
                      : "hover:bg-border-light/30"
                    }`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                >
                  {/* Platform icon — compact */}
                  <div
                    className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <p
                    className={`flex-1 text-[13px] font-medium truncate leading-snug transition-colors duration-150 ${isSelected
                        ? "text-accent"
                        : "text-foreground group-hover:text-accent"
                      }`}
                  >
                    {item.title}
                  </p>

                  {/* Platform badge + date — right aligned */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[9px] font-bold text-muted uppercase tracking-wide hidden sm:inline">
                      {item.platform}
                    </span>
                    <span className="text-[9px] text-muted/60 hidden md:inline">
                      {item.time}
                    </span>
                  </div>
                </motion.button>
              );
            })
          )}
        </div>
      </div>

      {/* Detail popup modal */}
      <AnimatePresence>
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            onClose={() => setSelectedId(null)}
            onDelete={handleDeleteItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
