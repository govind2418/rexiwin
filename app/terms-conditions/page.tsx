import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalSection } from "@/components/legal/LegalSection";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The rules and terms that govern your use of Raxi Win, including eligibility, account rules, promotions, and platform conduct.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading align="left" as="h1" eyebrow="Legal" title="Terms & Conditions" />
        <p className="mt-3 text-sm text-text-secondary">Last updated: June 18, 2026</p>
      </div>

      <div className="mt-10">
        <LegalSection title="1. Acceptance of Terms">
          <p>
            By registering for or using {siteConfig.name}, you agree to be bound by these Terms &amp;
            Conditions, our Privacy Policy, our Disclaimer, and our Responsible Gaming notice. If you do not
            agree, please do not use the platform.
          </p>
        </LegalSection>

        <LegalSection title="2. Eligibility">
          <p>
            You must be at least {siteConfig.legalEntity.minAge} years old and legally permitted to
            participate in real-money gaming in your region to create an account. It is your responsibility
            to confirm that using {siteConfig.name} is lawful where you reside.
          </p>
        </LegalSection>

        <LegalSection title="3. Account Rules">
          <ul className="list-disc space-y-2 pl-5">
            <li>Each individual may hold only one account.</li>
            <li>You are responsible for keeping your login credentials confidential.</li>
            <li>Accounts must be registered using accurate, verifiable information.</li>
            <li>We reserve the right to suspend accounts showing signs of fraud, abuse, or policy violations.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Deposits & Withdrawals">
          <p>
            Deposits and withdrawals are processed through supported payment methods shown in the app.
            Limits, processing times, and any applicable fees are disclosed before you confirm a
            transaction. Withdrawals may require identity verification before being released.
          </p>
        </LegalSection>

        <LegalSection title="5. Promotions">
          <p>
            Promotions are subject to their own individual terms, published in-app at the time the
            promotion is active. General guidance appears on our{" "}
            <a href="/promotions" className="text-gold hover:underline">
              Promotions
            </a>{" "}
            page, but the specific terms for a given offer take precedence.
          </p>
        </LegalSection>

        <LegalSection title="6. Referral Program">
          <p>
            Referral rewards require that an invited account completes registration and any required
            verification steps. Referral codes may not be shared through spam, misleading advertising, or
            channels aimed at ineligible users. See our{" "}
            <a href="/referral-program" className="text-gold hover:underline">
              Referral Program
            </a>{" "}
            page for details.
          </p>
        </LegalSection>

        <LegalSection title="7. Prohibited Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use automated tools, bots, or exploits to interact with the platform</li>
            <li>Attempt to manipulate game outcomes or results</li>
            <li>Create multiple accounts or provide false registration information</li>
            <li>Use the platform for money laundering or other unlawful purposes</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Suspension & Termination">
          <p>
            We may suspend or close an account that violates these Terms, is linked to fraudulent activity,
            or is required to be closed by law or regulator instruction. Where possible, we will notify you
            of the reason and any available appeal process.
          </p>
        </LegalSection>

        <LegalSection title="9. Limitation of Liability">
          <p>
            To the extent permitted by law, {siteConfig.name} is not liable for indirect or consequential
            losses arising from your use of the platform, including losses related to gameplay outcomes,
            which are inherently uncertain.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Continued use of {siteConfig.name} after an update
            constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection title="11. Governing Law">
          <p>
            These Terms are governed by the laws applicable to {siteConfig.name}&apos;s licensing
            jurisdiction, without regard to conflict-of-law principles.
          </p>
        </LegalSection>

        <LegalSection title="12. Contact">
          <p>
            Questions about these Terms can be directed to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold hover:underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </div>
  );
}
