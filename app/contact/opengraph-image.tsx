import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact Raxi Win";

export default function Image() {
  return renderOgImage("Contact Raxi Win Support", "Telegram · Email · 24x7");
}
