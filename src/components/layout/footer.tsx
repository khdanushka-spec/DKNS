import Link from "next/link";
import { LinkedInIcon, InstagramIcon, GitHubIcon, XIcon } from "@/components/ui/social-icons";
import { Container } from "@/components/ui/container";
import { footerLinks, site } from "@/content/site";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer className="gradient-mesh relative border-t border-border bg-bg-subtle/40">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground text-sm [background-image:var(--gradient-signature)]">
                D
              </span>
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-fg-muted">{site.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href={site.social.linkedin} aria-label="LinkedIn" className="text-fg-faint hover:text-fg">
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="text-fg-faint hover:text-fg">
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a href={site.social.x} aria-label="X" className="text-fg-faint hover:text-fg">
                <XIcon className="h-4.5 w-4.5" />
              </a>
              <a href={site.social.github} aria-label="GitHub" className="text-fg-faint hover:text-fg">
                <GitHubIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-medium text-fg">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-fg-muted hover:text-fg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

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
          <p>{site.address}</p>
        </div>
      </Container>
    </footer>
  );
}
