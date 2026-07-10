import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Disclaimer";

export default function Image() {
  return renderOgImage("Disclaimer", "Important disclosures about Raxi Win");
}
