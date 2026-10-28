"use client";

import { useEffect, useRef, useState } from "react";
import type { Stop } from "@/content/site";

type Props = { code: string; city: string; stamp: Stop["stamp"] };

// Faint speckle that makes the ink look slightly uneven, like a real stamp.
const inkMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.6 1.55'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")";

// One passport stamp. It "presses" onto the page the first time it scrolls into view,
// and straightens up when you hover the card.
export default function PassportStamp({ code, city, stamp }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inked, setInked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInked(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const place = city.toUpperCase();

  return (
    <div
      ref={ref}
      style={{ "--tilt": `${stamp.tilt}deg`, maskImage: inkMask, WebkitMaskImage: inkMask } as React.CSSProperties}
      className={`text-accent transition-[rotate,scale,opacity] duration-500 ease-[cubic-bezier(.2,1.5,.4,1)] rotate-(--tilt) group-hover:rotate-0 ${
        inked ? "scale-100 opacity-90" : "scale-125 opacity-0"
      }`}
    >
      {stamp.shape === "circle" && (
        <svg viewBox="0 0 160 160" className="h-[150px] w-[150px]" role="img" aria-label={`Stamp: ${city}, ${stamp.label}`}>
          <defs>
            <path id={`arc-${code}`} d="M80 80 m-56 0 a56 56 0 1 1 112 0 a56 56 0 1 1 -112 0" />
          </defs>
          <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="80" cy="80" r="44" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
            <textPath href={`#arc-${code}`} textLength="346" lengthAdjust="spacing">
              {`${place} · ${stamp.label} · ${place} · ${stamp.label} · `}
            </textPath>
          </text>
          <text x="80" y="82" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="22" fontWeight="500" fill="currentColor">
            {code}
          </text>
          <text x="80" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
            {stamp.date}
          </text>
        </svg>
      )}

      {stamp.shape === "rect" && (
        <div role="img" aria-label={`Stamp: ${city}, ${stamp.label}`} className="rounded-lg border-[2.5px] border-current p-[5px]">
          <div className="flex flex-col items-center gap-1 rounded border border-current px-6 py-3 font-mono">
            <span className="text-[10px] tracking-[0.2em]">ADMITTED · {stamp.label}</span>
            <span className="text-[28px] leading-none font-medium">{code}</span>
            <span className="text-[10px] tracking-[0.14em]">
              {place} · {stamp.date}
            </span>
          </div>
        </div>
      )}

      {stamp.shape === "oval" && (
        <div
          role="img"
          aria-label={`Stamp: ${city}, ${stamp.label}`}
          className="flex h-[124px] w-[212px] items-center justify-center rounded-[50%] border-[2.5px] border-current"
        >
          <div className="flex h-[106px] w-[194px] flex-col items-center justify-center gap-0.5 rounded-[50%] border border-current font-mono">
            <span className="text-[9px] tracking-[0.2em]">ENTRY · {stamp.label}</span>
            <span className="text-[26px] leading-tight font-medium">{code}</span>
            <span className="text-[9px] tracking-[0.14em]">
              {place} · {stamp.date}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}