import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/about-us";

export const metadata: Metadata = {
  title: "About Us — QR Forge",
  description: "Learn about the mission of QR Forge. We build simple, high-quality, privacy-first QR code tools for professionals and businesses.",
  alternates: { canonical: slug },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="About QR Forge"
          subtitle="Building the fastest, most reliable QR tools on the web."
          content={
            <div className="editorial-content">
              <h2>Our Mission</h2>
              <p>QR Forge was created with a single purpose: to provide a friction-free, high-quality QR code generator that respects user privacy. We believe that basic utilities on the web shouldn't be hidden behind paywalls or require account sign-ups.</p>
              
              <h2>Why We Built This</h2>
              <p>We noticed a frustrating trend in the industry. Most QR code generators are bloated with ads, require registration, or force users to use dynamic tracking links that eventually expire and break. We built QR Forge to be the exact opposite.</p>
              <ul>
                <li><strong>No Accounts:</strong> You don't need to sign up to use our platform.</li>
                <li><strong>No Expiration:</strong> The static QR codes you generate here will work forever.</li>
                <li><strong>Privacy First:</strong> We do not track who scans your static QR codes.</li>
              </ul>
              
              <h2>Our Commitment to Quality</h2>
              <p>Whether you're printing a massive billboard or designing a business card, our generator outputs crisp, vector-based SVG codes and high-resolution PNGs to ensure your prints look professional every time.</p>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
