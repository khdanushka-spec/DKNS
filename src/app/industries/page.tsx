import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon-map";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/industries";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Custom digital solutions for agriculture, healthcare, manufacturing, education, tourism, laboratories, construction, retail, professional services, and finance.",
  alternates: { canonical: "/industries" },
  openGraph: { url: `${site.url}/industries`, title: "Industries | DKNS Digital" },
};

export default function IndustriesPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Solutions built for your sector
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            Every industry has different operational realities. We design around yours, not a generic template.
          </p>
        </Reveal>
      </Section>

      <div className="divide-y divide-border border-t border-border">
        {industries.map((industry) => (
          <Section key={industry.slug} id={industry.slug} className="scroll-mt-24 py-14">
            <Reveal className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground [background-image:var(--gradient-signature)]">
                <Icon name={industry.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-display-3">{industry.name}</h2>
                <p className="mt-2 max-w-xl text-fg-muted">{industry.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-center gap-2 text-sm text-fg-muted">
                      <Check className="h-3.5 w-3.5 text-secondary" strokeWidth={2.5} />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
              <Button href="/contact" variant="secondary" className="shrink-0">
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Button>
            </Reveal>
          </Section>
        ))}
      </div>
    </>
  );
}
