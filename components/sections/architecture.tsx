"use client";

import { useState } from "react";
import { Plus, LayoutGrid, Search, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ARCHITECTURE_STEPS } from "@/lib/constants";

const flowIcons = [
  { label: "1. Save", Icon: Plus },
  { label: "2. Structure", Icon: LayoutGrid },
  { label: "3. Understand", Icon: Download },
  { label: "4. Retrieve", Icon: Search },
] as const;

export function Architecture() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="THE ARCHITECTURE"
          heading="One place for your entire digital memory."
          subtitle="Brainly operates as a seamless layer in the background, transforming passive bookmarking into active intelligence."
        />

        <AnimatedWrapper delay={0.2}>
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 mt-8 hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left column: Steps 1 & 2 */}
              <div className="space-y-10">
                {ARCHITECTURE_STEPS.filter((s) => s.number <= 2).map(
                  (step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 p-3 rounded-xl border border-transparent"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Center: Circular flow */}
              <div className="flex justify-center">
                <div className="relative w-64 h-64 group/circle">
                  {flowIcons.map(({ label, Icon }, index) => {
                    const angle = (index * 90 - 90) * (Math.PI / 180);
                    const radius = 90;
                    const cx = 128 + radius * Math.cos(angle) - 32;
                    const cy = 128 + radius * Math.sin(angle) - 32;
                    const stepNum = index + 1;
                    const isHovered = hoveredIcon === stepNum;

                    return (
                      <div
                        key={label}
                        className="absolute flex flex-col items-center group/icon"
                        style={{
                          left: `${cx}px`,
                          top: `${cy}px`,
                          width: "64px",
                        }}
                        onMouseEnter={() => setHoveredIcon(stepNum)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <div className={`architecture-flow-icon hover:scale-120 hover:border-accent hover:text-accent hover:rotate-[360deg] hover:shadow-lg hover:shadow-accent/20 transition-all duration-700 ease-out cursor-pointer ${
                          isHovered
                            ? "scale-120 border-accent text-accent rotate-[360deg] shadow-lg shadow-accent/20"
                            : ""
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs mt-2 text-center whitespace-nowrap font-medium transition-colors ${
                          isHovered ? "text-accent scale-105" : "text-muted group-hover/icon:text-accent"
                        }`}>
                          {label}
                        </span>
                      </div>
                    );
                  })}
                  {/* Connecting circle path */}
                  <svg
                    className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-out ${
                      hoveredIcon !== null ? "rotate-[90deg] scale-105" : "group-hover/circle:rotate-45"
                    }`}
                    viewBox="0 0 256 256"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="90"
                      fill="none"
                      stroke={hoveredIcon !== null ? "var(--color-accent)" : "#E5E7EB"}
                      strokeWidth={hoveredIcon !== null ? "2" : "1.5"}
                      strokeDasharray="8 4"
                      className="transition-all duration-300"
                    />
                  </svg>
                </div>
              </div>

              {/* Right column: Steps 3 & 4 */}
              <div className="space-y-10">
                {ARCHITECTURE_STEPS.filter((s) => s.number > 2).map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4 p-3 rounded-xl border border-transparent"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
