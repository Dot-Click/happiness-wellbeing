"use client";

import {
  Search,
  Plus,
  Eye,
  Pencil,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "TOTAL PARTNERS",
    value: "31",
    change: "+4 this quarter",
    color: "#761c37",
  },
  {
    label: "ACTIVE CONTRACTS",
    value: "28",
    change: "90% of total",
    color: "#c98a4b",
  },
  {
    label: "SLA COMPLIANCE",
    value: "98.4%",
    change: "Healthy network",
    color: "#0CAF72",
  },
  {
    label: "PENDING REVIEW",
    value: "3",
    change: "Awaiting approval",
    color: "#E5484D",
  },
];

const PARTNERS = [
  {
    name: "Emirates Hospital Group",
    avatar: "/figma/avatar-daniel.png",
    type: "Medical",
    location: "Dubai, UAE",
    slaScore: "99.2%",
    contractEnd: "2027-03-15",
    status: "Active",
  },
  {
    name: "Swiss Wellness Institute",
    avatar: "/figma/avatar-marcus.png",
    type: "Wellness",
    location: "Zurich, Switzerland",
    slaScore: "97.8%",
    contractEnd: "2026-12-01",
    status: "Active",
  },
  {
    name: "London Executive Health",
    avatar: "/figma/avatar-daniel2.png",
    type: "Medical",
    location: "London, UK",
    slaScore: "98.5%",
    contractEnd: "2027-06-30",
    status: "Active",
  },
  {
    name: "Alpine Retreat Centers",
    avatar: "/figma/avatar-daniel.png",
    type: "Hospitality",
    location: "Multiple",
    slaScore: "96.1%",
    contractEnd: "2026-09-15",
    status: "Active",
  },
  {
    name: "NYC Corporate Services",
    avatar: "/figma/avatar-marcus.png",
    type: "Corporate",
    location: "New York, USA",
    slaScore: "99.0%",
    contractEnd: "2027-01-20",
    status: "Under Review",
  },
  {
    name: "Barcelona Wellness Spa",
    avatar: "/figma/avatar-daniel2.png",
    type: "Wellness",
    location: "Barcelona, Spain",
    slaScore: "94.5%",
    contractEnd: "2026-11-30",
    status: "Expiring",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Under Review":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Expiring":
      return "bg-[#FFF0F0] text-[#E5484D]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function PartnersPage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Partner Network
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Manage partner relationships, SLA tracking and resource allocation.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Partner
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

        {/* Partners table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Partner Directory
              </h2>
              <p className="text-xs text-[#222]/50">
                All registered partners and organizations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search partners..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>Active</option>
                <option>Under Review</option>
                <option>Expiring</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Partner</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">SLA Score</th>
                  <th className="px-4 py-3">Contract End</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PARTNERS.map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={p.avatar}
                          alt={p.name}
                          width={32}
                          height={32}
                          className="size-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-[#222]">
                          {p.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/50">
                      {p.type}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/50">
                        <MapPin className="size-3.5 shrink-0" />
                        <span className="text-xs">{p.location}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#222]/70">
                      {p.slaScore}
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/50">
                      {p.contractEnd}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(p.status)}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="View partner"
                        >
                          <Eye className="size-3.5" />
                          View
                        </button>
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="Edit partner"
                        >
                          <Pencil className="size-3.5" />
                          Edit
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
              Showing 1–6 of 31 partners
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
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
