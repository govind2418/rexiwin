import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-display text-xl sm:text-2xl font-bold tracking-wide text-white ${className}`}
      aria-label="Raxi Win home"
    >
      Raxi<span className="gold-text">Win</span>
    </Link>
  );
}
