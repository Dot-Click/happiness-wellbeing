"use client";

import { ChevronDown, Search, Trash2 } from "lucide-react";
import { IoEye } from "react-icons/io5";
import Image from "next/image";
import { AppShell } from "@/components/app-shell";
import { useTheme } from "@/components/theme-provider";

const DOCS = [
  {
    title: "Executive Health Intake.pdf",
    type: "Intake Form",
    mission: "HE-260923-0847",
    date: "September 23, 2026",
    size: "312 KB",
  },
  {
    title: "Medical History.pdf",
    type: "Medical Record",
    mission: "HE-260923-0847",
    date: "September 23, 2026",
    size: "1.4 MB",
  },
  {
    title: "Pro-forma Invoice HE-0847.pdf",
    type: "Invoice",
    mission: "HE-260923-0847",
    date: "September 23, 2026",
    size: "96 KB",
  },
  {
    title: "Clinic Confirmation.pdf",
    type: "Intake Form",
    mission: "HE-260923-0847",
    date: "September 23, 2026",
    size: "312 KB",
  },
  {
    title: "Diagnostic Report.pdf",
    type: "Medical Record",
    mission: "HE-260923-0847",
    date: "September 23, 2026",
    size: "1.4 MB",
  },
  {
    title: "Final Invoice.pdf",
    type: "Invoice",
    mission: "HE-260923-0847",
    date: "September 23, 2026",
    size: "96 KB",
  },
];

export default function VaultPage() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <AppShell active="/vault" lightNav={!dark}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/figma/hero-city.png"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className={`absolute inset-0 ${
              dark
                ? "bg-gradient-to-b from-[rgba(15,2,2,0.4)] via-[rgba(15,2,2,0.85)] to-[#120606]"
                : "bg-gradient-to-b from-[rgba(250,246,240,0.5)] via-[rgba(250,246,240,0.88)] to-[#faf6f0]"
            }`}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-48 pb-10 lg:px-10">
          <h1
            className={`font-serif text-[clamp(32px,4vw,52px)] ${
              dark ? "text-white" : "text-[#222]"
            }`}
          >
            Secure Vault
          </h1>
          <p
            className={`mt-2 max-w-xl text-sm ${
              dark ? "text-white/60" : "text-[#222]/60"
            }`}
          >
            Your private documents are kept in an encrypted vault, visible only
            to you and your assigned concierge team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
        {/* Upload area */}
        <div
          className={`rounded-2xl border p-8 ${
            dark ? "border-white/10 bg-[#1b0a0a]" : "border-black/5 bg-white"
          }`}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <Image
              src="/figma/upload-icon.svg"
              alt=""
              width={56}
              height={56}
              className="size-14"
            />
            <p
              className={`text-sm font-medium ${
                dark ? "text-white" : "text-[#222]"
              }`}
            >
              Drag &amp; drop a document, or browse to upload
            </p>
            <p className={`text-xs ${dark ? "text-white/50" : "text-[#222]/50"}`}>
              PDF, JPG or PNG — kept encrypted in your private vault.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="relative">
                <select
                  className={`h-10 appearance-none rounded-lg border pr-9 pl-4 text-xs outline-none ${
                    dark
                      ? "border-white/10 bg-white/5 text-white"
                      : "border-black/10 bg-white text-[#222]"
                  }`}
                >
                  <option>No associated mission</option>
                  <option>HE-260923-0847</option>
                </select>
                <ChevronDown
                  className={`pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 ${
                    dark ? "text-white/50" : "text-[#222]/50"
                  }`}
                />
              </div>
              <button className="rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-4 py-2 text-xs font-medium text-white">
                Browse Files
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 sm:max-w-xs">
            <Search
              className={`pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 ${
                dark ? "text-white/50" : "text-[#222]/50"
              }`}
            />
            <input
              placeholder="Search documents"
              className={`h-10 w-full rounded-xl border pr-3 pl-9 text-xs outline-none ${
                dark
                  ? "border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  : "border-black/10 bg-white text-[#222] placeholder:text-[#222]/40"
              }`}
            />
          </div>
          <div className="relative">
            <select
              className={`h-10 appearance-none rounded-xl border pr-9 pl-4 text-xs outline-none ${
                dark
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-black/10 bg-white text-[#222]"
              }`}
            >
              <option>All</option>
              <option>Intake Form</option>
              <option>Medical Record</option>
              <option>Invoice</option>
            </select>
            <ChevronDown
              className={`pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 ${
                dark ? "text-white/50" : "text-[#222]/50"
              }`}
            />
          </div>
        </div>

        {/* Doc grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCS.map((d, i) => (
            <article
              key={i}
              className={`flex flex-col gap-4 rounded-3xl border p-5 ${
                dark
                  ? "border-white/10 bg-[#1b0a0a]"
                  : "border-black/5 bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`grid size-14 shrink-0 place-items-center rounded-2xl ${
                    dark ? "bg-white/5" : "bg-[#f1efed]"
                  }`}
                >
                  <Image
                    src="/figma/document.svg"
                    alt=""
                    width={22}
                    height={30}
                    className="h-7 w-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-base font-semibold leading-snug ${
                      dark ? "text-white" : "text-[#222]"
                    }`}
                  >
                    {d.title}
                  </h3>
                  <p
                    className={`text-sm ${dark ? "text-white/50" : "text-[#222]/50"}`}
                  >
                    {d.type}
                  </p>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-[#AD8751]">
                  Mission:{" "}
                  <a
                    href="#"
                    className={`underline ${
                      dark ? "text-[#f4c481]" : "text-[#c98a4b]"
                    }`}
                  >
                    {d.mission}
                  </a>
                </p>
                <p className={dark ? "text-white/60" : "text-[#222]/60"}>
                  {d.date} · {d.size}
                </p>
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
                <button
                  className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                    dark
                      ? "bg-[#761c37]/40 text-white/80"
                      : "bg-[#FCE4E4] text-[#E5484D]"
                  }`}
                  aria-label="Delete"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
