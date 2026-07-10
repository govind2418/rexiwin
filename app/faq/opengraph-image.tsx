import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win FAQ";

export default function Image() {
  return renderOgImage("Frequently Asked Questions", "40+ answers about Raxi Win");
}
