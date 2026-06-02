"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe, Lock, Mail, User } from "lucide-react";
import { BRAND_NAME } from "@/lib/constants";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialMode = searchParams.get("mode");
    if (initialMode === "signup" || initialMode === "register") {
      setMode("signup");
    } else {
      setMode("login");
    }
  }, [searchParams]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient glowing shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top back home link */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        {/* Brand logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-3xl font-extrabold text-foreground tracking-tight">
          {mode === "login" ? "Welcome back" : "Get started for free"}
        </h2>
        <p className="mt-2 text-center text-sm text-muted">
          {mode === "login" ? "New to Brainery?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="font-medium text-accent hover:text-accent-soft transition-colors cursor-pointer focus:outline-none"
          >
            {mode === "login" ? "Create a free account" : "Sign in instead"}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4 sm:px-0">
        <div className="bg-white shadow-xl shadow-black/[0.03] border border-border-light sm:rounded-2xl overflow-hidden relative">
          
          {/* Static Tab Selector Header */}
          <div className="p-6 pb-0">
            <div className="relative flex p-1 bg-cream rounded-xl border border-border-light">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`relative flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-colors z-10 cursor-pointer ${
                  mode === "login" ? "text-foreground" : "text-muted"
                }`}
              >
                Sign In
                {mode === "login" && (
                  <motion.div
                    layoutId="auth-tab-bubble-updated"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-border-light/40 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`relative flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-colors z-10 cursor-pointer ${
                  mode === "signup" ? "text-foreground" : "text-muted"
                }`}
              >
                Sign Up
                {mode === "signup" && (
                  <motion.div
                    layoutId="auth-tab-bubble-updated"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-border-light/40 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Form sliding viewport with fixed height bounds to prevent shifting */}
          <div className="relative min-h-[440px] sm:min-h-[460px]">
            <AnimatePresence initial={false} mode="wait">
              {mode === "login" ? (
                /* ── LOGIN FORM ── */
                <motion.div
                  key="login-view"
                  className="p-6 sm:p-10 space-y-6 w-full absolute top-0 left-0 right-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <form className="space-y-5" onSubmit={handleLoginSubmit}>
                    {/* Email field */}
                    <div>
                      <label htmlFor="login-email" className="block text-xs font-bold uppercase text-muted tracking-wider mb-2">
                        Email Address
                      </label>
                      <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-muted" />
                        </div>
                        <input
                          id="login-email"
                          type="email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="block w-full pl-10 pr-4 py-3 bg-cream/60 border border-border-light rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all text-foreground"
                        />
                      </div>
                    </div>

                    {/* Password field */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="login-password" className="block text-xs font-bold uppercase text-muted tracking-wider">
                          Password
                        </label>
                        <a href="#" className="text-xs font-medium text-accent hover:text-accent-soft transition-colors">
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Lock className="h-4 w-4 text-muted" />
                        </div>
                        <input
                          id="login-password"
                          type="password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="••••••••"
                          className="block w-full pl-10 pr-4 py-3 bg-cream/60 border border-border-light rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all text-foreground"
                        />
                      </div>
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-xs text-muted font-medium cursor-pointer select-none">
                        Keep me signed in
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-foreground hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      {isLoading ? "Signing in…" : "Sign In"}
                    </button>
                  </form>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border-light" />
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                      <span className="px-2 bg-white text-muted">Or continue with</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        window.location.href = "/dashboard";
                      }, 1200);
                    }}
                    className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-border-light rounded-xl bg-cream/30 text-sm font-semibold text-foreground hover:bg-cream/70 transition-colors hover:shadow-sm cursor-pointer"
                  >
                    <Globe className="w-4 h-4 text-accent shrink-0" />
                    <span>Continue with Google</span>
                  </button>
                </motion.div>
              ) : (
                /* ── SIGNUP FORM ── */
                <motion.div
                  key="signup-view"
                  className="p-6 sm:p-10 space-y-6 w-full absolute top-0 left-0 right-0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <form className="space-y-4" onSubmit={handleSignupSubmit}>
                    {/* Full Name field */}
                    <div>
                      <label htmlFor="signup-name" className="block text-xs font-bold uppercase text-muted tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-muted" />
                        </div>
                        <input
                          id="signup-name"
                          type="text"
                          required
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          placeholder="Andrew Huberman"
                          className="block w-full pl-10 pr-4 py-2.5 bg-cream/60 border border-border-light rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all text-foreground"
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label htmlFor="signup-email" className="block text-xs font-bold uppercase text-muted tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-muted" />
                        </div>
                        <input
                          id="signup-email"
                          type="email"
                          required
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="block w-full pl-10 pr-4 py-2.5 bg-cream/60 border border-border-light rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all text-foreground"
                        />
                      </div>
                    </div>

                    {/* Password field */}
                    <div>
                      <label htmlFor="signup-password" className="block text-xs font-bold uppercase text-muted tracking-wider mb-1.5">
                        Password
                      </label>
                      <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Lock className="h-4 w-4 text-muted" />
                        </div>
                        <input
                          id="signup-password"
                          type="password"
                          required
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          placeholder="••••••••"
                          className="block w-full pl-10 pr-4 py-2.5 bg-cream/60 border border-border-light rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all text-foreground"
                        />
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start">
                      <input
                        id="signup-terms"
                        type="checkbox"
                        required
                        className="mt-0.5 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="signup-terms" className="ml-2 block text-xs text-muted font-medium cursor-pointer select-none leading-tight">
                        I agree to Brainery's{" "}
                        <a href="#" className="font-semibold text-accent hover:underline">
                          Terms
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-semibold text-accent hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-foreground hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      {isLoading ? "Creating account…" : "Create Account"}
                    </button>
                  </form>

                  <div className="relative my-3">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border-light" />
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                      <span className="px-2 bg-white text-muted">Or continue with</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        window.location.href = "/dashboard";
                      }, 1200);
                    }}
                    className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 border border-border-light rounded-xl bg-cream/30 text-sm font-semibold text-foreground hover:bg-cream/70 transition-colors hover:shadow-sm cursor-pointer"
                  >
                    <Globe className="w-4 h-4 text-accent shrink-0" />
                    <span>Continue with Google</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
