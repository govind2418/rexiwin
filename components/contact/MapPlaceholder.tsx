export function MapPlaceholder() {
  return (
    <div className="glass-card relative flex h-64 flex-col items-center justify-center gap-3 overflow-hidden p-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,197,66,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,197,66,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-bg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      </span>
      <p className="relative text-sm text-text-secondary">Map preview unavailable in this view.</p>
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-sm font-semibold text-gold hover:underline"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
