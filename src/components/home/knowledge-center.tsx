import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { posts } from "@/content/posts";
import { resources } from "@/content/resources";

export function KnowledgeCenter() {
  return (
    <Section id="knowledge" className="bg-bg-subtle/40">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <Eyebrow>Knowledge Center</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
            Insights, research, and resources
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/blog" variant="secondary">
            Read the Blog
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <RevealItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-border-strong"
            >
              <Badge>{post.category}</Badge>
              <h3 className="mt-4 font-display text-lg font-medium leading-snug">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-fg-muted">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-fg-faint">
                <span>{post.readingTime}</span>
                <ArrowUpRight className="h-4 w-4 text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" strokeWidth={1.75} />
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-14 rounded-2xl border border-border bg-bg-elevated p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="font-display text-lg font-medium">Free guides &amp; templates</h3>
          <Button href="/resources" variant="secondary" size="md">
            All Resources
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources#${resource.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-border-strong"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Download className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-fg">{resource.title}</span>
            </Link>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
