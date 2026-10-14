"use client";

import {
  Search,
  Plus,
  Pencil,
  Eye,
  AlertTriangle,
  FileText,
  User,
} from "lucide-react";

const STATS = [
  {
    label: "OPEN CASES",
    value: "6",
    change: "2 high priority",
    color: "#E5484D",
  },
  {
    label: "CONCIERGE CHANGE",
    value: "2",
    change: "Awaiting admin",
    color: "#c98a4b",
  },
  {
    label: "SLA AT RISK",
    value: "1",
    change: "Respond within 42 min",
    color: "#c98a4b",
  },
  {
    label: "RESOLVED TODAY",
    value: "5",
    change: "Median 38 min",
    color: "#0CAF72",
  },
];

const CASES = [
  {
    case: "SUP-1042",
    client: "Alexander Morgan",
    type: "Concierge concern",
    mission: "HE-260925-0847",
    concierge: "Sophia Laurent",
    status: "Under review",
  },
  {
    case: "SUP-1043",
    client: "Daniel Williamson",
    type: "Booking issue",
    mission: "CB-261001-0091",
    concierge: "James Cooper",
    status: "In progress",
  },
  {
    case: "SUP-1044",
    client: "Olivia Bennett",
    type: "Service complaint",
    mission: "SE-260921-1123",
    concierge: "Léo Moreau",
    status: "Escalated",
  },
  {
    case: "SUP-1045",
    client: "Marcus Reed",
    type: "Concierge change",
    mission: "HV-261003-0017",
    concierge: "Unassigned",
    status: "Open",
  },
  {
    case: "SUP-1046",
    client: "Ali Hamza",
    type: "SLA breach",
    mission: "HE-260925-0847",
    concierge: "Sophia Laurent",
    status: "Resolved",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Under review":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "In progress":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "Escalated":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Open":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Resolved":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function conciergeColor(concierge: string) {
  if (concierge === "Unassigned") {
    return "bg-[#F0F0F0] text-[#666]";
  }
  return "bg-[#E6F9F0] text-[#0CAF72]";
}

function typeColor(type: string) {
  switch (type) {
    case "Concierge concern":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Booking issue":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "Service complaint":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Concierge change":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "SLA breach":
      return "bg-[#FFF0F0] text-[#E5484D]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function SupportPage() {
  return (
    <>
      <div className="px-3 py-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Management Workspace
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Resolve client concerns, concierge-change requests and service
              issues with accountable ownership.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Create case
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

        {/* Support cases table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Support Cases
              </h2>
              <p className="text-xs text-[#222]/50">
                All open and resolved support tickets
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search cases..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Case</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Related Mission</th>
                  <th className="px-4 py-3">Concierge</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {CASES.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <AlertTriangle className="size-3.5 shrink-0 text-[#c98a4b]" />
                        <span className="font-medium text-[#222]">
                          {c.case}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#222]">
                      {c.client}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${typeColor(c.type)}`}
                      >
                        {c.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        <FileText className="size-3.5 shrink-0" />
                        <span className="text-xs">{c.mission}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${conciergeColor(c.concierge)}`}
                      >
                        <User className="size-3 shrink-0" />
                        {c.concierge}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(c.status)}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="Edit case"
                        >
                          <Pencil className="size-3.5" />
                          Edit
                        </button>
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/40 transition hover:bg-black/5"
                          title="View case"
                        >
                          <Eye className="size-3.5" />
                          View
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
              Showing 1–5 of 6 cases
            </p>
            <div className="flex items-center gap-1">
              <button className="grid size-8 place-items-center rounded-lg bg-[#761c37] text-xs font-medium text-white">
                1
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                2
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
