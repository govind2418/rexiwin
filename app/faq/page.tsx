import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FAQBrowser } from "@/components/faq/FAQBrowser";
import { faqData, faqCategories } from "@/lib/faq-data";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to 40+ frequently asked questions about registering, logging in, deposits, results, promotions, referrals, and account safety on Raxi Win.",
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqData)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          as="h1"
          eyebrow="Help Center"
          title="Frequently Asked Questions"
          description="Browse by category or search for the answer you need — from getting started to account safety."
        />
      </div>

      <div className="mt-12">
        <FAQBrowser items={faqData} categories={faqCategories} />
      </div>

      <div className="mt-20">
        <CTASection
          title="Didn't find your answer?"
          description="Our support team is available 24x7 through Telegram, email, or the contact form."
          primaryLabel="Contact Support"
          primaryHref="/contact"
          secondaryLabel="Login Guide"
          secondaryHref="/login-guide"
        />
      </div>
    </div>
  );
}
