type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

// The small label + big title used at the top of every section.
export default function SectionHeading({ eyebrow, title, intro, id }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-[clamp(32px,4.2vw,50px)] font-bold leading-[1.08] tracking-[-0.03em]"
      >
        {title}
      </h2>
      {intro && <p className="max-w-lg text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}