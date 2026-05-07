import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { 
  Link2, Wifi, User, MessageSquare, Type, Mail, Phone, Share2, 
  DollarSign, Download, MapPin, Video, ChevronRight 
} from "lucide-react";

const slug = "/qr-code-types";

export const metadata: Metadata = {
  title: "QR Code Types — Explore 20+ Supported Formats",
  description: "Explore all supported QR code types including URL, WiFi, vCard, and Social Media. Discover the absolute best format for your personal or business needs.",
  alternates: { canonical: "/qr-code-types" },
};

const TYPES = [
  { id: "url", title: "Website URL", icon: <Link2 size={24} />, desc: "Link to any website, landing page, or online resource." },
  { id: "wifi", title: "WiFi Access", icon: <Wifi size={24} />, desc: "Securely share network credentials for instant connection." },
  { id: "vcard", title: "Digital vCard", icon: <User size={24} />, desc: "Digital business card that saves directly to contacts." },
  { id: "whatsapp", title: "WhatsApp Chat", icon: <MessageSquare size={24} />, desc: "Start a chat instantly without saving the number." },
  { id: "text", title: "Plain Text", icon: <Type size={24} />, desc: "Display unformatted text, notes, or simple codes." },
  { id: "email", title: "Email Draft", icon: <Mail size={24} />, desc: "Pre-fill recipient, subject, and body for quick emails." },
  { id: "phone", title: "Phone Call", icon: <Phone size={24} />, desc: "Trigger an immediate call to any phone number." },
  { id: "social", title: "Social Media", icon: <Share2 size={24} />, desc: "Brand-styled links for Instagram, LinkedIn, and X." },
  { id: "payment", title: "Payment Link", icon: <DollarSign size={24} />, desc: "Support for PayPal and direct payment gateways." },
  { id: "app", title: "App Store", icon: <Download size={24} />, desc: "Smart links for iOS and Android app downloads." },
  { id: "map", title: "GPS Location", icon: <MapPin size={24} />, desc: "Encode coordinates to launch maps instantly." },
  { id: "video", title: "Video Meeting", icon: <Video size={24} />, desc: "Direct links to Zoom, Meet, or Teams sessions." },
];
export default function TypesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "QR Code Types & Formats",
    "description": "Explore all supported QR code types including URL, WiFi, vCard, and Social Media.",
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://qrcode.ziamuhammad.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Types",
          "item": "https://qrcode.ziamuhammad.com/qr-code-types"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="main">
        <div className="landing-hero">
          <nav className="landing-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span aria-current="page">Types</span>
          </nav>
          <h1 className="landing-title">QR Code Types & Formats</h1>
          <p className="landing-subtitle">Every digital standard supported by our generation engine.</p>
        </div>

        <div className="template-grid">
          {TYPES.map((type) => (
            <Link key={type.id} href="/" className="template-card">
              <div className="template-icon">
                {type.icon}
              </div>
              <div className="template-content">
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </div>
              <ChevronRight className="template-arrow" size={20} />
            </Link>
          ))}
        </div>

        <div className="landing-footer-cta mt-48">
          <div className="cta-card">
            <h2>Ready to Generate?</h2>
            <p>Pick a type and start creating your high-quality QR code now.</p>
            <Link href="/" className="btn-primary">Back to Generator</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
