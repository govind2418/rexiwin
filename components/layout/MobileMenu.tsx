"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className="h-5 w-5"
          aria-hidden="true"
        >
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 border-t border-gold/10 bg-bg/98 px-6 py-6 shadow-2xl"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-luxury px-3 py-3 text-base text-text-secondary hover:bg-surface hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="block rounded-luxury px-3 py-3 text-base text-text-secondary hover:bg-surface hover:text-white"
              >
                Search
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href={siteConfig.accountUrl}
              onClick={() => setOpen(false)}
              className="rounded-full border border-gold/30 px-5 py-3 text-center text-sm font-semibold text-gold"
            >
              Login
            </a>
            <a
              href={siteConfig.accountUrl}
              onClick={() => setOpen(false)}
              className="btn-gold rounded-full px-5 py-3 text-center text-sm font-semibold"
            >
              Register
            </a>
            <Link
              href="/download-app"
              onClick={() => setOpen(false)}
              className="rounded-full bg-surface px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Download App
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
