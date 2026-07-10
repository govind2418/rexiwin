import Link from "next/link";

export type Crumb = {
  name: string;
  href: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-text-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="text-gold">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
