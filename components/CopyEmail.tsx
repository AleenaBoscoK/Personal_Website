"use client";

import { useState } from "react";

// Shows the email address; clicking copies it to the clipboard.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full border border-line-strong bg-card px-5 font-mono text-sm text-ink transition-colors hover:border-accent"
    >
      {email}
      <span className={`text-xs ${copied ? "text-[#1f6b43]" : "text-muted"}`} aria-live="polite">
        {copied ? "Copied ✓" : "Copy"}
      </span>
    </button>
  );
}
