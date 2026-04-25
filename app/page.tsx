import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QRStudio } from "@/components/QRStudio";
import Link from "next/link";
import { CheckCircle, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Free QR Code Generator — Create High-Quality Custom QR Codes",
  description: "Generate professional, custom QR codes for free with QR Forge. Support for WiFi, vCard, Social Media, and more. No accounts required, high-resolution downloads.",
  alternates: { canonical: "https://qrcode.ziamuhammad.com" },
  openGraph: {
    title: "Free QR Code Generator — QR Forge",
    description: "The most intuitive way to create custom QR codes for your business or personal use.",
    url: "https://qrcode.ziamuhammad.com",
    siteName: "QR Forge",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QR Forge",
    "url": "https://qrcode.ziamuhammad.com",
    "description": "A high-fidelity QR code generation tool supporting multiple data types and custom designs.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="main">
        <section className="hero">
          <h1 className="hero-title">Free QR Code Generator</h1>
          <p className="hero-sub">Create professional, high-fidelity QR codes for your business or personal use in seconds.</p>
        </section>

        <QRStudio />

        {/* SEO Content Section: Rule 5 (No thin pages) */}
        <section className="home-editorial landing-container">
          <div className="editorial-content">
            <div className="features-grid">
              <div className="feature-item">
                <Zap size={24} className="feature-icon" />
                <h3>Fast & Real-Time</h3>
                <p>See your changes instantly as you type. No waiting, no refreshing.</p>
              </div>
              <div className="feature-item">
                <Shield size={24} className="feature-icon" />
                <h3>Privacy First</h3>
                <p>We don't track your scans or store your data. Your privacy is our priority.</p>
              </div>
              <div className="feature-item">
                <Globe size={24} className="feature-icon" />
                <h3>High Resolution</h3>
                <p>Download in PNG or vector SVG formats for perfect print quality.</p>
              </div>
              <div className="feature-item">
                <CheckCircle size={24} className="feature-icon" />
                <h3>10+ QR Types</h3>
                <p>From WiFi and vCards to Social Media and Payment links.</p>
              </div>
            </div>

            <article className="article-section">
              <h2>Why Choose QR Forge?</h2>
              <p>In a world full of complex, account-walled tools, QR Forge stands out by offering a friction-free experience. Our engine is built for precision, allowing you to customize everything from dot patterns to eye styles while ensuring your codes remain 100% scannable.</p>
              <p>Whether you're looking to <Link href="/how-to-create-a-qr-code">create a QR code</Link> for your restaurant menu or share your <Link href="/qr-code-for-wifi">WiFi password</Link> securely, we provide the technical depth and design flexibility you need.</p>
            </article>

            <article className="article-section">
              <h2>Professional Standards</h2>
              <p>We follow strict <Link href="/qr-code-size-guide">sizing guidelines</Link> to ensure your codes work on every device. By supporting high error correction levels, we allow you to add logos without compromising the integrity of the data.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
