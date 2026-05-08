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
      images: [
        {
          url: "/og-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://qrcode.ziamuhammad.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://qrcode.ziamuhammad.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://qrcode.ziamuhammad.com/blog/${post.slug}`
      }
    ]
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://qrcode.ziamuhammad.com/about-us"
    },
    "publisher": {
      "@type": "Organization",
      "name": "QR Forge",
      "logo": {
        "@type": "ImageObject",
        "url": "https://qrcode.ziamuhammad.com/icon.svg",
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://qrcode.ziamuhammad.com/blog/${post.slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://qrcode.ziamuhammad.com/og-image",
      "width": 1200,
      "height": 630
    },
    "articleBody": post.content.replace(/<[^>]*>/g, '').slice(0, 5000),
    "keywords": "QR code, QR generator, digital marketing, technology"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, schema]) }}
      />
      <Header />
      <main className="main">
<LandingPageTemplate
           slug={`/blog/${post.slug}`}
           title={post.title}
           subtitle={`Published on ${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
           category="Blog"
           categoryHref="/blog"
           schema={[breadcrumbSchema, schema]}
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
