const particles = [
  { top: "10%", left: "14%", size: 6, delay: "0s" },
  { top: "20%", left: "82%", size: 4, delay: "1.2s" },
  { top: "46%", left: "6%", size: 5, delay: "2.1s" },
  { top: "6%", left: "44%", size: 3, delay: "3.2s" },
  { top: "36%", left: "60%", size: 5, delay: "2.6s" },
];

/**
 * Pure-CSS luxury illustration for the hero: a crest-style crown, a gold
 * casino-chip medallion, and a docked phone card previewing the app —
 * all drawn with CSS/SVG so the hero ships with zero image weight.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(214,40,40,0.35),transparent_70%)] blur-2xl" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-gold shadow-[0_0_12px_2px_rgba(244,197,66,0.6)]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Crown crest */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-1/2 top-[4%] h-9 w-9 -translate-x-1/2 text-gold drop-shadow-[0_0_10px_rgba(244,197,66,0.5)]"
      >
        <path
          fill="currentColor"
          d="M2 18h20l-2-10-5 4-3-7-3 7-5-4-2 10Z"
        />
        <rect x="2" y="19" width="20" height="2.5" rx="1" fill="currentColor" />
      </svg>

      {/* Casino-chip medallion */}
      <div className="absolute inset-x-[14%] top-[20%] bottom-[14%] rounded-full border-4 border-dashed border-gold/25 bg-gradient-to-br from-surface via-bg to-surface-2 shadow-[inset_0_0_60px_rgba(244,197,66,0.12)]">
        <div className="absolute inset-4 rounded-full border border-gold/20" />
        <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-gradient-to-br from-gold via-gold-soft to-gold-dark opacity-95 shadow-[0_0_60px_rgba(244,197,66,0.55)]">
          <span className="font-display text-3xl font-bold text-bg">R</span>
        </div>
      </div>

      {/* Docked phone card */}
      <div className="glass-card absolute bottom-[2%] right-0 w-[46%] -rotate-3 p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
        <div className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-black/50" />
        <div className="rounded-2xl bg-bg-soft p-3 pt-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-semibold text-white">
              Raxi<span className="gold-text">Win</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-gold" />
          </div>
          <div className="mt-3 flex gap-1.5">
            <div className="flex-1 rounded-full border border-gold/25 py-1.5 text-center text-[10px] text-gold">Login</div>
            <div className="flex-1 rounded-full bg-gradient-to-r from-gold to-gold-dark py-1.5 text-center text-[10px] font-semibold text-bg">
              Register
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
            <p className="text-[9px] uppercase tracking-wide text-gold">Daily Rewards</p>
            <p className="mt-1 text-[10px] text-text-secondary">Refreshed every day</p>
          </div>
          <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
            <p className="text-[9px] uppercase tracking-wide text-gold">Support</p>
            <p className="mt-1 text-[10px] text-text-secondary">Available 24x7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
