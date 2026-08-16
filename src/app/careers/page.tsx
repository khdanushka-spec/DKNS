import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { values } from "@/content/team";
import { jobs } from "@/content/jobs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join DKNS Digital — we're always open to hearing from engineers, designers, and strategists who care about the craft.",
  alternates: { canonical: "/careers" },
  openGraph: { url: `${site.url}/careers`, title: "Careers | DKNS Digital" },
};

export default function CareersPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Build your best work here
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
            We&apos;re a small, senior team — every hire raises the bar on craft and ownership.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <RevealItem key={value.title} className="glass-surface rounded-2xl p-6">
              <h3 className="font-display text-lg font-medium">{value.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{value.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="bg-bg-subtle/40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Open Roles</Eyebrow>
          <h2 className="mt-5 font-display text-display-2">
            Current openings
          </h2>
        </Reveal>
        <RevealGroup className="mx-auto mt-14 max-w-2xl space-y-4">
          {jobs.map((job) => (
            <RevealItem
              key={job.slug}
              className="glow-border glass-surface flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <Link href={`/careers/${job.slug}`} className="group min-w-0 flex-1">
                <h3 className="font-display text-lg font-medium transition-colors group-hover:text-primary">{job.title}</h3>
                <p className="text-xs text-fg-faint">
                  {job.employmentType} · {job.location}
                </p>
                <p className="mt-2 text-sm text-fg-muted">{job.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.75} />
                </span>
              </Link>
              <Button href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`} variant="secondary" className="shrink-0">
                Apply
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Button>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-8 text-center text-sm text-fg-muted">
          Don&apos;t see your role listed?{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary underline">
            Reach out anyway
          </a>
          .
        </Reveal>
      </Section>
    </>
  );
}
