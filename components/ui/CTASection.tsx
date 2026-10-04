import { Button } from "./Button";
import { siteConfig } from "@/lib/site-config";

export function CTASection({
  title,
  description,
  primaryLabel = "Register Now",
  primaryHref = siteConfig.accountUrl,
  secondaryLabel = "Download App",
  secondaryHref = "/download-app",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-luxury-lg border border-gold/15 bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 section-glow"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
        <p className="text-base sm:text-lg text-text-secondary">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button href={primaryHref} variant="gold">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
