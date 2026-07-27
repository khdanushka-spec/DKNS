import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the DKNS Digital website and engagement with our services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section className="pt-20 md:pt-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-medium tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-fg-faint">Last updated: {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose-legal mt-10 space-y-8 text-fg-muted">
          <section>
            <h2 className="font-display text-xl font-medium text-fg">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing {site.url}, you agree to these Terms of Service. If you do not agree, please do not use
              this website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">2. Services</h2>
            <p className="mt-2">
              This website describes services offered by {site.legalName}. Specific engagements are governed by a
              separate signed proposal or contract, which takes precedence over this general website content.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">3. Intellectual Property</h2>
            <p className="mt-2">
              All content on this website — including text, graphics, logos, and code — is the property of{" "}
              {site.legalName} unless otherwise noted, and may not be reproduced without permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">4. Limitation of Liability</h2>
            <p className="mt-2">
              This website and its content are provided &quot;as is&quot; without warranties of any kind.{" "}
              {site.legalName} is not liable for any damages arising from your use of this website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">5. Changes to Terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of the website after changes constitutes
              acceptance of the updated terms.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">6. Governing Law</h2>
            <p className="mt-2">These terms are governed by the laws of Victoria, Australia.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">7. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>.
            </p>
          </section>
          <p className="rounded-xl border border-border bg-bg-subtle p-4 text-xs">
            This is placeholder terms content generated for launch and should be reviewed by a qualified legal
            professional before the site goes live.
          </p>
        </div>
      </div>
    </Section>
  );
}
