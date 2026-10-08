"use client";

import { Check, HeadphonesIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { useTheme } from "@/components/theme-provider";

/** Solid map-pin icon with a white punched-out dot, matching the reference mark. */
function FilledPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="3" fill="white" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "Executive Health & Vitality",
    description: "Screening, diagnostics and longevity",
  },
  {
    title: "Executive Serenity",
    description: "Restorative retreats and recovery",
  },
  {
    title: "Corporate Buddy",
    description: "Teams, travel and care",
  },
];

type TimelineStep = {
  label: string;
  sub?: string;
  state: "done" | "current" | "pending";
};

const TIMELINE: TimelineStep[] = [
  { label: "Request Received", sub: "Sep 25, 2026", state: "done" },
  { label: "Clinic Confirmed", sub: "In progress", state: "current" },
  { label: "Chauffeur Assigned", state: "pending" },
  { label: "Appointment Upcoming", state: "pending" },
  { label: "Medical Report", state: "pending" },
  { label: "Experience Complete", state: "pending" },
];

const EXPERIENCES = [
  {
    tag: "Executive Screening",
    title: "Executive Health 360",
    desc: "Comprehensive executive screening with private clinic access, diagnostics, chauffeur and dedicated.",
    price: "$150.00 USD",
    duration: "1 Day",
    location: "New York",
    img: "/figma/card-health2.png",
  },
  {
    tag: "Preventive Medicine",
    title: "Private Preventive Assessment",
    desc: "A focused half-day preventive assessment with senior physician review and a personal risk profile.",
    price: "$150.00 USD",
    duration: "1 Day",
    location: "New York",
    img: "/figma/card-international.png",
  },
  {
    tag: "Restorative",
    title: "Executive Serenity Retreat",
    desc: "Three days of guided recovery: sleep, stress physiology and restorative therapies in complete.",
    price: "$150.00 USD",
    duration: "1 Day",
    location: "New York",
    img: "/figma/card-corporate.png",
  },
  {
    tag: "Executive Screening",
    title: "Executive Health 360",
    desc: "Comprehensive executive screening with private clinic access, diagnostics, chauffeur and dedicated.",
    price: "$150.00 USD",
    duration: "1 Day",
    location: "New York",
    img: "/figma/card-health2.png",
  },
  {
    tag: "International Care",
    title: "International Medical Concierge",
    desc: "End-to-end coordination of treatment abroad: specialists, travel, translation and family logistics.",
    price: "$150.00 USD",
    duration: "10 Days",
    location: "New York",
    img: "/figma/card-international.png",
  },
  {
    tag: "Corporate",
    title: "Corporate Executive Health Day",
    desc: "A private on-site or in-clinic health day for leadership teams, with consolidated corporate reporting.",
    price: "$150.00 USD",
    duration: "1 Day",
    location: "New York",
    img: "/figma/card-corporate.png",
  },
];

export default function DiscoverPage() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <AppShell active="/discover">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36">
        <div className="absolute inset-0">
          <Image
            src="/figma/hero-city.png"
            alt=""
            fill
            priority
            className="opacity-90"
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
          {/* Readability tint for the text block (left side) — subtle so the image stays visible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(15,2,2,0.45) 0%, rgba(15,2,2,0.15) 55%, rgba(15,2,2,0) 100%)",
            }}
          />
          {/* Warm tan tint, left to right */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #CAB298 0%, transparent 100%)",
            }}
          />
          {/* Bottom fade into page background */}
          <div
            className="absolute inset-0"
            style={{
              background: dark
                ? "linear-gradient(to bottom, rgba(18,6,6,0) 0%, rgba(18,6,6,0) 65%, rgba(18,6,6,0.75) 90%, #120606 100%)"
                : "linear-gradient(to bottom, rgba(248,243,235,0) 0%, rgba(248,243,235,0) 65%, rgba(248,243,235,0.75) 90%, #f8f3eb 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 lg:px-10">
          <p className="text-[12px] font-medium tracking-[0.22em] text-[#502E00] uppercase">
            Good evening, Daniel
          </p>
          <h1 className="font-serif text-[clamp(36px,4.6vw,64px)] leading-[1.08]">
            <span className="block text-white">How can we make you</span>
            <span className="block text-[#761C37]">
              experience effortless today?
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-black">
            Your concierge is standing by. Here&apos;s what&apos;s arranged for
            you, what&apos;s in progress, and what&apos;s waiting on your reach.
          </p>
          <div>
            <button className="flex items-center gap-2 rounded-xl border border-white/15 bg-gradient-to-r from-[#761c37] to-[#913f58] px-5 py-2.5 text-sm font-medium text-white">
              All Experiences
              <Image src="/figma/icon-arrow.svg" alt="" width={13} height={11} />
            </button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICES.map(({ title, description }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-xl border-t border-white/40 p-8 text-center backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.35) 100%)",
                }}
              >
                {/* Glossy highlight sheen */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)",
                  }}
                />
                <p className="relative text-sm font-medium text-black">{title}</p>
                <p className="relative mt-1.5 text-xs text-black">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-hero: Active Mission + Timeline + Right column */}
      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-6 pb-10 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          {/* Big card: Active Mission + Timeline */}
          <article
            className={`relative overflow-hidden rounded-2xl border p-6 ${
              dark
                ? "border-white/10 bg-[#1a0b0b]"
                : "border-black/5 bg-white"
            }`}
          >
            {/* Faint background image on right */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 opacity-10">
              <Image
                src="/figma/hero-city.png"
                alt=""
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  dark
                    ? "bg-gradient-to-r from-[#1a0b0b] via-[#1a0b0b]/60 to-transparent"
                    : "bg-gradient-to-r from-white via-white/60 to-transparent"
                }`}
              />
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_1fr]">
              {/* Left: mission details */}
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
                  Active Mission
                </p>
                <h3
                  className={`font-serif text-2xl leading-tight ${
                    dark ? "text-white" : "text-[#222]"
                  }`}
                >
                  Private Preventive Assessment
                </h3>
                <p
                  className={`text-xs ${dark ? "text-white/60" : "text-[#222]/60"}`}
                >
                  Reference HE-260925-0849
                </p>

                <div className="mt-2 flex flex-col gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <Image src="/clock.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
                    <span className={dark ? "text-white" : "text-[#222]"}>
                      2026-10-11 · 09:00 AM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FilledPin className="size-4 shrink-0 text-[#EABE83]" />
                    <span className={dark ? "text-white" : "text-[#222]"}>
                      New York
                    </span>
                  </div>
                </div>

                <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-gradient-to-r from-[#761c37] to-[#913f58] px-4 py-2 text-xs font-medium text-white">
                  View Missions →
                </button>
              </div>

              {/* Right: timeline */}
              <div className="flex flex-col gap-4">
                <p className="text-[11px] font-medium tracking-[0.2em] text-[#c98a4b] uppercase">
                  Clinic Confirmed
                </p>
                <ol className="relative flex flex-col gap-5">
                  {/* Vertical connector */}
                  <span
                    className={`absolute top-2 bottom-2 left-[9px] w-px ${
                      dark ? "bg-white/15" : "bg-black/10"
                    }`}
                  />
                  {TIMELINE.map((step) => (
                    <li
                      key={step.label}
                      className="relative flex items-start gap-3"
                    >
                      <span
                        className={`relative z-10 mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full border ${
                          step.state === "done"
                            ? "border-[#EABE83] bg-[#EABE83]"
                            : step.state === "current"
                              ? "border-[#761c37] bg-[#761c37]"
                              : dark
                                ? "border-white/25 bg-transparent"
                                : "border-black/15 bg-white"
                        }`}
                      >
                        {step.state === "done" && (
                          <Check
                            className="size-2.5 text-white"
                            strokeWidth={3}
                          />
                        )}
                        {step.state === "current" && (
                          <span className="block size-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <div className="flex flex-col leading-tight">
                        <span
                          className={`text-sm font-semibold ${
                            step.state === "pending"
                              ? dark
                                ? "text-white/60"
                                : "text-[#222]/60"
                              : dark
                                ? "text-white"
                                : "text-[#222]"
                          }`}
                        >
                          {step.label}
                        </span>
                        {step.sub && (
                          <span
                            className={`text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}
                          >
                            {step.sub}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>

          {/* Right column: Concierge + Upcoming Appointment */}
          <div className="flex flex-col gap-4">
            <article
              className={`rounded-2xl border p-5 ${
                dark
                  ? "border-white/10 bg-[#1a0b0b]"
                  : "border-black/5 bg-white"
              }`}
            >
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
                Active Mission
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <Image
                      src="/figma/avatar-marcus.png"
                      alt=""
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover"
                    />
                    <span
                      className={`absolute right-0 bottom-0 size-3 rounded-full border-2 bg-[#0CAF72] ${
                        dark ? "border-[#1a0b0b]" : "border-white"
                      }`}
                    />
                  </div>
                  <div className="leading-tight">
                    <p
                      className={`text-sm font-semibold ${dark ? "text-white" : "text-[#222]"}`}
                    >
                      Marcus Reed
                    </p>
                    <p
                      className={`text-[11px] ${dark ? "text-white/50" : "text-[#222]/50"}`}
                    >
                      Medical Concierge
                    </p>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1.5 rounded-full bg-[#EAF8F0] px-2.5 py-1 text-[11px] font-medium ${
                    dark ? "text-[#0f2d20]" : "text-[#222]"
                  }`}
                >
                  <span className="size-1.5 rounded-full bg-[#0CAF72]" />
                  24/support
                </span>
              </div>
              <button className="mt-4 flex w-full items-center gap-2.5 rounded-xl border border-black/10 bg-gradient-to-r from-white to-[#FBEFDE] px-4 py-2.5 text-xs font-semibold text-[#222]">
                <Image src="/figma/message-gray.svg" alt="" width={16} height={16} />
                Message Concierge
              </button>
            </article>

            <article
              className={`rounded-2xl border p-5 ${
                dark
                  ? "border-white/10 bg-[#1a0b0b]"
                  : "border-black/5 bg-white"
              }`}
            >
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
                Upcoming Appointment
              </p>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#FBF4F5]">
                    <Image src="/calendar.svg" alt="" width={15} height={15} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span
                      className={`text-xs font-medium ${dark ? "text-white" : "text-[#222]"}`}
                    >
                      Private Preventive Assessment
                    </span>
                    <span
                      className={`text-[11px] ${dark ? "text-white/50" : "text-[#222]/50"}`}
                    >
                      2026-10-11 at 09:00 AM
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#FBF4F5]">
                    <FilledPin className="size-4 text-[#8A3750]" />
                  </span>
                  <span
                    className={`text-xs ${dark ? "text-white" : "text-[#222]"}`}
                  >
                    Dubai
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Curated for you */}
      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
        <Link
          href="/reservation"
          className="relative block overflow-hidden rounded-[22px]"
        >
          <div className="relative h-[260px] w-full lg:h-[300px]">
            <Image
              src="/figma/card-international.png"
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,4,16,0.85)] via-[rgba(44,4,16,0.45)] to-[rgba(44,4,16,0.1)]" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
            <p className="text-[11px] font-medium tracking-[0.22em] text-white/80 uppercase">
              Curated for you
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
                  Good evening, Daniel
                </p>
                <h3 className="font-serif text-[clamp(28px,3.4vw,44px)] leading-tight text-white">
                  Corporate Executive Health Day
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-white/80">
                  A private on-site or in-clinic health day for leadership
                  teams, with consolidated corporate reporting.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs tracking-wide text-white/80 uppercase">
                  <span className="font-medium">$75.00 USD</span>
                  <span>1 Day (up to 12 executives)</span>
                  <span>Client premises / New York</span>
                </div>
              </div>
              <span className="flex items-center gap-2 text-sm font-medium text-[#f4c481]">
                View Experience →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Recommended experiences */}
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
        <p
          className={`mb-5 text-[11px] font-medium tracking-[0.2em] uppercase ${
            dark ? "text-white/70" : "text-[#222]/70"
          }`}
        >
          Recommended Experiences
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <article
              key={i}
              className={`group overflow-hidden rounded-2xl border ${
                dark
                  ? "border-white/10 bg-[#1a0b0b]"
                  : "border-black/5 bg-white"
              }`}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={e.img}
                  alt=""
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
                  {e.tag}
                </p>
                <h4
                  className={`font-serif text-lg ${dark ? "text-white" : "text-[#222]"}`}
                >
                  {e.title}
                </h4>
                <p className={`text-xs ${dark ? "text-white/60" : "text-[#222]/60"}`}>
                  {e.desc}
                </p>
                <div
                  className={`mt-2 flex items-center justify-between border-t pt-3 text-xs ${
                    dark ? "border-white/10" : "border-black/5"
                  }`}
                >
                  <span
                    className={`font-medium ${dark ? "text-white" : "text-[#222]"}`}
                  >
                    {e.price}
                  </span>
                  <span className={dark ? "text-white/50" : "text-[#222]/50"}>
                    {e.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`flex items-center gap-1 ${dark ? "text-white/60" : "text-[#222]/60"}`}
                  >
                    <FilledPin className="size-3 text-[#8A3750]" />
                    {e.location}
                  </span>
                  <Link
                    href="/reservation"
                    className="font-medium text-[#761c37]"
                  >
                    View Experience →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div
        className={`mx-auto flex max-w-6xl items-center justify-end gap-2 px-6 pb-6 text-[10px] lg:px-10 ${
          dark ? "text-white/40" : "text-[#222]/40"
        }`}
      >
        <ShieldCheck className="size-3" />
        End-to-end encrypted
        <HeadphonesIcon className="ml-2 size-3" aria-hidden="true" />
      </div>
    </AppShell>
  );
}
