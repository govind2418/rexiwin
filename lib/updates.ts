export type UpdateItem = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date
};

/**
 * Static editorial updates surfaced on the homepage "Latest Updates" strip
 * and exposed via /rss.xml. Add new entries to the top of the array.
 */
export const updates: UpdateItem[] = [
  {
    slug: "faster-app-install-flow",
    title: "Faster app install flow now live",
    summary:
      "We streamlined the download and installation steps so new players can get set up in fewer taps. See the updated Download App guide.",
    date: "2026-06-18",
  },
  {
    slug: "responsible-gaming-controls",
    title: "New responsible-gaming controls added",
    summary:
      "Self-set deposit limits and session reminders are now available directly from account settings.",
    date: "2026-05-22",
  },
  {
    slug: "referral-dashboard-refresh",
    title: "Referral dashboard refresh",
    summary:
      "The referral program page now shows pending and completed invites in one place, with clearer reward status.",
    date: "2026-04-30",
  },
  {
    slug: "results-history-improvements",
    title: "Results history improvements",
    summary:
      "Round history now loads faster and includes clearer timestamps to help you review past outcomes.",
    date: "2026-03-14",
  },
];
