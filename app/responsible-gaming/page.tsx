import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { LegalSection } from "@/components/legal/LegalSection";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Responsible Gaming",
  description:
    "Tools and guidance for playing responsibly on Raxi Win, including deposit limits, self-exclusion, and how to recognize risky patterns.",
  path: "/responsible-gaming",
});

const warningSigns = [
  "Spending more than you planned to, or chasing losses",
  "Borrowing money or using funds meant for essentials to play",
  "Feeling anxious, irritable, or preoccupied when not playing",
  "Hiding your play from family or friends",
  "Neglecting work, studies, or relationships because of gaming",
];

const tools = [
  {
    title: "Deposit Limits",
    description: "Set a daily, weekly, or monthly cap on deposits from your account settings.",
  },
  {
    title: "Session Reminders",
    description: "Enable reminders that let you know how long you've been active in a session.",
  },
  {
    title: "Temporary Break",
    description: "Pause your account for a set period whenever you need a break, from a day to several weeks.",
  },
  {
    title: "Self-Exclusion",
    description: "Request a longer-term self-exclusion through support if you need to step away entirely.",
  },
];

export default function ResponsibleGamingPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Responsible Gaming", href: "/responsible-gaming" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Play Within Your Limits"
          title="Responsible Gaming"
          description={`${siteConfig.name} is for adults aged ${siteConfig.legalEntity.minAge}+ and is intended as entertainment, not a way to make money. These tools and tips are here to help you stay in control.`}
        />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-white">Tools to help you stay in control</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {tools.map((tool) => (
            <GlassCard key={tool.title}>
              <h3 className="font-display text-lg font-semibold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{tool.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Signs your play may be becoming risky</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
          {warningSigns.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <LegalSection title="A few ground rules worth keeping in mind">
          <ul className="list-disc space-y-2 pl-5">
            <li>Only play with money you can comfortably afford to lose.</li>
            <li>Treat every round as independent — there is no pattern to chase.</li>
            <li>Set a time and spending limit before you start, and stick to it.</li>
            <li>Take regular breaks, especially during longer sessions.</li>
            <li>Never play to relieve stress, sadness, or other difficult emotions.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Getting support">
          <p>
            If you feel your gaming is affecting your finances, relationships, or well-being, consider
            speaking with a licensed counselor or a local support service for gambling-related concerns in
            your region. You can also contact our support team at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold hover:underline">
              {siteConfig.contact.email}
            </a>{" "}
            to set up a deposit limit, temporary break, or self-exclusion on your account.
          </p>
        </LegalSection>

        <LegalSection title="For friends and family">
          <p>
            If you&apos;re concerned about someone else&apos;s gaming habits, encourage an open conversation and
            point them toward the account tools described above. We are not able to discuss another
            person&apos;s account details for privacy reasons, but we can guide you on how they can set
            limits themselves.
          </p>
        </LegalSection>
      </div>
    </div>
  );
}
