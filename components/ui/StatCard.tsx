import type { ReactNode } from "react";

export function StatCard({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="glass-card flex flex-col items-center gap-3 px-6 py-8 text-center">
      <span className="text-gold" aria-hidden="true">
        {icon}
      </span>
      <span className="font-display text-2xl sm:text-3xl font-semibold text-white">{value}</span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}
