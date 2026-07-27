"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Route-level fade/slide on navigation. `key={pathname}` is driven by
 * routing (a real remount via template.tsx), not local state re-keying — the
 * `AnimatePresence mode="wait"` combo that got stuck mid-exit elsewhere this
 * session was a *manually re-keyed single element sharing one mount*; this
 * is the standard Next.js route-transition pattern. Verified live by
 * navigating rapidly between routes before shipping.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
