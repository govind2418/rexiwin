import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTASection } from "@/components/ui/CTASection";
import { StepList } from "@/components/guides/StepList";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Login Guide",
  description:
    "Step-by-step help for logging into Raxi Win, recovering a forgotten password, and resolving common login issues.",
  path: "/login-guide",
});

const loginSteps = [
  {
    title: "Open the app or website",
    description: "Launch the Raxi Win app, or visit rexiwin.in.net from your browser.",
  },
  {
    title: "Enter your credentials",
    description: "Type in your registered mobile number or email, along with your password.",
  },
  {
    title: "Complete verification if prompted",
    description: "If you've enabled extra security, confirm the OTP or verification step sent to your device.",
  },
  {
    title: "You're in",
    description: "Once verified, you'll land on your dashboard with access to your account, results, and rewards.",
  },
];

const recoverySteps = [
  {
    title: "Tap Forgot Password",
    description: "On the login screen, select the “Forgot Password” link.",
  },
  {
    title: "Confirm your identity",
    description: "Enter your registered mobile number or email to receive a reset code.",
  },
  {
    title: "Enter the reset code",
    description: "Input the code sent to you, then choose a new, strong password.",
  },
  {
    title: "Log in with your new password",
    description: "Return to the login screen and sign in using your updated credentials.",
  },
];

const commonIssues = [
  {
    title: "“Invalid credentials” error",
    description: "Double-check for typos, caps lock, and extra spaces. If it persists, reset your password.",
  },
  {
    title: "OTP not arriving",
    description: "Confirm your mobile number has signal and isn't blocking automated messages, then request a new OTP after a minute.",
  },
  {
    title: "App stuck on loading",
    description: "Check your internet connection, close and reopen the app, or update to the latest version.",
  },
  {
    title: "Account temporarily locked",
    description: "Multiple failed attempts can trigger a short security lock. Wait a few minutes or contact support to unlock it sooner.",
  },
];

export default function LoginGuidePage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Login Guide", href: "/login-guide" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Access Your Account"
          title="How to Log In to Raxi Win"
          description="A quick reference for signing in, recovering your password, and fixing common issues."
        />
      </div>

      <div className="mt-12">
        <StepList steps={loginSteps} />
      </div>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Password Help" title="Recovering a forgotten password" />
        <div className="mt-8">
          <StepList steps={recoverySteps} />
        </div>
      </section>

      <section id="issues" className="mt-20 scroll-mt-24">
        <SectionHeading align="left" eyebrow="Troubleshooting" title="Common login issues" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {commonIssues.map((issue) => (
            <GlassCard key={issue.title}>
              <h3 className="font-display text-lg font-semibold text-white">{issue.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{issue.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          title="Still can't get in?"
          description="Our support team is available 24x7 and can help verify your account."
          primaryLabel="Contact Support"
          primaryHref="/contact"
          secondaryLabel="Read FAQs"
          secondaryHref="/faq"
        />
      </div>
    </div>
  );
}
