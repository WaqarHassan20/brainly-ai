"use client";

import { motion } from "framer-motion";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { useAuth } from "@clerk/nextjs";

import { leftArcIcons, rightArcIcons } from "@/lib/social-icons";

function arcPosition(
  side: "left" | "right",
  index: number,
  total: number,
  radius: number
) {
  // Distribute icons evenly along a tighter, taller half-circle arc hugging the center
  const startAngle = -Math.PI * 0.44; // ≈ -80°
  const endAngle = Math.PI * 0.44;    // ≈ +80°
  const angle =
    total === 1
      ? 0
      : startAngle + (endAngle - startAngle) * (index / (total - 1));

  const x = Math.cos(angle) * radius * (side === "left" ? -1 : 1);
  const y = Math.sin(angle) * radius;

  return { x, y };
}

function ArcIcon({
  icon: IconComponent,
  label,
  bg,
  border,
  glow,
  link,
  index,
  side,
  total,
}: {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly label: string;
  readonly bg: string;
  readonly border: string;
  readonly glow: string;
  readonly link: string;
  readonly index: number;
  readonly side: "left" | "right";
  readonly total: number;
}) {
  const radius = 175; // Reduced radius from 220 to 175 to pack them very close to the center
  const { x, y } = arcPosition(side, index, total, radius);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute w-12.5 h-12.5 rounded-full ${bg} border ${border} flex items-center justify-center shadow-md ${glow} cursor-pointer backdrop-blur-sm z-20`}
      style={{
        left: "50%",
        top: "50%",
        marginLeft: x - 25,
        marginTop: y - 25,
      }}
      /* Idle animation: floating with subtle brand scale shifts */
      animate={{
        y: [0, -5, 0, 3, 0],
        scale: [1, 1.04, 1, 0.97, 1],
        rotate: [0, index % 2 === 0 ? 3 : -3, 0, index % 2 === 0 ? -1 : 1, 0],
      }}
      transition={{
        duration: 5.5 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      whileHover={{
        scale: 1.25,
        rotate: 0,
        boxShadow: "0 0 20px rgba(124, 106, 232, 0.35)",
        zIndex: 50,
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.94 }}
      title={label}
    >
      <div className="select-none flex items-center justify-center w-full h-full scale-95">
        <IconComponent className="w-5.5 h-5.5 shrink-0" />
      </div>
    </motion.a>
  );
}

/* ── Connecting arc line (SVG) ── */
function ArcLine({ side }: { readonly side: "left" | "right" }) {
  const radius = 175; // Reduced matching line radius
  const total = 6;
  const points: { x: number; y: number }[] = [];

  for (let i = 0; i < total; i++) {
    const pos = arcPosition(side, i, total, radius);
    points.push({ x: pos.x + 250, y: pos.y + 250 });
  }

  // Draw smooth arc curve
  const d = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-10"
      style={{ left: "50%", top: "50%", marginLeft: -250, marginTop: -250 }}
      width={500}
      height={500}
      viewBox="0 0 500 500"
      fill="none"
    >
      <motion.path
        d={d}
        stroke="url(#arcGradient)"
        strokeWidth={1.5}
        strokeDasharray="5 3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C6AE8" stopOpacity={0.2} />
          <stop offset="50%" stopColor="#C4B5FD" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#7C6AE8" stopOpacity={0.2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CTA() {
  const { isSignedIn } = useAuth();
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden group">
      {/* Gradient glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="cta-glow w-[900px] h-[700px] rounded-full group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Arc icons — left & right side holding the 12 brand icons, brought much closer */}
      <div className="absolute inset-0 hidden md:block" style={{ pointerEvents: "none" }}>
        <div className="relative w-full h-full" style={{ pointerEvents: "auto" }}>
          {/* Left arc connector line - moved from 15% to 28% */}
          <div className="absolute" style={{ left: "28%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <ArcLine side="left" />
            {leftArcIcons.map((item, i) => (
              <ArcIcon
                key={item.label}
                icon={item.icon}
                label={item.label}
                bg={item.bg}
                border={item.border}
                glow={item.glow}
                link={item.link}
                index={i}
                side="left"
                total={leftArcIcons.length}
              />
            ))}
          </div>

          {/* Right arc connector line - moved from 85% to 72% */}
          <div className="absolute" style={{ left: "72%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <ArcLine side="right" />
            {rightArcIcons.map((item, i) => (
              <ArcIcon
                key={item.label}
                icon={item.icon}
                label={item.label}
                bg={item.bg}
                border={item.border}
                glow={item.glow}
                link={item.link}
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
            {!isSignedIn ? (
              <a
                href="?auth=signup"
                className="px-6 py-2.5 text-sm font-semibold border border-border text-foreground rounded-full bg-white hover:bg-cream hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-sm"
              >
                Sign Up
              </a>
            ) : (
              <a
                href="/dashboard"
                className="px-6 py-2.5 text-sm font-semibold border border-border text-foreground rounded-full bg-white hover:bg-cream hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-sm"
              >
                Go to Dashboard
              </a>
            )}
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
