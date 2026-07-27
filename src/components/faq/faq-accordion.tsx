"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="glass-surface divide-y divide-border rounded-2xl">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-fg">{item.question}</span>
              <ChevronDown
                className={`h-4.5 w-4.5 shrink-0 text-fg-faint transition-transform ${open ? "rotate-180" : ""}`}
                strokeWidth={1.75}
              />
            </button>
            {open && <p className="px-6 pb-5 text-sm leading-relaxed text-fg-muted">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
