import InvolvementDropdown from "@/components/InvolvementDropdown";
import PassportStamp from "@/components/PassportStamp";
import SectionHeading from "@/components/SectionHeading";
import { journey } from "@/content/site";

// ── Route chart ──────────────────────────────────────────────
// A small flight chart: real longitudes/latitudes squeezed into
// a 560×220 box (longitude -90 → 100, latitude 0 → 55).
const W = 560;
const H = 220;
const x = (lon: number) => ((lon + 90) / 190) * W;
const y = (lat: number) => ((55 - lat) / 55) * (H - 20) + 10;

const cities = [
  { code: "JFK", name: "New York", lon: -73.8, lat: 40.6, now: true },
  { code: "AUH", name: "Abu Dhabi", lon: 54.4, lat: 24.4 },
  { code: "MAA", name: "Chennai", lon: 80.3, lat: 13.1 },
];
const [jfk, auh, maa] = cities.map((c) => ({ ...c, cx: x(c.lon), cy: y(c.lat) }));

function RouteChart() {
  const lons = [-90, -60, -30, 0, 30, 60, 90];
  const lats = [0, 15, 30, 45];
  return (
    <svg
      role="img"
      aria-label="Route: Abu Dhabi to Chennai to New York"
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
    >
      {/* graticule: faint latitude / longitude lines, like a navigation chart */}
      <g stroke="#d5e2f7" strokeWidth="0.75">
        {lons.map((lon) => (
          <line key={`lon${lon}`} x1={x(lon)} y1="0" x2={x(lon)} y2={H} />
        ))}
        {lats.map((lat) => (
          <line key={`lat${lat}`} x1="0" y1={y(lat)} x2={W} y2={y(lat)} />
        ))}
      </g>
      <g fontFamily="var(--font-mono)" fontSize="9" fill="#6f87b8">
        {lats.slice(1).map((lat) => (
          <text key={`t${lat}`} x="4" y={y(lat) - 4}>{lat}°N</text>
        ))}
      </g>

      {/* legs of the journey */}
      <path
        d={`M${auh.cx} ${auh.cy} Q ${(auh.cx + maa.cx) / 2} ${auh.cy - 30} ${maa.cx} ${maa.cy}`}
        fill="none" stroke="var(--color-accent-soft)" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round"
      />
      <path
        d={`M${maa.cx} ${maa.cy} Q ${(maa.cx + jfk.cx) / 2} -70 ${jfk.cx} ${jfk.cy}`}
        fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round"
      />

      {/* city pins */}
      {[auh, maa, jfk].map((c) => (
        <g key={c.code}>
          {c.now && <circle cx={c.cx} cy={c.cy} r="11" fill="none" stroke="var(--color-accent)" opacity="0.35" />}
          <circle cx={c.cx} cy={c.cy} r={c.now ? 5.5 : 4.5} fill={c.now ? "var(--color-accent)" : "var(--color-ink)"} />
          <text
            x={c.cx} y={c.cy + 24}
            textAnchor={c.code === "MAA" ? "end" : c.code === "JFK" ? "start" : "middle"}
            fontFamily="var(--font-mono)" fontSize="12" fill="var(--color-ink)"
          >
            {c.code}
          </text>
          <text
            x={c.cx} y={c.cy + 38}
            textAnchor={c.code === "MAA" ? "end" : c.code === "JFK" ? "start" : "middle"}
            fontSize="11" fill="var(--color-muted)"
          >
            {c.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ── Section ─────────────────────────────────────────────────
export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="border-y border-line bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 md:px-12 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="flex-[1_1_380px]">
            <SectionHeading
              id="journey-title"
              eyebrow="Education"
              title="A journey across three cities"
              intro="From Abu Dhabi to Chennai to New York, each stop shaped how I think and what I build."
            />
          </div>
          <div className="w-full max-w-[540px] flex-[1_1_380px] rounded-2xl border border-line bg-paper/60 p-3">
            <RouteChart />
          </div>
        </div>

        <div className="relative">
          {/* the line that joins the three stops (desktop only) */}
          <div aria-hidden="true" className="absolute inset-x-0 top-[22px] hidden border-t border-dashed border-line-strong lg:block" />

          <ol className="relative grid items-start gap-12 lg:grid-cols-3 lg:gap-8">
            {journey.map((stop, i) => (
              <li key={stop.code} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-wash font-mono text-[11px] text-accent">
                    {stop.code}
                  </span>
                  <span className="bg-card/70 pr-2 font-mono text-[11px] tracking-[0.12em] text-muted">
                    STOP {String(i + 1).padStart(2, "0")} · {stop.coords}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{stop.title}</h3>
                  <p className="text-[15px] text-ink-soft">{stop.city}</p>
                  <p className="font-mono text-xs text-muted">{stop.years}</p>
                </div>

                {/* Passport page with this stop's entry stamp */}
                <div
                  className="group relative mt-2 flex h-52 items-center justify-center overflow-hidden rounded-xl border border-line bg-card"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0 21px, rgba(37,99,235,0.06) 21px 22px)",
                  }}
                >
                  <span className="absolute top-3 left-4 font-mono text-[10px] tracking-[0.16em] text-muted">VISAS</span>
                  <span className="absolute top-3 right-4 font-mono text-[10px] tracking-[0.16em] text-muted">
                    PAGE {String(i + 1).padStart(2, "0")}
                  </span>
                  <PassportStamp code={stop.code} city={stop.cityShort} stamp={stop.stamp} />
                </div>

                <p className="text-[15px] leading-relaxed text-muted lg:min-h-[3.25rem]">{stop.text}</p>

                {stop.involvement.length > 0 && (
                  <InvolvementDropdown items={stop.involvement} label={stop.involvementLabel} />
                )}
              </li>
            ))}
          </ol>
        </div>

        <p className="-mt-4 self-end font-hand text-[28px] text-accent -rotate-3">
          Different countries, same curiosity.
        </p>
      </div>
    </section>
  );
}
