"use client";

import { motion } from "framer-motion";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";

/* ── Arc icon definitions ── */
const leftArcIcons = [
  { icon: "▶", label: "YouTube", color: "text-red-500", bg: "bg-red-50", border: "border-red-200", glow: "shadow-red-200/60" },
  { icon: "🎧", label: "Spotify", color: "text-green-600", bg: "bg-green-50", border: "border-green-200", glow: "shadow-green-200/60" },
  { icon: "𝕏", label: "Twitter", color: "text-foreground", bg: "bg-gray-100", border: "border-gray-300", glow: "shadow-gray-300/60" },
  { icon: "📑", label: "Docs", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200", glow: "shadow-blue-200/60" },
  { icon: "💬", label: "Reddit", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200", glow: "shadow-orange-200/60" },
  { icon: "🌐", label: "Web", color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-200", glow: "shadow-cyan-200/60" },
] as const;

const rightArcIcons = [
  { icon: "📷", label: "Instagram", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-200", glow: "shadow-pink-200/60" },
  { icon: "⌘", label: "GitHub", color: "text-gray-700", bg: "bg-gray-50", border: "border-gray-300", glow: "shadow-gray-300/60" },
  { icon: "🔌", label: "Extension", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200", glow: "shadow-yellow-200/60" },
  { icon: "🎯", label: "Target", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200", glow: "shadow-rose-200/60" },
  { icon: "💡", label: "Ideas", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200", glow: "shadow-amber-200/60" },
  { icon: "✉", label: "Email", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200", glow: "shadow-teal-200/60" },
] as const;

/**
 * Compute (x, y) for an icon on a semicircular arc.
 * side: "left" arc bows leftward, "right" bows rightward
 * index: 0-based position in the list
 * total: total number of icons on this side
 * radius: arc radius in px
 */
function arcPosition(
  side: "left" | "right",
  index: number,
  total: number,
  radius: number
) {
  // Distribute icons evenly from top to bottom along the arc
  const startAngle = -Math.PI * 0.4; // ≈ -72°
  const endAngle = Math.PI * 0.4;    // ≈ +72°
  const angle =
    total === 1
      ? 0
      : startAngle + (endAngle - startAngle) * (index / (total - 1));

  const x = Math.cos(angle) * radius * (side === "left" ? -1 : 1);
  const y = Math.sin(angle) * radius;

  return { x, y };
}

function ArcIcon({
  icon,
  label,
  bg,
  border,
  glow,
  color,
  index,
  side,
  total,
}: {
  readonly icon: string;
  readonly label: string;
  readonly bg: string;
  readonly border: string;
  readonly glow: string;
  readonly color: string;
  readonly index: number;
  readonly side: "left" | "right";
  readonly total: number;
}) {
  const radius = 200;
  const { x, y } = arcPosition(side, index, total, radius);

  return (
    <motion.div
      className={`absolute w-16 h-16 rounded-full ${bg} border ${border} flex items-center justify-center shadow-lg ${glow} cursor-pointer backdrop-blur-sm`}
      style={{
        left: "50%",
        top: "50%",
        marginLeft: x - 32,
        marginTop: y - 32,
      }}
      /* Continuous idle animation: gentle float + subtle glow pulse */
      animate={{
        y: [0, -6, 0, 4, 0],
        scale: [1, 1.06, 1, 0.97, 1],
        rotate: [0, index % 2 === 0 ? 5 : -5, 0, index % 2 === 0 ? -3 : 3, 0],
      }}
      transition={{
        duration: 5 + index * 0.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.35,
      }}
      whileHover={{
        scale: 1.25,
        rotate: 0,
        boxShadow: "0 0 24px rgba(124, 106, 232, 0.35)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.92 }}
      title={label}
    >
      <span className={`text-2xl ${color} select-none`}>{icon}</span>
    </motion.div>
  );
}

/* ── Connecting arc line (SVG) ── */
function ArcLine({ side }: { readonly side: "left" | "right" }) {
  const radius = 200;
  const total = 6;
  const points: { x: number; y: number }[] = [];

  for (let i = 0; i < total; i++) {
    const pos = arcPosition(side, i, total, radius);
    points.push({ x: pos.x + 250, y: pos.y + 250 });
  }

  // Build a smooth SVG path through all points
  const d = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ left: "50%", top: "50%", marginLeft: -250, marginTop: -250 }}
      width={500}
      height={500}
      viewBox="0 0 500 500"
      fill="none"
    >
      <motion.path
        d={d}
        stroke="url(#arcGradient)"
        strokeWidth={2}
        strokeDasharray="6 4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C6AE8" stopOpacity={0.4} />
          <stop offset="50%" stopColor="#C4B5FD" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#7C6AE8" stopOpacity={0.4} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CTA() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden group">
      {/* Gradient glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="cta-glow w-[900px] h-[700px] rounded-full group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Arc icons — left side */}
      <div className="absolute inset-0 hidden md:block" style={{ pointerEvents: "none" }}>
        <div className="relative w-full h-full" style={{ pointerEvents: "auto" }}>
          {/* Left arc connector line */}
          <div className="absolute" style={{ left: "15%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <ArcLine side="left" />
            {leftArcIcons.map((item, i) => (
              <ArcIcon
                key={item.label}
                icon={item.icon}
                label={item.label}
                bg={item.bg}
                border={item.border}
                glow={item.glow}
                color={item.color}
                index={i}
                side="left"
                total={leftArcIcons.length}
              />
            ))}
          </div>

          {/* Right arc connector line */}
          <div className="absolute" style={{ left: "85%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <ArcLine side="right" />
            {rightArcIcons.map((item, i) => (
              <ArcIcon
                key={item.label}
                icon={item.icon}
                label={item.label}
                bg={item.bg}
                border={item.border}
                glow={item.glow}
                color={item.color}
                index={i}
                side="right"
                total={rightArcIcons.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 pt-24">
        <AnimatedWrapper>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight hover:scale-[1.01] transition-transform duration-300">
            Stop losing what you save.
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Supercharge your digital archive and install Brainly AI today.
            Experience conversational recall and free up cognitive bandwidth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/dashboard"
              className="px-6 py-2.5 text-sm font-semibold border border-border text-foreground rounded-full bg-white hover:bg-cream hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-sm"
            >
              Go to Dashboard
            </a>
            <a
              href="#"
              className="px-6 py-2.5 text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Install Chrome Extension
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
