import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Raxi Win";

export default function Image() {
  return renderOgImage("About Raxi Win", "Mission, principles, and safety commitment");
}
