import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/phone-call";

export const metadata: Metadata = {
  title: "Phone Call QR Code — Instant Click-to-Call",
  description: "Generate a phone call QR code. When scanned, it initiates a phone call instantly. Perfect for customer support, sales, and business cards.",
  alternates: { canonical: slug },
};

export default function PhoneCallPage() {
  const related = [
    { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
    { title: "WhatsApp QR Code", href: "/qr-code-for-whatsapp" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Phone Call QR Code",
    "description": "Generate a QR code that initiates a phone call when scanned.",
    "step": [
      { "@type": "HowToStep", "text": "Enter your phone number with country code (e.g., +1234567890)." },
      { "@type": "HowToStep", "text": "Generate the QR code using the tel: protocol." },
      { "@type": "HowToStep", "text": "Customize the appearance if desired." },
      { "@type": "HowToStep", "text": "Download and use on your materials." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Phone Call QR Code"
          subtitle="Let customers call you with one tap."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a Phone Call QR Code?</h2>
                <p>Making a phone call requires users to manually type your number, which is inconvenient and error-prone. A phone call QR code initiates the dialer instantly—perfect for quick customer support or sales inquiries.</p>
              </section>

              <section className="article-section">
                <h2>Best Applications</h2>
                <ul>
                  <li><strong>Customer Support:</strong> Print on receipts, packaging, or manuals.</li>
                  <li><strong>Sales Teams:</strong> Add to business cards and proposals.</li>
                  <li><strong>Restaurants:</strong> Place on menus for reservations.</li>
                  <li><strong>Real Estate:</strong> Include on "For Sale" signs and flyers.</li>
                  <li><strong>Healthcare:</strong> Provide on appointment cards.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Format Note</h2>
                <p>Always include the full phone number with country code (e.g., +1 for US/Canada). This ensures the code works internationally and on any device.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
