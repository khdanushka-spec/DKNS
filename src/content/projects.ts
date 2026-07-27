export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  coverGradient: string;
  technology: string[];
  timeline: { phase: string; detail: string }[];
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
  featured: boolean;
};

/**
 * Placeholder case studies — sample content only, not real DKNS Digital clients.
 * Replace with real project work before launch.
 */
export const projects: Project[] = [
  {
    slug: "meridian-labs-ops-platform",
    name: "Meridian Labs Ops Platform",
    client: "Meridian Labs (sample project)",
    industry: "Laboratories",
    year: "2026",
    summary: "A production scheduling and quality-control platform replacing three spreadsheets with one system of record.",
    coverGradient: "from-emerald-700 via-emerald-600 to-amber-500",
    technology: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
    timeline: [
      { phase: "Discovery", detail: "Mapped existing spreadsheet workflows across production and QC teams" },
      { phase: "Design", detail: "Designed role-based dashboards for schedulers, technicians, and managers" },
      { phase: "Build", detail: "Shipped scheduling, sample tracking, and reporting modules in phased releases" },
      { phase: "Launch", detail: "Migrated historical data and trained the team over two weeks" },
    ],
    problem:
      "Meridian Labs ran production scheduling and quality control across three disconnected spreadsheets, causing data drift, missed handoffs, and hours of manual reconciliation every week.",
    solution:
      "We built a single ops platform with role-based views: schedulers plan production runs, technicians log QC samples against live specs, and managers get real-time reporting — all backed by one database.",
    results: [
      { label: "Manual reconciliation time", value: "-85%" },
      { label: "Scheduling errors", value: "-92%" },
      { label: "Weekly reporting", value: "Automated" },
    ],
    testimonial: {
      quote: "We went from three spreadsheets and a lot of guesswork to one system everyone trusts.",
      author: "Operations Manager",
      role: "Meridian Labs",
    },
    featured: true,
  },
  {
    slug: "harborlight-cabanas",
    name: "Harborlight Cabanas",
    client: "Harborlight Cabanas (sample project)",
    industry: "Tourism & Hospitality",
    year: "2026",
    summary: "A direct booking website that cut third-party commission dependency for a boutique retreat.",
    coverGradient: "from-amber-600 via-amber-500 to-emerald-600",
    technology: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    timeline: [
      { phase: "Discovery", detail: "Audited existing OTA listings and booking funnel drop-off" },
      { phase: "Design", detail: "Designed an immersive, image-led booking experience" },
      { phase: "Build", detail: "Built availability calendar, direct booking flow, and guest inquiries" },
      { phase: "Launch", detail: "Went live with SEO foundations and analytics tracking" },
    ],
    problem:
      "Harborlight Cabanas relied almost entirely on third-party booking platforms, losing 15-20% of every booking to commission with no direct relationship to guests.",
    solution:
      "We designed and built a premium, image-led booking site with a live availability calendar and direct inquiry flow, positioning the property as a destination in its own right.",
    results: [
      { label: "Direct bookings", value: "+64%" },
      { label: "OTA commission paid", value: "-38%" },
      { label: "Avg. session duration", value: "+2.1x" },
    ],
    featured: true,
  },
  {
    slug: "northfield-manufacturing-erp",
    name: "Northfield Manufacturing ERP",
    client: "Northfield Manufacturing (sample project)",
    industry: "Manufacturing",
    year: "2026",
    summary: "A phased ERP build covering production planning, inventory, and order management for a growing manufacturer.",
    coverGradient: "from-emerald-800 via-emerald-600 to-amber-400",
    technology: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    timeline: [
      { phase: "Discovery", detail: "Scoped a phased roadmap covering the full production lifecycle" },
      { phase: "Design", detail: "Modeled bill-of-materials, inventory, and order data to match real production flow" },
      { phase: "Build", detail: "Shipped order intake, planning, and inventory modules in stages" },
      { phase: "Support", detail: "Ongoing enhancements as the business scales" },
    ],
    problem:
      "Northfield Manufacturing was scaling production without a system connecting orders, bill-of-materials, and inventory — leading to stockouts and manual cross-checking on every order.",
    solution:
      "We delivered a phased ERP covering order intake, BOM-driven production planning, and live inventory tracking, so every order is checked against real stock automatically.",
    results: [
      { label: "Stockout incidents", value: "-70%" },
      { label: "Order processing time", value: "-55%" },
    ],
    featured: true,
  },
  {
    slug: "clarity-personal-os",
    name: "Clarity Personal OS",
    client: "Clarity (sample project)",
    industry: "Personal Brands",
    year: "2026",
    summary: "An AI-powered personal operating system unifying tasks, goals, and daily planning.",
    coverGradient: "from-amber-500 via-emerald-500 to-emerald-800",
    technology: ["Next.js", "Prisma", "OpenAI", "Vercel"],
    timeline: [
      { phase: "Discovery", detail: "Defined the core loop: capture, plan, reflect" },
      { phase: "Design", detail: "Designed a calm, distraction-free daily interface" },
      { phase: "Build", detail: "Integrated an AI planning assistant with task and goal tracking" },
      { phase: "Launch", detail: "Shipped to production on a custom domain" },
    ],
    problem:
      "Existing productivity apps forced a rigid structure that didn't adapt to how one person actually thinks, plans, and reflects day to day.",
    solution:
      "We built a personal operating system with an AI assistant at the core — turning loose notes and goals into a structured daily plan without manual organizing.",
    results: [
      { label: "Daily planning time", value: "-80%" },
      { label: "Goals tracked to completion", value: "+3x" },
    ],
    featured: false,
  },
];
