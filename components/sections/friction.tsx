"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TRADITIONAL_BOOKMARKS, MEMORY_HUB_ITEMS } from "@/lib/constants";
import type { MemoryHubItem as MemoryHubItemType } from "@/types";

/* Custom SVG platform icons since lucide-react doesn't ship brand icons */
function YoutubeIcon({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.56 31.56 0 000 12a31.56 31.56 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.56 31.56 0 0024 12a31.56 31.56 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

function TwitterIcon({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const platformIcons: Record<string, React.ReactNode> = {
  youtube: <YoutubeIcon className="w-5 h-5 text-red-500" />,
  twitter: (
    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
      <TwitterIcon className="w-3.5 h-3.5 text-white" />
    </div>
  ),
  instagram: <InstagramIcon className="w-5 h-5 text-pink-500" />,
};

function MemoryHubCard({ item }: { readonly item: MemoryHubItemType }) {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-border-light last:border-b-0">
      <div className="shrink-0">
        {platformIcons[item.icon] ?? (
          <div className="w-7 h-7 rounded-full bg-gray-200" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">
          {item.title}
        </p>
        <p className="text-xs text-muted mt-0.5">{item.subtitle}</p>
      </div>
      <span
        className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${item.tagColor}`}
      >
        {item.tag}
      </span>
    </div>
  );
}

export function Friction() {
  return (
    <section id="friction" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="THE FRICTION"
          heading="Everything you save online becomes lost."
          subtitle="Bookmarks are a digital graveyard. We bookmark articles on Twitter, hit like on Instagram, and add YouTube videos to 'Watch Later'—only to waste hours searching through platforms trying to recall where they went."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Traditional Bookmarks Card */}
          <AnimatedWrapper delay={0.1} direction="left">
            <div className="bg-card rounded-2xl border border-border p-6 h-full hover:scale-[1.01] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 rounded-full bg-red-400 animate-pulse" />
                <h3 className="text-lg font-bold text-foreground">
                  Traditional Bookmarks & Saves
                </h3>
              </div>
              <div className="space-y-0">
                {TRADITIONAL_BOOKMARKS.map((bookmark) => (
                  <div
                    key={bookmark.platform}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 border-b border-dashed border-border-light last:border-b-0 hover:bg-cream/40 px-2 rounded-lg transition-colors duration-200"
                  >
                    <span className="text-sm font-mono text-muted border border-border rounded-md px-3 py-1 self-start sm:self-auto">
                      {bookmark.platform}
                    </span>
                    <span className="text-sm text-muted sm:text-right">
                      {bookmark.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          {/* Brainly Memory Hub Card */}
          <AnimatedWrapper delay={0.3} direction="right">
            <div className="bg-card rounded-2xl border border-border p-6 h-full shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Brainly Central Memory Hub
              </h3>
              <div className="space-y-1">
                {MEMORY_HUB_ITEMS.map((item) => (
                  <MemoryHubCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
