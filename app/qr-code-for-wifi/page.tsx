import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WiFi QR Code Generator — Connect Instantly",
  description: "Create a free WiFi QR code to let guests connect to your network instantly without typing the password. Supports WPA, WEP, and hidden networks securely.",
  alternates: { canonical: "/qr-code-for-wifi" },
};

export default function WifiPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug="qr-code-for-wifi" 
          title="QR Code for WiFi"
          subtitle="Let your guests connect to your network instantly without typing passwords."
          content={
            <div className="editorial-content">
              <h2>How it works</h2>
              <p>A WiFi QR code encodes your network name (SSID) and password. When someone scans it with their phone camera, they are prompted to join the network automatically.</p>
              <h2>Best for</h2>
              <ul>
                <li>Home guest networks</li>
                <li>Coffee shops and restaurants</li>
                <li>Short-term rentals (Airbnb)</li>
              </ul>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
