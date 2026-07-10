import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/**
 * Builds consistent per-page metadata: title, description, canonical,
 * Open Graph, and Twitter Card. Pages pass a route-relative `path`
 * (e.g. "/download-app") so canonical + OG URLs stay in sync.
 */
export function buildMetadata({ title, description, path, keywords }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${path === "/" ? "" : path}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${path === "/" ? "" : path}/opengraph-image`],
    },
  };
}
