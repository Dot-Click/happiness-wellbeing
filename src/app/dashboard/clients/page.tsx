"use client";

import {
  Search,
  Plus,
  Pencil,
  Archive,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "TOTAL CLIENTS",
    value: "124",
    change: "+12 this quarter",
    color: "#761c37",
  },
  {
    label: "VIP CLIENTS",
    value: "48",
    change: "38.7% of total",
    color: "#c98a4b",
  },
  {
    label: "CORPORATE",
    value: "31",
    change: "25% of total",
    color: "#0CAF72",
  },
  {
    label: "PENDING ONBOARDING",
    value: "5",
    change: "Awaiting intake",
    color: "#E5484D",
  },
];

const CLIENTS = [
  {
    name: "Ali Hamza",
    avatar: "/figma/avatar-daniel.png",
    tier: "VIP",
    email: "ali.hamza@email.com",
    phone: "+971 50 123 4567",
    priority: "UAE",
    status: "Active",
  },
  {
    name: "Daniel Williamson",
    avatar: "/figma/avatar-daniel2.png",
    tier: "Corporate",
    email: "daniel.w@corpmail.com",
    phone: "+1 212 555 0199",
    priority: "USA",
    status: "Active",
  },
  {
    name: "Olivia Bennett",
    avatar: "/figma/avatar-marcus.png",
    tier: "VIP",
    email: "olivia.b@email.co.uk",
    phone: "+44 20 7946 0958",
    priority: "UK",
    status: "Active",
  },
  {
    name: "Amelia Reed",
    avatar: "/figma/avatar-daniel2.png",
    tier: "Standard",
    email: "amelia.reed@mail.ch",
    phone: "+41 44 668 1800",
    priority: "Switzerland",
    status: "Pending",
  },
  {
    name: "Sofia Martinez",
    avatar: "/figma/avatar-marcus.png",
    tier: "VIP",
    email: "sofia.m@email.es",
    phone: "+34 91 123 4567",
    priority: "Spain",
    status: "Active",
  },
  {
    name: "Henrik Larsson",
    avatar: "/figma/avatar-daniel.png",
    tier: "Corporate",
    email: "henrik.l@corp.se",
    phone: "+46 8 123 456 78",
    priority: "Sweden",
    status: "Active",
  },
  {
    name: "Marcus Reed",
    avatar: "/figma/avatar-daniel.png",
    tier: "VIP",
    email: "marcus.reed@email.ch",
    phone: "+41 44 668 1801",
    priority: "Switzerland",
    status: "Active",
  },
];

function tierColor(tier: string) {
  switch (tier) {
    case "VIP":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Corporate":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "Standard":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Inactive":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function ClientsPage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Management Workspace
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Client identity, tier, access and relationship management.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Client
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

        {/* Clients table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Client Directory
              </h2>
              <p className="text-xs text-[#222]/50">
                All registered clients and their profiles
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search clients..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All tiers</option>
                <option>VIP</option>
                <option>Corporate</option>
                <option>Standard</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Client</th>
                  <th className="px-4 py-3">Tier</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Priority</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {CLIENTS.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={c.avatar}
                          alt={c.name}
                          width={32}
                          height={32}
                          className="size-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-[#222]">
                          {c.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${tierColor(c.tier)}`}
                      >
                        {c.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        <Mail className="size-3.5 shrink-0" />
                        <span className="text-xs">{c.email}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        <Phone className="size-3.5 shrink-0" />
                        <span className="text-xs">{c.phone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="rounded-full bg-[#FFF4E5] px-2.5 py-1 text-xs font-medium text-[#c98a4b]">
                        {c.priority}
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
                          title="Edit client"
                        >
                          <Pencil className="size-3.5" />
                          Edit
                        </button>
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/40 transition hover:bg-black/5"
                          title="Archive client"
                        >
                          <Archive className="size-3.5" />
                          Archive
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
              Showing 1–7 of 124 clients
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
                18
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
