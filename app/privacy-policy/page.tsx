import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalSection } from "@/components/legal/LegalSection";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Raxi Win collects, uses, stores, and protects your personal information across the app and website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading align="left" as="h1" eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-3 text-sm text-text-secondary">Last updated: June 18, 2026</p>
      </div>

      <div className="mt-10">
        <LegalSection title="1. Information We Collect">
          <p>
            When you register for {siteConfig.name}, we collect information such as your mobile number,
            email address, and password. During verification, we may request additional identity
            documentation as required to comply with applicable regulations. We also collect device and
            usage information — such as app version, general location, and activity logs — to keep the
            platform secure and to improve performance.
          </p>
        </LegalSection>

        <LegalSection title="2. How We Use Your Information">
          <p>We use collected information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Create and manage your account</li>
            <li>Verify your identity and eligibility to use the platform</li>
            <li>Process deposits, withdrawals, and rewards</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Detect and prevent fraud, abuse, or violations of our Terms &amp; Conditions</li>
            <li>Send important account and security notifications</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Payment Information">
          <p>
            Payment details are processed through your chosen payment provider. {siteConfig.name} does not
            store full card numbers or banking credentials on its own servers; only the information
            necessary to confirm and reconcile a transaction is retained.
          </p>
        </LegalSection>

        <LegalSection title="4. Sharing of Information">
          <p>
            We do not sell your personal information. Data may be shared with payment processors,
            verification providers, and regulators where required by law, or with our internal support
            team to resolve account issues you&apos;ve raised.
          </p>
        </LegalSection>

        <LegalSection title="5. Data Security">
          <p>
            We apply reasonable technical and organizational measures — including encrypted transmission
            and restricted internal access — to protect your data. No method of transmission or storage is
            completely secure, and we encourage you to use a strong, unique password and enable any
            additional verification steps available in your account settings.
          </p>
        </LegalSection>

        <LegalSection title="6. Data Retention">
          <p>
            We retain account and transaction information for as long as your account is active and for a
            reasonable period afterward to meet legal, accounting, and dispute-resolution requirements.
          </p>
        </LegalSection>

        <LegalSection title="7. Your Rights">
          <p>
            You may request access to, correction of, or deletion of your personal data by contacting{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold hover:underline">
              {siteConfig.contact.email}
            </a>
            . We will respond after verifying your identity, and within the timeframe required by
            applicable law.
          </p>
        </LegalSection>

        <LegalSection title="8. Cookies &amp; Similar Technologies">
          <p>
            Our website may use minimal, functional cookies to remember basic preferences and keep the site
            fast. We do not use invasive tracking scripts or third-party advertising cookies.
          </p>
        </LegalSection>

        <LegalSection title="9. Children's Privacy">
          <p>
            {siteConfig.name} is intended for adults aged {siteConfig.legalEntity.minAge} and above. We do
            not knowingly collect information from minors. If we learn that a minor has registered an
            account, it will be closed and associated data removed in line with this policy.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. Material changes will be reflected by updating
            the “Last updated” date above, and significant changes may also be communicated in-app.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact Us">
          <p>
            Questions about this Privacy Policy can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold hover:underline">
              {siteConfig.contact.email}
            </a>{" "}
            or through our{" "}
            <a href="/contact" className="text-gold hover:underline">
              Contact page
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </div>
  );
}
