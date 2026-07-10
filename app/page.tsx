import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Newsletter } from "@/components/widgets/Newsletter";
import { faqData } from "@/lib/faq-data";
import { updates } from "@/lib/updates";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Raxi Win | Official Raxi Game Platform — Login, Register & Play",
  description:
    "Raxi Win (Raxi Game) is a licensed real-money gaming platform built for speed and security. Find official Raxi login, register, and download links, plus guides for results, promotions, and 24x7 support.",
  path: "/",
  keywords: [
    "Raxi Win",
    "Raxi",
    "Raxi Game",
    "Rexi Game",
    "Rexi Win",
    "Raxi Login",
    "Raxi Win Login",
    "Raxi Win Register",
    "Raxi Win App",
    "Raxi Win Download",
    "Raxi Win Official",
  ],
});

const benefits = [
  {
    title: "Lightning-Fast Access",
    description: "A lightweight app and site built to load quickly, even on 3G and 4G connections.",
    icon: <IconBolt />,
  },
  {
    title: "Secure Accounts",
    description: "Modern account protection with OTP verification and self-set security controls.",
    icon: <IconShield />,
  },
  {
    title: "Transparent Results",
    description: "A clear, timestamped results history so you always know what happened and when.",
    icon: <IconChart />,
  },
  {
    title: "Daily Rewards",
    description: "Regular promotions and activity-based rewards, refreshed and clearly explained.",
    icon: <IconGift />,
  },
  {
    title: "Referral Program",
    description: "Invite friends with your unique code and track rewards from a single dashboard.",
    icon: <IconUsers />,
  },
  {
    title: "24x7 Support",
    description: "Reach our team any time through Telegram, email, or in-app support.",
    icon: <IconHeadset />,
  },
];

const steps = [
  {
    title: "Register",
    description: "Create your account in minutes with a valid mobile number and email address.",
  },
  {
    title: "Verify",
    description: "Confirm your details with a quick OTP step to keep your account secure.",
  },
  {
    title: "Play",
    description: "Explore game categories and promotions once your account is active.",
  },
  {
    title: "Withdraw",
    description: "Request withdrawals to your linked payment method any time, 24x7.",
  },
];

const previewFaqs = faqData.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(previewFaqs)} />
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Raxi Win"
          title="Built for a faster, safer game night"
          description="Every part of Raxi Win is designed around three principles: speed, security, and clarity."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <FeatureCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="From sign-up to your first session" />
        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <GlassCard as="li" key={step.title} className="relative">
              <span className="font-display text-3xl font-semibold text-gold/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
            </GlassCard>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading align="left" eyebrow="Latest Updates" title="What's new at Raxi Win" />
          <Link href="/updates" className="text-sm font-semibold text-gold hover:underline">
            View all updates &rarr;
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {updates.map((update) => (
            <GlassCard key={update.slug}>
              <time dateTime={update.date} className="text-xs uppercase tracking-wide text-gold">
                {new Date(update.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-3 font-display text-base font-semibold text-white">{update.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{update.summary}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQs" title="Quick answers before you get started" />
        <div className="mt-10">
          <FAQAccordion items={previewFaqs} />
        </div>
        <p className="mt-6 text-center text-sm text-text-secondary">
          Have more questions?{" "}
          <Link href="/faq" className="font-semibold text-gold hover:underline">
            Browse all FAQs
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Stay Informed" title="Get platform updates in your inbox" />
        <div className="mt-8 flex justify-center">
          <Newsletter />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTASection
          title="Ready to get started?"
          description="Register in minutes or download the app for the fastest experience."
        />
      </div>
    </>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3Z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}
function IconGift() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8M2 7h20v5H2V7Zm10 0V21M12 7c-1.5 0-4-1-4-3a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 2-2.5 3-4 3Z" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 10v-2a4 4 0 0 0-3-3.87M15 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-7h3M4 18v-5h3v7H6a2 2 0 0 1-2-2Z" />
    </svg>
  );
}
