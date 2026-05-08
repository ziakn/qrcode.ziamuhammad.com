import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WiFi QR Code Generator — Connect Instantly",
  description: "Create a free WiFi QR code to let guests connect to your network instantly without typing the password. Supports WPA, WEP, and hidden networks securely.",
  alternates: { canonical: "/qr-code-for-wifi" },
};

export default function WifiPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug="qr-code-for-wifi"
          title="WiFi QR Code Generator — Connect Instantly"
          subtitle="Let guests connect to your network without typing passwords. Supports WPA, WEP, and hidden networks."
          category="Template"
          categoryHref="/templates"
          relatedLinks={[
            { title: "QR Code for Business Card", href: "/qr-code-for-business-card" },
            { title: "QR Code Best Practices", href: "/qr-code-best-practices" },
            { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
          ]}
          schema={{
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create a WiFi QR Code",
            description: "Generate a QR code that automatically connects devices to your WiFi network.",
            step: [
              { "@type": "HowToStep", text: "Enter your network name (SSID) and password." },
              { "@type": "HowToStep", text: "Select security type (WPA, WEP, or none)." },
              { "@type": "HowToStep", text: "Customize the QR code design if desired." },
              { "@type": "HowToStep", text: "Download and print on your signage or materials." }
            ]
          }}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>What Is a WiFi QR Code?</h2>
                <p>A WiFi QR code contains your network credentials (SSID, password, and encryption type). When scanned, it prompts the user's device to connect to the network automatically—no manual typing required. This is especially valuable in environments where guests need frequent access, like homes, offices, restaurants, and hotels.</p>
              </section>

              <section className="article-section">
                <h2>How WiFi QR Codes Work</h2>
                <p>The QR code stores a specially formatted string: <code>WIFI:T:WPA;S:YourNetworkName;P:YourPassword;;</code>. When your phone's camera scans this, it recognizes the WiFi protocol and offers to join the network. The format supports WPA, WEP, and open networks.</p>
              </section>

              <section className="article-section">
                <h2>Where to Use WiFi QR Codes</h2>
                <ul>
                  <li><strong>Homes:</strong> Place on the fridge or near the router for visitors.</li>
                  <li><strong>Airbnbs & Short-Term Rentals:</strong> Print on welcome cards.</li>
                  <li><strong>Coffee Shops & Restaurants:</strong> Display on tables, walls, or menus.</li>
                  <li><strong>Hotels & Airbnb:</strong> Include in room welcome packets.</li>
                  <li><strong>Offices:</strong> Provide to employees and guests for easy onboarding.</li>
                  <li><strong>Events & Conferences:</strong> Share on banners and badges for venue WiFi.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Security Best Practices</h2>
                <ul>
                  <li><strong>Use WPA3 or WPA2:</strong> Avoid WEP (older, vulnerable).</li>
                  <li><strong>Use a Guest Network:</strong> Keep your primary network private. Create a separate guest SSID for visitors.</li>
                  <li><strong>Change Passwords Regularly:</strong> Update the QR code when passwords rotate.</li>
                  <li><strong>Hidden Networks:</strong> You can generate QR codes for hidden SSIDs. Guests' devices will still connect if they scan the code.</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>Printing Tips</h2>
                <p>Print at least 2cm x 2cm (0.8 x 0.8 inches) for reliable scanning. Ensure high contrast—dark foreground on light background. Place the code at eye level with clear instructions like "Scan to join WiFi." Consider laminating to prevent glare and wear.</p>
              </section>

              <section className="article-section">
                <h2>Troubleshooting</h2>
                <ul>
                  <li><strong>Code won't scan:</strong> Ensure high contrast, no distortion, and adequate quiet zone (blank space around the code).</li>
                  <li><strong>Connects but no internet:</strong> Verify the WiFi network actually has internet access.</li>
                  <li><strong>Multiple networks:</strong> Use different QR codes for each SSID (e.g., 2.4GHz vs 5GHz bands).</li>
                </ul>
              </section>

              <div className="tip-box">
                <strong>Pro Tip:</strong> Pair your WiFi QR code with a short URL on the same printout that opens the router's admin page for guests who need advanced configuration (like static IP setup).
              </div>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
