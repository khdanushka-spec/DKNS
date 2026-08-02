"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A slow "breathing" ambient glow blob — the shared lighting layer behind
 * key panels (hero headline, Digital OS, Ask DKNS, Command Center's
 * ScoreRing). Static under prefers-reduced-motion.
 */
export function AmbientGlow({
  color = "var(--glow-primary)",
  className,
}: {
  color?: string;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 1 }}
      animate={reducedMotion ? { opacity: 0.5, scale: 1 } : { opacity: [0.45, 0.75, 0.45], scale: [1, 1.1, 1] }}
      transition={{ duration: 7, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      className={cn("pointer-events-none absolute rounded-full blur-[100px]", className)}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      aria-hidden="true"
    />
  );
}
