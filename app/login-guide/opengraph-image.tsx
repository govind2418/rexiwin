import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Login Guide";

export default function Image() {
  return renderOgImage("How to Log In to Raxi Win", "Password recovery & troubleshooting");
}
