"use client";

import { useEffect, useRef } from "react";
import { useQRStore } from "@/lib/store";
import QRCodeStyling from "qr-code-styling";

export function useQRGenerator() {
  const { data, settings, setQRDataUrl, setIsGenerating, buildQRContent } = useQRStore();
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    // Initialize the instance only once
    if (typeof window !== "undefined" && !qrCodeInstance.current) {
      qrCodeInstance.current = new QRCodeStyling({
        width: settings.size,
        height: settings.size,
        type: "canvas",
        data: "",
        margin: settings.margin * 10, // Approximate conversion
        qrOptions: {
          errorCorrectionLevel: settings.errorCorrection,
        },
        dotsOptions: {
          color: settings.fgColor,
          type: settings.dotsType,
        },
        backgroundOptions: {
          color: settings.bgColor,
        },
        cornersSquareOptions: {
          type: settings.cornersSquareType,
          color: settings.fgColor,
        },
        cornersDotOptions: {
          type: settings.cornersDotType,
          color: settings.fgColor,
        },
      });
    }

    const content = buildQRContent();
    if (!content) {
      setQRDataUrl(null);
      return;
    }

    setIsGenerating(true);

    const timer = setTimeout(async () => {
      if (qrCodeInstance.current) {
        // Update data and styling
        qrCodeInstance.current.update({
          data: content,
          width: settings.size,
          height: settings.size,
          margin: settings.margin * 4,
          dotsOptions: {
            color: settings.fgColor,
            type: settings.dotsType,
          },
          backgroundOptions: {
            color: settings.bgColor,
          },
          cornersSquareOptions: {
            type: settings.cornersSquareType,
            color: settings.fgColor,
          },
          cornersDotOptions: {
            type: settings.cornersDotType,
            color: settings.fgColor,
          },
          image: data.logo || undefined,
          imageOptions: {
            hideBackgroundDots: true,
            imageSize: 0.3,
            margin: 0,
          }
        });

        // Get Data URL
        const blob = await qrCodeInstance.current.getRawData("png");
        if (blob) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setQRDataUrl(reader.result as string);
            setIsGenerating(false);
          };
          reader.readAsDataURL(blob);
        }
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [data, settings, buildQRContent, setQRDataUrl, setIsGenerating]);
}
