import SectionHeading from "@/components/SectionHeading";
import { earlierExperience, experience } from "@/content/site";

const tagStyle: Record<string, string> = {
  Current: "bg-[#e3f4ea] text-[#1f6b43]",
  Published: "bg-wash text-accent",
  Teaching: "bg-[#fdf0dc] text-[#8a5a12]",
};

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:px-12 md:py-24">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
          intro="Research, industry and teaching across three countries. Most recent first."
        />

        {/* A dotted flight path runs down the left, with one pin per role */}
        <ol className="relative flex flex-col gap-6 md:pl-10">
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[11px] hidden border-l-2 border-dotted border-line-strong md:block"
          />
          {experience.map((job) => (
            <li key={job.role + job.dates} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-8 -left-10 hidden h-6 w-6 items-center justify-center rounded-full border border-line-strong bg-card md:flex"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <article className="flex flex-wrap gap-x-10 gap-y-4 rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-[0_10px_30px_rgba(10,26,58,0.06)] md:p-7">
                <div className="flex flex-[0_1_190px] flex-col gap-2">
                  <span className="font-mono text-[13px] text-ink-soft">{job.dates}</span>
                  <span className="inline-flex items-center gap-1.5 self-start rounded-md border border-line px-2 py-1 font-mono text-[11px] tracking-[0.08em] text-muted">
                    <span className="text-accent">{job.code}</span> · {job.place}
                  </span>
                </div>

                <div className="flex min-w-0 flex-[999_1_440px] flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold tracking-[-0.01em]">{job.role}</h3>
                    {job.tags?.map((t) => (
                      <span key={t} className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagStyle[t] ?? "bg-wash text-accent"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-[15px] text-muted">{job.org}</p>
                  {job.note && (
                    <p className="mt-1 rounded-lg bg-paper px-3 py-2 text-[13px] leading-relaxed text-ink-soft">{job.note}</p>
                  )}
                  <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] leading-relaxed text-ink-soft marker:text-accent-soft">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3 md:pl-10">
          <h3 className="font-mono text-xs tracking-[0.14em] text-muted">EARLIER STOPS</h3>
          <ul className="flex flex-col divide-y divide-line rounded-2xl border border-line bg-card">
            {earlierExperience.map((e) => (
              <li key={e.org} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 px-6 py-4">
                <span className="w-36 shrink-0 font-mono text-[13px] text-muted">{e.dates}</span>
                <span className="min-w-0 flex-[1_1_260px]">
                  <span className="font-semibold">{e.role}</span>
                  <span className="text-muted"> · {e.org}</span>
                </span>
                <span className="flex-[1_1_320px] text-sm text-muted">{e.line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
