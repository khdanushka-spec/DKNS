export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discovery", description: "We learn your business, your users, and what success actually looks like." },
  { step: "02", title: "Planning", description: "We scope a clear roadmap — timeline, milestones, and technical approach." },
  { step: "03", title: "Design", description: "We design every screen with intent, validated against your goals before a line of code is written." },
  { step: "04", title: "Development", description: "We build on modern, typed, production-grade foundations — visible progress at every step." },
  { step: "05", title: "Testing", description: "We test across devices, browsers, and edge cases before anything reaches your users." },
  { step: "06", title: "Launch", description: "We deploy, monitor, and make sure day one goes smoothly." },
  { step: "07", title: "Support", description: "We stay on as a long-term partner — not a vendor who disappears after launch." },
];
