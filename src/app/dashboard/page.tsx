"use client";

import {
  Search,
  TrendingUp,
  CircleDot,
  ArrowUpRight,
  ArrowRight,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "VIP CLIENTS",
    value: "48",
    change: "+6 this month",
    trend: "up" as const,
    color: "#c98a4b",
  },
  {
    label: "PENDING REQUESTS",
    value: "7",
    change: "Ready to review",
    trend: "neutral" as const,
    color: "#761c37",
  },
  {
    label: "ACTIVE EXPERIENCES",
    value: "9",
    change: "Across 4 cities",
    trend: "up" as const,
    color: "#0CAF72",
  },
  {
    label: "CLIENT SATISFACTION",
    value: "98.4%",
    change: "+1.2% vs last quarter",
    trend: "up" as const,
    color: "#c98a4b",
  },
];

const RECENT_MISSIONS = [
  {
    client: "Ali Hamza",
    avatar: "/figma/avatar-daniel.png",
    mission: "Executive Health 360",
    type: "Health & Wellness",
    status: "In Progress",
    priority: "UAE",
    date: "Oct 10, 2026",
  },
  {
    client: "Daniel Williamson",
    avatar: "/figma/avatar-daniel2.png",
    mission: "Corporate Buddy Package",
    type: "Corporate & Logistics",
    status: "Confirmed",
    priority: "USA",
    date: "Oct 8, 2026",
  },
  {
    client: "Olivia Bennett",
    avatar: "/figma/avatar-marcus.png",
    mission: "Executive Serenity Retreat",
    type: "Wellness & Serenity",
    status: "Pending",
    priority: "UK",
    date: "Oct 12, 2026",
  },
  {
    client: "Marcus Reed",
    avatar: "/figma/avatar-daniel.png",
    mission: "Private Preventive Assessment",
    type: "Medical & International Care",
    status: "Completed",
    priority: "Switzerland",
    date: "Oct 5, 2026",
  },
  {
    client: "Amelia Reed",
    avatar: "/figma/avatar-daniel2.png",
    mission: "International Medical Concierge",
    type: "Executive Logistics",
    status: "In Progress",
    priority: "Germany",
    date: "Oct 9, 2026",
  },
];

const UPCOMING = [
  {
    time: "10:00 AM",
    title: "Health screening — Ali Hamza",
    location: "Partner Clinic, Dubai",
  },
  {
    time: "1:30 PM",
    title: "Concierge debrief — Daniel Williamson",
    location: "Virtual Meeting",
  },
  {
    time: "4:00 PM",
    title: "Serenity intake — Olivia Bennett",
    location: "Wellness Centre, London",
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

export default function DashboardPage() {
  return (
    <>
      <div className="px-3 pt-6 pb-8">
        {/* Hero banner */}
        <div className="relative mb-8 overflow-hidden rounded-2xl">
          <Image
            src="/figma/superadmin-building.png"
            alt=""
            width={1200}
            height={340}
            className="h-[300px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#761c37]/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h2 className="max-w-lg font-serif text-4xl font-medium leading-tight text-white">
              How can we make your
              <br />
              experience effortless today?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/70">
              One private command center for client requests, concierge
              allocation, partner resources and service delivery.
            </p>
            <button className="mt-4 flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-white to-[#FFF1DE] px-8 py-2.5 text-sm font-medium text-[#222] transition hover:brightness-95">
              Review Priority Queue
              <ArrowRight className="size-4" />
            </button>
          </div>
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
              <div className="mt-2 flex items-center gap-1.5 text-xs text-[#222]/50">
                {stat.trend === "up" && (
                  <TrendingUp className="size-3.5 text-[#0CAF72]" />
                )}
                {stat.trend === "neutral" && (
                  <CircleDot className="size-3.5 text-[#c98a4b]" />
                )}
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
          {/* Recent Missions table */}
          <div className="rounded-2xl border border-black/5 bg-white">
            <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
              <div>
                <h2 className="text-base font-semibold text-[#222]">
                  Recent Missions
                </h2>
                <p className="text-xs text-[#222]/50">
                  Latest client missions and assignments
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                  <input
                    placeholder="Search missions..."
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
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                    <th className="px-6 py-3">Client</th>
                    <th className="px-4 py-3">Mission</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Priority</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_MISSIONS.map((m, i) => (
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
                        <span className="rounded-full bg-[#FFF4E5] px-2.5 py-1 text-xs font-medium text-[#c98a4b]">
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
                      <td className="px-4 py-3.5 text-[#222]/50">{m.date}</td>
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
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <h3 className="text-sm font-semibold text-[#222]">
                Upcoming Today
              </h3>
              <p className="text-xs text-[#222]/50">
                Scheduled appointments and meetings
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {UPCOMING.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-black/5 bg-[#faf6f0] p-3"
                  >
                    <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-[#761c37]/10 text-[#761c37]">
                      <Clock className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[#c98a4b]">
                        {item.time}
                      </p>
                      <p className="text-sm font-medium text-[#222]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#222]/50">
                        {item.location}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#222]/30" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <h3 className="text-sm font-semibold text-[#222]">
                Performance Snapshot
              </h3>
              <p className="mb-4 text-xs text-[#222]/50">This quarter</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#222]/70">
                    Missions Completed
                  </span>
                  <span className="text-sm font-semibold text-[#222]">142</span>
                </div>
                <div className="h-2 rounded-full bg-[#faf6f0]">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#761c37] to-[#913f58]"
                    style={{ width: "78%" }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-[#222]/70">Revenue Target</span>
                  <span className="text-sm font-semibold text-[#222]">
                    $1.2M
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#faf6f0]">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#c98a4b] to-[#f4c481]"
                    style={{ width: "64%" }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-[#222]/70">
                    Client Retention
                  </span>
                  <span className="text-sm font-semibold text-[#0CAF72]">
                    96%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#faf6f0]">
                  <div
                    className="h-2 rounded-full bg-[#0CAF72]"
                    style={{ width: "96%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
