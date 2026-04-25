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
          <button
            id="btn-reset"
            onClick={reset}
            className="nav-btn"
            title="Reset everything"
          >
            <RotateCcw size={15} />
            Reset
          </button>
          <button
            id="btn-theme-toggle"
            onClick={toggleDark}
            className="nav-btn icon-only"
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
