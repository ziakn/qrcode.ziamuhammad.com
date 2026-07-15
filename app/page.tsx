import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QRStudio } from "@/components/QRStudio";
import Link from "next/link";
import { 
  CheckCircle, Zap, Shield, Globe, 
  MousePointer2, Settings2, Download, Search,
  HelpCircle, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free QR Code Generator — Create High-Quality Custom QR Codes",
  description: "Generate professional, custom QR codes for free with QR Forge. Support for WiFi, vCard, Social Media, and more. No accounts required, high-resolution downloads.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "QR Forge",
      "url": "https://qrcode.ziamuhammad.com",
      "description": "A high-fidelity QR code generation tool supporting multiple data types and custom designs.",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires HTML5",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Person",
        "name": "Zia Muhammad",
        "url": "https://www.ziamuhammad.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://qrcode.ziamuhammad.com",
      "name": "QR Forge",
      "logo": "https://qrcode.ziamuhammad.com/favicon.ico"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://qrcode.ziamuhammad.com",
      "name": "QR Forge",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://qrcode.ziamuhammad.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are these QR codes permanent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our codes are 'static,' meaning the data is encoded directly into the image. They will work as long as the destination URL or data is active."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We believe in a friction-free experience. You can generate as many codes as you want without ever giving us your email."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add my own logo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Use the Advanced options to upload a logo. We recommend using a High error correction level when adding images."
          }
        },
        {
          "@type": "Question",
          "name": "Is it really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. QR Forge is a free utility. We don't charge for high-resolution downloads or advanced customization features."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="main">
        <section className="hero">
          <h1 className="hero-title">Free QR Code Generator — High-Fidelity & No Sign-Up</h1>
          <p className="hero-sub">The most intuitive way to create high-fidelity QR codes for your business or personal projects. Editorial-grade output with pixel-perfect reliability.</p>
        </section>

        <QRStudio />

        <div className="home-content-wrap">
          {/* Features Section */}
          <section className="home-section">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon-wrap"><Zap size={24} /></div>
                <h3>Fast & Real-Time</h3>
                <p>See your changes instantly as you type. No waiting, no refreshing.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrap"><Shield size={24} /></div>
                <h3>Privacy First</h3>
                <p>We don't track your scans or store your data. Your privacy is our priority.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrap"><Globe size={24} /></div>
                <h3>High Resolution</h3>
                <p>Download in PNG or vector SVG formats for perfect print quality.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrap"><CheckCircle size={24} /></div>
                <h3>10+ QR Types</h3>
                <p>From WiFi and vCards to Social Media and Payment links.</p>
              </div>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="home-section editorial-centered">
            <div className="section-header">
              <span className="section-tag">Process</span>
              <h2>How to Create Your QR Code</h2>
              <p>Four simple steps to a professional result.</p>
            </div>
            
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">01</div>
                <MousePointer2 size={32} className="step-icon" />
                <h4>Select Type</h4>
                <p>Pick from URL, WiFi, vCard, or social media platforms.</p>
              </div>
              <div className="step-card">
                <div className="step-num">02</div>
                <Search size={32} className="step-icon" />
                <h4>Enter Data</h4>
                <p>Fill in the required fields with your specific information.</p>
              </div>
              <div className="step-card">
                <div className="step-num">03</div>
                <Settings2 size={32} className="step-icon" />
                <h4>Customize</h4>
                <p>Adjust colors, patterns, and add your brand logo.</p>
              </div>
              <div className="step-card">
                <div className="step-num">04</div>
                <Download size={32} className="step-icon" />
                <h4>Download</h4>
                <p>Export in high-resolution PNG or vector SVG format.</p>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="home-section split-section">
            <div className="split-content">
              <h2>Why Choose QR Forge?</h2>
              <p>In a world full of complex, account-walled tools, QR Forge stands out by offering a friction-free experience. Our engine is built for precision, allowing you to customize everything from dot patterns to eye styles while ensuring your codes remain 100% scannable.</p>
              <div className="split-benefits">
                <div className="benefit-line"><CheckCircle size={16} /> <span>No account or sign-up required</span></div>
                <div className="benefit-line"><CheckCircle size={16} /> <span>Unlimited generations and scans</span></div>
                <div className="benefit-line"><CheckCircle size={16} /> <span>Professional vector SVG support</span></div>
              </div>
            </div>
            <div className="split-content alt-bg">
              <h2>Professional Standards</h2>
              <p>We follow <Link href="/qr-code-size-guide">strict sizing guidelines</Link> to ensure your codes work on every device. By supporting high error correction levels, we allow you to add logos without compromising the integrity of the data.</p>
              <Link href="/qr-code-types" className="btn-text">Explore QR Types <ArrowRight size={16} /></Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="home-section editorial-centered">
            <div className="section-header">
              <HelpCircle size={32} className="section-icon-top" />
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Are these QR codes permanent?</h4>
                <p>Yes. Our codes are "static," meaning the data is encoded directly into the image. They will work as long as the destination URL or data is active.</p>
              </div>
              <div className="faq-item">
                <h4>Do I need an account?</h4>
                <p>No. We believe in a friction-free experience. You can generate as many codes as you want without ever giving us your email.</p>
              </div>
              <div className="faq-item">
                <h4>Can I add my own logo?</h4>
                <p>Absolutely. Use the Advanced options to upload a logo. We recommend using a High error correction level when adding images.</p>
              </div>
              <div className="faq-item">
                <h4>Is it really free?</h4>
                <p>Yes. QR Forge is a free utility. We don't charge for high-resolution downloads or advanced customization features.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
