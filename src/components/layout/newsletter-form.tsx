"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-4 flex items-center gap-2 text-sm text-secondary">
        <Check className="h-4 w-4" strokeWidth={2} />
        You&apos;re subscribed.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-full border border-border-strong bg-bg-elevated px-4 py-2 text-sm text-fg placeholder:text-fg-faint focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-60"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </button>
    </form>
  );
}
