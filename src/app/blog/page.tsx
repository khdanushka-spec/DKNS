import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI, web development, marketing, and automation from the DKNS Digital team.",
  alternates: { canonical: "/blog" },
  openGraph: { url: `${site.url}/blog`, title: "Blog | DKNS Digital" },
};

export default function BlogPage() {
  return (
    <>
      <Section className="pb-8 pt-20 text-center md:pt-28">
        <Reveal>
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-display-1">
            Ideas on AI, web, and growth
          </h1>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <RevealItem key={post.slug} className={i === 0 ? "md:col-span-2" : undefined}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass-surface glow-border group flex h-full flex-col rounded-2xl p-6"
              >
                <Badge>{post.category}</Badge>
                <h2 className="mt-4 font-display text-lg font-medium leading-snug">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-fg-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-fg-faint">
                  <span>{post.readingTime}</span>
                  <ArrowUpRight className="h-4 w-4 text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" strokeWidth={1.75} />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
