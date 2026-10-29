import CopyEmail from "@/components/CopyEmail";
import DepartureBoard from "@/components/DepartureBoard";
import { DocIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" data-label="Contact" aria-labelledby="contact-title" className="border-t border-line bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Next stop: your team?"
            intro="I'm looking for software, ML and AI roles starting after I graduate in May 2027. If something here caught your eye, I'd love to hear from you."
          />
          <p className="font-hand text-[20px] text-accent">always up for a coffee chat</p>
        </div>

        <DepartureBoard />

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-accent px-6 text-[15px] font-medium text-white no-underline transition-colors hover:bg-accent-dark"
          >
            <LinkedInIcon />
            Let&apos;s connect on LinkedIn
          </a>
          <CopyEmail email={profile.email} />
          <a
            href={profile.links.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line-strong bg-card px-5 text-[15px] font-medium text-ink no-underline transition-colors hover:border-accent"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 px-3 text-[15px] font-medium text-ink hover:text-accent">
            <DocIcon />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
