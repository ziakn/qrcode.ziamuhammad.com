import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist. Return to QR Forge's homepage or browse our QR code templates and guides.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="main">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div style={{
            fontSize: 'clamp(80px, 15vw, 180px)',
            fontWeight: 800,
            color: 'var(--accent)',
            lineHeight: 1,
            marginBottom: '1rem',
            fontFamily: 'var(--font-serif)'
          }}>
            404
          </div>

          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            marginBottom: '1rem',
            fontFamily: 'var(--font-serif)'
          }}>
            Page Not Found
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            The QR code for this page appears to be corrupted. Either it leads to a page that no longer exists, or someone entered an incorrect URL.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Home size={18} />
              Back to Homepage
            </Link>
            <Link href="/templates" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={18} />
              Browse Templates
            </Link>
          </div>

          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            maxWidth: '600px'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Popular destinations</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '0.75rem',
              textAlign: 'left'
            }}>
              <Link href="/" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Home</Link>
              <Link href="/templates" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Templates</Link>
              <Link href="/blog" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Blog</Link>
              <Link href="/how-to-create-a-qr-code" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>How It Works</Link>
              <Link href="/contact-us" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Contact Us</Link>
              <Link href="/about-us" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>About</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
