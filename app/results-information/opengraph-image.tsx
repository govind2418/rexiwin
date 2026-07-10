import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Results Information";

export default function Image() {
  return renderOgImage("Checking Game Results", "How to read the results history view");
}
