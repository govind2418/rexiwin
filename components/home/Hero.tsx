import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import { HeroVisual } from "@/components/home/HeroVisual";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="section-glow relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="rounded-full border border-gold/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Licensed &middot; Secure &middot; 18+
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Play Smarter with <span className="gold-text">Raxi Win</span>
          </h1>
          <p className="max-w-lg text-base text-text-secondary sm:text-lg">
            Fast &bull; Secure &bull; Mobile Friendly
          </p>
          <p className="max-w-lg text-sm text-text-secondary">
            Raxi Win — also searched as Raxi Game, Rexi Game, or simply Raxi — is a licensed
            real-money gaming platform. This site is the official source for Raxi login, Raxi Win
            register, and app download guidance.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/register-guide" variant="gold">
              Register Now
            </Button>
            <Button href="/download-app" variant="outline">
              Download App
            </Button>
            <Button href={siteConfig.social.telegram} variant="ghost">
              Telegram &rarr;
            </Button>
          </div>

          <div className="mt-4 grid w-full grid-cols-3 gap-3 sm:gap-4">
            <StatCard icon={<BoltIcon />} value="< 2s" label="Fast Access" />
            <StatCard icon={<GiftIcon />} value="Daily" label="Rewards" />
            <StatCard icon={<HeadsetIcon />} value="24x7" label="Support" />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8M2 7h20v5H2V7Zm10 0V21M12 7c-1.5 0-4-1-4-3a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 2-2.5 3-4 3Z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-7h3M4 18v-5h3v7H6a2 2 0 0 1-2-2Z" />
    </svg>
  );
}
