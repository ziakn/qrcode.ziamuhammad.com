import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WhatsApp QR Code Generator — Start Chats Instantly",
  description: "Create a free QR code for WhatsApp. Let customers or friends start a chat with you instantly without saving your phone number. Fast and highly reliable.",
  alternates: { canonical: "/qr-code-for-whatsapp" },
};

export default function WhatsappPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to create a WhatsApp QR Code",
    "step": [
      { "@type": "HowToStep", "text": "Select the WhatsApp type in our generator." },
      { "@type": "HowToStep", "text": "Enter your phone number with country code." },
      { "@type": "HowToStep", "text": "Download and share your QR code." }
    ]
  };

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug="qr-code-for-whatsapp" 
          title="QR Code for WhatsApp"
          subtitle="The easiest way to start a conversation."
          schema={schema}
          content={
            <>
              <h2>Why use a WhatsApp QR Code?</h2>
              <p>Saving phone numbers is a friction point. With a WhatsApp QR code, users simply scan and hit send. It's perfect for customer support, real estate flyers, and event invitations.</p>
              <h2>Pro Tip</h2>
              <p>Include a pre-filled message so you know exactly why the user is contacting you (e.g., 'I am interested in the property listing').</p>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
