import { nav, profile } from "@/content/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-3 md:px-12">
        <a href="#top" className="font-serif text-2xl text-ink no-underline">
          {profile.firstName}
        </a>

        {/* On phones the links sit on their own row and scroll sideways */}
        <nav
          aria-label="Main"
          className="order-3 -mx-5 flex w-[calc(100%+2.5rem)] gap-6 overflow-x-auto px-5 pb-1 text-sm md:order-none md:mx-0 md:w-auto md:overflow-visible md:px-0 md:pb-0"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-2 text-muted no-underline transition-colors hover:text-plum"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a href={profile.links.github} className="hidden px-2.5 py-2 text-sm text-ink no-underline hover:text-plum sm:inline">
            GitHub
          </a>
          <a href={profile.links.linkedin} className="hidden px-2.5 py-2 text-sm text-ink no-underline hover:text-plum sm:inline">
            LinkedIn
          </a>
          <a
            href={profile.links.resume}
            className="inline-flex min-h-11 items-center rounded-full border border-[#cfcbdb] bg-card px-4 text-sm text-ink no-underline hover:border-plum"
          >
            Résumé ↓
          </a>
        </div>
      </div>
    </header>
  );
}