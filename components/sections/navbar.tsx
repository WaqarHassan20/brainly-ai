"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Menu, X, LayoutDashboard } from "lucide-react";
import { BRAND_NAME, BRAND_TAGLINE, NAV_LINKS } from "@/lib/constants";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-border-light shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          : "bg-cream/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 group">
          <motion.div
            className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </motion.div>
          <span className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors duration-200">
            {BRAND_NAME}
          </span>
          <span className="text-[10px] font-bold tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
            {BRAND_TAGLINE}
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/60 rounded-full px-2 py-1 border border-border-light backdrop-blur-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-full hover:bg-white relative group/link"
            >
              {link.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent rounded-full transition-all duration-300 group-hover/link:w-3/5" />
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            className="p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-white"
            aria-label="Toggle theme"
          >
            <Moon className="w-5 h-5" />
          </button>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-foreground border border-border rounded-full hover:bg-white hover:border-accent/30 hover:text-accent transition-all duration-200 group/dash"
          >
            <LayoutDashboard className="w-4 h-4 group-hover/dash:scale-110 transition-transform duration-200" />
            Dashboard
          </a>
          <a
            href="#"
            className="px-5 py-2 text-sm font-medium text-white bg-foreground rounded-full hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
          >
            Install Free
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted hover:text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-border-light"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm text-muted hover:text-foreground transition-colors rounded-xl hover:bg-white"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border-light mt-2">
                <a
                  href="/dashboard"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-center px-5 py-2 text-sm font-medium text-foreground border border-border rounded-full hover:bg-white transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex-1 text-center px-5 py-2 text-sm font-medium text-white bg-foreground rounded-full hover:bg-gray-800 transition-colors"
                >
                  Install Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
