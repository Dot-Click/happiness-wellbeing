"use client";

import { Check, ChevronDown, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";

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
    <AppShell active="/missions" forceDark>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/figma/hero-city.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,2,2,0.5)] via-[rgba(15,2,2,0.85)] to-[#120606]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-6 lg:px-10">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
            Reservation
          </p>
          <h1 className="mt-2 font-serif text-[clamp(32px,4vw,52px)] text-white">
            Executive Health <span className="text-[#f4c481]">360</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/60">
            A private reservation, arranged around your schedule and preferences.
          </p>

          <ol className="mt-8 flex items-center gap-3 text-xs">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <button
                  onClick={() => setStep(i)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition ${
                    i === step
                      ? "border-[#761c37] bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                      : i < step
                        ? "border-white/20 bg-white/5 text-white/70"
                        : "border-white/10 text-white/40"
                  }`}
                >
                  <span
                    className={`inline-flex size-5 items-center justify-center rounded-full text-[10px] ${
                      i === step ? "bg-white/20" : "bg-white/10"
                    }`}
                  >
                    {i < step ? <Check className="size-3" /> : i + 1}
                  </span>
                  {s}
                </button>
                {i < STEPS.length - 1 && (
                  <span className="h-px w-10 bg-white/15" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 lg:grid-cols-[1fr_320px] lg:px-10">
        <div className="rounded-2xl border border-white/10 bg-[#1b0a0a] p-6">
          {step === 0 && (
            <ScopeStep
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              time={time}
              setTime={setTime}
            />
          )}
          {step === 1 && (
            <PersonalizeStep
              addons={addons}
              toggleAddon={toggleAddon}
              docs={docs}
              setDocs={setDocs}
            />
          )}
          {step === 2 && (
            <ConfirmStep
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
              className="flex-1 rounded-xl border border-white/20 bg-white/5 py-3 text-sm font-medium text-white/80 disabled:opacity-40"
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
        <aside className="h-fit rounded-2xl border border-white/10 bg-[#1b0a0a] p-5">
          <div className="flex items-center gap-3 pb-4">
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
              <h4 className="font-serif text-base text-white">
                Executive Health 360
              </h4>
            </div>
          </div>

          <dl className="flex flex-col gap-2 border-t border-white/10 py-3 text-xs text-white/70">
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
                <dd className="text-white">{v}</dd>
              </div>
            ))}
          </dl>

          <dl className="flex flex-col gap-2 border-t border-white/10 py-3 text-xs text-white/70">
            <div className="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd className="text-white">AED {SUBTOTAL.toLocaleString()}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Add-ons</dt>
              <dd className="text-white">AED {addonsTotal.toLocaleString()}</dd>
            </div>
          </dl>

          <div className="flex items-center justify-between border-t border-white/10 pt-3 text-sm">
            <span className="text-white">Total</span>
            <span className="font-serif text-xl text-white">
              AED <span className="text-[#f4c481]">{total.toLocaleString()}</span>
            </span>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}

/* ---------- Step 1: Scope ---------- */

function ScopeStep({
  selectedDate,
  setSelectedDate,
  time,
  setTime,
}: {
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
                : "border-white/10 bg-white/5 text-white/70"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <SubLabel>Preferred time</SubLabel>
        <div className="relative mt-1">
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/5 pr-9 pl-4 text-sm text-white outline-none"
          >
            <option value="">Select a time</option>
            <option>09:00 AM</option>
            <option>11:00 AM</option>
            <option>02:00 PM</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-white/50" />
        </div>
      </div>

      <SectionTitle className="mt-8">Client Details</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name" value="Alexander Morgan" />
        <Field label="Email" value="a.morgan@morgancapital.com" />
        <Field label="Phone" value="+971 50 118 4472" />
        <Field label="Country" value="United Arab Emirates" />
      </div>

      <SectionTitle className="mt-8">Inclusions</SectionTitle>
      <div className="grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
        {INCLUSIONS.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <Check className="size-4 text-[#f4c481]" />
            {item}
          </span>
        ))}
      </div>
    </>
  );
}

/* ---------- Step 2: Personalize ---------- */

function PersonalizeStep({
  addons,
  toggleAddon,
  docs,
  setDocs,
}: {
  addons: Record<string, boolean>;
  toggleAddon: (id: string) => void;
  docs: number;
  setDocs: (n: number) => void;
}) {
  return (
    <>
      <SectionTitle>Personalize Your Experience</SectionTitle>
      <p className="-mt-2 mb-4 text-xs text-white/50">
        Add optional enhancements to your reservation.
      </p>

      <div className="flex flex-col">
        {ADDONS.map((a) => {
          const on = !!addons[a.id];
          return (
            <div
              key={a.id}
              className="flex items-center justify-between gap-4 border-t border-white/5 py-4 first:border-t-0 first:pt-0"
            >
              <div>
                <p className="text-sm font-medium text-white">{a.name}</p>
                <p className="text-xs text-white/50">{a.desc}</p>
                <p className="mt-1 text-xs font-medium text-[#f4c481]">
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
                    : "bg-white/15"
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
      <p className="-mt-2 mb-3 text-xs text-white/50">
        Share any relevant medical history or referrals ahead of your
        appointment. Optional.
      </p>
      <button
        type="button"
        onClick={() => setDocs(docs + 1)}
        className="flex w-full flex-col items-center gap-3 rounded-xl border border-dashed border-white/15 bg-white/5 py-10 text-center"
      >
        <span className="grid size-12 place-items-center rounded-full bg-gradient-to-b from-[#781f3a] to-[#4a1123]">
          <UploadCloud className="size-5 text-[#f4c481]" />
        </span>
        <span className="text-sm font-medium text-white">
          Drag and drop files here
        </span>
        <span className="text-xs text-white/50">
          or click to browse — PDF, JPG, PNG
        </span>
        {docs > 0 && (
          <span className="text-xs text-[#f4c481]">{docs} file(s) added</span>
        )}
      </button>
    </>
  );
}

/* ---------- Step 3: Confirm ---------- */

function ConfirmStep({
  selectedDate,
  time,
  selectedAddons,
  docs,
  addonsTotal,
  total,
}: {
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
      <dl className="flex flex-col divide-y divide-white/5 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-start justify-between gap-6 py-2.5">
            <dt className="text-white/50">{k}</dt>
            <dd className="text-right font-medium text-white">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3 text-sm text-white/60">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="text-white">AED {SUBTOTAL.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Add-ons</span>
          <span className="text-white">AED {addonsTotal.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base">
          <span className="text-white">Total</span>
          <span className="font-serif text-xl text-white">
            AED <span className="text-[#f4c481]">{total.toLocaleString()}</span>
          </span>
        </div>
      </div>

      <SectionTitle className="mt-8">Payment</SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        <Field label="Cardholder name" value="Alexander Morgan" />
        <Field label="Card number" value="•••• •••• •••• 4472" />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Expiry" value="09/29" />
          <Field label="CVC" value="•••" />
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
      className={`mb-3 text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-xs text-white/60">{children}</label>;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <SubLabel>{label}</SubLabel>
      <input
        defaultValue={value}
        className="mt-1 h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white outline-none focus:border-[#761c37]"
      />
    </div>
  );
}
