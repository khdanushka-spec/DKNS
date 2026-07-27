import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Estimator } from "@/components/pricing/estimator";
import { pricingTiers } from "@/content/pricing";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent packages for premium websites, growth platforms, and enterprise software — plus an interactive project estimator.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: `${site.url}/pricing`, title: "Pricing | DKNS Digital" },
};

export default function PricingPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Investment that scales with your ambition
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            Every engagement is scoped to your goals. These packages are a starting point.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <RevealItem key={tier.name}>
              <div
                className={`glass-surface flex h-full flex-col rounded-2xl p-8 ${
                  tier.highlighted ? "glow-border border-primary/40" : ""
                }`}
              >
                <h2 className="font-display text-display-3">{tier.name}</h2>
                <p className="mt-2 text-sm text-fg-muted">{tier.description}</p>
                <div className="mt-6 font-display text-3xl">{tier.price}</div>
                <div className="text-xs text-fg-faint">{tier.cadence}</div>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-fg">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="mt-8 w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="bg-bg-subtle/40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Project Estimator</Eyebrow>
          <h2 className="mt-5 font-display text-display-2">
            Get a ballpark in 30 seconds
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <Estimator />
        </Reveal>
      </Section>
    </>
  );
}
