"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Eyebrow } from "@/components/ui/section";
import { EcosystemCanvas } from "@/components/hero/ecosystem-canvas";
import { ecosystemNodes, ecosystemEdges } from "@/content/ecosystem";

const headline = "We Engineer Digital Businesses.";

export function Hero() {
  const words = headline.split(" ");

  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden">
      <EcosystemCanvas
        nodes={ecosystemNodes}
        edges={ecosystemEdges}
        className="absolute inset-0 opacity-70"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />

      <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>
            <Compass className="h-3.5 w-3.5" strokeWidth={2} />
            DKNS Digital
          </Eyebrow>
        </motion.div>

        <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-7 max-w-xl text-balance text-lg text-fg-muted md:text-xl"
        >
          Premium websites, AI systems, automation, and custom software —
          designed as one intelligent ecosystem, not separate projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="/contact" icon={<ArrowUpRight className="h-4 w-4" strokeWidth={2} />}>
            Start Your Project
          </MagneticButton>
          <MagneticButton href="/portfolio" variant="secondary">
            View Portfolio
          </MagneticButton>
        </motion.div>
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
