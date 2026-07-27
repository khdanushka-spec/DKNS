export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer: "A premium marketing website typically takes 3-5 weeks. Web applications and custom software range from 6-16 weeks depending on scope, usually delivered in phased milestones so you see progress every week.",
  },
  {
    question: "Do you work with businesses outside Australia?",
    answer: "Yes. While DKNS Digital is based in Australia, we work with clients internationally and run every engagement on async-friendly, milestone-based communication.",
  },
  {
    question: "Can you take over an existing website or system?",
    answer: "Yes. We regularly take over existing codebases — auditing what's there, stabilizing it, and building forward from a solid foundation rather than starting from scratch unnecessarily.",
  },
  {
    question: "What does 'AI automation' actually mean for my business?",
    answer: "It means identifying the repetitive, manual work in your operations — data entry, reporting, follow-ups — and building a system, often AI-assisted, that does it reliably without a person in the loop every time.",
  },
  {
    question: "Do I need to know what I want built before contacting you?",
    answer: "No. Most engagements start with a discovery call where we help translate a business problem into a technical scope — you don't need to arrive with a spec.",
  },
  {
    question: "What happens after launch?",
    answer: "Every project includes a post-launch support window, and most clients continue on a long-term support or enhancement retainer afterward.",
  },
];
