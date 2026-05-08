import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/google-maps";

export const metadata: Metadata = {
  title: "Google Maps QR Code — Get Directions Instantly",
  description: "Generate a Google Maps QR code to provide instant directions to your location. Perfect for business cards, flyers, and storefront displays.",
  alternates: { canonical: slug },
};

export default function GoogleMapsPage() {
  const related = [
    { title: "WiFi QR Code", href: "/qr-code-for-wifi" },
    { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Google Maps QR Code",
    "description": "Generate a QR code that opens your location in Google Maps.",
    "step": [
      { "@type": "HowToStep", "text": "Get your location's Google Maps link." },
      { "@type": "HowToStep", "text": "Paste the link into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize the design with your branding." },
      { "@type": "HowToStep", "text": "Download and place on your materials." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Google Maps QR Code"
          subtitle="Guide customers to your door with a single scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a Google Maps QR Code?</h2>
                <p>Help customers find your physical location effortlessly. Instead of asking them to manually type your address into their maps app, let them scan a QR code and get turn-by-turn directions instantly. This improves customer experience and reduces no-shows.</p>
              </section>

              <section className="article-section">
                <h2>Where to Use It</h2>
                <ul>
                  <li><strong>Business Cards:</strong> Add a small map code alongside your contact info.</li>
                  <li><strong>Flyers & Posters:</strong> Direct people to your event or storefront.</li>
                  <li><strong>Product Packaging:</strong> Include your company address for returns or visits.</li>
                  <li><strong>Storefront Windows:</strong> Help passing pedestrians navigate.</li>
                  <li><strong>Email Signatures:</strong> Embed for quick access to your office.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Pro Tips</h2>
                <p>Test your QR code on both iOS (Apple Maps) and Android (Google Maps) devices to ensure it opens the correct app. For international audiences, consider using a universal location URL that works across map services.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
