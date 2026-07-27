"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Sparkline } from "@/components/ui/sparkline";
import { ScoreRing } from "@/components/ui/score-ring";
import { commandMetrics, aiActivityFeed, performanceScore } from "@/content/command-center";
import { techStack } from "@/content/tech";

export function CommandCenter() {
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFeedIndex((i) => (i + 1) % aiActivityFeed.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <Section id="command-center" className="noise-overlay bg-charcoal text-charcoal-foreground">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full border border-charcoal-foreground/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-charcoal-foreground/60">
          Live Command Center
        </span>
        <h2 className="mt-5 font-display text-display-2">
          The view from inside the engine room
        </h2>
        <p className="mt-4 text-lg text-charcoal-foreground/60">Illustrative data — a preview of the reporting every client gets.</p>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-[auto_1fr]">
        <Reveal className="flex flex-col items-center justify-center rounded-3xl border border-charcoal-foreground/10 bg-charcoal-foreground/5 p-8 backdrop-blur-sm transition-shadow hover:shadow-[0_0_40px_-10px_var(--color-glow-secondary)]">
          <ScoreRing score={performanceScore} label="Avg. Lighthouse Score" />
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {commandMetrics.map((metric) => (
            <RevealItem
              key={metric.label}
              className="rounded-2xl border border-charcoal-foreground/10 bg-charcoal-foreground/5 p-6 text-primary backdrop-blur-sm transition-colors hover:border-charcoal-foreground/25"
            >
              <div className="font-display text-2xl text-charcoal-foreground">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="mt-1 text-xs text-charcoal-foreground/60">{metric.label}</div>
              <Sparkline data={metric.trend} className="mt-3 h-10 w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.15} className="mt-6 rounded-2xl border border-charcoal-foreground/10 bg-charcoal-foreground/5 p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-charcoal-foreground/50">
          <Terminal className="h-3.5 w-3.5" strokeWidth={2} />
          AI Activity
        </div>
        <div className="mt-3 h-6 overflow-hidden font-mono text-sm text-secondary">
          <motion.div
            key={feedIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            › {aiActivityFeed[feedIndex]}
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {techStack.map((tech) => (
          <span key={tech.name} className="text-sm text-charcoal-foreground/50">
            {tech.name}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
