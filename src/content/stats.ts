export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const stats: Stat[] = [
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Average Performance Score", value: 96, suffix: "/100" },
  { label: "AI Systems Delivered", value: 18, suffix: "+" },
  { label: "Clients Served", value: 25, suffix: "+" },
  { label: "Countries Served", value: 6, suffix: "+" },
];

/** Illustrative subset shown in the hero stats row. */
export const heroStats = [
  stats.find((s) => s.label === "Projects Completed")!,
  stats.find((s) => s.label === "AI Systems Delivered")!,
  stats.find((s) => s.label === "Clients Served")!,
  stats.find((s) => s.label === "Countries Served")!,
];

export const whyChooseUs = [
  { title: "Fast Delivery", description: "Phased milestones that ship visible progress every week." },
  { title: "Premium Design", description: "Interfaces that feel considered, not templated." },
  { title: "AI Integration", description: "Automation woven into the product, not bolted on after." },
  { title: "Scalable Architecture", description: "Built to handle 10x growth without a rebuild." },
  { title: "Enterprise Security", description: "Best-practice auth, data handling, and infrastructure by default." },
  { title: "Long-term Support", description: "We stay on after launch as an ongoing technical partner." },
  { title: "Modern Technology", description: "Typed, tested, and built on tools that will still be current in five years." },
  { title: "Responsive Design", description: "Every screen, from phone to ultrawide, considered from day one." },
  { title: "SEO Optimized", description: "Structured data and technical SEO baked into every build." },
  { title: "Analytics Ready", description: "Instrumented from launch so decisions are backed by data." },
];
