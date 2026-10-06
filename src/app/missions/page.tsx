"use client";

import { Calendar, ChevronDown, Clock, MapPin, MessageSquare } from "lucide-react";
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
      <section className="relative overflow-hidden">
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
                "linear-gradient(to bottom, rgba(20,6,10,0.55) 0%, rgba(20,6,10,0.4) 45%, rgba(250,246,240,0.25) 84%, #faf6f0 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-16 text-center text-white lg:px-10 lg:py-20">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
            Your Itinerary
          </p>
          <h1 className="font-serif text-4xl">My Mission</h1>
          <p className="max-w-xl text-sm text-white/70">
            All your upcoming, active and past experiences in one place. Track
            progress, manage requests and stay connected with your concierge.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => {
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                      : "border border-black/10 bg-white text-[#222]/70"
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
          <button className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-[#222]/70">
            Sort by{" "}
            <span className="font-medium text-[#222]">Date (Newest)</span>
            <ChevronDown className="size-3" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {MISSIONS.map((m) => (
            <article
              key={m.ref}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:grid-cols-[180px_1fr_200px]"
            >
              <div className="relative h-32 md:h-full">
                <Image
                  src={m.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.18em] text-[#f4c481] uppercase">
                      {m.tag}
                    </p>
                    <h3 className="font-serif text-xl text-[#222]">
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
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#222]/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" /> {m.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {m.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" /> {m.location}
                  </span>
                </div>
                <Timeline steps={m.steps} activeStep={m.activeStep} />
              </div>
              <div className="flex flex-col justify-center gap-3 border-l border-black/5 bg-[#faf6ef] p-5">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.18em] text-[#f4c481] uppercase">
                    Total Investment
                  </p>
                  <p className="font-serif text-xl text-[#222]">
                    {m.cost.split(" ")[0]}{" "}
                    <span className="text-[#761c37]">
                      {m.cost.split(" ").slice(1).join(" ")}
                    </span>
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-black/5 bg-white px-3 py-2 text-[11px] font-medium text-[#222] shadow-sm">
                  <span className="grid size-5 place-items-center rounded-full bg-[#222] text-white">
                    <MessageSquare className="size-3" />
                  </span>
                  Message Concierge
                </button>
                <button
                  onClick={() => setOpenMission(m)}
                  className="rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-3 py-2 text-[11px] font-medium text-white"
                >
                  View Mission →
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
        const done = i <= activeStep;
        const current = i === activeStep;
        return (
          <div key={s} className="relative flex flex-col items-center gap-1.5">
            <span
              className={`size-3 rounded-full border-2 ${
                done
                  ? "border-[#761c37] bg-[#761c37]"
                  : "border-black/20 bg-white"
              } ${current ? "ring-4 ring-[#761c37]/15" : ""}`}
            />
            <span
              className={`max-w-[80px] text-center text-[9px] leading-tight ${
                done ? "text-[#222]" : "text-[#222]/40"
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
