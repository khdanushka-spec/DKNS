import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="process">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Engineering Process</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
          Precision, at every stage
        </h2>
      </Reveal>

      <div className="mt-16 -mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
        <RevealGroup className="relative grid w-max grid-flow-col auto-cols-[180px] gap-0 md:w-full md:auto-cols-fr">
          <div className="pointer-events-none absolute inset-x-0 top-3 hidden h-px bg-border md:block" aria-hidden="true" />
          {processSteps.map((step) => (
            <RevealItem key={step.step} className="relative pr-6 pt-0 md:pr-8">
              <div className="relative flex h-6 items-center">
                <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <span className="mt-4 block font-display text-xs text-fg-faint">{step.step}</span>
              <h3 className="mt-1.5 font-display text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
