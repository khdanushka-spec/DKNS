import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-bg-elevated/70 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]",
        "transition-colors duration-300 hover:border-border-strong",
        className
      )}
    >
      {children}
    </div>
  );
}
