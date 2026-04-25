import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TypesPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          title="QR Code Types"
          subtitle="Explore the different types of data you can encode into a QR code."
          content={
            <div className="editorial-content">
              <h2>Popular QR Types</h2>
              <p>Our generator supports the most common standards used today.</p>
              <ul>
                <li><strong>URL:</strong> Direct users to any website or landing page.</li>
                <li><strong>WiFi:</strong> Share network credentials securely.</li>
                <li><strong>vCard:</strong> Digital business cards that save directly to contacts.</li>
                <li><strong>WhatsApp:</strong> Start a chat with a specific phone number.</li>
              </ul>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
