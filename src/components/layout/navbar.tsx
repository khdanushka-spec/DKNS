"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { navGroups, site } from "@/content/site";

export function Navbar() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm"
            aria-hidden="true"
          >
            D
          </span>
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenGroup(null)}
        >
          {navGroups.map((group) => (
            <div key={group.label} className="relative" onMouseEnter={() => setOpenGroup(group.label)}>
              <Link
                href={group.href}
                className="rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {group.label}
              </Link>
              <AnimatePresence>
                {openGroup === group.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-2xl border border-border bg-bg-elevated p-2 shadow-xl">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-bg-subtle"
                        >
                          <div className="text-sm font-medium text-fg">{item.label}</div>
                          {item.description && (
                            <div className="mt-0.5 text-xs text-fg-faint">{item.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="md">
            Start Your Project
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-fg"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navGroups.flatMap((g) => g.items).map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-fg-muted hover:bg-bg-subtle hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" size="md" className="mt-2 w-full justify-center">
                Start Your Project
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
