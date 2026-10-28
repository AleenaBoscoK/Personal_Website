import Link from "next/link";
import FlightProgress from "@/components/FlightProgress";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { nav, profile } from "@/content/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-1 px-5 pt-3 md:px-12">
        <Link href="/" className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink no-underline">
          {profile.firstName}
          <span className="text-accent">.</span>
        </Link>

        {/* On phones the links sit on their own row and scroll sideways */}
        <nav
          aria-label="Main"
          className="order-3 -mx-5 flex w-[calc(100%+2.5rem)] gap-6 overflow-x-auto px-5 text-sm md:order-none md:mx-0 md:w-auto md:overflow-visible md:px-0"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-2 text-muted no-underline transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5">
          <a href={profile.links.github} aria-label="GitHub" className="hidden p-2 text-ink-soft hover:text-accent sm:inline-flex">
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin} aria-label="LinkedIn" className="hidden p-2 text-ink-soft hover:text-accent sm:inline-flex">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hidden p-2 text-ink-soft hover:text-accent sm:inline-flex">
            <MailIcon />
          </a>
          <a
            href={profile.links.resume}
            className="ml-2 inline-flex min-h-10 items-center rounded-full border border-line-strong bg-card px-4 text-sm text-ink no-underline hover:border-accent"
          >
            Résumé ↓
          </a>
        </div>
      </div>
      <FlightProgress />
    </header>
  );
}
