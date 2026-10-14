"use client";

import { Search, Plus, ChevronDown } from "lucide-react";

type Partner = {
  name: string;
  type: string;
  location: string;
  status: string;
};

const PARTNERS: Partner[] = [
  {
    name: "The Executive Medical Centre",
    type: "Clinic",
    location: "Dubai, UAE",
    status: "Verified",
  },
  {
    name: "Royal Diagnostic Laboratory",
    type: "Laboratory",
    location: "Dubai, UAE",
    status: "Verified",
  },
  {
    name: "Aurum Mobility",
    type: "Chauffeur Fleet",
    location: "GCC",
    status: "Verified",
  },
  {
    name: "Alpine Wellness Resort",
    type: "Wellness Partner",
    location: "Zürich, Switzerland",
    status: "Verified",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Verified":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF0F0] text-[#E5484D]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function PartnersPage() {
  return (
    <div className="px-3 py-8">
      {/* Workspace header + controls */}
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        <div className="mb-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#222]/45">
            Management Workspace
          </h2>
          <p className="mt-1.5 text-base text-[#222]/60">
            Manage clinics, laboratories, chauffeurs, translators and wellness
            partners.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
            <input
              placeholder="Search Partners..."
              className="h-11 w-full rounded-xl border border-black/10 bg-[#faf6f0] pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
            />
          </div>
          <div className="relative w-40 shrink-0">
            <select className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-4 pr-9 text-sm text-[#222]/60 outline-none">
              <option>All statuses</option>
              <option>Verified</option>
              <option>Pending</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-xl bg-[#761c37] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Partner
          </button>
        </div>
      </div>

      {/* Partners table */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
              <th className="px-6 py-4">Name</th>
              <th className="px-4 py-4">Type</th>
              <th className="px-4 py-4">Location</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {PARTNERS.map((p, i) => (
              <tr key={i} className="border-b border-black/5 last:border-0">
                <td className="px-6 py-4 font-medium text-[#222]">{p.name}</td>
                <td className="px-4 py-4 text-[#222]/70">{p.type}</td>
                <td className="px-4 py-4 text-[#222]/60">{p.location}</td>
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
