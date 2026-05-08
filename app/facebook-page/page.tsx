import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/facebook-page";

export const metadata: Metadata = {
  title: "Facebook Page QR Code — Grow Your Facebook Audience",
  description: "Create a Facebook Page QR code to increase page likes and engagement. Perfect for retail stores, restaurants, and local businesses.",
  alternates: { canonical: slug },
};

export default function FacebookPagePage() {
  const related = [
    { title: "Instagram Profile QR Code", href: "/instagram-profile" },
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Facebook Page QR Code",
    "description": "Generate a QR code that links directly to your Facebook business page.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your Facebook Page URL." },
      { "@type": "HowToStep", "text": "Paste it into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize with your brand colors." },
      { "@type": "HowToStep", "text": "Download and place in your physical locations." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Facebook Page QR Code"
          subtitle="Drive likes and engagement with a single scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a Facebook Page QR Code?</h2>
                <p>Facebook remains a powerful platform for local businesses and communities. Make it effortless for customers to find and like your page by placing a QR code at your point of sale, on packaging, or in your storefront window.</p>
              </section>

              <section className="article-section">
                <h2>Placement Strategies</h2>
                <ul>
                  <li><strong>Retail Stores:</strong> Place on checkout counters and receipts.</li>
                  <li><strong>Restaurants:</strong> Add to menus and table tents.</li>
                  <li><strong>Product Packaging:</strong> Include on boxes and labels.</li>
                  <li><strong>Events:</strong> Display on banners and promotional materials.</li>
                  <li><strong>Email Signatures:</strong> Embed in team member signatures.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Maximize Conversions</h2>
                <p>Pair the QR code with a clear call-to-action like "Like us on Facebook for exclusive deals!" to incentivize scans and follows. Consider offering a small discount for customers who follow your page.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
