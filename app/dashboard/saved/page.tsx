"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link2,
  Search,
  ExternalLink,
  Clock,
  Tag,
  X,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import { recentItems } from "@/lib/mock-data";
import type { SavedItem } from "@/lib/mock-data";

/* ── Detail Panel (Right Column) ── */
function DetailPanel({ item }: { readonly item: SavedItem | null }) {
  if (!item) {
    return (
      <motion.div
        className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center justify-center text-center h-full min-h-[500px] shadow-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
          <Bookmark className="w-7 h-7 text-gray-300" />
        </div>
        <p className="text-sm font-semibold text-foreground mb-1.5">Select a saved link</p>
        <p className="text-xs text-muted leading-relaxed max-w-[200px]">
          Click any link from the list to preview its details and AI synthesis here.
        </p>
      </motion.div>
    );
  }

  const Icon = item.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.id}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col h-full"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -12 }}
        transition={{ duration: 0.28 }}
      >
        {/* ── Thumbnail Header ── */}
        <div
          className={`relative h-56 bg-gradient-to-br ${item.thumbnailGradient} border-b border-gray-100 flex items-center justify-center overflow-hidden shrink-0`}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Platform badge */}
          <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-xl border border-white/70 flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {item.platform}
              </p>
              <p className="text-xs font-semibold text-foreground max-w-[160px] truncate mt-0.5">
                {item.title}
              </p>
            </div>
          </div>
        </div>

        {/* ── Details ── */}
        <div className="p-6 space-y-5 flex-1 overflow-y-auto">
          {/* Title */}
          <div>
            <h2 className="text-sm font-bold text-foreground leading-snug">
              {item.title}
            </h2>
          </div>

          {/* AI Synthesis */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-3.5 rounded-full bg-accent" />
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                AI Synthesis
              </p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
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
          <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-3 border-t border-gray-100">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>Indexed {item.time}</span>
          </div>
        </div>

        {/* Open link CTA */}
        <div className="px-6 pb-6 shrink-0">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-foreground text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
          >
            Open Link
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Saved Items Page ── */
export default function SavedItemsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(recentItems[0]?.id ?? null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedItem = recentItems.find((item) => item.id === selectedId) ?? null;

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
    <div className="h-full flex flex-col min-h-0 p-6 lg:p-8">
      {/* ── Page header ── */}
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
            <Bookmark className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">Saved Items</h1>
            <p className="text-[10px] text-muted">{recentItems.length} links in your vault</p>
          </div>
        </div>
      </div>

      {/* ── 3:2 Split grid ── */}
      <div className="grid lg:grid-cols-5 gap-6 flex-1 min-h-0 overflow-hidden">

        {/* ── Left: Saved Items List (col-span-3 = 60%) ── */}
        <div className="lg:col-span-3 flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

          {/* Search bar header */}
          <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/60 shrink-0">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3.5 py-2 focus-within:border-accent/40 focus-within:shadow-sm transition-all">
              <Search className="w-3.5 h-3.5 text-muted shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search saved links…"
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
          </div>

          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {filteredItems.length === 0 ? (
              <div className="p-10 text-center">
                <p className="text-xs text-muted">No results for &quot;{searchQuery}&quot;</p>
              </div>
            ) : (
              filteredItems.map((item, i) => {
                const Icon = item.icon;
                const isSelected = selectedId === item.id;
                return (
                  <motion.button
                    type="button"
                    key={item.id}
                    onClick={() => setSelectedId(isSelected ? null : item.id)}
                    className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 cursor-pointer group relative ${
                      isSelected
                        ? "bg-accent/5 border-l-[3px] border-l-accent"
                        : "hover:bg-gray-50/80 border-l-[3px] border-l-transparent"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                  >
                    {/* Platform icon */}
                    <div
                      className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-semibold truncate leading-snug transition-colors duration-150 ${
                          isSelected
                            ? "text-accent"
                            : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wide">
                          {item.platform}
                        </span>
                        <span className="text-[10px] text-gray-300">•</span>
                        <span className="text-[10px] text-gray-400">{item.time}</span>
                      </div>
                      {/* Inline tags */}
                      <div className="flex items-center gap-1 mt-1.5">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-accent/8 text-accent border border-accent/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right chevron */}
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                        isSelected
                          ? "text-accent opacity-100"
                          : "text-gray-300 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </motion.button>
                );
              })
            )}
          </div>
        </div>

        {/* ── Right: Detail Panel (col-span-2 = 40%) ── */}
        <div className="lg:col-span-2 h-full min-h-0 flex flex-col">
          {selectedItem ? (
            <DetailPanel item={selectedItem} />
          ) : (
            <motion.div
              className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center justify-center text-center h-full min-h-[500px] shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
                <Link2 className="w-7 h-7 text-gray-300" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1.5">Select a saved link</p>
              <p className="text-xs text-muted leading-relaxed max-w-[200px]">
                Click any link from the list to preview its details and AI synthesis here.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
