import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#7C6AE8",
          colorBackground: "#ffffff",
          colorInputBackground: "#FAF9F7",
          colorText: "#1c1917",
          colorTextSecondary: "#706f6c",
          borderRadius: "0.75rem",
        },
        elements: {
          card: "shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border-light rounded-2xl",
          formButtonPrimary: "bg-[#7C6AE8] hover:bg-[#6c59d9] text-white font-semibold transition-all cursor-pointer shadow-md shadow-accent/20",
          footerActionLink: "text-[#7C6AE8] hover:text-[#6c59d9] transition-colors",
        },
      }}
    >
      <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    document.documentElement.classList.remove('dark');
                    localStorage.removeItem('theme');
                  } catch(e) {}
                })();
              `,
            }}
          />
        </head>
        <body className="min-h-screen flex flex-col" suppressHydrationWarning>{children}</body>
      </html>
    </ClerkProvider>
  );
}

