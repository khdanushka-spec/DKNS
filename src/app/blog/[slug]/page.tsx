import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      url: `${site.url}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <Section className="pt-20 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to Blog
          </Link>
          <Badge className="mt-6">{post.category}</Badge>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-fg-faint">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-fg">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
