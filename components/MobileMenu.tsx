"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { nav, profile } from "@/content/site";

// The ☰ menu shown on phones and tablets instead of the row of links.
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-card text-ink"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-[0_18px_30px_rgba(10,26,58,0.08)]">
          <nav aria-label="Main" className="flex flex-col px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-base text-ink no-underline last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 border-t border-line px-4 py-3 text-ink-soft">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5">
              <GitHubIcon />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2.5">
              <MailIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
