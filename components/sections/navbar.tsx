"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Menu, X } from "lucide-react";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-full border shadow-lg backdrop-blur-md pointer-events-auto ${scrolled
            ? "bg-white/40 border-white/30 shadow-[0_8px_32px_0_rgba(124,106,232,0.06)]"
            : "bg-white/15 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
          }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0 group">
            <motion.div
              className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
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
            </motion.div>
            <span className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors duration-200">
              {BRAND_NAME}
            </span>
            <span className="text-[9px] font-bold tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
              {BRAND_TAGLINE}
            </span>
          </a>

          {/* Right side actions - Kept ONLY night mode toggle and Sign Up button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-1.5 text-muted hover:text-foreground transition-colors rounded-full hover:bg-white/80"
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4" />
            </button>
            <a
              href="/login?mode=signup"
              className="hidden sm:inline-flex px-4.5 py-1.5 text-xs font-semibold text-white bg-accent rounded-full hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Sign Up
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="sm:hidden p-1.5 text-muted hover:text-foreground"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-border-light"
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                <a
                  href="/login?mode=signup"
                  className="w-full text-center py-3 text-sm font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/10"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
