"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:text-fg"
    >
      {/* Both icons render on every pass; CSS (driven by next-themes' class on <html>) decides which shows, avoiding a mounted-state effect and hydration flash. */}
      <Sun className="hidden h-4 w-4 dark:block" strokeWidth={1.75} />
      <Moon className="block h-4 w-4 dark:hidden" strokeWidth={1.75} />
    </button>
  );
}
