import { QRStudio } from "@/components/QRStudio";
import Link from "next/link";

interface LandingPageProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  schema?: object;
}

export function LandingPageTemplate({ title, subtitle, content, schema }: LandingPageProps) {
  return (
    <div className="landing-page">
      {/* Schema.org JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className="landing-hero">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-sub">{subtitle}</p>
      </div>
      
      <div className="landing-studio-wrap">
        <QRStudio />
      </div>

      <div className="landing-content">
        <div className="editorial-content">
          {content}
        </div>
      </div>
      
      <div className="landing-cta-bottom">
        <p>Ready to start? Use the generator above or explore more guides below.</p>
        <Link href="/" className="btn-outline">Back to Home</Link>
      </div>
    </div>
  );
}
