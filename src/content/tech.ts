export type TechItem = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Infrastructure" | "AI";
};

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "Cloudflare", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "GitHub", category: "Infrastructure" },
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
];
