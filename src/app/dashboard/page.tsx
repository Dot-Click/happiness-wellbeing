"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IoMdThumbsUp } from "react-icons/io";

const STATS = [
  {
    label: "VIP Clients",
    value: "48",
    sub: "+6 this month",
    icon: "/figma/headphone.svg",
  },
  {
    label: "Pending Approvals",
    value: "7",
    sub: "Needs review",
    icon: "thumb",
  },
  {
    label: "Documents Awaiting Review",
    value: "9",
    sub: "Secure vault",
    icon: "/figma/document.svg",
  },
  {
    label: "Partner SLA",
    value: "98.4%",
    sub: "Healthy network",
    icon: "/figma/group.svg",
  },
];

const PRIORITY_REQUESTS = [
  {
    title: "Executive Health 360",
    client: "Alexander Morgan",
    tier: "VIP",
    ref: "HE-260925-0847",
    date: "2026-10-08",
    amount: "AED 13,350",
  },
  {
    title: "Executive Travel & Logistics",
    client: "Daniel Williamson",
    tier: "Corporate",
    ref: "CB-261001-0091",
    date: "2026-10-12",
    amount: "USD 45,000",
  },
  {
    title: "Alpine Serenity Retreat",
    client: "Olivia Bennett",
    tier: "VIP",
    ref: "SE-260921-1123",
    date: "2026-11-14",
    amount: "USD 16,800",
  },
  {
    title: "Private Preventive Assessment",
    client: "Amelia Reed",
    tier: "Standard",
    ref: "HV-261003-0017",
    date: "2026-10-20",
    amount: "AED 6,900",
  },
];

const CONCIERGE_CAPACITY = [
  {
    name: "Sophia Laurent",
    specialty: "Medical & International Care",
    load: "3 / 6",
  },
  {
    name: "Yuki Tanaka",
    specialty: "Corporate & Logistics",
    load: "5 / 6",
  },
  {
    name: "Sophia Laurent",
    specialty: "Medical & International Care",
    load: "3 / 6",
  },
  {
    name: "Sophia Laurent",
    specialty: "Medical & International Care",
    load: "3 / 6",
  },
];

const AUTOMATION_HEALTH = [
  { label: "SMS milestone triggers", status: "Active" },
  { label: "Email confirmations", status: "Active" },
  { label: "J-1 reminders", status: "Active" },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-base font-semibold text-[#222]">{title}</h2>
      <div className="mt-1.5 h-0.5 w-8 rounded-full bg-[#c98a4b]" />
    </div>
  );
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
              className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c98a4b]">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-[#222]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[#222]/50">{stat.sub}</p>
              {stat.icon === "thumb" ? (
                <IoMdThumbsUp className="absolute right-4 bottom-4 size-9 text-[#E5DFDF]" />
              ) : (
                <Image
                  src={stat.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="absolute right-4 bottom-4 size-9"
                />
              )}
            </div>
          ))}
        </div>

        {/* Priority Request Queue + Concierge capacity */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
          {/* Priority Request Queue */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <SectionHeading title="Priority Request Queue" />
            <div className="flex flex-col">
              {PRIORITY_REQUESTS.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 border-b border-black/5 py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#222]">
                      {req.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-[#222]/50">
                      {req.client} · {req.tier} · {req.ref} · {req.date} ·{" "}
                      {req.amount}
                    </p>
                  </div>
                  <button className="shrink-0 rounded-lg bg-[#761c37] px-4 py-2 text-xs font-medium text-white transition hover:brightness-110">
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Concierge capacity */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <SectionHeading title="Concierge capacity" />
            <div className="flex flex-col">
              {CONCIERGE_CAPACITY.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 border-b border-black/5 py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#222]">
                      {c.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-[#222]/50">
                      {c.specialty}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-[#222]/60">
                    {c.load}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Health */}
        <div className="mt-6 rounded-2xl border border-black/5 bg-white p-6">
          <SectionHeading title="Automation Health" />
          <div className="flex flex-col">
            {AUTOMATION_HEALTH.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 border-b border-black/5 py-4 first:pt-0 last:border-0 last:pb-0"
              >
                <p className="text-sm font-medium text-[#222]">{a.label}</p>
                <span className="rounded-full bg-[#E6F9F0] px-3 py-1 text-xs font-medium text-[#0CAF72]">
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
