/**
 * Centralized Brainery theme color tokens.
 * Modify these tokens in one place to propagate color updates across the landing pages and application panels.
 */
export const THEME_COLORS = {
  // Brand Main Accent - Vibrant premium indigo purple
  // accent: "#c5d324ff",
  accent: "#7C6AE8",
  accentHover: "#6B59D7",
  accentLight: "rgba(124, 106, 232, 0.08)",
  accentBorder: "rgba(124, 106, 232, 0.15)",
  accentGlow: "rgba(124, 106, 232, 0.25)",
  accentGlowStrong: "rgba(124, 106, 232, 0.35)",

  // Main Backgrounds
  bgPage: "#F2EFE9",               // Clean warm off-white cream background
  bgCard: "#FFFFFF",
  bgGlass: "rgba(255, 255, 255, 0.2)",
  bgGlassScrolled: "rgba(255, 255, 255, 0.45)",

  // Border Tokens
  borderLight: "#F0EAE1",
  borderGlass: "rgba(255, 255, 255, 0.15)",
  borderGlassScrolled: "rgba(255, 255, 255, 0.25)",

  // Text Tokens
  textPrimary: "#1A1A1A",
  textMuted: "#6B7280",
} as const;
