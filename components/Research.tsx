import SectionHeading from "@/components/SectionHeading";
import { research } from "@/content/site";

// One before → after comparison, drawn as two bars on the same scale.
function Meter({ label, before, after, max, note }: (typeof research.results)[number]) {
  const pct = (v: number) => `${(v / max) * 100}%`;
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="font-mono text-[13px] text-muted">
          {before.toFixed(3).replace(/0$/, "")} → <span className="font-medium text-accent">{after.toFixed(3).replace(/0$/, "")}</span>
        </p>
      </div>
      <div className="flex flex-col gap-1.5" aria-hidden="true">
        <div className="h-2.5 rounded-full bg-paper">
          <div className="h-full rounded-full bg-line-strong" style={{ width: pct(before) }} />
        </div>
        <div className="h-2.5 rounded-full bg-paper">
          <div className="h-full rounded-full bg-accent" style={{ width: pct(after) }} />
        </div>
      </div>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-line-strong" />baseline</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" />my method</span>
        <span>· {note}</span>
      </p>
    </div>
  );
}

export default function Research() {
  const { links } = research;
  return (
    <section id="research" aria-labelledby="research-title" className="border-y border-line bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:px-12 md:py-24">
        <SectionHeading id="research-title" eyebrow="Research" title="What I'm working on now" />

        <div className="flex flex-wrap items-start gap-8">
          <article className="min-w-0 flex-[999_1_640px] overflow-hidden rounded-2xl border border-line bg-card">
            <div className="flex flex-wrap justify-between gap-2 border-b border-line bg-paper/70 px-6 py-3.5 font-mono text-xs text-muted md:px-8">
              <span>{research.label}</span>
              <span>{research.collaborators}</span>
            </div>

            <div className="flex flex-col gap-8 p-6 md:p-8">
              <h3 className="font-display text-[clamp(24px,2.6vw,32px)] font-bold leading-tight tracking-[-0.02em]">
                {research.title}
              </h3>

              <dl className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <dt className="font-mono text-xs tracking-[0.12em] text-accent">THE QUESTION</dt>
                  <dd className="text-[15px] leading-relaxed text-ink-soft">{research.question}</dd>
                </div>
                <div className="flex flex-col gap-2">
                  <dt className="font-mono text-xs tracking-[0.12em] text-accent">THE APPROACH</dt>
                  <dd className="text-[15px] leading-relaxed text-ink-soft">{research.approach}</dd>
                </div>
              </dl>

              <div className="flex flex-col gap-5 rounded-xl border border-line bg-paper/60 p-5">
                <p className="font-mono text-xs tracking-[0.12em] text-accent">THE RESULT</p>
                <div className="grid gap-6 md:grid-cols-2">
                  {research.results.map((r) => (
                    <Meter key={r.label} {...r} />
                  ))}
                </div>
                <p className="text-sm text-muted">{research.context}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {research.stack.map((t) => (
                    <span key={t} className="rounded-md bg-wash px-2.5 py-1 font-mono text-xs text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 text-sm font-medium">
                  {links.poster && <a href={links.poster} className="text-accent hover:text-accent-dark">Poster ↗</a>}
                  {links.code && <a href={links.code} className="text-accent hover:text-accent-dark">Code ↗</a>}
                </div>
              </div>
            </div>
          </article>

          <aside className="flex-[1_1_200px] lg:pt-24">
            <p className="max-w-[240px] -rotate-2 font-hand text-[26px] leading-tight text-accent">{research.margin}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
