"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Key,
  Copy,
  Check,
  User,
  Mail,
  Shield,
  HelpCircle,
} from "lucide-react";

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

export default function SettingsPage() {
  const { user, isLoaded } = useUser();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!user?.id) return;
    try {
      await navigator.clipboard.writeText(user.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="h-full flex flex-col min-h-0 overflow-y-auto p-6 lg:p-10 max-w-4xl mx-auto w-full">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8 shrink-0">
        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
          <Settings className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h1 className="text-base font-bold text-foreground leading-tight">
            Settings
          </h1>
          <p className="text-[10px] text-muted">
            Configure integration keys, sync companion extensions, and manage your account
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* ── SECTION 1: User Profile Settings Card ── */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {isLoaded && user ? (
            <>
              <img
                src={user.imageUrl}
                alt={user.fullName || "User Profile Avatar"}
                className="w-16 h-16 rounded-2xl object-cover border border-gray-100 shrink-0 shadow-sm"
              />
              <div className="flex-1 space-y-1.5 min-w-0">
                <h2 className="text-sm font-bold text-foreground truncate">
                  {user.fullName || user.username || "Vault User"}
                </h2>
                <div className="flex flex-col gap-1 text-[11px] text-gray-500">
                  <div className="flex items-center gap-1.5 truncate">
                    <User className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>Username: @{user.username || "unset"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>Email: {user.primaryEmailAddress?.emailAddress}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 bg-green-50 text-green-600 border border-green-200/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                Active Account
              </div>
            </>
          ) : (
            <div className="w-full flex items-center gap-4 animate-pulse">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-100 rounded w-1/3" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            </div>
          )}
        </motion.div>

        {/* ── SECTION 2: Chrome Extension Integration Card ── */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
              <ChromeIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
                Chrome Extension Companion
              </h3>
              <p className="text-[10px] text-muted">
                Install the browser sidebar panel to save links instantly while surfing the web
              </p>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="space-y-3 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-wide flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-accent shrink-0" />
              Setup Instructions
            </h4>
            <ul className="text-[11px] text-gray-600 space-y-2 list-decimal list-inside pl-1 leading-relaxed">
              <li>Open Chrome and navigate to <code className="bg-gray-100 px-1 py-0.5 rounded text-accent font-mono text-[10px]">chrome://extensions</code></li>
              <li>Toggle **Developer mode** on in the top-right corner</li>
              <li>Click **Load unpacked** and select the <code className="bg-gray-100 px-1 py-0.5 rounded text-accent font-mono text-[10px]">chrome-extension</code> folder inside this repository</li>
              <li>Pin the extension, click its icon, paste the Sync Key below into settings, and start saving!</li>
            </ul>
          </div>

          {/* Sync Key copy area */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-accent shrink-0" />
              Your Secure Sync Key
            </label>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3 focus-within:border-accent/40 transition-all">
              <input
                type="password"
                readOnly
                value={isLoaded && user ? user.id : "Loading..."}
                className="flex-1 bg-transparent text-xs font-mono text-foreground placeholder:text-gray-400 outline-none select-all"
              />
              <button
                type="button"
                onClick={handleCopy}
                disabled={!isLoaded || !user?.id}
                className="shrink-0 flex items-center justify-center p-2 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-accent hover:border-accent/30 transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.95] disabled:opacity-50 disabled:cursor-not-allowed"
                title="Copy Sync Key"
                aria-label="Copy Sync Key to Clipboard"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
            <p className="text-[9px] text-muted-foreground leading-normal">
              Keep this key secret. It identifies your account when the Chrome Extension syncs bookmarks.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
