import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/linkedin-profile";

export const metadata: Metadata = {
  title: "LinkedIn Profile QR Code — Professional Networking Made Easy",
  description: "Generate a LinkedIn profile QR code to grow your professional network. Perfect for business cards, resumes, and networking events.",
  alternates: { canonical: slug },
};

export default function LinkedInProfilePage() {
  const related = [
    { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
    { title: "Social Media QR Codes", href: "/templates" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a LinkedIn Profile QR Code",
    "description": "Generate a QR code that links directly to your LinkedIn profile.",
    "step": [
      { "@type": "HowToStep", "text": "Copy your LinkedIn profile URL from your browser." },
      { "@type": "HowToStep", "text": "Paste it into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize to match your personal brand." },
      { "@type": "HowToStep", "text": "Download and add to your resume or business card." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="LinkedIn Profile QR Code"
          subtitle="Grow your professional network with every handshake."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a LinkedIn QR Code?</h2>
                <p>Networking just got smarter. Instead of exchanging business cards that get lost, give people a scannable link to your LinkedIn profile. This ensures they can connect with you immediately and your profile information stays up-to-date.</p>
              </section>

              <section className="article-section">
                <h2>Ideal Use Cases</h2>
                <ul>
                  <li><strong>Business Cards:</strong> Replace or supplement your traditional contact info.</li>
                  <li><strong>Resumes:</strong> Add directly to your CV for quick recruiter access.</li>
                  <li><strong>Conferences:</strong> Network efficiently without manual data entry.</li>
                  <li><strong>Office Signage:</strong> Place on your desk or office door.</li>
                  <li><strong>Email Signature:</strong> Embed as an image for quick scanning.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Best Practices</h2>
                <p>Make sure your LinkedIn profile is complete and professional before distributing the QR code. Use a high-quality professional headshot and detailed work experience to make a strong first impression.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
