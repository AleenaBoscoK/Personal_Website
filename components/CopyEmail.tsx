"use client";

import { useRef, useState } from "react";
import { MailIcon } from "@/components/Icons";

// Older/stricter browsers: copy through a hidden text box.
function copyWithTextarea(text: string) {
  const box = document.createElement("textarea");
  box.value = text;
  box.setAttribute("readonly", "");
  box.style.position = "fixed";
  box.style.opacity = "0";
  document.body.appendChild(box);
  box.select();
  box.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  box.remove();
  return ok;
}

// Shows the email address; the Copy button puts it on the clipboard.
// If the browser blocks copying, the address gets selected so Ctrl/Cmd+C works.
export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "select">("idle");
  const textRef = useRef<HTMLSpanElement>(null);

  const copy = async () => {
    let ok = false;
    if (window.isSecureContext && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(email);
        ok = true;
      } catch {
        ok = false;
      }
    }
    if (!ok) ok = copyWithTextarea(email);

    if (ok) {
      setState("copied");
    } else if (textRef.current) {
      const range = document.createRange();
      range.selectNodeContents(textRef.current);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      setState("select");
    }
    setTimeout(() => setState("idle"), 2500);
  };

  return (
    <span className="inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong bg-card py-1 pr-1.5 pl-5 text-ink">
      <MailIcon className="h-5 w-5 text-ink-soft" />
      <span ref={textRef} className="font-mono text-sm select-all">
        {email}
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-9 cursor-pointer items-center rounded-full bg-wash px-3.5 text-[13px] font-semibold text-accent transition-colors hover:bg-mist"
      >
        <span aria-live="polite">
          {state === "copied" ? "Copied ✓" : state === "select" ? "Press Ctrl/⌘ C" : "Copy"}
        </span>
      </button>
    </span>
  );
}
