import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, InstagramIcon, GitHubIcon, XIcon } from "@/components/ui/social-icons";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { footerLinks, site } from "@/content/site";
import { posts } from "@/content/posts";
import { NewsletterForm } from "./newsletter-form";
import { AnimatedDivider } from "./animated-divider";

const { Legal, Resources, ...navFooterLinks } = footerLinks;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <Section size="sm" className="gradient-mesh noise-overlay text-center">
        <h2 className="mx-auto max-w-xl font-display text-display-2">
          Let&apos;s build something exceptional.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-fg-muted">
          Tell us what you&apos;re building — we&apos;ll reply within one business day.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/contact" icon={<ArrowUpRight className="h-4 w-4" strokeWidth={2} />}>
            Start Your Project
          </MagneticButton>
        </div>
      </Section>

      <Container>
        <AnimatedDivider />
      </Container>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg object-cover" />
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-fg-muted">{site.tagline}</p>

            <div className="mt-6 space-y-2.5 text-sm text-fg-muted">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-fg">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-fg">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.phone}
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {site.address}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href={site.social.linkedin} aria-label="LinkedIn" className="text-fg-faint transition-all hover:scale-110 hover:text-fg">
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="text-fg-faint transition-all hover:scale-110 hover:text-fg">
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a href={site.social.x} aria-label="X" className="text-fg-faint transition-all hover:scale-110 hover:text-fg">
                <XIcon className="h-4.5 w-4.5" />
              </a>
              <a href={site.social.github} aria-label="GitHub" className="text-fg-faint transition-all hover:scale-110 hover:text-fg">
                <GitHubIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {Object.entries(navFooterLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-medium text-fg">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg">
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={2} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-medium text-fg">Resources</h3>
            <ul className="mt-4 space-y-3">
              {Resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-medium text-fg">Latest Insights</h3>
            <ul className="mt-4 space-y-3">
              {posts.slice(0, 2).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block text-sm text-fg-muted hover:text-fg">
                    <span className="line-clamp-2">{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-fg">Newsletter</h3>
            <p className="mt-4 text-sm text-fg-muted">Insights on AI, web, and growth — no spam.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-fg-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {Legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-fg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
