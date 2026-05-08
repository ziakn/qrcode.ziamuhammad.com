import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/app-store";

export const metadata: Metadata = {
  title: "App Store QR Code — Drive App Downloads",
  description: "Generate an App Store QR code to increase mobile app downloads. Smart links route iOS users to App Store and Android users to Google Play automatically.",
  alternates: { canonical: slug },
};

export default function AppStorePage() {
  const related = [
    { title: "URL QR Code", href: "/" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
    { title: "QR Code Templates", href: "/templates" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create an App Store QR Code",
    "description": "Generate a QR code that directs users to download your mobile app.",
    "step": [
      { "@type": "HowToStep", "text": "Get your app's store URL from App Store or Google Play." },
      { "@type": "HowToStep", "text": "Use a smart link service or create separate iOS/Android codes." },
      { "@type": "HowToStep", "text": "Paste the URL into the QR code generator." },
      { "@type": "HowToStep", "text": "Download and add to marketing materials." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="App Store QR Code"
          subtitle="Turn interest into downloads with one scan."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use an App Store QR Code?</h2>
                <p>Getting users to manually type your app's store URL is a major conversion barrier. A QR code removes this friction, allowing potential users to download your app directly from their phone's app store with a single scan.</p>
              </section>

              <section className="article-section">
                <h2>Best Implementation</h2>
                <ul>
                  <li><strong>Smart Links:</strong> Use a service that detects device and redirects to the correct store (iOS vs Android).</li>
                  <li><strong>On-Device Testing:</strong> Test the scan-to-download flow on both iPhone and Android.</li>
                  <li><strong>Call-to-Action:</strong> Include text like "Scan to download" or "Get the app."</li>
                  <li><strong>Size & Contrast:</strong> Ensure the code is large enough and high contrast for scanning.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Placement Ideas</h2>
                <p>Print on product packaging, business cards, event banners, website footers, and in-store signage. The more visible, the better.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
