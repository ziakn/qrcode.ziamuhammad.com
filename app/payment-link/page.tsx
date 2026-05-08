import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/payment-link";

export const metadata: Metadata = {
  title: "Payment Link QR Code — Touchless Payments",
  description: "Generate a QR code for payment links. Accept payments via PayPal, Stripe, or any payment gateway. Ideal for small businesses, freelancers, and donations.",
  alternates: { canonical: slug },
};

export default function PaymentLinkPage() {
  const related = [
    { title: "QR Code for WhatsApp", href: "/qr-code-for-whatsapp" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
    { title: "QR Code Templates", href: "/templates" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Payment Link QR Code",
    "description": "Generate a QR code that directs users to a payment page.",
    "step": [
      { "@type": "HowToStep", "text": "Create your payment link using PayPal.Me, Stripe, Square, or similar." },
      { "@type": "HowToStep", "text": "Copy the payment URL." },
      { "@type": "HowToStep", "text": "Paste into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize and print or share digitally." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Payment Link QR Code"
          subtitle="Accept payments instantly with a single scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a QR Code for Payments?</h2>
                <p>Eliminate the need to manually type payment URLs or share account details. A payment QR code is instant, professional, and reduces friction for both you and your customers.</p>
              </section>

              <section className="article-section">
                <h2>Perfect For</h2>
                <ul>
                  <li><strong>Freelancers:</strong> Include on invoices and proposals.</li>
                  <li><strong>Small Businesses:</strong> Display at checkout counters.</li>
                  <li><strong>Charities:</strong> Add to fundraising materials.</li>
                  <li><strong>Food Trucks:</strong> Print on menus for tip jars.</li>
                  <li><strong>Events:</strong> Collect payments at the door.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Security Considerations</h2>
                <p>Always use reputable payment providers (PayPal, Stripe, Square). Never encode sensitive bank account information directly in a static QR code. Use payment links provided by the service instead.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
