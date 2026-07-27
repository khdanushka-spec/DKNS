import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_0_24px_-6px_var(--color-glow-primary)]",
  secondary:
    "bg-bg-elevated text-fg border border-border-strong hover:border-fg-faint",
  ghost: "text-fg hover:bg-bg-subtle",
  gradient:
    "text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_0_30px_-6px_var(--color-glow-secondary)] [background-image:var(--gradient-signature)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
