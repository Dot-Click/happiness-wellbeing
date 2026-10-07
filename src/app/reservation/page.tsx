"use client";

import { Check, ChevronDown, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useTheme } from "@/components/theme-provider";

const DATES = [
  "October 08, 2026",
  "October 13, 2026",
  "October 18, 2026",
  "October 22, 2026",
];

const INCLUSIONS = [
  "Private executive clinic",
  "Comprehensive diagnostics",
  "Specialist consultation",
  "VIP chauffeur",
  "Dedicated concierge",
  "Medical report",
  "Optional translator",
];

const ADDONS = [
  {
    id: "anonymity",
    name: "Secure Anonymity Mode",
    desc: "Discreet registration under a protected client reference.",
    price: 1500,
  },
  {
    id: "airport",
    name: "Premium Airport Transfer",
    desc: "Chauffeured arrival and departure with fast-track handling.",
    price: 850,
  },
  {
    id: "translator",
    name: "Dedicated Medical Translator",
    desc: "A specialist translator present throughout your appointment.",
    price: 1500,
  },
  {
    id: "chauffeur",
    name: "Extended Chauffeur Service",
    desc: "On-call car and driver for the full day of your experience.",
    price: 900,
  },
];

const STEPS = ["Scope", "Personalize", "Confirm"];
const SUBTOTAL = 12500;

export default function ReservationPage() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [selectedDate, setSelectedDate] = useState(DATES[0]);
  const [time, setTime] = useState("");
  const [addons, setAddons] = useState<Record<string, boolean>>({
    airport: true,
    chauffeur: true,
  });
  const [docs, setDocs] = useState(0);
  const [step, setStep] = useState(0);

  const addonsTotal = useMemo(
    () =>
      ADDONS.reduce((sum, a) => (addons[a.id] ? sum + a.price : sum), 0),
    [addons],
  );
  const selectedAddons = ADDONS.filter((a) => addons[a.id]);
  const total = SUBTOTAL + addonsTotal;

  const toggleAddon = (id: string) =>
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <AppShell active="/missions">
      <section className="relative flex min-h-[45vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/figma/hero-city.png" alt="" fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: dark
                ? "linear-gradient(to bottom, rgba(15,2,2,0.5) 0%, rgba(15,2,2,0.85) 60%, #120606 100%)"
                : "linear-gradient(to bottom, rgba(15,2,2,0.5) 0%, rgba(250,246,240,0.5) 70%, #faf6f0 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: dark
                ? "linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 30%)"
                : "linear-gradient(to right, rgba(255,255,255,0.45) 0%, transparent 30%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-36 pb-12 lg:px-10">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#D0A33B] uppercase">
            Reservation
          </p>
          <h1 className="mt-2 font-serif text-[clamp(32px,4vw,52px)] text-[#222]">
            Executive Health <span className="text-[#913F58]">360</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            A private reservation, arranged around your schedule and preferences.
          </p>

          <ol className="mt-8 flex items-center text-sm">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center">
                <button
                  onClick={() => setStep(i)}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={`inline-flex size-7 items-center justify-center rounded-full text-xs font-medium ${
                      i <= step
                        ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                        : "border border-[#eabe83]/50 bg-transparent text-[#f4c481]"
                    }`}
                  >
                    {i < step ? <Check className="size-3.5" /> : i + 1}
                  </span>
                  <span
                    className={
                      i === step
                        ? "font-medium text-white"
                        : i < step
                          ? "text-white/80"
                          : "text-white/50"
                    }
                  >
                    {s}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <span className="mx-4 h-px w-12 border-t border-dashed border-white/25" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 lg:grid-cols-[1fr_320px] lg:px-10">
        <div
          className={`rounded-2xl border p-6 ${
            dark
              ? "border-white/10 bg-[#1b0a0a]"
              : "border-black/5 bg-white"
          }`}
        >
          {step === 0 && (
            <ScopeStep
              dark={dark}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              time={time}
              setTime={setTime}
            />
          )}
          {step === 1 && (
            <PersonalizeStep
              dark={dark}
              addons={addons}
              toggleAddon={toggleAddon}
              docs={docs}
              setDocs={setDocs}
            />
          )}
          {step === 2 && (
            <ConfirmStep
              dark={dark}
              selectedDate={selectedDate}
              time={time}
              selectedAddons={selectedAddons}
              docs={docs}
              addonsTotal={addonsTotal}
              total={total}
            />
          )}

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className={`flex-1 rounded-xl border py-3 text-sm font-medium disabled:opacity-40 ${
                dark
                  ? "border-white/20 bg-white/5 text-white/80"
                  : "border-black/10 bg-black/[0.03] text-[#222]/80"
              }`}
            >
              Back
            </button>
            <button
              onClick={() => setStep((s) => Math.min(2, s + 1))}
              className="flex-1 rounded-xl bg-gradient-to-r from-[#761c37] to-[#913f58] py-3 text-sm font-medium text-white"
            >
              {step === 2 ? "Confirm & Pay →" : "Continue →"}
            </button>
          </div>
        </div>

        {/* Summary */}
        <aside
          className={`h-fit rounded-2xl border p-5 ${
            dark
              ? "border-white/10 bg-[#1b0a0a]"
              : "border-black/5 bg-white"
          }`}
        >
          <div
            className={`flex items-center gap-3 pb-4 ${
              dark ? "" : ""
            }`}
          >
            <div className="relative size-14 overflow-hidden rounded-lg">
              <Image
                src="/figma/card-executive-health.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-[0.18em] text-[#f4c481] uppercase">
                Executive Health
              </p>
              <h4
                className={`font-serif text-base ${dark ? "text-white" : "text-[#222]"}`}
              >
                Executive Health 360
              </h4>
            </div>
          </div>

          <dl
            className={`flex flex-col gap-2 border-t py-3 text-xs ${
              dark
                ? "border-white/10 text-white/70"
                : "border-black/5 text-[#222]/60"
            }`}
          >
            {[
              ["Date", selectedDate],
              ["Time", time || "Not selected"],
              [
                "Add-ons",
                selectedAddons.length
                  ? `${selectedAddons.length} selected`
                  : "None",
              ],
              ["Documents", `${docs} uploaded`],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between">
                <dt>{k}</dt>
                <dd className={dark ? "text-white" : "text-[#222]"}>{v}</dd>
              </div>
            ))}
          </dl>

          <dl
            className={`flex flex-col gap-2 border-t py-3 text-xs ${
              dark
                ? "border-white/10 text-white/70"
                : "border-black/5 text-[#222]/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd className={dark ? "text-white" : "text-[#222]"}>
                AED {SUBTOTAL.toLocaleString()}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Add-ons</dt>
              <dd className={dark ? "text-white" : "text-[#222]"}>
                AED {addonsTotal.toLocaleString()}
              </dd>
            </div>
          </dl>

          <div
            className={`flex items-center justify-between border-t pt-3 text-sm ${
              dark ? "border-white/10" : "border-black/5"
            }`}
          >
            <span className={dark ? "text-white" : "text-[#222]"}>Total</span>
            <span
              className={`font-serif text-xl ${dark ? "text-white" : "text-[#222]"}`}
            >
              AED <span className="text-[#761c37]">{total.toLocaleString()}</span>
            </span>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}

/* ---------- Step 1: Scope ---------- */

function ScopeStep({
  dark,
  selectedDate,
  setSelectedDate,
  time,
  setTime,
}: {
  dark: boolean;
  selectedDate: string;
  setSelectedDate: (d: string) => void;
  time: string;
  setTime: (t: string) => void;
}) {
  return (
    <>
      <SectionTitle>Preferred Date</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {DATES.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDate(d)}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              d === selectedDate
                ? "border-transparent bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                : dark
                  ? "border-white/10 bg-white/5 text-white/70"
                  : "border-black/10 bg-black/[0.03] text-[#222]/70"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <SubLabel dark={dark}>Preferred time</SubLabel>
        <div className="relative mt-1">
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={`h-11 w-full appearance-none rounded-xl border pr-9 pl-4 text-sm outline-none ${
              dark
                ? "border-white/10 bg-white/5 text-white"
                : "border-black/10 bg-black/[0.03] text-[#222]"
            }`}
          >
            <option value="">Select a time</option>
            <option>09:00 AM</option>
            <option>11:00 AM</option>
            <option>02:00 PM</option>
          </select>
          <ChevronDown
            className={`pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 ${
              dark ? "text-white/50" : "text-[#222]/50"
            }`}
          />
        </div>
      </div>

      <SectionTitle className="mt-8">Client Details</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field dark={dark} label="Full name" value="Alexander Morgan" />
        <Field dark={dark} label="Email" value="a.morgan@morgancapital.com" />
        <Field dark={dark} label="Phone" value="+971 50 118 4472" />
        <Field dark={dark} label="Country" value="United Arab Emirates" />
      </div>

      <SectionTitle className="mt-8">Inclusions</SectionTitle>
      <div
        className={`grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 ${
          dark ? "text-white/80" : "text-[#222]/80"
        }`}
      >
        {INCLUSIONS.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <Check className="size-4 text-[#c98a4b]" />
            {item}
          </span>
        ))}
      </div>
    </>
  );
}

/* ---------- Step 2: Personalize ---------- */

function PersonalizeStep({
  dark,
  addons,
  toggleAddon,
  docs,
  setDocs,
}: {
  dark: boolean;
  addons: Record<string, boolean>;
  toggleAddon: (id: string) => void;
  docs: number;
  setDocs: (n: number) => void;
}) {
  return (
    <>
      <SectionTitle>Personalize Your Experience</SectionTitle>
      <p className={`-mt-2 mb-4 text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}>
        Add optional enhancements to your reservation.
      </p>

      <div className="flex flex-col">
        {ADDONS.map((a) => {
          const on = !!addons[a.id];
          return (
            <div
              key={a.id}
              className={`flex items-center justify-between gap-4 border-t py-4 first:border-t-0 first:pt-0 ${
                dark ? "border-white/5" : "border-black/5"
              }`}
            >
              <div>
                <p className={`text-sm font-medium ${dark ? "text-white" : "text-[#222]"}`}>
                  {a.name}
                </p>
                <p className={`text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}>
                  {a.desc}
                </p>
                <p className="mt-1 text-xs font-medium text-[#c98a4b]">
                  AED {a.price.toLocaleString()}
                </p>
              </div>
              <button
                type="button"
                onClick={() => toggleAddon(a.id)}
                aria-pressed={on}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  on
                    ? "bg-gradient-to-r from-[#761c37] to-[#913f58]"
                    : dark
                      ? "bg-white/15"
                      : "bg-black/10"
                }`}
              >
                <span
                  className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-all ${
                    on ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      <SectionTitle className="mt-8">Medical Documents</SectionTitle>
      <p className={`-mt-2 mb-3 text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}>
        Share any relevant medical history or referrals ahead of your
        appointment. Optional.
      </p>
      <button
        type="button"
        onClick={() => setDocs(docs + 1)}
        className={`flex w-full flex-col items-center gap-3 rounded-xl border border-dashed py-10 text-center ${
          dark
            ? "border-white/15 bg-white/5"
            : "border-black/15 bg-black/[0.03]"
        }`}
      >
        <span className="grid size-12 place-items-center rounded-full bg-gradient-to-b from-[#781f3a] to-[#4a1123]">
          <UploadCloud className="size-5 text-[#f4c481]" />
        </span>
        <span className={`text-sm font-medium ${dark ? "text-white" : "text-[#222]"}`}>
          Drag and drop files here
        </span>
        <span className={`text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}>
          or click to browse — PDF, JPG, PNG
        </span>
        {docs > 0 && (
          <span className="text-xs text-[#c98a4b]">{docs} file(s) added</span>
        )}
      </button>
    </>
  );
}

/* ---------- Step 3: Confirm ---------- */

function ConfirmStep({
  dark,
  selectedDate,
  time,
  selectedAddons,
  docs,
  addonsTotal,
  total,
}: {
  dark: boolean;
  selectedDate: string;
  time: string;
  selectedAddons: { name: string }[];
  docs: number;
  addonsTotal: number;
  total: number;
}) {
  const rows: [string, string][] = [
    ["Experience", "Executive Health 360"],
    ["Date", selectedDate],
    ["Time", time || "Not selected"],
    [
      "Add-ons",
      selectedAddons.length
        ? selectedAddons.map((a) => a.name).join(", ")
        : "None",
    ],
    ["Documents", docs ? `${docs} uploaded` : "None provided"],
  ];
  return (
    <>
      <SectionTitle>Review Your Reservation</SectionTitle>
      <dl
        className={`flex flex-col divide-y text-sm ${
          dark ? "divide-white/5" : "divide-black/5"
        }`}
      >
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-start justify-between gap-6 py-2.5">
            <dt className={dark ? "text-white/50" : "text-[#222]/50"}>{k}</dt>
            <dd
              className={`text-right font-medium ${dark ? "text-white" : "text-[#222]"}`}
            >
              {v}
            </dd>
          </div>
        ))}
      </dl>
      <div
        className={`mt-2 flex flex-col gap-2 border-t pt-3 text-sm ${
          dark ? "border-white/10 text-white/60" : "border-black/5 text-[#222]/60"
        }`}
      >
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className={dark ? "text-white" : "text-[#222]"}>
            AED {SUBTOTAL.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Add-ons</span>
          <span className={dark ? "text-white" : "text-[#222]"}>
            AED {addonsTotal.toLocaleString()}
          </span>
        </div>
        <div
          className={`flex items-center justify-between border-t pt-3 text-base ${
            dark ? "border-white/10" : "border-black/5"
          }`}
        >
          <span className={dark ? "text-white" : "text-[#222]"}>Total</span>
          <span
            className={`font-serif text-xl ${dark ? "text-white" : "text-[#222]"}`}
          >
            AED <span className="text-[#761c37]">{total.toLocaleString()}</span>
          </span>
        </div>
      </div>

      <SectionTitle className="mt-8">Payment</SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        <Field dark={dark} label="Cardholder name" value="Alexander Morgan" />
        <Field dark={dark} label="Card number" value="•••• •••• •••• 4472" />
        <div className="grid grid-cols-2 gap-4">
          <Field dark={dark} label="Expiry" value="09/29" />
          <Field dark={dark} label="CVC" value="•••" />
        </div>
      </div>
    </>
  );
}

/* ---------- shared ---------- */

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-3 text-[11px] font-medium tracking-[0.2em] text-[#c98a4b] uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

function SubLabel({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark: boolean;
}) {
  return (
    <label className={`text-xs ${dark ? "text-white/60" : "text-[#222]/60"}`}>
      {children}
    </label>
  );
}

function Field({
  dark,
  label,
  value,
}: {
  dark: boolean;
  label: string;
  value: string;
}) {
  return (
    <div>
      <SubLabel dark={dark}>{label}</SubLabel>
      <input
        defaultValue={value}
        className={`mt-1 h-11 w-full rounded-xl border px-3 text-sm outline-none focus:border-[#761c37] ${
          dark
            ? "border-white/10 bg-white/5 text-white"
            : "border-black/10 bg-black/[0.03] text-[#222]"
        }`}
      />
    </div>
  );
}
