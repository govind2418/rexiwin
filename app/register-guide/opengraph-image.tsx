import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Register Guide";

export default function Image() {
  return renderOgImage("How to Register on Raxi Win", "A simple, step-by-step walkthrough");
}
