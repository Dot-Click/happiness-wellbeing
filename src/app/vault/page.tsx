import {
  ChevronDown,
  Download,
  Eye,
  FileText,
  Search,
  Trash2,
  UploadCloud,
} from "lucide-react";
import Image from "next/image";
import { AppShell } from "@/components/app-shell";

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
  return (
    <AppShell active="/vault" forceDark>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/figma/hero-city.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,2,2,0.4)] via-[rgba(15,2,2,0.85)] to-[#120606]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-6 lg:px-10">
          <h1 className="font-serif text-[clamp(32px,4vw,52px)] text-white">
            Secure Vault
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/60">
            Your private documents are kept in an encrypted vault, visible only
            to you and your assigned concierge team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
        {/* Upload area */}
        <div className="rounded-2xl border border-white/10 bg-[#1b0a0a] p-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="grid size-12 place-items-center rounded-full bg-gradient-to-b from-[#781f3a] to-[#4a1123]">
              <UploadCloud className="size-5 text-[#f4c481]" />
            </div>
            <p className="text-sm font-medium text-white">
              Drag &amp; drop a document, or browse to upload
            </p>
            <p className="text-xs text-white/50">
              PDF, JPG or PNG — kept encrypted in your private vault.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="relative">
                <select className="h-10 appearance-none rounded-lg border border-white/10 bg-white/5 pr-9 pl-4 text-xs text-white outline-none">
                  <option>No associated mission</option>
                  <option>HE-260923-0847</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-white/50" />
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
            <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-white/50" />
            <input
              placeholder="Search documents"
              className="h-10 w-full rounded-full border border-white/10 bg-white/5 pr-3 pl-9 text-xs text-white outline-none placeholder:text-white/40"
            />
          </div>
          <div className="relative">
            <select className="h-10 appearance-none rounded-full border border-white/10 bg-white/5 pr-9 pl-4 text-xs text-white outline-none">
              <option>All</option>
              <option>Intake Form</option>
              <option>Medical Record</option>
              <option>Invoice</option>
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-white/50" />
          </div>
        </div>

        {/* Doc grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCS.map((d, i) => (
            <article
              key={i}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#1b0a0a] p-4"
            >
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-[#761c37]/20 text-[#f4c481]">
                  <FileText className="size-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">
                    {d.title}
                  </h3>
                  <p className="text-xs text-white/50">{d.type}</p>
                </div>
              </div>
              <div className="text-xs text-white/60">
                <p>
                  Mission:{" "}
                  <a href="#" className="text-[#f4c481] underline">
                    {d.mission}
                  </a>
                </p>
                <p>
                  {d.date} · {d.size}
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 pt-3">
                <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white/5 py-1.5 text-[11px] text-white/70">
                  <Eye className="size-3" /> Preview
                </button>
                <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] py-1.5 text-[11px] font-medium text-white">
                  <Download className="size-3" /> Download
                </button>
                <button
                  className="grid size-7 place-items-center rounded-lg bg-[#761c37]/40 text-white/80"
                  aria-label="Delete"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
