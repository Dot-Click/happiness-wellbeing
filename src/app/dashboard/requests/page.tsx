"use client";

import { useState } from "react";
import {
  Search,
  MoreHorizontal,
  ChevronDown,
  Eye,
  UserPlus,
  Phone,
  XCircle,
} from "lucide-react";
import Image from "next/image";

type Request = {
  ref: string;
  client: string;
  clientAvatar: string;
  service: string;
  priority: string;
  concierge: string | null;
  conciergeAvatar: string | null;
  date: string;
  amount: string;
};

const REQUESTS: Request[] = [
  {
    ref: "HE-260925-0847",
    client: "Ali Hamza",
    clientAvatar: "/figma/avatar-daniel.png",
    service: "Executive Health 360",
    priority: "High",
    concierge: "Marcus Reed",
    conciergeAvatar: "/figma/avatar-marcus.png",
    date: "2026-10-08",
    amount: "AED 13,350",
  },
  {
    ref: "CB-261001-0091",
    client: "Daniel Williamson",
    clientAvatar: "/figma/avatar-daniel2.png",
    service: "Executive Travel & Logistics",
    priority: "Urgent",
    concierge: null,
    conciergeAvatar: null,
    date: "2026-10-12",
    amount: "USD 45,000",
  },
  {
    ref: "SE-260921-1123",
    client: "Olivia Bennett",
    clientAvatar: "/figma/avatar-marcus.png",
    service: "Alpine Serenity Retreat",
    priority: "Normal",
    concierge: "Léo Moreau",
    conciergeAvatar: "/figma/avatar-daniel2.png",
    date: "2026-11-14",
    amount: "USD 16,800",
  },
  {
    ref: "HV-261003-0017",
    client: "Amelia Reed",
    clientAvatar: "/figma/avatar-daniel.png",
    service: "Private Preventive Assessment",
    priority: "Normal",
    concierge: null,
    conciergeAvatar: null,
    date: "2026-10-20",
    amount: "AED 8,900",
  },
];

function priorityColor(priority: string) {
  switch (priority) {
    case "Urgent":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "High":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Normal":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

const MENU_ITEMS = [
  { label: "View Details", icon: Eye },
  { label: "Assign Concierge", icon: UserPlus },
  { label: "Contact Client", icon: Phone },
];

export default function RequestsPage() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="p-8">
      {/* Search + filters */}
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        {/* Section heading */}
        <div className="mb-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#222]/45">
            Management Workspace
          </h2>
          <p className="mt-1.5 text-base text-[#222]/60">
            Prioritize incoming requests, assign ownership and control mission
            progression.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
            <input
              placeholder="Search client, mission or reference..."
              className="h-11 w-full rounded-xl border border-black/10 bg-[#faf6f0] pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
            />
          </div>
          <div className="relative w-40 shrink-0">
            <select className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-4 pr-9 text-sm text-[#222]/60 outline-none">
              <option>All statuses</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
          </div>
          <div className="relative w-36 shrink-0">
            <select className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-4 pr-9 text-sm text-[#222]/60 outline-none">
              <option>All Tiers</option>
              <option>VIP</option>
              <option>Corporate</option>
              <option>Standard</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
          </div>
        </div>
      </div>

      {/* Requests table */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
              <th className="px-6 py-4">Reference</th>
              <th className="px-4 py-4">Client</th>
              <th className="px-4 py-4">Service</th>
              <th className="px-4 py-4">Priority</th>
              <th className="px-4 py-4">Concierge</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Amount</th>
              <th className="px-4 py-4" />
            </tr>
          </thead>
          <tbody>
            {REQUESTS.map((r, i) => (
              <tr key={i} className="border-b border-black/5 last:border-0">
                <td className="px-6 py-4 text-[#222]">{r.ref}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={r.clientAvatar}
                      alt={r.client}
                      width={28}
                      height={28}
                      className="size-7 rounded-full object-cover"
                    />
                    <span className="font-medium text-[#222]">{r.client}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-[#222]/70">{r.service}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${priorityColor(r.priority)}`}
                  >
                    {r.priority}
                  </span>
                </td>
                <td className="px-4 py-4">
                  {r.concierge ? (
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={r.conciergeAvatar as string}
                        alt={r.concierge}
                        width={28}
                        height={28}
                        className="size-7 rounded-full object-cover"
                      />
                      <span className="font-medium text-[#222]">
                        {r.concierge}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-[#222]/30">—</span>
                      <span className="text-[#222]/50">Unassigned</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-4 text-[#222]/60">{r.date}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#E6F9F0] px-3 py-1 text-xs font-medium text-[#0CAF72]">
                    {r.amount}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="relative flex justify-end">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === i ? null : i)
                      }
                      className="grid size-7 place-items-center rounded-lg text-[#222]/40 transition hover:bg-black/5"
                      title="Actions"
                    >
                      <MoreHorizontal className="size-4" />
                    </button>
                    {openMenu === i && (
                      <div className="absolute right-0 top-full z-30 mt-1 w-48 overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-lg">
                        {MENU_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.label}
                              onClick={() => setOpenMenu(null)}
                              className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-[#222]/80 transition hover:bg-black/5"
                            >
                              <Icon className="size-4 text-[#222]/50" />
                              {item.label}
                            </button>
                          );
                        })}
                        <div className="my-1 border-t border-black/5" />
                        <button
                          onClick={() => setOpenMenu(null)}
                          className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-[#E5484D] transition hover:bg-[#FFF0F0]"
                        >
                          <XCircle className="size-4" />
                          Cancel Request
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Click-away overlay for the actions menu */}
      {openMenu !== null && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => setOpenMenu(null)}
        />
      )}
    </div>
  );
}
