import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { JournalIcon } from "@/components/Icons";
import Nav from "@/components/Nav";
import { journey, profile, type Involvement } from "@/content/site";

export const metadata: Metadata = {
  title: `Off the clock — ${profile.firstName} ${profile.lastName}`,
  description: "Clubs, leadership and life outside work, as postcards from three cities.",
};

// One activity, written like the back of a postcard: the story on the left,
// and the "address" side (role, club, city, dates) with a stamp on the right.
function Postcard({ item, city, tilt }: { item: Involvement; city: string; tilt: number }) {
  return (
    <article
      className="relative w-full max-w-3xl overflow-hidden rounded-md bg-[#fffdf8] shadow-[0_2px_0_var(--color-line),0_16px_34px_rgba(10,26,58,0.08)]"
      style={{ rotate: `${tilt}deg` }}
    >
      {/* airmail stripe along the top edge */}
      <div
        aria-hidden="true"
        className="h-1.5 bg-[repeating-linear-gradient(135deg,#2563eb_0_10px,transparent_10px_16px,#f19a9a_16px_26px,transparent_26px_32px)]"
      />
      <div className="grid gap-5 p-6 md:grid-cols-[1.15fr_1fr] md:gap-0 md:p-7">
        {/* the message */}
        <p className="order-2 text-base leading-relaxed text-ink-soft md:order-1 md:pr-7">{item.story}</p>

        {/* the address side */}
        <div className="order-1 flex flex-col gap-3 md:order-2 md:border-l md:border-line-strong md:pl-7">
          <div className="flex items-start justify-between gap-4">
            <span className="font-hand text-[15px] text-accent">
              {city}
              {item.dates && ` · ${item.dates}`}
            </span>
            <span
              aria-hidden="true"
              className="flex h-[68px] w-[58px] shrink-0 rotate-3 items-center justify-center rounded-[3px] border-2 border-dashed border-line-strong bg-wash text-accent"
            >
              <JournalIcon name={item.icon} className="h-9 w-9" />
            </span>
          </div>
          <h3 className="border-b border-line pb-2 font-display text-[20px] leading-snug font-bold tracking-[-0.01em] text-ink">
            {item.role}
          </h3>
          <p className="border-b border-line pb-2 text-[15px] text-muted">{item.org}</p>
        </div>
      </div>
    </article>
  );
}

// Where each chapter's entries start in the overall count, so postcards keep alternating sides.
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
              Postcards from three cities
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-muted">
              The clubs, teams and stages that taught me to lead, organise and work with people, one city at a time.
            </p>
            <p className="font-hand text-[21px] text-accent self-start">the parts that don&apos;t fit on a résumé</p>
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
                {stop.note && <p className="font-hand text-[20px] text-accent">{stop.note}</p>}
              </header>

              <ol className="flex flex-col gap-10 md:gap-12">
                {stop.involvement.map((item, j) => {
                  const left = (starts[i] + j) % 2 === 0;
                  return (
                    <li key={item.role} className={`flex ${left ? "justify-start" : "justify-end"}`}>
                      <Postcard item={item} city={stop.cityShort} tilt={left ? -0.6 : 0.6} />
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
