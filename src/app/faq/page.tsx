import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with DKNS Digital — timelines, process, pricing, and support.",
  alternates: { canonical: "/faq" },
  openGraph: { url: `${site.url}/faq`, title: "FAQ | DKNS Digital" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Section className="pt-20 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-tight md:text-6xl">
          Common questions, answered
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
        <FaqAccordion items={faqs} />
      </Reveal>
    </Section>
  );
}
