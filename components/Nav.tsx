import Link from "next/link";
import FlightProgress from "@/components/FlightProgress";
import MobileMenu from "@/components/MobileMenu";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { nav, profile } from "@/content/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-x-8 px-5 pt-3 md:px-12">
        <Link href="/" className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink no-underline">
          {profile.firstName}
          <span className="text-accent">.</span>
        </Link>

        {/* On laptops the links sit in the bar; on phones and tablets they're in the ☰ menu */}
        <nav aria-label="Main" className="hidden gap-6 text-sm lg:flex">
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

        <div className="flex items-center gap-1.5 xl:gap-0.5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hidden p-2 text-ink-soft hover:text-accent xl:inline-flex">
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hidden p-2 text-ink-soft hover:text-accent xl:inline-flex">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hidden p-2 text-ink-soft hover:text-accent xl:inline-flex">
            <MailIcon />
          </a>
          <a
            href={profile.links.resume} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-10 xl:ml-2 items-center rounded-full border border-line-strong bg-card px-4 text-sm text-ink no-underline hover:border-accent"
          >
            Résumé ↓
          </a>
          <MobileMenu />
        </div>
      </div>
      <FlightProgress />
    </header>
  );
}
