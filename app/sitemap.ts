import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qrcode.ziamuhammad.com";

  const routes = [
    "",
    "/how-to-create-a-qr-code",
    "/how-to-scan-qr-code",
    "/privacy-policy",
    "/qr-code-best-practices",
    "/qr-code-for-business-card",
    "/qr-code-for-restaurant-menu",
    "/qr-code-for-whatsapp",
    "/qr-code-for-wifi",
    "/qr-code-size-guide",
    "/qr-code-types",
    "/templates",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
