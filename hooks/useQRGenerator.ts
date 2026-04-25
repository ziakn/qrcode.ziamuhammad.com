"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { useQRStore } from "@/lib/store";

const DEBOUNCE_MS = 350;

export function useQRGenerator() {
  const store = useQRStore();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generate = async () => {
    const content = store.buildQRContent();
    if (!content) return;

    store.setIsGenerating(true);

    try {
      const dataUrl = await QRCode.toDataURL(content, {
        width: store.settings.size,
        margin: store.settings.margin,
        color: {
          dark: store.settings.fgColor,
          light: store.settings.bgColor,
        },
        errorCorrectionLevel: store.settings.errorCorrection,
      });
      store.setQRDataUrl(dataUrl);
    } catch (err) {
      console.error("QR generation error:", err);
    } finally {
      store.setIsGenerating(false);
    }
  };

  // Debounced auto-generate on data/settings change
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(generate, DEBOUNCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    store.data,
    store.settings.size,
    store.settings.fgColor,
    store.settings.bgColor,
    store.settings.errorCorrection,
    store.settings.margin,
  ]);

  return { generate };
}
