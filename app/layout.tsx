import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qrcode.ziamuhammad.com"),
  title: "QR Forge — Simple, High-Quality QR Codes",
  description:
    "Generate precise, high-quality QR codes instantly. Editorial design meets technical utility. No sign-up, no tracking.",
  keywords: ["QR code generator", "minimalist QR", "high quality QR", "WiFi QR", "custom QR code", "free QR code maker"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QR Forge — High-Fidelity QR Code Generator",
    description: "Generate precise, high-quality QR codes instantly. No sign-up required.",
    url: "https://qrcode.ziamuhammad.com",
    siteName: "QR Forge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Forge — High-Fidelity QR Code Generator",
    description: "Generate precise, high-quality QR codes instantly. No sign-up required.",
    creator: "@QRForge",
  },
  other: {
    "google-adsense-account": "ca-pub-9790243158087298",
  },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C0GFBYL9TN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C0GFBYL9TN');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9790243158087298"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
