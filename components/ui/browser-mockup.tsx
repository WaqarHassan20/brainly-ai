import type { ReactNode } from "react";

interface BrowserMockupProps {
  readonly title?: string;
  readonly url?: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export function BrowserMockup({
  title,
  url,
  children,
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`bg-card rounded-2xl border border-border shadow-lg overflow-hidden ${className}`}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border-light bg-white">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {url && (
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-1.5 text-sm text-muted min-w-48">
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="truncate">{url}</span>
            </div>
          </div>
        )}
        {title && !url && (
          <div className="flex-1 text-center text-sm font-medium text-foreground">
            {title}
          </div>
        )}
      </div>
      {/* Browser content */}
      <div className="p-5">{children}</div>
    </div>
  );
}
