"use client";

import { Search } from "lucide-react";

interface FilterOption {
  label: string;
  options: string[];
}

interface TableShellProps {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  filters?: FilterOption[];
  children: React.ReactNode;
  pagination?: { showing: string; pages: number; current?: number };
}

export function TableShell({
  title,
  subtitle,
  searchPlaceholder,
  filters,
  children,
  pagination,
}: TableShellProps) {
  const currentPage = pagination?.current ?? 1;

  return (
    <div className="rounded-2xl border border-black/5 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
        <div>
          <h2 className="text-base font-semibold text-[#222]">{title}</h2>
          <p className="text-xs text-[#222]/50">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
            <input
              placeholder={searchPlaceholder}
              className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
            />
          </div>
          {filters?.map((filter) => (
            <select
              key={filter.label}
              className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none"
            >
              <option>{filter.label}</option>
              {filter.options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          ))}
        </div>
      </div>

      {/* Table content */}
      <div className="overflow-x-auto">{children}</div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between border-t border-black/5 px-6 py-3">
          <p className="text-xs text-[#222]/50">{pagination.showing}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`grid size-8 place-items-center rounded-lg text-sm transition ${
                    page === currentPage
                      ? "bg-[#761c37] font-medium text-white"
                      : "text-[#222]/50 hover:bg-black/5"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
