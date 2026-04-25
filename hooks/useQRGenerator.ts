"use client";

import { useEffect, useRef } from "react";
import { useQRStore } from "@/lib/store";
import QRCodeStyling from "qr-code-styling";

const BRAND_COLORS: Record<string, string> = {
  Instagram: "#E4405F",
  Twitter: "#1DA1F2",
  LinkedIn: "#0A66C2",
  Facebook: "#1877F2",
};

export function useQRGenerator() {
  const { data, settings, setQRDataUrl, setIsGenerating, buildQRContent } = useQRStore();
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !qrCodeInstance.current) {
      qrCodeInstance.current = new QRCodeStyling({
        width: settings.size,
        height: settings.size,
        type: "canvas",
        data: "",
        margin: settings.margin * 4,
        qrOptions: {
          errorCorrectionLevel: settings.errorCorrection,
        },
        backgroundOptions: {
          color: settings.bgColor,
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
        // Handle Brand Themes
        let fgColor = settings.fgColor;
        let dotsType = settings.dotsType;
        let cornerType = settings.cornersSquareType;

        if (data.type === "Social" && data.socialPlatform) {
          fgColor = BRAND_COLORS[data.socialPlatform] || fgColor;
          // Apply brand-specific "vibe"
          if (data.socialPlatform === "Instagram") dotsType = "dots";
          if (data.socialPlatform === "LinkedIn") cornerType = "extra-rounded";
        }

        qrCodeInstance.current.update({
          data: content,
          width: settings.size,
          height: settings.size,
          margin: settings.margin * 4,
          dotsOptions: {
            color: fgColor,
            type: dotsType,
          },
          backgroundOptions: {
            color: settings.bgColor,
          },
          cornersSquareOptions: {
            type: cornerType,
            color: fgColor,
          },
          cornersDotOptions: {
            type: settings.cornersDotType,
            color: fgColor,
          },
          image: data.logo || undefined,
          imageOptions: {
            hideBackgroundDots: true,
            imageSize: 0.3,
            margin: 0,
          }
        });

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
