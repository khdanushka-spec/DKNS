export type Job = {
  slug: string;
  title: string;
  employmentType: string;
  location: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  successLooksLike: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer",
    employmentType: "Contract",
    location: "Remote",
    summary:
      "Next.js, TypeScript, and Prisma across client engagements — from greenfield builds to complex migrations.",
    overview:
      "We are looking for a Senior Full-Stack Engineer to build, maintain, and improve modern web applications across a range of client engagements. You will work across the full technology stack, from frontend interfaces and backend services to databases, integrations, deployment, and production support.",
    responsibilities: [
      "Build production-ready applications using Next.js, React, and TypeScript.",
      "Develop scalable frontend interfaces and reusable UI components.",
      "Build backend APIs, server actions, business logic, and integrations.",
      "Design and maintain relational database schemas.",
      "Work extensively with Prisma ORM and PostgreSQL.",
      "Implement authentication, authorization, role-based access control, and secure application workflows.",
      "Integrate third-party APIs and external services.",
      "Take projects from greenfield development through production deployment.",
      "Maintain and improve existing applications and legacy systems.",
      "Perform database migrations and data restructuring safely.",
      "Troubleshoot production issues and improve application reliability.",
      "Optimize application performance, scalability, and security.",
      "Participate in code reviews and maintain strong engineering standards.",
      "Work directly with clients to understand requirements and translate them into practical technical solutions.",
      "Communicate technical decisions clearly with both technical and non-technical stakeholders.",
    ],
    requirements: [
      "Strong professional experience with TypeScript and React.",
      "Advanced experience with Next.js.",
      "Strong Prisma and relational database experience.",
      "Good understanding of PostgreSQL.",
      "Experience building REST APIs and modern web architectures.",
      "Strong Git/GitHub experience.",
      "Experience deploying production applications using platforms such as Vercel, AWS, or equivalent.",
      "Strong debugging and problem-solving ability.",
      "Ability to work independently in a remote environment.",
      "Strong communication and collaboration skills.",
      "Experience with application migrations or legacy-system modernization is highly desirable.",
    ],
    niceToHave: [
      "Experience with SaaS platforms.",
      "Experience with authentication systems and RBAC.",
      "Experience with cloud infrastructure.",
      "Experience with CI/CD.",
      "Experience with database optimization.",
      "Experience working directly with clients or agencies.",
    ],
    successLooksLike: [
      "You can take an ambiguous client requirement and turn it into a reliable production solution.",
      "You write clean, maintainable, scalable code.",
      "You are comfortable working across frontend, backend, and database layers.",
      "You can independently investigate and resolve difficult technical problems.",
      "You deliver high-quality work while communicating clearly with the team and clients.",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    employmentType: "Contract",
    location: "Remote",
    summary: "Own design across web, mobile, and internal tools, from discovery through pixel-perfect handoff.",
    overview:
      "We are looking for a Product Designer who can own the complete product-design process, from early discovery and user research through interaction design, visual design, prototyping, and developer handoff. You will work across web, mobile, SaaS products, dashboards, and internal business tools.",
    responsibilities: [
      "Own the end-to-end product design process.",
      "Understand user needs, business requirements, and technical constraints.",
      "Conduct discovery and user research.",
      "Identify user pain points and translate them into product opportunities.",
      "Create user flows, information architecture, wireframes, and prototypes.",
      "Design modern responsive web applications.",
      "Design mobile experiences and responsive interfaces.",
      "Design internal operational tools, dashboards, and business systems.",
      "Create reusable UI components and design systems.",
      "Produce high-fidelity designs and interactive prototypes.",
      "Work closely with engineers throughout implementation.",
      "Prepare detailed design specifications and developer handoff documentation.",
      "Review implemented features for visual quality and usability.",
      "Iterate designs based on user feedback and product requirements.",
      "Maintain consistency across the entire product ecosystem.",
    ],
    requirements: [
      "Strong experience with Figma or equivalent professional design tools.",
      "Strong understanding of UX and UI principles.",
      "Experience designing responsive web applications.",
      "Experience with mobile product design.",
      "Strong understanding of typography, spacing, layout, hierarchy, and interaction design.",
      "Experience creating design systems and reusable components.",
      "Ability to create clear prototypes and user flows.",
      "Strong communication and presentation skills.",
      "Ability to work closely with engineers and product stakeholders.",
      "Strong attention to detail.",
    ],
    niceToHave: [
      "SaaS product experience.",
      "Dashboard and enterprise application experience.",
      "Experience designing internal business tools.",
      "Experience working with design systems.",
      "Basic understanding of HTML, CSS, and frontend development.",
      "Experience working in a startup or fast-moving product environment.",
    ],
    successLooksLike: [
      "You turn complex requirements into simple, intuitive user experiences.",
      "Your designs are visually polished and technically realistic.",
      "Developers can implement your designs without ambiguity.",
      "You maintain consistency across products and platforms.",
      "You balance user experience, business goals, and technical constraints.",
    ],
  },
];
