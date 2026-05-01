"use client";

import { TypeSelector } from "@/components/TypeSelector";
import { QRForm } from "@/components/QRForm";
import { QRPreview } from "@/components/QRPreview";
import { QRSettings } from "@/components/QRSettings";
import { useQRStore } from "@/lib/store";
import { useQRGenerator } from "@/hooks/useQRGenerator";

export function QRStudio() {
  const { data } = useQRStore();
  useQRGenerator();

  return (
    <div className="workspace" data-platform={data.type}>
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
  );
}
