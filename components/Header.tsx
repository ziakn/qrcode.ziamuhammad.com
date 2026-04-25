"use client";

import Link from "next/link";
import { QrCode } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <QrCode size={24} className="logo-icon" />
          <span className="logo-text">QR Forge</span>
        </Link>
        
        <nav className="header-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/templates" className="nav-link">Templates</Link>
          <Link href="/qr-code-types" className="nav-link">Types</Link>
          <Link href="/how-to-scan-qr-code" className="nav-link">How to Scan</Link>
          <Link href="/qr-code-size-guide" className="nav-link">Size Guide</Link>
        </nav>
      </div>
    </header>
  );
}
