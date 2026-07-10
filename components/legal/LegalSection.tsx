import type { ReactNode } from "react";

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/5 py-8 first:pt-0 last:border-none">
      <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-text-secondary sm:text-base">
        {children}
      </div>
    </section>
  );
}
