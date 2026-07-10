import { siteConfig } from "@/lib/site-config";
import { updates } from "@/lib/updates";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = updates
    .map(
      (update) => `
    <item>
      <title>${escapeXml(update.title)}</title>
      <link>${siteConfig.url}/updates#${update.slug}</link>
      <guid>${siteConfig.url}/updates#${update.slug}</guid>
      <pubDate>${new Date(update.date).toUTCString()}</pubDate>
      <description>${escapeXml(update.summary)}</description>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} Updates</title>
    <link>${siteConfig.url}</link>
    <description>Latest updates from ${siteConfig.name}</description>
    <language>en-in</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
