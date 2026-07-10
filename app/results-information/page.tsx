import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTASection } from "@/components/ui/CTASection";
import { StepList } from "@/components/guides/StepList";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Results Information",
  description:
    "How to check game outcomes on Raxi Win, understand the results history view, and what to do if a result looks incorrect.",
  path: "/results-information",
});

const checkSteps = [
  {
    title: "Open the Results tab",
    description: "From your dashboard, select the Results tab to view the public outcome log.",
  },
  {
    title: "Choose a game category",
    description: "Filter by category to see results relevant to the games you follow.",
  },
  {
    title: "Review round details",
    description: "Each entry shows a round reference, timestamp, and outcome so you can confirm what happened.",
  },
  {
    title: "Check your personal history",
    description: "Your account dashboard keeps a separate log of rounds you personally took part in.",
  },
];

const readingTips = [
  {
    title: "Round reference",
    description: "A unique ID for each round — keep this handy if you ever need to raise a query with support.",
  },
  {
    title: "Timestamp",
    description: "Shows exactly when a round closed, displayed in your local time zone.",
  },
  {
    title: "Outcome summary",
    description: "A plain-language summary of what the round resolved to, without any predictive commentary.",
  },
  {
    title: "Status",
    description: "Indicates whether a round is confirmed, under review, or archived.",
  },
];

export default function ResultsInformationPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Results Information", href: "/results-information" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Transparency"
          title="Checking Game Results"
          description="Results are logged automatically after each round. Here's how to find and read them."
        />
      </div>

      <div className="mt-12">
        <StepList steps={checkSteps} />
      </div>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Reading the Log" title="What each result entry shows" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {readingTips.map((tip) => (
            <GlassCard key={tip.title}>
              <h3 className="font-display text-base font-semibold text-white">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{tip.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Spotted an issue?</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          If a result looks incorrect or missing, take a screenshot including the round reference and
          contact support through our{" "}
          <a href="/contact" className="text-gold hover:underline">
            Contact page
          </a>
          . Our team reviews discrepancies against the platform&apos;s official round records. Results are
          generated automatically and cannot be predicted or influenced — see our{" "}
          <a href="/game-information" className="text-gold hover:underline">
            Game Information
          </a>{" "}
          page for more on how gameplay works.
        </p>
      </section>

      <div className="mt-20">
        <CTASection
          title="Want to see it in action?"
          description="Log in to your account to browse the live results history."
          primaryLabel="Login Guide"
          primaryHref="/login-guide"
          secondaryLabel="Download App"
          secondaryHref="/download-app"
        />
      </div>
    </div>
  );
}
