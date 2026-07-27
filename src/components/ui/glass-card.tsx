import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-surface rounded-2xl",
        glow && "glow-border hover:shadow-[0_0_40px_-12px_var(--color-glow-primary)]",
        className
      )}
    >
      {children}
    </div>
  );
}
