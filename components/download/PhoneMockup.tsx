const screens = [
  { label: "Home Dashboard", accent: "from-primary/30 to-transparent" },
  { label: "Secure Login", accent: "from-gold/25 to-transparent" },
  { label: "Results History", accent: "from-primary/20 to-transparent" },
];

/**
 * Pure-CSS phone frame illustrations standing in for app screenshots.
 * Avoids shipping raster screenshots while still conveying the app UI.
 */
export function PhoneMockup() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      {screens.map((screen) => (
        <div key={screen.label} className="flex flex-col items-center gap-3">
          <div className="relative h-72 w-36 rounded-[28px] border border-gold/20 bg-surface p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.8)] sm:h-80 sm:w-40">
            <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/60" />
            <div
              className={`h-full w-full rounded-[20px] bg-gradient-to-b ${screen.accent} bg-bg-soft p-3`}
            >
              <div className="h-3 w-16 rounded-full bg-white/10" />
              <div className="mt-4 h-20 w-full rounded-2xl border border-gold/15 bg-white/5" />
              <div className="mt-3 h-3 w-3/4 rounded-full bg-white/10" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
              <div className="mt-6 h-9 w-full rounded-full bg-gradient-to-r from-gold to-gold-dark" />
            </div>
          </div>
          <span className="text-xs text-text-secondary">{screen.label}</span>
        </div>
      ))}
    </div>
  );
}
