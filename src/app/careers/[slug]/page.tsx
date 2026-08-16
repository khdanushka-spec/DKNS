import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { jobs } from "@/content/jobs";
import { site } from "@/content/site";

type Params = { slug: string };

function applyHref(title: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`Application: ${title}`)}`;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};

  return {
    title: job.title,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      url: `${site.url}/careers/${job.slug}`,
      title: `${job.title} | Careers | DKNS Digital`,
      description: job.summary,
    },
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <Check className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <span className="text-sm text-fg-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function JobDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.overview,
    employmentType: job.employmentType.toUpperCase(),
    jobLocationType: job.location.toLowerCase() === "remote" ? "TELECOMMUTE" : undefined,
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section className="pb-8 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg">
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              Back to Careers
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge>{job.employmentType}</Badge>
              <Badge>{job.location}</Badge>
            </div>

            <h1 className="mt-4 font-display text-display-1">{job.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-fg-muted">{job.summary}</p>

            <div className="mt-8">
              <Button href={applyHref(job.title)} variant="gradient" size="lg">
                Apply for This Role
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <RevealGroup className="space-y-10">
            <RevealItem>
              <Eyebrow>Overview</Eyebrow>
              <p className="mt-5 text-lg leading-relaxed text-fg">{job.overview}</p>
            </RevealItem>

            <RevealItem>
              <GlassCard className="p-8">
                <Eyebrow>Responsibilities</Eyebrow>
                <BulletList items={job.responsibilities} />
              </GlassCard>
            </RevealItem>

            <RevealItem>
              <GlassCard className="p-8">
                <Eyebrow>Requirements</Eyebrow>
                <BulletList items={job.requirements} />
              </GlassCard>
            </RevealItem>

            <RevealItem>
              <GlassCard className="p-8">
                <Eyebrow>Nice to Have</Eyebrow>
                <BulletList items={job.niceToHave} />
              </GlassCard>
            </RevealItem>

            <RevealItem>
              <GlassCard glow className="p-8">
                <Eyebrow>
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                  What Success Looks Like
                </Eyebrow>
                <BulletList items={job.successLooksLike} />
              </GlassCard>
            </RevealItem>
          </RevealGroup>

          <Reveal className="glass-surface glow-border mt-14 flex flex-col items-center gap-5 rounded-3xl p-10 text-center">
            <h2 className="font-display text-display-3">Ready to apply?</h2>
            <p className="max-w-md text-sm text-fg-muted">
              Send your resume and a short note about relevant work — we reply within one business day.
            </p>
            <Button href={applyHref(job.title)} variant="gradient" size="lg">
              Apply for This Role
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
