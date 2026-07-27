import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./container";

type SectionSize = "sm" | "md" | "lg";

const sizeClasses: Record<SectionSize, string> = {
  sm: "py-14 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-36",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  size?: SectionSize;
}) {
  return (
    <section id={id} className={cn(sizeClasses[size], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-elevated px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
