import { profile } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" data-label="Boarding" className="relative overflow-hidden">
      {/* Journey background: a faint dotted flight path across the hero */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M-40 420 C 220 140, 420 460, 640 260 S 1000 60, 1260 160"
          fill="none"
          stroke="#b3c8f0"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-8 px-5 py-10 sm:gap-12 sm:py-16 md:px-12 md:py-24">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
          <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-card px-3.5 py-1.5 text-[13px] text-ink-soft">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#2e8b57]" />
            {profile.status}
          </p>

          <h1 className="font-display text-[clamp(40px,5.2vw,64px)] font-bold leading-[1.05] tracking-[-0.02em]">
            {profile.firstName} {profile.lastName}
          </h1>

          <p className="max-w-xl font-display text-[clamp(19px,2vw,24px)] font-medium leading-snug tracking-[-0.01em] text-ink-soft">
            {profile.pitch}
          </p>

          <p className="text-[15px] leading-relaxed text-muted">{profile.subline}</p>

          <div className="mt-1 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-[15px] font-medium text-white no-underline transition-colors hover:bg-accent-dark"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full border border-line-strong bg-card px-6 text-[15px] font-medium text-ink no-underline transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* On phones: a small headshot beside the ticket. From tablet up: big headshot with the ticket below. */}
        <div className="flex w-full items-center gap-4 sm:max-w-[320px] sm:flex-[1_1_260px] sm:flex-col sm:items-stretch sm:gap-3.5">
          {/* Swap this box for: <Image src="/headshot.jpg" ... /> once you have the photo */}
          <div className="flex aspect-[4/5] w-24 shrink-0 items-center justify-center rounded-2xl bg-mist text-xs text-muted sm:w-auto sm:text-sm">
            [Headshot]
          </div>

          {/* Ticket stub */}
          <div className="flex flex-1 overflow-hidden rounded-xl border border-line bg-card font-mono sm:flex-none">
            <div className="flex flex-1 flex-col gap-1 px-3 py-3 sm:px-3.5">
              <span className="text-[10px] tracking-[0.14em] text-muted">ROUTE</span>
              <span className="whitespace-nowrap text-sm">
                AUH → MAA → <span className="text-accent">JFK</span>
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l-[1.5px] border-dashed border-line px-3 py-3 sm:px-3.5">
              <span className="text-[10px] tracking-[0.14em] text-muted">NOW</span>
              <span className="text-sm whitespace-nowrap">{profile.currentCity}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
