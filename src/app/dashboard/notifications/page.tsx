"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  MessageSquare,
  Smartphone,
  Bell,
  MailOpen,
  Users,
  ClipboardList,
  CreditCard,
  Settings,
  Search,
  ChevronDown,
  MoreHorizontal,
  Check,
} from "lucide-react";

const STATS = [
  { label: "Total Sent Today", value: "142", sub: "12% from yesterday", icon: Send },
  { label: "Email Sent", value: "61", sub: "100% delivered", icon: Mail },
  { label: "SMS Sent", value: "42", sub: "98% delivered", icon: MessageSquare },
  { label: "In App Sent", value: "36", sub: "100% delivered", icon: Smartphone },
];

const CATEGORIES = [
  { label: "All Notification", icon: Bell, count: 12 },
  { label: "Unread", icon: MailOpen },
  { label: "Client Updates", icon: Users },
  { label: "Mission Updates", icon: ClipboardList },
  { label: "Payments", icon: CreditCard },
  { label: "System Notifications", icon: Settings },
];

const CHANNEL_FILTERS = ["All Channels", "Email", "SMS", "In-App", "Push"];

type Notification = {
  title: string;
  desc: string;
  channels: string[];
  recipient: string;
  role: string;
  time: string;
  date: string;
  status: string;
};

const NOTIFICATIONS: Notification[] = [
  {
    title: "Concierge assigned",
    desc: "Sophia Laurent assigned to Daniel Williamson",
    channels: ["In-App"],
    recipient: "Daniel Williamson",
    role: "Client",
    time: "10 min ago",
    date: "Oct 12, 2026 14:10",
    status: "Delivered",
  },
  {
    title: "Booking confirmed",
    desc: "Executive Health 360 · Oct 15, 2026",
    channels: ["Email"],
    recipient: "Olivia Bennett",
    role: "Client",
    time: "10 min ago",
    date: "Oct 12, 2026 14:10",
    status: "Delivered",
  },
  {
    title: "J-1 appointment reminder",
    desc: "Tomorrow at 09:00 AM",
    channels: ["SMS"],
    recipient: "Ryan Carter",
    role: "Client",
    time: "10 min ago",
    date: "Oct 12, 2026 14:10",
    status: "Delivered",
  },
  {
    title: "Payment failed",
    desc: "Transaction could not be processed",
    channels: ["Email", "In-App"],
    recipient: "Amelia Reed",
    role: "Client",
    time: "10 min ago",
    date: "Oct 12, 2026 14:10",
    status: "Failed",
  },
  {
    title: "Document approved",
    desc: "Medical report has been approved",
    channels: ["In-App"],
    recipient: "Alexander Morgan",
    role: "Client",
    time: "12 min ago",
    date: "Oct 12, 2026 14:08",
    status: "Delivered",
  },
  {
    title: "Welcome to Happiness Experience",
    desc: "Account setup completed",
    channels: ["Email"],
    recipient: "Daniel Williamson",
    role: "Client",
    time: "1 hr ago",
    date: "Oct 12, 2026 13:10",
    status: "Delivered",
  },
  {
    title: "New message from client",
    desc: "You have a new message",
    channels: ["Email"],
    recipient: "Olivia Bennett",
    role: "Client",
    time: "2 hr ago",
    date: "Oct 12, 2026 12:10",
    status: "Delivered",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Delivered":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Failed":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function NotificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All Notification");
  const [channels, setChannels] = useState<string[]>(["All Channels"]);
  const [query, setQuery] = useState("");

  function toggleChannel(ch: string) {
    if (ch === "All Channels") {
      setChannels(["All Channels"]);
      return;
    }
    setChannels((prev) => {
      const withoutAll = prev.filter((c) => c !== "All Channels");
      const next = withoutAll.includes(ch)
        ? withoutAll.filter((c) => c !== ch)
        : [...withoutAll, ch];
      return next.length ? next : ["All Channels"];
    });
  }

  const showAllChannels = channels.includes("All Channels");
  const visible = NOTIFICATIONS.filter(
    (n) =>
      (showAllChannels || n.channels.some((c) => channels.includes(c))) &&
      n.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="px-3 py-8">
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c98a4b]">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-[#222]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[#222]/50">{stat.sub}</p>
              <Icon className="absolute right-4 bottom-4 size-8 text-[#E5DFDF]" />
            </div>
          );
        })}
      </div>

      {/* Sidebar + table */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[260px_1fr]">
        {/* Filter sidebar */}
        <div className="h-fit rounded-2xl border border-black/5 bg-white p-4">
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = cat.label === activeCategory;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                    active
                      ? "bg-[#761c37]/8 font-medium text-[#761c37]"
                      : "text-[#222]/70 hover:bg-black/5"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="size-4 shrink-0" />
                    {cat.label}
                  </span>
                  {cat.count ? (
                    <span className="rounded-full bg-[#761c37] px-2 py-0.5 text-[11px] font-medium text-white">
                      {cat.count}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-5 border-t border-black/5 pt-4">
            <p className="mb-2 text-xs font-semibold text-[#222]/50">
              Filter by Channel
            </p>
            <div className="flex flex-col gap-0.5">
              {CHANNEL_FILTERS.map((ch) => {
                const checked = channels.includes(ch);
                return (
                  <button
                    key={ch}
                    onClick={() => toggleChannel(ch)}
                    className="flex items-center gap-2.5 rounded-lg px-1 py-1.5 text-left text-sm transition hover:bg-black/5"
                  >
                    <span
                      className={`grid size-4 shrink-0 place-items-center rounded border ${
                        checked
                          ? "border-[#761c37] bg-[#761c37] text-white"
                          : "border-black/20"
                      }`}
                    >
                      {checked && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    <span className={checked ? "text-[#222]" : "text-[#222]/60"}>
                      {ch}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Notifications table */}
        <div className="rounded-2xl border border-black/5 bg-white">
          <div className="flex flex-wrap items-center gap-3 border-b border-black/5 p-4">
            <div className="relative min-w-[200px] flex-1">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notifications..."
                className="h-10 w-full rounded-xl border border-black/10 bg-[#faf6f0] pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37]"
              />
            </div>
            {["All Types", "All Status", "Newest First"].map((label) => (
              <div key={label} className="relative">
                <select className="h-10 appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-3 pr-9 text-sm text-[#222]/60 outline-none">
                  <option>{label}</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-5 py-3">Notification</th>
                  <th className="px-4 py-3">Channel</th>
                  <th className="px-4 py-3">Recipient</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {visible.map((n, i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0">
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-[#222]">{n.title}</p>
                      <p className="text-xs text-[#222]/50">{n.desc}</p>
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/70">
                      {n.channels.join(" + ")}
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="font-medium text-[#222]">{n.recipient}</p>
                      <p className="text-xs text-[#222]/50">{n.role}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="text-[#222]/70">{n.time}</p>
                      <p className="text-xs text-[#222]/45">{n.date}</p>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(n.status)}`}
                      >
                        {n.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <button className="grid size-7 place-items-center rounded-lg text-[#222]/40 transition hover:bg-black/5">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-10 text-center text-sm text-[#222]/40"
                    >
                      No notifications match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
