"use client";

import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  MoreVertical,
} from "lucide-react";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { MissionDetailModal } from "@/components/mission-detail-modal";

const TABS = [
  { id: "upcoming", label: "Upcoming", count: 1 },
  { id: "active", label: "Active", count: 2 },
  { id: "completed", label: "Completed", count: 5 },
  { id: "cancelled", label: "Cancelled", count: 1 },
] as const;

const MISSIONS = [
  {
    tag: "Executive Health",
    title: "Executive Health 360",
    ref: "HE-260923-0848",
    date: "Oct 10, 2026",
    time: "08:30 AM",
    location: "Dubai",
    cost: "USD 12,000",
    badge: "Clinic Confirmed",
    activeStep: 2,
    steps: [
      "Request Received",
      "Clinic Confirmed",
      "Chauffeur Assigned",
      "In Progress",
      "Complete",
    ],
    img: "/figma/mission-health.png",
  },
  {
    tag: "Executive Serenity",
    title: "Alpine Serenity Retreat",
    ref: "SE-260921-1123",
    date: "Oct 10, 2026",
    time: "08:30 AM",
    location: "Dubai",
    cost: "USD 16,800",
    badge: "In Preparation",
    activeStep: 1,
    steps: [
      "Request Received",
      "Planning In Progress",
      "Document Pending",
      "In Progress",
      "Complete",
    ],
    img: "/figma/mission-serenity.png",
  },
  {
    tag: "Corporate Business Logistics",
    title: "Executive Travel Logistics",
    ref: "CB-260918-0019",
    date: "Oct 10, 2026",
    time: "08:30 AM",
    location: "Dubai",
    cost: "USD 14,000",
    badge: "Request Received",
    activeStep: 0,
    steps: [
      "Request Received",
      "Planning",
      "Vendor Confirmation",
      "In Progress",
      "Complete",
    ],
    img: "/figma/mission-logistics.png",
  },
];

// Status badge colors mirror the Figma design: confirmed → rose,
// in-preparation → amber, everything else → neutral.
const BADGE_STYLES: Record<string, string> = {
  "Clinic Confirmed": "bg-[#fcdddb] text-[#b23a4e]",
  "In Preparation": "bg-[#fff4e5] text-[#9a6a1b]",
  "Request Received": "bg-[#f3f3f3] text-[#6b6b6b]",
};

export default function MissionsPage() {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  const [openMission, setOpenMission] = useState<
    (typeof MISSIONS)[number] | null
  >(null);

  return (
    <AppShell active="/missions">
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/figma/missions-hero.png"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 45%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(44,4,16,0.7) 0%, rgba(44,4,16,0.55) 30%, rgba(44,4,16,0.6) 55%, rgba(44,4,16,0.3) 85%, rgba(44,4,16,0.1) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 70%, #faf6f0 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-3 px-6 py-28 text-center text-white lg:px-10 lg:py-40">
          <p className="text-xs font-medium tracking-[0.2em] text-[#f4c481] uppercase">
            Your Itinerary
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl">My Mission</h1>
          <p className="max-w-2xl text-base text-white/70 lg:text-lg">
            All your upcoming, active and past experiences in one place. Track
            progress, manage requests and stay connected with your concierge.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1 rounded-full border border-black/5 bg-white p-1">
            {TABS.map((t) => {
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                      : "text-[#222]/70"
                  }`}
                >
                  {t.label}
                  <span
                    className={`inline-flex min-w-4 justify-center rounded-full px-1 text-[10px] ${
                      active ? "bg-white/20" : "bg-black/5 text-[#222]/60"
                    }`}
                  >
                    {t.count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#222]/60">
            Sort by
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-[#fbefde] px-4 py-2 text-xs font-medium text-[#222] shadow-sm">
              Date (Newest)
              <ChevronDown className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {MISSIONS.map((m) => (
            <article
              key={m.ref}
              className="relative grid grid-cols-1 gap-5 rounded-3xl border border-black/5 bg-white p-4 md:grid-cols-[220px_1fr_auto]"
            >
              <button className="absolute top-4 right-4 text-[#222]/30 hover:text-[#222]/60">
                <MoreVertical className="size-4" />
              </button>

              <div className="relative h-40 overflow-hidden rounded-2xl md:h-full">
                <Image
                  src={m.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 py-1">
                <div className="flex items-start justify-between gap-3 pr-6">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.18em] text-[#c98a4b] uppercase">
                      {m.tag}
                    </p>
                    <h3 className="font-serif text-2xl text-[#222]">
                      {m.title}
                    </h3>
                    <p className="text-[11px] text-[#222]/50">Ref {m.ref}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-medium ${
                      BADGE_STYLES[m.badge] ?? "bg-[#f3f3f3] text-[#6b6b6b]"
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-5 text-xs text-[#222]/70">
                  <span className="flex items-center gap-2">
                    <span className="grid size-6 place-items-center rounded-full bg-[#fdeedd] text-[#c98a4b]">
                      <Calendar className="size-3.5" />
                    </span>
                    {m.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="grid size-6 place-items-center rounded-full bg-[#fdeedd] text-[#c98a4b]">
                      <Clock className="size-3.5" />
                    </span>
                    {m.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="grid size-6 place-items-center rounded-full bg-[#fdeedd] text-[#c98a4b]">
                      <IoLocationSharp className="size-3.5" />
                    </span>
                    {m.location}
                  </span>
                </div>
                <Timeline steps={m.steps} activeStep={m.activeStep} />
              </div>

              <div className="flex flex-col justify-center gap-3 border-t border-black/5 pt-4 md:w-[200px] md:border-t-0 md:border-l md:pt-1 md:pl-5">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.18em] text-[#c98a4b] uppercase">
                    Total Investment
                  </p>
                  <p className="font-serif text-xl text-[#222]">
                    {m.cost.split(" ")[0]}{" "}
                    <span className="text-[#761c37]">
                      {m.cost.split(" ").slice(1).join(" ")}
                    </span>
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-[#fbefde] px-4 py-2.5 text-[11px] font-medium text-[#222] shadow-sm">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#222]">
                    <Image src="/figma/message-white.svg" alt="" width={11} height={11} />
                  </span>
                  Message Concierge
                </button>
                <button
                  onClick={() => setOpenMission(m)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-3 py-2.5 text-[11px] font-medium text-white"
                >
                  View Mission <ArrowRight className="size-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {openMission && (
        <MissionDetailModal
          mission={openMission}
          onClose={() => setOpenMission(null)}
        />
      )}
    </AppShell>
  );
}

function Timeline({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) {
  return (
    <div className="relative flex items-center justify-between pt-2">
      <div className="absolute top-[14px] right-2 left-2 h-px bg-black/10" />
      {steps.map((s, i) => {
        const completed = i < activeStep;
        const current = i === activeStep;
        return (
          <div key={s} className="relative flex flex-col items-center gap-1.5">
            {completed ? (
              <span className="grid size-[15px] place-items-center rounded-full bg-[#eabe83] text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
            ) : current ? (
              <span className="grid size-[15px] place-items-center rounded-full bg-[#761c37] ring-4 ring-white">
                <span className="size-1.5 rounded-full bg-white" />
              </span>
            ) : (
              <span className="size-[15px] rounded-full border-2 border-black/15 bg-white" />
            )}
            <span
              className={`max-w-[80px] text-center text-[9px] leading-tight ${
                current ? "font-semibold text-[#222]" : "text-[#222]/40"
              }`}
            >
              {s}
            </span>
          </div>
        );
      })}
    </div>
  );
}
