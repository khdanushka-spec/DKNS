"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { EcosystemCanvas } from "@/components/hero/ecosystem-canvas";
import { ecosystemNodes, ecosystemEdges } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

export function DigitalOS() {
  const [selected, setSelected] = useState<string | null>(ecosystemNodes[0].id);
  const selectedNode = ecosystemNodes.find((n) => n.id === selected) ?? null;

  return (
    <Section id="digital-os" className="bg-bg-subtle/40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Digital Operating System</Eyebrow>
        <h2 className="mt-5 font-display text-display-2">
          One system. Every part connected.
        </h2>
        <p className="mt-4 text-lg text-fg-muted">
          Select any part of the system to see how it connects to the rest.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="glass-surface relative mt-14 h-[420px] overflow-hidden rounded-3xl md:h-[520px]">
        <EcosystemCanvas
          nodes={ecosystemNodes}
          edges={ecosystemEdges}
          interactive
          selectedId={selected}
          onSelect={(id) => id && setSelected(id)}
          className="absolute inset-0"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-6">
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-surface pointer-events-auto max-w-md rounded-2xl p-5 text-center"
            >
              <h3 className="font-display text-display-3 text-primary">{selectedNode.label}</h3>
              <p className="mt-1.5 text-sm text-fg-muted">{selectedNode.description}</p>
            </motion.div>
          )}
        </div>
      </Reveal>

      <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Select a system component">
        {ecosystemNodes.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setSelected(node.id)}
            aria-pressed={selected === node.id}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              selected === node.id
                ? "border-primary bg-primary/10 text-primary"
                : "border-border-strong text-fg-muted hover:text-fg"
            )}
          >
            {node.label}
          </button>
        ))}
      </div>
    </Section>
  );
}
