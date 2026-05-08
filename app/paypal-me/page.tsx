import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/paypal-me";

export const metadata: Metadata = {
  title: "PayPal.Me QR Code — Receive Payments Instantly",
  description: "Generate a PayPal.Me QR code to receive payments and tips. Perfect for freelancers, small businesses, charities, and content creators.",
  alternates: { canonical: slug },
};

export default function PayPalMePage() {
  const related = [
    { title: "Payment Link QR Code", href: "/payment-link" },
    { title: "QR Code for WhatsApp", href: "/qr-code-for-whatsapp" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a PayPal.Me QR Code",
    "description": "Generate a QR code that directs users to your PayPal.Me payment page.",
    "step": [
      { "@type": "HowToStep", "text": "Create your PayPal.Me link in your PayPal account." },
      { "@type": "HowToStep", "text": "Copy the full PayPal.Me URL." },
      { "@type": "HowToStep", "text": "Paste into the QR code generator." },
      { "@type": "HowToStep", "text": "Download and share with clients or customers." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="PayPal.Me QR Code"
          subtitle="Accept payments and tips with a single scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a PayPal.Me QR Code?</h2>
                <p>PayPal.Me links simplify receiving money without needing to exchange bank details. When paired with a QR code, payments become instantaneous—scan, confirm, and done. This is ideal for freelancers, small businesses, and creators who want quick, frictionless payments.</p>
              </section>

              <section className="article-section">
                <h2>Common Use Cases</h2>
                <ul>
                  <li><strong>Freelancers:</strong> Include on invoices and proposals.</li>
                  <li><strong>Content Creators:</strong> Add to videos and social profiles for tips.</li>
                  <li><strong>Charities & Fundraisers:</strong> Print on donation cards.</li>
                  <li><strong>Small Businesses:</strong> Display at checkout as a tip option.</li>
                  <li><strong>Service Providers:</strong> Add to business cards for easy payment.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Security & Trust</h2>
                <p>PayPal is a trusted payment platform. The QR code contains only your public PayPal.Me link—no sensitive data is exposed. Users will see the PayPal interface before any money is transferred, ensuring transparency.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
