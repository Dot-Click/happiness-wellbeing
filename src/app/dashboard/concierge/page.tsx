"use client";

import { Search, Plus, ChevronDown } from "lucide-react";
import Image from "next/image";

type Concierge = {
  name: string;
  avatar: string | null;
  specialization: string;
  capacity: string;
  status: string;
};

const CONCIERGES: Concierge[] = [
  {
    name: "Marcus Reed",
    avatar: "/figma/avatar-marcus.png",
    specialization: "Medical & International Care",
    capacity: "3 / 6",
    status: "Available",
  },
  {
    name: "Unassigned",
    avatar: null,
    specialization: "Corporate & Logistics",
    capacity: "5 / 6",
    status: "Available",
  },
  {
    name: "Léa Moreau",
    avatar: "/figma/avatar-daniel2.png",
    specialization: "Wellness & Serenity",
    capacity: "2 / 5",
    status: "Available",
  },
  {
    name: "Unassigned",
    avatar: null,
    specialization: "Executive Logistics",
    capacity: "4 / 4",
    status: "Available",
  },
];

export default function ConciergePage() {
  return (
    <div className="p-8">
      {/* Workspace header + controls */}
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        <div className="mb-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#222]/45">
            Management Workspace
          </h2>
          <p className="mt-1.5 text-base text-[#222]/60">
            Internal operational staff, capacity, specialization and mission
            assignment.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
            <input
              placeholder="Search concierge..."
              className="h-11 w-full rounded-xl border border-black/10 bg-[#faf6f0] pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
            />
          </div>
          <div className="relative w-40 shrink-0">
            <select className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-4 pr-9 text-sm text-[#222]/60 outline-none">
              <option>All statuses</option>
              <option>Available</option>
              <option>Busy</option>
              <option>On leave</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-xl bg-[#761c37] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Concierge
          </button>
        </div>
      </div>

      {/* Concierge table */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
              <th className="px-6 py-4">Name</th>
              <th className="px-4 py-4">Specialization</th>
              <th className="px-4 py-4">Capacity</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {CONCIERGES.map((c, i) => (
              <tr key={i} className="border-b border-black/5 last:border-0">
                <td className="px-6 py-4">
                  {c.avatar ? (
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
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-[#222]/30">—</span>
                      <span className="text-[#222]/50">{c.name}</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-4 text-[#222]/70">
                  {c.specialization}
                </td>
                <td className="px-4 py-4 text-[#222]/60">{c.capacity}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#E6F9F0] px-3 py-1 text-xs font-medium text-[#0CAF72]">
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg bg-[#761c37] px-4 py-1.5 text-sm font-medium text-white transition hover:brightness-110">
                      Open Profile
                    </button>
                    <button className="rounded-lg border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-[#222] transition hover:bg-black/5">
                      Message
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
