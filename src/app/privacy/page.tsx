import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DKNS Digital collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-20 md:pt-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-display-2">Privacy Policy</h1>
        <p className="mt-2 text-sm text-fg-faint">Last updated: {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose-legal mt-10 space-y-8 text-fg-muted">
          <section>
            <h2 className="font-display text-xl font-medium text-fg">1. Introduction</h2>
            <p className="mt-2">
              {site.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what
              information we collect through {site.url}, how we use it, and the choices you have.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">2. Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly — such as your name, email, phone number, and project
              details submitted through our contact and newsletter forms — along with standard technical data
              (IP address, browser type, pages visited) collected automatically for analytics purposes.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">3. How We Use Information</h2>
            <p className="mt-2">
              We use the information we collect to respond to enquiries, deliver requested resources, improve our
              website, and — where you&apos;ve opted in — send occasional updates. We do not sell your personal
              information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">4. Data Sharing</h2>
            <p className="mt-2">
              We share information only with service providers who help us operate our website and business (such
              as hosting and email delivery providers), and only to the extent necessary for them to perform those
              services.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">5. Data Security</h2>
            <p className="mt-2">
              We use industry-standard technical and organizational measures to protect your information. No method
              of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">6. Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us at <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-medium text-fg">7. Contact</h2>
            <p className="mt-2">
              Questions about this policy can be directed to {site.legalName} at{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>.
            </p>
          </section>
          <p className="rounded-xl border border-border bg-bg-subtle p-4 text-xs">
            This is placeholder policy content generated for launch and should be reviewed by a qualified legal
            professional before the site goes live.
          </p>
        </div>
      </div>
    </Section>
  );
}
