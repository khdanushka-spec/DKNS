import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ApplicationForm } from "@/components/careers/application-form";
import { jobs } from "@/content/jobs";
import { site } from "@/content/site";

type Params = { slug: string };

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
    title: `Apply — ${job.title}`,
    alternates: { canonical: `/careers/${job.slug}/apply` },
    openGraph: { url: `${site.url}/careers/${job.slug}/apply`, title: `Apply — ${job.title} | DKNS Digital` },
  };
}

export default async function JobApplyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <Section className="pb-20 pt-20 md:pt-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Link
            href={`/careers/${job.slug}`}
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to {job.title}
          </Link>

          <Eyebrow className="mt-6">Apply</Eyebrow>
          <h1 className="mt-5 font-display text-display-2">{job.title}</h1>
          <p className="mt-3 text-lg text-fg-muted">
            {job.employmentType} · {job.location}
          </p>
        </Reveal>

        <div className="mt-10">
          <ApplicationForm job={job} />
        </div>
      </div>
    </Section>
  );
}
