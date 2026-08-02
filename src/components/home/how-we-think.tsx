import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { philosophyStatement, principles } from "@/content/philosophy";

export function HowWeThink() {
  return (
    <Section id="how-we-think" className="border-t border-border">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Eyebrow>How We Think</Eyebrow>
          <p className="mt-8 max-w-xl font-display text-display-2">
            {philosophyStatement}
          </p>
        </Reveal>

        <RevealGroup className="space-y-10 lg:pt-2">
          {principles.map((p) => (
            <RevealItem
              key={p.index}
              className="group flex gap-6 border-t border-border pt-6 transition-colors first:border-t-0 first:pt-0 hover:border-border-strong"
            >
              <span className="font-display text-sm font-semibold [background-image:var(--gradient-signature)] bg-clip-text text-transparent">
                {p.index}
              </span>
              <div>
                <h3 className="font-display text-display-3 transition-colors group-hover:text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{p.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
