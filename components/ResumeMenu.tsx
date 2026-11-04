"use client";

import { useEffect, useRef, useState } from "react";
import { DocIcon } from "@/components/Icons";
import { resumes } from "@/content/resumes";

// "Résumé ↓" button in the top bar. Opens a small menu to pick the SWE or ML/AI version.
export default function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative xl:ml-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="resume-menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-10 cursor-pointer items-center rounded-full border border-line-strong bg-card px-4 text-sm text-ink hover:border-accent"
      >
        Résumé ↓
      </button>

      {open && (
        <div
          id="resume-menu"
          className="absolute top-full right-0 z-50 mt-2 w-72 overflow-hidden rounded-xl border border-line bg-card shadow-[0_18px_30px_rgba(10,26,58,0.12)]"
        >
          <p className="px-4 pt-3 pb-1 font-mono text-[11px] tracking-[0.14em] text-muted">PICK A VERSION</p>
          {resumes.map((r) => (
            <a
              key={r.file}
              href={r.file}
              download={r.saveAs}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-ink no-underline hover:bg-wash"
            >
              <DocIcon className="h-4 w-4 text-accent" />
              {r.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
