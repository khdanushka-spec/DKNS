"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Eyebrow } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { EcosystemCanvas } from "@/components/hero/ecosystem-canvas";
import { AmbientParticles } from "@/components/hero/ambient-particles";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { ecosystemNodes, ecosystemEdges } from "@/content/ecosystem";
import { heroStats } from "@/content/stats";

const headline = "We Engineer Digital Businesses.";

export function Hero() {
  const words = headline.split(" ");
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden py-24">
      <AmbientParticles className="absolute inset-0" />
      <EcosystemCanvas
        nodes={ecosystemNodes}
        edges={ecosystemEdges}
        className="absolute inset-0 opacity-70"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />

      <AmbientGlow className="left-1/2 top-[40%] h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>
            <Compass className="h-3.5 w-3.5" strokeWidth={2} />
            DKNS Digital
          </Eyebrow>
        </motion.div>

        <h1 className="mt-10 max-w-4xl font-display text-hero-headline">
          {words.map((word, i) =>
            reducedMotion ? (
              <span key={word + i} className="mr-4 inline-block">
                {word}
              </span>
            ) : (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 max-w-xl text-balance text-lg text-fg-muted md:text-xl"
        >
          Premium websites, AI systems, automation, and custom software —
          designed as one intelligent ecosystem, not separate projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78 }}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] [background-image:var(--gradient-signature)] bg-clip-text text-transparent"
        >
          Every problem has a solution — we&apos;re here to solve them all.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href="/contact"
            icon={<ArrowUpRight className="h-4 w-4" strokeWidth={2} />}
            className="hover:shadow-[0_0_30px_-6px_var(--color-glow-secondary)]"
          >
            Start Your Project
          </MagneticButton>
          <MagneticButton href="/portfolio" variant="secondary">
            View Portfolio
          </MagneticButton>
        </motion.div>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4" stagger={0.08}>
          {heroStats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <div className="font-display text-2xl text-fg md:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="mt-1 text-xs text-fg-faint">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-fg-faint"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
