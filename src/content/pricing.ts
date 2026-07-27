export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    price: "From $4,500",
    cadence: "one-time",
    description: "A premium marketing website to establish credibility and start generating leads.",
    features: [
      "Up to 7 pages, fully custom design",
      "Mobile-first, responsive build",
      "On-page SEO foundations",
      "Contact & lead capture forms",
      "2 weeks of post-launch support",
    ],
    cta: "Start Your Project",
  },
  {
    name: "Growth",
    price: "From $12,000",
    cadence: "one-time",
    description: "A full digital presence with CMS, blog, and integrated automation for scaling businesses.",
    features: [
      "Everything in Launch",
      "Custom CMS for content & blog",
      "AI automation for one core workflow",
      "Advanced analytics & reporting",
      "3 months of priority support",
    ],
    highlighted: true,
    cta: "Start Your Project",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "scoped engagement",
    description: "Custom software, business systems, or multi-phase platforms built around your operations.",
    features: [
      "Custom software or internal systems",
      "Dedicated engineering roadmap",
      "AI automation across workflows",
      "Enterprise security & compliance review",
      "Ongoing partnership & support",
    ],
    cta: "Book Free Consultation",
  },
];

export type EstimatorOption = {
  id: string;
  label: string;
  description: string;
  value: number;
};

export const estimatorProjectTypes: EstimatorOption[] = [
  { id: "website", label: "Premium Website", description: "Marketing site or brand presence", value: 4500 },
  { id: "webapp", label: "Web Application", description: "Customer or internal-facing web app", value: 12000 },
  { id: "automation", label: "AI Automation", description: "Agentic workflows & integrations", value: 8000 },
  { id: "software", label: "Custom Software", description: "Bespoke platform built to scale", value: 20000 },
];

export const estimatorFeatures: EstimatorOption[] = [
  { id: "cms", label: "Custom CMS", description: "Manage content without code", value: 2500 },
  { id: "auth", label: "User Accounts & Auth", description: "Secure login & role-based access", value: 3000 },
  { id: "ai", label: "AI Integration", description: "LLM-powered features or assistants", value: 4000 },
  { id: "ecommerce", label: "E-commerce", description: "Payments, checkout, inventory", value: 5000 },
  { id: "mobile", label: "Mobile App", description: "iOS & Android companion app", value: 9000 },
  { id: "support", label: "Ongoing Support Plan", description: "Monthly maintenance & enhancements", value: 1500 },
];
