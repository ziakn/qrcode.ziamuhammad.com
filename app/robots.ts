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
    ],
    host: "qrcode.ziamuhammad.com",
  };
}
