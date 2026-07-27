import { Hero } from "@/components/home/hero";
import { HowWeThink } from "@/components/home/how-we-think";
import { DigitalOS } from "@/components/home/digital-os";
import { TransformationTimeline } from "@/components/home/transformation-timeline";
import { InteractivePortfolio } from "@/components/home/interactive-portfolio";
import { Process } from "@/components/home/process";
import { CommandCenter } from "@/components/home/command-center";
import { KnowledgeCenter } from "@/components/home/knowledge-center";
import { AiAssistant } from "@/components/home/ai-assistant";
import { ContactTeaser } from "@/components/home/contact-teaser";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeThink />
      <DigitalOS />
      <TransformationTimeline />
      <InteractivePortfolio />
      <Process />
      <CommandCenter />
      <KnowledgeCenter />
      <AiAssistant />
      <ContactTeaser />
    </>
  );
}
