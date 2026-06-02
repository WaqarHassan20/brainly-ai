"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { VAGUE_QUERIES, DEMO_RESPONSES } from "@/lib/constants";

export function InteractiveDemo() {
  const [activeQueryId, setActiveQueryId] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const activeResponse = DEMO_RESPONSES[activeQueryId];

  const handleQueryClick = useCallback(
    (id: number) => {
      if (isAnimating || id === activeQueryId) return;
      setIsAnimating(true);
      setActiveQueryId(id);
      // Allow re-clicking after animation completes
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, activeQueryId]
  );

  return (
    <section id="demo" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="INTERACTIVE PLAYGROUND"
          heading="Query your brain. Try it live."
          subtitle="Click one of the vague memory chips below to watch Brainly AI analyze and pull the exact saved item instantly."
        />

        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          {/* Left: Vague Queries */}
          <AnimatedWrapper
            className="lg:col-span-2"
            delay={0.1}
            direction="left"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Vague Queries
              </h3>
              <p className="text-sm text-muted mb-6">
                Traditional tools return zero results for these prompts. Click
                one to test Brainly:
              </p>
              <div className="space-y-3">
                {VAGUE_QUERIES.map((query) => (
                  <button
                    key={query.id}
                    type="button"
                    onClick={() => handleQueryClick(query.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border text-left hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${
                      activeQueryId === query.id
                        ? "bg-accent-light border-accent/30 shadow-sm"
                        : "bg-card border-border hover:border-accent/20 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeQueryId === query.id
                          ? "bg-accent text-white"
                          : "bg-gray-100 text-muted"
                      }`}
                    >
                      {query.id}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {query.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          {/* Right: Search Engine Demo */}
          <AnimatedWrapper
            className="lg:col-span-3"
            delay={0.3}
            direction="right"
          >
            <div className="bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border-light bg-cream/40">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Brainly AI search engine
                  </span>
                </div>
                <span className="text-xs text-muted">Memory Index: Active</span>
              </div>

              {/* Chat area */}
              <div className="p-5 min-h-[340px] flex flex-col">
                <AnimatePresence mode="wait">
                  {activeResponse && (
                    <motion.div
                      key={activeQueryId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="flex-1 space-y-4"
                    >
                      {/* Search query bubble */}
                      <div className="flex items-start gap-3 border border-border-light rounded-xl px-4 py-3">
                        <span className="text-muted text-sm">🔍</span>
                        <span className="text-sm text-muted">
                          {activeResponse.userQuery.split("...")[0]}...
                        </span>
                      </div>

                      {/* User message */}
                      <div className="flex justify-end">
                        <div className="bg-gray-800 text-white rounded-2xl rounded-br-md px-5 py-3 max-w-sm">
                          <span className="text-sm">
                            {activeResponse.userQuery}
                          </span>
                        </div>
                      </div>

                      {/* AI response */}
                      <motion.p
                        className="text-sm text-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {activeResponse.aiResponse}
                      </motion.p>

                      <motion.div
                        className="bg-gray-50 border border-border-light rounded-xl p-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center shrink-0 self-start">
                          <span className="text-red-500 text-2xl">▶</span>
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold tracking-wider text-red-500">
                            {activeResponse.resultPlatform}
                          </span>
                          <h4 className="text-sm font-bold text-foreground mt-1">
                            {activeResponse.resultTitle}
                          </h4>
                          <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                            {activeResponse.resultSnippet}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input bar */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border-light">
                  <span className="text-sm text-muted flex-1 truncate">
                    {activeResponse?.userQuery ?? "Type a vague memory..."}
                  </span>
                  <span className="animate-cursor-blink text-accent mr-2">|</span>
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center hover:bg-accent/20 transition-colors shrink-0"
                    aria-label="Send query"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
