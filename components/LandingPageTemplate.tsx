import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

interface LandingPageProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  schema?: object;
  slug: string;
  category?: string;
  categoryHref?: string;
  relatedLinks?: { title: string; href: string }[];
}

export function LandingPageTemplate({ title, subtitle, content, schema, slug, category = "Guide", categoryHref = "/qr-code-types", relatedLinks }: LandingPageProps) {
  const canonicalUrl = `https://qrcode.ziamuhammad.com${slug}`;

  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://qrcode.ziamuhammad.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": category,
      "item": `https://qrcode.ziamuhammad.com${categoryHref}`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": title,
      "item": canonicalUrl
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements
  };

  const schemas = schema ? [breadcrumbSchema, schema] : breadcrumbSchema;

  return (
    <div className="landing-page">
      {/* SEO & Meta */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="landing-hero">
        <nav className="landing-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <Link href={categoryHref}>{category}</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="landing-title">{title}</h1>
        <p className="landing-subtitle">{subtitle}</p>
      </div>

      <div className="landing-container">
        <article className="landing-article">
          {content}
        </article>

        {/* Rule 6: Internal Linking Hub */}
        {relatedLinks && relatedLinks.length > 0 && (
          <aside className="related-guides">
            <h3>Related QR Guides</h3>
            <div className="related-grid">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="related-link-card">
                  <span>{link.title}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
      
      <div className="landing-footer-cta">
        <div className="cta-card">
          <h2>Create Your QR Code</h2>
          <p>Ready to put this knowledge into practice? Generate a professional QR code in seconds.</p>
          <Link href="/" className="btn-primary">Start Generating Now</Link>
        </div>
      </div>
    </div>
  );
}
