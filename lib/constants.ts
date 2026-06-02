import type {
  NavLink,
  TraditionalBookmark,
  MemoryHubItem,
  ArchitectureStep,
  WorkflowStep,
  VagueQuery,
  DemoResponse,
  FeatureCard,
  ComparisonRow,
  FAQItem,
  FooterLinkGroup,
  FloatingCardData,
} from "@/types";

export const BRAND_NAME = "Brainly AI" as const;
export const BRAND_TAGLINE = "BETA" as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Problem", href: "#friction" },
  { label: "Solution", href: "#architecture" },
  { label: "How It Works", href: "#workflow" },
  { label: "Interactive Demo", href: "#demo" },
  { label: "Features", href: "#features" },
] as const;

export const TRADITIONAL_BOOKMARKS: readonly TraditionalBookmark[] = [
  { platform: "Twitter", description: '"Startup advice..." (Liked 3 months ago)' },
  { platform: "Safari", description: "Bookmark #142 (Untitled page)" },
  { platform: "YouTube", description: "Watch Later List (412 unwatched items)" },
  { platform: "Instagram", description: 'Saved Reels folder > "Inspiration..."' },
] as const;

export const MEMORY_HUB_ITEMS: readonly MemoryHubItem[] = [
  {
    icon: "youtube",
    title: "Dr. Andrew Huberman: Dopamine Control",
    subtitle: "Saved via Chrome Extension • 2 mins ago",
    tag: "Productivity",
    tagColor: "text-purple-600 bg-purple-50",
  },
  {
    icon: "twitter",
    title: "Marc Andreessen: How to Execute Ideas",
    subtitle: "Auto-indexed thread • 1 day ago",
    tag: "Startups",
    tagColor: "text-purple-600 bg-purple-50",
  },
  {
    icon: "instagram",
    title: "Morning Routine Framework for Focus",
    subtitle: "Audio transcribed & logged • 3 days ago",
    tag: "Mindset",
    tagColor: "text-purple-600 bg-purple-50",
  },
] as const;

export const ARCHITECTURE_STEPS: readonly ArchitectureStep[] = [
  {
    number: 1,
    title: "Capture Instantly",
    description:
      "Hit the shortcut key or click the Chrome Extension to save anything in one click.",
  },
  {
    number: 2,
    title: "Contextual Auto-Indexing",
    description:
      "Our background AI parses YouTube transcripts, transcribes Reels, reads tweets, and structures everything.",
  },
  {
    number: 3,
    title: "Deep Semantic Mapping",
    description:
      "AI indexes items using conceptual embeddings. It remembers the actual meaning and context of saved ideas, not just words.",
  },
  {
    number: 4,
    title: "Conversational Search",
    description:
      "Retrieve what you need by chatting naturally, just like asking a friend who remembers everything.",
  },
] as const;

export const WORKFLOW_STEPS: readonly WorkflowStep[] = [
  {
    number: "01",
    title: "Save with One Click",
    subtitle: "Universal capture, instantly integrated.",
    description:
      "Keep browsing social media naturally. Click the Brainly Chrome extension icon or hit our universal hotkey to save threads, videos, or posts. No manual tag creation, no folder structures, and zero friction.",
    layout: "left",
  },
  {
    number: "02",
    title: "AI Autopilot Indexing",
    subtitle: "We read, transcribe, and synthesize everything.",
    description:
      "In the background, Brainly's AI parses your saved link. It transcribes YouTube scripts, OCRs text from images, reads Twitter threads, and extracts themes, concepts, and metadata. Your saves are instantly transformed into structured data.",
    layout: "right",
  },
  {
    number: "03",
    title: "Retrieve with Natural Language",
    subtitle: "Speak to your brain like a colleague.",
    description:
      'No more keyword exact matching. Type your questions or vague memories in natural language: "What was that video on growth marketing I saved last month?" or "That thread about copywriting tricks". Brainly retrieves it in 3 seconds.',
    layout: "left",
  },
] as const;

export const VAGUE_QUERIES: readonly VagueQuery[] = [
  { id: 1, text: '"that dopamine focus video..."' },
  { id: 2, text: '"the tweet on startup execution..."' },
  { id: 3, text: '"morning habits routine reel..."' },
] as const;

export const DEMO_RESPONSES: Record<number, DemoResponse> = {
  1: {
    userQuery: "that dopamine video from Andrew Huberman",
    aiResponse:
      "🧠 Mapped 1 instant conceptual matches from your YouTube vault. Dr. Huberman discusses deep optical focus triggers for cognitive stamina.",
    resultPlatform: "YOUTUBE",
    resultTitle: "Andrew Huberman: Master Focus & Task Stamina",
    resultSnippet:
      "Transcribed audio snippet: 'By dilating or contracting your ocular focal depth, you directly signal norepinephrine pathways...'",
  },
  2: {
    userQuery: "the tweet on startup execution frameworks",
    aiResponse:
      "🧠 Mapped 1 instant conceptual matches from your Twitter/X vault. A thread on execution-first startup strategy.",
    resultPlatform: "TWITTER / X",
    resultTitle: "Startup Execution Framework Thread",
    resultSnippet:
      "Key insight: 'Execution speed is the #1 predictor of startup success. Build daily shipping habits...'",
  },
  3: {
    userQuery: "morning habits routine reel from Instagram",
    aiResponse:
      "🧠 Mapped 1 instant conceptual matches from your Instagram vault. A popular reel on morning routine optimization.",
    resultPlatform: "INSTAGRAM",
    resultTitle: "Morning Routine Checklist Reel",
    resultSnippet:
      "Transcribed audio: 'Start with 10 minutes of sunlight, then cold exposure, followed by focused deep work...'",
  },
} as const;

export const FEATURE_CARDS: readonly FeatureCard[] = [
  {
    title: "Semantic AI Understanding",
    description:
      "Find content by meaning, emotion, and context not just exact keywords. Your brain doesn't search with keywords, and neither should your tools.",
    visualType: "semantic",
  },
  {
    title: "Cross-Platform Ingestion",
    description:
      "One unified brain for YouTube, Twitter, Instagram, TikTok, and your browser — all content flows into a single searchable memory.",
    visualType: "crossPlatform",
  },
  {
    title: "One-Click Chrome Extension",
    description:
      "Passively captures pages, transcribes videos, and structures memory records in the background — no manual effort needed.",
    visualType: "chromeExtension",
  },
  {
    title: "Lightning-Fast Recall",
    description:
      "Vector search returns the most relevant content in under 65ms — an instantaneous bridge to your past knowledge.",
    visualType: "lightning",
  },
  {
    title: "Focus on Privacy",
    description:
      "Your data is encrypted and stored locally. We never sell or train AI models on your personal memory ever.",
    visualType: "privacy",
  },
  {
    title: "User-Friendly Operation",
    description:
      "Auto-categorization means zero manual filing. Content organizes itself the instant it's saved — clean, instant, intuitive.",
    visualType: "userFriendly",
  },
] as const;

export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    feature: "Search Approach",
    bookmarkIcon: "search",
    bookmarkText: "Literal exact keywords only",
    brainlyIcon: "brain",
    brainlyText: "Conceptual semantic natural language",
  },
  {
    feature: "Video Integration",
    bookmarkIcon: "link",
    bookmarkText: "Saves title and link only",
    brainlyIcon: "headphones",
    brainlyText: "Transcribes audio & indexes key timings",
  },
  {
    feature: "Social Ingestion",
    bookmarkIcon: "alertTriangle",
    bookmarkText: "Scattered across app platforms",
    brainlyIcon: "eye",
    brainlyText: "Passive auto-scraping into central hub",
  },
  {
    feature: "Recall Speed",
    bookmarkIcon: "cloud",
    bookmarkText: "Slow manual navigation",
    brainlyIcon: "zap",
    brainlyText: "Instant semantic recall under 65ms",
  },
  {
    feature: "Organization System",
    bookmarkIcon: "folder",
    bookmarkText: "Manual tedious folder nesting",
    brainlyIcon: "sparkles",
    brainlyText: "AI unsupervised auto-categorization",
  },
  {
    feature: "Actionable Insights",
    bookmarkIcon: "x",
    bookmarkText: "No actionable insights generated",
    brainlyIcon: "lightbulb",
    brainlyText: "Synthesizes summaries automatically",
  },
] as const;

export const FAQ_ITEMS: readonly FAQItem[] = [
  {
    question: "What exactly does Brainly AI capture?",
    answer:
      "Brainly AI passively captures content from YouTube videos, Twitter/X threads, Instagram posts, TikTok clips, and any webpage you visit via the Chrome extension. It transcribes audio, extracts key ideas, and stores everything in a semantically searchable memory vault — automatically.",
  },
  {
    question: "How does the semantic search actually work?",
    answer:
      "Brainly uses advanced vector embeddings to understand the meaning behind your saved content. Instead of matching keywords, it maps concepts, themes, and contexts. When you search with natural language like 'that video about focus,' it retrieves results based on semantic similarity, not exact word matches.",
  },
  {
    question: "Is there a limit to how much I can save?",
    answer:
      "During our beta period, you can save up to 10,000 items across all platforms. Our infrastructure scales with your usage, and we plan to offer unlimited saves in our upcoming plans. Each save is efficiently indexed, so performance remains fast regardless of volume.",
  },
  {
    question: "How is my data kept private and secure?",
    answer:
      "Your data is encrypted both in transit and at rest. We use end-to-end encryption and store your memory vault locally when possible. We never sell your data, never train AI models on your personal content, and you can delete everything at any time with one click.",
  },
  {
    question: "Does it work without an internet connection?",
    answer:
      "Brainly requires an internet connection for initial content capture and AI processing. However, once content is indexed, you can search and browse your saved items offline through our local-first architecture. Syncing happens automatically when you reconnect.",
  },
  {
    question: "Which browsers and platforms are supported?",
    answer:
      "Brainly currently supports Google Chrome and all Chromium-based browsers (Edge, Brave, Arc). We're actively developing extensions for Firefox and Safari. Our web dashboard is accessible from any modern browser, and mobile apps for iOS and Android are on our roadmap.",
  },
];

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    title: "EXPLORE",
    links: [
      { label: "Home", href: "#" },
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#workflow" },
      { label: "Interactive Demo", href: "#demo" },
      { label: "Security & FAQ", href: "#faq" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "The Friction", href: "#friction" },
      { label: "Our Solution", href: "#architecture" },
      { label: "Chrome Web Store", href: "#" },
      { label: "Privacy Center", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
] as const;

export const HERO_FLOATING_CARDS: readonly FloatingCardData[] = [
  {
    id: "youtube-1",
    platform: "YOUTUBE • 14:22",
    icon: "▶",
    iconBg: "bg-red-500",
    title: "Andrew Huberman: Focus stamina...",
    className: "top-[170px] right-[27%] lg:right-[29%]",
    delay: 0,
    width: "w-52",
    rotateClass: "rotate-[-7deg]",
  },
  {
    id: "facebook",
    platform: "FACEBOOK POST",
    icon: "f",
    iconBg: "bg-blue-600",
    title: "10x B2B Growth Engine Framework...",
    className: "top-[320px] right-[23%] lg:right-[25%]",
    delay: 1,
    width: "w-48",
    rotateClass: "rotate-[6deg]",
  },
  {
    id: "instagram-1",
    platform: "INSTAGRAM SAVED",
    icon: "📷",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    title: "Morning routine checklist reel...",
    likes: "4.2k",
    className: "top-[400px] right-[31%] lg:right-[33%]",
    delay: 2,
    width: "w-56",
    rotateClass: "rotate-[-8deg]",
  },
  {
    id: "pinterest-pin",
    platform: "PINTEREST SAVED",
    icon: "📌",
    iconBg: "bg-[#BD081C]",
    title: "SaaS home page design inspo...",
    className: "top-[600px] right-[26%] lg:right-[28%]",
    delay: 3.2,
    width: "w-52",
    rotateClass: "rotate-[5deg]",
  },
  {
    id: "linkedin-post",
    platform: "LINKEDIN SAVED",
    icon: "in",
    iconBg: "bg-[#0077B5]",
    title: "10 rules of product marketing...",
    className: "top-[220px] right-[14%] lg:right-[16%]",
    delay: 0.7,
    width: "w-56",
    rotateClass: "rotate-[8deg]",
  },
  {
    id: "twitter",
    platform: "TWITTER / X",
    title: "Startup execution framework...",
    icon: "𝕏",
    iconBg: "bg-black",
    className: "top-[380px] right-[19%] lg:right-[21%]",
    delay: 0.5,
    width: "w-60",
    isLarge: true,
    rotateClass: "rotate-[-5deg]",
  },
  {
    id: "focus-dopamine",
    platform: "",
    icon: "",
    iconBg: "",
    title: "on Focus & Dopamine",
    className: "top-[530px] right-[13%] lg:right-[15%]",
    delay: 1.2,
    width: "w-56",
    isTag: true,
    rotateClass: "rotate-[7deg]",
  },
  {
    id: "search",
    platform: "",
    icon: "🔍",
    iconBg: "",
    title: "that dopamine video from YouTube...",
    className: "top-[660px] right-[21%] lg:right-[23%]",
    delay: 1.5,
    width: "w-64",
    isSearch: true,
    rotateClass: "rotate-[-4deg]",
  },
  {
    id: "github-repo",
    platform: "GITHUB REPO",
    icon: "⌘",
    iconBg: "bg-gray-800",
    title: "nextjs/core-framework...",
    className: "top-[200px] right-[9%] lg:right-[11%]",
    delay: 1.8,
    width: "w-52",
    rotateClass: "rotate-[-8deg]",
  },
  {
    id: "instagram-2",
    platform: "INSTAGRAM",
    icon: "📷",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    title: "10x Morning",
    className: "top-[330px] right-[6%] lg:right-[8%]",
    delay: 2.5,
    width: "w-52",
    rotateClass: "rotate-[7deg]",
  },
  {
    id: "spotify-podcast",
    platform: "SPOTIFY EPISODE",
    icon: "🎧",
    iconBg: "bg-[#1DB954]",
    title: "Lex Fridman: AI Horizons...",
    className: "top-[480px] right-[11%] lg:right-[13%]",
    delay: 2.8,
    width: "w-60",
    rotateClass: "rotate-[-6deg]",
  },
  {
    id: "figma-design",
    platform: "FIGMA FRAME",
    icon: "❖",
    iconBg: "bg-[#F24E1E]",
    title: "Brainly AI Design System v2...",
    className: "top-[620px] right-[8%] lg:right-[10%]",
    delay: 3.6,
    width: "w-56",
    rotateClass: "rotate-[8deg]",
  },
  {
    id: "tiktok-clip",
    platform: "TIKTOK CLIP",
    icon: "♪",
    iconBg: "bg-black",
    title: "Minimal Workspace Setup inspo...",
    className: "top-[150px] right-[1%] lg:right-[3%]",
    delay: 0.8,
    width: "w-52",
    rotateClass: "rotate-[9deg]",
  },
  {
    id: "twitter-thread",
    platform: "TWITTER THREAD",
    icon: "𝕏",
    iconBg: "bg-black",
    title: "",
    className: "top-[270px] right-[4%] lg:right-[6%]",
    delay: 2,
    width: "w-44",
    rotateClass: "rotate-[-7deg]",
  },
  {
    id: "reddit-thread",
    platform: "REDDIT DISCUSSION",
    icon: "💬",
    iconBg: "bg-[#FF4500]",
    title: "r/solopreneur: bootstrapping...",
    className: "top-[420px] right-[2%] lg:right-[4%]",
    delay: 2.2,
    width: "w-56",
    rotateClass: "rotate-[6deg]",
  },
  {
    id: "youtube-2",
    platform: "YOUTUBE • 14:22",
    icon: "▶",
    iconBg: "bg-red-500",
    title: "Andrew Huberman: Focus stamina...",
    className: "top-[550px] right-[3%] lg:right-[5%]",
    delay: 3.5,
    width: "w-52",
    rotateClass: "rotate-[-8deg]",
  },
  {
    id: "gmail-thread",
    platform: "GMAIL THREAD",
    icon: "✉",
    iconBg: "bg-red-100 text-red-600 border border-red-200",
    title: "Newsletter: The AI Edge...",
    className: "top-[250px] right-[13%] lg:right-[15%]",
    delay: 1.9,
    width: "w-56",
    rotateClass: "rotate-[-6deg]",
  },
  {
    id: "chrome-extension-saved",
    platform: "EXTENSION SAVE",
    icon: "🔌",
    iconBg: "bg-yellow-500",
    title: "10x Productivity shortcuts...",
    className: "top-[360px] right-[8%] lg:right-[10%]",
    delay: 2.6,
    width: "w-52",
    rotateClass: "rotate-[7deg]",
  },
  {
    id: "notion-page",
    platform: "NOTION PAGE",
    icon: "N",
    iconBg: "bg-black",
    title: "Q2 Product Roadmap draft...",
    className: "top-[510px] right-[12%] lg:right-[14%]",
    delay: 3.4,
    width: "w-56",
    rotateClass: "rotate-[-5deg]",
  },
  {
    id: "slack-bookmark",
    platform: "SLACK BOOKMARK",
    icon: "💬",
    iconBg: "bg-[#4A154B]",
    title: "Shared resource in #engineering...",
    className: "top-[460px] right-[24%] lg:right-[26%]",
    delay: 2.1,
    width: "w-60",
    rotateClass: "rotate-[4deg]",
  },
  {
    id: "medium-article",
    platform: "MEDIUM ARTICLE",
    icon: "M",
    iconBg: "bg-black",
    title: "How to focus under heavy stress...",
    className: "bottom-[8px] right-[2%] lg:right-[4%]",
    delay: 4.2,
    width: "w-56",
    rotateClass: "rotate-[5deg]",
  },
  {
    id: "instagram-3",
    platform: "INSTAGRAM SAVED",
    icon: "📷",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    title: "Morning routine checklist reel...",
    likes: "4.2k",
    className: "bottom-[8px] right-[12%] lg:right-[14%]",
    delay: 4.5,
    width: "w-56",
    rotateClass: "rotate-[-9deg]",
  },
];
