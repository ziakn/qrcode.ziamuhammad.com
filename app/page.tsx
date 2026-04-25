"use client";

import { Header } from "@/components/Header";
import { QRStudio } from "@/components/QRStudio";
import { QRHistory } from "@/components/QRHistory";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="hero">
          <h1 className="hero-title">Create a QR code</h1>
        </div>
        
        <QRStudio />
        <QRHistory />
      </main>

      <Footer />
    </>
  );
}
