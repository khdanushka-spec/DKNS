import type { Metadata } from "next";
import { Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectBuilder } from "@/components/contact/project-builder";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start your project with DKNS Digital — book a free consultation or send us the details of what you're building.",
  alternates: { canonical: "/contact" },
  openGraph: { url: `${site.url}/contact`, title: "Contact | DKNS Digital" },
};

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: site.whatsapp },
  { icon: Calendar, label: "Book a Call", value: "Schedule online", href: site.calendar },
];

export default function ContactPage() {
  return (
    <Section className="pt-20 md:pt-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-tight md:text-6xl">
          Let&apos;s build something amazing
        </h1>
        <p className="mt-4 text-lg text-fg-muted">
          Tell us about your project and we&apos;ll come back with next steps within one business day.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-border bg-bg-elevated p-5 transition-colors hover:border-border-strong"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <channel.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <div className="text-xs text-fg-faint">{channel.label}</div>
                <div className="font-medium text-fg">{channel.value}</div>
              </div>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-bg-elevated p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <MapPin className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <div className="text-xs text-fg-faint">Based in</div>
              <div className="font-medium text-fg">{site.address}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ProjectBuilder />
        </Reveal>
      </div>
    </Section>
  );
}
