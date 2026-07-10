import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return <Tag className={`glass-card p-6 sm:p-8 ${className}`}>{children}</Tag>;
}
