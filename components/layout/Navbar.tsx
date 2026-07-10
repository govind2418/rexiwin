import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { primaryNav } from "@/lib/nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login-guide"
            className="rounded-full border border-gold/30 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:border-primary hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/register-guide"
            className="btn-gold rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Register
          </Link>
          <Link
            href="/download-app"
            className="rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-surface-2"
          >
            Download App
          </Link>
        </div>

        <MobileMenu links={primaryNav} />
      </div>
    </header>
  );
}
