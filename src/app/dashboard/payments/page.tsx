"use client";

import {
  Search,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Clock,
} from "lucide-react";

const STATS = [
  { value: "184,000", unit: "/AED", sub: "8 successful", icon: CheckCircle2 },
  { value: "42,000", unit: "/AED", sub: "3 require action", icon: AlertTriangle },
  { value: "0.0", unit: "/AED", sub: "No open refunds", icon: RotateCcw },
  { value: "17", unit: "/AED", sub: "4 due this week", icon: Clock },
];

type Payment = {
  ref: string;
  client: string;
  mission: string;
  amount: string;
  method: string;
  status: string;
};

const PAYMENTS: Payment[] = [
  {
    ref: "PAY-8834",
    client: "Alexander Morgan",
    mission: "HE-260925-0847",
    amount: "AED 13,350",
    method: "PayPal · PP-9K84",
    status: "Paid",
  },
  {
    ref: "PAY-8835",
    client: "Alexander Morgan",
    mission: "HE-260925-0847",
    amount: "USD 45,000",
    method: "PayPal · Pending",
    status: "Pending",
  },
  {
    ref: "PAY-8836",
    client: "Daniel Williamson",
    mission: "CB-261001-0091",
    amount: "USD 16,800",
    method: "PayPal · PP-7M21",
    status: "Paid",
  },
  {
    ref: "PAY-8837",
    client: "Wellness Partner",
    mission: "HE-260925-0847",
    amount: "USD 42,000",
    method: "PayPal · Pending",
    status: "Pending",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Paid":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function PaymentsPage() {
  return (
    <div className="px-3 py-8">
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.sub}
              className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5"
            >
              <p className="text-3xl font-semibold text-[#222]">
                {stat.value}
                <span className="ml-1 text-sm font-normal text-[#222]/40">
                  {stat.unit}
                </span>
              </p>
              <p className="mt-2 text-xs text-[#222]/50">{stat.sub}</p>
              <Icon className="absolute right-4 bottom-4 size-8 text-[#E5DFDF]" />
            </div>
          );
        })}
      </div>

      {/* Workspace header + search */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white p-6">
        <div className="mb-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#222]/45">
            Management Workspace
          </h2>
          <p className="mt-1.5 text-base text-[#222]/60">
            Reconcile payments, corporate billing tokens, invoices and refunds.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
          <input
            placeholder="Search payments..."
            className="h-11 w-full rounded-xl border border-black/10 bg-[#faf6f0] pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
          />
        </div>
      </div>

      {/* Payments table */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
              <th className="px-6 py-4">Reference</th>
              <th className="px-4 py-4">Client</th>
              <th className="px-4 py-4">Mission</th>
              <th className="px-4 py-4">Amount</th>
              <th className="px-4 py-4">Method</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {PAYMENTS.map((p, i) => (
              <tr key={i} className="border-b border-black/5 last:border-0">
                <td className="px-6 py-4 text-[#222]">{p.ref}</td>
                <td className="px-4 py-4 font-medium text-[#222]">
                  {p.client}
                </td>
                <td className="px-4 py-4 text-[#222]/60">{p.mission}</td>
                <td className="px-4 py-4 text-[#222]/70">{p.amount}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(p.status)}`}
                  >
                    {p.method}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(p.status)}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-[#222] transition hover:bg-black/5">
                      Edit
                    </button>
                    <button className="rounded-lg border border-[#E5484D]/20 bg-[#FFF0F0] px-4 py-1.5 text-sm font-medium text-[#E5484D] transition hover:bg-[#ffe3e3]">
                      Archive
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
