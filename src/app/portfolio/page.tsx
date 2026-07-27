import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Featured projects and case studies from DKNS Digital — real problems, solutions, and measured results.",
  alternates: { canonical: "/portfolio" },
  openGraph: { url: `${site.url}/portfolio`, title: "Portfolio | DKNS Digital" },
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>Our Work</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Featured Projects
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            A sample of the platforms, sites, and systems we&apos;ve built — with the problem,
            the solution, and the result behind each one.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealItem key={project.slug} className={i === 0 ? "lg:col-span-2" : undefined}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="glass-surface glow-border group block overflow-hidden rounded-2xl"
              >
                <div className={`relative h-56 bg-gradient-to-br ${project.coverGradient}`}>
                  <div className="absolute inset-0 flex items-end p-6">
                    <Badge variant="overlay">{project.industry}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-display-3">{project.name}</h2>
                    <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="mt-2 text-sm text-fg-muted">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
