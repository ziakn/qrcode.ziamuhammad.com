'use client';

import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><Link href="/">QR Generator</Link></li>
              <li><Link href="/qr-code-types">QR Code Types</Link></li>
              <li><Link href="/templates">QR Templates</Link></li>
              <li><Link href="/sitemap.xml">Sitemap</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Guides</h4>
            <ul className="footer-links">
              <li><Link href="/how-to-create-a-qr-code">How to Create</Link></li>
              <li><Link href="/how-to-scan-qr-code">How to Scan</Link></li>
              <li><Link href="/qr-code-size-guide">Size Guide</Link></li>
              <li><Link href="/qr-code-best-practices">Best Practices</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} QR Forge. Built for speed and privacy.</p>
        </div>
      </div>
    </footer>
  );
}
