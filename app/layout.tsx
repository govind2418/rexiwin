import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingTelegram } from "@/components/widgets/FloatingTelegram";
import { BackToTop } from "@/components/widgets/BackToTop";
import { ReadingProgress } from "@/components/widgets/ReadingProgress";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: `${siteConfig.name} Updates` }],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "UWWFC1BQhro8tzO6aD8DLvQj8PmuxS51nr4qoZzWchM",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-text">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to main content
        </a>
        <ReadingProgress />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingTelegram />
        <BackToTop />
      </body>
    </html>
  );
}
