import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/event-rsvp";

export const metadata: Metadata = {
  title: "Event RSVP QR Code — Simplify Guest Registration",
  description: "Create a QR code for event RSVPs. Link to Google Forms, Eventbrite, or any registration page. Perfect for weddings, conferences, and corporate events.",
  alternates: { canonical: slug },
};

export default function EventRSVPPage() {
  const related = [
    { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
    { title: "QR Code Templates", href: "/templates" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create an Event RSVP QR Code",
    "description": "Generate a QR code that links to your event registration form.",
    "step": [
      { "@type": "HowToStep", "text": "Create your event registration form (Google Forms, Eventbrite, etc.)." },
      { "@type": "HowToStep", "text": "Copy the registration URL." },
      { "@type": "HowToStep", "text": "Paste the URL into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize and download for invitations and signage." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Event RSVP QR Code"
          subtitle="Streamline guest registration for any event."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a QR Code for Event RSVPs?</h2>
                <p>Traditional RSVP methods require guests to manually type URLs, leading to typos and abandoned responses. A QR code eliminates friction and boosts response rates by 30-50%.</p>
              </section>

              <section className="article-section">
                <h2>Use Cases</h2>
                <ul>
                  <li><strong>Weddings:</strong> Include on save-the-dates and invitations.</li>
                  <li><strong>Corporate Events:</strong> Add to event programs and signage.</li>
                  <li><strong>Conferences:</strong> Place on registration desks and screens.</li>
                  <li><strong>Parties:</strong> Share on social media invites and physical cards.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Setup Tips</h2>
                <p>Use a URL shortener or dynamic QR service if you need to update the registration link after invitations have been sent. This avoids reprinting all materials if details change.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
