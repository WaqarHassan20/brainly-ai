"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link2,
  Plus,
  X,
  Search,
  ExternalLink,
  Clock,
  Tag,
  Grid,
  Columns,
} from "lucide-react";

/* ── High-Fidelity SVG Brand Icons ── */
function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.047 0 12 0 12s0 3.953.502 5.837a3.002 3.002 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.953 24 12 24 12s0-3.953-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="url(#ig-grad-page-fixed)">
      <defs>
        <radialGradient id="ig-grad-page-fixed" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function SpotifyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1DB954">
      <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.494 17.308c-.218.358-.683.473-1.04.254-2.906-1.777-6.563-2.179-10.87-1.193-.41.094-.82-.164-.914-.574-.094-.41.164-.82.574-.914 4.708-1.077 8.736-.62 11.996 1.378.357.218.472.682.254 1.04zm1.467-3.262c-.275.447-.86.593-1.307.318-3.326-2.044-8.397-2.636-12.33-1.441-.5.152-1.03-.131-1.182-.63-.152-.5.131-1.03.63-1.182 4.494-1.365 10.076-.708 13.87 1.621.447.275.593.86.319 1.314zm.126-3.416C15.022 8.16 8.32 7.938 4.437 9.117a1.14 1.14 0 0 1-1.37-.822c-.173-.574.156-1.181.73-1.353 4.453-1.353 11.854-1.096 16.544 1.685a1.14 1.14 0 0 1-.39 2.146 1.127 1.127 0 0 1-.865-.263z" />
    </svg>
  );
}

function WebGlobeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7C6AE8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* ── Types ── */
interface SavedItem {
  id: string;
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  title: string;
  url: string;
  time: string;
  tags: string[];
  description: string;
  thumbnailGradient: string;
}

/* ── Mock Data ── */
const recentItems: SavedItem[] = [
  {
    id: "1",
    platform: "YouTube",
    icon: YouTubeIcon,
    iconBg: "bg-red-50/80 border border-red-100",
    title: "Andrew Huberman: Master Focus & Cognitive Stamina",
    url: "https://youtube.com/watch?v=abc123",
    time: "2 min ago",
    tags: ["Neuroscience", "Productivity"],
    description:
      "Dr. Huberman explores the science of focus, discussing how optical focus directly signals norepinephrine pathways. Covers techniques for cognitive stamina including deliberate cold exposure, non-sleep deep rest protocols, and visual focus exercises.",
    thumbnailGradient: "from-red-500/20 via-pink-500/20 to-orange-500/20",
  },
  {
    id: "2",
    platform: "Twitter / X",
    icon: XIcon,
    iconBg: "bg-gray-50 border border-gray-200",
    title: "Marc Andreessen: Framework for executing startup ideas",
    url: "https://x.com/pmarca/status/123456",
    time: "1 hour ago",
    tags: ["Startups", "Strategy"],
    description:
      "A thread on execution-first startup strategy. Key insight: execution speed is the #1 predictor of startup success. Covers daily shipping habits, team velocity metrics, and the importance of founder-led sales in early stages.",
    thumbnailGradient: "from-gray-800/20 via-slate-700/20 to-zinc-900/20",
  },
  {
    id: "3",
    platform: "Instagram",
    icon: InstagramIcon,
    iconBg: "bg-pink-50/80 border border-pink-100",
    title: "Morning routine checklist reel for peak performance",
    url: "https://instagram.com/reel/xyz789",
    time: "3 hours ago",
    tags: ["Habits", "Mindset"],
    description:
      "A popular reel outlining a 5-step morning framework: 10 min sunlight exposure, cold shower, journaling with intentions, 90-min deep work block, and movement. Backed by research from Huberman Lab.",
    thumbnailGradient: "from-purple-500/20 via-pink-500/20 to-yellow-500/20",
  },
  {
    id: "4",
    platform: "Spotify",
    icon: SpotifyIcon,
    iconBg: "bg-green-50/80 border border-green-100",
    title: "Lex Fridman: The future of AI and consciousness",
    url: "https://open.spotify.com/episode/456def",
    time: "Yesterday",
    tags: ["AI", "Philosophy"],
    description:
      "Episode covering the boundaries of artificial general intelligence, the hard problem of consciousness, and whether AI systems could ever develop subjective experience. Features discussion with a leading neuroscientist.",
    thumbnailGradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  },
  {
    id: "5",
    platform: "Article",
    icon: WebGlobeIcon,
    iconBg: "bg-blue-50/80 border border-blue-100",
    title: "How to build a second brain — step by step guide",
    url: "https://fortelabs.com/second-brain",
    time: "2 days ago",
    tags: ["Learning", "PKM"],
    description:
      "Comprehensive guide to the PARA method (Projects, Areas, Resources, Archives) for organizing digital knowledge. Covers progressive summarization, intermediate packets, and how to build a personal knowledge management system.",
    thumbnailGradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    id: "6",
    platform: "YouTube",
    icon: YouTubeIcon,
    iconBg: "bg-red-50/80 border border-red-100",
    title: "Next.js 16 Super-resolution rendering structures",
    url: "https://youtube.com/watch?v=next16dev",
    time: "3 days ago",
    tags: ["NextJS", "React"],
    description:
      "A deep dive session showcasing the breaking-edge streaming server component architectures in Next.js 16, partial hydration rendering paths, dynamic parallel slots, and CSS subgrid layout integrations.",
    thumbnailGradient: "from-rose-500/20 via-orange-500/20 to-amber-500/20",
  },
  {
    id: "7",
    platform: "Spotify",
    icon: SpotifyIcon,
    iconBg: "bg-green-50/80 border border-green-100",
    title: "The Joe Rogan Experience: Naval Ravikant talks leverage",
    url: "https://open.spotify.com/episode/navalr",
    time: "4 days ago",
    tags: ["Wealth", "Leverage"],
    description:
      "Naval discusses how technology provides permissionless leverage (code and media). Explainers on the modern digital economy, intellectual curiosity, specific knowledge, and building judgment over hard work.",
    thumbnailGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    id: "8",
    platform: "Twitter / X",
    icon: XIcon,
    iconBg: "bg-gray-50 border border-gray-200",
    title: "Karpathy: Let's build a GPT tokeniser from scratch",
    url: "https://x.com/karpathy/status/987654",
    time: "Last week",
    tags: ["AI", "LLMs"],
    description:
      "Andrej Karpathy shares code examples and video guides to constructing a fully functional Byte Pair Encoding (BPE) tokenizer used in GPT models. Covers vocabulary sizes, token representation, and encoding/decoding mechanics.",
    thumbnailGradient: "from-slate-600/20 via-zinc-700/20 to-stone-800/20",
  },
  {
    id: "9",
    platform: "Article",
    icon: WebGlobeIcon,
    iconBg: "bg-blue-50/80 border border-blue-100",
    title: "The complete guide to CSS flexbox layouts",
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox",
    time: "10 days ago",
    tags: ["CSS", "Frontend"],
    description:
      "The definitive reference guide to using CSS Flexbox. Illustrates align-items, justify-content, flex-shrink, and flex-basis mechanics. Indispensable for web layout engineering.",
    thumbnailGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: "10",
    platform: "Instagram",
    icon: InstagramIcon,
    iconBg: "bg-pink-50/80 border border-pink-100",
    title: "Mindfulness and neural breath work reels",
    url: "https://instagram.com/reel/breathwork",
    time: "2 weeks ago",
    tags: ["Mindfulness", "Health"],
    description:
      "A quick video showing how box breathing (4s inhale, 4s hold, 4s exhale, 4s hold) lowers active heart rate, regulates systemic blood pressure, and instantly relieves acute nervous anxiety.",
    thumbnailGradient: "from-amber-500/20 via-yellow-500/20 to-orange-500/20",
  },
];

/* ── Centered Save Link Form ── */
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
    <div className="w-full space-y-4.5">
      <div className="flex items-center gap-2 justify-center">
        <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
          <Link2 className="w-3.5 h-3.5 text-accent" />
        </div>
        <h2 className="text-sm font-semibold text-foreground">Save a Link</h2>
      </div>

      {/* URL input */}
      <div className="flex items-center gap-2 bg-cream/60 border border-border-light rounded-xl px-3 py-2.5 focus-within:border-accent/30 focus-within:bg-white transition-all mb-2.5">
        <Link2 className="w-3.5 h-3.5 text-muted shrink-0" />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL to save…"
          className="flex-1 bg-transparent text-xs text-foreground placeholder:text-gray-400 outline-none"
        />
      </div>

      {/* Tags input */}
      <div className="bg-cream/60 border border-border-light rounded-xl px-3 py-2.5 focus-within:border-accent/30 focus-within:bg-white transition-all mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="w-3.5 h-3.5 text-muted shrink-0" />
          <AnimatePresence mode="popLayout">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                layout
                className="inline-flex items-center gap-1 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/15"
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
            className="flex-1 min-w-[100px] bg-transparent text-xs text-foreground placeholder:text-gray-400 outline-none"
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

      {/* Save button - Centric and smaller in widthwise */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={handleSave}
          disabled={!url.trim() || isSaving}
          className="px-8 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-foreground text-white hover:bg-gray-800 hover:shadow-md active:scale-[0.98] cursor-pointer min-w-[180px] text-center"
        >
          {isSaving ? (
            <span className="inline-flex items-center justify-center gap-2">
              <motion.span
                className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full inline-block"
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

/* ── Selected Card Detail Panel ── */
function DetailPanel({ item }: { readonly item: SavedItem | null }) {
  if (!item) {
    return (
      <motion.div
        className="bg-white rounded-2xl border border-border-light p-8 flex flex-col items-center justify-center text-center h-[495px] min-h-[495px] shadow-sm shadow-black/[0.01]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-4">
          <Link2 className="w-6 h-6 text-muted" />
        </div>
        <p className="text-sm font-medium text-foreground mb-1">No link selected</p>
        <p className="text-xs text-muted leading-relaxed max-w-[200px]">
          Click on a link from recent saves to view its full interactive detail card.
        </p>
      </motion.div>
    );
  }

  const Icon = item.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.id}
        // Fixed premium height of h-[495px] prevents bottom white space and fits details perfectly
        className="bg-white rounded-2xl border border-accent/25 overflow-hidden shadow-2xl shadow-accent/15 relative h-[495px] min-h-[495px] flex flex-col"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Beautiful visual top thumbnail - increased height to h-64 to stretch downward */}
        <div className={`h-64 bg-gradient-to-tr ${item.thumbnailGradient} relative flex items-center justify-center border-b border-border-light shrink-0`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 flex items-center gap-3 scale-110">
            <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-accent uppercase tracking-wider">
                {item.platform}
              </p>
              <p className="text-[11px] font-medium text-foreground max-w-[150px] truncate mt-0.5">
                {item.title}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable details section at bottom - max-h-225px fits synthesis, source, and tags perfectly without scroll bar in normal states */}
        <div className="p-5 space-y-4 flex-1 overflow-y-auto max-h-[225px] min-h-0">
          <div>
            <p className="text-[10px] font-bold text-accent uppercase tracking-wide mb-1.5">
              AI Synthesis
            </p>
            <p className="text-xs text-foreground/80 leading-relaxed font-sans">
              {item.description}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-accent uppercase tracking-wide mb-2">
              Source
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline break-all font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              {item.url}
            </a>
          </div>

          <div>
            <p className="text-[10px] font-bold text-accent uppercase tracking-wide mb-2">
              Tags
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-accent/8 text-accent border border-accent/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted pt-2 border-t border-border-light/60">
            <Clock className="w-3.5 h-3.5" />
            <span>Indexed {item.time}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Interactive Grid Card for Grid View ── */
function GridCard({
  item,
  isSelected,
  onClick,
}: {
  readonly item: SavedItem;
  readonly isSelected: boolean;
  readonly onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`bg-white text-left rounded-2xl border overflow-hidden shadow-md shadow-black/[0.02] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative flex flex-col h-[280px] w-full cursor-pointer group ${isSelected ? "border-accent shadow-lg shadow-accent/10 ring-1 ring-accent/30" : "border-border-light hover:border-accent/25"
        }`}
      layout
    >
      {/* Thumbnail Gradient Section at Top */}
      <div className={`h-24 bg-gradient-to-tr ${item.thumbnailGradient} relative flex items-center justify-center border-b border-border-light shrink-0 w-full`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-white/60 flex items-center gap-2 scale-100">
          <div className={`w-7.5 h-7.5 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
            <Icon className="w-4.5 h-4.5" />
          </div>
          <div className="text-left">
            <p className="text-[9px] font-bold text-accent uppercase tracking-wider">
              {item.platform}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 w-full min-h-0">
        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-foreground line-clamp-2 leading-snug">
            {item.title}
          </h3>
          <p className="text-[11px] text-muted line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Card Footer tags and sources */}
        <div className="space-y-2 pt-2 border-t border-border-light/80 w-full shrink-0">
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-accent/8 text-accent border border-accent/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 text-[10px] text-muted w-full">
            <span className="truncate max-w-[100px]">{item.url}</span>
            <span className="shrink-0">{item.time}</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ── Main Page ── */
export default function DashboardPage() {
  const [selectedId, setSelectedId] = useState<string | null>("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"split" | "grid">("split");

  const selectedItem = recentItems.find((item) => item.id === selectedId) ?? null;

  const filteredItems = useMemo(() => {
    return recentItems.filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.platform.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  return (
    <div className="h-full flex flex-col min-h-0 p-6 lg:p-8 space-y-6 overflow-hidden">
      {/* Main content grid - stretches fully with no headers above */}
      <div className="grid lg:grid-cols-5 gap-6 flex-1 min-h-0 overflow-hidden">
        {/* Recent saves Box — Always keeps lg:col-span-3 for structural stability */}
        <motion.div
          className="lg:col-span-3 h-full flex flex-col bg-white rounded-2xl border border-border-light overflow-hidden shadow-md shadow-black/[0.02] transition-all duration-300"
          layout
        >
          {/* Header section with layout toggle view switch */}
          <div className="px-6 py-4 border-b border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50/50 shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold text-foreground shrink-0">
                Recent Saves
              </h2>
              {/* Layout view toggle buttons */}
              <div className="flex items-center bg-cream border border-border-light rounded-lg p-0.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("split")}
                  className={`p-1.5 rounded-md transition-all ${viewMode === "split"
                    ? "bg-white text-accent shadow-sm"
                    : "text-muted hover:text-foreground"
                    }`}
                  title="Split View"
                >
                  <Columns className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition-all ${viewMode === "grid"
                    ? "bg-white text-accent shadow-sm"
                    : "text-muted hover:text-foreground"
                    }`}
                  title="Grid Card View"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Inline search bar */}
            <div className="flex items-center gap-2 bg-white border border-border-light rounded-xl px-3 py-1.5 max-w-xs w-full focus-within:border-accent/30 transition-all">
              <Search className="w-3.5 h-3.5 text-muted shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search saved links…"
                className="flex-1 bg-transparent text-xs text-foreground placeholder:text-gray-400 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-0.5 rounded-full hover:bg-gray-100"
                >
                  <X className="w-3 text-muted" />
                </button>
              )}
            </div>
          </div>

          {/* Conditional Layout Rendering - list section is scrollable inside its parent box */}
          <div className="flex-1 min-h-0 overflow-y-auto max-h-[calc(100vh-170px)] lg:max-h-[calc(100vh-170px)]">
            {viewMode === "split" ? (
              /* Standard split layout list view */
              <div className="divide-y divide-border-light">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-xs text-muted">
                    No saved links found matching &quot;{searchQuery}&quot;.
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
                        className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors cursor-pointer group/item ${isSelected
                          ? "bg-accent/5 border-l-4 border-l-accent"
                          : "hover:bg-cream/40 border-l-4 border-l-transparent"
                          }`}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                      >
                        {/* High-fidelity Brand SVG Icon */}
                        <div
                          className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-200 shadow-sm`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-semibold truncate transition-colors ${isSelected ? "text-foreground font-bold" : "text-foreground group-hover/item:text-accent"
                              }`}
                          >
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-bold text-muted uppercase tracking-wide">
                              {item.platform}
                            </span>
                            <span className="text-[10px] text-gray-300">•</span>
                            <span className="text-[10px] text-muted">{item.time}</span>
                          </div>
                        </div>

                        {/* Inline Tag List */}
                        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-accent/8 text-accent border border-accent/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.button>
                    );
                  })
                )}
              </div>
            ) : (
              /* Grid view of beautiful cards inside the saves box only, keeping dashboard layout identical! */
              <div className="p-5 overflow-y-auto max-h-[calc(100vh-170px)]">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-xs text-muted">
                    No saved links found matching &quot;{searchQuery}&quot;.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredItems.map((item) => (
                      <GridCard
                        key={item.id}
                        item={item}
                        isSelected={selectedId === item.id}
                        onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Right column — Add link input card (Upper) + Selected detail card (Lower) */}
        <div className="lg:col-span-2 h-full flex flex-col gap-6 min-h-0">
          {/* Upper: SaveLinkForm Card - with expanded p-7 padding and vertical margin to make it stretch downward */}
          <div className="shrink-0 bg-white rounded-2xl border border-border-light p-7 shadow-md shadow-black/[0.02]">
            <SaveLinkForm />
          </div>

          {/* Lower: DetailPanel Card */}
          <div className="flex-1 min-h-0">
            <DetailPanel item={selectedItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
