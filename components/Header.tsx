"use client";

import { Moon, Sun, QrCode, RotateCcw } from "lucide-react";
import { useQRStore } from "@/lib/store";

export function Header() {
  const { isDark, toggleDark, reset } = useQRStore();

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <QrCode size={20} />
          <span className="logo-text">QR Forge</span>
        </div>
        <nav className="header-nav">
          <a href="/" className="nav-link">Generator</a>
          <a href="/qr-code-types" className="nav-link">Types</a>
          <a href="/how-to-create-a-qr-code" className="nav-link">Guide</a>
          
          <div className="nav-divider"></div>

          <button
            id="btn-theme-toggle"
            onClick={toggleDark}
            className="nav-btn icon-only"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
