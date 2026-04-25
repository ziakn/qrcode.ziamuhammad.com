import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/terms";

export const metadata: Metadata = {
  title: "Terms of Service — QR Forge",
  description: "Read our terms of service. Guidelines for using our QR code generation tool and legal agreements.",
  keywords: ["terms of service", "tos", "user agreement", "usage guidelines", "legal"],
  alternates: { canonical: slug },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          slug={slug}
          title="Terms of Service"
          subtitle="The legal framework for using our platform."
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Acceptance of Terms</h2>
                <p>By accessing and using QR Forge, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please refrain from using our service.</p>
              </section>

              <section className="article-section">
                <h2>Service Usage</h2>
                <p>QR Forge provides a tool for generating QR codes. You are solely responsible for the content you encode and the legality of the destinations linked via our platform.</p>
              </section>

              <section className="article-section">
                <h2>Intellectual Property</h2>
                <p>The designs, software, and technology behind QR Forge are protected by intellectual property laws. However, the generated QR codes themselves are free for you to use for both personal and commercial purposes.</p>
              </section>

              <section className="article-section">
                <h2>Disclaimer of Warranties</h2>
                <p>The service is provided "as is" without warranty of any kind. While we strive for 100% uptime and scannability, we cannot guarantee that generated codes will work on all scanners or in all conditions.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
