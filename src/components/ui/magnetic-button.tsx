"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "@/lib/motion/use-magnetic";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  // Uses currentColor rather than theme-variable text/border utilities so it
  // reads correctly on fixed-tone sections (e.g. the ivory-background
  // ContactTeaser) as well as the default surface colors.
  secondary: "bg-transparent text-current border border-current/25",
};

/**
 * A pill button that pulls toward the cursor and morphs its icon into view
 * on hover — the hero/CTA moments the brief calls "morphing buttons."
 */
export function MagneticButton({
  href,
  children,
  icon,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.25);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-block"
      data-cursor="magnetic"
    >
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-center gap-0 overflow-hidden rounded-full px-8 py-4 text-base font-medium transition-shadow duration-300 hover:shadow-lg",
          variantClasses[variant],
          className
        )}
      >
        <span>{children}</span>
        {icon && (
          <span className="ml-0 flex w-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:ml-2 group-hover:w-5 group-hover:opacity-100">
            {icon}
          </span>
        )}
      </Link>
    </motion.div>
  );
}
