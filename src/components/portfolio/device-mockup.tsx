"use client";

import { motion } from "framer-motion";

/**
 * A CSS/SVG "living product" preview standing in for a real product video —
 * animated skeleton UI inside a browser-chrome frame, so portfolio cards
 * read as alive rather than static screenshots.
 */
export function DeviceMockup({ gradient, hovered }: { gradient: string; hovered: boolean }) {
  const bars = [92, 64, 78, 45, 88, 52];

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-3 flex flex-col overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-1 gap-3 p-4">
          <div className="flex w-1/4 flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="h-2 rounded-full bg-white/25"
                animate={{ opacity: hovered ? [0.25, 0.5, 0.25] : 0.25 }}
                transition={{ duration: 1.6, repeat: hovered ? Infinity : 0, delay: i * 0.15 }}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2">
            <div className="flex items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className="w-full rounded-t bg-white/30"
                  style={{ height: `${h * 0.5}px` }}
                  animate={{ height: hovered ? [`${h * 0.5}px`, `${h * 0.75}px`, `${h * 0.5}px`] : `${h * 0.5}px` }}
                  transition={{ duration: 1.8, repeat: hovered ? Infinity : 0, delay: i * 0.08, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
