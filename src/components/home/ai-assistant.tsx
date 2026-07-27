"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, MessageCircle } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { pricingTiers } from "@/content/pricing";
import { processSteps } from "@/content/process";
import { techStack } from "@/content/tech";

type Prompt = {
  id: string;
  label: string;
  build: () => string[];
};

const prompts: Prompt[] = [
  {
    id: "proposal",
    label: "Generate a proposal outline",
    build: () => [
      "Here's a proposal outline based on how we structure real engagements:",
      ...processSteps.slice(0, 4).map((s) => `${s.step} — ${s.title}: ${s.description}`),
      "Want the full outline tailored to your project? Talk to a human below.",
    ],
  },
  {
    id: "pricing",
    label: "Estimate pricing",
    build: () => [
      "Our packages, at a glance:",
      ...pricingTiers.map((t) => `${t.name} — ${t.price} (${t.cadence}): ${t.description}`),
      "For an exact number, use the project estimator on the Pricing page.",
    ],
  },
  {
    id: "architecture",
    label: "Suggest an architecture",
    build: () => [
      "A typical stack we'd reach for:",
      techStack.map((t) => t.name).join(", "),
      "The right mix depends on your scale and team — a real architecture review needs a quick call.",
    ],
  },
  {
    id: "roadmap",
    label: "Show me the project roadmap",
    build: () => [
      "Every project moves through the same seven stages:",
      ...processSteps.map((s) => `${s.step} ${s.title}`),
      `Relevant services for most roadmaps: ${services.slice(0, 3).map((s) => s.name).join(", ")}.`,
    ],
  },
];

export function AiAssistant() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = prompts.find((p) => p.id === activeId) ?? null;

  return (
    <Section id="ask-dkns">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
          Ask DKNS
        </Eyebrow>
        <h2 className="mt-5 font-display text-display-2">
          Instant answers, before the first call
        </h2>
        <p className="mt-4 text-lg text-fg-muted">
          An instant assistant built on our own project data — not a live model, just fast, honest answers.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="glass-surface mx-auto mt-14 max-w-2xl overflow-hidden rounded-3xl">
        <div className="flex items-center gap-2 border-b border-border px-6 py-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground [background-image:var(--gradient-signature)]">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="text-sm font-medium">Ask DKNS</span>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-border p-6">
          {prompts.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeId === p.id ? "border-primary bg-primary/10 text-primary" : "border-border-strong text-fg-muted hover:text-fg"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="min-h-[180px] p-6">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 font-mono text-sm text-fg"
            >
              {active.build().map((line, i) => (
                <p key={i} className={i === 0 ? "text-fg-muted" : ""}>
                  {line}
                </p>
              ))}
            </motion.div>
          ) : (
            <p className="text-sm text-fg-faint">Choose a prompt above to see an instant answer.</p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border p-6">
          <span className="text-xs text-fg-faint">Prefer a person? We reply within one business day.</span>
          <Button href="/contact" size="md">
            Talk to a Human
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-4 flex max-w-2xl items-center justify-center gap-2 text-xs text-fg-faint">
        <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} />
        Answers are generated from our own service and pricing data, not a live AI model.
      </Reveal>
    </Section>
  );
}
