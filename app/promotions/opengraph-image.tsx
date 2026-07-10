import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Raxi Win Promotions & Rewards";

export default function Image() {
  return renderOgImage("Promotions & Rewards", "Bonuses, daily rewards, and referral overview");
}
