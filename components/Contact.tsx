import CopyEmail from "@/components/CopyEmail";
import DepartureBoard from "@/components/DepartureBoard";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-12 md:py-24">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Next stop: your team?"
          intro="I'm looking for software, ML and AI roles starting after I graduate in May 2027. If something here caught your eye, I'd love to hear from you."
        />

        <DepartureBoard />

        <div className="flex flex-wrap items-center gap-3">
          <CopyEmail email={profile.email} />
          <a
            href={profile.links.linkedin}
            className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-[15px] font-medium text-white no-underline transition-colors hover:bg-accent-dark"
          >
            Connect on LinkedIn
          </a>
          <a href={profile.links.resume} className="inline-flex min-h-12 items-center px-3 text-[15px] font-medium text-ink hover:text-accent">
            Download résumé ↓
          </a>
        </div>
      </div>
    </section>
  );
}
