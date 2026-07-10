import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Game Information";

export default function Image() {
  return renderOgImage("Game Information", "Categories, features, and gameplay basics");
}
