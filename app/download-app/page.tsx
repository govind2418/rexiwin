import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTASection } from "@/components/ui/CTASection";
import { StepList } from "@/components/guides/StepList";
import { PhoneMockup } from "@/components/download/PhoneMockup";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Raxi Game App Download — Official Install Guide",
  description:
    "How to download and install the official Raxi Win app (Raxi Game) safely, plus tips for verifying you have the genuine, secure version.",
  path: "/download-app",
  keywords: [
    "Raxi Win App",
    "Raxi App Download",
    "Raxi Game Download",
    "Rexi Game Download",
    "Raxi Win Download",
    "Raxi Win Install",
  ],
});

const installSteps = [
  {
    title: "Open the official download page",
    description:
      "Always start from rexiwin.in.net or a link shared through our verified Telegram channel. Avoid third-party app stores or forwarded links from unknown sources.",
  },
  {
    title: "Allow installation from your browser",
    description:
      "Android may ask you to allow installs from your browser the first time. Approve this only for the official Raxi Win file you just downloaded.",
  },
  {
    title: "Install and open the app",
    description:
      "Tap the downloaded file to install. Once installation finishes, open the app directly from your home screen.",
  },
  {
    title: "Sign in or register",
    description:
      "Use an existing account to log in, or follow our Register Guide if this is your first time on Raxi Win.",
  },
];

const securityTips = [
  {
    title: "Verify the source every time",
    description: "Only download from rexiwin.in.net or our official Telegram — never from resellers or forwarded APKs.",
  },
  {
    title: "Check app permissions",
    description: "The app should only request permissions relevant to notifications and account use. Be cautious of unrelated permission requests.",
  },
  {
    title: "Keep the app updated",
    description: "Updates often include security improvements. Enable update notifications so you're never on an outdated build.",
  },
  {
    title: "Never share your OTP",
    description: "Raxi Win staff will never ask for your one-time password or account credentials over chat or call.",
  },
];

export default function DownloadAppPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Download App", href: "/download-app" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={howToSchema({
          name: "How to Download the Raxi Win App",
          description: "Step-by-step guide to safely downloading and installing the official Raxi Win (Raxi Game) app.",
          steps: installSteps,
        })}
      />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Get Started"
          title="Download the Raxi Win App"
          description="A lightweight install that keeps your account fast, secure, and always within reach."
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white">Installation Steps</h2>
          <div className="mt-6">
            <StepList steps={installSteps} />
          </div>
        </div>
        <PhoneMockup />
      </div>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Stay Safe" title="Security tips before and after installing" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {securityTips.map((tip) => (
            <GlassCard key={tip.title}>
              <h3 className="font-display text-lg font-semibold text-white">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{tip.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Requirements" title="Before you install" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <GlassCard>
            <h3 className="font-display text-base font-semibold text-white">Device</h3>
            <p className="mt-2 text-sm text-text-secondary">A modern Android device, or any recent mobile/desktop browser for the web experience.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-base font-semibold text-white">Connection</h3>
            <p className="mt-2 text-sm text-text-secondary">A stable 3G/4G/Wi-Fi connection is enough — the app is built to stay lightweight.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-base font-semibold text-white">Age & Region</h3>
            <p className="mt-2 text-sm text-text-secondary">You must be 18 or older and located where real-money gaming is legally permitted.</p>
          </GlassCard>
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          title="Ready to install Raxi Win?"
          description="Grab the app for the fastest experience, or register first if you don't have an account yet."
          primaryLabel="Register Now"
          primaryHref={siteConfig.accountUrl}
          secondaryLabel="Read Login Guide"
          secondaryHref="/login-guide"
        />
      </div>
    </div>
  );
}
