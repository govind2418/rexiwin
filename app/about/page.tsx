import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatCard } from "@/components/ui/StatCard";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Raxi Win",
  description:
    "Learn about Raxi Win's mission, the principles behind the platform, and the safety commitments that shape how we build.",
  path: "/about",
});

const pillars = [
  {
    title: "Speed",
    description: "Every screen is built to load fast, even on slower mobile connections, so nothing gets in the way of your time.",
  },
  {
    title: "Security",
    description: "Account protection, verification steps, and safe payment handling are treated as first-class requirements, not afterthoughts.",
  },
  {
    title: "Clarity",
    description: "Rules, results, and rewards are explained in plain language, with full terms always a click away.",
  },
  {
    title: "Responsibility",
    description: "Built-in tools like deposit limits and self-exclusion put players in control of their own play.",
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About Raxi Win", href: "/about" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Our Story"
          title="About Raxi Win"
          description="Raxi Win is a licensed real-money gaming platform built around one idea: a premium experience shouldn't come at the cost of speed, clarity, or safety."
        />
      </div>

      <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white">Our Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            We set out to build a gaming platform that treats players as adults capable of making informed
            decisions — which means being transparent about how the platform works, how results are
            generated, and what tools are available to stay in control. Raxi Win exists to make that
            information easy to find, not buried in fine print.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <StatCard icon={<SpeedIcon />} value="< 2s" label="Avg. Load Time" />
          <StatCard icon={<ClockIcon />} value="24x7" label="Support Coverage" />
          <StatCard icon={<ShieldIcon />} value="Licensed" label="Platform Status" />
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="What Guides Us" title="Four principles behind Raxi Win" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <GlassCard key={pillar.title}>
              <h3 className="font-display text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{pillar.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Safety commitment</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Raxi Win operates under a valid gaming license, and access is restricted to adults aged 18 and
          above in regions where real-money gaming is legally permitted. We maintain dedicated tools for
          responsible play, including deposit limits and self-exclusion, described in full on our{" "}
          <a href="/responsible-gaming" className="text-gold hover:underline">
            Responsible Gaming
          </a>{" "}
          page. For license verification or compliance questions, reach our team at{" "}
          <a href="mailto:support@rexiwin.in.net" className="text-gold hover:underline">
            support@rexiwin.in.net
          </a>
          .
        </p>
      </section>

      <div className="mt-20">
        <CTASection
          title="Get to know Raxi Win"
          description="Explore our guides or reach out with any questions about the platform."
          primaryLabel="Explore FAQs"
          primaryHref="/faq"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </div>
    </div>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3Z" />
    </svg>
  );
}
