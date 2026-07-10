"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div role="status" className="glass-card p-6 text-center sm:p-8">
        <h3 className="font-display text-lg font-semibold text-white">Message received</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thanks for reaching out — our support team will get back to you shortly. For faster help, use
          Telegram or email directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-white">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-luxury border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-white">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-luxury border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-sm font-medium text-white">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="rounded-luxury border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
          placeholder="How can we help?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-luxury border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary focus:border-gold focus:outline-none"
          placeholder="Tell us what's going on..."
        />
      </div>

      <button type="submit" className="btn-gold self-start rounded-full px-8 py-3 text-sm font-semibold">
        Send Message
      </button>
    </form>
  );
}
