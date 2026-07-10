export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqCategories = [
  "Getting Started",
  "Account & Login",
  "Deposits & Withdrawals",
  "Games & Results",
  "Promotions & Referral",
  "Safety & Support",
] as const;

export const faqData: FaqItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "What is Raxi Win?",
    answer:
      "Raxi Win is a licensed real-money gaming platform that gives players fast, secure access to a curated selection of games, along with clear guidance on registration, login, results, and rewards.",
  },
  {
    category: "Getting Started",
    question: "Who can use Raxi Win?",
    answer:
      "Raxi Win is intended for adults aged 18 and above who reside in a region where real-money gaming is legally permitted. Please review local regulations before creating an account.",
  },
  {
    category: "Getting Started",
    question: "Do I need to download an app to use Raxi Win?",
    answer:
      "You can use Raxi Win from a mobile browser, but installing the app typically gives you a faster, smoother experience with fewer loading delays. See our Download App guide for step-by-step instructions.",
  },
  {
    category: "Getting Started",
    question: "Is Raxi Win available on iOS and Android?",
    answer:
      "Raxi Win supports Android devices directly and Android/iOS through the mobile web experience. Availability can vary by app store policy, so the in-house download guide is kept up to date with the current options.",
  },
  {
    category: "Getting Started",
    question: "How much storage space does the app need?",
    answer:
      "The app is built to stay lightweight. Exact size can vary by version, but it is designed to install quickly even on modest data connections.",
  },
  {
    category: "Getting Started",
    question: "Is there a desktop version of Raxi Win?",
    answer:
      "Raxi Win is optimized mobile-first, but the website is fully responsive and functions well on desktop and tablet browsers too.",
  },
  {
    category: "Getting Started",
    question: "What makes Raxi Win different from other platforms?",
    answer:
      "Raxi Win focuses on three things: fast access with minimal friction, transparent information about how the platform works, and round-the-clock support so questions get answered quickly.",
  },
  // Account & Login
  {
    category: "Account & Login",
    question: "How do I create a Raxi Win account?",
    answer:
      "Open the app or website, tap Register, and follow the on-screen steps to enter your details and verify your account. Our full Register Guide walks through each screen in order.",
  },
  {
    category: "Account & Login",
    question: "What information do I need to register?",
    answer:
      "You will typically need a valid mobile number, an email address, and a secure password. Some verification steps may request additional identity confirmation to keep your account safe.",
  },
  {
    category: "Account & Login",
    question: "Can I have more than one account?",
    answer:
      "No. Each user is permitted a single account. Operating multiple accounts can result in verification holds or account restrictions.",
  },
  {
    category: "Account & Login",
    question: "I forgot my password. How do I recover it?",
    answer:
      "Use the “Forgot Password” link on the login screen, confirm your registered mobile number or email, and follow the reset steps. Full details are in our Login Guide.",
  },
  {
    category: "Account & Login",
    question: "Why is my login not working?",
    answer:
      "Common causes include an outdated app version, poor network connection, or an incorrect password. Try updating the app, checking your connection, and using the password reset option before contacting support.",
  },
  {
    category: "Account & Login",
    question: "How do I update my registered mobile number?",
    answer:
      "Go to Account Settings after logging in and choose Update Contact Details. You may be asked to verify the change with an OTP for security.",
  },
  {
    category: "Account & Login",
    question: "Is two-factor verification available?",
    answer:
      "Yes, we recommend enabling any additional verification step offered in your account security settings to add an extra layer of protection.",
  },
  {
    category: "Account & Login",
    question: "How do I delete my Raxi Win account?",
    answer:
      "Contact support through Telegram or email with your account details and a deletion request. Our team will confirm your identity and process the request in line with our Privacy Policy.",
  },
  // Deposits & Withdrawals
  {
    category: "Deposits & Withdrawals",
    question: "What payment methods are supported?",
    answer:
      "Supported payment options are shown within the app's wallet section and can vary by region. Always use the in-app wallet rather than sharing payment details directly with anyone claiming to represent Raxi Win.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "How long do withdrawals take to process?",
    answer:
      "Processing times depend on your payment provider and verification status. Completed and verified accounts generally experience faster processing.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "Is there a minimum deposit or withdrawal amount?",
    answer:
      "Minimum and maximum limits are displayed in the wallet section of your account and may be updated periodically to comply with platform and payment-provider policy.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "Why was my withdrawal delayed?",
    answer:
      "Delays usually relate to pending identity verification, incomplete profile details, or payment-provider processing windows. Contact support if a withdrawal is delayed beyond the stated timeframe.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "Are there any fees on deposits or withdrawals?",
    answer:
      "Any applicable fees are disclosed in the wallet section before you confirm a transaction, so you always know the total before proceeding.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "Can I set a deposit limit for myself?",
    answer:
      "Yes. Responsible-gaming controls, including deposit limits, are available in account settings so you can play within a budget you set in advance.",
  },
  // Games & Results
  {
    category: "Games & Results",
    question: "What kinds of games are available on Raxi Win?",
    answer:
      "Raxi Win hosts a curated range of game categories. Our Game Information page describes each category's format and general mechanics without walking through specific strategies.",
  },
  {
    category: "Games & Results",
    question: "How do I check game results?",
    answer:
      "Results are published within the app's results section and update automatically after each round closes. See our Results Information page for how to read the history view.",
  },
  {
    category: "Games & Results",
    question: "How often are results updated?",
    answer:
      "Update frequency depends on the specific game format; most rounds are reflected in the results history shortly after they conclude.",
  },
  {
    category: "Games & Results",
    question: "Can I see my past game history?",
    answer:
      "Yes, your personal activity history is available in your account dashboard, separate from the general public results log.",
  },
  {
    category: "Games & Results",
    question: "Are outcomes generated fairly?",
    answer:
      "Game outcomes are generated through the platform's certified systems. We do not publish manipulation techniques or prediction methods, since outcomes are not something any legitimate method can reliably forecast.",
  },
  {
    category: "Games & Results",
    question: "What should I do if a result looks incorrect?",
    answer:
      "Take a screenshot of the discrepancy and contact support with your account ID and round reference so the team can review it.",
  },
  {
    category: "Games & Results",
    question: "Is there a time limit to claim game winnings?",
    answer:
      "Yes, winnings should be reviewed and, where applicable, withdrawn within the timeframe stated in the Terms & Conditions.",
  },
  // Promotions & Referral
  {
    category: "Promotions & Referral",
    question: "What promotions does Raxi Win offer?",
    answer:
      "Promotions can include welcome offers, activity-based rewards, and seasonal campaigns. Current offers are listed on our Promotions page and inside the app.",
  },
  {
    category: "Promotions & Referral",
    question: "How does the referral program work?",
    answer:
      "Share your unique referral code with a friend; once they register and complete the required verification steps, both accounts may become eligible for a referral reward as described on our Referral Program page.",
  },
  {
    category: "Promotions & Referral",
    question: "Is there a limit to how many people I can refer?",
    answer:
      "There is generally no cap on the number of valid referrals, though reward terms and eligibility rules apply as published on the Referral Program page.",
  },
  {
    category: "Promotions & Referral",
    question: "Do promotions expire?",
    answer:
      "Yes, each promotion has its own validity window listed in its terms. Expired offers cannot be applied retroactively.",
  },
  {
    category: "Promotions & Referral",
    question: "Can promotions be combined?",
    answer:
      "Unless explicitly stated otherwise, promotions are applied individually and cannot be stacked with other active offers.",
  },
  {
    category: "Promotions & Referral",
    question: "How do I track my referral rewards?",
    answer:
      "Your referral dashboard, found in account settings, shows pending and completed referrals along with any rewards earned.",
  },
  // Safety & Support
  {
    category: "Safety & Support",
    question: "Is Raxi Win a licensed platform?",
    answer:
      "Raxi Win operates under a valid gaming license. Details can be requested from our support team at support@rexiwin.in.net for verification purposes.",
  },
  {
    category: "Safety & Support",
    question: "How is my personal data protected?",
    answer:
      "Account and payment data are handled according to our Privacy Policy, which outlines what is collected, why, and how it is safeguarded.",
  },
  {
    category: "Safety & Support",
    question: "How do I contact customer support?",
    answer:
      "You can reach the team through our Telegram channel, the email address listed on the Contact page, or the in-app support option, available 24x7.",
  },
  {
    category: "Safety & Support",
    question: "What should I do if I suspect a scam profile pretending to be Raxi Win?",
    answer:
      "Official communication only comes from verified channels listed on our Contact page. Report any suspicious account or link to support immediately and avoid sharing your password or OTP with anyone.",
  },
  {
    category: "Safety & Support",
    question: "Does Raxi Win support responsible gaming?",
    answer:
      "Yes. We provide self-set deposit limits, session reminders, and information about recognizing signs of risky play on our Responsible Gaming page. Play should always stay within what you can afford.",
  },
  {
    category: "Safety & Support",
    question: "Can I set a break or self-exclusion period?",
    answer:
      "Yes, account settings include options to pause your account temporarily or request a longer self-exclusion period through support.",
  },
  {
    category: "Safety & Support",
    question: "Who do I contact for a billing dispute?",
    answer:
      "Reach out to support with your transaction ID and a description of the issue. Disputes are reviewed against transaction records and our published Terms & Conditions.",
  },
  {
    category: "Safety & Support",
    question: "Is my app download safe?",
    answer:
      "Only download the app from the official links provided on our Download App page. Avoid third-party sources, which may distribute modified or unsafe files.",
  },
];
