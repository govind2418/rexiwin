import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Referral Program";

export default function Image() {
  return renderOgImage("Referral Program", "Invite friends, track rewards");
}
