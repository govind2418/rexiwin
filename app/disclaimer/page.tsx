import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalSection } from "@/components/legal/LegalSection";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Important disclosures about Raxi Win, including the financial risk of real-money gaming and the limits of the information provided on this site.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading align="left" as="h1" eyebrow="Legal" title="Disclaimer" />
        <p className="mt-3 text-sm text-text-secondary">Last updated: June 18, 2026</p>
      </div>

      <div className="mt-10">
        <LegalSection title="Financial Risk">
          <p>
            {siteConfig.name} is a real-money gaming platform. Participation involves financial risk, and
            outcomes are governed by chance. You should never deposit or play with money you cannot afford
            to lose, and past results have no bearing on future outcomes.
          </p>
        </LegalSection>

        <LegalSection title="No Guaranteed Returns">
          <p>
            We do not guarantee winnings, returns, or specific outcomes of any kind. Any figures, examples,
            or descriptions of rewards on this site are illustrative and subject to the specific terms
            published in-app.
          </p>
        </LegalSection>

        <LegalSection title="Informational Content">
          <p>
            Guides on this website — including the Register Guide, Login Guide, Game Information, and
            Results Information pages — are provided for general informational purposes to help you use the
            platform. They do not constitute financial, legal, or professional advice.
          </p>
        </LegalSection>

        <LegalSection title="Third-Party Links">
          <p>
            This site may link to third-party services such as payment providers or social channels. We are
            not responsible for the content, policies, or practices of third-party sites.
          </p>
        </LegalSection>

        <LegalSection title="Jurisdictional Availability">
          <p>
            Real-money gaming is regulated differently across regions. It is your responsibility to confirm
            that using {siteConfig.name} is lawful in your jurisdiction before registering or depositing
            funds.
          </p>
        </LegalSection>

        <LegalSection title="Accuracy of Information">
          <p>
            We make reasonable efforts to keep information on this site accurate and current, but errors or
            outdated details may occasionally appear. The in-app rules, terms, and account details always
            take precedence over descriptions on this website.
          </p>
        </LegalSection>

        <LegalSection title="Responsible Play">
          <p>
            If gaming stops being enjoyable or starts affecting your finances, relationships, or well-being,
            please review our{" "}
            <a href="/responsible-gaming" className="text-gold hover:underline">
              Responsible Gaming
            </a>{" "}
            page for tools and support options.
          </p>
        </LegalSection>
      </div>
    </div>
  );
}
