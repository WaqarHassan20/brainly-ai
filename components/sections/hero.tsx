"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { HERO_FLOATING_CARDS } from "@/lib/constants";
import type { FloatingCardData } from "@/types";

function getRealIcon(id: string, fallbackText: string) {
  const lowercaseId = id.toLowerCase();

  if (lowercaseId.includes("youtube")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }
  if (lowercaseId.includes("facebook")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.5.5-1 1-1h2V2h-3C9.5 2 9 3.5 9 5v3z" />
      </svg>
    );
  }
  if (lowercaseId.includes("instagram")) {
    return (
      <svg className="w-3.5 h-3.5 stroke-white stroke-2 fill-none" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (lowercaseId.includes("pinterest")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.2 9.4 7.7 11.1-.1-.9-.2-2.4 0-3.4.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.2 3.8-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.4-.7-2.3-2.8-2.3-4.4 0-3.6 2.6-6.9 7.6-6.9 4 0 7.1 2.8 7.1 6.6 0 4-2.5 7.1-6 7.1-1.2 0-2.3-.6-2.6-1.3l-.7 2.7c-.3 1-.9 2.2-1.4 3 1.1.3 2.3.5 3.5.5 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0z" />
      </svg>
    );
  }
  if (lowercaseId.includes("linkedin")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (lowercaseId.includes("twitter")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (lowercaseId.includes("spotify")) {
    return (
      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.4-.7.5-1 .2-2.9-1.8-6.6-2.2-10.9-1.2-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4.7-1.1 8.7-.6 12 1.4.3.2.4.7.2 1.1zm1.5-3.3c-.3.4-.9.6-1.3.3-3.3-2-8.4-2.6-12.3-1.4-.5.2-1 .1-1.2-.3-.2-.5.1-1 .6-1.2 4.5-1.4 10.1-.7 13.9 1.6.4.3.5.9.3 1.3zm.1-3.4C15 8.2 8.3 8 4.4 9.1c-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2C8.3 6 15.7 5.7 20.4 8.5c.5.3.6.9.3 1.4-.3.4-.9.5-1.3.2z" />
      </svg>
    );
  }
  if (lowercaseId.includes("chrome")) {
    return (
      <svg className="w-3.5 h-3.5 stroke-white stroke-[2.5] fill-none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="8" x2="20.7" y2="8" />
        <line x1="12" y1="16" x2="3.3" y2="16" />
        <line x1="12" y1="12" x2="16" y2="19" />
      </svg>
    );
  }
  if (lowercaseId.includes("notion")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M4.46 2.128c.395-.29 1.144-.616 1.94-.788 1.97-.432 5.08-.85 9.07-.88 2.062-.016 3.655.22 4.394.593.447.227.65.65.65 1.34v15.932c0 .48-.12.875-.38 1.144-.265.263-.664.388-1.222.388-.344 0-.853-.083-1.5-.246l-4.143-.996c-1.343-.326-2.793-.578-4.29-.738L4.316 19.34c-.394.045-.694.07-.905.07-.48 0-.834-.146-1.077-.45-.246-.307-.373-.83-.373-1.57V3.53c0-.462.106-.822.324-1.085.222-.266.574-.413 1.056-.45l1.12-.083v.216zm11.758 1.95v11.89l-5.69-8.47c-.286-.44-.672-.733-1.145-.87-.384-.117-.912-.178-1.597-.178-.507 0-.916.058-1.218.172v12.2l1.643.123V6.262l5.772 8.595c.29.435.688.72 1.18.847.387.094.887.142 1.488.142.348 0 .66-.027.93-.075V3.882l-2.363.196z" />
      </svg>
    );
  }
  if (lowercaseId.includes("tiktok")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.21-.42-.45-.61-.7v5.13c0 2.44-.81 4.96-2.66 6.63-1.88 1.7-4.61 2.32-7.05 1.72-2.37-.58-4.4-2.29-5.14-4.61-.83-2.58-.2-5.59 1.62-7.57 1.78-1.92 4.54-2.58 7.02-1.72v4.14c-1.39-.51-3.05-.12-4.02.97-.96 1.09-1.07 2.87-.27 4.1.79 1.21 2.34 1.83 3.76 1.52 1.4-.3 2.38-1.58 2.38-3.02V0h.26z" />
      </svg>
    );
  }
  if (lowercaseId.includes("reddit")) {
    return (
      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
        <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.24-1.72l1.32-4.16 3.59.77c.07.96.88 1.71 1.87 1.71 1.03 0 1.86-.83 1.86-1.86 0-1.03-.83-1.86-1.86-1.86-.77 0-1.44.47-1.72 1.14l-3.97-.85c-.18-.04-.37.05-.44.22L10.3 7.8c-2.44.04-4.69.68-6.37 1.7-1-.74-2.22-1.2-3.53-1.2-1.65 0-3 1.35-3 3 0 1.21.72 2.26 1.77 2.74-.05.15-.07.3-.07.46 0 3.58 4.28 6.5 9.5 6.5s9.5-2.92 9.5-6.5c0-.16-.02-.31-.06-.45 1.01-.49 1.71-1.52 1.71-2.73zm-18 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm11 4.5c-1.78 1.78-5.17 1.78-6.95 0-.19-.19-.19-.51 0-.7.19-.19.51-.19.7 0 1.4 1.4 4.14 1.4 5.54 0 .19-.19.51-.19.7 0 .2.19.2.51.01.7zm-.5-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5z" />
      </svg>
    );
  }
  if (lowercaseId.includes("github")) {
    return (
      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" stroke="none" />
      </svg>
    );
  }
  if (lowercaseId.includes("slack")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.781a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.134 10.122a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522v-5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.781-10.122a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.52h-5.043a2.528 2.528 0 0 1-2.522 2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043z" stroke="none" />
      </svg>
    );
  }
  if (lowercaseId.includes("figma")) {
    return (
      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
        {/* Top left */}
        <path d="M8 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4h4V2H8z" stroke="none" />
        {/* Top right */}
        <path d="M12 2a4 4 0 1 1 4 4a4 4 0 0 1-4-4z" stroke="none" />
        {/* Mid left */}
        <path d="M8 10a4 4 0 0 0-4 4a4 4 0 0 0 4 4h4v-8H8z" stroke="none" />
        {/* Mid right */}
        <path d="M12 10a4 4 0 1 1 4 4a4 4 0 0 1-4-4z" stroke="none" />
        {/* Bottom left */}
        <path d="M8 18a4 4 0 0 0 4 4v-4H8z" stroke="none" />
      </svg>
    );
  }
  if (lowercaseId.includes("gmail") || lowercaseId.includes("mail")) {
    return (
      <svg className="w-3 h-3 stroke-white stroke-2 fill-none" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }

  return <span className="text-[10px] font-bold">{fallbackText}</span>;
}

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
            {getRealIcon(card.id, card.icon)}
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
      {/* Decorative premium background grid & dynamic glowing blobs */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        {/* Ambient glow blobs */}
        <motion.div
          className="absolute -top-[15%] left-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent/12 opacity-[0.14] blur-[80px] md:blur-[140px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[25%] -right-[5%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-[#9F85F8]/10 opacity-[0.12] blur-[80px] md:blur-[140px]"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        {/* Subtle high-tech dotted mesh pattern with a central focus radial gradient mask */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage: "radial-gradient(#7C6AE8 1.2px, transparent 1.2px), radial-gradient(#7C6AE8 1.2px, #FAF9F7 1.2px)",
            backgroundSize: "36px 36px",
            backgroundPosition: "0 0, 18px 18px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)"
          }}
        />
      </div>

      {/* Floating cards layer */}
      <div className="absolute inset-0 hidden lg:block select-none overflow-hidden pointer-events-none">
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-bold tracking-tight text-foreground leading-[1.08] font-sans"
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
