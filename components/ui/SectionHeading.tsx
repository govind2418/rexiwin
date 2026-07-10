type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <Tag className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
        {title}
      </Tag>
      {description ? (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
