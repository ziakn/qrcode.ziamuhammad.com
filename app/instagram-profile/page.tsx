import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/instagram-profile";

export const metadata: Metadata = {
  title: "Instagram Profile QR Code — Grow Your Followers",
  description: "Create a custom Instagram profile QR code. Drive followers, increase engagement, and make it easy for people to find your brand on Instagram.",
  alternates: { canonical: slug },
};

export default function InstagramProfilePage() {
  const related = [
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "QR Code for WhatsApp", href: "/qr-code-for-whatsapp" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create an Instagram Profile QR Code",
    "description": "Generate a QR code that links directly to your Instagram profile.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your Instagram profile URL." },
      { "@type": "HowToStep", "text": "Paste it into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize with your brand colors." },
      { "@type": "HowToStep", "text": "Add your logo and download." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Instagram Profile QR Code"
          subtitle="Convert scans into followers instantly."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use an Instagram QR Code?</h2>
                <p>Instead of asking people to manually type your Instagram username (prone to typos), generate a QR code that takes them directly to your profile with one scan. This is perfect for growing your following and increasing engagement.</p>
              </section>

              <section className="article-section">
                <h2>Strategic Placement Ideas</h2>
                <ul>
                  <li><strong>Business Cards:</strong> Replace your website URL with your Instagram handle.</li>
                  <li><strong>Product Packaging:</strong> Encourage unboxing videos and user-generated content.</li>
                  <li><strong>Storefront Windows:</strong> Passersby can follow you instantly.</li>
                  <li><strong>Events & Trade Shows:</strong> Build your community on the spot.</li>
                  <li><strong>Restaurant Menus:</strong> Link to your food Instagram account.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Pro Tips</h2>
                <p>Customize the QR code with your brand colors to maintain visual consistency. Consider adding a small call-to-action like "Follow us on Instagram" near the code to increase scan rates.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
