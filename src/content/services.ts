export type Service = {
  slug: string;
  icon:
    | "globe"
    | "bot"
    | "network"
    | "code"
    | "palette"
    | "search"
    | "megaphone"
    | "compass"
    | "cloud"
    | "smartphone";
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "websites",
    icon: "globe",
    name: "Premium Websites",
    shortDescription: "Flagship marketing sites engineered to convert.",
    description:
      "Design-led, high-performance websites built on Next.js — fast, accessible, and structured to turn visitors into qualified leads.",
    benefits: ["Sub-second load times", "Pixel-perfect design system", "Built-in SEO foundations", "CMS-ready content"],
  },
  {
    slug: "ai-automation",
    icon: "bot",
    name: "AI Automation",
    shortDescription: "Agentic workflows that remove manual work.",
    description:
      "We design and ship AI systems — from customer support agents to internal copilots — that plug into the tools you already use.",
    benefits: ["Custom LLM workflows", "Human-in-the-loop safety", "Integrates with your stack", "Measurable time savings"],
  },
  {
    slug: "business-systems",
    icon: "network",
    name: "Business Systems",
    shortDescription: "Operations platforms that replace spreadsheets.",
    description:
      "Purpose-built internal tools for scheduling, inventory, quality control, and reporting — designed around how your team actually works.",
    benefits: ["Role-based dashboards", "Real-time reporting", "Audit-ready data", "Built for daily use"],
  },
  {
    slug: "custom-software",
    icon: "code",
    name: "Custom Software",
    shortDescription: "Bespoke products engineered to scale.",
    description:
      "When off-the-shelf software falls short, we build production-grade applications with the architecture to grow with you.",
    benefits: ["Modern, typed codebase", "Cloud-native architecture", "Documented & maintainable", "Built for handover"],
  },
  {
    slug: "brand-identity",
    icon: "palette",
    name: "Brand Identity",
    shortDescription: "Naming, logo, and visual systems.",
    description:
      "A distinct brand identity — logo, color, typography, and voice — that carries consistently across web, print, and product.",
    benefits: ["Complete brand guidelines", "Logo & mark system", "Applied across touchpoints", "Ready for any medium"],
  },
  {
    slug: "seo",
    icon: "search",
    name: "SEO",
    shortDescription: "Technical and content SEO that compounds.",
    description:
      "Structured data, performance, and content strategy working together so your site ranks — and keeps ranking.",
    benefits: ["Technical SEO audits", "Schema.org markup", "Content strategy", "Ongoing rank tracking"],
  },
  {
    slug: "marketing",
    icon: "megaphone",
    name: "Marketing",
    shortDescription: "Growth strategy grounded in data.",
    description:
      "Positioning, campaigns, and funnels designed to bring qualified traffic and convert it — measured, not guessed.",
    benefits: ["Channel strategy", "Conversion-focused funnels", "Analytics & attribution", "Monthly reporting"],
  },
  {
    slug: "consulting",
    icon: "compass",
    name: "Consulting",
    shortDescription: "Strategic guidance for digital transformation.",
    description:
      "An outside perspective on technology, AI adoption, and digital strategy — from teams who've built it before.",
    benefits: ["Technology roadmaps", "AI readiness audits", "Vendor-neutral advice", "Executive workshops"],
  },
  {
    slug: "cloud-solutions",
    icon: "cloud",
    name: "Cloud Solutions",
    shortDescription: "Secure, scalable infrastructure.",
    description:
      "Cloud architecture on Vercel, AWS, or Cloudflare that scales with demand and stays secure by default.",
    benefits: ["Zero-downtime deploys", "Enterprise-grade security", "Cost-optimized infrastructure", "24/7 monitoring-ready"],
  },
  {
    slug: "mobile-apps",
    icon: "smartphone",
    name: "Mobile Apps",
    shortDescription: "Native-feel apps for iOS and Android.",
    description:
      "Cross-platform mobile applications built with a shared codebase — fast to ship, easy to maintain, native to feel.",
    benefits: ["Single codebase, both platforms", "App Store & Play Store ready", "Push notifications", "Offline-first design"],
  },
];
