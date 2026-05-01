import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/how-to-scan-qr-code";

export const metadata: Metadata = {
  title: "How to Scan a QR Code — Definitive iOS & Android Guide",
  description: "Learn how to effortlessly scan QR codes using your smartphone. Detailed, step-by-step instructions for iPhone and Android users using built-in cameras.",
  alternates: { canonical: "/how-to-scan-qr-code" },
};

export default function ScanGuide() {
  const related = [
    { title: "QR Code Size Guide", href: "/qr-code-size-guide" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
    { title: "Supported QR Formats", href: "/qr-code-types" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Scan a QR Code",
    "description": "Step-by-step instructions for scanning QR codes on any smartphone.",
    "step": [
      { "@type": "HowToStep", "text": "Open your camera app." },
      { "@type": "HowToStep", "text": "Point at the QR code." },
      { "@type": "HowToStep", "text": "Tap the link notification." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="The Definitive Guide to Scanning"
          subtitle="Everything you need to know about scanning QR codes on any modern device."
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>No Special App Required</h2>
                <p>Gone are the days of needing a third-party "QR Scanner" app. Today, scanning is a core function built directly into your smartphone's operating system.</p>
              </section>

              <section className="article-section">
                <h2>Scanning on iPhone (iOS)</h2>
                <p>Apple integrated QR scanning into the native Camera app starting with iOS 11. It's fast, secure, and automatic.</p>
                <ol>
                  <li><strong>Open the Camera app:</strong> Access it from your home screen or lock screen.</li>
                  <li><strong>Position the code:</strong> Hold your iPhone so the QR code appears clearly in the viewfinder.</li>
                  <li><strong>Wait for recognition:</strong> A yellow link button or notification will appear over the code.</li>
                  <li><strong>Tap to open:</strong> Simply tap the link to go to the destination.</li>
                </ol>
              </section>

              <section className="article-section">
                <h2>Scanning on Android Devices</h2>
                <p>Most Android devices (Samsung, Pixel, OnePlus) have native scanning built into the camera, though the interface may vary slightly.</p>
                <h3>Using the Camera App</h3>
                <ol>
                  <li>Open your <strong>Camera</strong> app and point it at the QR code.</li>
                  <li>A URL link will appear near the code. Tap it to open.</li>
                </ol>
                <h3>Using Google Lens</h3>
                <p>If your camera doesn't automatically detect the code, use Google Lens (built into the Google Search bar or Google Photos).</p>
                <ol>
                  <li>Open <strong>Google Lens</strong> and frame the code.</li>
                  <li>The app will highlight the link instantly.</li>
                </ol>
              </section>

              <div className="tip-box">
                <strong>Pro Tip:</strong> If your camera is struggling to focus, try moving your phone slightly further away. The lens needs about 4-6 inches of space to focus correctly on small QR codes.
              </div>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
