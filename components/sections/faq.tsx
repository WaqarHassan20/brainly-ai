"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = useCallback(
    (index: number) => {
      setOpenIndex(openIndex === index ? -1 : index);
    },
    [openIndex]
  );

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Title */}
          <AnimatedWrapper className="lg:col-span-2" direction="left">
            <div>
              <div className="section-label justify-start mb-4">
                <span className="inline-flex tracking-[0.06em] font-bold text-accent">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="text-muted mt-4 leading-relaxed">
                Find quick answers to common questions about Brainly AI,
                privacy, integrations, and how it works.
              </p>
            </div>
          </AnimatedWrapper>

          {/* Right: Accordion */}
          <AnimatedWrapper className="lg:col-span-3" direction="right" delay={0.2}>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.question}
                    className={`bg-card rounded-xl border transition-colors ${
                      isOpen ? "border-accent/20 shadow-sm" : "border-border"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-foreground pr-4">
                        {item.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isOpen
                            ? "bg-accent text-white rotate-90"
                            : "bg-gray-100 text-muted"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-sm text-muted leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
