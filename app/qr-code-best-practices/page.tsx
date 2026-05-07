import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "QR Code Best Practices — Design & Scanning Guide",
  description: "Learn how to create high-fidelity QR codes that work perfectly every time. Discover essential tips on ideal sizing, color contrast, and proper placement.",
  alternates: { canonical: "/qr-code-best-practices" },
};

export default function BestPracticesPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          slug="qr-code-best-practices"
          title="QR Code Best Practices"
          subtitle="Design for reliability and scan-ability."
          category="Guide"
          categoryHref="/qr-code-types"
          content={
            <>
              <h2>1. Maintain High Contrast</h2>
              <p>Always use a dark foreground on a light background. Inverting these colors can make codes un-scannable for many older devices.</p>
              <h2>2. Size Matters</h2>
              <p>For print materials, never go smaller than 2cm x 2cm. If the scanning distance is large (like a billboard), the QR code needs to be significantly larger.</p>
              <h2>3. Quiet Zone</h2>
              <p>Leave enough "quiet zone" (white space) around the code. This helps the scanner identify where the data starts and ends.</p>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
