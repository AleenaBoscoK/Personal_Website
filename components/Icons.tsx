import { brand } from "@/components/icon-paths";

type IconProps = { className?: string };

// Line icons (24×24, drawn with the current text colour) for tools that have no brand logo.
const generic: Record<string, React.ReactNode> = {
  SQL: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
      <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </>
  ),
  XGBoost: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <circle cx="6" cy="13" r="2" />
      <circle cx="18" cy="13" r="2" />
      <circle cx="3.5" cy="20.5" r="1.4" />
      <circle cx="9" cy="20.5" r="1.4" />
      <path d="m10.8 6.2-3.6 5M13.2 6.2l3.6 5M5.2 14.8l-1.1 4.3M6.9 14.8l1.5 4.4" />
    </>
  ),
  LLMs: (
    <>
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.2l-1.8-5.6-5.7-1.8L10.2 9Z" />
      <path d="M19 17.5v4M17 19.5h4" />
    </>
  ),
  RAG: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h6" />
      <path d="M14 3v4.5h4.5M14 3l4.5 4.5V11" />
      <circle cx="16.5" cy="16" r="3" />
      <path d="m18.7 18.2 2.3 2.3M8 10h4M8 13.5h3" />
    </>
  ),
  "Multi-agent systems": (
    <>
      <circle cx="12" cy="5" r="2.3" />
      <circle cx="5" cy="18" r="2.3" />
      <circle cx="19" cy="18" r="2.3" />
      <path d="M10.9 7.1 6.2 15.8M13.1 7.1l4.7 8.7M7.3 18h9.4" />
    </>
  ),
  "REST APIs": (
    <>
      <path d="M8 4H7a2 2 0 0 0-2 2v3.5L3 12l2 2.5V18a2 2 0 0 0 2 2h1M16 4h1a2 2 0 0 1 2 2v3.5l2 2.5-2 2.5V18a2 2 0 0 1-2 2h-1" />
      <path d="M9.5 12h5" />
    </>
  ),
  Qdrant: (
    <>
      <path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4Z" />
      <path d="m4 7.4 8 4.6 8-4.6M12 12v9.2" />
    </>
  ),
  AWS: <path d="M7 18.5h10.5a4.25 4.25 0 0 0 .6-8.46A6.25 6.25 0 0 0 6 9.75 4.4 4.4 0 0 0 7 18.5Z" />,
  "CI/CD": (
    <>
      <path d="M12 12c-2-2.7-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.3 5.5-4Zm0 0c2 2.7 3.6 4 5.5 4a4 4 0 0 0 0-8c-1.9 0-3.5 1.3-5.5 4Z" />
    </>
  ),
};

// The logo for one tool on the skills list.
export function ToolIcon({ name, className = "h-[17px] w-[17px]" }: IconProps & { name: string }) {
  if (brand[name]) {
    return (
      <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
        <path d={brand[name]} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {generic[name] ?? <circle cx="12" cy="12" r="3" />}
    </svg>
  );
}

// ── Contact icons ───────────────────────────────────────────

export function GitHubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path d={brand.GitHub} />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm7 0h3.8v1.6h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.1c0-1.22-.02-2.78-1.8-2.78-1.8 0-2.08 1.33-2.08 2.7V21H10V9.75Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function DocIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

export function PlaneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    </svg>
  );
}

// ── Journal icons (Off the clock page, shown until a photo is added) ──

// One dancer, reused by the dance icons below.
const dancer = (
  <>
    <circle cx="14" cy="4" r="1.8" />
    <path d="M13.4 6.2 11.6 12.5M13 8l4.5-2.8L19 2.5M12.8 8.3 8.5 9.2 6 7.5M11.6 12.5l1 5-.6 4M11.6 12.5 8 15.5l-3-1" />
  </>
);

const journal: Record<string, React.ReactNode> = {
  flag: <path d="M5 21V4m0 0h11l-2 3.5 2 3.5H5" />,
  // theatre masks: cultural programmes
  masks: (
    <>
      <path d="M2.5 3.5h9v5a4.5 4.5 0 0 1-9 0Z" />
      <path d="M5 7h1M8 7h1M5.2 10.2c1 1 2.6 1 3.6 0" />
      <path d="M12.5 10.5h9v5a4.5 4.5 0 0 1-9 0Z" />
      <path d="M15 14h1M18 14h1M15.2 18.4c1-1 2.6-1 3.6 0" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  // a dancer mid-move: dance competitions
  dancer,
  // two dancers: a dance crew
  dancers: (
    <>
      <g transform="translate(-4.5 4) scale(.78)" strokeWidth="1.6">{dancer}</g>
      <g transform="translate(28.5 4) scale(-.78 .78)" strokeWidth="1.6">{dancer}</g>
    </>
  ),
  // a dancer under a spotlight: running dance events
  spotlight: (
    <>
      <path d="M2.5 2.5h4l1 2.5h-6Z" />
      <path d="M4.5 5 9 22M4.5 5 22 17" strokeDasharray="1.5 2" />
      <g transform="translate(9 7) scale(.62)" strokeWidth="2">{dancer}</g>
      <path d="M8 22h14" />
    </>
  ),
  // two people and a speech bubble: mentoring / advising
  mentor: (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <path d="M3 19.5a5 5 0 0 1 10 0" />
      <circle cx="16.5" cy="13" r="2" />
      <path d="M13 21.5a3.5 3.5 0 0 1 7 0" />
      <path d="M15 2.5h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3l-1.5 1.5V7.5H15a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
    </>
  ),
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  ticket: (
    <>
      <path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4Z" />
      <path d="M14.5 6v12" strokeDasharray="1.5 2.5" />
    </>
  ),
};

export function JournalIcon({ name, className = "h-12 w-12" }: IconProps & { name?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {journal[name ?? ""] ?? journal.globe}
    </svg>
  );
}
