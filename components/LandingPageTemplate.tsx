import { QRStudio } from "@/components/QRStudio";
import Link from "next/link";

interface LandingPageProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export function LandingPageTemplate({ title, subtitle, content }: LandingPageProps) {
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-sub">{subtitle}</p>
      </div>
      
      <QRStudio />

      <div className="landing-content">
        {content}
      </div>
      
      <div className="landing-cta">
        <Link href="/" className="btn-primary">Back to Generator</Link>
      </div>
    </div>
  );
}
