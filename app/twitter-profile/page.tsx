import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/twitter-profile";

export const metadata: Metadata = {
  title: "Twitter/X Profile QR Code — Grow Your Twitter Following",
  description: "Generate a Twitter (X) profile QR code to increase followers and engagement. Perfect for brands, influencers, and media personalities.",
  alternates: { canonical: slug },
};

export default function TwitterProfilePage() {
  const related = [
    { title: "Instagram Profile QR Code", href: "/instagram-profile" },
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "LinkedIn Profile QR Code", href: "/linkedin-profile" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Twitter/X Profile QR Code",
    "description": "Generate a QR code that links directly to your Twitter or X profile.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your Twitter/X profile URL." },
      { "@type": "HowToStep", "text": "Paste it into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize with your brand colors." },
      { "@type": "HowToStep", "text": "Download and share across your marketing channels." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Twitter/X Profile QR Code"
          subtitle="Grow your Twitter audience with scan-to-follow convenience."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a Twitter/X QR Code?</h2>
                <p>Twitter (now X) thrives on real-time engagement. Make it effortless for your audience to follow you by embedding a QR code in your content, at events, or on physical products. This eliminates the friction of manual URL entry.</p>
              </section>

              <section className="article-section">
                <h2>Best Use Cases</h2>
                <ul>
                  <li><strong>Live Events:</strong> Display on screens so attendees can follow live updates.</li>
                  <li><strong>Podcasts & Videos:</strong> Show on screen for viewers to follow.</li>
                  <li><strong>Merchandise:</strong> Print on t-shirts, stickers, and swag.</li>
                  <li><strong>Packaging:</strong> Encourage customers to follow for updates.</li>
                  <li><strong>Business Cards:</strong> Modern alternative to traditional contact info.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Tips for Success</h2>
                <p>Position the QR code where it's easily scannable—avoid reflective surfaces or crowded designs. Pair it with a clear CTA like "Follow us on X for real-time updates" to maximize scan rates.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
