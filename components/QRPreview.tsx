"use client";

import { useRef, useState } from "react";
import { Download, Copy, Check, Loader2 } from "lucide-react";
import { useQRStore } from "@/lib/store";
import QRCode from "qrcode";

export function QRPreview() {
  const { qrDataUrl, isGenerating, buildQRContent, settings, addToHistory } = useQRStore();
  const [copied, setCopied] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const downloadPNG = () => {
    if (!qrDataUrl) return;
    addToHistory(qrDataUrl);
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "qr-code.png";
    a.click();
  };

  const downloadSVG = async () => {
    const content = buildQRContent();
    if (!content) return;
    try {
      const svgStr = await QRCode.toString(content, {
        type: "svg",
        width: settings.size,
        margin: settings.margin,
        color: { dark: settings.fgColor, light: settings.bgColor },
        errorCorrectionLevel: settings.errorCorrection,
      });
      const blob = new Blob([svgStr], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qr-code.svg";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("SVG export error:", err);
    }
  };

  const copyContent = async () => {
    const content = buildQRContent();
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="preview-card">
      <div className="qr-canvas-area">
        {isGenerating ? (
          <div className="qr-skeleton">
            <Loader2 size={28} className="spin" />
            <span>Generating…</span>
          </div>
        ) : qrDataUrl ? (
          <div className="qr-fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={qrDataUrl}
              alt="Generated QR Code"
              className="qr-image"
              width={settings.size}
              height={settings.size}
            />
          </div>
        ) : (
          <div className="qr-placeholder">
            <div className="qr-placeholder-grid">
              {Array.from({ length: 49 }).map((_, i) => (
                <div
                  key={i}
                  className="qr-dot"
                  style={{ opacity: Math.random() > 0.5 ? 0.12 : 0.04 }}
                />
              ))}
            </div>
            <p className="qr-placeholder-text">Start typing to generate</p>
          </div>
        )}
      </div>

      {qrDataUrl && (
        <div className="preview-actions">
          <button id="btn-download-png" onClick={downloadPNG} className="btn-primary">
            Download PNG
          </button>
          <button id="btn-download-svg" onClick={downloadSVG} className="btn-outline">
            Download SVG
          </button>
          <button id="btn-copy" onClick={copyContent} className="btn-secondary">
            {copied ? "Copied" : "Copy content"}
          </button>
        </div>
      )}
    </div>
  );
}
