import SectionHeading from "@/components/SectionHeading";
import { earlierExperience, experience } from "@/content/site";

const tagStyle: Record<string, string> = {
  Current: "bg-[#e3f4ea] text-[#1f6b43]",
  Published: "bg-wash text-accent",
  Teaching: "bg-[#fdf0dc] text-[#8a5a12]",
};

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// Experience as a logbook: one ruled line per role on a notebook page.
// Each line is a <details> element, so it opens and closes even without JavaScript.
export default function Experience() {
  return (
    <section id="experience" data-label="Experience" aria-labelledby="experience-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading
            id="experience-title"
            eyebrow="Experience"
            title="Experience logbook"
            intro="Research, industry and teaching across three countries, most recent first. Open any entry for the details."
          />
          <p className="font-hand text-[26px] text-accent -rotate-2">every stop taught me something new.</p>
        </div>

        {/* The notebook page: white paper with a red margin line */}
        <div className="rounded-sm bg-card bg-[linear-gradient(90deg,transparent_0_22px,#f3b8b8_22px_23px,transparent_23px)] py-2 pr-4 pl-9 shadow-[0_1px_0_var(--color-line),0_18px_40px_rgba(10,26,58,0.06)] md:bg-[linear-gradient(90deg,transparent_0_34px,#f3b8b8_34px_35px,transparent_35px)] md:pr-10 md:pl-14">
          <ol>
            {experience.map((job) => (
              <li key={job.role + job.dates} className="border-b border-[#c9d6ee] last:border-b-0">
                <details className="log-entry group" open={job.open}>
                  <summary className="flex cursor-pointer items-start gap-4 py-6 md:items-baseline md:gap-8">
                    <span className="hidden w-[150px] shrink-0 font-mono text-[13px] text-muted md:block">{job.dates}</span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="font-mono text-xs text-muted md:hidden">{job.dates}</span>
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="font-display text-[clamp(20px,2.2vw,26px)] leading-tight font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
                          {job.role}
                        </span>
                        {job.tags?.map((t) => (
                          <span key={t} className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagStyle[t] ?? "bg-wash text-accent"}`}>
                            {t}
                          </span>
                        ))}
                      </span>
                      <span className="text-[15px] text-muted">{job.org}</span>
                      <span className="text-sm text-ink-soft md:hidden">{job.place}</span>
                    </span>
                    <span className="hidden w-[190px] shrink-0 text-right text-sm text-ink-soft md:block">{job.place}</span>
                    <Chevron />
                  </summary>

                  <div className="flex flex-col gap-3 pb-7 md:ml-[182px] md:pr-12">
                    {job.note && (
                      <p className="rounded-lg bg-wash px-3.5 py-2.5 text-[14px] leading-relaxed text-ink-soft">{job.note}</p>
                    )}
                    <ul className="flex list-disc flex-col gap-2 pl-[18px] text-[15.5px] leading-relaxed text-ink-soft marker:text-accent-soft">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </li>
            ))}

            {/* Older, shorter roles folded into one entry */}
            <li>
              <details className="log-entry group">
                <summary className="flex cursor-pointer items-center gap-4 py-5 md:gap-8">
                  <span className="hidden w-[150px] shrink-0 font-mono text-xs tracking-[0.14em] text-muted md:block">EARLIER</span>
                  <span className="min-w-0 flex-1 text-[15px] text-muted">
                    <span className="mr-2 font-mono text-xs tracking-[0.14em] md:hidden">EARLIER ·</span>
                    {earlierExperience.map((e) => e.org.split(",")[0]).join(" · ")}
                  </span>
                  <Chevron />
                </summary>
                <ul className="flex flex-col gap-4 pb-6 md:ml-[182px] md:pr-12">
                  {earlierExperience.map((e) => (
                    <li key={e.org} className="flex flex-col gap-0.5">
                      <span className="font-mono text-xs text-muted">{e.dates}</span>
                      <span className="text-[15px]">
                        <span className="font-semibold">{e.role}</span>
                        <span className="text-muted"> · {e.org}</span>
                      </span>
                      <span className="text-sm leading-relaxed text-ink-soft">{e.line}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
