"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, AlertTriangle } from "lucide-react";

const TABS = [
  "General",
  "Security",
  "Payments",
  "Notifications",
  "Integrations",
  "Data & retention",
  "Archive",
] as const;

type Tab = (typeof TABS)[number];

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        on ? "bg-[#761c37]" : "bg-black/15"
      }`}
      aria-pressed={on}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-all ${
          on ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#222]">
        {label}
      </label>
      {children}
    </div>
  );
}

function TextInput({
  defaultValue,
  placeholder,
  type = "text",
}: {
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="h-11 w-full rounded-xl border border-black/10 bg-[#faf6f0] px-3.5 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
    />
  );
}

function Select({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#faf6f0] px-3.5 pr-9 text-sm text-[#222] outline-none focus:border-[#761c37]">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/40" />
    </div>
  );
}

function SectionHead({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#222]">{title}</h3>
      <p className="mt-0.5 text-sm text-[#222]/50">{desc}</p>
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  defaultOn,
}: {
  title: string;
  desc: string;
  defaultOn?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-black/5 py-4 last:border-0">
      <div>
        <p className="text-sm font-medium text-[#222]">{title}</p>
        <p className="mt-0.5 text-xs text-[#222]/50">{desc}</p>
      </div>
      <Toggle defaultOn={defaultOn} />
    </div>
  );
}

const ARCHIVE_ENTITIES = [
  "Clients",
  "Services",
  "Partners",
  "Documents",
  "Payments",
  "Admin",
];

const ARCHIVED_ROWS = [
  {
    name: "Noah Fischer",
    tier: "Corporate",
    email: "noah@fischer.demo",
    archived: "Oct 09, 2026",
  },
  {
    name: "Clara Devereux",
    tier: "VIP",
    email: "clara@demo.com",
    archived: "Oct 05, 2026",
  },
  {
    name: "Idris Khan",
    tier: "Standard",
    email: "idris@demo.com",
    archived: "Sep 28, 2026",
  },
];

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("General");
  const [entity, setEntity] = useState("Clients");

  return (
    <div className="px-3 py-8">
      {/* Tab bar + Save */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white p-2">
        <div className="flex flex-wrap items-center gap-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                tab === t
                  ? "bg-[#761c37] text-white"
                  : "text-[#222]/60 hover:bg-black/5"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="rounded-xl bg-[#761c37] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
          Save Changes
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white p-6">
        {tab === "General" && (
          <>
            <SectionHead
              title="General & operational controls"
              desc="Platform identity and operating defaults."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Priority">
                <Select options={["Normal", "High", "Low"]} />
              </Field>
              <Field label="Default currency">
                <Select options={["AED", "USD", "EUR", "GBP", "CHF"]} />
              </Field>
              <Field label="Support email">
                <TextInput defaultValue="support@wellnessandmind.demo" />
              </Field>
              <Field label="Operations timezone">
                <Select options={["UTC", "GMT+4 (Dubai)", "GMT (London)", "GMT-5 (New York)"]} />
              </Field>
              <Field label="Default locale">
                <Select options={["English", "Arabic", "French", "German"]} />
              </Field>
              <Field label="Support hours">
                <TextInput defaultValue="Mon–Sat, 08:00–20:00 (GST)" />
              </Field>
            </div>
          </>
        )}

        {tab === "Security" && (
          <>
            <SectionHead
              title="Security & authentication"
              desc="Protect administrator access with extra checks."
            />
            <div className="flex flex-col">
              <ToggleRow
                title="Require MFA for administrators"
                desc="OTP or passkey challenge for privileged access."
                defaultOn
              />
              <ToggleRow
                title="Passkey support"
                desc="Allow administrators to sign in with a passkey."
                defaultOn
              />
              <ToggleRow
                title="Re-authenticate critical actions"
                desc="Payments, credentials and sensitive document access."
                defaultOn
              />
            </div>
            <div className="mt-6 max-w-sm">
              <Field label="Session timeout">
                <Select
                  options={["15 minutes", "30 minutes", "1 hour", "4 hours"]}
                />
              </Field>
            </div>
          </>
        )}

        {tab === "Payments" && (
          <>
            <SectionHead
              title="PayPal"
              desc="Primary payment gateway for client transactions."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Environment">
                <Select options={["Sandbox", "Live"]} />
              </Field>
              <Field label="PayPal Client ID">
                <TextInput defaultValue="AZ4k••••••9K84" />
              </Field>
              <Field label="PayPal Client Secret">
                <TextInput type="password" defaultValue="supersecretvalue" />
              </Field>
              <Field label="Webhook ID">
                <TextInput defaultValue="WH-7721-0045" />
              </Field>
              <Field label="Refund permission">
                <Select
                  options={["Super admin only", "Finance lead", "Any admin"]}
                />
              </Field>
            </div>
          </>
        )}

        {tab === "Notifications" && (
          <>
            <SectionHead
              title="Delivery setup"
              desc="Providers and sender details for client messages."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="SMS provider">
                <Select options={["Twilio", "Vonage", "MessageBird"]} />
              </Field>
              <Field label="Email provider">
                <Select options={["SendGrid", "Mailgun", "Postmark"]} />
              </Field>
              <Field label="Sender name">
                <TextInput defaultValue="Wellness & Mind" />
              </Field>
              <Field label="Reply-to email">
                <TextInput defaultValue="concierge@wellnessandmind.demo" />
              </Field>
            </div>
            <div className="mt-8">
              <SectionHead
                title="Automatic messages"
                desc="Turn whole message types on or off."
              />
              <div className="flex flex-col">
                <ToggleRow
                  title="Booking confirmations"
                  desc="Sent when a booking is confirmed."
                  defaultOn
                />
                <ToggleRow
                  title="Appointment reminders"
                  desc="Sent 24 hours before an appointment."
                  defaultOn
                />
                <ToggleRow
                  title="Payment receipts"
                  desc="Sent after a successful payment."
                  defaultOn
                />
                <ToggleRow
                  title="Document requests"
                  desc="Sent when documents are needed."
                />
              </div>
            </div>
          </>
        )}

        {tab === "Integrations" && (
          <>
            <SectionHead
              title="Zoom Meetings"
              desc="Meeting creation, webhooks and authorised recording access."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Zoom account / integration ID">
                <TextInput defaultValue="ZM-4821-0937" />
              </Field>
              <Field label="Cloud recording">
                <Select options={["Enabled", "Disabled"]} />
              </Field>
            </div>
          </>
        )}

        {tab === "Data & retention" && (
          <>
            <SectionHead
              title="Data & retention"
              desc="How long platform records are kept."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Document retention">
                <Select options={["1 year", "3 years", "5 years", "Indefinite"]} />
              </Field>
              <Field label="Meeting retention">
                <Select options={["30 days", "90 days", "1 year"]} />
              </Field>
              <Field label="Support history retention">
                <Select options={["1 year", "3 years", "5 years"]} />
              </Field>
              <Field label="Audit log retention">
                <Select options={["3 years", "7 years", "Indefinite"]} />
              </Field>
            </div>
          </>
        )}

        {tab === "Archive" && (
          <>
            <SectionHead
              title="Archive"
              desc="Restore archived records or delete them permanently."
            />
            <div className="mb-5 flex items-start gap-2 rounded-xl bg-[#FFF4E5] px-4 py-3 text-xs text-[#c98a4b]">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              <span>
                Archived items are hidden from their screens. Restore returns an
                item as it was. Permanent delete cannot be undone.
              </span>
            </div>
            <div className="mb-5 flex flex-wrap gap-2">
              {ARCHIVE_ENTITIES.map((e) => (
                <button
                  key={e}
                  onClick={() => setEntity(e)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    entity === e
                      ? "bg-[#761c37] text-white"
                      : "bg-[#faf6f0] text-[#222]/60 hover:bg-black/5"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto rounded-xl border border-black/5">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                    <th className="px-5 py-3">Record</th>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Archived</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ARCHIVED_ROWS.map((r, i) => (
                    <tr
                      key={i}
                      className="border-b border-black/5 last:border-0"
                    >
                      <td className="px-5 py-3.5 font-medium text-[#222]">
                        {r.name}
                      </td>
                      <td className="px-4 py-3.5 text-[#222]/70">{r.tier}</td>
                      <td className="px-4 py-3.5 text-[#222]/60">{r.email}</td>
                      <td className="px-4 py-3.5 text-[#222]/60">
                        {r.archived}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <button className="rounded-lg border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[#222] transition hover:bg-black/5">
                            Restore
                          </button>
                          <button className="rounded-lg border border-[#E5484D]/20 bg-[#FFF0F0] px-3.5 py-1.5 text-xs font-medium text-[#E5484D] transition hover:bg-[#ffe3e3]">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
