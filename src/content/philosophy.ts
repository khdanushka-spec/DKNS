export const philosophyStatement =
  "Most agencies hand you a website and disappear. We think in systems — where your site, your automation, and your AI are one connected engine, engineered to compound.";

export type Principle = {
  index: string;
  title: string;
  detail: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Systems, not deliverables",
    detail: "Every piece we build is designed to connect to the next — nothing ships as an island.",
  },
  {
    index: "02",
    title: "Engineering discipline",
    detail: "Typed, tested, documented. We build the way we'd want to inherit code from someone else.",
  },
  {
    index: "03",
    title: "Compounding by design",
    detail: "SEO, automation, and data instrumentation are built in from day one, not bolted on later.",
  },
];
