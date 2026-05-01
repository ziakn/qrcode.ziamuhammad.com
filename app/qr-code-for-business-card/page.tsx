import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Business Card QR Code — Free vCard Generator",
  description: "Generate a custom vCard QR code for your business cards. Allow clients to save your professional contact details directly to any smartphone with one scan.",
  alternates: { canonical: "/qr-code-for-business-card" },
};

export default function BusinessCardPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "vCard QR Code Generator",
    "description": "A tool to create digital business cards using QR codes."
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug="qr-code-for-business-card" 
          title="Business Card QR Codes"
          subtitle="Upgrade your physical card to a digital experience."
          schema={schema}
          content={
            <>
              <h2>Modernize your networking</h2>
              <p>Stop relying on people manually typing your phone number or email. A vCard QR code stores your full name, organization, job title, and contact links in a format smartphones recognize instantly.</p>
              <h2>What to include</h2>
              <ul>
                <li>Your full name and title</li>
                <li>Work phone and direct email</li>
                <li>Your LinkedIn or company website</li>
              </ul>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
