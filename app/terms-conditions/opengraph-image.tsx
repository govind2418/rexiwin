import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Terms & Conditions";

export default function Image() {
  return renderOgImage("Terms & Conditions", "Platform rules and usage terms");
}
