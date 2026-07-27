import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
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
              <PortfolioCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
