"use client";

import { ArrowLeft, Check, Clock, Crown, MapPin, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";

const INCLUDED = [
  "Private executive clinic",
  "Comprehensive diagnostics",
  "Specialist consultation",
  "VIP chauffeur",
  "Dedicated concierge",
  "Medical report",
  "Optional translator",
];

const TIMELINE = [
  {
    time: "08:30",
    title: "Chauffeur collection",
    desc: "Mercedes S-Class from your residence or hotel.",
  },
  {
    time: "09:00",
    title: "Private arrival",
    desc: "Discreet entrance, no waiting room, concierge escort.",
  },
  {
    time: "09:30",
    title: "Diagnostics",
    desc: "Bloods, imaging, cardiac and metabolic assessment.",
  },
  {
    time: "13:00",
    title: "Private lunch",
    desc: "Light menu prepared in the executive suite.",
  },
  {
    time: "14:30",
    title: "Specialist consultation",
    desc: "Findings reviewed in full with your physician.",
  },
  {
    time: "16:00",
    title: "Return transfer",
    desc: "Chauffeur returns you at your convenience.",
  },
];

const ENHANCEMENTS = [
  {
    title: "Secure Anonymity Mode",
    desc: "Discreet registration under a protected client reference.",
    price: "AED 1,500",
  },
  {
    title: "Premium Airport Transfer",
    desc: "Private terminal meet-and-greet with executive sedan.",
    price: "AED 850",
  },
  {
    title: "Dedicated Medical Translator",
    desc: "Certified medical translator present for all consultations.",
    price: "AED 1,200",
  },
  {
    title: "Extended Chauffeur Service",
    desc: "Chauffeur retained for the full duration of your stay.",
    price: "AED 900",
  },
];

const DATES = [
  "October 08, 2026",
  "October 12, 2026",
  "October 15, 2026",
  "October 22, 2026",
  "November 03, 2026",
];

const OTHER = [
  {
    tag: "Preventive Medicine",
    title: "Private Preventive Assessment",
    meta: "AED 8,900 · Half Day",
    img: "/figma/card-health2.png",
  },
  {
    tag: "Restorative",
    title: "Executive Serenity Retreat",
    meta: "AED 16,500 · 3 Days",
    img: "/figma/card-corporate.png",
  },
  {
    tag: "International Care",
    title: "International Medical Concierge",
    meta: "AED 8,900 · Half Day",
    img: "/figma/card-international.png",
  },
];

export default function ExperiencePage() {
  return (
    <AppShell active="/discover" lightNav>
      {/* Hero */}
      <section className="relative mx-auto mt-20 max-w-6xl px-6 lg:px-10">
        <div className="relative h-[380px] w-full overflow-hidden rounded-3xl lg:h-[440px]">
          <Image
            src="/figma/card-international.png"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(44,4,16,0.35) 0%, rgba(44,4,16,0.1) 40%, rgba(44,4,16,0.55) 100%)",
            }}
          />
          <Link
            href="/discover"
            className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
          >
            <ArrowLeft className="size-3.5" /> Go a Back
          </Link>
          <div className="absolute bottom-6 left-6 flex flex-col gap-2 lg:bottom-10 lg:left-10">
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#f4c481] uppercase">
              Good evening, Daniel.
            </p>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] leading-tight text-white">
              Corporate Executive{" "}
              <span className="bg-[#761c37]/70 px-2">Health Day</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 lg:px-10">
        {[
          { icon: Wallet, label: "Investment", value: "AED 35,000" },
          { icon: Clock, label: "Duration", value: "1 Day" },
          { icon: MapPin, label: "Location", value: "Dubai" },
          { icon: Crown, label: "Access", value: "Experience" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white p-5 text-center shadow-[0_10px_30px_-18px_rgba(0,0,0,0.2)]"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#761c37] text-white">
              <Icon className="size-4" />
            </span>
            <p className="text-[11px] tracking-wide text-[#222]/50 uppercase">
              {label}
            </p>
            <p className="text-sm font-medium text-[#222]">{value}</p>
          </div>
        ))}
      </section>

      {/* Overview + Reserve */}
      <section className="mx-auto mt-6 grid max-w-6xl gap-5 px-6 lg:grid-cols-[1fr_320px] lg:px-10">
        <article className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-serif text-2xl text-[#222]">Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#222]/70">
            A single, unhurried day designed around one outcome: a complete and
            confidential picture of your health. Your concierge arranges private
            clinic access outside public hours, coordinates every diagnostic,
            and delivers a consolidated medical report reviewed by a senior
            specialist.
          </p>

          <p className="mt-6 text-[11px] font-medium tracking-[0.22em] text-[#222]/50 uppercase">
            What&apos;s included
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-y-2 text-sm text-[#222] sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-4 place-items-center rounded-full bg-[#f3e0e5] text-[#761c37]">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-7 text-[11px] font-medium tracking-[0.22em] text-[#222]/50 uppercase">
            Experience timeline
          </p>
          <ol className="relative mt-4 flex flex-col gap-5">
            <span className="absolute top-2 bottom-2 left-[9px] w-px bg-black/10" />
            {TIMELINE.map((t) => (
              <li key={t.time} className="relative flex items-start gap-3">
                <span className="relative z-10 mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full border border-[#EABE83] bg-[#EABE83] text-white">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-medium text-[#c98a4b]">
                    {t.time}
                  </p>
                  <p className="text-sm font-semibold text-[#222]">{t.title}</p>
                  <p className="text-xs text-[#222]/60">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-5">
          <p className="text-[11px] font-medium tracking-[0.22em] text-[#c98a4b] uppercase">
            Reserve this experience
          </p>
          <p className="mt-1 font-serif text-xl text-[#222]">AED 12,500</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {[
              { icon: Clock, label: "Duration", value: "1 Day" },
              { icon: MapPin, label: "Location", value: "Dubai" },
              {
                icon: Clock,
                label: "Selected date",
                value: "October 08, 2026",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-3"
              >
                <span className="flex items-center gap-2 text-[#222]/60">
                  <span className="grid size-6 place-items-center rounded-full bg-[#761c37] text-white">
                    <Icon className="size-3" />
                  </span>
                  {label}
                </span>
                <span className="text-[#222]">{value}</span>
              </div>
            ))}
          </div>
          <Link
            href="/reservation"
            className="mt-5 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#761c37] to-[#913f58] py-3 text-sm font-medium text-white"
          >
            Reserve This Experience →
          </Link>
          <Link
            href="/messages"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#fbefde] py-3 text-sm font-medium text-[#222]"
          >
            <Image
              src="/figma/message-gray.svg"
              alt=""
              width={16}
              height={16}
            />
            Message Concierge
          </Link>
        </aside>
      </section>

      {/* Optional Enhancements */}
      <section className="mx-auto mt-8 max-w-6xl px-6 lg:px-10">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#222]/50 uppercase">
          Optional enhancements
        </p>
        <div className="mt-4 flex flex-col divide-y divide-black/5 rounded-2xl bg-white px-5">
          {ENHANCEMENTS.map((e) => (
            <div
              key={e.title}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="leading-tight">
                <p className="text-sm font-medium text-[#222]">{e.title}</p>
                <p className="text-xs text-[#222]/50">{e.desc}</p>
              </div>
              <span className="font-serif text-base text-[#761c37]">
                {e.price}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-[#222]/50">
          Enhancements can be added during the reservation step.
        </p>
      </section>

      {/* Available dates */}
      <section className="mx-auto mt-8 max-w-6xl px-6 lg:px-10">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#222]/50 uppercase">
          Available dates
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {DATES.map((d, i) => (
            <button
              key={d}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                i === 0
                  ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                  : "bg-black/5 text-[#222]/70"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </section>

      {/* Concierge assistance */}
      <section className="mx-auto mt-8 max-w-6xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="relative size-10 shrink-0">
              <Image
                src="/figma/avatar-marcus.png"
                alt=""
                fill
                className="rounded-full object-cover"
              />
              <span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-white bg-[#1f9d63]" />
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#c98a4b] uppercase">
                Concierge assistance
              </p>
              <p className="text-sm font-medium text-[#222]">Marcus Reed</p>
              <p className="text-[11px] text-[#222]/50">Medical Concierge</p>
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-[#fbefde] px-4 py-2 text-xs font-medium text-[#222]">
            <Image
              src="/figma/message-gray.svg"
              alt=""
              width={14}
              height={14}
            />
            Speak to a Concierge
          </button>
        </div>
      </section>

      {/* Other experiences */}
      <section className="mx-auto mt-10 max-w-6xl px-6 pb-16 lg:px-10">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#222]/50 uppercase">
          Other experiences
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER.map((o) => (
            <article
              key={o.title}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white"
            >
              <div className="relative h-40 w-full">
                <Image src={o.img} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#c98a4b] uppercase">
                  {o.tag}
                </p>
                <h4 className="font-serif text-lg text-[#222]">{o.title}</h4>
                <p className="text-xs text-[#222]/50">{o.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
