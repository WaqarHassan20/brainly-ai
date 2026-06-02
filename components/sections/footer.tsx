import { ArrowRight, Download } from "lucide-react";
import { BRAND_NAME, BRAND_TAGLINE, FOOTER_LINK_GROUPS } from "@/lib/constants";

function SocialIcon({ type }: { readonly type: string }) {
  const icons: Record<string, string> = {
    twitter: "𝕏",
    instagram: "📷",
    linkedin: "in",
    github: "⌘",
  };

  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm text-muted hover:bg-gray-200 hover:text-foreground transition-colors"
      aria-label={type}
    >
      {icons[type] ?? "•"}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-light relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="font-semibold text-foreground">
                {BRAND_NAME}
              </span>
              <span className="text-[9px] font-bold tracking-wider bg-gray-100 text-muted px-1.5 py-0.5 rounded-full">
                {BRAND_TAGLINE}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Your second brain for everything you save online. Synthesize,
              index, and recall links, posts, and videos instantly using
              conversational AI.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-muted mr-2">
                FOLLOW US
              </span>
              <SocialIcon type="twitter" />
              <SocialIcon type="instagram" />
              <SocialIcon type="linkedin" />
              <SocialIcon type="github" />
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold tracking-[0.2em] text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Access & Updates column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-foreground mb-4">
              ACCESS & UPDATES
            </h4>
            <p className="text-sm text-muted mb-4">
              Subscribe to our technical updates or download our browser
              extension directly.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-white border border-border rounded-full text-sm text-foreground placeholder:text-gray-400 outline-none focus:border-accent transition-colors"
              />
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Chrome Extension</span>
            </a>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="footer-watermark text-center">BRAINLY AI</div>

      {/* Bottom bar */}
      <div className="border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © 2026 Brainly AI. Designed for elite digital recall. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
