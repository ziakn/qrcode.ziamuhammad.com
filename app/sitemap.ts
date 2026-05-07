import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qrcode.ziamuhammad.com";
  const lastModified = new Date();

  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/contact-us", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/cookie-policy", priority: 0.6, changeFrequency: "yearly" as const },
    { route: "/disclaimer", priority: 0.6, changeFrequency: "yearly" as const },
    { route: "/how-to-create-a-qr-code", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/how-to-scan-qr-code", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/privacy-policy", priority: 0.7, changeFrequency: "yearly" as const },
    { route: "/qr-code-best-practices", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/qr-code-for-business-card", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/qr-code-for-restaurant-menu", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/qr-code-for-whatsapp", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/qr-code-for-wifi", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/qr-code-size-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/qr-code-types", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/templates", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/terms", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const staticUrls = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
