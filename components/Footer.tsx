import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-8 text-sm text-muted md:px-12">
        <span>
          © 2026 {profile.firstName} {profile.lastName}
        </span>
        <span className="font-mono text-xs tracking-[0.08em]">
          {profile.route.join(" → ")}
        </span>
        <span className="flex gap-1">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 hover:text-accent">
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 hover:text-accent">
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 hover:text-accent">
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
        </span>
      </div>
    </footer>
  );
}
