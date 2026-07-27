"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { transformationStages } from "@/content/transformation";

gsap.registerPlugin(ScrollTrigger);

export function TransformationTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const getScrollDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger?.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="transformation" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="flex h-screen flex-col justify-center py-16">
        <div className="px-6 md:px-10">
          <span className="inline-flex items-center rounded-full border border-primary-foreground/20 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground/70">
            Transformation
          </span>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-medium tracking-tight md:text-5xl">
            From business today to market leader
          </h2>
        </div>

        <div ref={trackRef} className="mt-16 flex w-max gap-6 px-6 will-change-transform md:gap-10 md:px-10">
          {transformationStages.map((stage, i) => (
            <div
              key={stage.label}
              className="flex w-[78vw] shrink-0 flex-col justify-between rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 sm:w-[420px]"
            >
              <span className="font-display text-sm text-primary-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-10">
                <h3 className="font-display text-2xl font-medium md:text-3xl">{stage.label}</h3>
                <p className="mt-3 text-primary-foreground/70">{stage.description}</p>
              </div>
              {i < transformationStages.length - 1 && (
                <ArrowRight className="mt-8 h-5 w-5 text-primary-foreground/40" strokeWidth={1.75} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
