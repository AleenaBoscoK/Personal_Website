"use client";

import { useEffect, useRef, useState } from "react";
import { departures } from "@/content/site";

const WIDTHS = { when: 4, to: 17, status: 7 };
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/";
const pad = (s: string, n: number) => s.toUpperCase().padEnd(n, " ").slice(0, n).split("");

// Airport-style split-flap board. When it scrolls into view, every letter flips
// through a few characters before settling, left to right.
export default function DepartureBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(-1); // -1 = settled (also what the server renders)

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let t = 0;
        timer = setInterval(() => {
          t += 1;
          setTick(t);
          if (t > 40) {
            clearInterval(timer);
            setTick(-1);
          }
        }, 45);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  // A letter keeps flipping until its column's turn comes up.
  const show = (ch: string, col: number, row: number) => {
    if (tick < 0 || ch === " " || tick > col + row * 2 + 8) return ch;
    return CHARS[(tick * 7 + col * 13 + row * 5) % CHARS.length];
  };

  const cell = (ch: string, col: number, row: number, tone: string) => (
    <span
      key={col}
      className={`relative inline-flex h-8 w-[22px] items-center justify-center rounded-[3px] bg-[#16264a] font-mono text-[15px] ${tone}`}
    >
      {show(ch, col, row)}
      <span className="absolute inset-x-0 top-1/2 h-px bg-[#0a1a3a]" />
    </span>
  );

  return (
    <div ref={ref} className="rounded-2xl bg-ink p-5 sm:p-6">
      {/* Full board on tablets and up */}
      <div aria-hidden="true" className="hidden overflow-x-auto sm:block">
        <div className="flex min-w-max flex-col gap-1.5">
          <div className="flex gap-6 pb-2 font-mono text-[11px] tracking-[0.14em] text-[#8ea3cc]">
            <span className="w-[100px]">WHEN</span>
            <span className="w-[426px]">DESTINATION</span>
            <span>STATUS</span>
          </div>
          {departures.map((d, r) => (
            <div key={d.to} className="flex gap-6">
              <span className="flex w-[100px] gap-[3px]">{pad(d.when, WIDTHS.when).map((c, i) => cell(c, i, r, "text-white"))}</span>
              <span className="flex w-[426px] gap-[3px]">
                {pad(d.to, WIDTHS.to).map((c, i) => cell(c, i + WIDTHS.when, r, "text-white"))}
              </span>
              <span className="flex gap-[3px]">
                {pad(d.status, WIDTHS.status).map((c, i) => cell(c, i + WIDTHS.when + WIDTHS.to, r, "text-[#9cc0ff]"))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Simple list on phones (and for screen readers) */}
      <ul className="flex flex-col divide-y divide-white/10 font-mono text-sm sm:sr-only">
        {departures.map((d) => (
          <li key={d.to} className="flex items-center justify-between gap-3 py-2.5">
            <span className="text-white">
              <span className="mr-3 text-[#8ea3cc]">{d.when}</span>
              {d.to}
            </span>
            <span className="text-[#9cc0ff]">{d.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
