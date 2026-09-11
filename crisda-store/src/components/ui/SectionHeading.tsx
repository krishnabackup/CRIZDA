type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        max-w-2xl
        mt-10
        ${align === "center" ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <p
          className="
            mb-3
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--color-primary)]
          "
        >
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base text-[var(--color-muted)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}