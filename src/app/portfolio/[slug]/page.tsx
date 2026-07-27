import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Star } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ScoreRing } from "@/components/ui/score-ring";
import { ArchitectureDiagram } from "@/components/portfolio/architecture-diagram";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const lighthouseScores = [
  { label: "Performance", score: 98 },
  { label: "Accessibility", score: 100 },
  { label: "Best Practices", score: 96 },
  { label: "SEO", score: 100 },
];

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      url: `${site.url}/portfolio/${project.slug}`,
      title: `${project.name} | DKNS Digital`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    about: project.industry,
    creator: { "@type": "Organization", name: site.name },
    description: project.summary,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={`relative h-[46vh] min-h-[340px] bg-gradient-to-br ${project.coverGradient}`}>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <Link href="/portfolio" className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to Portfolio
          </Link>
          <Badge variant="overlay" className="w-fit">{project.industry}</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-display-1 text-white">{project.name}</h1>
        </div>
      </div>

      <Section className="pt-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <Eyebrow>The Problem</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-fg">{project.problem}</p>
            </Reveal>
            <Reveal>
              <Eyebrow>The Solution</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-fg">{project.solution}</p>
            </Reveal>

            <Reveal>
              <Eyebrow>Timeline</Eyebrow>
              <div className="mt-6 space-y-5">
                {project.timeline.map((phase) => (
                  <div key={phase.phase} className="flex gap-4 border-b border-border pb-5 last:border-0">
                    <div className="w-28 shrink-0 font-display text-sm font-medium text-primary">{phase.phase}</div>
                    <p className="text-sm text-fg-muted">{phase.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {project.testimonial && (
              <Reveal>
                <GlassCard glow className="p-7">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-4 text-lg text-fg">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <div className="mt-4 text-sm text-fg-faint">
                    {project.testimonial.author} · {project.testimonial.role}
                  </div>
                </GlassCard>
              </Reveal>
            )}
          </div>

          <div className="space-y-8">
            <Reveal className="glass-surface rounded-2xl p-6">
              <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">Results</h3>
              <div className="mt-5 space-y-4">
                {project.results.map((result) => (
                  <div key={result.label} className="flex items-baseline justify-between border-b border-border pb-4 last:border-0">
                    <span className="text-sm text-fg-muted">{result.label}</span>
                    <span className="font-display text-xl font-medium text-primary">{result.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="glass-surface rounded-2xl p-6">
              <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">Technology</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technology.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Reveal>

            <Reveal className="glass-surface rounded-2xl p-6">
              <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">Client</h3>
              <p className="mt-3 text-sm text-fg-muted">{project.client}</p>
              <p className="mt-1 text-sm text-fg-muted">{project.year}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Live Demo
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              )}
            </Reveal>

            <Button href="/contact" size="lg" className="w-full justify-center">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-subtle/40">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Architecture</Eyebrow>
            <h2 className="mt-5 font-display text-display-3">How it&apos;s built</h2>
            <div className="mt-8">
              <ArchitectureDiagram />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Performance</Eyebrow>
            <h2 className="mt-5 font-display text-display-3">Lighthouse scores</h2>
            <p className="mt-1 text-sm text-fg-faint">Illustrative — representative of our typical delivery standard.</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {lighthouseScores.map((item) => (
                <ScoreRing key={item.label} score={item.score} label={item.label} size={112} />
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Related Projects</Eyebrow>
        <RevealGroup className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {related.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="glass-surface glow-border group flex items-center justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="text-xs text-fg-faint">{p.industry}</div>
                  <div className="mt-1 font-display text-lg">{p.name}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" strokeWidth={1.75} />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
