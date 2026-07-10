export const siteConfig = {
  name: "Raxi Win",
  tagline: "Play Smarter with Raxi Win",
  description:
    "Raxi Win is a licensed real-money gaming platform offering fast access, secure accounts, and 24x7 support. Learn how to register, log in, download the app, and play responsibly.",
  url: "https://rexiwin.in.net",
  ogImage: "/opengraph-image",
  locale: "en_IN",
  keywords: [
    "Raxi Win",
    "Raxi",
    "Raxi Game",
    "Rexi Game",
    "Rexi Win",
    "Raxi Win App",
    "Raxi Win Login",
    "Raxi Login",
    "Raxi Win Register",
    "Raxi Win Download",
    "Raxi Win Game",
    "Raxi Win Official",
    "licensed gaming platform",
    "online gaming India",
  ],
  contact: {
    email: "support@rexiwin.in.net",
    telegram: "https://t.me/raxiwin",
    supportHours: "24x7",
  },
  social: {
    telegram: "https://t.me/raxiwin",
    twitter: "https://twitter.com/raxiwin",
    instagram: "https://instagram.com/raxiwin",
    youtube: "https://youtube.com/@raxiwin",
  },
  legalEntity: {
    licenseNote:
      "Raxi Win operates under a valid gaming license. License and registration details are available on request from support@rexiwin.in.net.",
    minAge: 18,
  },
} as const;

export type SiteConfig = typeof siteConfig;
