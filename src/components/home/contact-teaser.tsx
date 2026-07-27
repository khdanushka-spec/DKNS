import { ArrowUpRight, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ContactTeaser() {
  return (
    <Section id="contact-teaser" className="bg-ivory text-ivory-foreground">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-display-2">
          Ready to engineer your next chapter?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg opacity-70">
          Tell us what you&apos;re building. We&apos;ll reply within one business day with a clear plan.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="/contact" icon={<Calendar className="h-4.5 w-4.5" strokeWidth={1.75} />}>
            Start Your Project
          </MagneticButton>
          <MagneticButton href="/pricing" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}>
            View Pricing
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}
