import type { FaqItem } from "@/lib/faq-data";

/**
 * Uses native <details>/<summary> so the accordion needs zero client-side
 * JavaScript, keyboard and screen-reader behaviour comes for free.
 */
export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="glass-card group open:border-gold/40 px-5 py-4 sm:px-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white marker:content-none">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
