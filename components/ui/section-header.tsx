interface SectionHeaderProps {
  readonly label: string;
  readonly heading: string;
  readonly subtitle?: string;
  readonly align?: "center" | "left";
}

export function SectionHeader({
  label,
  heading,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`section-label ${align === "left" ? "justify-start" : "justify-center"} mb-4`}
      >
        <span className="inline-flex tracking-[0.06em] font-bold text-accent">
          {label}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
