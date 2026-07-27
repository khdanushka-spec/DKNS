"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { estimatorFeatures, estimatorProjectTypes } from "@/content/pricing";

export function Estimator() {
  const [projectType, setProjectType] = useState(estimatorProjectTypes[0].id);
  const [features, setFeatures] = useState<string[]>([]);

  const total = useMemo(() => {
    const base = estimatorProjectTypes.find((p) => p.id === projectType)?.value ?? 0;
    const extra = estimatorFeatures
      .filter((f) => features.includes(f.id))
      .reduce((sum, f) => sum + f.value, 0);
    return base + extra;
  }, [projectType, features]);

  function toggleFeature(id: string) {
    setFeatures((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  }

  return (
    <div className="glass-surface grid gap-8 rounded-3xl p-6 md:p-10 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">1. Project Type</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {estimatorProjectTypes.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setProjectType(option.id)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  projectType === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-border-strong"
                }`}
              >
                <div className="font-medium text-fg">{option.label}</div>
                <div className="mt-1 text-xs text-fg-faint">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">2. Add-on Features</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {estimatorFeatures.map((option) => {
              const selected = features.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleFeature(option.id)}
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
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-bg-subtle p-7">
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{ backgroundImage: "var(--gradient-signature)" }}
          aria-hidden="true"
        />
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">Estimated Investment</h3>
          <div className="mt-3 font-display text-4xl">
            ${total.toLocaleString("en-AU")}
            <span className="text-lg text-fg-faint"> AUD+</span>
          </div>
          <p className="mt-3 text-sm text-fg-muted">
            A rough starting estimate. Every project is scoped precisely on a discovery call.
          </p>
        </div>
        <Button href="/contact" size="lg" className="mt-8 w-full justify-center">
          Get an Accurate Quote
        </Button>
      </div>
    </div>
  );
}
