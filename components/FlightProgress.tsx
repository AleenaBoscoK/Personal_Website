"use client";

import { useEffect, useState } from "react";
import { PlaneIcon } from "@/components/Icons";
import { profile } from "@/content/site";

// The thin "in-flight" bar under the menu. As you scroll, the plane flies from
// the first city to the last, and the label shows which section you're reading.
// Sections are picked up from their data-label attribute.
export default function FlightProgress() {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);

      let current = "";
      document.querySelectorAll<HTMLElement>("[data-label]").forEach((el) => {
        if (el.getBoundingClientRect().top <= 170) current = el.dataset.label ?? "";
      });
      setLabel(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const pct = `${(progress * 100).toFixed(2)}%`;
  const from = profile.route[0];
  const to = profile.route.at(-1);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className="mx-auto flex h-9 max-w-6xl items-center gap-3 px-5 font-mono text-[10px] tracking-[0.12em] text-muted md:px-12"
    >
      <span className="hidden whitespace-nowrap sm:inline">{from.toUpperCase()}</span>
      <div className="relative h-0.5 flex-1 bg-[repeating-linear-gradient(90deg,var(--color-line-strong)_0_4px,transparent_4px_9px)]">
        <div className="absolute inset-y-0 left-0 bg-accent" style={{ width: pct }} />
        <span
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent"
          style={{ left: pct }}
        >
          <PlaneIcon className="h-4 w-4 rotate-90" />
        </span>
      </div>
      <span className="hidden whitespace-nowrap sm:inline">{to?.toUpperCase()}</span>
      <span className="w-[120px] shrink-0 truncate text-right text-accent" aria-live="off">
        {label}
      </span>
    </div>
  );
}
