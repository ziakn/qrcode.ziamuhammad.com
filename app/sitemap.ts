import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qrcode.ziamuhammad.com";

  const staticRoutes = [
    "",
    "/about-us",
    "/blog",
    "/contact-us",
    "/cookie-policy",
    "/disclaimer",
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

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as any,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as any,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
