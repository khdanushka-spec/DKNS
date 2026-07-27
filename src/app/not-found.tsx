import { ArrowLeft } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-display text-5xl font-medium tracking-tight md:text-6xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-lg text-fg-muted">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <Button href="/" size="lg" className="mt-8">
        <ArrowLeft className="h-4.5 w-4.5" strokeWidth={1.75} />
        Back to Home
      </Button>
    </Section>
  );
}
