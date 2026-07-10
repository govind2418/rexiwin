"use client";

import { useMemo, useState } from "react";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import type { FaqItem } from "@/lib/faq-data";

export function FAQBrowser({
  items,
  categories,
}: {
  items: FaqItem[];
  categories: readonly string[];
}) {
  const [active, setActive] = useState<string>("All");
  const tabs = ["All", ...categories];

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((item) => item.category === active)),
    [active, items],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="FAQ categories">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
              active === tab
                ? "border-gold bg-gold/10 text-gold"
                : "border-border text-text-secondary hover:border-gold/40 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <FAQAccordion items={filtered} />
      </div>
    </div>
  );
}
