import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/google-reviews";

export const metadata: Metadata = {
  title: "Google Reviews QR Code — Boost Your Online Reputation",
  description: "Generate a Google Reviews QR code to increase positive reviews. Place it on receipts, business cards, or storefronts to drive more customer feedback.",
  alternates: { canonical: slug },
};

export default function GoogleReviewsPage() {
  const related = [
    { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Google Reviews QR Code",
    "description": "Generate a QR code that links directly to your Google Reviews page.",
    "step": [
      { "@type": "HowToStep", "text": "Get your Google Review link from Google Business Profile." },
      { "@type": "HowToStep", "text": "Paste the link into the URL QR code generator." },
      { "@type": "HowToStep", "text": "Customize the design to match your brand." },
      { "@type": "HowToStep", "text": "Download and print on your materials." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Google Reviews QR Code"
          subtitle="Turn every customer interaction into a 5-star review."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a QR Code for Google Reviews?</h2>
                <p>Google reviews are critical for local SEO and customer trust. Yet most customers don't leave reviews because they have to search for your business on Google and navigate through multiple steps. A QR code simplifies this to a single scan.</p>
              </section>

              <section className="article-section">
                <h2>Best Practices</h2>
                <ul>
                  <li><strong>Placement:</strong> Print on receipts, business cards, window decals, or table tents.</li>
                  <li><strong>Call-to-Action:</strong> Add text like "Scan to Review Us" near the code.</li>
                  <li><strong>Timing:</strong> Present the QR code right after service when the experience is fresh.</li>
                  <li><strong>Size:</strong> Minimum 1 inch (2.5 cm) for print materials.</li>
                </ul>
              </section>

              <div className="tip-box">
                <strong>Pro Tip:</strong> Combine this with a short URL using UTM parameters to track which locations or campaigns drive the most reviews.
              </div>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
