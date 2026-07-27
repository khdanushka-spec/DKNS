"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import type { Service } from "@/content/services";

/**
 * "Key Benefits" panel with a subtle mouse-reactive 3D tilt — the tilt is
 * purely presentational polish, fully disabled (not just static) under
 * prefers-reduced-motion.
 */
export function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        reducedMotion
          ? undefined
          : { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 800 }
      }
    >
      <GlassCard glow className="p-8">
        <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">Key Benefits</h3>
        <ul className="mt-5 space-y-4">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-sm text-fg">{benefit}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
