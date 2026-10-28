"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { categories, projects, type Category } from "@/content/site";

// "use client" because the filter buttons change what's shown.
export default function Projects() {
  const [active, setActive] = useState<Category | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="projects-title" eyebrow="Projects" title="Things I've built" />

          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const on = c.id === active;
              const count = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(c.id)}
                  className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border px-4 text-[13px] transition-colors ${
                    on
                      ? "border-ink bg-ink text-white"
                      : "border-line-strong bg-card text-ink-soft hover:border-accent hover:text-accent"
                  }`}
                >
                  {c.label}
                  <span className={`font-mono text-[11px] ${on ? "text-white/70" : "text-muted"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <li key={p.title}>
              <article className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-card p-6 transition-[box-shadow,translate] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(10,26,58,0.08)]">
                <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted">
                  <span>ENTRY {String(i + 1).padStart(2, "0")}</span>
                  <span>{p.when}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.01em]">{p.title}</h3>
                {p.badge && (
                  <span className="self-start rounded-full bg-wash px-2.5 py-0.5 text-[11px] font-semibold text-accent">{p.badge}</span>
                )}
                <p className="text-[15px] leading-relaxed text-muted">{p.description}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      // luggage-tag style chip
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-[4px_999px_999px_4px] border border-line-strong py-0.5 pr-2.5 pl-1.5 font-mono text-[11px] text-ink-soft"
                      >
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full border border-muted" />
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-medium">
                    {p.github && (
                      <a href={p.github} className="text-accent hover:text-accent-dark" aria-label={`${p.title} on GitHub`}>
                        GitHub ↗
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} className="text-accent hover:text-accent-dark" aria-label={`${p.title} live demo`}>
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
