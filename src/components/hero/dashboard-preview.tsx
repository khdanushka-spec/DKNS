"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { BrowserChrome } from "@/components/ui/browser-chrome";
import { ScoreRing } from "@/components/ui/score-ring";
import { Sparkline } from "@/components/ui/sparkline";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const trend = [40, 55, 48, 62, 58, 74, 69, 82];

/**
 * Illustrative "product glimpse" behind the hero — foreshadows the Command
 * Center section further down the page. Not a real client dashboard.
 */
export function DashboardPreview() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: reducedMotion ? 0 : [0, -8, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.8, delay: 1 },
        scale: { duration: 0.8, delay: 1 },
        y: reducedMotion
          ? { duration: 0.8, delay: 1 }
          : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
      }}
      className="pointer-events-none absolute right-[-2%] top-1/2 hidden w-[380px] -translate-y-1/2 lg:block"
    >
      <GlassCard glow className="h-[280px] p-3">
        <BrowserChrome domain="app.dkns.ai/dashboard" className="h-full">
          <div className="flex flex-1 items-center gap-6 p-5">
            <ScoreRing score={96} size={92} />
            <div className="flex-1 space-y-4">
              <div>
                <div className="text-[10px] uppercase tracking-wide text-white/40">Active Projects</div>
                <div className="font-display text-2xl text-white">
                  <AnimatedCounter value={12} suffix="+" />
                </div>
              </div>
              <Sparkline data={trend} className="h-8 w-full text-emerald-300" />
            </div>
          </div>
        </BrowserChrome>
      </GlassCard>
    </motion.div>
  );
}
