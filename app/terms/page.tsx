import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="editorial-content">
          <h1>Terms of Service</h1>
          <p className="hero-sub">Simple, fair usage terms.</p>
          <div className="policy-body">
            <h2>1. Usage</h2>
            <p>You are free to use our generator for personal and commercial projects without any cost or attribution required.</p>
            <h2>2. Disclaimer</h2>
            <p>We provide this tool 'as is' without warranties. We are not responsible for how you use the generated QR codes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
