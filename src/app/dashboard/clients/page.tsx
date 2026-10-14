"use client";

import { Search, Plus, ChevronDown } from "lucide-react";
import Image from "next/image";

type Client = {
  name: string;
  avatar: string;
  tier: string;
  email: string;
  phone: string;
  region: string;
  status: string;
};

const CLIENTS: Client[] = [
  {
    name: "Ali Hamza",
    avatar: "/figma/avatar-daniel.png",
    tier: "VIP",
    email: "alexander@demo.com",
    phone: "+971 50 555 0188",
    region: "UAE",
    status: "Active",
  },
  {
    name: "Daniel Williamson",
    avatar: "/figma/avatar-daniel2.png",
    tier: "Corporate",
    email: "daniel@northstar.demo",
    phone: "+1 212 555 0132",
    region: "USA",
    status: "Active",
  },
  {
    name: "Olivia Bennett",
    avatar: "/figma/avatar-marcus.png",
    tier: "VIP",
    email: "olivia@demo.com",
    phone: "+44 7700 900123",
    region: "UK",
    status: "Active",
  },
  {
    name: "Amelia Reed",
    avatar: "/figma/avatar-daniel.png",
    tier: "Standard",
    email: "amelia@demo.com",
    phone: "+41 79 555 0210",
    region: "Switzerland",
    status: "Pending",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Inactive":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function ClientsPage() {
  return (
    <div className="px-3 py-8">
      {/* Workspace header + controls */}
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        <div className="mb-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#222]/45">
            Management Workspace
          </h2>
          <p className="mt-1.5 text-base text-[#222]/60">
            Client identity, tier, access and relationship management.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
            <input
              placeholder="Search clients..."
              className="h-11 w-full rounded-xl border border-black/10 bg-[#faf6f0] pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
            />
          </div>
          <div className="relative w-40 shrink-0">
            <select className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-4 pr-9 text-sm text-[#222]/60 outline-none">
              <option>All statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-xl bg-[#761c37] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Client
          </button>
        </div>
      </div>

      {/* Clients table */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
              <th className="px-6 py-4">Client</th>
              <th className="px-4 py-4">Tier</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Phone</th>
              <th className="px-4 py-4">Region</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {CLIENTS.map((c, i) => (
              <tr key={i} className="border-b border-black/5 last:border-0">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={c.avatar}
                      alt={c.name}
                      width={28}
                      height={28}
                      className="size-7 rounded-full object-cover"
                    />
                    <span className="font-medium text-[#222]">{c.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-[#222]/70">{c.tier}</td>
                <td className="px-4 py-4 text-[#222]/60">{c.email}</td>
                <td className="px-4 py-4 text-[#222]/60">{c.phone}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#E6F9F0] px-3 py-1 text-xs font-medium text-[#0CAF72]">
                    {c.region}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(c.status)}`}
                  >
                    {c.status}
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
