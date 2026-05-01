import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const slug = "/cookie-policy";

export const metadata: Metadata = {
  title: "Cookie Policy — QR Forge",
  description: "Learn how QR Forge uses cookies and tracking technologies to improve your experience.",
  alternates: { canonical: slug },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate
          slug={slug}
          title="Cookie Policy"
          subtitle="How we use cookies to improve your experience."
          content={
            <div className="editorial-content">
              <p><em>Last Updated: May 2026</em></p>
              
              <h2>What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>
              
              <h2>How We Use Cookies</h2>
              <p>QR Forge uses cookies primarily for analytics and to remember your local preferences. Because our tool operates primarily in your browser, we use local storage (a technology similar to cookies) to remember your recent QR code configurations so you don't lose your work if you refresh the page.</p>
              
              <h3>Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies/Storage:</strong> Used to store your active QR code data locally in your browser. This ensures the app functions correctly.</li>
                <li><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our website. This helps us improve our user interface and add new features. These cookies collect information anonymously.</li>
                <li><strong>Third-Party Advertising:</strong> We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use cookies to serve ads based on your prior visits to our website or other websites.</li>
              </ul>
              
              <h2>Managing Cookies</h2>
              <p>You can set your browser not to accept cookies. However, in a few cases, some of our website features may not function as a result. For more information on how to manage and delete cookies, visit aboutcookies.org.</p>
              
              <h2>Changes to This Policy</h2>
              <p>We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed.</p>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
