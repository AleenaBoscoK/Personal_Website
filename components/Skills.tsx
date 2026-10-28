import SectionHeading from "@/components/SectionHeading";
import { certifications, skills } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="skills-title" eyebrow="Skills" title="What's in my toolkit" />
          {certifications.map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3">
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-wash">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="6" />
                  <path d="m8.5 14.5-1.5 7 5-3 5 3-1.5-7" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold">{c.name}</span>
                <span className="font-mono text-xs text-muted">{c.detail}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6">
              <h3 className="font-mono text-xs tracking-[0.14em] text-accent">{s.group.toUpperCase()}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-soft">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
