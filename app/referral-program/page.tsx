import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTASection } from "@/components/ui/CTASection";
import { StepList } from "@/components/guides/StepList";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Referral Program",
  description:
    "How the Raxi Win referral program works, what benefits are available, and how to invite friends the right way.",
  path: "/referral-program",
});

const inviteSteps = [
  {
    title: "Find your referral code",
    description: "Your unique code and shareable link are available in the Referral tab of your account.",
  },
  {
    title: "Share it with friends",
    description: "Send your code or link through any channel — chat apps, social media, or in person.",
  },
  {
    title: "Your friend registers",
    description: "They enter your code during registration and complete the standard verification steps.",
  },
  {
    title: "Rewards are tracked automatically",
    description: "Once your friend meets the eligibility requirements, both accounts are updated in the referral dashboard.",
  },
];

const benefits = [
  {
    title: "No cap on invites",
    description: "There is generally no upper limit on how many people you can refer, subject to published referral terms.",
  },
  {
    title: "Clear dashboard tracking",
    description: "See pending and completed referrals along with reward status, all in one place.",
  },
  {
    title: "Two-sided rewards",
    description: "Referral rewards are typically structured to benefit both the person who invites and the new account, as detailed in-app.",
  },
  {
    title: "No extra cost",
    description: "Referring friends is free — you're simply sharing your existing account's unique code.",
  },
];

export default function ReferralProgramPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Referral Program", href: "/referral-program" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Invite & Earn"
          title="Raxi Win Referral Program"
          description="Share Raxi Win with friends and track your referral rewards from a single dashboard."
        />
      </div>

      <div className="mt-12">
        <StepList steps={inviteSteps} />
      </div>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Why Refer" title="Referral program benefits" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <GlassCard key={benefit.title}>
              <h3 className="font-display text-base font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Referral guidelines</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Only share your referral code with people you know are eligible — adults aged 18+ in a region
          where real-money gaming is legally permitted. Avoid posting your code in unrelated public spaces
          or spam channels, as this can violate our Terms &amp; Conditions and put referral rewards on
          hold pending review.
        </p>
      </section>

      <div className="mt-20">
        <CTASection
          title="Start referring today"
          description="Register for an account to get your unique referral code."
          primaryLabel="Register Now"
          primaryHref={siteConfig.accountUrl}
          secondaryLabel="View Promotions"
          secondaryHref="/promotions"
        />
      </div>
    </div>
  );
}
