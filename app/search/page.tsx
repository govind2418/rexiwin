import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { searchIndex } from "@/lib/search-index";
import { faqData } from "@/lib/faq-data";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Search",
    description:
      "Search Raxi Win pages, guides, and FAQs — Raxi login, Raxi register, Raxi Game information, results, promotions, and more.",
    path: "/search",
  }),
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();

  const pageResults = query
    ? searchIndex.filter(
        (entry) =>
          entry.title.toLowerCase().includes(query) || entry.description.toLowerCase().includes(query),
      )
    : [];

  const faqResults = query
    ? faqData
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query),
        )
        .slice(0, 8)
    : [];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Search", href: "/search" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading align="left" as="h1" eyebrow="Search" title="Search Raxi Win" />
      </div>

      <form action="/search" method="GET" className="mt-8 flex gap-3">
        <label htmlFor="search-q" className="sr-only">
          Search Raxi Win
        </label>
        <input
          id="search-q"
          name="q"
          type="search"
          defaultValue={q ?? ""}
          placeholder="Search for Raxi login, register, games, FAQs..."
          className="w-full rounded-full border border-gold/20 bg-surface px-5 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
        />
        <button type="submit" className="btn-gold shrink-0 rounded-full px-6 py-3 text-sm font-semibold">
          Search
        </button>
      </form>

      {query ? (
        <div className="mt-10 flex flex-col gap-10">
          <section>
            <h2 className="font-display text-lg font-semibold text-white">Pages ({pageResults.length})</h2>
            {pageResults.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-3">
                {pageResults.map((entry) => (
                  <GlassCard as="li" key={entry.href}>
                    <Link href={entry.href} className="block">
                      <span className="font-display text-base font-semibold text-white">{entry.title}</span>
                      <span className="mt-1 block text-sm text-text-secondary">{entry.description}</span>
                    </Link>
                  </GlassCard>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-text-secondary">No matching pages.</p>
            )}
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-white">FAQs ({faqResults.length})</h2>
            {faqResults.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-3">
                {faqResults.map((faq) => (
                  <GlassCard as="li" key={faq.question}>
                    <p className="font-medium text-white">{faq.question}</p>
                    <p className="mt-1 text-sm text-text-secondary">{faq.answer}</p>
                  </GlassCard>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-text-secondary">
                No matching FAQs. Browse the full{" "}
                <Link href="/faq" className="text-gold hover:underline">
                  FAQ page
                </Link>
                .
              </p>
            )}
          </section>
        </div>
      ) : (
        <p className="mt-8 text-sm text-text-secondary">
          Try searching for &ldquo;Raxi login,&rdquo; &ldquo;register,&rdquo; &ldquo;download,&rdquo; or
          &ldquo;results.&rdquo;
        </p>
      )}
    </div>
  );
}
