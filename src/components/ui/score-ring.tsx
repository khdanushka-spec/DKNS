"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";

export function ScoreRing({ score, label, size = 140 }: { score: number; label?: string; size?: number }) {
  const radius = size * 0.386;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);
  const center = size / 2;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center text-primary" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full -rotate-90">
          <circle cx={center} cy={center} r={radius} fill="none" stroke="currentColor" strokeOpacity={0.12} strokeWidth={size * 0.07} />
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={size * 0.07}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute font-display font-medium" style={{ fontSize: size * 0.22 }}>
          <AnimatedCounter value={score} />
        </span>
      </div>
      {label && <p className="mt-3 text-sm opacity-70">{label}</p>}
    </div>
  );
}
