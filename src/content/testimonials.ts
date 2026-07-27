export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  result: string;
};

/** Placeholder testimonials — sample content, replace with real client quotes. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "DKNS Digital didn't just build us a website — they rebuilt how our whole team works day to day. The platform paid for itself within the quarter.",
    author: "Operations Manager",
    role: "Operations Manager",
    company: "Meridian Labs",
    industry: "Laboratories",
    rating: 5,
    result: "-85% reconciliation time",
  },
  {
    quote:
      "We went from relying entirely on booking platforms to owning our own guest relationships. The site alone changed our margins.",
    author: "General Manager",
    role: "General Manager",
    company: "Harborlight Cabanas",
    industry: "Tourism & Hospitality",
    rating: 5,
    result: "+64% direct bookings",
  },
  {
    quote:
      "They understood manufacturing, not just software. Every screen matched how our floor actually operates.",
    author: "Plant Director",
    role: "Plant Director",
    company: "Northfield Manufacturing",
    industry: "Manufacturing",
    rating: 5,
    result: "-70% stockouts",
  },
  {
    quote:
      "Fast, precise, and genuinely invested in the outcome. It felt like having a senior engineering team on call.",
    author: "Founder",
    role: "Founder",
    company: "Clarity",
    industry: "Personal Brands",
    rating: 5,
    result: "-80% planning time",
  },
];
