import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QR Forge — Simple, High-Quality QR Codes",
  description:
    "Generate precise, high-quality QR codes instantly. Editorial design meets technical utility. No sign-up, no tracking.",
  keywords: ["QR code generator", "minimalist QR", "high quality QR", "WiFi QR"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
