"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrowserChrome } from "@/components/ui/browser-chrome";

/**
 * A CSS/SVG "living product" preview standing in for a real product video —
 * animated skeleton UI inside a browser-chrome frame, so portfolio cards
 * read as alive rather than static screenshots. This is illustrative, not a
 * real screenshot or live embed — the case studies it decorates are sample
 * projects with no real URL (see HANDOVER.md).
 */
export function DeviceMockup({
  gradient,
  hovered,
  name,
  variant = "full",
}: {
  gradient: string;
  hovered: boolean;
  name?: string;
  variant?: "compact" | "full";
}) {
  const reducedMotion = useReducedMotion();
  const animate = hovered && !reducedMotion;
  const bars = [92, 64, 78, 45, 88, 52];
  const domain = name ? `${name.toLowerCase().replace(/[^a-z0-9]+/g, "")}.io` : undefined;

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}>
      <BrowserChrome domain={variant === "full" ? domain : undefined} className="absolute inset-3">
        <div className="flex flex-1 gap-3 p-4">
          <div className="flex w-1/4 flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="h-2 rounded-full bg-white/25"
                animate={{ opacity: animate ? [0.25, 0.5, 0.25] : 0.25 }}
                transition={{ duration: 1.6, repeat: animate ? Infinity : 0, delay: i * 0.15 }}
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
                  animate={{ height: animate ? [`${h * 0.5}px`, `${h * 0.75}px`, `${h * 0.5}px`] : `${h * 0.5}px` }}
                  transition={{ duration: 1.8, repeat: animate ? Infinity : 0, delay: i * 0.08, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>

        {variant === "full" && (
          <motion.span
            className="pointer-events-none absolute h-2.5 w-2.5 rounded-full border border-white/60 bg-white/20"
            initial={{ left: "20%", top: "30%" }}
            animate={
              animate
                ? { left: ["20%", "70%", "40%", "20%"], top: ["30%", "50%", "70%", "30%"] }
                : { left: "20%", top: "30%" }
            }
            transition={{ duration: 5, repeat: animate ? Infinity : 0, ease: "easeInOut" }}
          />
        )}
      </BrowserChrome>
    </div>
  );
}
