"use client";

import { useState } from "react";
import { GitHubIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { categories, projects, type Category, type Project } from "@/content/site";

const short: Record<Category, string> = { llm: "LLM", web: "SOFTWARE", ml: "ML" };

// Postmark date, e.g. "Jul — Nov 2024" → NOV 2024, "Fall 2026" → FALL 2026
function postmark(when: string) {
  const year = when.match(/\d{4}/)?.[0] ?? "";
  const words = when.replace(/\d{4}/, "").split(/[—–-]/).map((w) => w.trim()).filter(Boolean);
  const month = (words.at(-1) ?? "").toUpperCase();
  return { month, year };
}

function ArrowLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
    >
      {children}
    </a>
  );
}

function Postcard({ p, n }: { p: Project; n: number }) {
  const [flipped, setFlipped] = useState(false);
  const { month, year } = postmark(p.when);
  const num = String(n).padStart(2, "0");

  return (
    <article className="postcard h-full" data-flipped={flipped}>
      <div className="postcard-inner h-full">
        {/* ── Front: everything a recruiter needs at a glance ── */}
        <div
          inert={flipped}
          className="relative flex min-h-[330px] flex-col gap-3 overflow-hidden rounded-md bg-card p-6 shadow-[0_2px_0_var(--color-line),0_16px_34px_rgba(10,26,58,0.08)]"
        >
          {/* faint flight path across the card */}
          <svg aria-hidden="true" viewBox="0 0 360 330" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
            <path d="M-10 250 C 80 140, 170 300, 260 170 S 340 90, 380 110" fill="none" stroke="#dbe6f8" strokeWidth="2" strokeDasharray="3 7" />
          </svg>

          {/* stamp + postmark */}
          <div aria-hidden="true" className="absolute top-5 right-5 flex items-start">
            <div className="mt-3 -mr-4 flex h-[58px] w-[58px] -rotate-12 flex-col items-center justify-center rounded-full border-[1.5px] border-accent/50 font-mono text-[8.5px] leading-tight text-accent/80">
              <span>{month}</span>
              <span>{year}</span>
            </div>
            <div className="flex h-[66px] w-[54px] flex-col items-center justify-center gap-0.5 rounded-[3px] border-2 border-dashed border-line-strong bg-wash font-mono text-accent">
              <span className="text-[13px]">{num}</span>
              <span className="text-[7.5px] tracking-[0.06em]">{short[p.category]}</span>
            </div>
          </div>

          <div className="relative mt-auto flex flex-col gap-2.5 pt-16">
            <span className="font-mono text-xs text-muted">{p.when}</span>
            <h3 className="font-display text-[22px] leading-tight font-bold tracking-[-0.02em]">{p.title}</h3>
            {p.badge && (
              <span className="self-start rounded-full bg-wash px-2.5 py-0.5 text-[11px] font-semibold text-accent">{p.badge}</span>
            )}
            <p className="text-[15px] leading-relaxed text-ink-soft">{p.summary}</p>
            <p className="font-mono text-[11.5px] leading-relaxed text-muted">{p.stack.join(" · ")}</p>
          </div>

          <div className="relative flex items-center justify-between gap-3 border-t border-dashed border-line-strong pt-3">
            <button
              type="button"
              onClick={() => setFlipped(true)}
              aria-label={`Read more about ${p.title}`}
              className="inline-flex min-h-10 cursor-pointer items-center gap-2 font-hand text-[15px] text-accent hover:text-accent-dark"
            >
              flip for the full story ↻
            </button>
            <span className="flex items-center gap-4">
              {p.live && (
                <ArrowLink href={p.live} label={`${p.title} live site`}>
                  Live ↗
                </ArrowLink>
              )}
              {p.github && (
                <ArrowLink href={p.github} label={`${p.title} on GitHub`}>
                  <GitHubIcon className="h-[18px] w-[18px]" />
                </ArrowLink>
              )}
            </span>
          </div>
        </div>

        {/* ── Back: the full story, written like a postcard ── */}
        <div
          inert={!flipped}
          className="postcard-back flex min-h-[330px] flex-col gap-4 rounded-md bg-[#fffdf8] p-6 shadow-[0_2px_0_var(--color-line),0_16px_34px_rgba(10,26,58,0.08)]"
        >
          <p className="font-hand text-[17px] leading-none text-accent">
            {p.title}, {p.when}
          </p>
          <p className="text-[14.5px] leading-relaxed text-ink-soft">{p.description}</p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-line-strong pt-3">
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="inline-flex min-h-10 cursor-pointer items-center font-hand text-[15px] text-accent hover:text-accent-dark"
            >
              ↺ flip back
            </button>
            <span className="flex items-center gap-4">
              {p.live && (
                <ArrowLink href={p.live} label={`${p.title} live site`}>
                  Live site ↗
                </ArrowLink>
              )}
              {p.github && (
                <ArrowLink href={p.github} label={`${p.title} on GitHub`}>
                  <GitHubIcon className="h-[18px] w-[18px]" /> GitHub
                </ArrowLink>
              )}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

// "use client" because the filter tabs and the postcard flips change what's shown.
export default function Projects() {
  const [active, setActive] = useState<Category | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" data-label="Projects" aria-labelledby="projects-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading
            id="projects-title"
            eyebrow="Projects"
            title="Postcards from my projects"
            intro="The essentials are on the front. Flip a card for the full story."
          />
          <p className="font-hand text-[20px] text-accent">things I couldn&apos;t stop tinkering with</p>
        </div>

        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-7 gap-y-1 border-b border-line">
          {categories.map((c) => {
            const on = c.id === active;
            const count = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`-mb-px inline-flex min-h-11 cursor-pointer items-center gap-2 border-b-2 text-[15px] transition-colors ${
                  on ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:text-accent"
                }`}
              >
                {c.label}
                <span className="font-mono text-[11px] text-muted">{count}</span>
              </button>
            );
          })}
        </div>

        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <li key={p.title}>
              <Postcard p={p} n={projects.indexOf(p) + 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
