import Script from "next/script";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qrcode.ziamuhammad.com"),
  title: "QR Forge — Simple, High-Quality QR Codes",
  description:
    "Generate precise, high-quality QR codes instantly. Editorial design meets technical utility. No sign-up, no tracking.",
  keywords: ["QR code generator", "minimalist QR", "high quality QR", "WiFi QR", "custom QR code", "free QR code maker"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "QR Forge — High-Fidelity QR Code Generator",
    description: "Generate precise, high-quality QR codes instantly. No sign-up required.",
    url: "https://qrcode.ziamuhammad.com",
    siteName: "QR Forge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "QR Forge - Free QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Forge — High-Fidelity QR Code Generator",
    description: "Generate precise, high-quality QR codes instantly. No sign-up required.",
    images: ["/og-image"],
    creator: "@QRForge",
  },
  verification: {
    google: "google-site-verification-placeholder", // Replace with actual code from Google Search Console
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QR Forge",
    "url": "https://qrcode.ziamuhammad.com",
    "logo": "https://qrcode.ziamuhammad.com/icon.svg",
    "sameAs": [
      "https://twitter.com/QRForge"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "QR Forge",
    "url": "https://qrcode.ziamuhammad.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://qrcode.ziamuhammad.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "QR Forge",
    "description": "A free, high-quality QR code generator with no sign-up required.",
    "brand": {
      "@type": "Brand",
      "name": "QR Forge"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://qrcode.ziamuhammad.com"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, productSchema]) }}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-C0GFBYL9TN`}
        />
        <Script id="google-analytics-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0GFBYL9TN');
          `}
        </Script>
        {/* Google AdSense - lazy loaded to prevent CLS */}
        <Script
          id="adsense-lazy"
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9790243158087298"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
