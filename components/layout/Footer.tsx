import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "Telegram", href: siteConfig.social.telegram },
  { label: "Twitter", href: siteConfig.social.twitter },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-xs text-gold transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    {social.label.charAt(0)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed">
            18+ only. Play responsibly. Real-money gaming involves financial risk — please review our{" "}
            <Link href="/responsible-gaming" className="text-gold hover:underline">
              Responsible Gaming
            </Link>{" "}
            page before you play.
          </p>
        </div>
      </div>
    </footer>
  );
}
