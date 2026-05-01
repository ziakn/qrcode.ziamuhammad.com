import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/how-to-create-a-qr-code";

export const metadata: Metadata = {
  title: "How to Create a QR Code — Step-by-Step Guide for 2024",
  description: "Learn how to make a high-quality QR code for free. This guide covers choosing a type, customizing the design, and downloading for print or web.",
  keywords: ["how to create qr code", "make qr code free", "qr code creation guide", "custom qr design", "qr code tutorial"],
  alternates: { canonical: slug },
};

export default function CreateGuide() {
  const related = [
    { title: "QR Code Types", href: "/qr-code-types" },
    { title: "Size Guide for Printing", href: "/qr-code-size-guide" },
    { title: "How to Scan QR Codes", href: "/how-to-scan-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Custom QR Code",
    "description": "A professional guide to generating high-quality QR codes.",
    "step": [
      { "@type": "HowToStep", "text": "Select your QR code type." },
      { "@type": "HowToStep", "text": "Enter your data." },
      { "@type": "HowToStep", "text": "Customize the design." },
      { "@type": "HowToStep", "text": "Download and test." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="The Masterclass: Creating QR Codes"
          subtitle="Everything you need to know to generate, customize, and print high-fidelity QR codes."
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Step 1: Choose Your Content Type</h2>
                <p>The foundation of every great QR code is its intent. Start by selecting the appropriate type from our generator. Whether it's a simple <strong>URL</strong>, a professional <strong>vCard</strong>, or a branded <strong>Social Media</strong> link, choosing the right type ensures the best user experience.</p>
              </section>

              <section className="article-section">
                <h2>Step 2: Input Your Data Safely</h2>
                <p>Accuracy is paramount. When entering your data—be it a WiFi password or a payment link—our engine performs real-time validation. This ensures that the final QR code is syntactically correct and ready for any modern scanner.</p>
              </section>

              <section className="article-section">
                <h2>Step 3: Advanced Customization</h2>
                <p>Elevate your code beyond the standard "black and white" box. Use our <strong>Advanced options</strong> to align the QR code with your visual identity:</p>
                <ul>
                  <li><strong>Color Palette:</strong> Select foreground and background colors that match your brand.</li>
                  <li><strong>Module Styling:</strong> Choose between square, rounded, or dotted patterns.</li>
                  <li><strong>Brand Integration:</strong> Upload your logo to anchor the design and build trust.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Step 4: Vector Export & Testing</h2>
                <p>For professional use, we recommend the <strong>SVG</strong> format. As a vector format, it can be scaled to any size without losing clarity. Before launching your campaign, perform a "field test" with multiple devices to confirm scannability.</p>
              </section>

              <div className="tip-box">
                <strong>Pro Tip:</strong> Always use the <strong>Medium (M)</strong> or <strong>High (H)</strong> error correction level if you plan on adding a logo to your QR code. This ensures the data remains readable even with an image overlay.
              </div>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
