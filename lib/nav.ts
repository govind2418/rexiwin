export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Game Info", href: "/game-information" },
  { label: "Promotions", href: "/promotions" },
  { label: "Results", href: "/results-information" },
  { label: "Referral", href: "/referral-program" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Raxi Win", href: "/about" },
      { label: "Promotions", href: "/promotions" },
      { label: "Game Information", href: "/game-information" },
      { label: "Results Information", href: "/results-information" },
      { label: "Referral Program", href: "/referral-program" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Download App", href: "/download-app" },
      { label: "Register Guide", href: "/register-guide" },
      { label: "Login Guide", href: "/login-guide" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Responsible Gaming", href: "/responsible-gaming" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Login Issues", href: "/login-guide#issues" },
      { label: "Latest Updates", href: "/updates" },
    ],
  },
];
