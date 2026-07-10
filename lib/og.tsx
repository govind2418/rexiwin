import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared renderer for every route's opengraph-image.tsx. Keeps OG images
 * on-brand (luxury black/gold/red) without duplicating layout per route.
 */
export function renderOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090909",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(214,40,40,0.35), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "10px 28px",
            borderRadius: 999,
            border: "1px solid rgba(244,197,66,0.4)",
            color: "#F4C542",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Raxi Win
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            maxWidth: 980,
            textAlign: "center",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#BFBFBF",
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    ),
    { ...ogSize },
  );
}
