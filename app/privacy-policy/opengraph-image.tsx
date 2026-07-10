import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Privacy Policy";

export default function Image() {
  return renderOgImage("Privacy Policy", "How your data is collected and protected");
}
