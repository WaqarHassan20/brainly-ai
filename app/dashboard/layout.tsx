"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Search,
  BookmarkPlus,
  Settings,
  ChevronLeft,
  Menu,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Search Memory", href: "/dashboard/search", icon: Search },
  { label: "Saved Items", href: "/dashboard/saved", icon: BookmarkPlus },
] as const;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Sync theme state on mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-cream flex transition-colors duration-300">
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-50 flex flex-col bg-card border-r border-border-light transition-all duration-300 ${
          collapsed ? "w-[72px]" : "w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo area */}
        <div className="h-16 flex items-center gap-2.5 px-4 border-b border-border-light shrink-0">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-white dark:text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-semibold text-foreground text-base"
              >
                {BRAND_NAME}
              </motion.span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto hidden lg:flex w-7 h-7 items-center justify-center rounded-full hover:bg-border-light text-muted transition-colors"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              className={`w-4 h-4 transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-border-light/60 hover:text-foreground"
                  }`}
                  title={collapsed ? link.label : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-accent/10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 shrink-0 relative z-10 ${
                      isActive ? "text-accent" : "group-hover:text-foreground"
                    }`}
                  />
                  {!collapsed && (
                    <span className="relative z-10 truncate">{link.label}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom — User avatar only (settings & logout moved to top bar) */}
        <div className="border-t border-border-light py-3 px-3 shrink-0">
          <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl bg-border-light/40 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
              W
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Waqar H.
                </p>
                <p className="text-[10px] text-muted truncate">Beta Tester</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar — search center + theme toggle, settings, logout right */}
        <header className="h-16 flex items-center gap-4 px-6 bg-card/60 backdrop-blur-md border-b border-border-light sticky top-0 z-30 transition-colors duration-300">
          <button
            type="button"
            className="lg:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search bar — centered */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl">
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 focus-within:border-accent/40 shadow-sm focus-within:shadow transition-all">
                <Search className="w-4 h-4 text-muted shrink-0" />
                <input
                  type="text"
                  placeholder="Search your memory vault..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted/60 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right actions — Theme toggle, Settings, Logout */}
          <div className="flex items-center gap-1.5">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-border-light/60 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-[18px] h-[18px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-[18px] h-[18px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Settings */}
            <Link
              href="/dashboard/settings"
              className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-border-light/60 transition-all duration-200"
              aria-label="Settings"
            >
              <Settings className="w-[18px] h-[18px]" />
            </Link>

            {/* Divider */}
            <div className="w-px h-6 bg-border-light mx-1" />

            {/* User avatar */}
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
              W
            </div>

            {/* Logout */}
            <button
              type="button"
              className="p-2 rounded-xl text-muted hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-200"
              aria-label="Log out"
            >
              <LogOut className="w-[18px] h-[18px]" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
