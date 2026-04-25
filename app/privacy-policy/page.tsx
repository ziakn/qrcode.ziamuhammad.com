import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="editorial-content">
          <h1>Privacy Policy</h1>
          <p className="hero-sub">Last updated: April 2026</p>
          <div className="policy-body">
            <h2>1. No Tracking</h2>
            <p>We do not use cookies or tracking scripts on our QR generator. Your privacy is paramount.</p>
            <h2>2. Local Generation</h2>
            <p>QR codes are generated directly in your browser. We do not store your URL, passwords, or personal data on our servers.</p>
            <h2>3. Local Storage</h2>
            <p>If you use the 'History' feature, your data is stored locally on your device's browser and is never uploaded to us.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
