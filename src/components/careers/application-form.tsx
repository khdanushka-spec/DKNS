"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import type { Job } from "@/content/jobs";

type Status = "idle" | "loading" | "done" | "error";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-bg px-4 py-2.5 text-sm focus:border-primary focus:outline-none";

export function ApplicationForm({ job }: { job: Job }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resumeName, setResumeName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.set("jobTitle", job.title);
    formData.set("jobSlug", job.slug);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setErrorMessage("Something went wrong — please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <GlassCard className="flex flex-col items-center gap-3 p-12 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="font-display text-display-3">Application received.</h3>
        <p className="max-w-sm text-sm text-fg-muted">
          Thanks for applying to {job.title}. We&apos;ll review your application and reply within one business day.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
              Full name
            </label>
            <input id="name" name="name" required placeholder="Jane Doe" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-fg">
              Phone <span className="text-fg-faint">(optional)</span>
            </label>
            <input id="phone" name="phone" placeholder="+61 400 000 000" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="linkedin" className="mb-1.5 block text-sm font-medium text-fg">
              LinkedIn / Portfolio <span className="text-fg-faint">(optional)</span>
            </label>
            <input id="linkedin" name="linkedin" placeholder="https://" className={inputClasses} />
          </div>
        </div>

        <div>
          <label htmlFor="resume" className="mb-1.5 block text-sm font-medium text-fg">
            Resume
          </label>
          <label
            htmlFor="resume"
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border-strong bg-bg px-4 py-3.5 text-sm text-fg-muted transition-colors hover:border-primary"
          >
            <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {resumeName || "Upload PDF or Word document (max 4MB)"}
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? "")}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
            Note <span className="text-fg-faint">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Anything you'd like us to know?"
            className={inputClasses}
          />
        </div>

        <Button type="submit" variant="gradient" size="lg" className="w-full justify-center">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4.5 w-4.5 animate-spin" strokeWidth={2} />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </>
          )}
        </Button>
        {status === "error" && <p className="text-center text-sm text-danger">{errorMessage}</p>}
      </form>
    </GlassCard>
  );
}
