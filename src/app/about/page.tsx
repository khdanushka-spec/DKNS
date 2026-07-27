import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { team, values } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description: "DKNS Digital's story, mission, vision, and the team building intelligent digital solutions for businesses across Australia.",
  alternates: { canonical: "/about" },
  openGraph: { url: `${site.url}/about`, title: "About | DKNS Digital" },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>About Us</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Building the digital backbone of ambitious businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-fg-muted">{site.description}</p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="glass-surface rounded-2xl p-8">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-4 font-display text-2xl font-medium leading-snug">{site.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="glass-surface rounded-2xl p-8">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-4 font-display text-2xl font-medium leading-snug">{site.vision}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-bg-subtle/40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Values</Eyebrow>
          <h2 className="mt-5 font-display text-display-2">What guides our work</h2>
        </Reveal>
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <RevealItem key={value.title} className="glass-surface rounded-2xl p-7">
              <h3 className="font-display text-xl font-medium">{value.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{value.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Team</Eyebrow>
          <h2 className="mt-5 font-display text-display-2">Who you&apos;ll work with</h2>
        </Reveal>
        <RevealGroup className="mt-14 flex justify-center">
          {team.map((member) => (
            <RevealItem key={member.name} className="max-w-sm glass-surface rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 font-display text-2xl font-medium text-primary">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">{member.name}</h3>
              <p className="mt-1 text-sm text-secondary">{member.role}</p>
              <p className="mt-4 text-sm text-fg-muted">{member.bio}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="font-display text-display-2">
            Want to work together?
          </h2>
          <Button href="/contact" size="lg" className="mt-7">
            Start Your Project
            <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={1.75} />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
