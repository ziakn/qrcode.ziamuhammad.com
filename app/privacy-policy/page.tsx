import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy — QR Forge",
  description: "Learn how we protect your privacy. Our policy on data collection, QR generation, and user security.",
  keywords: ["privacy policy", "data protection", "qr code privacy", "user security", "legal"],
  alternates: { canonical: slug },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          slug={slug}
          title="Privacy Policy"
          subtitle="How we handle your data and ensure your privacy."
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Our Privacy Philosophy</h2>
                <p>At QR Forge, we believe privacy is a fundamental right. Our tool is designed to be as non-intrusive as possible, collecting only what is strictly necessary to generate your QR codes.</p>
              </section>

              <section className="article-section">
                <h2>Information We Collect</h2>
                <p>We do not require user accounts. The data you enter into the generator (URLs, text, WiFi credentials) is processed only to create the QR image and is not stored permanently on our servers beyond the session duration.</p>
              </section>

              <section className="article-section">
                <h2>Usage of Generated Content</h2>
                <p>The QR codes you generate belong entirely to you. We do not track the scans of your codes nor do we place any middleman redirects between your code and its destination.</p>
              </section>

              <section className="article-section">
                <h2>Security</h2>
                <p>All data transmitted to our servers for processing is encrypted via SSL (Secure Sockets Layer) technology. We use industry-standard protocols to ensure your information remains secure during the generation process.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
