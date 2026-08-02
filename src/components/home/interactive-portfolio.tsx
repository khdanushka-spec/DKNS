"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeviceMockup } from "@/components/portfolio/device-mockup";
import { projects } from "@/content/projects";

export function InteractivePortfolio() {
  const featured = projects.filter((p) => p.featured);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <Section id="work">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <Eyebrow>Interactive Portfolio</Eyebrow>
          <h2 className="mt-5 font-display text-display-2">
            Explore the products, not screenshots
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {featured.map((project, i) => (
          <RevealItem key={project.slug} className={i === 0 ? "lg:col-span-2" : undefined}>
            <Link
              href={`/portfolio/${project.slug}`}
              onMouseEnter={() => setHoveredSlug(project.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className="glass-surface glow-border group block h-full overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 p-3">
                <DeviceMockup gradient={project.coverGradient} hovered={hoveredSlug === project.slug} name={project.name} />
                <Badge variant="overlay" className="absolute left-6 top-6">
                  {project.industry}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-display-3">{project.name}</h3>
                  <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" strokeWidth={1.75} />
                </div>
                <p className="mt-2 text-sm text-fg-muted">{project.summary}</p>
                <div className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-5">
                  {project.results.slice(0, 3).map((result) => (
                    <div key={result.label}>
                      <div className="font-display text-lg font-semibold text-primary">{result.value}</div>
                      <div className="mt-0.5 text-xs text-fg-faint">{result.label}</div>
                    </div>
                  ))}
                </div>
                {project.testimonial && (
                  <div className="mt-5 border-t border-border pt-5">
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-2 text-sm italic text-fg-muted">&ldquo;{project.testimonial.quote}&rdquo;</p>
                    <p className="mt-1.5 text-xs text-fg-faint">
                      {project.testimonial.author} · {project.testimonial.role}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
