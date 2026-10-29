import { DocIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { publications } from "@/content/site";

export default function Publications() {
  return (
    <section id="publications" data-label="Publications" aria-labelledby="publications-title" className="border-y border-line bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading id="publications-title" eyebrow="Publications" title="Published work" />
          <p className="font-hand text-[20px] text-accent">ideas that made it to print</p>
        </div>

        <ol className="flex flex-col border-t border-line">
          {publications.map((p) => (
            <li key={p.title} className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-line py-6">
              <DocIcon className="h-5 w-5 translate-y-0.5 text-accent" />
              <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-1.5">
                <h3 className="font-display text-lg leading-snug font-semibold">{p.title}</h3>
                <p className="text-sm text-muted">
                  {p.venue} · {p.year}
                  <span className="ml-2 rounded-full bg-wash px-2 py-0.5 text-[11px] font-semibold text-accent">{p.note}</span>
                </p>
              </div>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:text-accent-dark">
                  Read paper ↗
                </a>
              ) : (
                <span className="font-mono text-sm text-muted">Link coming soon</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
