import * as React from "react";

/* ── Brand SVG Components ── */
export function FacebookIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="ig-grad-module" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad-module)" />
      <path
        d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.333-8.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
        fill="white"
      />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.047 0 12 0 12s0 3.953.502 5.837a3.002 3.002 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.953 24 12 24 12s0-3.953-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.21-.42-.45-.61-.7v5.13c0 2.44-.81 4.96-2.66 6.63-1.88 1.7-4.61 2.32-7.05 1.72-2.37-.58-4.4-2.29-5.14-4.61-.83-2.58-.2-5.59 1.62-7.57 1.78-1.92 4.54-2.58 7.02-1.72v4.14c-1.39-.51-3.05-.12-4.02.97-.96 1.09-1.07 2.87-.27 4.1.79 1.21 2.34 1.83 3.76 1.52 1.4-.3 2.38-1.58 2.38-3.02V0h.26z" />
    </svg>
  );
}

export function RedditIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF4500">
      <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.24-1.72l1.32-4.16 3.59.77c.07.96.88 1.71 1.87 1.71 1.03 0 1.86-.83 1.86-1.86 0-1.03-.83-1.86-1.86-1.86-.77 0-1.44.47-1.72 1.14l-3.97-.85c-.18-.04-.37.05-.44.22L10.3 7.8c-2.44.04-4.69.68-6.37 1.7-1-.74-2.22-1.2-3.53-1.2-1.65 0-3 1.35-3 3 0 1.21.72 2.26 1.77 2.74-.05.15-.07.3-.07.46 0 3.58 4.28 6.5 9.5 6.5s9.5-2.92 9.5-6.5c0-.16-.02-.31-.06-.45 1.01-.49 1.71-1.52 1.71-2.73zm-18 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm11 4.5c-1.78 1.78-5.17 1.78-6.95 0-.19-.19-.19-.51 0-.7.19-.19.51-.19.7 0 1.4 1.4 4.14 1.4 5.54 0 .19-.19.51-.19.7 0 .2.19.2.51.01.7zm-.5-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

export function SpotifyIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1DB954">
      <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.494 17.308c-.218.358-.683.473-1.04.254-2.906-1.777-6.563-2.179-10.87-1.193-.41.094-.82-.164-.914-.574-.094-.41.164-.82.574-.914 4.708-1.077 8.736-.62 11.996 1.378.357.218.472.682.254 1.04zm1.467-3.262c-.275.447-.86.593-1.307.318-3.326-2.044-8.397-2.636-12.33-1.441-.5.152-1.03-.131-1.182-.63-.152-.5.131-1.03.63-1.182 4.494-1.365 10.076-.708 13.87 1.621.447.275.593.86.319 1.314zm.126-3.416C15.022 8.16 8.32 7.938 4.437 9.117a1.14 1.14 0 0 1-1.37-.822c-.173-.574.156-1.181.73-1.353 4.453-1.353 11.854-1.096 16.544 1.685a1.14 1.14 0 0 1-.39 2.146 1.127 1.127 0 0 1-.865-.263z" />
    </svg>
  );
}

export function ChromeIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#4285F4" />
      <path d="M12 2a10 10 0 0 1 10 10h-10z" fill="#EA4335" />
      <path d="M22 12a10 10 0 0 1-10 10l5-8.66z" fill="#FBBC05" />
      <path d="M12 22a10 10 0 0 1-10-10l8.66 5z" fill="#34A853" />
      <circle cx="12" cy="12" r="4.5" fill="white" />
      <circle cx="12" cy="12" r="3" fill="#4285F4" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ThreadsIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M12.002 0C5.37 0 0 5.372 0 12s5.37 12 12.002 12c3.084 0 5.92-.16 8.528-.48a2.535 2.535 0 0 0 2.224-2.528V12c0-6.628-5.37-12-12.002-12zm4.184 15.65c-.714 1.156-1.898 1.836-3.178 1.836-2.502 0-4.084-2.128-4.084-4.886 0-2.736 1.582-4.864 4.084-4.864 1.28 0 2.464.68 3.178 1.836l-1.074.65c-.534-.848-1.282-1.286-2.104-1.286-1.748 0-2.822 1.58-2.822 3.664 0 2.086 1.074 3.666 2.822 3.666.822 0 1.57-.438 2.104-1.286l1.074.656z" />
    </svg>
  );
}

export function PinterestIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#BD081C">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.907 2.17-2.907 1.025 0 1.518.769 1.518 1.689 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.76-2.245 3.76-5.487 0-2.869-2.061-4.869-5.007-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.211-.174.263-.388.165-1.43-.666-2.323-2.757-2.323-4.436 0-3.613 2.625-6.937 7.579-6.937 3.977 0 7.07 2.835 7.07 6.62 0 3.95-2.49 7.13-5.95 7.13-1.162 0-2.257-.605-2.63-1.316l-.716 2.733c-.259.989-.96 2.227-1.43 2.985 1.12.348 2.308.536 3.536.536 6.62 0 12-5.367 12-11.987C24.018 5.367 18.637 0 12.017 0z" />
    </svg>
  );
}

export function NotionIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M4.46 2.128c.395-.29 1.144-.616 1.94-.788 1.97-.432 5.08-.85 9.07-.88 2.062-.016 3.655.22 4.394.593.447.227.65.65.65 1.34v15.932c0 .48-.12.875-.38 1.144-.265.263-.664.388-1.222.388-.344 0-.853-.083-1.5-.246l-4.143-.996c-1.343-.326-2.793-.578-4.29-.738L4.316 19.34c-.394.045-.694.07-.905.07-.48 0-.834-.146-1.077-.45-.246-.307-.373-.83-.373-1.57V3.53c0-.462.106-.822.324-1.085.222-.266.574-.413 1.056-.45l1.12-.083v.216zm11.758 1.95v11.89l-5.69-8.47c-.286-.44-.672-.733-1.145-.87-.384-.117-.912-.178-1.597-.178-.507 0-.916.058-1.218.172v12.2l1.643.123V6.262l5.772 8.595c.29.435.688.72 1.18.847.387.094.887.142 1.488.142.348 0 .66-.027.93-.075V3.882l-2.363.196z" />
    </svg>
  );
}

export interface SocialIconData {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly label: string;
  readonly bg: string;
  readonly border: string;
  readonly glow: string;
  readonly link: string;
}

/* ── Arc Collections with Real Social Links ── */
export const leftArcIcons: readonly SocialIconData[] = [
  { icon: FacebookIcon, label: "Facebook", bg: "bg-blue-50", border: "border-blue-200", glow: "shadow-blue-200/50", link: "https://www.facebook.com" },
  { icon: InstagramIcon, label: "Instagram", bg: "bg-pink-50", border: "border-pink-200", glow: "shadow-pink-200/50", link: "https://www.instagram.com" },
  { icon: YouTubeIcon, label: "YouTube", bg: "bg-red-50", border: "border-red-200", glow: "shadow-red-200/50", link: "https://www.youtube.com" },
  { icon: TikTokIcon, label: "TikTok", bg: "bg-gray-100", border: "border-gray-300", glow: "shadow-gray-300/50", link: "https://www.tiktok.com" },
  { icon: RedditIcon, label: "Reddit", bg: "bg-orange-50", border: "border-orange-200", glow: "shadow-orange-200/50", link: "https://www.reddit.com" },
  { icon: SpotifyIcon, label: "Spotify", bg: "bg-green-50", border: "border-green-200", glow: "shadow-green-200/50", link: "https://www.spotify.com" },
] as const;

export const rightArcIcons: readonly SocialIconData[] = [
  { icon: ChromeIcon, label: "Chrome", bg: "bg-blue-50/70", border: "border-blue-100", glow: "shadow-blue-100/50", link: "https://www.google.com/chrome" },
  { icon: LinkedinIcon, label: "LinkedIn", bg: "bg-blue-50", border: "border-blue-200", glow: "shadow-blue-200/50", link: "https://www.linkedin.com" },
  { icon: TwitterIcon, label: "Twitter", bg: "bg-gray-100", border: "border-gray-300", glow: "shadow-gray-300/50", link: "https://www.twitter.com" },
  { icon: ThreadsIcon, label: "Threads", bg: "bg-gray-50", border: "border-gray-200", glow: "shadow-gray-200/50", link: "https://www.threads.net" },
  { icon: PinterestIcon, label: "Pinterest", bg: "bg-red-50", border: "border-red-200", glow: "shadow-red-200/50", link: "https://www.pinterest.com" },
  { icon: NotionIcon, label: "Notion", bg: "bg-gray-50", border: "border-gray-300", glow: "shadow-gray-300/50", link: "https://www.notion.so" },
] as const;
