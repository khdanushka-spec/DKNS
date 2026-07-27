import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { values } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join DKNS Digital — we're always open to hearing from engineers, designers, and strategists who care about the craft.",
  alternates: { canonical: "/careers" },
  openGraph: { url: `${site.url}/careers`, title: "Careers | DKNS Digital" },
};

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Contract · Remote",
    description: "Next.js, TypeScript, and Prisma across client engagements — from greenfield builds to complex migrations.",
  },
  {
    title: "Product Designer",
    type: "Contract · Remote",
    description: "Own design across web, mobile, and internal tools, from discovery through pixel-perfect handoff.",
  },
];

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
          {openRoles.map((role) => (
            <RevealItem
              key={role.title}
              className="flex flex-col gap-4 glass-surface rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-medium">{role.title}</h3>
                <p className="text-xs text-fg-faint">{role.type}</p>
                <p className="mt-2 text-sm text-fg-muted">{role.description}</p>
              </div>
              <Button href={`mailto:${site.email}?subject=Application: ${role.title}`} variant="secondary" className="shrink-0">
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
