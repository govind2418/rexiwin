"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchIndex } from "@/lib/search-index";

export function SearchBox({ placeholder = "Search pages, guides, FAQs..." }: { placeholder?: string }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) || entry.description.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="site-search" className="sr-only">
        Search Raxi Win
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-gold/20 bg-surface px-5 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
      />
      {results.length > 0 ? (
        <ul className="glass-card absolute z-30 mt-2 w-full overflow-hidden !p-2">
          {results.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                onClick={() => setQuery("")}
                className="block rounded-luxury px-4 py-3 text-sm hover:bg-white/5"
              >
                <span className="block font-medium text-white">{entry.title}</span>
                <span className="block text-xs text-text-secondary">{entry.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
