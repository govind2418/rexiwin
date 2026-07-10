"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p role="status" className="text-sm text-gold">
        You&apos;re subscribed. Watch for updates from Raxi Win in your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full flex-1 rounded-full border border-gold/20 bg-surface px-5 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
      />
      <button type="submit" className="btn-gold shrink-0 rounded-full px-6 py-3 text-sm font-semibold">
        Subscribe
      </button>
    </form>
  );
}
