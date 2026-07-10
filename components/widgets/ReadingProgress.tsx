"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setScale(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="reading-progress fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-gold to-gold-soft"
        style={{ transform: `scaleX(${scale})`, transformOrigin: "left", width: "100%" }}
      />
    </div>
  );
}
