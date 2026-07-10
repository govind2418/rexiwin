import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Responsible Gaming";

export default function Image() {
  return renderOgImage("Responsible Gaming", "Play within your limits");
}
