"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Reply,
  MessageSquare,
  Video,
  Phone,
  X,
  Send,
} from "lucide-react";
import Image from "next/image";

const STATS = [
  {
    label: "ACTIVE THREADS",
    value: "14",
    change: "Across 8 clients",
    color: "#761c37",
  },
  {
    label: "SCHEDULED MEETINGS",
    value: "6",
    change: "Next 7 days",
    color: "#c98a4b",
  },
  {
    label: "UNREAD MESSAGES",
    value: "23",
    change: "From 5 clients",
    color: "#E5484D",
  },
  {
    label: "AVG RESPONSE TIME",
    value: "12min",
    change: "-3min vs last week",
    color: "#0CAF72",
  },
];

type Conversation = {
  client: string;
  avatar: string;
  subject: string;
  type: string;
  lastMessage: string;
  status: string;
};

const CONVERSATIONS: Conversation[] = [
  {
    client: "Ali Hamza",
    avatar: "/figma/avatar-daniel.png",
    subject: "Health screening follow-up",
    type: "Message",
    lastMessage: "Oct 10, 2026 at 2:30 PM",
    status: "Active",
  },
  {
    client: "Daniel Williamson",
    avatar: "/figma/avatar-daniel2.png",
    subject: "Booking modification request",
    type: "Meeting",
    lastMessage: "Oct 9, 2026 at 11:00 AM",
    status: "Scheduled",
  },
  {
    client: "Olivia Bennett",
    avatar: "/figma/avatar-marcus.png",
    subject: "Retreat itinerary discussion",
    type: "Call",
    lastMessage: "Oct 9, 2026 at 9:15 AM",
    status: "Active",
  },
  {
    client: "Marcus Reed",
    avatar: "/figma/avatar-daniel.png",
    subject: "Post-assessment consultation",
    type: "Meeting",
    lastMessage: "Oct 8, 2026 at 3:45 PM",
    status: "Scheduled",
  },
  {
    client: "Sofia Martinez",
    avatar: "/figma/avatar-marcus.png",
    subject: "Wellness programme inquiry",
    type: "Message",
    lastMessage: "Oct 7, 2026 at 10:20 AM",
    status: "Active",
  },
  {
    client: "Henrik Larsson",
    avatar: "/figma/avatar-daniel.png",
    subject: "Insurance documentation review",
    type: "Call",
    lastMessage: "Oct 6, 2026 at 4:00 PM",
    status: "Closed",
  },
];

// Sample thread shown in the conversation modal. Static demo data —
// replace with real message history once a backend is wired up.
function sampleThread(c: Conversation) {
  return [
    {
      from: "client" as const,
      author: c.client,
      time: "9:58 AM",
      body: `Hi — following up on "${c.subject}". When is the best time to connect?`,
    },
    {
      from: "admin" as const,
      author: "You",
      time: "10:04 AM",
      body: "Happy to help. I'll coordinate with the clinic and confirm a slot shortly.",
    },
    {
      from: "client" as const,
      author: c.client,
      time: "10:12 AM",
      body: "Perfect, thank you. Mornings work best for me.",
    },
  ];
}

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Scheduled":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "Closed":
      return "bg-[#F0F0F0] text-[#666]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function typeColor(type: string) {
  switch (type) {
    case "Message":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Meeting":
      return "bg-[#E8F0FE] text-[#3B6BCC]";
    case "Call":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

function typeIcon(type: string) {
  switch (type) {
    case "Message":
      return <MessageSquare className="size-3.5 shrink-0" />;
    case "Meeting":
      return <Video className="size-3.5 shrink-0" />;
    case "Call":
      return <Phone className="size-3.5 shrink-0" />;
    default:
      return <MessageSquare className="size-3.5 shrink-0" />;
  }
}

export default function MessagesPage() {
  const [composeOpen, setComposeOpen] = useState(false);
  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(null);
  const [draft, setDraft] = useState("");

  function openConversation(c: Conversation) {
    setDraft("");
    setActiveConversation(c);
  }

  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              Communication Center
            </h2>
            <p className="mt-1 text-sm text-[#222]/50">
              Manage client messages, meeting schedules and virtual
              consultations.
            </p>
          </div>
          <button
            onClick={() => setComposeOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-[#0CAF72] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
          >
            <Plus className="size-4" />
            New Message
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

        {/* Conversations table */}
        <div className="mt-8 rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Recent Conversations
              </h2>
              <p className="text-xs text-[#222]/50">
                All client communications and meeting records
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search messages..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All types</option>
                <option>Message</option>
                <option>Meeting</option>
                <option>Call</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Client</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Last Message</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {CONVERSATIONS.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={c.avatar}
                          alt={c.client}
                          width={32}
                          height={32}
                          className="size-8 rounded-full object-cover"
                        />
                        <span className="font-medium text-[#222]">
                          {c.client}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/70">
                      {c.subject}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${typeColor(c.type)}`}
                      >
                        {typeIcon(c.type)}
                        {c.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#222]/50">
                      {c.lastMessage}
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
                          onClick={() => openConversation(c)}
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/60 transition hover:bg-black/5"
                          title="Reply"
                        >
                          <Reply className="size-3.5" />
                          Reply
                        </button>
                        <button
                          onClick={() => openConversation(c)}
                          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#222]/40 transition hover:bg-black/5"
                          title="View conversation"
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
              Showing 1–6 of 14 conversations
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
            </div>
          </div>
        </div>
      </div>

      {/* New message modal */}
      {composeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setComposeOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#222]">
                  New message
                </h3>
                <p className="text-xs uppercase tracking-[0.12em] text-[#222]/40">
                  Compose
                </p>
              </div>
              <button
                onClick={() => setComposeOpen(false)}
                className="rounded-lg p-1 text-[#222]/40 transition hover:bg-black/5"
                title="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setComposeOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#222]">
                  Recipient
                </label>
                <select className="h-10 w-full rounded-lg border border-black/10 bg-[#faf6f0] px-3 text-sm text-[#222] outline-none focus:border-[#761c37]">
                  {CONVERSATIONS.map((c) => (
                    <option key={c.client}>{c.client}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#222]">
                  Subject
                </label>
                <input
                  placeholder="e.g. Appointment confirmation"
                  className="h-10 w-full rounded-lg border border-black/10 bg-[#faf6f0] px-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#222]">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 py-2 text-sm text-[#222] outline-none focus:border-[#761c37]"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setComposeOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-[#222]/60 transition hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-[#0CAF72] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
                >
                  <Send className="size-4" />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Conversation modal */}
      {activeConversation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setActiveConversation(null)}
        >
          <div
            className="flex max-h-[85vh] w-full max-w-xl flex-col rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src={activeConversation.avatar}
                  alt={activeConversation.client}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold text-[#222]">
                    {activeConversation.client}
                  </h3>
                  <p className="text-xs text-[#222]/50">
                    {activeConversation.subject}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveConversation(null)}
                className="rounded-lg p-1 text-[#222]/40 transition hover:bg-black/5"
                title="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-[#faf6f0] px-6 py-5">
              {sampleThread(activeConversation).map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "admin" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[75%]">
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm ${
                        m.from === "admin"
                          ? "bg-[#761c37] text-white"
                          : "bg-white text-[#222] shadow-sm"
                      }`}
                    >
                      {m.body}
                    </div>
                    <p
                      className={`mt-1 text-[11px] text-[#222]/40 ${m.from === "admin" ? "text-right" : "text-left"}`}
                    >
                      {m.author} · {m.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDraft("");
              }}
              className="flex items-center gap-2 border-t border-black/5 px-4 py-3"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a reply..."
                className="h-10 flex-1 rounded-lg border border-black/10 bg-[#faf6f0] px-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                className="flex items-center gap-2 rounded-lg bg-[#0CAF72] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="size-4" />
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
