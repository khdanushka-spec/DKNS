export type Resource = {
  slug: string;
  title: string;
  description: string;
  type: "Guide" | "Checklist" | "Template" | "AI Prompts";
};

export const resources: Resource[] = [
  {
    slug: "ai-readiness-checklist",
    title: "AI Readiness Checklist",
    description: "A 20-point checklist to assess whether your business processes are ready for automation.",
    type: "Checklist",
  },
  {
    slug: "website-launch-guide",
    title: "The Complete Website Launch Guide",
    description: "Everything to check before launch — performance, SEO, accessibility, and analytics.",
    type: "Guide",
  },
  {
    slug: "project-brief-template",
    title: "Project Brief Template",
    description: "A structured template for scoping a new website or software project before the first call.",
    type: "Template",
  },
  {
    slug: "ai-prompts-for-business-ops",
    title: "AI Prompts for Business Operations",
    description: "A curated set of prompts for reporting, summarizing, and drafting internal communications.",
    type: "AI Prompts",
  },
];
