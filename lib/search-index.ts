export type SearchEntry = {
  title: string;
  href: string;
  description: string;
};

export const searchIndex: SearchEntry[] = [
  { title: "Home", href: "/", description: "Play Smarter with Raxi Win" },
  { title: "Download App", href: "/download-app", description: "Install and set up the Raxi Win app safely" },
  { title: "Register Guide", href: "/register-guide", description: "Step-by-step account registration walkthrough" },
  { title: "Login Guide", href: "/login-guide", description: "Login help, password recovery, common issues" },
  { title: "Promotions", href: "/promotions", description: "Bonuses, rewards, and referral overview" },
  { title: "Game Information", href: "/game-information", description: "Game categories and gameplay information" },
  { title: "Results Information", href: "/results-information", description: "How to check game outcomes and history" },
  { title: "Referral Program", href: "/referral-program", description: "Invite friends and track referral rewards" },
  { title: "FAQ", href: "/faq", description: "40+ answers about accounts, payments, and safety" },
  { title: "About Raxi Win", href: "/about", description: "Brand overview, mission, and safety commitment" },
  { title: "Contact", href: "/contact", description: "Reach support via form, Telegram, or email" },
  { title: "Privacy Policy", href: "/privacy-policy", description: "How your data is collected and protected" },
  { title: "Terms & Conditions", href: "/terms-conditions", description: "Platform rules and usage terms" },
  { title: "Disclaimer", href: "/disclaimer", description: "Important disclosures about the platform" },
  { title: "Responsible Gaming", href: "/responsible-gaming", description: "Play within your limits, self-exclusion tools" },
];
