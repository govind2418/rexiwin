import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card group flex flex-col gap-4 p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 text-gold"
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}
