"use client";

import { useId, useState } from "react";
import type { Involvement } from "@/content/site";

// A collapsible "Leadership & clubs" panel for one stop on the journey.
// "use client" (top line) lets this one component run in the browser so it can open and close.
export default function InvolvementDropdown({ items }: { items: Involvement[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-xl border border-line bg-card transition-shadow hover:shadow-[0_6px_20px_rgba(11,26,51,0.06)]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 text-left"
      >
        <span className="flex items-center gap-2.5">
          <span className="text-[13px] font-semibold text-ink-soft">Leadership &amp; clubs</span>
          <span className="rounded-full bg-wash px-2 py-0.5 font-mono text-[11px] text-accent">
            {items.length}
          </span>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-4 w-4 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Smooth open/close: the grid row animates from 0fr to 1fr */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <ul
            className={`flex flex-col gap-4 border-t border-dashed border-line-strong px-4 pt-4 pb-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          >
            {items.map((item) => (
              <li key={`${item.role}-${item.org}`} className="relative pl-5">
                <span aria-hidden="true" className="absolute top-[7px] left-0 h-2 w-2 rounded-full border-2 border-accent" />
                <p className="text-sm font-semibold text-ink">{item.role}</p>
                <p className="text-[13px] text-muted">{item.org}</p>
                {item.detail && <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.detail}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}