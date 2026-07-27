"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Pulls an element toward the cursor within its own bounds, snapping back on
 * leave. Returns motion values to bind to a `motion.div`'s `style` plus the
 * mouse handlers to bind to the same element.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 18, stiffness: 200, mass: 0.5 });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x: springX, y: springY, onMouseMove, onMouseLeave };
}
