import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const slug = "/zoom-meeting";

export const metadata: Metadata = {
  title: "Zoom Meeting QR Code — Join Meetings Instantly",
  description: "Generate a Zoom meeting QR code for one-tap meeting joins. Perfect for remote teams, webinars, and virtual events on any device.",
  alternates: { canonical: slug },
};

export default function ZoomMeetingPage() {
  const related = [
    { title: "Event RSVP QR Code", href: "/event-rsvp" },
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
    { title: "QR Code Templates", href: "/templates" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Zoom Meeting QR Code",
    "description": "Generate a QR code that lets participants join a Zoom meeting instantly.",
    "step": [
      { "@type": "HowToStep", "text": "Schedule your Zoom meeting and copy the join URL." },
      { "@type": "HowToStep", "text": "Paste the URL into the QR code generator." },
      { "@type": "HowToStep", "text": "Customize if desired." },
      { "@type": "HowToStep", "text": "Share the QR code with participants." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Zoom Meeting QR Code"
          subtitle="One-tap meeting access for everyone."
          category="Template"
          categoryHref="/templates"
          relatedLinks={related}
          schema={schema}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>Why Use a Zoom QR Code?</h2>
                <p>Sharing meeting URLs manually often leads to typos and missed connections. A QR code ensures participants can join your Zoom meeting with a single scan—no typing, no errors, no delays.</p>
              </section>

              <section className="article-section">
                <h2>Use Cases</h2>
                <ul>
                  <li><strong>Webinars:</strong> Include in promotional emails and slide decks.</li>
                  <li><strong>Corporate Meetings:</strong> Add to calendar invites and internal comms.</li>
                  <li><strong>Online Classes:</strong> Share with students at the start of each session.</li>
                  <li><strong>Virtual Events:</strong> Display on event registration pages.</li>
                  <li><strong>Support Sessions:</strong> Provide to customers for easy access.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Implementation Tips</h2>
                <p>Test the QR code on both mobile devices and desktops. On mobile, scanning should open the Zoom app directly. On desktop, it should prompt to launch Zoom or open in the browser.</p>
              </section>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
