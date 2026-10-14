"use client";

interface Stat {
  label: string;
  value: string;
  sub: string;
  color?: string;
}

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-black/5 bg-white p-5"
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: stat.color ?? "#c98a4b" }}
          >
            {stat.label}
          </p>
          <p className="mt-2 text-3xl font-semibold text-[#222]">
            {stat.value}
          </p>
          <p className="mt-1 text-xs text-[#222]/50">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
}
