import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Promotions & Rewards",
  description:
    "An overview of Raxi Win's promotion categories, activity-based rewards, and how the referral program fits in — all subject to published terms.",
  path: "/promotions",
});

const promoCategories = [
  {
    title: "Welcome Offer",
    description:
      "New accounts that complete registration and verification may be eligible for a welcome reward, credited once the qualifying steps are done.",
  },
  {
    title: "Daily Activity Rewards",
    description:
      "Consistent, everyday use of the platform can unlock small recurring rewards, refreshed on a daily cycle.",
  },
  {
    title: "Seasonal Campaigns",
    description:
      "Limited-time campaigns run around specific periods during the year, each with its own dedicated terms and validity window.",
  },
  {
    title: "Referral Rewards",
    description:
      "Invite friends using your referral code — both accounts can become eligible for a reward once requirements are met. See our Referral Program page.",
  },
];

const rewardRules = [
  {
    title: "Eligibility first",
    description: "Every promotion has eligibility criteria — account status, region, and verification level can all affect qualification.",
  },
  {
    title: "One offer per account",
    description: "Unless stated otherwise, each promotion may only be claimed once per verified account.",
  },
  {
    title: "Time-bound",
    description: "Offers carry an expiry date. Once a promotion window closes, it cannot be claimed retroactively.",
  },
  {
    title: "Full terms apply",
    description: "Each promotion's specific terms take precedence over this general overview — always check the in-app details before opting in.",
  },
];

export default function PromotionsPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Promotions", href: "/promotions" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Rewards Overview"
          title="Promotions & Rewards on Raxi Win"
          description="A general guide to how promotions work. Exact values, percentages, and durations are published inside the app and take precedence over this overview."
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {promoCategories.map((promo) => (
          <GlassCard key={promo.title}>
            <h2 className="font-display text-lg font-semibold text-white">{promo.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{promo.description}</p>
          </GlassCard>
        ))}
      </div>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Fine Print" title="How reward rules generally work" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {rewardRules.map((rule) => (
            <GlassCard key={rule.title}>
              <h3 className="font-display text-base font-semibold text-white">{rule.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{rule.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Play within your means</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Promotions are designed to reward regular use, not to encourage spending beyond your budget.
          Review our{" "}
          <Link href="/responsible-gaming" className="text-gold hover:underline">
            Responsible Gaming
          </Link>{" "}
          page for tools to help you stay in control.
        </p>
      </section>

      <div className="mt-20">
        <CTASection
          title="Want to earn more?"
          description="Learn how the referral program works and start inviting friends."
          primaryLabel="Referral Program"
          primaryHref="/referral-program"
          secondaryLabel="Register Now"
          secondaryHref="/register-guide"
        />
      </div>
    </div>
  );
}
