import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win — Play Smarter";

export default function Image() {
  return renderOgImage("Play Smarter with Raxi Win", "Fast · Secure · Mobile Friendly");
}
