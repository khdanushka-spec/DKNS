"use client";

import { motion } from "framer-motion";

const layers = [
  { name: "Frontend", detail: "Next.js, React, Tailwind CSS" },
  { name: "API", detail: "Type-safe route handlers & server actions" },
  { name: "Database", detail: "PostgreSQL via Prisma" },
  { name: "Infrastructure", detail: "Vercel, edge caching, CI/CD" },
];

export function ArchitectureDiagram() {
  return (
    <div className="relative mx-auto max-w-md">
      {layers.map((layer, i) => (
        <div key={layer.name} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-2xl border border-border bg-bg-elevated p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-medium">{layer.name}</span>
              <span className="font-mono text-xs text-fg-faint">0{i + 1}</span>
            </div>
            <p className="mt-1.5 text-sm text-fg-muted">{layer.detail}</p>
          </motion.div>

          {i < layers.length - 1 && (
            <div className="relative flex h-8 justify-center">
              <svg width="2" height="100%" className="absolute h-8">
                <motion.line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="32"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-border-strong"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
