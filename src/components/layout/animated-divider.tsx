"use client";

import { motion } from "framer-motion";

export function AnimatedDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="h-px w-full origin-left [background-image:var(--gradient-signature)]"
    />
  );
}
