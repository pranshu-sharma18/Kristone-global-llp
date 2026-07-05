interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-gold ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className="text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
