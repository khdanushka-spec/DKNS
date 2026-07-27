import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { resources } from "@/content/resources";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free guides, checklists, templates, and AI prompts to help you plan and scope your next digital project.",
  alternates: { canonical: "/resources" },
  openGraph: { url: `${site.url}/resources`, title: "Resources | DKNS Digital" },
};

export default function ResourcesPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>Free Resources</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Guides worth stealing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            Practical guides and templates from real engagements — free, no strings attached.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {resources.map((resource) => (
            <RevealItem key={resource.slug} id={resource.slug} className="scroll-mt-24">
              <div className="glass-surface glow-border flex items-start gap-4 rounded-2xl p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground [background-image:var(--gradient-signature)]">
                  <Download className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-wide text-fg-faint">{resource.type}</div>
                  <h2 className="mt-1 font-display text-lg font-medium">{resource.title}</h2>
                  <p className="mt-2 text-sm text-fg-muted">{resource.description}</p>
                  <Button href="/contact" variant="secondary" size="md" className="mt-4">
                    Request Access
                  </Button>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
