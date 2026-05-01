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
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/about-us" className="nav-link">About</Link>
          <Link href="/contact-us" className="nav-link">Contact</Link>
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
            <Link href="/blog" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/about-us" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact-us" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
