"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link2,
  Plus,
  X,
  Search,
  ExternalLink,
  Tag,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { recentItems } from "@/lib/mock-data";
import type { SavedItem } from "@/lib/mock-data";

/* ── Save Link Form ── */
function SaveLinkForm() {
  const [url, setUrl] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const addTag = useCallback(() => {
    const trimmed = tagInput.trim().replace(/^#/, "");
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
      setTagInput("");
    }
  }, [tagInput, tags]);

  const removeTag = useCallback((tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
    if (e.key === "Backspace" && tagInput === "" && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  const handleSave = () => {
    if (!url.trim()) return;
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setUrl("");
      setTags([]);
    }, 1200);
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 justify-center mb-5">
        <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        <div className="text-left">
          <h2 className="text-sm font-bold text-foreground">Save to your Vault</h2>
          <p className="text-[10px] text-muted">AI will index and synthesize it instantly</p>
        </div>
      </div>

      {/* URL input */}
      <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 focus-within:border-accent/40 focus-within:bg-white focus-within:shadow-sm transition-all">
        <Link2 className="w-4 h-4 text-muted shrink-0" />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL — YouTube, X, article, podcast…"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-gray-400 outline-none"
        />
      </div>

      {/* Tags input */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-accent/40 focus-within:bg-white focus-within:shadow-sm transition-all">
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="w-3.5 h-3.5 text-muted shrink-0" />
          <AnimatePresence mode="popLayout">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                layout
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:bg-accent/20 rounded-full p-0.5 transition-colors"
                  aria-label={`Remove tag ${tag}`}
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? "Add tags (press Enter)…" : "Add more…"}
            className="flex-1 min-w-[120px] bg-transparent text-sm text-foreground placeholder:text-gray-400 outline-none"
          />
          {tagInput.trim() && (
            <button
              type="button"
              onClick={addTag}
              className="p-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              aria-label="Add tag"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-center pt-1">
        <button
          type="button"
          onClick={handleSave}
          disabled={!url.trim() || isSaving}
          className="px-10 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-foreground text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-black/10 active:scale-[0.97] cursor-pointer min-w-[200px] text-center"
        >
          {isSaving ? (
            <span className="inline-flex items-center justify-center gap-2">
              <motion.span
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              Saving…
            </span>
          ) : (
            "Save to Vault"
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Premium Grid Card ── */
function PremiumCard({ item, index }: { readonly item: SavedItem; readonly index: number }) {
  const Icon = item.icon;
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)",
      }}
    >
      {/* ── Gradient thumbnail header ── */}
      <div
        className={`relative h-28 bg-gradient-to-br ${item.thumbnailGradient} border-b border-gray-100/80 flex items-center justify-center overflow-hidden shrink-0`}
      >
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Glassmorphic platform badge */}
        <div className="relative z-10 bg-white/75 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border border-white/60 flex items-center gap-2.5 group-hover:scale-105 transition-transform duration-300">
          <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
            {item.platform}
          </span>
        </div>
        {/* Hover glow overlay */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
      </div>

      {/* ── Card body ── */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        {/* Title + description */}
        <div className="space-y-1.5 flex-1">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-accent transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* ── Card footer ── */}
        <div className="space-y-2.5 pt-3 border-t border-gray-100">
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-accent/8 text-accent border border-accent/15 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Metadata row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <ExternalLink className="w-3 h-3 shrink-0" />
              <span className="truncate max-w-[110px]">{new URL(item.url).hostname}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 shrink-0">
              <Clock className="w-3 h-3" />
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent border that slides in on hover */}
      <div className="h-0.5 bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
    </motion.a>
  );
}

/* ── Main Overview Page ── */
export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase();
    if (!q) return recentItems;
    return recentItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.platform.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="h-full flex flex-col min-h-0 overflow-y-auto">
      <div className="flex-1 px-6 lg:px-10 py-8 space-y-10 max-w-7xl mx-auto w-full">

        {/* ── SECTION 1: Centered Save Link Form ── */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
            <SaveLinkForm />
          </div>
        </motion.div>

        {/* ── SECTION 2: Saved Links Grid ── */}
        <div className="space-y-5">
          {/* Section header */}
          <motion.div
            className="flex items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground leading-tight">
                  Your Saved Links
                </h2>
                <p className="text-[10px] text-muted">
                  {filteredItems.length} of {recentItems.length} links
                </p>
              </div>
            </div>

            {/* Inline search bar */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3.5 py-2 max-w-xs w-full focus-within:border-accent/40 focus-within:shadow-sm transition-all shadow-sm">
              <Search className="w-3.5 h-3.5 text-muted shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search saved vault…"
                className="flex-1 bg-transparent text-xs text-foreground placeholder:text-gray-400 outline-none"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-0.5 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-3 h-3 text-muted" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Cards grid */}
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-foreground">No results found</p>
              <p className="text-xs text-muted mt-1">
                No saved links match &quot;{searchQuery}&quot;
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item, i) => (
                <PremiumCard key={item.id} item={item} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* Bottom padding */}
        <div className="pb-4" />
      </div>
    </div>
  );
}
