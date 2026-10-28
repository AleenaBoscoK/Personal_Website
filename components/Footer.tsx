import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-8 text-sm text-muted md:px-12">
        <span>
          © 2026 {profile.firstName} {profile.lastName}
        </span>
        <span className="font-mono text-xs tracking-[0.08em]">
          {profile.route.join(" → ")} · {profile.coordinates}
        </span>
        <span className="flex gap-5">
          <a href={profile.links.github} className="hover:text-accent">GitHub</a>
          <a href={profile.links.linkedin} className="hover:text-accent">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
        </span>
      </div>
    </footer>
  );
}
