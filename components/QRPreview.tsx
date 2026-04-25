"use client";

import { useQRStore } from "@/lib/store";
import { useQRGenerator } from "@/hooks/useQRGenerator";
import { useRef, useState, useEffect } from "react";

export function QRPreview() {
  const { qrDataUrl, isGenerating, settings, buildQRContent } = useQRStore();
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useQRGenerator();

  useEffect(() => {
    setMounted(true);
  }, []);

  const downloadPNG = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrDataUrl;
    link.click();
  };

  const downloadSVG = async () => {
    // We recreate it for SVG export specifically
    if (typeof window === "undefined") return;
    const QRCodeStyling = (await import("qr-code-styling")).default;
    const content = buildQRContent();
    const qr = new QRCodeStyling({
      width: 1000,
      height: 1000,
      data: content,
      dotsOptions: { color: settings.fgColor, type: settings.dotsType },
      backgroundOptions: { color: settings.bgColor },
      cornersSquareOptions: { type: settings.cornersSquareType, color: settings.fgColor },
      cornersDotOptions: { type: settings.cornersDotType, color: settings.fgColor },
    });
    qr.download({ name: "qrcode", extension: "svg" });
  };

  const copyContent = () => {
    const content = buildQRContent();
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="preview-card">
      <div className="qr-canvas-area">
        {isGenerating ? (
          <div className="qr-skeleton shimmer" />
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
              {mounted && Array.from({ length: 49 }).map((_, i) => (
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
