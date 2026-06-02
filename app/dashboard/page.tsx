"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookmarkPlus,
  TrendingUp,
  Clock,
  Search,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Play,
  FileText,
  MessageCircle,
  Image as ImageIcon,
  Headphones,
} from "lucide-react";

/* ── Mock Data ── */
const stats = [
  {
    label: "Total Saves",
    value: "1,247",
    change: "+12%",
    trend: "up" as const,
    icon: BookmarkPlus,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    label: "AI Searches",
    value: "342",
    change: "+28%",
    trend: "up" as const,
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Recall Speed",
    value: "48ms",
    change: "-15%",
    trend: "up" as const,
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    label: "This Week",
    value: "23",
    change: "+5",
    trend: "up" as const,
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

const recentItems = [
  {
    platform: "YouTube",
    icon: Play,
    iconBg: "bg-red-500",
    title: "Andrew Huberman: Master Focus & Cognitive Stamina",
    time: "2 min ago",
    tags: ["Neuroscience", "Productivity"],
  },
  {
    platform: "Twitter / X",
    icon: MessageCircle,
    iconBg: "bg-black",
    title: "Marc Andreessen: Framework for executing startup ideas",
    time: "1 hour ago",
    tags: ["Startups", "Strategy"],
  },
  {
    platform: "Instagram",
    icon: ImageIcon,
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    title: "Morning routine checklist reel for peak performance",
    time: "3 hours ago",
    tags: ["Habits", "Mindset"],
  },
  {
    platform: "Spotify",
    icon: Headphones,
    iconBg: "bg-[#1DB954]",
    title: "Lex Fridman: The future of AI and consciousness",
    time: "Yesterday",
    tags: ["AI", "Philosophy"],
  },
  {
    platform: "Article",
    icon: FileText,
    iconBg: "bg-blue-500",
    title: "How to build a second brain — step by step guide",
    time: "2 days ago",
    tags: ["Learning", "PKM"],
  },
];

const topCollections = [
  { name: "Neuroscience & Focus", count: 86, color: "from-purple-400 to-accent" },
  { name: "Startup Playbook", count: 64, color: "from-blue-400 to-cyan-400" },
  { name: "Design Inspiration", count: 52, color: "from-pink-400 to-rose-400" },
  { name: "AI & Technology", count: 41, color: "from-green-400 to-emerald-400" },
];

const activityData = [32, 45, 28, 64, 38, 52, 70, 41, 58, 33, 47, 61, 55, 43];

const quickActions = [
  { label: "Save a Link", icon: BookmarkPlus, color: "bg-accent text-white" },
  { label: "AI Search", icon: Sparkles, color: "bg-foreground text-white" },
  {
    label: "Browse All",
    icon: ExternalLink,
    color: "bg-white text-foreground border border-border",
  },
];

/* ── Animated number counter ── */
function AnimatedStat({ value }: { readonly value: string }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const numericPart = value.replace(/[^0-9]/g, "");
    const suffix = value.replace(/[0-9,]/g, "");
    const target = parseInt(numericPart.replace(/,/g, ""), 10);
    const duration = 1200;
    const start = Date.now();

    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(current.toLocaleString() + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [value]);

  return <>{display}</>;
}

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <motion.h1
            className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome back, Waqar 👋
          </motion.h1>
          <motion.p
            className="text-sm text-muted mt-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here&apos;s what&apos;s happening with your memory vault today.
          </motion.p>
        </div>

        {/* Quick actions */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-sm ${action.color}`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{action.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl border border-border-light p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground tracking-tight">
                <AnimatedStat value={stat.value} />
              </p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent saves — 2 cols */}
        <motion.div
          className="lg:col-span-2 bg-white rounded-2xl border border-border-light overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-light">
            <h2 className="text-base font-semibold text-foreground">
              Recent Saves
            </h2>
            <a
              href="/dashboard/saved"
              className="text-xs font-medium text-accent hover:underline inline-flex items-center gap-1"
            >
              View all <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="divide-y divide-border-light">
            {recentItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-cream/50 transition-colors cursor-pointer group/item"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-white shrink-0 group-hover/item:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate group-hover/item:text-accent transition-colors">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-wide">
                        {item.platform}
                      </span>
                      <span className="text-[10px] text-gray-300">•</span>
                      <span className="text-[10px] text-muted">{item.time}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/8 text-accent border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Top collections */}
          <motion.div
            className="bg-white rounded-2xl border border-border-light p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-base font-semibold text-foreground mb-4">
              Top Collections
            </h2>
            <div className="space-y-3">
              {topCollections.map((col, i) => (
                <div
                  key={col.name}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${col.color} group-hover:scale-125 transition-transform duration-200`}
                  />
                  <span className="flex-1 text-sm text-muted group-hover:text-foreground transition-colors truncate">
                    {col.name}
                  </span>
                  <span className="text-xs font-semibold text-foreground bg-cream rounded-full px-2 py-0.5">
                    {col.count}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity chart */}
          <motion.div
            className="bg-white rounded-2xl border border-border-light p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-foreground">
                Save Activity
              </h2>
              <span className="text-[10px] font-bold tracking-wider text-muted">
                LAST 14 DAYS
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {activityData.map((val, i) => {
                const maxVal = Math.max(...activityData);
                const height = (val / maxVal) * 100;
                return (
                  <motion.div
                    key={`bar-${i}`}
                    className="flex-1 rounded-t-md bg-accent/20 hover:bg-accent/40 transition-colors cursor-pointer relative group/bar"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + i * 0.04,
                      ease: "easeOut",
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-accent opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      {val}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* AI Insight card */}
          <motion.div
            className="bg-gradient-to-br from-accent/5 to-purple-50 rounded-2xl border border-accent/15 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-accent tracking-wide">
                AI INSIGHT
              </span>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              You&apos;ve been saving a lot of{" "}
              <span className="font-semibold text-accent">neuroscience</span>{" "}
              content this week. Want me to create a synthesis summary of your top
              findings?
            </p>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-accent text-white text-xs font-semibold rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Generate Summary
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
