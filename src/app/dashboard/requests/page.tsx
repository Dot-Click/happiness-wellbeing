"use client";

import {
  Search,
  MoreHorizontal,
  Plus,
  Calendar,
  MapPin,
  User,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "TOTAL REQUESTS",
    value: "34",
    change: "+5 this week",
    color: "#761c37",
  },
  {
    label: "ACTIVE MISSIONS",
    value: "12",
    change: "Across 6 cities",
    color: "#c98a4b",
  },
  {
    label: "PENDING APPROVAL",
    value: "7",
    change: "Awaiting review",
    color: "#E5484D",
  },
  {
    label: "COMPLETED",
    value: "156",
    change: "This quarter",
    color: "#0CAF72",
  },
];

const MISSIONS = [
  {
    client: "Ali Hamza",
    avatar: "/figma/avatar-daniel.png",
    mission: "Executive Health 360",
    type: "Health & Wellness",
    status: "In Progress",
    priority: "High",
    location: "Dubai, UAE",
    date: "Oct 10, 2026",
    concierge: "Sarah Mitchell",
  },
  {
    client: "Daniel Williamson",
    avatar: "/figma/avatar-daniel2.png",
    mission: "Corporate Buddy Package",
    type: "Corporate & Logistics",
    status: "Confirmed",
    priority: "Medium",
    location: "New York, USA",
    date: "Oct 8, 2026",
    concierge: "James Cooper",
  },
  {
    client: "Olivia Bennett",
    avatar: "/figma/avatar-marcus.png",
    mission: "Executive Serenity Retreat",
    type: "Wellness & Serenity",
    status: "Pending",
    priority: "High",
    location: "London, UK",
    date: "Oct 12, 2026",
    concierge: "Emma Laurent",
  },
  {
    client: "Marcus Reed",
    avatar: "/figma/avatar-daniel.png",
    mission: "Private Preventive Assessment",
    type: "Medical & International Care",
    status: "Completed",
    priority: "Low",
    location: "Zurich, Switzerland",
    date: "Oct 5, 2026",
    concierge: "Sarah Mitchell",
  },
  {
    client: "Amelia Reed",
    avatar: "/figma/avatar-daniel2.png",
    mission: "International Medical Concierge",
    type: "Executive Logistics",
    status: "In Progress",
    priority: "High",
    location: "Berlin, Germany",
    date: "Oct 9, 2026",
    concierge: "James Cooper",
  },
  {
    client: "Sofia Martinez",
    avatar: "/figma/avatar-marcus.png",
    mission: "Luxury Wellness Journey",
    type: "Wellness & Serenity",
    status: "Confirmed",
    priority: "Medium",
    location: "Barcelona, Spain",
    date: "Oct 14, 2026",
    concierge: "Emma Laurent",
  },
  {
    client: "Henrik Larsson",
    avatar: "/figma/avatar-daniel.png",
    mission: "Executive Check-Up Programme",
    type: "Health & Wellness",
    status: "Pending",
    priority: "High",
    location: "Stockholm, Sweden",
    date: "Oct 15, 2026",
    concierge: "Sarah Mitchell",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "In Progress":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Confirmed":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Completed":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function priorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Medium":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Low":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function RequestsPage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Mission Control
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Track, manage and coordinate all client requests and active
              missions.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            New Request
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

        {/* Missions table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                All Missions
              </h2>
              <p className="text-xs text-[#222]/50">
                Active requests and mission assignments
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search requests..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>In Progress</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Client</th>
                  <th className="px-4 py-3">Mission</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Priority</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Concierge</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {MISSIONS.map((m, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={m.avatar}
                          alt={m.client}
                          width={32}
                          height={32}
                          className="size-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-[#222]">
                          {m.client}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/70">
                      {m.mission}
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/50">{m.type}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/50">
                        <MapPin className="size-3.5 shrink-0" />
                        <span className="text-xs">{m.location}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityColor(m.priority)}`}
                      >
                        {m.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(m.status)}`}
                      >
                        {m.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        <User className="size-3.5 shrink-0" />
                        <span className="text-xs">{m.concierge}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/50">
                        <Calendar className="size-3.5 shrink-0" />
                        <span className="text-xs">{m.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <button className="grid size-7 place-items-center rounded-lg text-[#222]/40 transition hover:bg-black/5">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-black/5 px-6 py-3">
            <p className="text-xs text-[#222]/50">
              Showing 1–7 of 34 requests
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
                4
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
