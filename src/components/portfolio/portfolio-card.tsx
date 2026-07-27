"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DeviceMockup } from "@/components/portfolio/device-mockup";
import type { Project } from "@/content/projects";

export function PortfolioCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-surface glow-border group block overflow-hidden rounded-2xl"
    >
      <div className="relative h-56 p-3">
        <DeviceMockup gradient={project.coverGradient} hovered={hovered} name={project.name} variant="compact" />
        <Badge variant="overlay" className="absolute left-6 top-6">
          {project.industry}
        </Badge>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-display-3">{project.name}</h2>
          <ArrowUpRight
            className="h-4.5 w-4.5 shrink-0 text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
            strokeWidth={1.75}
          />
        </div>
        <p className="mt-2 text-sm text-fg-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technology.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
