"use client";

import {
  Search,
  Plus,
  Eye,
  Download,
  CreditCard,
  Calendar,
} from "lucide-react";

const STATS = [
  {
    label: "TOTAL REVENUE",
    value: "$1.2M",
    change: "This quarter",
    color: "#761c37",
  },
  {
    label: "PENDING INVOICES",
    value: "12",
    change: "Worth $48,200",
    color: "#c98a4b",
  },
  {
    label: "OVERDUE",
    value: "3",
    change: "Action required",
    color: "#E5484D",
  },
  {
    label: "COLLECTION RATE",
    value: "96.8%",
    change: "+2.1% vs last quarter",
    color: "#0CAF72",
  },
];

const TRANSACTIONS = [
  {
    invoice: "INV-2026-0847",
    client: "Ali Hamza",
    service: "Executive Health 360",
    amount: "AED 45,000",
    date: "Oct 10, 2026",
    status: "Paid",
  },
  {
    invoice: "INV-2026-0848",
    client: "Daniel Williamson",
    service: "Corporate Buddy Package",
    amount: "USD 12,500",
    date: "Oct 8, 2026",
    status: "Pending",
  },
  {
    invoice: "INV-2026-0849",
    client: "Olivia Bennett",
    service: "Executive Serenity Retreat",
    amount: "USD 28,750",
    date: "Oct 7, 2026",
    status: "Paid",
  },
  {
    invoice: "INV-2026-0850",
    client: "Marcus Reed",
    service: "Private Preventive Assessment",
    amount: "CHF 18,200",
    date: "Oct 5, 2026",
    status: "Overdue",
  },
  {
    invoice: "INV-2026-0851",
    client: "Sofia Martinez",
    service: "Luxury Wellness Journey",
    amount: "USD 34,600",
    date: "Oct 3, 2026",
    status: "Paid",
  },
  {
    invoice: "INV-2026-0852",
    client: "Henrik Larsson",
    service: "Executive Check-Up Programme",
    amount: "AED 22,400",
    date: "Oct 1, 2026",
    status: "Pending",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Paid":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Overdue":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Refunded":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function PaymentsPage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Financial Overview
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Track payments, invoices and billing across all client accounts.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Create Invoice
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-5"
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: stat.color }}
              >
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-[#222]">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-[#222]/50">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Transactions table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Transaction History
              </h2>
              <p className="text-xs text-[#222]/50">
                All payments and billing records
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search invoices..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Overdue</option>
                <option>Refunded</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Invoice</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((t, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <CreditCard className="size-3.5 shrink-0 text-[#761c37]" />
                        <span className="font-medium text-[#222]">
                          {t.invoice}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#222]">
                      {t.client}
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/50">
                      {t.service}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#222]">
                      {t.amount}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/50">
                        <Calendar className="size-3.5 shrink-0" />
                        <span className="text-xs">{t.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(t.status)}`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="View invoice"
                        >
                          <Eye className="size-3.5" />
                          View
                        </button>
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/40 transition hover:bg-black/5"
                          title="Download invoice"
                        >
                          <Download className="size-3.5" />
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-black/5 px-6 py-3">
            <p className="text-xs text-[#222]/50">
              Showing 1–6 of 89 invoices
            </p>
            <div className="flex items-center gap-1">
              <button className="grid size-8 place-items-center rounded-lg bg-[#761c37] text-xs font-medium text-white">
                1
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                2
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                3
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                ...
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                15
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
