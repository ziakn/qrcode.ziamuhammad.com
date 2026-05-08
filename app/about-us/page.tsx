import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

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
              <section className="article-section">
                <h2>Our Mission</h2>
                <p>QR Forge was created with a single purpose: to provide a friction-free, high-quality QR code generator that respects user privacy. We believe that basic utilities on the web shouldn't be hidden behind paywalls, require account sign-ups, or inject tracking pixels.</p>
                <p>Our name says it all: "Forge" implies craftsmanship and strength. Every QR code we generate is precise, scannable, and engineered to the highest standards—whether you're printing on a business card or a billboard.</p>
              </section>

              <section className="article-section">
                <h2>The Problem We Saw</h2>
                <p>The QR code generator market is saturated with tools that prioritize monetization over user experience. Common issues we observed:</p>
                <ul>
                  <li><strong>Mandatory accounts:</strong> "Sign up to download your QR code" — unacceptable for a free utility.</li>
                  <li><strong>Expiring dynamic links:</strong> Pay monthly or your printed codes become useless.</li>
                  <li><strong>Low-resolution watermarked outputs:</strong> Free versions give blurry, unusable images.</li>
                  <li><strong>Excessive tracking:</strong> Users' scan data harvested and sold.</li>
                  <li><strong>Bloated interfaces:</strong> Ads everywhere, slow performance, confusing UX.</li>
                </ul>
                <p>We built QR Forge to be the exact opposite: fast, private, and genuinely free.</p>
              </section>

              <section className="article-section">
                <h2>Our Technical Standards</h2>
                <ul>
                  <li><strong>ISO/IEC 18004 Compliant:</strong> All codes follow international QR code standards.</li>
                  <li><strong>High Error Correction Support:</strong> We support up to Level H (30% recovery) for logo embedding.</li>
                  <li><strong>Vector Output:</strong> SVG downloads scale infinitely without quality loss.</li>
                  <li><strong>Real-Time Generation:</strong> No server round-trips—instant preview as you type.</li>
                  <li><strong>No External Dependencies:</strong> The generator runs entirely in your browser.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Privacy By Design</h2>
                <p>We don't collect scan data. We don't store your generated codes on our servers. We don't require email addresses. What happens in your browser stays in your browser. Our analytics (via Google Analytics) are anonymized and only track aggregate page views—never personal information.</p>
              </section>

              <section className="article-section">
                <h2>Who We Serve</h2>
                <p>QR Forge is used by:</p>
                <ul>
                  <li><strong>Small Business Owners:</strong> Creating menus, WiFi signs, and business card QR codes.</li>
                  <li><strong>Marketers:</strong> Running multi-channel campaigns with UTM-tracked URLs.</li>
                  <li><strong>Event Planners:</strong> Generating RSVP, venue, and schedule QR codes.</li>
                  <li><strong>Developers:</strong> Needing reliable QR generation for client projects.</li>
                  <li><strong>Educators:</strong> Sharing resources with students via scannable links.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Our Commitment to Continuous Improvement</h2>
                <p>We're constantly enhancing QR Forge based on user feedback and emerging standards. Upcoming features include:</p>
                <ul>
                  <li>Additional QR code types (vCard 4.0, Bitcoin, event tickets).</li>
                  <li>Advanced design templates and brand kits.</li>
                  <li>Batch generation for enterprise users.</li>
                  <li>API access for developers.</li>
                </ul>
                <p>Have a suggestion? <Link href="/contact-us">We'd love to hear from you</Link>.</p>
              </section>

              <section className="article-section">
                <h2>Contact Us</h2>
                <p>Questions, feedback, or partnership inquiries are welcome. Reach us at <a href="mailto:hello@qrcode.ziamuhammad.com">hello@qrcode.ziamuhammad.com</a>. We respond within 24-48 business hours.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
