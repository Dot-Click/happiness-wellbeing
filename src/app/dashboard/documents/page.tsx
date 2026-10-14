"use client";

import {
  Search,
  Plus,
  Eye,
  Download,
  FileText,
  Calendar,
} from "lucide-react";

const STATS = [
  {
    label: "TOTAL DOCUMENTS",
    value: "156",
    change: "Across all clients",
    color: "#761c37",
  },
  {
    label: "PENDING REVIEW",
    value: "9",
    change: "Awaiting verification",
    color: "#c98a4b",
  },
  {
    label: "EXPIRING SOON",
    value: "4",
    change: "Within 30 days",
    color: "#E5484D",
  },
  {
    label: "VERIFIED",
    value: "143",
    change: "91.6% of total",
    color: "#0CAF72",
  },
];

const DOCUMENTS = [
  {
    name: "Passport - Ali Hamza",
    client: "Ali Hamza",
    type: "Passport",
    uploaded: "Sep 12, 2026",
    expires: "Mar 15, 2031",
    status: "Verified",
  },
  {
    name: "Medical Report - Daniel Williamson",
    client: "Daniel Williamson",
    type: "Medical",
    uploaded: "Oct 1, 2026",
    expires: "Oct 1, 2027",
    status: "Verified",
  },
  {
    name: "Insurance Certificate - Olivia Bennett",
    client: "Olivia Bennett",
    type: "Insurance",
    uploaded: "Oct 5, 2026",
    expires: "Nov 5, 2026",
    status: "Pending",
  },
  {
    name: "Power of Attorney - Marcus Reed",
    client: "Marcus Reed",
    type: "Legal",
    uploaded: "Aug 20, 2026",
    expires: "Aug 20, 2027",
    status: "Verified",
  },
  {
    name: "Financial Statement - Sofia Martinez",
    client: "Sofia Martinez",
    type: "Financial",
    uploaded: "Jul 15, 2026",
    expires: "Sep 30, 2026",
    status: "Expired",
  },
  {
    name: "Travel Visa - Amelia Reed",
    client: "Amelia Reed",
    type: "Passport",
    uploaded: "Oct 8, 2026",
    expires: "Dec 8, 2026",
    status: "Pending",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Verified":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Expired":
      return "bg-[#FFF0F0] text-[#E5484D]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function DocumentsPage() {
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
              Secure document storage, verification and compliance management.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#761c37] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Upload Secure Document
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

        {/* Documents table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Document Registry
              </h2>
              <p className="text-xs text-[#222]/50">
                All client documents and certifications
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search documents..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Expired</option>
              </select>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All types</option>
                <option>Passport</option>
                <option>Medical</option>
                <option>Insurance</option>
                <option>Legal</option>
                <option>Financial</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Document</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Uploaded</th>
                  <th className="px-4 py-3">Expires</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENTS.map((d, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="grid size-8 place-items-center rounded-lg bg-[#faf6f0]">
                          <FileText className="size-4 text-[#761c37]" />
                        </div>
                        <span className="font-medium text-[#222]">
                          {d.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/70">
                      {d.client}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="rounded-full bg-[#F0F0F0] px-2.5 py-1 text-xs font-medium text-[#666]">
                        {d.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/50">
                        <Calendar className="size-3.5 shrink-0" />
                        <span className="text-xs">{d.uploaded}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/50">
                        <Calendar className="size-3.5 shrink-0" />
                        <span className="text-xs">{d.expires}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(d.status)}`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="View document"
                        >
                          <Eye className="size-3.5" />
                          View
                        </button>
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="Download document"
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
              Showing 1–6 of 156 documents
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
                26
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
