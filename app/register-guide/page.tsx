import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTASection } from "@/components/ui/CTASection";
import { StepList } from "@/components/guides/StepList";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Raxi Register Guide — Create Your Account",
  description:
    "A simple, step-by-step Raxi Win register walkthrough for creating your Raxi account, setting it up correctly, and completing verification.",
  path: "/register-guide",
  keywords: [
    "Raxi Win Register",
    "Raxi Register",
    "Raxi Win Sign Up",
    "Raxi Game Register",
    "Rexi Game Register",
    "Raxi Win Account",
  ],
});

const registerSteps = [
  {
    title: "Tap Register",
    description: "From the home screen or app, select Register to begin creating your account.",
  },
  {
    title: "Enter your mobile number",
    description: "Provide an active mobile number — this becomes your primary login identifier and is used for OTP verification.",
  },
  {
    title: "Create a strong password",
    description: "Choose a password with a mix of letters, numbers, and symbols. Avoid reusing passwords from other sites.",
  },
  {
    title: "Confirm the OTP",
    description: "Enter the one-time password sent to your mobile number to confirm it belongs to you.",
  },
  {
    title: "Complete your profile",
    description: "Add your email address and any additional details requested so your account is ready to use.",
  },
  {
    title: "Review and accept the terms",
    description: "Read the Terms & Conditions and Responsible Gaming notice, then confirm you're 18 or older to finish registration.",
  },
];

const verificationTips = [
  {
    title: "Use accurate information",
    description: "Details that don't match your identification can delay verification later, especially for withdrawals.",
  },
  {
    title: "Keep your OTP private",
    description: "Never share your OTP with anyone, including someone claiming to be Raxi Win support.",
  },
  {
    title: "Verify early",
    description: "Complete any identity verification steps soon after registering so your account is fully ready when you want to withdraw.",
  },
  {
    title: "One account per person",
    description: "Creating multiple accounts violates our Terms & Conditions and can result in restrictions.",
  },
];

export default function RegisterGuidePage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Register Guide", href: "/register-guide" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={howToSchema({
          name: "How to Register on Raxi Win",
          description: "Step-by-step Raxi Win register process, from opening the sign-up screen to completing verification.",
          steps: registerSteps,
        })}
      />
      <Breadcrumb items={crumbs} />

      <div className="mt-8">
        <SectionHeading
          align="left"
          as="h1"
          eyebrow="Account Setup"
          title="How to Register on Raxi Win"
          description="Creating an account takes just a few minutes. Follow these steps in order for a smooth setup."
        />
      </div>

      <div className="mt-12">
        <StepList steps={registerSteps} />
      </div>

      <section className="mt-20">
        <SectionHeading align="left" eyebrow="Verification" title="Tips for a smooth account setup" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {verificationTips.map((tip) => (
            <GlassCard key={tip.title}>
              <h3 className="font-display text-lg font-semibold text-white">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{tip.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Eligibility reminder</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Registration is open to individuals aged 18 and above in regions where real-money gaming is
          legally permitted. By registering, you confirm the details you provide are accurate and that
          you have read our{" "}
          <a href="/terms-conditions" className="text-gold hover:underline">
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a href="/responsible-gaming" className="text-gold hover:underline">
            Responsible Gaming
          </a>{" "}
          notice.
        </p>
      </section>

      <div className="mt-20">
        <CTASection
          title="Account created? Here's what's next"
          description="Download the app for the fastest experience, or head straight to the login guide."
          primaryLabel="Download App"
          primaryHref="/download-app"
          secondaryLabel="Login Guide"
          secondaryHref="/login-guide"
        />
      </div>
    </div>
  );
}
