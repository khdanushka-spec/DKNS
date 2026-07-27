import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  children,
  className,
  containerClassName,
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
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
