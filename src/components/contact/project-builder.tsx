"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { estimatorProjectTypes, estimatorFeatures } from "@/content/pricing";

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $40,000", "$40,000+"];
const timelines = ["ASAP", "Within 1 month", "1–3 months", "Flexible"];

type Status = "idle" | "loading" | "done" | "error";

export function ProjectBuilder() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [state, setState] = useState({
    projectType: "",
    features: [] as string[],
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const steps = ["What are you building?", "What do you need?", "Budget & timeline", "Your details"];
  const canAdvance = [
    Boolean(state.projectType),
    true,
    Boolean(state.budget) && Boolean(state.timeline),
    Boolean(state.name) && Boolean(state.email),
  ];

  function toggleFeature(id: string) {
    setState((s) => ({
      ...s,
      features: s.features.includes(id) ? s.features.filter((f) => f !== id) : [...s.features, id],
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-bg-elevated p-12 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="font-display text-2xl font-medium">Your project brief is in.</h3>
        <p className="max-w-sm text-sm text-fg-muted">
          We&apos;ll review what you told us and reply within one business day with next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-bg-elevated p-6 md:p-10">
      <div className="mb-10 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex-1">
            <div className={`h-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-bg-subtle"}`} />
            <span className={`mt-2 hidden text-xs sm:block ${i === step ? "text-fg" : "text-fg-faint"}`}>{label}</span>
          </div>
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
      >
          {step === 0 && (
            <div>
              <h3 className="font-display text-2xl font-medium">What are you building?</h3>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {estimatorProjectTypes.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, projectType: option.label }))}
                    className={`rounded-xl border p-4 text-left transition-colors ${
                      state.projectType === option.label ? "border-primary bg-primary/5" : "border-border hover:border-border-strong"
                    }`}
                  >
                    <div className="font-medium text-fg">{option.label}</div>
                    <div className="mt-1 text-xs text-fg-faint">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl font-medium">What do you need?</h3>
              <p className="mt-1 text-sm text-fg-faint">Select any that apply — this shapes our first proposal.</p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {estimatorFeatures.map((option) => {
                  const selected = state.features.includes(option.label);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleFeature(option.label)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                        selected ? "border-secondary bg-secondary/5" : "border-border hover:border-border-strong"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          selected ? "border-secondary bg-secondary text-secondary-foreground" : "border-border-strong"
                        }`}
                      >
                        {selected && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                      <span>
                        <div className="font-medium text-fg">{option.label}</div>
                        <div className="mt-0.5 text-xs text-fg-faint">{option.description}</div>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display text-2xl font-medium">Budget &amp; timeline</h3>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="mb-2 text-sm font-medium text-fg">Budget range</p>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setState((s) => ({ ...s, budget: b }))}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          state.budget === b ? "border-primary bg-primary/10 text-primary" : "border-border-strong text-fg-muted"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-fg">Timeline</p>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setState((s) => ({ ...s, timeline: t }))}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          state.timeline === t ? "border-primary bg-primary/10 text-primary" : "border-border-strong text-fg-muted"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h3 className="font-display text-2xl font-medium">Your details</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Full name"
                  value={state.name}
                  onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                  className="rounded-xl border border-border-strong bg-bg px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                  className="rounded-xl border border-border-strong bg-bg px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
                <input
                  placeholder="Company (optional)"
                  value={state.company}
                  onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                  className="rounded-xl border border-border-strong bg-bg px-4 py-2.5 text-sm focus:border-primary focus:outline-none sm:col-span-2"
                />
                <textarea
                  rows={3}
                  placeholder="Anything else we should know?"
                  value={state.message}
                  onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                  className="rounded-xl border border-border-strong bg-bg px-4 py-2.5 text-sm focus:border-primary focus:outline-none sm:col-span-2"
                />
              </div>

              <div className="mt-8 rounded-xl border border-border bg-bg-subtle p-4 text-xs text-fg-muted">
                <span className="font-medium text-fg">{state.projectType || "Project"}</span>
                {state.features.length > 0 && <> · {state.features.join(", ")}</>}
                {state.budget && <> · {state.budget}</>}
                {state.timeline && <> · {state.timeline}</>}
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full justify-center">
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin" strokeWidth={2} />
                    Sending...
                  </>
                ) : (
                  "Submit Project Brief"
                )}
              </Button>
              {status === "error" && (
                <p className="mt-3 text-center text-sm text-danger">
                  Something went wrong — email us directly at hello@dkns.ai.
                </p>
              )}
            </form>
          )}
      </motion.div>

      {step < 3 && (
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Back
          </button>
          <Button
            type="button"
            onClick={() => canAdvance[step] && setStep((s) => s + 1)}
            className={!canAdvance[step] ? "pointer-events-none opacity-40" : ""}
          >
            Continue
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>
      )}
    </div>
  );
}
