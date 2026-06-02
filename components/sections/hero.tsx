"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { HERO_FLOATING_CARDS } from "@/lib/constants";
import type { FloatingCardData } from "@/types";

function FloatingCardItem({ card }: { readonly card: FloatingCardData }) {
  if (card.isSearch) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-border/50 p-3 flex items-center gap-2 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(124,106,232,0.08)] transition-all duration-300">
        <span className="text-gray-400">🔍</span>
        <span className="text-sm text-muted truncate">{card.title}</span>
        <span className="animate-cursor-blink text-accent font-light">|</span>
      </div>
    );
  }

  if (card.isTag) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-border/50 px-4 py-2 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(124,106,232,0.08)] transition-all duration-300">
        <span className="text-sm text-muted">{card.title}</span>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-border/50 p-3 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(124,106,232,0.08)] transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        {card.iconBg && (
          <div
            className={`w-6 h-6 rounded-md ${card.iconBg} text-white flex items-center justify-center text-xs`}
          >
            {card.icon}
          </div>
        )}
        <span className="text-[10px] font-medium text-muted tracking-wide uppercase">
          {card.platform}
        </span>
      </div>
      {card.title && (
        <p className="text-xs text-foreground leading-relaxed truncate">
          {card.title}
        </p>
      )}
      {card.likes && (
        <p className="text-[10px] text-red-400 mt-1">♥ {card.likes}</p>
      )}
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
    >
      {/* Floating cards layer */}
      <div className="absolute inset-0 hidden md:block select-none overflow-hidden pointer-events-none">
        {mounted &&
          HERO_FLOATING_CARDS.map((card) => (
            <motion.div
              key={card.id}
              className={`absolute ${card.className} ${card.width} z-10 cursor-grab active:cursor-grabbing pointer-events-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + card.delay * 0.3, duration: 0.8 }}
              drag
              dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
              dragElastic={0.1}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.2 },
              }}
              whileDrag={{
                scale: 1.12,
                rotate: 0,
                zIndex: 100,
              }}
            >
              <div
                className={`animate-float-gentle float-delay-${Math.min(
                  Math.floor(card.delay) + 1,
                  6
                )} ${card.rotateClass ?? ""}`}
              >
                <FloatingCardItem card={card} />
              </div>
            </motion.div>
          ))}
      </div>

      {/* Central content */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 pt-20 lg:pt-32 text-center lg:text-left lg:ml-[15%]">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7.5xl font-bold tracking-tight text-foreground leading-[1.08] font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Second Brain for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/90 to-[#9F85F8] font-serif italic font-normal block mt-2 tracking-normal">
            Everything You Save Online
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg text-muted font-sans font-light tracking-wide leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Brainly AI automatically synthesizes your saved links, tweets,
          YouTube videos, and bookmarks, letting you recall anything instantly
          using conversational natural language.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/login"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/25"
          >
            Get Started Free
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 bg-transparent backdrop-blur-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Install Extension
          </a>
        </motion.div>
      </div>
    </section>
  );
}
