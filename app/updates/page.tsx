import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { updates } from "@/lib/updates";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Latest Updates",
  description:
    "Recent changes and improvements across Raxi Win, including app installation, results, and account features.",
  path: "/updates",
});

export default function UpdatesPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Latest Updates", href: "/updates" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />
      <div className="mt-8">
        <SectionHeading align="left" eyebrow="Changelog" title="Latest Updates" />
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {updates.map((update) => (
          <GlassCard key={update.slug} as="article" className="scroll-mt-24" >
            <div id={update.slug} />
            <time dateTime={update.date} className="text-xs uppercase tracking-wide text-gold">
              {new Date(update.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mt-3 font-display text-xl font-semibold text-white">{update.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{update.summary}</p>
          </GlassCard>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-text-secondary">
        Subscribe via <a href="/rss.xml" className="font-semibold text-gold hover:underline">RSS</a> to get notified of new updates.
      </p>
    </div>
  );
}
