import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "subtle" | "outline" | "overlay";

const variantClasses: Record<BadgeVariant, string> = {
  subtle: "bg-bg-subtle text-fg-muted",
  outline: "border border-border-strong text-fg-muted",
  overlay: "bg-white/15 text-white backdrop-blur",
};

export function Badge({
  children,
  className,
  variant = "subtle",
}: {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
