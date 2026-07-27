export const site = {
  name: "DKNS Digital",
  legalName: "DKNS Digital Pty Ltd",
  tagline: "Building Intelligent Digital Solutions.",
  mission:
    "Helping businesses grow through AI, websites, automation, and custom software.",
  vision:
    "To become one of Australia's leading AI-powered digital solution companies.",
  description:
    "DKNS Digital designs and engineers premium websites, AI automation, and custom software for ambitious businesses across Australia and internationally.",
  url: "https://dkns.ai",
  founder: "Dhanushka Kariyawasam",
  email: "hello@dkns.ai",
  phone: "+61 400 000 000",
  whatsapp: "https://wa.me/61400000000",
  calendar: "https://cal.com/dkns-digital/consultation",
  address: "Melbourne, Victoria, Australia",
  social: {
    linkedin: "https://www.linkedin.com/company/dkns-digital",
    instagram: "https://www.instagram.com/dkns.digital",
    x: "https://x.com/dknsdigital",
    github: "https://github.com/dkns-digital",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Premium Websites", href: "/services#websites", description: "Flagship marketing sites & web apps" },
      { label: "AI Automation", href: "/services#ai-automation", description: "Agentic workflows & LLM integrations" },
      { label: "Business Systems", href: "/services#business-systems", description: "Internal tools & operations platforms" },
      { label: "Custom Software", href: "/services#custom-software", description: "Bespoke products built to scale" },
      { label: "Brand Identity", href: "/services#brand-identity", description: "Naming, logo, and visual systems" },
      { label: "SEO", href: "/services#seo", description: "Technical & content SEO that compounds" },
    ],
  },
  {
    label: "Work",
    href: "/portfolio",
    items: [
      { label: "Portfolio", href: "/portfolio", description: "Featured projects & case studies" },
      { label: "Industries", href: "/industries", description: "Solutions by sector" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About", href: "/about", description: "Our story, mission, and team" },
      { label: "Pricing", href: "/pricing", description: "Packages & project estimator" },
      { label: "Careers", href: "/careers", description: "Join the team" },
      { label: "FAQ", href: "/faq", description: "Common questions answered" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    items: [
      { label: "Blog", href: "/blog", description: "Insights on AI, web, and growth" },
      { label: "Resources", href: "/resources", description: "Guides, checklists, and templates" },
    ],
  },
];

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Premium Websites", href: "/services#websites" },
    { label: "AI Automation", href: "/services#ai-automation" },
    { label: "Business Systems", href: "/services#business-systems" },
    { label: "Custom Software", href: "/services#custom-software" },
  ],
  Resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
