import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { getBlogPost, BLOG_POSTS } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} — QR Forge`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={`/blog/${post.slug}`}
          title={post.title}
          subtitle={`Published on ${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
          schema={schema}
          content={
            <div 
              className="editorial-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          }
        />
      </main>
      <Footer />
    </>
  );
}
