import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { updates } from "@/lib/updates";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/download-app", priority: 0.9, changeFrequency: "monthly" },
  { path: "/register-guide", priority: 0.9, changeFrequency: "monthly" },
  { path: "/login-guide", priority: 0.9, changeFrequency: "monthly" },
  { path: "/promotions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/game-information", priority: 0.8, changeFrequency: "monthly" },
  { path: "/results-information", priority: 0.8, changeFrequency: "daily" },
  { path: "/referral-program", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/updates", priority: 0.6, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/responsible-gaming", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = updates[0]?.date ? new Date(updates[0].date) : new Date();

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.path === "/" || route.path === "/updates" ? lastModified : undefined,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
