"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-20 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-surface text-gold shadow-lg transition-colors hover:border-gold sm:bottom-6 sm:left-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
