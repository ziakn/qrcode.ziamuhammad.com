import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "QR Code Size Guide — Print & Digital Standards",
  description: "What is the minimum size for a QR code? Learn about scanning distances and recommended dimensions for print and digital media.",
};

export default function SizeGuidePage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          title="QR Code Size Guide"
          subtitle="Ensure your codes are always scannable."
          content={
            <>
              <h2>Minimum Print Size</h2>
              <p>For most smartphones, the minimum recommended size for a QR code is <strong>2cm x 2cm</strong> (0.8" x 0.8").</p>
              <h2>The 10:1 Rule</h2>
              <p>A good rule of thumb is a 10:1 ratio between distance and size. If your user is standing 1 meter away, the QR code should be at least 10cm wide.</p>
              <h2>Digital Media</h2>
              <p>On screens, ensure the QR code is at least 200px wide to account for lower resolution displays.</p>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
