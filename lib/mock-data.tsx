import * as React from "react";

/* ── High-Fidelity SVG Brand Icons ── */
export function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.047 0 12 0 12s0 3.953.502 5.837a3.002 3.002 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.953 24 12 24 12s0-3.953-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="url(#ig-grad-shared)">
      <defs>
        <radialGradient id="ig-grad-shared" cx="30%" cy="107%" r="150%">
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

export function SpotifyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1DB954">
      <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.494 17.308c-.218.358-.683.473-1.04.254-2.906-1.777-6.563-2.179-10.87-1.193-.41.094-.82-.164-.914-.574-.094-.41.164-.82.574-.914 4.708-1.077 8.736-.62 11.996 1.378.357.218.472.682.254 1.04zm1.467-3.262c-.275.447-.86.593-1.307.318-3.326-2.044-8.397-2.636-12.33-1.441-.5.152-1.03-.131-1.182-.63-.152-.5.131-1.03.63-1.182 4.494-1.365 10.076-.708 13.87 1.621.447.275.593.86.319 1.314zm.126-3.416C15.022 8.16 8.32 7.938 4.437 9.117a1.14 1.14 0 0 1-1.37-.822c-.173-.574.156-1.181.73-1.353 4.453-1.353 11.854-1.096 16.544 1.685a1.14 1.14 0 0 1-.39 2.146 1.127 1.127 0 0 1-.865-.263z" />
    </svg>
  );
}

export function WebGlobeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7C6AE8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#24292F">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
    </svg>
  );
}

export function MediumIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export function SubstackIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF6719">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

export function NotionIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M4.46 2.128c.395-.29 1.144-.616 1.94-.788 1.97-.432 5.08-.85 9.07-.88 2.062-.016 3.655.22 4.394.593.447.227.65.65.65 1.34v15.932c0 .48-.12.875-.38 1.144-.265.263-.664.388-1.222.388-.344 0-.853-.083-1.5-.246l-4.143-.996c-1.343-.326-2.793-.578-4.29-.738L4.316 19.34c-.394.045-.694.07-.905.07-.48 0-.834-.146-1.077-.45-.246-.307-.373-.83-.373-1.57V3.53c0-.462.106-.822.324-1.085.222-.266.574-.413 1.056-.45l1.12-.083v.216zm11.758 1.95v11.89l-5.69-8.47c-.286-.44-.672-.733-1.145-.87-.384-.117-.912-.178-1.597-.178-.507 0-.916.058-1.218.172v12.2l1.643.123V6.262l5.772 8.595c.29.435.688.72 1.18.847.387.094.887.142 1.488.142.348 0 .66-.027.93-.075V3.882l-2.363.196z" />
    </svg>
  );
}

/* ── Types ── */
export interface SavedItem {
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
  accentColor?: string;
}

/* ── Expanded Mock Data (15 items) ── */
export const recentItems: SavedItem[] = [
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
    accentColor: "#FF0000",
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
    accentColor: "#000000",
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
    accentColor: "#d6249f",
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
    accentColor: "#1DB954",
  },
  {
    id: "5",
    platform: "Article",
    icon: WebGlobeIcon,
    iconBg: "bg-violet-50/80 border border-violet-100",
    title: "How to build a second brain — step by step guide",
    url: "https://fortelabs.com/second-brain",
    time: "2 days ago",
    tags: ["Learning", "PKM"],
    description:
      "Comprehensive guide to the PARA method (Projects, Areas, Resources, Archives) for organizing digital knowledge. Covers progressive summarization, intermediate packets, and how to build a personal knowledge management system.",
    thumbnailGradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    accentColor: "#7C6AE8",
  },
  {
    id: "6",
    platform: "YouTube",
    icon: YouTubeIcon,
    iconBg: "bg-red-50/80 border border-red-100",
    title: "Next.js 15 Super-resolution rendering structures",
    url: "https://youtube.com/watch?v=next15dev",
    time: "3 days ago",
    tags: ["NextJS", "React"],
    description:
      "A deep dive session showcasing the breaking-edge streaming server component architectures in Next.js 15, partial hydration rendering paths, dynamic parallel slots, and CSS subgrid layout integrations.",
    thumbnailGradient: "from-rose-500/20 via-orange-500/20 to-amber-500/20",
    accentColor: "#FF0000",
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
    accentColor: "#1DB954",
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
    accentColor: "#000000",
  },
  {
    id: "9",
    platform: "Article",
    icon: WebGlobeIcon,
    iconBg: "bg-violet-50/80 border border-violet-100",
    title: "The complete guide to CSS flexbox layouts",
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox",
    time: "10 days ago",
    tags: ["CSS", "Frontend"],
    description:
      "The definitive reference guide to using CSS Flexbox. Illustrates align-items, justify-content, flex-shrink, and flex-basis mechanics. Indispensable for web layout engineering.",
    thumbnailGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    accentColor: "#7C6AE8",
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
    accentColor: "#d6249f",
  },
  {
    id: "11",
    platform: "GitHub",
    icon: GithubIcon,
    iconBg: "bg-gray-50 border border-gray-200",
    title: "Tailwind Labs: Headless UI v2.0 component library",
    url: "https://github.com/tailwindlabs/headlessui",
    time: "2 weeks ago",
    tags: ["Open Source", "React"],
    description:
      "Headless UI v2.0 is fully unstyled, accessible UI components for React and Vue. The v2.0 release adds built-in anchor positioning (via Floating UI), checkbox, radio group, and combobox improvements with virtual scrolling support.",
    thumbnailGradient: "from-gray-700/20 via-slate-600/20 to-gray-800/20",
    accentColor: "#24292F",
  },
  {
    id: "12",
    platform: "Medium",
    icon: MediumIcon,
    iconBg: "bg-gray-50 border border-gray-200",
    title: "Designing for AI: UX Patterns and best practices in 2025",
    url: "https://medium.com/@uxthoughts/designing-for-ai-patterns",
    time: "3 weeks ago",
    tags: ["UX Design", "AI"],
    description:
      "Explores emerging UX patterns for AI-first products: progressive disclosure of AI reasoning, confidence indicators, error correction flows, and the mental model shift from tool-use to collaboration when users interact with generative AI interfaces.",
    thumbnailGradient: "from-stone-600/15 via-neutral-700/15 to-zinc-800/15",
    accentColor: "#000000",
  },
  {
    id: "13",
    platform: "Figma",
    icon: FigmaIcon,
    iconBg: "bg-purple-50/80 border border-purple-100",
    title: "Design System Tokens & Auto-layout v5 deep dive",
    url: "https://figma.com/community/file/design-tokens-guide",
    time: "3 weeks ago",
    tags: ["Design System", "Figma"],
    description:
      "Comprehensive walkthrough of Figma's variables system, DTCG-compliant token schema, scoping modes, and how Auto Layout v5 enables wrapping, min/max sizing, and absolute-position child elements. A must-read for design engineers.",
    thumbnailGradient: "from-purple-500/20 via-red-400/15 to-orange-400/15",
    accentColor: "#A259FF",
  },
  {
    id: "14",
    platform: "Substack",
    icon: SubstackIcon,
    iconBg: "bg-orange-50/80 border border-orange-100",
    title: "The Pragmatic Engineer: Big tech compensation in 2025",
    url: "https://newsletter.pragmaticengineer.com/p/big-tech-compensation",
    time: "1 month ago",
    tags: ["Career", "Engineering"],
    description:
      "Gergely Orosz breaks down 2025 total compensation at major tech companies across engineering levels (L4–L7). Covers base salaries, RSU refreshes, signing bonuses, and the geographic pay variation between SF, NYC, and Seattle hubs.",
    thumbnailGradient: "from-orange-500/20 via-amber-400/15 to-yellow-400/15",
    accentColor: "#FF6719",
  },
  {
    id: "15",
    platform: "Notion",
    icon: NotionIcon,
    iconBg: "bg-gray-50 border border-gray-200",
    title: "Personal OKR & productivity system template",
    url: "https://notion.so/templates/personal-okr-productivity",
    time: "1 month ago",
    tags: ["Productivity", "Goals"],
    description:
      "A full-featured Notion workspace template for personal OKRs including quarterly goal tracking, weekly review rituals, daily task intake, and habit momentum metrics. Uses linked databases and rollup formulas to surface progress automatically.",
    thumbnailGradient: "from-gray-400/15 via-slate-500/15 to-zinc-600/15",
    accentColor: "#000000",
  },
];
