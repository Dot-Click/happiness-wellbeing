"use client";

import {
  Car,
  Check,
  Download,
  FileText,
  FlaskConical,
  Languages,
  Stethoscope,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";

const TABS = [
  "Overview",
  "Logistics",
  "Activity",
  "Document",
  "Booking Details",
] as const;

const TIMELINE = [
  { title: "Request Received", desc: "Sep 25, 2026" },
  {
    title: "Private arrival",
    desc: "Discreet entrance, no waiting room, concierge escort.",
  },
  {
    title: "Diagnostics",
    desc: "Bloods, imaging, cardiac and metabolic assessment.",
  },
  {
    title: "Private lunch",
    desc: "Light menu prepared in the executive suite.",
  },
  {
    title: "Specialist consultation",
    desc: "Findings reviewed in full with your physician.",
  },
  {
    title: "Return transfer",
    desc: "Chauffeur returns you at your convenience.",
  },
];

const LOGISTICS = [
  {
    icon: Stethoscope,
    label: "CLINIC",
    name: "The Executive Medical Centre",
    line1: "New York · Executive Diagnostics",
    line2: "Appointment Oct 08 · 09:00 AM",
  },
  {
    icon: Car,
    label: "CHAUFFEUR",
    name: "Omar Khalid",
    line1: "Mercedes S-Class",
    line2: "Pickup 08:10 AM",
  },
  {
    icon: Languages,
    label: "TRANSLATOR",
    name: "Elena Petrova",
    line1: "English / Russian",
    line2: "",
  },
  {
    icon: FlaskConical,
    label: "LABORATORY",
    name: "Royal Diagnostic Laboratory",
    line1: "Full panel, 6h turnaround",
    line2: "",
  },
];

const ACTIVITY = [
  {
    title: "Reservation submitted",
    meta: "Sep 23, 2026 · 09:41 · Alexander Morgan",
  },
  {
    title: "Payment of AED 13,350 confirmed",
    meta: "Sep 23, 2026 · 10:02 · System",
  },
  {
    title: "Sophia Laurent assigned as concierge",
    meta: "Sep 23, 2026 · 11:15 · Admin",
  },
  {
    title: "Clinic confirmed for Oct 08, 09:00",
    meta: "Sep 24, 2026 · 08:30 · Sophia Laurent",
  },
  { title: "Request Received", meta: "Sep 25, 2026" },
];

const DOCUMENTS = [
  { title: "Executive Health Intake.pdf", type: "Intake Form", size: "312 KB" },
  { title: "Medical History.pdf", type: "Medical Record", size: "1.4 MB" },
  { title: "Pro-forma Invoice HE-0847.pdf", type: "Invoice", size: "96 KB" },
];

export type ModalMission = {
  tag: string;
  title: string;
  ref: string;
  date: string;
  time: string;
  location: string;
  badge: string;
};

export function MissionDetailModal({
  mission,
  onClose,
}: {
  mission: ModalMission;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-full max-w-3xl overflow-y-auto rounded-3xl border border-black/5 bg-[#faf7f1] text-[#222] shadow-2xl"
      >
        {/* Header */}
        <div className="relative overflow-hidden border-b border-black/5 p-6 lg:p-8">
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2">
            <Image
              src="/figma/banner-corporate.png"
              alt=""
              fill
              className="object-cover opacity-10"
              style={{
                maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 40%, transparent 100%)",
              }}
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 grid size-8 place-items-center rounded-full bg-black/5 text-[#222]/60 hover:bg-black/10"
          >
            <X className="size-4" />
          </button>

          <p className="text-[11px] font-medium tracking-[0.2em] text-[#c98a4b] uppercase">
            {mission.tag}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3 pr-10">
            <h2 className="font-serif text-3xl text-[#222]">{mission.title}</h2>
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                BADGE_STYLES[mission.badge] ?? "bg-[#f3f3f3] text-[#6b6b6b]"
              }`}
            >
              {mission.badge}
            </span>
            <span className="rounded-full border border-[#eabe83]/50 bg-[#fdf1df] px-3 py-1 text-[10px] font-medium text-[#c98a4b]">
              VIP
            </span>
          </div>
          <p className="mt-1 text-xs text-[#222]/40">Ref {mission.ref}</p>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-[#222]/70">
            <MetaItem src="/calendar-gray.svg" label={mission.date} />
            <MetaItem src="/clock-gray.svg" label={mission.time} />
            <MetaItem src="/location-gray.svg" label={mission.location} />
          </div>
        </div>

        {/* Tabs */}
        <div className="mx-6 mt-4 flex flex-wrap gap-1 rounded-full bg-black/[0.03] p-1.5 lg:mx-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition ${
                tab === t
                  ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                  : "text-[#222]/50 hover:text-[#222]/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-5 p-6 lg:grid-cols-[1fr_300px] lg:p-8">
          <div className="rounded-2xl border border-black/5 bg-white p-5">
            {tab === "Overview" && <OverviewTab />}
            {tab === "Logistics" && <LogisticsTab />}
            {tab === "Activity" && <ActivityTab />}
            {tab === "Document" && <DocumentTab />}
            {tab === "Booking Details" && (
              <BookingTab mission={mission} />
            )}
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-black/5 bg-white p-4">
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#222]/40 uppercase">
                Your Concierge
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/figma/avatar-marcus.png"
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                  <span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-white bg-[#2bb673]" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-[#222]">Marcus Reed</p>
                  <p className="text-[11px] text-[#222]/50">Medical Concierge</p>
                </div>
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#fdeedd] px-3 py-2.5 text-xs font-medium text-[#222]">
                <Image src="/figma/message-gray.svg" alt="" width={15} height={15} />
                Message
              </button>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-4">
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#222]/40 uppercase">
                Payment Summary
              </p>
              <dl className="mt-3 flex flex-col gap-2 text-xs text-[#222]/60">
                <Row k="Subtotal" v="USD 12,500" />
                <Row k="Add-ons" v="USD 850" />
              </dl>
              <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-3 text-sm">
                <span className="font-medium text-[#222] uppercase">TOTAL</span>
                <span className="text-sm">
                  USD{" "}
                  <span className="font-serif text-lg text-[#761c37]">
                    12,500
                  </span>
                </span>
              </div>
              <dl className="mt-3 flex flex-col gap-2 border-t border-black/5 pt-3 text-xs text-[#222]/60">
                <Row k="Method" v="Visa •••• 4417" />
                <div className="flex items-center justify-between">
                  <dt>Status</dt>
                  <dd>
                    <span className="rounded-full bg-[#dcf5e6] px-2.5 py-0.5 text-[10px] font-medium text-[#1f9d5c]">
                      Paid
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BADGE_STYLES: Record<string, string> = {
  "Clinic Confirmed": "bg-[#fcdddb] text-[#b23a4e]",
  "In Preparation": "bg-[#fff4e5] text-[#9a6a1b]",
  "Request Received": "bg-[#f3f3f3] text-[#6b6b6b]",
};

function MetaItem({ src, label }: { src: string; label: string }) {
  return (
    <span className="flex items-center gap-2 text-[#222]/70">
      <span className="grid size-7 place-items-center rounded-full bg-black/5">
        <Image src={src} alt="" width={14} height={14} />
      </span>
      {label}
    </span>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt>{k}</dt>
      <dd className="font-medium text-[#222]">{v}</dd>
    </div>
  );
}

function OverviewTab() {
  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-[#222] uppercase">
            Live Mission Timeline
          </h3>
          <p className="text-xs text-[#c98a4b]">
            Current stage: Chauffeur Assigned
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[#fff4e5] px-3 py-1 text-[10px] font-medium text-[#9a6a1b]">
          In Progress
        </span>
      </div>

      <ol className="relative mt-5 flex flex-col gap-5 pl-1">
        <span className="absolute top-2 bottom-2 left-[9px] w-px bg-black/10" />
        {TIMELINE.map((t) => (
          <li key={t.title} className="relative flex gap-3">
            <span className="z-10 mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-[#eabe83] text-white">
              <Check className="size-3" strokeWidth={3} />
            </span>
            <div className="leading-snug">
              <p className="text-sm font-medium text-[#222]">{t.title}</p>
              {t.desc && <p className="text-xs text-[#222]/50">{t.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LogisticsTab() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {LOGISTICS.map((l) => {
        const Icon = l.icon;
        return (
          <div
            key={l.label}
            className="rounded-xl border border-black/5 bg-[#faf7f1] p-4"
          >
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] text-[#222]/50 uppercase">
              <Icon className="size-4 text-[#c98a4b]" />
              {l.label}
            </div>
            <p className="mt-3 text-sm font-medium text-[#222]">{l.name}</p>
            <p className="text-xs text-[#222]/50">{l.line1}</p>
            {l.line2 && <p className="text-xs text-[#222]/50">{l.line2}</p>}
          </div>
        );
      })}
    </div>
  );
}

function ActivityTab() {
  return (
    <ol className="relative flex flex-col gap-5 pl-1">
      <span className="absolute top-2 bottom-2 left-[5px] w-px bg-black/10" />
      {ACTIVITY.map((a, i) => (
        <li key={i} className="relative flex gap-3">
          <span className="z-10 mt-1 size-2.5 shrink-0 rounded-full bg-[#761c37] ring-4 ring-[#761c37]/15" />
          <div className="leading-snug">
            <p className="text-xs text-[#222]/40">{a.meta}</p>
            <p className="text-sm font-medium text-[#222]">{a.title}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function DocumentTab() {
  return (
    <div className="flex flex-col gap-3">
      {DOCUMENTS.map((d) => (
        <div
          key={d.title}
          className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#faf7f1] p-3"
        >
          <span className="grid size-10 place-items-center rounded-lg bg-[#fdeedd] text-[#c98a4b]">
            <FileText className="size-5" />
          </span>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-medium text-[#222]">{d.title}</p>
            <p className="text-xs text-[#222]/50">
              {d.type} · {d.size}
            </p>
          </div>
          <button className="grid size-8 place-items-center rounded-lg bg-black/5 text-[#222]/60 hover:bg-black/10">
            <IoEye className="size-4" />
          </button>
          <button className="grid size-8 place-items-center rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] text-white">
            <Download className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

function BookingTab({ mission }: { mission: ModalMission }) {
  const rows: [string, string][] = [
    ["Date", mission.date],
    ["Time", mission.time],
    ["Location", mission.location],
    ["Clinic", "The Executive Medical Centre"],
    ["Reference", mission.ref],
  ];
  const inclusions = [
    "Private executive clinic",
    "Comprehensive diagnostics",
    "Specialist consultation",
    "VIP chauffeur",
    "Dedicated concierge",
    "Medical report",
  ];
  return (
    <div className="flex flex-col gap-5">
      <dl className="flex flex-col divide-y divide-black/5 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between py-2.5">
            <dt className="text-[#222]/50">{k}</dt>
            <dd className="font-medium text-[#222]">{v}</dd>
          </div>
        ))}
      </dl>
      <div>
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#c98a4b] uppercase">
          Inclusions
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#222]/80 sm:grid-cols-2">
          {inclusions.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check className="size-4 text-[#c98a4b]" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
