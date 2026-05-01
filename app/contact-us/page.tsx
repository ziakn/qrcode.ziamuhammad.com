import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/contact-us";

export const metadata: Metadata = {
  title: "Contact Us — QR Forge Support",
  description: "Need help or have questions about QR Forge? Contact our support team for assistance with high-quality QR code generation.",
  alternates: { canonical: slug },
};

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Contact Us"
          subtitle="We're here to help."
          content={
            <div className="editorial-content">
              <h2>Get in Touch</h2>
              <p>If you have any questions, suggestions, or run into technical issues while using QR Forge, we want to hear from you. We strive to provide the best possible experience for our users.</p>
              
              <div className="contact-box" style={{ padding: "2rem", background: "var(--background-secondary)", borderRadius: "var(--radius-lg)", marginTop: "2rem" }}>
                <h3 style={{ marginTop: 0 }}>Support Email</h3>
                <p>For all inquiries, please email us directly at:</p>
                <p><a href="mailto:hello@qrcode.ziamuhammad.com" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>hello@qrcode.ziamuhammad.com</a></p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>We typically respond within 24-48 business hours.</p>
              </div>

              <h2 style={{ marginTop: "3rem" }}>Feature Requests</h2>
              <p>Are we missing a specific QR code type or customization feature you need? Let us know! We are constantly updating QR Forge based on user feedback to make it the most comprehensive tool available.</p>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
