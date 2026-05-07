import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/qr-code-size-guide";

export const metadata: Metadata = {
  title: "QR Code Size Guide — Dimensions for Print & Digital",
  description: "Learn the technical standards for QR code sizing. A complete guide on minimum dimensions, optimal scanning distance, and high-quality print resolutions.",
  alternates: { canonical: "/qr-code-size-guide" },
};

export default function SizeGuide() {
  const related = [
    { title: "How to Create a QR Code", href: "/how-to-create-a-qr-code" },
    { title: "Supported QR Formats", href: "/qr-code-types" },
    { title: "Design Templates", href: "/templates" },
  ];

  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="The QR Code Size Guide"
          subtitle="A technical resource for designers, marketers, and business owners."
          category="Guide"
          categoryHref="/qr-code-types"
          relatedLinks={related}
          content={
            <div className="editorial-content">
              <section className="article-section">
                <h2>The 10:1 Sizing Principle</h2>
                <p>The most critical factor in QR code scannability is the relationship between the code's physical size and the distance of the person scanning it. As a general rule of thumb, maintain a 10:1 ratio.</p>
                <div className="calculation-box">
                  <strong>Scanning Distance ÷ 10 = Minimum QR Code Size</strong>
                </div>
                <p>Following this ensures that the camera's sensor can resolve the individual modules (the dots) of the QR code with enough clarity to decode the data.</p>
              </section>

              <section className="article-section">
                <h2>Industry Standard Dimensions</h2>
                <p>While the 10:1 rule is a great starting point, specific mediums have established standards that guarantee a high success rate.</p>
                
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Medium</th>
                      <th>Typical Distance</th>
                      <th>Minimum Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Business Cards</td>
                      <td>4 – 6"</td>
                      <td>0.8 x 0.8" (2 x 2 cm)</td>
                    </tr>
                    <tr>
                      <td>Product Packaging</td>
                      <td>12"</td>
                      <td>1.0 x 1.0" (2.5 x 2.5 cm)</td>
                    </tr>
                    <tr>
                      <td>Magazines / Flyers</td>
                      <td>18"</td>
                      <td>1.25 x 1.25" (3 x 3 cm)</td>
                    </tr>
                    <tr>
                      <td>Wall Posters</td>
                      <td>3 – 5 ft</td>
                      <td>3.0 x 3.0" (7.5 x 7.5 cm)</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section className="article-section">
                <h2>Resolution & Contrast</h2>
                <p>Size isn't the only factor. For print, always use vector formats (like <strong>SVG</strong>) or high-resolution bitmaps (at least 300 DPI). Low-resolution images will blur at small sizes, making them impossible to scan.</p>
                <h3>Contrast Requirements</h3>
                <p>Always maintain a high contrast ratio between the foreground (dots) and the background. Dark colors on light backgrounds are the most reliable. If you use a custom brand color, ensure it's dark enough to be distinguished from the white space.</p>
              </section>

              <div className="tip-box">
                <strong>Crucial Note:</strong> Long URLs create denser QR codes with smaller dots. If your URL is long, you must increase the physical size of the QR code to compensate for the higher data density.
              </div>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
