import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/snapchat";

export const metadata: Metadata = {
  title: "Snapchat QR Code — Add Friends Instantly",
  description: "Generate a Snapchat QR code (Snapcode) to add friends and grow your following. Perfect for influencers, brands, and social media marketing.",
  alternates: { canonical: slug },
};

export default function SnapchatPage() {
  const related = [
    { title: "Instagram Profile QR Code", href: "/instagram-profile" },
    { title: "TikTok Profile QR Code", href: "/tiktok-profile" },
    { title: "Social Media QR Codes", href: "/templates" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Snapchat QR Code",
    "description": "Generate a QR code (Snapcode) that lets users add you on Snapchat instantly.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your Snapchat profile URL or username." },
      { "@type": "HowToStep", "text": "Paste into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize the design with your brand colors." },
      { "@type": "HowToStep", "text": "Download and share on your marketing materials." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Snapchat QR Code"
          subtitle="Add friends and grow your Snap following instantly."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a Snapchat QR Code?</h2>
                <p>Snapchat's built-in Snapcodes make adding friends effortless. By generating your own custom Snapcode, you make it even easier for people to add you—no manual username search required.</p>
              </section>

              <section className="article-section">
                <h2>Strategic Placement</h2>
                <ul>
                  <li><strong>Instagram Stories:</strong> Share your Snapcode as a swipe-up or post.</li>
                  <li><strong>YouTube Videos:</strong> Display on screen in the outro.</li>
                  <li><strong>Merchandise:</strong> Print on stickers, phone cases, and apparel.</li>
                  <li><strong>Events:</strong> Put on lanyards or event signage.</li>
                  <li><strong>Cross-Promotion:</strong> Include in bios on other social platforms.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Customization Benefits</h2>
                <p>While Snapchat generates default Snapcodes, customizing your QR code with brand colors and a logo in the center makes it more recognizable and professional. It also aligns with your overall brand identity.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
