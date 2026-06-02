"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Search,
  BookmarkPlus,
  Folder,
  BarChart3,
  Settings,
  Bell,
  ChevronLeft,
  Menu,
  LogOut,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Search Memory", href: "/dashboard/search", icon: Search },
  { label: "Saved Items", href: "/dashboard/saved", icon: BookmarkPlus },
  { label: "Collections", href: "/dashboard/collections", icon: Folder },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
] as const;

const bottomLinks = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Help & Support", href: "/dashboard/help", icon: HelpCircle },
] as const;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream flex">
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
        className={`fixed lg:sticky top-0 left-0 h-screen z-50 flex flex-col bg-white border-r border-border-light transition-all duration-300 ${
          collapsed ? "w-[72px]" : "w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo area */}
        <div className="h-16 flex items-center gap-2.5 px-4 border-b border-border-light shrink-0">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center shrink-0">
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
            className="ml-auto hidden lg:flex w-7 h-7 items-center justify-center rounded-full hover:bg-gray-100 text-muted transition-colors"
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
                      : "text-muted hover:bg-gray-50 hover:text-foreground"
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

          {/* AI Search shortcut */}
          {!collapsed && (
            <div className="mt-6 mx-1">
              <div className="bg-gradient-to-br from-accent/5 to-purple-50 border border-accent/15 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-accent tracking-wide">
                    AI SEARCH
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-3">
                  Ask anything in natural language to find saved items instantly.
                </p>
                <button
                  type="button"
                  className="w-full text-left px-3 py-2 bg-white/80 border border-border-light rounded-lg text-xs text-muted hover:border-accent/30 transition-colors"
                >
                  &quot;that dopamine video...&quot;
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Bottom links */}
        <div className="border-t border-border-light py-3 px-3 space-y-1 shrink-0">
          {bottomLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted hover:bg-gray-50 hover:text-foreground transition-colors"
                title={collapsed ? link.label : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span className="truncate">{link.label}</span>}
              </Link>
            );
          })}

          {/* User avatar */}
          <div
            className={`flex items-center gap-3 px-3 py-2.5 mt-2 rounded-xl bg-gray-50 ${
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
            {!collapsed && (
              <button
                type="button"
                className="p-1.5 text-muted hover:text-foreground transition-colors"
                aria-label="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 flex items-center gap-4 px-6 bg-white/60 backdrop-blur-md border-b border-border-light sticky top-0 z-30">
          <button
            type="button"
            className="lg:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search bar */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-2 bg-cream/80 border border-border-light rounded-full px-4 py-2 focus-within:border-accent/30 focus-within:bg-white transition-all">
              <Search className="w-4 h-4 text-muted shrink-0" />
              <input
                type="text"
                placeholder="Search your memory vault..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-gray-400 outline-none"
              />
              <kbd className="hidden sm:inline-flex text-[10px] font-medium text-muted bg-white border border-border-light rounded px-1.5 py-0.5">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Top-right actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="relative p-2 text-muted hover:text-foreground hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
