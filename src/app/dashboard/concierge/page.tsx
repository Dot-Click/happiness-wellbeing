"use client";

import {
  Search,
  Plus,
  Eye,
  Star,
  Globe,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "ACTIVE CONCIERGES",
    value: "8",
    change: "2 on leave",
    color: "#761c37",
  },
  {
    label: "MISSIONS ASSIGNED",
    value: "24",
    change: "Across 6 cities",
    color: "#c98a4b",
  },
  {
    label: "AVG RATING",
    value: "4.8",
    change: "Based on 156 reviews",
    color: "#0CAF72",
  },
  {
    label: "AVAILABLE NOW",
    value: "5",
    change: "Ready for assignment",
    color: "#3B6BCC",
  },
];

const CONCIERGES = [
  {
    name: "Sarah Mitchell",
    avatar: "/figma/avatar-marcus.png",
    specialty: "Medical & Wellness",
    languages: "English, Arabic",
    activeMissions: 5,
    rating: "4.9",
    status: "Active",
  },
  {
    name: "James Cooper",
    avatar: "/figma/avatar-daniel.png",
    specialty: "Corporate & Logistics",
    languages: "English, French",
    activeMissions: 4,
    rating: "4.8",
    status: "Active",
  },
  {
    name: "Emma Laurent",
    avatar: "/figma/avatar-marcus.png",
    specialty: "Wellness & Serenity",
    languages: "English, French, Spanish",
    activeMissions: 3,
    rating: "4.9",
    status: "Active",
  },
  {
    name: "Ahmed Al-Rashid",
    avatar: "/figma/avatar-daniel2.png",
    specialty: "Executive Logistics",
    languages: "English, Arabic, Urdu",
    activeMissions: 6,
    rating: "4.7",
    status: "Active",
  },
  {
    name: "Maria Gonzalez",
    avatar: "/figma/avatar-marcus.png",
    specialty: "International Medical",
    languages: "English, Spanish, Portuguese",
    activeMissions: 0,
    rating: "4.8",
    status: "On Leave",
  },
  {
    name: "Thomas Weber",
    avatar: "/figma/avatar-daniel.png",
    specialty: "Health & Prevention",
    languages: "English, German",
    activeMissions: 0,
    rating: "4.6",
    status: "On Leave",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "On Leave":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Inactive":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function ConciergePage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Team Management
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Manage concierge profiles, assignments and performance.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Concierge
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

        {/* Concierge table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Concierge Directory
              </h2>
              <p className="text-xs text-[#222]/50">
                All registered concierges and their profiles
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search concierges..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Concierge</th>
                  <th className="px-4 py-3">Specialty</th>
                  <th className="px-4 py-3">Languages</th>
                  <th className="px-4 py-3">Active Missions</th>
                  <th className="px-4 py-3">Rating</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {CONCIERGES.map((c, i) => (
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
                    <td className="px-4 py-3.5 text-[#222]/70">
                      {c.specialty}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        <Globe className="size-3.5 shrink-0" />
                        <span className="text-xs">{c.languages}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/70">
                      {c.activeMissions}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/70">
                        <Star className="size-3.5 shrink-0 fill-[#c98a4b] text-[#c98a4b]" />
                        <span className="text-xs font-medium">{c.rating}</span>
                      </div>
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
                          title="View concierge"
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
              Showing 1–6 of 8 concierges
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
