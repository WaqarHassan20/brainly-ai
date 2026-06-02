"use client";

import {
  Search,
  Link,
  AlertTriangle,
  Cloud,
  Folder,
  X,
  Brain,
  Headphones,
  Eye,
  Zap,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { COMPARISON_ROWS } from "@/lib/constants";

const bookmarkIcons: Record<string, React.ReactNode> = {
  search: <Search className="w-4 h-4 text-muted" />,
  link: <Link className="w-4 h-4 text-muted" />,
  alertTriangle: <AlertTriangle className="w-4 h-4 text-muted" />,
  cloud: <Cloud className="w-4 h-4 text-muted" />,
  folder: <Folder className="w-4 h-4 text-muted" />,
  x: <X className="w-4 h-4 text-muted" />,
};

const brainlyIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="w-4 h-4 text-accent" />,
  headphones: <Headphones className="w-4 h-4 text-accent" />,
  eye: <Eye className="w-4 h-4 text-accent" />,
  zap: <Zap className="w-4 h-4 text-accent" />,
  sparkles: <Sparkles className="w-4 h-4 text-accent" />,
  lightbulb: <Lightbulb className="w-4 h-4 text-accent" />,
};

export function Comparison() {
  return (
    <section id="comparison" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="COMPARISON"
          heading="Step up to semantic intelligence"
          subtitle="Why traditional link management tools fail, and how Brainly AI shifts the paradigm."
        />

        <AnimatedWrapper delay={0.2}>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-card rounded-2xl border border-border overflow-hidden mt-8 hover:shadow-xl transition-shadow duration-300">
            {/* Table Header */}
            <div className="grid grid-cols-3">
              <div className="px-6 py-5 text-sm font-bold tracking-wider uppercase text-muted">
                Feature Matrix
              </div>
              <div className="px-6 py-5 text-sm font-bold tracking-wider uppercase text-muted">
                Bookmarks / Likes
              </div>
              <div className="px-6 py-5 comparison-brainly-col flex items-center justify-between">
                <span className="text-sm font-bold tracking-wider uppercase text-foreground">
                  Brainly AI
                </span>
                <span className="text-[10px] font-bold bg-foreground text-white px-3 py-1 rounded-full tracking-wider">
                  ✦ AI POWERED
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-t border-border-light hover:bg-cream/40 transition-colors duration-150 group cursor-pointer"
              >
                <div className="px-6 py-5 flex items-center">
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {row.feature}
                  </span>
                </div>
                <div className="px-6 py-5 flex items-center gap-3">
                  {bookmarkIcons[row.bookmarkIcon]}
                  <span className="text-sm text-muted">
                    {row.bookmarkText}
                  </span>
                </div>
                <div className="px-6 py-5 comparison-brainly-col flex items-center gap-3 group-hover:bg-accent-light/35 transition-colors">
                  {brainlyIcons[row.brainlyIcon]}
                  <span className="text-sm font-semibold text-foreground">
                    {row.brainlyText}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Card List View */}
          <div className="block md:hidden space-y-4 mt-8">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.feature}
                className="bg-card rounded-2xl border border-border p-5 space-y-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-foreground text-sm border-b border-border-light pb-2">
                  {row.feature}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* Bookmarks */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                      Bookmarks & Saves
                    </span>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0">
                        {bookmarkIcons[row.bookmarkIcon]}
                      </span>
                      <span className="text-xs text-muted leading-relaxed">
                        {row.bookmarkText}
                      </span>
                    </div>
                  </div>
                  {/* Brainly AI */}
                  <div className="space-y-1.5 bg-accent-light/20 p-3 rounded-xl border border-accent/10">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                      ✦ Brainly AI
                    </span>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0">
                        {brainlyIcons[row.brainlyIcon]}
                      </span>
                      <span className="text-xs font-semibold text-foreground leading-relaxed">
                        {row.brainlyText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
