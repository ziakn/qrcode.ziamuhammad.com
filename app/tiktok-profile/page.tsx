import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/tiktok-profile";

export const metadata: Metadata = {
  title: "TikTok Profile QR Code — Go Viral Faster",
  description: "Generate a TikTok profile QR code to gain followers and increase engagement. Perfect for creators, brands, and influencers.",
  alternates: { canonical: slug },
};

export default function TikTokProfilePage() {
  const related = [
    { title: "Instagram Profile QR Code", href: "/instagram-profile" },
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "YouTube Channel QR Code", href: "/youtube-channel" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a TikTok Profile QR Code",
    "description": "Generate a QR code that links directly to your TikTok profile.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your TikTok profile URL." },
      { "@type": "HowToStep", "text": "Paste it into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize with your brand colors." },
      { "@type": "HowToStep", "text": "Download and share across platforms." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="TikTok Profile QR Code"
          subtitle="Turn viewers into followers with one scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a TikTok QR Code?</h2>
                <p>TikTok's algorithm rewards engagement and new followers. A QR code removes the friction of manually typing your @handle, making it easier for viewers to find and follow you instantly.</p>
              </section>

              <section className="article-section">
                <h2>Where to Deploy</h2>
                <ul>
                  <li><strong>Other Social Platforms:</strong> Cross-promote on Instagram, YouTube, Twitter.</li>
                  <li><strong>Merchandise:</strong> Print on t-shirts, hats, and stickers.</li>
                  <li><strong>Livestreams:</strong> Display on screen during streams.</li>
                  <li><strong>Packaging:</strong> Include on product boxes and inserts.</li>
                  <li><strong>Events:</strong> Show on screens at meetups and conventions.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Maximize Impact</h2>
                <p>Pair your QR code with a clear CTA such as "Follow us on TikTok" or "Scan for more videos." Make sure the code is large enough (minimum 1 inch) and has high contrast for reliable scanning.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
