import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "QR Forge Blog — Insights & Best Practices",
  description: "Read the latest insights, technical guides, and marketing strategies for utilizing QR codes effectively in your business.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="landing-page">
          <div className="landing-hero" style={{ paddingBottom: "2rem" }}>
            <h1 className="landing-title">QR Forge Blog</h1>
            <p className="landing-subtitle">Technical guides, industry insights, and marketing strategies.</p>
          </div>
          
          <div className="landing-container" style={{ maxWidth: "1000px" }}>
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem", padding: "2rem 0" }}>
              {BLOG_POSTS.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ display: "flex", flexDirection: "column", padding: "1.5rem", background: "var(--background-secondary)", borderRadius: "var(--radius-lg)", textDecoration: "none", color: "inherit", transition: "transform 0.2s", border: "1px solid var(--border-color)" }}>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-tertiary)", marginBottom: "0.5rem" }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.25rem", lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
