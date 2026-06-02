import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brainly AI — Your Second Brain for Everything You Save Online",
  description:
    "Brainly AI automatically synthesizes your saved links, tweets, YouTube videos, and bookmarks, letting you recall anything instantly using conversational natural language.",
  keywords: [
    "AI",
    "second brain",
    "bookmarks",
    "semantic search",
    "chrome extension",
    "knowledge management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
