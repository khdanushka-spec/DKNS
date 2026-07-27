"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon-map";
import { ThemeToggle } from "./theme-toggle";
import { navGroups, site } from "@/content/site";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

function basePath(href: string) {
  return href.split("#")[0];
}

export function Navbar() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function isGroupActive(group: (typeof navGroups)[number]) {
    return (
      basePath(group.href) === pathname ||
      group.items.some((item) => basePath(item.href) === pathname)
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 rounded-none border-x-0 border-t-0 transition-colors duration-300",
        scrolled ? "glass-surface" : "border-transparent bg-transparent backdrop-blur-none"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-lg object-cover" aria-hidden="true" />
          <span className="leading-none">{site.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => {
            setOpenGroup(null);
            setHoveredLabel(null);
          }}
        >
          {navGroups.map((group) => {
            const active = isGroupActive(group);
            const indicator = hoveredLabel === group.label || (!hoveredLabel && active);
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => {
                  setOpenGroup(group.label);
                  setHoveredLabel(group.label);
                }}
                onFocus={() => setOpenGroup(group.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenGroup(null);
                }}
              >
                <Link
                  href={group.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  )}
                >
                  {group.label}
                  {indicator && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-px [background-image:var(--gradient-signature)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {openGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        "absolute left-1/2 top-full -translate-x-1/2 pt-3",
                        group.label === "Services" ? "w-[440px]" : "w-80"
                      )}
                    >
                      <div
                        className={cn(
                          "glass-surface rounded-2xl p-2",
                          group.label === "Services" && "grid grid-cols-2 gap-1"
                        )}
                      >
                        {group.items.map((item) => {
                          const service = services.find((s) => `/services#${s.slug}` === item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-bg-subtle"
                            >
                              {service && (
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  <Icon name={service.icon} className="h-4 w-4" />
                                </span>
                              )}
                              <span>
                                <div className="text-sm font-medium text-fg">{item.label}</div>
                                {item.description && (
                                  <div className="mt-0.5 text-xs text-fg-faint">{item.description}</div>
                                )}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" variant="gradient" size="md">
            Start Your Project
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
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
            className="overflow-hidden border-t border-border bg-bg-elevated/95 backdrop-blur-md lg:hidden"
          >
            <Container className="py-4">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="flex flex-col gap-1"
              >
                {navGroups.flatMap((g) => g.items).map((item) => (
                  <motion.div
                    key={`${item.href}-${item.label}`}
                    variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-bg-subtle hover:text-fg",
                        basePath(item.href) === pathname ? "text-fg" : "text-fg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                  <Button
                    href="/contact"
                    variant="gradient"
                    size="md"
                    className="mt-2 w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Start Your Project
                  </Button>
                </motion.div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
