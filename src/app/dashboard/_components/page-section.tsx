"use client";

import type { ReactNode } from "react";

interface PageSectionProps {
  title: string;
  subtitle: string;
  action?: { label: string; icon?: ReactNode; onClick?: () => void };
}

export function PageSection({ title, subtitle, action }: PageSectionProps) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
          {title}
        </h2>
        <p className="mt-1 text-sm text-[#222]/50">{subtitle}</p>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="flex items-center gap-2 rounded-xl bg-[#761c37] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#761c37]/90"
        >
          {action.icon}
          {action.label}
        </button>
      )}
    </div>
  );
}
