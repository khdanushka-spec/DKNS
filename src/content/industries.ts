export type Industry = {
  slug: string;
  icon:
    | "wheat"
    | "heart-pulse"
    | "factory"
    | "graduation-cap"
    | "palmtree"
    | "flask-conical"
    | "hard-hat"
    | "shopping-bag"
    | "briefcase"
    | "landmark";
  name: string;
  description: string;
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "agriculture",
    icon: "wheat",
    name: "Agriculture",
    description: "Farm management systems, yield tracking, and supply chain visibility for modern agribusiness.",
    solutions: ["Crop & yield dashboards", "Supply chain traceability", "IoT sensor integration"],
  },
  {
    slug: "healthcare",
    icon: "heart-pulse",
    name: "Healthcare",
    description: "Secure patient-facing portals and clinical operations tools built for compliance.",
    solutions: ["Patient booking portals", "Secure records management", "Telehealth-ready platforms"],
  },
  {
    slug: "manufacturing",
    icon: "factory",
    name: "Manufacturing",
    description: "Production, inventory, and quality-control systems that replace manual tracking.",
    solutions: ["Production scheduling", "Inventory & BOM management", "Quality control workflows"],
  },
  {
    slug: "education",
    icon: "graduation-cap",
    name: "Education",
    description: "Enrollment platforms, learning portals, and admin systems for schools and training providers.",
    solutions: ["Enrollment & admissions", "Learning management", "Alumni & donor CRM"],
  },
  {
    slug: "tourism",
    icon: "palmtree",
    name: "Tourism & Hospitality",
    description: "Booking engines and guest experience platforms that turn browsers into bookings.",
    solutions: ["Direct booking engines", "Guest experience apps", "Multi-property management"],
  },
  {
    slug: "laboratories",
    icon: "flask-conical",
    name: "Laboratories",
    description: "Sample tracking, QC workflows, and reporting systems for labs and diagnostics.",
    solutions: ["Sample & QC tracking", "Chain-of-custody records", "Automated reporting"],
  },
  {
    slug: "construction",
    icon: "hard-hat",
    name: "Construction",
    description: "Project tracking, estimating, and site management tools for builders and contractors.",
    solutions: ["Project & milestone tracking", "Estimating & quoting tools", "Site safety reporting"],
  },
  {
    slug: "retail",
    icon: "shopping-bag",
    name: "Retail",
    description: "E-commerce platforms and inventory systems that unify online and in-store sales.",
    solutions: ["E-commerce storefronts", "Inventory synchronization", "Customer loyalty systems"],
  },
  {
    slug: "professional-services",
    icon: "briefcase",
    name: "Professional Services",
    description: "Client portals, proposal automation, and billing systems for consultancies and firms.",
    solutions: ["Client portals", "Proposal & contract automation", "Time & billing systems"],
  },
  {
    slug: "finance",
    icon: "landmark",
    name: "Finance",
    description: "Secure dashboards and reporting tools built to the standards financial data demands.",
    solutions: ["Secure client dashboards", "Automated reporting", "Compliance-ready architecture"],
  },
];
