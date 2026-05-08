import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/youtube-channel";

export const metadata: Metadata = {
  title: "YouTube Channel QR Code — Grow Your Subscribers",
  description: "Create a YouTube channel QR code to boost subscribers. Link directly to your channel, a specific video, or your latest upload.",
  alternates: { canonical: slug },
};

export default function YouTubeChannelPage() {
  const related = [
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "Instagram Profile QR Code", href: "/instagram-profile" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a YouTube Channel QR Code",
    "description": "Generate a QR code that links directly to your YouTube channel or video.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your YouTube channel or video URL." },
      { "@type": "HowToStep", "text": "Paste it into the QR code generator." },
      { "@type": "HowToStep", "text": "Choose your branding colors." },
      { "@type": "HowToStep", "text": "Download and add to videos, descriptions, or print." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="YouTube Channel QR Code"
          subtitle="Convert viewers into subscribers with one scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a YouTube QR Code?</h2>
                <p>Growing a YouTube channel requires reducing friction at every touchpoint. A QR code lets viewers subscribe or watch your content instantly without typing long URLs—perfect for cross-platform promotion.</p>
              </section>

              <section className="article-section">
                <h2>Popular Applications</h2>
                <ul>
                  <li><strong>Video End Screens:</strong> Add a QR code in the last 5 seconds of your video.</li>
                  <li><strong>Video Descriptions:</strong> Include a scannable link to your channel.</li>
                  <li><strong>Merchandise:</strong> Print on t-shirts, mugs, and stickers.</li>
                  <li><strong>Events:</strong> Display on presentation slides and posters.</li>
                  <li><strong>Business Cards:</strong> Link directly to your channel trailer.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Channel vs Video Link</h2>
                <p>Use your <strong>channel URL</strong> to drive subscriptions. Use a <strong>specific video URL</strong> to promote individual content. Consider creating separate QR codes for different campaigns.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
