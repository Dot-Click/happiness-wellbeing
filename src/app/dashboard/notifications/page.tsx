"use client";

import {
  Search,
  Plus,
  Eye,
  Send,
  Bell,
  Mail,
  MessageSquare,
  Smartphone,
} from "lucide-react";

const STATS = [
  {
    label: "TOTAL NOTIFICATIONS",
    value: "234",
    change: "This month",
    color: "#761c37",
  },
  {
    label: "UNREAD",
    value: "18",
    change: "Requiring attention",
    color: "#c98a4b",
  },
  {
    label: "AUTOMATED",
    value: "189",
    change: "System generated",
    color: "#3B6BCC",
  },
  {
    label: "MANUAL",
    value: "45",
    change: "Team sent",
    color: "#0CAF72",
  },
];

const NOTIFICATIONS = [
  {
    type: "Booking Confirmation",
    recipient: "Ali Hamza",
    message: "Your Executive Health 360 booking is confirmed for Oct 10.",
    channel: "Email",
    sent: "Oct 10, 2026",
    status: "Delivered",
  },
  {
    type: "SLA Warning",
    recipient: "Support Team",
    message: "Case SUP-1046 approaching SLA breach in 42 minutes.",
    channel: "Push",
    sent: "Oct 9, 2026",
    status: "Delivered",
  },
  {
    type: "Mission Update",
    recipient: "Olivia Bennett",
    message: "Your Serenity Retreat itinerary has been updated.",
    channel: "SMS",
    sent: "Oct 9, 2026",
    status: "Pending",
  },
  {
    type: "Payment Receipt",
    recipient: "Daniel Williamson",
    message: "Payment of USD 12,500 received for INV-2026-0848.",
    channel: "Email",
    sent: "Oct 8, 2026",
    status: "Delivered",
  },
  {
    type: "Booking Confirmation",
    recipient: "Sofia Martinez",
    message: "Luxury Wellness Journey booking confirmed for Oct 14.",
    channel: "In-App",
    sent: "Oct 7, 2026",
    status: "Failed",
  },
  {
    type: "SLA Warning",
    recipient: "Concierge Team",
    message: "Response time threshold exceeded for Marcus Reed request.",
    channel: "Push",
    sent: "Oct 6, 2026",
    status: "Delivered",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Delivered":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Failed":
      return "bg-[#FFF0F0] text-[#E5484D]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function typeColor(type: string) {
  switch (type) {
    case "Booking Confirmation":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "SLA Warning":
      return "bg-[#FFF0F0] text-[#E5484D]";
    case "Mission Update":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Payment Receipt":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function channelIcon(channel: string) {
  switch (channel) {
    case "Email":
      return <Mail className="size-3.5 shrink-0" />;
    case "SMS":
      return <Smartphone className="size-3.5 shrink-0" />;
    case "Push":
      return <Bell className="size-3.5 shrink-0" />;
    case "In-App":
      return <MessageSquare className="size-3.5 shrink-0" />;
    default:
      return <Bell className="size-3.5 shrink-0" />;
  }
}

export default function NotificationsPage() {
  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Notification Hub
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Manage system alerts, client communications and automated
              triggers.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
            <Plus className="size-4" />
            Send Notification
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

        {/* Notifications table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Recent Notifications
              </h2>
              <p className="text-xs text-[#222]/50">
                All system and manual notifications
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search notifications..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All statuses</option>
                <option>Delivered</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All channels</option>
                <option>Email</option>
                <option>SMS</option>
                <option>Push</option>
                <option>In-App</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Type</th>
                  <th className="px-4 py-3">Recipient</th>
                  <th className="px-4 py-3">Message</th>
                  <th className="px-4 py-3">Channel</th>
                  <th className="px-4 py-3">Sent</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {NOTIFICATIONS.map((n, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${typeColor(n.type)}`}
                      >
                        {n.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#222]">
                      {n.recipient}
                    </td>
                    <td className="max-w-[260px] px-4 py-3.5 text-[#222]/50">
                      <span className="line-clamp-1">{n.message}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-[#222]/60">
                        {channelIcon(n.channel)}
                        <span className="text-xs">{n.channel}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#222]/50">
                      {n.sent}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(n.status)}`}
                      >
                        {n.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="View notification"
                        >
                          <Eye className="size-3.5" />
                          View
                        </button>
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/40 transition hover:bg-black/5"
                          title="Resend notification"
                        >
                          <Send className="size-3.5" />
                          Resend
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
              Showing 1–6 of 234 notifications
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
                39
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
