import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon-map";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium websites, AI automation, business systems, and custom software — every capability under one roof.",
  alternates: { canonical: "/services" },
  openGraph: { url: `${site.url}/services`, title: "Services | DKNS Digital" },
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl font-medium tracking-tight md:text-6xl">
            Every capability your business needs
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            From a single premium website to a full AI-driven operating system,
            engineered by one team from discovery to long-term support.
          </p>
        </Reveal>
      </Section>

      <div className="divide-y divide-border border-t border-border">
        {services.map((service, i) => (
          <Section key={service.slug} id={service.slug} className="scroll-mt-24 py-16 md:py-20">
            <Reveal className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-4xl">{service.name}</h2>
                <p className="mt-4 text-lg text-fg-muted">{service.description}</p>
                <Button href="/contact" className="mt-7">
                  Start Your Project
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-bg-elevated p-8">
                <h3 className="text-sm font-medium uppercase tracking-wide text-fg-faint">Key Benefits</h3>
                <ul className="mt-5 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm text-fg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Section>
        ))}
      </div>
    </>
  );
}
