export interface SavedItem {
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
  imageUrl?: string;
}

export const recentItems: SavedItem[] = [
  {
    id: "1",
    platform: "YouTube",
    iconBg: "bg-red-50/80 border border-red-100 dark:bg-red-950/20 dark:border-red-900/30",
    title: "Andrew Huberman: Master Focus & Cognitive Stamina",
    url: "https://www.youtube.com/watch?v=s2yGW2Z_s8o",
    time: "2 min ago",
    tags: ["Neuroscience", "Productivity"],
    description:
      "Dr. Huberman explores the science of focus, discussing how optical focus directly signals norepinephrine pathways. Covers techniques for cognitive stamina including deliberate cold exposure, non-sleep deep rest protocols, and visual focus exercises.",
    thumbnailGradient: "from-red-500/20 via-pink-500/20 to-orange-500/20",
    accentColor: "#FF0000",
    imageUrl: "https://img.youtube.com/vi/s2yGW2Z_s8o/mqdefault.jpg",
  },
  {
    id: "2",
    platform: "Twitter / X",
    iconBg: "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800",
    title: "Marc Andreessen: Framework for executing startup ideas",
    url: "https://x.com/pmarca/status/1641219361664188417",
    time: "1 hour ago",
    tags: ["Startups", "Strategy"],
    description:
      "A thread on execution-first startup strategy. Key insight: execution speed is the #1 predictor of startup success. Covers daily shipping habits, team velocity metrics, and the importance of founder-led sales in early stages.",
    thumbnailGradient: "from-gray-800/20 via-slate-700/20 to-zinc-900/20",
    accentColor: "#000000",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
  },
  {
    id: "3",
    platform: "Instagram",
    iconBg: "bg-pink-50/80 border border-pink-100 dark:bg-pink-950/20 dark:border-pink-900/30",
    title: "Morning routine checklist reel for peak performance",
    url: "https://www.instagram.com/reel/C2M2Uf6ux1w/",
    time: "3 hours ago",
    tags: ["Habits", "Mindset"],
    description:
      "A popular reel outlining a 5-step morning framework: 10 min sunlight exposure, cold shower, journaling with intentions, 90-min deep work block, and movement. Backed by research from Huberman Lab.",
    thumbnailGradient: "from-purple-500/20 via-pink-500/20 to-yellow-500/20",
    accentColor: "#d6249f",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
  },
  {
    id: "4",
    platform: "Spotify",
    iconBg: "bg-green-50/80 border border-green-100 dark:bg-green-950/20 dark:border-green-900/30",
    title: "Lex Fridman: The future of AI and consciousness",
    url: "https://open.spotify.com/episode/5688LskXk9LqS5b42Yv0bU",
    time: "Yesterday",
    tags: ["AI", "Philosophy"],
    description:
      "Episode covering the boundaries of artificial general intelligence, the hard problem of consciousness, and whether AI systems could ever develop subjective experience. Features discussion with a leading neuroscientist.",
    thumbnailGradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    accentColor: "#1DB954",
    imageUrl: "https://images.unsplash.com/photo-1610116306796-6ebd3071c797?w=400&q=80",
  },
  {
    id: "5",
    platform: "Article",
    iconBg: "bg-violet-50/80 border border-violet-100 dark:bg-violet-950/20 dark:border-violet-900/30",
    title: "How to build a second brain — step by step guide",
    url: "https://fortelabs.com/blog/para/",
    time: "2 days ago",
    tags: ["Learning", "PKM"],
    description:
      "Comprehensive guide to the PARA method (Projects, Areas, Resources, Archives) for organizing digital knowledge. Covers progressive summarization, intermediate packets, and how to build a personal knowledge management system.",
    thumbnailGradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    accentColor: "#7C6AE8",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80",
  },
  {
    id: "6",
    platform: "YouTube",
    iconBg: "bg-red-50/80 border border-red-100 dark:bg-red-950/20 dark:border-red-900/30",
    title: "Next.js 15 Super-resolution rendering structures",
    url: "https://www.youtube.com/watch?v=Ue5Z4v8jGvM",
    time: "3 days ago",
    tags: ["NextJS", "React"],
    description:
      "A deep dive session showcasing the breaking-edge streaming server component architectures in Next.js 15, partial hydration rendering paths, dynamic parallel slots, and CSS subgrid layout integrations.",
    thumbnailGradient: "from-rose-500/20 via-orange-500/20 to-amber-500/20",
    accentColor: "#FF0000",
    imageUrl: "https://img.youtube.com/vi/Ue5Z4v8jGvM/mqdefault.jpg",
  },
  {
    id: "7",
    platform: "Spotify",
    iconBg: "bg-green-50/80 border border-green-100 dark:bg-green-950/20 dark:border-green-900/30",
    title: "The Joe Rogan Experience: Naval Ravikant talks leverage",
    url: "https://open.spotify.com/episode/2q6H3L04m7q2WspDqUpx8n",
    time: "4 days ago",
    tags: ["Wealth", "Leverage"],
    description:
      "Naval discusses how technology provides permissionless leverage (code and media). Explainers on the modern digital economy, intellectual curiosity, specific knowledge, and building judgment over hard work.",
    thumbnailGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    accentColor: "#1DB954",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
  },
  {
    id: "8",
    platform: "Twitter / X",
    iconBg: "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800",
    title: "Karpathy: Let's build a GPT tokeniser from scratch",
    url: "https://x.com/karpathy/status/1763261623912833075",
    time: "Last week",
    tags: ["AI", "LLMs"],
    description:
      "Andrej Karpathy shares code examples and video guides to constructing a fully functional Byte Pair Encoding (BPE) tokenizer used in GPT models. Covers vocabulary sizes, token representation, and encoding/decoding mechanics.",
    thumbnailGradient: "from-slate-600/20 via-zinc-700/20 to-stone-800/20",
    accentColor: "#000000",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  },
  {
    id: "9",
    platform: "Article",
    iconBg: "bg-violet-50/80 border border-violet-100 dark:bg-violet-950/20 dark:border-violet-900/30",
    title: "The complete guide to CSS flexbox layouts",
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    time: "10 days ago",
    tags: ["CSS", "Frontend"],
    description:
      "The definitive reference guide to using CSS Flexbox. Illustrates align-items, justify-content, flex-shrink, and flex-basis mechanics. Indispensable for web layout engineering.",
    thumbnailGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    accentColor: "#7C6AE8",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80",
  },
  {
    id: "10",
    platform: "Instagram",
    iconBg: "bg-pink-50/80 border border-pink-100 dark:bg-pink-950/20 dark:border-pink-900/30",
    title: "Mindfulness and neural breath work reels",
    url: "https://www.instagram.com/reel/C10r1N_S0V0/",
    time: "2 weeks ago",
    tags: ["Mindfulness", "Health"],
    description:
      "A quick video showing how box breathing (4s inhale, 4s hold, 4s exhale, 4s hold) lowers active heart rate, regulates systemic blood pressure, and instantly relieves acute nervous anxiety.",
    thumbnailGradient: "from-amber-500/20 via-yellow-500/20 to-orange-500/20",
    accentColor: "#d6249f",
    imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&q=80",
  },
  {
    id: "11",
    platform: "GitHub",
    iconBg: "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800",
    title: "Tailwind Labs: Headless UI v2.0 component library",
    url: "https://github.com/tailwindlabs/headlessui",
    time: "2 weeks ago",
    tags: ["Open Source", "React"],
    description:
      "Headless UI v2.0 is fully unstyled, accessible UI components for React and Vue. The v2.0 release adds built-in anchor positioning (via Floating UI), checkbox, radio group, and combobox improvements with virtual scrolling support.",
    thumbnailGradient: "from-gray-700/20 via-slate-600/20 to-gray-800/20",
    accentColor: "#24292F",
    imageUrl: "https://opengraph.githubassets.com/1/tailwindlabs/headlessui",
  },
  {
    id: "12",
    platform: "Medium",
    iconBg: "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800",
    title: "Designing for AI: UX Patterns and best practices in 2025",
    url: "https://medium.com/@muthu.co/ux-design-for-ai-patterns-and-best-practices-in-2025-a745778b30f2",
    time: "3 weeks ago",
    tags: ["UX Design", "AI"],
    description:
      "Explores emerging UX patterns for AI-first products: progressive disclosure of AI reasoning, confidence indicators, error correction flows, and the mental model shift from tool-use to collaboration when users interact with generative AI interfaces.",
    thumbnailGradient: "from-stone-600/15 via-neutral-700/15 to-zinc-800/15",
    accentColor: "#000000",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
  },
  {
    id: "13",
    platform: "Figma",
    iconBg: "bg-purple-50/80 border border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
    title: "Design System Tokens & Auto-layout v5 deep dive",
    url: "https://www.figma.com/design/E92376249/figma-design-tokens/",
    time: "3 weeks ago",
    tags: ["Design System", "Figma"],
    description:
      "Comprehensive walkthrough of Figma's variables system, DTCG-compliant token schema, scoping modes, and how Auto Layout v5 enables wrapping, min/max sizing, and absolute-position child elements. A must-read for design engineering.",
    thumbnailGradient: "from-purple-500/20 via-red-400/15 to-orange-400/15",
    accentColor: "#A259FF",
    imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
  },
  {
    id: "14",
    platform: "Substack",
    iconBg: "bg-orange-50/80 border border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
    title: "The Pragmatic Engineer: Big tech compensation in 2025",
    url: "https://newsletter.pragmaticengineer.com/p/developer-productivity-metrics",
    time: "1 month ago",
    tags: ["Career", "Engineering"],
    description:
      "Gergely Orosz breaks down 2025 total compensation at major tech companies across engineering levels (L4–L7). Covers base salaries, RSU refreshes, signing bonuses, and the geographic pay variation between SF, NYC, and Seattle hubs.",
    thumbnailGradient: "from-orange-500/20 via-amber-400/15 to-yellow-400/15",
    accentColor: "#FF6719",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    id: "15",
    platform: "Notion",
    iconBg: "bg-gray-50 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-800",
    title: "Personal OKR & productivity system template",
    url: "https://www.notion.so/templates/personal-okr",
    time: "1 month ago",
    tags: ["Productivity", "Goals"],
    description:
      "A full-featured Notion workspace template for personal OKRs including quarterly goal tracking, weekly review rituals, daily task intake, and habit momentum metrics. Uses linked databases and rollup formulas to surface progress automatically.",
    thumbnailGradient: "from-gray-400/15 via-slate-500/15 to-zinc-600/15",
    accentColor: "#000000",
    imageUrl: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=400&q=80",
  },
];
