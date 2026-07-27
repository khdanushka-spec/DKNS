export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Business" | "Technology" | "AI" | "Marketing" | "Automation" | "SEO" | "Case Studies";
  author: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "why-ai-automation-pays-for-itself",
    title: "Why AI Automation Pays for Itself in the First Quarter",
    excerpt:
      "The businesses seeing the fastest ROI from AI aren't building chatbots — they're automating the manual work no one wants to do.",
    category: "AI",
    author: "Dhanushka Kariyawasam",
    date: "2026-06-02",
    readingTime: "6 min read",
    content: [
      "Most conversations about AI in business start with chatbots and end with disappointment. The highest-return AI projects we've shipped look nothing like that.",
      "They look like a lab technician who no longer re-types sample results into three different spreadsheets. A scheduler who no longer manually cross-checks orders against inventory. An operations manager who gets a report automatically instead of building one every Friday afternoon.",
      "The pattern is consistent: identify the manual, repetitive, rules-based work first. That's where automation pays for itself fastest — often within the same quarter it ships.",
      "Only after that foundation is in place does it make sense to layer in generative AI for judgment-heavy tasks like drafting, summarizing, or answering customer questions. Skipping straight to a chatbot without fixing the underlying workflow just automates the wrong problem.",
    ],
  },
  {
    slug: "choosing-a-website-that-still-looks-premium-in-2030",
    title: "How to Choose a Website That Still Looks Premium in 2030",
    excerpt:
      "Trends age fast. Here's what actually keeps a website looking modern years after launch — and what to avoid.",
    category: "Technology",
    author: "Dhanushka Kariyawasam",
    date: "2026-04-18",
    readingTime: "5 min read",
    content: [
      "Every design trend eventually looks dated — except restraint. The websites that still feel premium years later share the same traits: generous whitespace, a disciplined type scale, and motion that supports the content instead of performing for its own sake.",
      "Avoid anything that depends on a single trendy effect to feel modern. Parallax, glassmorphism, and heavy gradients are tools, not identities — used well they add polish; used as the whole design, they date the site the moment the trend passes.",
      "The most durable investment is a strong content and component architecture. If your site is built so a case study, a service, or a blog post can be added without touching code, it stays maintainable long after the initial launch excitement fades.",
    ],
  },
  {
    slug: "the-real-cost-of-a-slow-website",
    title: "The Real Cost of a Slow Website (It's Not Just Bounce Rate)",
    excerpt:
      "Page speed doesn't just affect visitors who leave — it affects the ones who convert, and how Google ranks you against competitors who don't wait.",
    category: "SEO",
    author: "Dhanushka Kariyawasam",
    date: "2026-02-27",
    readingTime: "4 min read",
    content: [
      "It's tempting to treat page speed as a technical detail rather than a business one. In practice, it shows up in three places at once: bounce rate, conversion rate, and search ranking — all simultaneously.",
      "Core Web Vitals are now a direct ranking factor, which means a fast competitor can outrank you on content alone. And even visitors who do wait convert at a measurably lower rate the longer a page takes to become interactive.",
      "The fix isn't a single plugin — it's architectural: server components that ship less JavaScript, images sized and compressed correctly, and fonts loaded without blocking render. Get the architecture right once, and speed stops being something you have to keep fighting for.",
    ],
  },
];
