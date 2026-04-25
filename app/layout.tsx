import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QR Forge — Fast, Free QR Code Generator",
  description:
    "Generate high-quality QR codes instantly. Supports URLs, WiFi, vCard, email, and more. Download as PNG or SVG. No signup required.",
  keywords: ["QR code generator", "free QR code", "WiFi QR", "vCard QR", "URL QR code"],
  openGraph: {
    title: "QR Forge — Fast, Free QR Code Generator",
    description: "Generate high-quality QR codes instantly. No signup required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
