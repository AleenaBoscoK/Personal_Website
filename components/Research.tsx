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
    <section id="research" data-label="Research" aria-labelledby="research-title" className="border-y border-line bg-card/70">
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

              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs tracking-[0.12em] text-accent">THE QUESTION</p>
                <p className="max-w-3xl text-base leading-relaxed text-ink-soft">{research.question}</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-mono text-xs tracking-[0.12em] text-accent">THE APPROACH</p>
                {/* The pipeline as steps joined by a dotted route */}
                <ol className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                  {research.approach.map((a, i) => (
                    <li key={a.step} className="flex flex-col gap-2 border-t-2 border-dotted border-line-strong pt-3">
                      <span className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-muted">{i + 1}</span>
                        <span className="font-display text-lg font-bold text-ink">{a.step}</span>
                      </span>
                      <span className="text-[14.5px] leading-relaxed text-ink-soft">{a.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

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
                  {links.poster && <a href={links.poster} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark">Poster ↗</a>}
                  {links.code && <a href={links.code} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark">Code ↗</a>}
                </div>
              </div>
            </div>
          </article>

          <aside className="flex-[1_1_200px] lg:pt-24">
            <p className="max-w-[240px] font-hand text-[20px] leading-tight text-accent">{research.margin}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
