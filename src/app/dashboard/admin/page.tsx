"use client";

import {
  Search,
  Plus,
  Pencil,
  ShieldOff,
  Send,
  Mail,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "TOTAL ADMINS",
    value: "6",
    change: "Across 3 roles",
    color: "#761c37",
  },
  {
    label: "ACTIVE SESSIONS",
    value: "4",
    change: "Currently online",
    color: "#c98a4b",
  },
  {
    label: "PENDING INVITES",
    value: "2",
    change: "Awaiting acceptance",
    color: "#E5484D",
  },
  {
    label: "LAST AUDIT",
    value: "2h ago",
    change: "By Super Admin",
    color: "#0CAF72",
  },
];

const ADMINS = [
  {
    name: "Will Bettelhiem",
    avatar: "/figma/avatar-daniel.png",
    email: "will_bettelhiem@gmail.com",
    role: "Super Admin",
    lastActive: "2 min ago",
    status: "Active",
  },
  {
    name: "Sarah Mitchell",
    avatar: "/figma/avatar-daniel2.png",
    email: "sarah.m@wellness.com",
    role: "Operations Lead",
    lastActive: "15 min ago",
    status: "Active",
  },
  {
    name: "James Cooper",
    avatar: "/figma/avatar-marcus.png",
    email: "james.c@wellness.com",
    role: "Concierge Manager",
    lastActive: "1h ago",
    status: "Active",
  },
  {
    name: "Emma Laurent",
    avatar: "/figma/avatar-daniel.png",
    email: "emma.l@wellness.com",
    role: "Finance Lead",
    lastActive: "3h ago",
    status: "Active",
  },
  {
    name: "Léo Moreau",
    avatar: "/figma/avatar-daniel2.png",
    email: "leo.m@wellness.com",
    role: "Support Agent",
    lastActive: "Offline",
    status: "Inactive",
  },
  {
    name: "Sophia Laurent",
    avatar: "/figma/avatar-marcus.png",
    email: "sophia.l@wellness.com",
    role: "Operations Lead",
    lastActive: "Invited",
    status: "Pending",
  },
];

function roleColor(role: string) {
  switch (role) {
    case "Super Admin":
      return "bg-[#761c37]/10 text-[#761c37]";
    case "Operations Lead":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "Concierge Manager":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Finance Lead":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Support Agent":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Inactive":
      return "bg-[#F0F0F0] text-[#666]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function AdminPage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Access Control
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Manage administrator accounts, roles and permission levels.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#761c37] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Add Administrator
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

        {/* Admin table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Administrator Directory
              </h2>
              <p className="text-xs text-[#222]/50">
                All admin accounts and their access levels
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search admins..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All roles</option>
                <option>Super Admin</option>
                <option>Operations Lead</option>
                <option>Concierge Manager</option>
                <option>Finance Lead</option>
                <option>Support Agent</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Admin</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Last Active</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ADMINS.map((a, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={a.avatar}
                          alt={a.name}
                          width={32}
                          height={32}
                          className="size-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-[#222]">
                          {a.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        <Mail className="size-3.5 shrink-0" />
                        <span className="text-xs">{a.email}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${roleColor(a.role)}`}
                      >
                        {a.role}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#222]/50">
                      {a.lastActive}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(a.status)}`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        {a.status === "Pending" ? (
                          <button
                            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#c98a4b] transition hover:bg-[#FFF4E5]"
                            title="Resend invite"
                          >
                            <Send className="size-3.5" />
                            Resend
                          </button>
                        ) : (
                          <>
                            <button
                              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                              title="Edit admin"
                            >
                              <Pencil className="size-3.5" />
                              Edit
                            </button>
                            <button
                              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#E5484D]/70 transition hover:bg-[#FFF0F0]"
                              title="Revoke access"
                            >
                              <ShieldOff className="size-3.5" />
                              Revoke
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-black/5 px-6 py-3">
            <p className="text-xs text-[#222]/50">Showing 1–6 of 6</p>
            <div className="flex items-center gap-1">
              <button className="grid size-8 place-items-center rounded-lg bg-[#761c37] text-xs font-medium text-white">
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
