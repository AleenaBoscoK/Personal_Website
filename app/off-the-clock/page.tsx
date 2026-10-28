import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import { JournalIcon } from "@/components/Icons";
import Nav from "@/components/Nav";
import { journey, profile, type Involvement } from "@/content/site";

export const metadata: Metadata = {
  title: `Off the clock — ${profile.firstName} ${profile.lastName}`,
  description: "Clubs, leadership and life outside work, as pages from a travel journal.",
};

// A taped-in photo. Until you add a photo (photo: "/journal/name.jpg"), it shows a line drawing.
function Snapshot({ item, tilt }: { item: Involvement; tilt: number }) {
  return (
    <figure className="relative w-full max-w-[340px] shrink-0" style={{ rotate: `${tilt}deg` }}>
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-3 bg-[#bcd1f7]/80"
      />
      <div className="bg-card p-3 pb-12 shadow-[0_16px_34px_rgba(10,26,58,0.1)]">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#e6eefe,#d3e0f8)] text-accent">
          {item.photo ? (
            <Image src={item.photo} alt={item.caption ?? item.role} fill sizes="340px" className="object-cover" />
          ) : (
            <JournalIcon name={item.icon} className="h-20 w-20 opacity-75" />
          )}
        </div>
        {item.caption && (
          <figcaption className="absolute bottom-2.5 left-5 font-hand text-[22px] text-ink-soft">{item.caption}</figcaption>
        )}
      </div>
    </figure>
  );
}

// Where each chapter's entries start in the overall count, so photos keep alternating sides.
const starts = journey.map((_, i) => journey.slice(0, i).reduce((n, s) => n + s.involvement.length, 0));

export default function OffTheClock() {
  return (
    <>
      <Nav />
      <main>
        <section id="top" data-label="Off the clock" className="relative overflow-hidden">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              d="M-40 330 C 240 120, 460 380, 700 210 S 1020 60, 1260 120"
              fill="none"
              stroke="#b3c8f0"
              strokeWidth="1.5"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-5 py-16 md:px-12 md:py-24">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Off the clock</p>
            <h1 className="max-w-3xl font-display text-[clamp(36px,5vw,58px)] leading-[1.05] font-bold tracking-[-0.02em]">
              Pages from my travel journal
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-muted">
              The clubs, teams and stages that taught me to lead, organise and work with people, one city at a time.
            </p>
            <p className="font-hand text-[28px] text-accent -rotate-2 self-start">the parts that don&apos;t fit on a résumé.</p>
            <nav aria-label="Chapters" className="mt-2 flex flex-wrap gap-3">
              {journey.map((stop, i) => (
                <a
                  key={stop.id}
                  href={`#${stop.id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-card px-4 text-sm text-ink no-underline hover:border-accent"
                >
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {stop.cityShort}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {journey.map((stop, i) => (
          <section
            key={stop.id}
            id={stop.id}
            data-label={stop.cityShort}
            aria-labelledby={`${stop.id}-title`}
            className={i % 2 === 0 ? "border-y border-line bg-card/70" : ""}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 md:px-12 md:py-24">
              <header className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-xs tracking-[0.14em] text-accent">
                    CHAPTER {String(i + 1).padStart(2, "0")} · {stop.city.toUpperCase()} · {stop.years}
                  </p>
                  <h2
                    id={`${stop.id}-title`}
                    className="font-display text-[clamp(30px,4vw,46px)] leading-[1.08] font-bold tracking-[-0.02em]"
                  >
                    {stop.chapter}
                  </h2>
                </div>
                {stop.note && <p className="font-hand text-[26px] text-accent -rotate-2">{stop.note}</p>}
              </header>

              <ol className="flex flex-col gap-16 md:gap-20">
                {stop.involvement.map((item, j) => {
                  const left = (starts[i] + j) % 2 === 0;
                  return (
                    <li
                      key={item.role + item.dates}
                      className={`flex flex-col items-center gap-8 md:gap-14 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <Snapshot item={item} tilt={left ? -2 : 2} />
                      <div className="flex w-full flex-col gap-2.5">
                        <p className="font-mono text-xs tracking-[0.12em] text-accent">
                          {stop.cityShort.toUpperCase()}
                          {item.dates && ` · ${item.dates}`}
                        </p>
                        <h3 className="font-display text-[clamp(22px,2.6vw,30px)] leading-tight font-bold tracking-[-0.02em]">
                          {item.role}
                        </h3>
                        <p className="text-[15px] text-muted">{item.org}</p>
                        {item.story && <p className="max-w-xl text-base leading-relaxed text-ink-soft">{item.story}</p>}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        ))}

      </main>
      <Footer />
    </>
  );
}
