"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND_NAME, BRAND_TAGLINE, NAV_LINKS } from "@/lib/constants";
import { useAuth } from "@clerk/nextjs";

/* Custom Chrome icon SVG */
function ChromeIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" y1="8" x2="12" y2="8" />
      <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </svg>
  );
}

export function Navbar() {
  const { isSignedIn } = useAuth();
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
        className={`w-full max-w-7xl transition-all duration-300 rounded-full border backdrop-blur-md pointer-events-auto ${scrolled
            ? "bg-white/60 border-accent/20 shadow-[0_10px_30px_-10px_rgba(124,106,232,0.15)]"
            : "bg-white/20 border-white/20 shadow-[0_10px_30px_-10px_rgba(124,106,232,0.06)]"
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

          {/* Desktop Navigation Links — slightly larger text */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-semibold text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side actions — Install Extension icon + Login button */}
          <div className="flex items-center gap-3">
            {/* Install Extension icon-only button (custom Chrome icon) */}
            <a
              href="#"
              className="p-1.5 text-muted hover:text-accent transition-colors rounded-full hover:bg-accent/10"
              aria-label="Install Chrome Extension"
              title="Install Chrome Extension"
            >
              <ChromeIcon className="w-[18px] h-[18px]" />
            </a>
            {/* Login / Dashboard button */}
            {!isSignedIn ? (
              <a
                href="?auth=login"
                className="hidden md:inline-flex px-4.5 py-1.5 text-xs font-semibold text-white bg-accent rounded-full hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Login
              </a>
            ) : (
              <a
                href="/dashboard"
                className="hidden md:inline-flex px-4.5 py-1.5 text-xs font-semibold text-white bg-accent rounded-full hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Dashboard
              </a>
            )}

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-1.5 text-muted hover:text-foreground"
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
              className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-border-light"
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-1 pb-2 border-b border-border-light/40">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-semibold text-muted hover:text-foreground py-2 transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {!isSignedIn ? (
                  <a
                    href="?auth=login"
                    className="w-full block text-center py-3 text-sm font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/10"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Login
                  </a>
                ) : (
                  <a
                    href="/dashboard"
                    className="w-full block text-center py-3 text-sm font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/10"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Dashboard
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
