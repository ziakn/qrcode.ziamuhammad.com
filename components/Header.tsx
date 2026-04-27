"use client";

import Link from "next/link";
import { QrCode, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <QrCode size={24} className="logo-icon" />
          <span className="logo-text">QR Forge</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="header-nav desktop-only">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/templates" className="nav-link">Templates</Link>
          <Link href="/qr-code-types" className="nav-link">Types</Link>
          <Link href="/how-to-scan-qr-code" className="nav-link">How to Scan</Link>
          <Link href="/qr-code-size-guide" className="nav-link">Size Guide</Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? "is-open" : ""}`}>
          <nav className="mobile-nav-links">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/templates" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Templates</Link>
            <Link href="/qr-code-types" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Types</Link>
            <Link href="/how-to-scan-qr-code" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>How to Scan</Link>
            <Link href="/qr-code-size-guide" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Size Guide</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
