import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/templates/", "/blog/"],
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: [
      "https://qrcode.ziamuhammad.com/sitemap.xml",
      "https://qrcode.ziamuhammad.com/sitemap-index.xml",
    ],
    host: "qrcode.ziamuhammad.com",
  };
}
