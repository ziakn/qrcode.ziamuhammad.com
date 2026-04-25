import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ScanPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          title="How to Scan a QR Code"
          subtitle="Everything you need to know about reading QR codes on any device."
          content={
            <div className="editorial-content">
              <h2>On iOS & Android</h2>
              <p>Most modern smartphones have QR code scanning built directly into the camera app.</p>
              <ol>
                <li>Open your Camera app.</li>
                <li>Point the camera at the QR code.</li>
                <li>Tap the notification banner that appears.</li>
              </ol>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
