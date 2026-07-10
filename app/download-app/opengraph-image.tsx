import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Download the Raxi Win App";

export default function Image() {
  return renderOgImage("Download the Raxi Win App", "Fast, secure installation guide");
}
