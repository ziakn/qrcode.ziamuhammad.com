import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { 
  Wifi, 
  User, 
  MessageSquare, 
  Utensils, 
  Star, 
  Calendar, 
  CreditCard, 
  Camera,
  ChevronRight,
  Briefcase,
  Globe,
  Send,
  Play,
  Download,
  MapPin,
  Video,
  PhoneCall,
  DollarSign,
  Music,
  Bell
} from "lucide-react";

export const metadata: Metadata = {
  title: "QR Code Templates — Professional Designs for Every Use Case",
  description: "Browse 20+ custom QR code templates. Ready-to-use designs for restaurants, real estate, social media, and business cards.",
  keywords: ["qr code templates", "qr code design", "restaurant qr code", "real estate qr code", "business card qr code", "custom qr styles"],
  alternates: { canonical: "/templates" },
};

const TEMPLATES = [
  { id: "wifi", title: "WiFi Access", icon: <Wifi size={24} />, desc: "The classic guest network template.", path: "/qr-code-for-wifi" },
  { id: "vcard", title: "vCard Pro", icon: <User size={24} />, desc: "Digital business cards for networking.", path: "/qr-code-for-business-card" },
  { id: "whatsapp", title: "WhatsApp Chat", icon: <MessageSquare size={24} />, desc: "Start a chat instantly with any number.", path: "/qr-code-for-whatsapp" },
  { id: "menu", title: "Restaurant Menu", icon: <Utensils size={24} />, desc: "Link directly to PDF or digital menus.", path: "/qr-code-for-restaurant-menu" },
  { id: "reviews", title: "Google Reviews", icon: <Star size={24} />, desc: "Boost your retail ratings easily.", path: "/" },
  { id: "event", title: "Event RSVP", icon: <Calendar size={24} />, desc: "Simplify event sign-ups and invites.", path: "/" },
  { id: "payment", title: "Payment Link", icon: <CreditCard size={24} />, desc: "Touchless payments for small business.", path: "/" },
  { id: "instagram", title: "Instagram Profile", icon: <Camera size={24} />, desc: "Link directly to your Instagram profile.", path: "/" },
  { id: "linkedin", title: "LinkedIn Profile", icon: <Briefcase size={24} />, desc: "Connect with professionals instantly.", path: "/" },
  { id: "facebook", title: "Facebook Page", icon: <Globe size={24} />, desc: "Grow your community on Facebook.", path: "/" },
  { id: "twitter", title: "X / Twitter", icon: <Send size={24} />, desc: "Share your latest tweets and profile.", path: "/" },
  { id: "youtube", title: "YouTube Channel", icon: <Play size={24} />, desc: "Direct link to your latest videos.", path: "/" },
  { id: "appstore", title: "App Store", icon: <Download size={24} />, desc: "Direct download for iOS/Android apps.", path: "/" },
  { id: "location", title: "Google Maps", icon: <MapPin size={24} />, desc: "Direct users to your physical store.", path: "/" },
  { id: "zoom", title: "Zoom Meeting", icon: <Video size={24} />, desc: "Launch online meetings with one scan.", path: "/" },
  { id: "call", title: "Phone Call", icon: <PhoneCall size={24} />, desc: "Trigger an instant phone call to support.", path: "/" },
  { id: "paypal", title: "PayPal Me", icon: <DollarSign size={24} />, desc: "Receive payments and tips directly.", path: "/" },
  { id: "tiktok", title: "TikTok Profile", icon: <Music size={24} />, desc: "Link to your viral TikTok content.", path: "/" },
  { id: "snapchat", title: "Snapchat", icon: <Bell size={24} />, desc: "Connect with followers on Snapchat.", path: "/" },
  { id: "website", title: "Website URL", icon: <ChevronRight size={24} />, desc: "Simple link to any landing page.", path: "/" }
];

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="hero">
          <h1 className="hero-title">20+ QR Templates</h1>
          <p className="hero-sub">Ready-to-use designs for every business and personal need.</p>
        </div>

        <div className="templates-container">
          <div className="template-grid">
            {TEMPLATES.map((t) => (
              <Link href={t.path} key={t.id} className="template-card">
                <div className="template-icon">{t.icon}</div>
                <div className="template-content">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
                <div className="template-arrow">
                  <ChevronRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="editorial-content mt-48">
          <h2>Purpose-built for scanning</h2>
          <p>Each template is designed with the user's scanning environment in mind. From the high-contrast needs of a printed business card to the quick-action requirements of a restaurant table sticker, our presets ensure your QR codes work perfectly the first time.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
