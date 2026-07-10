import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "gold" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<ButtonVariant, string> = {
  gold: "btn-gold",
  outline: "btn-outline",
  ghost: "text-text-secondary hover:text-white",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "gold", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
