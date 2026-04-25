"use client";

import { Header } from "@/components/Header";
import { TypeSelector } from "@/components/TypeSelector";
import { QRForm } from "@/components/QRForm";
import { QRPreview } from "@/components/QRPreview";
import { QRSettings } from "@/components/QRSettings";
import { QRHistory } from "@/components/QRHistory";
import { useQRGenerator } from "@/hooks/useQRGenerator";

export default function HomePage() {
  // Mounts the debounced auto-generator
  useQRGenerator();

  return (
    <>
      <Header />
      <main className="main">
        <div className="hero">
          <h1 className="hero-title">Generate QR codes instantly</h1>
          <p className="hero-sub">
            URL · WiFi · vCard · Email · Phone · Free &amp; no sign-up
          </p>
        </div>

        <div className="workspace">
          {/* Left: Input panel */}
          <section className="input-panel" aria-label="QR code inputs">
            <TypeSelector />
            <QRForm />
            <QRSettings />
          </section>

          {/* Right: Preview panel */}
          <section className="preview-panel" aria-label="QR code preview">
            <QRPreview />
          </section>
        </div>

        <QRHistory />
      </main>

      <footer className="site-footer">
        <p>
          Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>{" "}
          · No tracking · No account required
        </p>
      </footer>
    </>
  );
}
