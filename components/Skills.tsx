import { ToolIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { certifications, skills } from "@/content/site";

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="hidden h-[17px] w-[17px] shrink-0 text-accent sm:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="m7.5 12.5 3 3 6-6.5" />
    </svg>
  );
}

// Skills as a packing checklist on a notebook page, each tool with its logo.
export default function Skills() {
  return (
    <section id="skills" data-label="Skills" aria-labelledby="skills-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading id="skills-title" eyebrow="Skills" title="Technical skills" />
          <p className="font-hand text-[20px] text-accent">travel light, pack the right tools</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 rounded-sm bg-card bg-[linear-gradient(90deg,transparent_0_18px,#f3b8b8_18px_19px,transparent_19px)] py-6 pr-3 pl-8 shadow-[0_1px_0_var(--color-line),0_18px_40px_rgba(10,26,58,0.06)] sm:gap-x-10 sm:gap-y-8 sm:py-8 sm:pr-6 sm:pl-10 md:bg-[linear-gradient(90deg,transparent_0_34px,#f3b8b8_34px_35px,transparent_35px)] md:pr-10 md:pl-16 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.group} className="flex flex-col gap-2.5">
              <h3 className="font-mono text-[11px] tracking-[0.14em] text-accent">{s.group.toUpperCase()}</h3>
              <ul>
                {s.items.map((t) => (
                  <li key={t} className="flex min-h-9 items-center gap-2 border-b border-mist py-1.5 text-[14px] leading-snug text-ink-soft sm:gap-2.5 sm:text-[15px]">
                    <Check />
                    <ToolIcon name={t} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {certifications.map((c) => (
          <div key={c.name} className="flex items-center gap-3 self-start rounded-xl border border-line bg-card px-4 py-3">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-wash text-accent">
              <ToolIcon name="AWS" className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">{c.name}</span>
              <span className="font-mono text-xs text-muted">{c.detail}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
