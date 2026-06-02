"use client";

import {
  FileText,
  Users,
  Download,
  Sparkles,
  Shield,
  CheckCircle,
  Search,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { FEATURE_CARDS } from "@/lib/constants";
import type { FeatureCard as FeatureCardType } from "@/types";

/* Custom brand icons */
function YoutubeIcon({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.56 31.56 0 000 12a31.56 31.56 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.56 31.56 0 0024 12a31.56 31.56 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
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

function TwitterIcon({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SemanticVisual() {
  return (
    <div className="relative h-44 flex items-center justify-center">
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-12 group-hover/card:bg-accent/20 transition-all duration-300">
          <Download className="w-6 h-6 text-accent" />
        </div>
        <div className="absolute -top-8 -left-10 group-hover/card:-translate-y-2 group-hover/card:-translate-x-1.5 transition-transform duration-300">
          <FileText className="w-5 h-5 text-gray-400" />
        </div>
        <div className="absolute -top-8 right-[-2.5rem] group-hover/card:-translate-y-2.5 group-hover/card:translate-x-2 transition-transform duration-300">
          <Users className="w-5 h-5 text-gray-400" />
        </div>
        <div className="absolute bottom-[-2rem] left-[-2.5rem] group-hover/card:translate-y-2 group-hover/card:-translate-x-2 group-hover/card:rotate-45 transition-transform duration-300">
          <Sparkles className="w-5 h-5 text-gray-400" />
        </div>
        <svg
          className="absolute inset-0 -m-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)]"
          viewBox="0 0 120 120"
        >
          <line x1="30" y1="28" x2="50" y2="48" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="90" y1="28" x2="70" y2="48" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="30" y1="92" x2="50" y2="72" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </div>
      <div className="absolute bottom-2 right-4 text-xs text-muted group-hover/card:text-accent font-medium transition-colors">
        &ldquo;that book...&rdquo;{" "}
        <span className="text-green-500">→ Found ✓</span>
      </div>
    </div>
  );
}

function CrossPlatformVisual() {
  return (
    <div className="h-44 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover/card:rotate-[180deg] group-hover/card:scale-110 group-hover/card:bg-accent/30 transition-all duration-500">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <div className="absolute -top-3 -right-10 group-hover/card:-translate-y-2.5 group-hover/card:translate-x-1.5 group-hover/card:scale-110 transition-all duration-300">
          <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
            <YoutubeIcon className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <div className="absolute top-1 -left-12 group-hover/card:-translate-x-2.5 group-hover/card:-translate-y-0.5 group-hover/card:scale-110 transition-all duration-300">
          <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
            <InstagramIcon className="w-4 h-4 text-pink-500" />
          </div>
        </div>
        <div className="absolute -bottom-4 -right-8 group-hover/card:translate-y-2 group-hover/card:translate-x-2 group-hover/card:scale-110 transition-all duration-300">
          <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-xs font-bold">
            ♪
          </div>
        </div>
        <div className="absolute -top-3 right-[-3.5rem] group-hover/card:-translate-y-1.5 group-hover/card:translate-x-3 group-hover/card:scale-110 transition-all duration-300">
          <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
            <TwitterIcon className="w-3.5 h-3.5" />
          </div>
        </div>
        <svg className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)]" viewBox="0 0 120 120">
          <line x1="60" y1="45" x2="82" y2="30" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="60" y1="55" x2="30" y2="48" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="60" y1="65" x2="80" y2="80" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>
    </div>
  );
}

function ChromeExtensionVisual() {
  return (
    <div className="h-44 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white/60 rounded px-2 py-0.5 text-[10px] text-muted group-hover/card:bg-white group-hover/card:text-accent transition-colors duration-200">
          youtube.com/watch?v=...
        </div>
        <Sparkles className="w-3.5 h-3.5 text-accent group-hover/card:rotate-90 group-hover/card:scale-120 transition-all duration-300" />
      </div>
      <div className="bg-white/80 rounded-lg p-2 mt-auto">
        <div className="space-y-1.5">
          <div className="h-2 bg-gray-200 rounded-full w-full" />
          <div className="h-2 bg-gray-200 rounded-full w-3/4" />
        </div>
      </div>
      <div className="bg-white/80 rounded-lg px-3 py-1.5 mt-2 inline-flex items-center gap-1.5 self-start group-hover/card:scale-105 group-hover/card:translate-x-1 group-hover/card:bg-green-50 transition-all duration-300">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="text-[10px] font-medium text-green-600">
          Saved to Memory
        </span>
      </div>
    </div>
  );
}

function LightningVisual() {
  return (
    <div className="h-44 flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl font-black text-accent/80 tracking-tight group-hover/card:scale-110 group-hover/card:text-accent transition-all duration-300">
          65<span className="text-2xl font-medium text-accent/60">ms</span>
        </div>
        <div className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase mt-2">
          AVG. RECALL LATENCY
        </div>
      </div>
    </div>
  );
}

function PrivacyVisual() {
  return (
    <div className="h-44 flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
      <div className="text-center space-y-2">
        <Shield className="w-10 h-10 text-green-500 mx-auto group-hover/card:scale-115 group-hover/card:rotate-[-5deg] transition-all duration-300" />
        <div className="space-y-1">
          {["Encrypted", "Zero Selling", "Local-First"].map((label) => (
            <div
              key={label}
              className="inline-flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 text-xs text-muted mx-0.5 group-hover/card:bg-green-100 group-hover/card:text-green-800 transition-colors duration-200"
            >
              <CheckCircle className="w-3 h-3 text-green-500" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UserFriendlyVisual() {
  return (
    <div className="h-44 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-3.5 h-3.5 text-muted" />
        <span className="text-[10px] text-muted">All saved content</span>
      </div>
      <div className="flex flex-wrap gap-1.5 group-hover/card:scale-[1.03] transition-transform duration-300">
        {[
          { tag: "#Neuroscience", color: "bg-purple-100 text-purple-600" },
          { tag: "#Startups", color: "bg-blue-100 text-blue-600" },
          { tag: "#Productivity", color: "bg-red-100 text-red-600" },
          { tag: "#Habits", color: "bg-yellow-100 text-yellow-700" },
          { tag: "#Learning", color: "bg-green-100 text-green-600" },
          { tag: "#Design", color: "bg-cyan-100 text-cyan-600" },
        ].map((item) => (
          <span
            key={item.tag}
            className={`text-[10px] font-medium px-2.5 py-1 rounded-full hover:scale-110 cursor-pointer transition-transform ${item.color}`}
          >
            {item.tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-4 text-[10px] text-accent group-hover/card:translate-x-1.5 transition-transform duration-200">
        <span>✦</span>
        <span>Auto-tagged by AI</span>
      </div>
    </div>
  );
}

const visualComponents: Record<FeatureCardType["visualType"], React.FC> = {
  semantic: SemanticVisual,
  crossPlatform: CrossPlatformVisual,
  chromeExtension: ChromeExtensionVisual,
  lightning: LightningVisual,
  privacy: PrivacyVisual,
  userFriendly: UserFriendlyVisual,
};

function FeatureCardComponent({
  card,
  index,
}: {
  readonly card: FeatureCardType;
  readonly index: number;
}) {
  const Visual = visualComponents[card.visualType];

  return (
    <AnimatedWrapper delay={0.1 * index}>
      <div className="bg-card rounded-2xl border border-border overflow-hidden h-full hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group/card">
        <div className="p-4">
          <Visual />
        </div>
        <div className="px-6 pb-6">
          <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="FEATURES"
          heading="Breakthrough Innovation"
          subtitle="Everything you need to capture, organize, and retrieve the digital knowledge you encounter every day — effortlessly."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {FEATURE_CARDS.map((card, index) => (
            <FeatureCardComponent key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
