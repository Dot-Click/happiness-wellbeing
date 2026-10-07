"use client";

import { MoreVertical, Paperclip, Search, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";

const CONVERSATIONS = [
  { name: "Marcus Reed", role: "Medical Concierge", time: "05:34 PM", unread: true, avatar: "/figma/avatar-marcus.png" },
  { name: "Olivia Bennett", role: "Executive Concierge", time: "05:34 PM", avatar: "/figma/avatar-daniel2.png" },
  { name: "Daniel Brooks", role: "Care Coordinator", time: "05:34 PM", avatar: "/figma/avatar-daniel.png" },
  { name: "James Anderson", role: "Travel & Care Coordinator", time: "05:34 PM", avatar: "/figma/avatar-marcus.png" },
  { name: "Sophia Laurent", role: "Senior Medical Concierge", time: "05:34 PM", avatar: "/figma/avatar-daniel2.png" },
  { name: "Daniel Brooks", role: "Care Coordinator", time: "05:34 PM", avatar: "/figma/avatar-daniel.png" },
];

const THREAD = [
  {
    from: "me",
    text: "We have twelve executives confirmed for the health day. Can we split it across two mornings?",
    time: "11:02 AM · Sarah Al Mansoori",
  },
  {
    from: "them",
    text: "Noted, and much appreciated for the detail. I'll coordinate this with the clinic directly.",
    time: "✓ Marcus Reed · 11:06 AM",
  },
  {
    from: "me",
    text: "Also please route the invoice to our corporate billing account.",
    time: "11:02 AM · Sarah Al Mansoori",
  },
];

export default function MessagesPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [draft, setDraft] = useState("");

  return (
    <AppShell active="/messages" lightNav>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/figma/hero-city.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#faf6f0]/25" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 pt-28 pb-12 lg:grid-cols-[320px_1fr] lg:px-10">
          {/* Conversation list */}
          <aside className="h-fit rounded-2xl border border-black/5 bg-white p-4">
            <h1 className="font-serif text-2xl text-[#222]">Messages</h1>
            <p className="text-xs text-[#222]/50">
              Chat with your Concierge and care team
            </p>
            <div className="relative mt-3">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-[#222]/40" />
              <input
                placeholder="Search conversations..."
                className="h-9 w-full rounded-full border border-black/10 bg-black/5 pr-3 pl-9 text-xs outline-none placeholder:text-[#222]/40"
              />
            </div>
            <ul className="mt-3 flex max-h-[500px] flex-col gap-1 overflow-y-auto">
              {CONVERSATIONS.map((c, i) => (
                <li key={i}>
                  <button
                    onClick={() => setActiveIdx(i)}
                    className={`flex w-full items-center gap-2.5 rounded-xl p-2 text-left transition ${
                      i === activeIdx
                        ? "bg-[#f6e4ea]"
                        : "hover:bg-black/5"
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={c.avatar}
                        alt=""
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                      {c.unread && (
                        <span className="absolute right-0 bottom-0 size-2 rounded-full border border-white bg-[#2bb673]" />
                      )}
                    </div>
                    <div className="flex-1 leading-tight">
                      <p className="text-xs font-medium text-[#222]">
                        {c.name}
                      </p>
                      <p className="text-[10px] text-[#222]/50">{c.role}</p>
                    </div>
                    <span className="text-[10px] text-[#222]/40">
                      {c.time}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Thread */}
          <div className="flex min-h-[560px] flex-col overflow-hidden rounded-2xl border border-black/5 bg-white">
            <div className="flex items-center justify-between border-b border-black/5 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src={CONVERSATIONS[activeIdx].avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="text-sm font-medium text-[#222]">
                    {CONVERSATIONS[activeIdx].name}
                  </p>
                  <p className="text-[11px] text-[#222]/50">
                    {CONVERSATIONS[activeIdx].role}
                  </p>
                </div>
                <span className="ml-3 rounded-full bg-[#f6e4ea] px-2.5 py-0.5 text-[10px] font-medium text-[#761c37]">
                  Mission HE-260923-0848
                </span>
              </div>
              <button className="rounded-full p-1.5 text-[#222]/40 hover:bg-black/5">
                <MoreVertical className="size-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-5">
              {THREAD.map((m, i) => {
                const mine = m.from === "me";
                return (
                  <div
                    key={i}
                    className={`flex flex-col gap-1 ${mine ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-sm rounded-2xl px-4 py-2.5 text-xs leading-snug ${
                        mine
                          ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                          : "bg-[#f6e4ea] text-[#222]"
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] text-[#222]/40">
                      {m.time}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 border-t border-black/5 p-3">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Write a message to your concierge..."
                className="h-10 flex-1 rounded-full border border-black/10 bg-black/5 px-4 text-xs outline-none placeholder:text-[#222]/40"
              />
              <button className="grid size-9 place-items-center rounded-full bg-black/5 text-[#222]/60">
                <Paperclip className="size-4" />
              </button>
              <button className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#761c37] to-[#913f58] px-4 py-2 text-xs font-medium text-white">
                Send <Send className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
