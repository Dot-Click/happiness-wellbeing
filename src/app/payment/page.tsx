"use client";

import { MoreVertical } from "lucide-react";
import { IoEye } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useTheme } from "@/components/theme-provider";

const TABS = [
  { id: "payment", label: "Payment method" },
  { id: "history", label: "Bill history" },
  { id: "invoices", label: "Invoices" },
] as const;

const BILLING = [
  ["Name", "Daniel Williamson"],
  ["Receipt email", "daniel.williams@gmail.com"],
  ["Address", "Emirates Hills, Villa 21, Dubai"],
  ["Country", "United Arab Emirates"],
  ["VAT / Tax ID", "—"],
] as const;

const HISTORY = [
  {
    date: "Sep 25, 2026",
    title: "Executive Health 360",
    ref: "HE-260925-0848",
    method: "PayPal d***n@gmail.com",
    amount: "AED 13,350",
    status: "Paid",
  },
  {
    date: "Sep 25, 2026",
    title: "Executive Health 360",
    ref: "HE-260925-0848",
    method: "PayPal d***n@gmail.com",
    amount: "AED 13,350",
    status: "Paid",
  },
  {
    date: "Sep 25, 2026",
    title: "Executive Health 360",
    ref: "HE-260925-0848",
    method: "PayPal d***n@gmail.com",
    amount: "AED 13,350",
    status: "Paid",
  },
  {
    date: "Sep 25, 2026",
    title: "Executive Health 360",
    ref: "HE-260925-0848",
    method: "PayPal d***n@gmail.com",
    amount: "AED 13,350",
    status: "Paid",
  },
] as const;

const INVOICES = Array.from({ length: 6 }, () => ({
  title: "Final Invoice.pdf",
  sub: "Executive Health 360 · HE-260925-0848",
  meta: "Sep 25, 2026 · 184 KB",
}));

export default function PaymentPage() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [tab, setTab] = useState<string>("payment");

  const card = dark
    ? "border-white/10 bg-[#1b0a0a]"
    : "border-black/5 bg-white";
  const label = dark ? "text-white/50" : "text-[#222]/50";
  const heading = dark ? "text-white" : "text-[#222]";

  return (
    <AppShell active="/payment" lightNav={!dark}>
      <section className="relative">
        {/* City skyline behind the header */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] overflow-hidden">
          <Image src="/figma/hero-city.png" alt="" fill className="object-cover" />
          <div
            className={`absolute inset-0 ${
              dark
                ? "bg-gradient-to-r from-[#120606] via-[#120606]/70 to-[#120606]/20"
                : "bg-gradient-to-r from-[#faf6f0]/95 via-[#faf6f0]/45 to-transparent"
            }`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 h-40 ${
              dark
                ? "bg-gradient-to-b from-transparent to-[#120606]"
                : "bg-gradient-to-b from-transparent to-[#faf6f0]"
            }`}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 lg:px-10">
          <h1 className={`font-serif text-[clamp(32px,4vw,52px)] ${heading}`}>
            Payment Methods
          </h1>
          <p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-[#222]/60"}`}>
            Securely manage how you pay for your experiences.
          </p>

          {/* Tabs */}
          <div className="mt-6 mb-5 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  active
                    ? "border-[#EEE2D0] bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                    : dark
                      ? "border-white/10 bg-white/5 text-white/70"
                      : "border-[#EEE2D0] bg-white text-[#222]/70"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "payment" ? (
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Payment method */}
            <div className={`flex flex-col gap-4 rounded-2xl border p-6 ${card}`}>
              <p
                className={`text-[11px] font-medium tracking-[0.16em] uppercase ${label}`}
              >
                Payment Method
              </p>

              <div
                className={`flex items-center gap-3 rounded-xl border p-4 ${
                  dark ? "border-white/10 bg-white/5" : "border-black/5 bg-white"
                }`}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-black/5 bg-white">
                  <Image
                    src="/figma/paypal.svg"
                    alt="PayPal"
                    width={18}
                    height={21}
                    className="h-5 w-auto"
                  />
                </span>
                <div className="flex-1 leading-tight">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${heading}`}>PayPal</p>
                    <span className="rounded-full bg-[#EAF8F0] px-2 py-0.5 text-[10px] font-medium text-[#0CAF72]">
                      Default
                    </span>
                  </div>
                  <p className={`text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}>
                    d***@gmail.com
                  </p>
                  <p className={`text-[11px] ${dark ? "text-white/40" : "text-[#222]/40"}`}>
                    Connected Sep 23, 2023
                  </p>
                </div>
                <button
                  className={`rounded-lg border px-8 py-1.5 text-xs font-medium ${
                    dark
                      ? "border-white/10 bg-white/10 text-white"
                      : "border-[#EEE2D0] bg-gradient-to-r from-white to-[#FBEFDE] text-[#222]"
                  }`}
                >
                  Update
                </button>
                <button
                  className={`grid size-8 place-items-center rounded-lg ${
                    dark ? "text-white/50" : "text-[#222]/40"
                  }`}
                  aria-label="More options"
                >
                  <MoreVertical className="size-4" />
                </button>
              </div>

              <p className="flex items-center gap-1.5 text-[11px] text-[#E1B068]">
                <Image
                  src="/figma/lock-icon.svg"
                  alt=""
                  width={11}
                  height={13}
                  className="h-3 w-auto"
                />
                Payments are processed securely by PayPal. We never see or store
                your PayPal login.
              </p>

              <button
                className={`flex items-center gap-1.5 self-end rounded-xl border px-4 py-2.5 text-xs font-medium ${
                  dark
                    ? "border-white/10 bg-white/10 text-white"
                    : "border-[#EEE2D0] bg-gradient-to-r from-white to-[#FBEFDE] text-[#222]"
                }`}
              >
                Add payment method
              </button>
            </div>

            {/* Billing details */}
            <div className={`flex flex-col gap-4 rounded-2xl border p-6 ${card}`}>
              <div className="flex items-center justify-between">
                <p
                  className={`text-[11px] font-medium tracking-[0.16em] uppercase ${label}`}
                >
                  Billing Details
                </p>
                <button
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium ${
                    dark
                      ? "border-white/10 bg-white/10 text-white"
                      : "border-[#EEE2D0] bg-gradient-to-r from-white to-[#FBEFDE] text-[#222]"
                  }`}
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {BILLING.map(([k, v]) => (
                  <div key={k}>
                    <p className={`text-[11px] ${dark ? "text-white/40" : "text-[#222]/45"}`}>
                      {k}
                    </p>
                    <p className={`text-sm ${dark ? "text-white/80" : "text-[#222]"}`}>
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoice recipient */}
            <div className={`flex flex-col gap-4 rounded-2xl border p-6 ${card}`}>
              <p
                className={`text-[11px] font-medium tracking-[0.16em] uppercase ${label}`}
              >
                Invoice Recipient
              </p>
              <div className="flex flex-col">
                <ToggleRow
                  dark={dark}
                  label="Send invoices to a corporate billing account"
                  desc="Invoices go to your company. Receipts still reach you."
                />
              </div>
            </div>

            {/* Payment preferences */}
            <div className={`flex flex-col gap-4 rounded-2xl border p-6 ${card}`}>
              <p
                className={`text-[11px] font-medium tracking-[0.16em] uppercase ${label}`}
              >
                Payment Preferences
              </p>
              <div className="flex flex-col">
                <ToggleRow
                  dark={dark}
                  label="Ask me before charging for add-ons"
                  defaultOn
                />
                <ToggleRow
                  dark={dark}
                  label="Email me a receipt after every payment"
                  defaultOn
                />
              </div>
            </div>
          </div>
        ) : tab === "history" ? (
          <div className={`overflow-hidden rounded-2xl border ${card}`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr
                    className={`border-b ${dark ? "border-white/10" : "border-black/5"}`}
                  >
                    {["Date", "Description", "Method", "Amount", "Status", ""].map(
                      (h, i) => (
                        <th
                          key={i}
                          className={`px-6 py-4 text-sm font-medium ${heading}`}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {HISTORY.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t first:border-t-0 ${
                        dark ? "border-white/5" : "border-black/5"
                      }`}
                    >
                      <td
                        className={`px-6 py-4 text-sm ${dark ? "text-white/70" : "text-[#222]/70"}`}
                      >
                        {row.date}
                      </td>
                      <td className="px-6 py-4">
                        <p className={`text-sm font-semibold ${heading}`}>
                          {row.title}
                        </p>
                        <p className="text-xs text-[#c98a4b]">{row.ref}</p>
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${dark ? "text-white/70" : "text-[#222]/70"}`}
                      >
                        {row.method}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`font-serif text-base ${dark ? "text-[#f4c481]" : "text-[#761c37]"}`}
                        >
                          {row.amount}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-[#EAF8F0] px-3 py-1 text-[11px] font-medium text-[#0CAF72]">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button aria-label="Download invoice">
                          <Image
                            src={
                              dark
                                ? "/figma/download-icon-white.svg"
                                : "/figma/download-icon.svg"
                            }
                            alt=""
                            width={16}
                            height={16}
                            className="size-4"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INVOICES.map((inv, i) => (
              <article
                key={i}
                className={`flex flex-col gap-4 rounded-2xl border p-5 ${
                  dark
                    ? "border-white/10 bg-[#1b0a0a]"
                    : "border-black/5 bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                      dark ? "bg-white/5" : "bg-[#f1efed]"
                    }`}
                  >
                    <Image
                      src="/figma/document.svg"
                      alt=""
                      width={18}
                      height={24}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="flex-1 leading-tight">
                    <h3 className={`text-sm font-semibold ${heading}`}>
                      {inv.title}
                    </h3>
                    <p className="text-xs text-[#c98a4b]">{inv.sub}</p>
                    <p
                      className={`mt-0.5 text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}
                    >
                      {inv.meta}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-3 text-sm font-medium ${
                      dark
                        ? "bg-white/5 text-white/80"
                        : "bg-gradient-to-r from-[#fdf6ec] to-[#fbefde] text-[#222]"
                    }`}
                  >
                    <IoEye className="size-4" /> Preview
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#761c37] to-[#913f58] py-3 text-sm font-medium text-white">
                    <Image
                      src="/figma/download-icon-white.svg"
                      alt=""
                      width={13}
                      height={16}
                      className="h-4 w-auto"
                    />
                    Download
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        </div>
      </section>
    </AppShell>
  );
}

function ToggleRow({
  dark,
  label,
  desc,
  defaultOn = false,
}: {
  dark: boolean;
  label: string;
  desc?: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div
      className={`flex items-center justify-between gap-4 border-t py-3 first:border-t-0 first:pt-0 ${
        dark ? "border-white/5" : "border-black/5"
      }`}
    >
      <div>
        <p className={`text-sm ${dark ? "text-white" : "text-[#222]"}`}>{label}</p>
        {desc && (
          <p className={`text-[11px] ${dark ? "text-white/50" : "text-[#222]/50"}`}>
            {desc}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          on ? "bg-gradient-to-r from-[#761c37] to-[#913f58]" : "bg-black/15"
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
}
