import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "QR Code Best Practices — Design & Scanning Guide",
  description: "Learn how to create high-fidelity QR codes that work perfectly every time. Discover essential tips on ideal sizing, color contrast, and proper placement.",
  alternates: { canonical: "/qr-code-best-practices" },
};

export default function BestPracticesPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          slug="qr-code-best-practices"
          title="QR Code Best Practices"
          subtitle="Design reliable, scannable codes every time."
          category="Guide"
          categoryHref="/qr-code-types"
          relatedLinks={[
            { title: "QR Code Size Guide", href: "/qr-code-size-guide" },
            { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
            { title: "QR Code Types", href: "/qr-code-types" },
          ]}
          schema={{
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "QR Code Best Practices Guide",
            description: "Learn how to create high-fidelity QR codes that scan reliably every time.",
            step: [
              { "@type": "HowToStep", text: "Maintain high contrast between foreground and background." },
              { "@type": "HowToStep", text: "Ensure minimum size of 2cm x 2cm for print." },
              { "@type": "HowToStep", text: "Leave adequate quiet zone (blank space) around the code." },
              { "@type": "HowToStep", text: "Test on multiple devices before printing." }
            ]
          }}
          content={
            <>
              <section className="article-section">
                <h2>Introduction: Why Best Practices Matter</h2>
                <p>A poorly designed QR code can fail to scan, damage your brand's reputation, and waste marketing spend. Following established best practices ensures your codes work reliably across all devices and conditions—from smartphone cameras to dedicated scanners.</p>
              </section>

              <section className="article-section">
                <h2>1. Maintain High Contrast</h2>
                <p>QR codes rely on contrast between dark modules (foreground) and light background. The standard is black on white, but you can use other high-contrast combinations—dark blue on white, dark green on yellow—as long as the scanner can distinguish the pattern.</p>
                <p><strong>Never invert:</strong> White modules on a black background may not be readable by older scanners and should be avoided for public-facing codes.</p>
              </section>

              <section className="article-section">
                <h2>2. Respect the Quiet Zone</h2>
                <p>The "quiet zone" is the mandatory blank space surrounding the QR code. According to ISO/IEC 18004, this margin should be at least 4 modules wide (one module = one dot of the QR pattern).</p>
                <p>Why it matters: The quiet zone helps scanners locate the finder patterns (the large squares in corners). Text, graphics, or borders intruding into this space can prevent detection.</p>
              </section>

              <section className="article-section">
                <h2>3. Size for Your Medium</h2>
                <p>The minimum recommended size varies by context:</p>
                <ul>
                  <li><strong>Print (business cards, flyers):</strong> 2cm x 2cm (0.8 x 0.8 inches)</li>
                  <li><strong>Posters & banners:</strong> Scale proportionally to viewing distance. A rule of thumb: 1cm of QR code per 2.5 meters of viewing distance.</li>
                  <li><strong>Digital screens:</strong> Ensure the displayed size is at least 150x150 pixels for phone cameras to focus.</li>
                </ul>
                <p>Printing smaller than these thresholds will cause scan failures, especially on older devices.</p>
              </section>

              <section className="article-section">
                <h2>4. Error Correction Levels: L, M, Q, H</h2>
                <p>QR codes support four error correction levels that determine how much damage they can sustain before becoming unreadable:</p>
                <ul>
                  <li><strong>L (Low - ~7%):</strong> Least redundancy. Only for optimal conditions with pristine printing.</li>
                  <li><strong>M (Medium - ~15%):</strong> Default. Balanced density and reliability for most use cases.</li>
                  <li><strong>Q (Quartile - ~25%):</strong> Good for industrial or outdoor environments where damage is possible.</li>
                  <li><strong>H (High - ~30%):</strong> Maximum redundancy. Required if adding a logo or heavy customization.</li>
                </ul>
                <p>Note: Higher error correction means more dense pattern and potentially larger physical size needed.</p>
              </section>

              <section className="article-section">
                <h2>5. Color & Design Choices</h2>
                <p>While you can customize colors, avoid:</p>
                <ul>
                  <li>Low contrast combinations (light gray on white, yellow on white).</li>
                  <li>Gradients within modules—keep the foreground solid.</li>
                  <li>Highly reflective surfaces that cause glare.</li>
                  <li>Overly ornate patterns that distort the module shapes.</li>
                </ul>
                <p>Customization is great, but always test the final design on multiple devices before mass production.</p>
              </section>

              <section className="article-section">
                <h2>6. Always Test Before Printing</h2>
                <p>Never print thousands of flyers without testing. Scan your QR code on:</p>
                <ul>
                  <li>iPhone (native camera)</li>
                  <li>Android phones (various brands/models)</li>
                  <li>Third-party scanner apps (if your audience uses them)</li>
                </ul>
                <p>Test in the actual environment—if the code will be on a wall, test at that distance and lighting.</p>
              </section>

              <section className="article-section">
                <h2>7. Data Content Optimization</h2>
                <p>The more data you encode, the denser the QR pattern. To keep your code scannable:</p>
                <ul>
                  <li>Use URL shorteners for long links.</li>
                  <li>Avoid encoding large blocks of text unless necessary.</li>
                  <li>For vCards, include only essential fields (name, phone, email).</li>
                </ul>
              </section>

              <section className="article-section">
                <h2>8. Dynamic vs Static Considerations</h2>
                <p>Static QR codes (like QR Forge generates) are permanent and don't expire. However, if the URL they point to becomes inactive, the code is still "working"—it's just leading to a dead end. Always ensure the destination URL is stable for the lifetime of your printed material.</p>
              </section>

              <section className="article-section">
                <h2>9. Print Material Specifics</h2>
                <ul>
                  <li><strong>Paper quality:</strong> Avoid glossy paper that creates glare. Matte finishes scan better.</li>
                  <li><strong>Curved surfaces:</strong> QR codes on cylinders (cups, bottles) can distort. Use larger sizes and test thoroughly.</li>
                  <li><strong>Dark environments:</strong> If scanning in dim light, ensure sufficient contrast (avoid dark-on-dark).</li>
                </ul>
              </section>

              <div className="tip-box">
                <strong>Pro Tip:</strong> Before committing to a full print run, order a single test copy and scan it multiple times with different phones and lighting conditions. It's cheaper to catch issues early than to waste 10,000 flyers.
              </div>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
