import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Reach Raxi Win support through our contact form, Telegram channel, or email — available 24x7.",
  path: "/contact",
});

const channels = [
  {
    title: "Telegram",
    description: "Fastest way to reach us for quick questions.",
    href: siteConfig.social.telegram,
    linkLabel: "Open Telegram",
  },
  {
    title: "Email",
    description: "Best for detailed queries or account verification requests.",
    href: `mailto:${siteConfig.contact.email}`,
    linkLabel: siteConfig.contact.email,
  },
  {
    title: "Support Hours",
    description: "Our support team is available around the clock, every day of the week.",
    href: undefined,
    linkLabel: "24x7",
  },
];

export default function ContactPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="We're Here to Help"
          title="Contact Raxi Win Support"
          description="Have a question about your account, a game, or a promotion? Reach us any way that's convenient."
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {channels.map((channel) => (
          <GlassCard key={channel.title}>
            <h2 className="font-display text-lg font-semibold text-white">{channel.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{channel.description}</p>
            {channel.href ? (
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
              >
                {channel.linkLabel}
              </a>
            ) : (
              <span className="mt-4 inline-block text-sm font-semibold text-gold">{channel.linkLabel}</span>
            )}
          </GlassCard>
        ))}
      </div>

      <section className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white">Send us a message</h2>
          <p className="mt-2 text-sm text-text-secondary">
            This form is for general inquiries. For account-specific or payment issues, please use email so
            we can verify your identity securely.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-white">Our location</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Raxi Win operates primarily online. The map below is a placeholder for our registered office
            location.
          </p>
          <div className="mt-6">
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </div>
  );
}
