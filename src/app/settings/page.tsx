"use client";

import {
  Bell,
  Camera,
  Check,
  Fingerprint,
  Globe,
  Key,
  Lock,
  LogIn,
  Car,
  ChevronDown,
  Mail,
  MessageCircle,
  Monitor,
  Phone,
  Laptop,
  Moon,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Trash2,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useTheme } from "@/components/theme-provider";

const SIDE = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "concierge", label: "Concierge Preferences", icon: Sparkles },
  { id: "language", label: "Language & region", icon: Globe },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "privacy", label: "Privacy & Vault", icon: Lock },
  { id: "sessions", label: "Sessions & Devices", icon: Monitor },
  {
    id: "support",
    label: "Support",
    icon: null,
    iconSrc: "/figma/support-icon.svg",
    iconSrcActive: "/figma/support-icon-white.svg",
  },
];

const FIELDS = [
  ["Full name", "Daniel Williamson"],
  ["Email", "daniel.williamson@gmail.com"],
  ["Phone", ""],
  ["Country", "UK"],
  ["Date of birth", "09/13/1988"],
  ["Address line", "Emirates Hills, Villa 21"],
  ["Company (optional)", ""],
  ["Preferred title", "Mr"],
  ["City", "Dubai"],
  ["Postal code", "00000"],
] as const;

export default function SettingsPage() {
  const [active, setActive] = useState("profile");
  return (
    <AppShell active="/settings" lightNav>
      <section className="relative">
        <div className="absolute inset-x-0 top-0 -bottom-48 overflow-hidden">
          <Image
            src="/figma/hero-city.png"
            alt=""
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f0]/80 via-[#faf6f0]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#faf6f0] via-[#faf6f0]/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl flex min-h-[200px] flex-col justify-start px-6 pt-24 pb-2 lg:min-h-[220px] lg:px-10">
          <h1 className="font-serif text-[clamp(28px,3.4vw,44px)] text-[#222]">
            Account Settings
          </h1>
          <p className="mt-1 text-sm text-[#222]/60">
            Manage your profile, privacy and how your concierge reaches you.
          </p>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 lg:grid-cols-[240px_1fr] lg:px-10">
        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-3">
          <ul className="flex flex-col gap-1">
            {SIDE.map((item) => {
              const { id, label } = item;
              const Icon = item.icon;
              const iconSrc = (item as { iconSrc?: string }).iconSrc;
              const iconSrcActive = (
                item as { iconSrcActive?: string }
              ).iconSrcActive;
              const isActive = id === active;
              const activeSrc = isActive ? iconSrcActive || iconSrc : iconSrc;
              return (
                <li key={id}>
                  <button
                    onClick={() => setActive(id)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${
                      isActive
                        ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                        : "text-[#222]/70 hover:bg-black/5"
                    }`}
                  >
                    {activeSrc ? (
                      <Image
                        src={activeSrc}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5"
                      />
                    ) : Icon ? (
                      <Icon
                        className={`size-3.5 ${isActive ? "fill-current" : ""}`}
                      />
                    ) : null}
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <SaveBar />
          {active === "profile" && <ProfileTab />}
          {active === "security" && <SecurityTab />}
          {active === "notifications" && <NotificationsTab />}
          {active === "concierge" && <ConciergeTab />}
          {active === "language" && <LanguageTab />}
          {active === "appearance" && <AppearanceTab />}
          {active === "privacy" && <PrivacyTab />}
          {active === "sessions" && <SessionsTab />}
          {active === "support" && <SupportTab />}
        </div>
      </section>
    </AppShell>
  );
}

/* ---------- shared bits ---------- */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/5 bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function CardHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <>
      <h2 className="text-base font-medium text-[#222]">{title}</h2>
      {sub && <p className="text-xs text-[#222]/50">{sub}</p>}
    </>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
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
  );
}

function ToggleRow({
  label,
  desc,
  defaultOn = false,
}: {
  label: string;
  desc: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-4 border-t border-black/5 py-3 first:border-t-0 first:pt-0">
      <div>
        <p className="text-sm text-[#222]">{label}</p>
        <p className="text-[11px] text-[#222]/50">{desc}</p>
      </div>
      <Toggle on={on} onChange={() => setOn((v) => !v)} />
    </div>
  );
}

function Input({
  defaultValue = "",
  type = "text",
  placeholder = "",
}: {
  defaultValue?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="mt-1 h-10 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
    />
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-xs text-[#222]/60">{children}</label>;
}

function SaveBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white p-3 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg bg-[#fbefde] text-[#c98a4b]">
          <Image
            src="/figma/save-icon.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-medium text-[#222]">All changes saved</p>
          <p className="text-[11px] text-[#222]/50">
            Your preferences are up to date.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-lg bg-gradient-to-r from-[#FBF8F3] to-[#FAEAD3] min-w-[140px] px-6 py-2 text-xs font-medium text-[#222]">
          Discard
        </button>
        <button className="rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-5 py-2 text-xs font-medium text-white">
          Save changes
        </button>
      </div>
    </div>
  );
}

function SupportTab() {
  const faqs = [
    "How do I reserve an experience?",
    "How do I update my payment method?",
    "Can I pause my concierge?",
    "What is the Secure Vault?",
    "How can I invite a household member?",
    "Can I change my concierge?",
  ];
  return (
    <>
      <Card>
        <CardHead
          title="Send a request"
          sub="Our concierge responds within one hour."
        />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel>Request type</FieldLabel>
            <Select
              defaultValue="Select a type"
              options={[
                "Select a type",
                "Reservation",
                "Billing",
                "Account",
                "Other",
              ]}
            />
          </div>
          <div>
            <FieldLabel>Preferred response urgency</FieldLabel>
            <Segmented options={["Normal", "Urgent"]} />
          </div>
        </div>
        <div className="mt-4">
          <FieldLabel>Subject</FieldLabel>
          <Input />
        </div>
        <div className="mt-4">
          <FieldLabel>Message</FieldLabel>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-lg border border-black/10 bg-white p-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
          />
        </div>
        <div className="mt-4 flex flex-col items-center gap-2 rounded-xl bg-[#fbefde] py-6 text-center">
          <span className="grid size-9 place-items-center rounded-lg bg-white text-[#c98a4b]">
            <Image
              src="/figma/upload-icon.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
          </span>
          <p className="text-xs text-[#222]/70">Drop a file or browse</p>
          <p className="text-[11px] text-[#222]/50">PNG, JPG, PDF up to 10 MB</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-5 py-2 text-xs font-medium text-white">
            Send request
          </button>
        </div>
      </Card>

      <Card>
        <CardHead
          title="Quick answers"
          sub="Short answers to the most common questions."
        />
        <div className="mt-3 flex flex-col">
          {faqs.map((q) => (
            <button
              key={q}
              className="flex items-center justify-between gap-3 border-t border-black/5 py-3 text-left first:border-t-0"
            >
              <span className="text-sm text-[#222]">{q}</span>
              <ChevronDown className="size-4 text-[#222]/40" />
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="leading-tight">
            <p className="text-base font-medium text-[#222]">Share feedback</p>
            <p className="text-xs text-[#222]/50">Tell us how we can improve.</p>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-[#FBF8F3] to-[#FAEAD3] min-w-[140px] px-6 py-2.5 text-xs font-medium text-[#222]">
            Give feedback
          </button>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-6 border-t border-black/5 pt-4 text-xs font-medium text-[#761c37]">
          <a href="#">Privacy & security</a>
          <a href="#">Terms of service</a>
          <a href="#">Contact details</a>
        </div>
      </Card>
    </>
  );
}

/* ---------- Profile ---------- */

function ProfileTab() {
  return (
    <>
      <Card>
        <CardHead
          title="Profile"
          sub="This is how your concierge team addresses you."
        />
        <div className="mt-5 flex items-center gap-4">
          <Image
            src="/figma/avatar-daniel.png"
            alt=""
            width={72}
            height={72}
            className="size-[72px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-4 py-2 text-xs font-medium text-white">
                <Camera className="size-3.5" /> Change Photo
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#FBF8F3] to-[#FAEAD3] min-w-[140px] px-6 py-2 text-xs text-[#222]/70">
                <X className="size-3.5" /> Remove
              </button>
            </div>
            <span className="text-[11px] text-[#222]/40">
              JPG or PNG, up to 5 MB
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FIELDS.map(([label, value]) => (
            <div key={label}>
              <FieldLabel>{label}</FieldLabel>
              {label === "Phone" ? (
                <div className="flex gap-2">
                  <div className="w-20 shrink-0">
                    <Input defaultValue="+971" />
                  </div>
                  <Input defaultValue="50 123 4567" />
                </div>
              ) : label === "Preferred title" ? (
                <select
                  defaultValue={value}
                  className="mt-1 h-10 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
                >
                  {["Mr", "Mrs", "Ms", "Dr"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              ) : (
                <Input defaultValue={value} />
              )}
            </div>
          ))}
        </div>
      </Card>

      <div className="rounded-2xl border border-black/5 bg-white p-5">
        <p className="text-sm font-medium text-[#222]">Member since March 2024</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/figma/avatar-marcus.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-medium text-[#222]">Marcus Reed</p>
              <p className="text-[11px] text-[#222]/50">Medical Concierge</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#f3e2c7] px-3 py-1 text-[10px] font-medium text-[#8a5a1b]">
              VIP Member
            </span>
            <button className="flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-[11px] font-medium text-[#222]">
              <Image src="/figma/message-gray.svg" alt="" width={15} height={15} />
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#f3d7dc] bg-[#fff5f6] p-5">
        <p className="text-sm font-medium text-[#761c37]">Danger zone</p>
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#f3d7dc]/80 pt-3">
          <div>
            <p className="text-sm text-[#222]">Deactivate account</p>
            <p className="text-[11px] text-[#222]/50">
              Pause your account. Your data stays safe.
            </p>
          </div>
          <button className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs text-[#222]/70">
            Deactivate
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#f3d7dc]/80 pt-3">
          <div>
            <p className="text-sm text-[#222]">Delete account</p>
            <p className="text-[11px] text-[#222]/50">
              Permanently remove your account and Secure Vault.
            </p>
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-[#f3d7dc] bg-white px-3 py-1.5 text-xs font-medium text-[#eb4b4b]">
            <Trash2 className="size-3" /> Delete account
          </button>
        </div>
      </div>
    </>
  );
}

/* ---------- Security ---------- */

function SecurityTab() {
  const requirements = [
    "At least 10 characters",
    "One uppercase letter",
    "One number",
    "One symbol",
  ];
  const methods = ["Authenticator app", "SMS", "Email"];
  const [method, setMethod] = useState("Authenticator app");
  const [twoFA, setTwoFA] = useState(true);
  const [bio, setBio] = useState(false);
  const activity = [
    { icon: LogIn, title: "Signed in from Dubai, UAE", meta: "Today, 09:12" },
    { icon: Key, title: "Password changed", meta: "Sep 14, 2026" },
    { icon: Smartphone, title: "New device: iPhone 16 Pro", meta: "Sep 02, 2026" },
  ];
  return (
    <>
      <Card>
        <div className="flex items-start justify-between gap-3">
          <CardHead
            title="Change password"
            sub="Use a passphrase you don't use anywhere else."
          />
          <button className="shrink-0 rounded-lg bg-gradient-to-r from-[#FBF8F3] to-[#FAEAD3] min-w-[140px] px-6 py-2 text-xs font-medium text-[#222]">
            Update password
          </button>
        </div>

        <div className="mt-5">
          <FieldLabel>Current password</FieldLabel>
          <Input type="password" defaultValue="password" />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel>New password</FieldLabel>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div>
            <FieldLabel>Confirm new password</FieldLabel>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-1 rounded-full bg-black/10" />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-[#222]/60 sm:grid-cols-2">
          {requirements.map((r) => (
            <span key={r} className="flex items-center gap-2">
              <Check className="size-4 text-[#222]/30" /> {r}
            </span>
          ))}
        </div>
      </Card>

      <Card>
        <CardHead
          title="Two-factor authentication"
          sub="Toggles save instantly."
        />
        <div className="mt-4">
          <div className="flex items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#fbefde] text-[#c98a4b]">
                <User className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-[#222]">Two-factor authentication</p>
                <p className="text-[11px] text-[#222]/50">
                  Add a second step when signing in.
                </p>
              </div>
            </div>
            <Toggle on={twoFA} onChange={() => setTwoFA((v) => !v)} />
          </div>
          <div className="flex flex-wrap items-center gap-2 pb-3 pl-12">
            {methods.map((m) => {
              const sel = method === m;
              return (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                    sel
                      ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                      : "bg-black/5 text-[#222]/70"
                  }`}
                >
                  {m}
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-black/5 py-3">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#fbefde] text-[#c98a4b]">
                <Fingerprint className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-[#222]">Biometric / Passkey</p>
                <p className="text-[11px] text-[#222]/50">
                  Sign in with Face ID, Touch ID or a security key.
                </p>
              </div>
            </div>
            <Toggle on={bio} onChange={() => setBio((v) => !v)} />
          </div>
        </div>
      </Card>

      <Card>
        <CardHead title="Recent security activity" />
        <div className="mt-4 flex flex-col">
          {activity.map(({ icon: Icon, title, meta }) => (
            <div
              key={title}
              className="flex items-center gap-3 border-t border-black/5 py-3 first:border-t-0 first:pt-0"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#fbefde] text-[#c98a4b]">
                <Icon className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm text-[#222]">{title}</p>
                <p className="text-[11px] text-[#222]/50">{meta}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

/* ---------- Notifications ---------- */

function ChannelRow({
  icon: Icon,
  iconClass,
  label,
  meta,
  defaultOn = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconClass: string;
  label: string;
  meta: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-4 border-t border-black/5 py-3 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${iconClass}`}>
          <Icon className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm text-[#222]">{label}</p>
          <p className="text-[11px] text-[#222]/50">{meta}</p>
        </div>
      </div>
      <Toggle on={on} onChange={() => setOn((v) => !v)} />
    </div>
  );
}

function NotificationsTab() {
  return (
    <>
      <Card>
        <CardHead title="Notifications" sub="Changes save instantly." />
        <div className="mt-4">
          <ToggleRow
            label="Mission updates"
            desc="Progress and changes to your active missions."
            defaultOn
          />
          <ToggleRow
            label="Concierge messages"
            desc="Replies from your personal concierge."
            defaultOn
          />
          <ToggleRow
            label="Appointment reminders"
            desc="Upcoming appointments and pick-ups."
          />
          <ToggleRow
            label="Payment & invoices"
            desc="Receipts, invoices and payment alerts."
          />
          <ToggleRow
            label="Documents added to Secure Vault"
            desc="New files added to your Secure Vault."
          />
          <ToggleRow
            label="Recommendations and offers"
            desc="Curated experiences we think you'll enjoy."
          />
        </div>
      </Card>

      <Card>
        <CardHead
          title="Delivery channels"
          sub="Turn off a channel to stop all messages on it."
        />
        <div className="mt-4">
          <ChannelRow
            icon={Mail}
            iconClass="bg-[#fbefde] text-[#c98a4b]"
            label="Email"
            meta="daniel.william@gmail.com"
            defaultOn
          />
          <ChannelRow
            icon={MessageCircle}
            iconClass="bg-[#fbefde] text-[#c98a4b]"
            label="SMS"
            meta="+971 ••• 4567"
            defaultOn
          />
          <ChannelRow
            icon={Phone}
            iconClass="bg-[#e6f7ec] text-[#1f9d63]"
            label="WhatsApp"
            meta="+971 ••• 4567"
            defaultOn
          />
        </div>
      </Card>
    </>
  );
}

/* ---------- Concierge preferences ---------- */

function Pills({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const sel = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              sel
                ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white"
                : "bg-black/5 text-[#222]/70"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Select({
  defaultValue,
  options,
}: {
  defaultValue: string;
  options: string[];
}) {
  return (
    <select
      defaultValue={defaultValue}
      className="mt-1 h-10 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

function IconToggleRow({
  icon: Icon,
  iconFill = false,
  label,
  desc,
  defaultOn = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconFill?: boolean;
  label: string;
  desc: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-4 border-t border-black/5 py-3 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#fbefde] text-[#c98a4b]">
          <Icon className={`size-4 ${iconFill ? "fill-current" : ""}`} />
        </span>
        <div className="leading-tight">
          <p className="text-sm text-[#222]">{label}</p>
          <p className="text-[11px] text-[#222]/50">{desc}</p>
        </div>
      </div>
      <Toggle on={on} onChange={() => setOn((v) => !v)} />
    </div>
  );
}

function ConciergeTab() {
  const [method, setMethod] = useState("Message");
  const [lang, setLang] = useState("Eng");
  return (
    <>
      <Card>
        <CardHead title="How we reach you" />
        <div className="mt-5">
          <FieldLabel>Preferred contact method</FieldLabel>
          <div className="mt-2">
            <Pills
              options={["Message", "Phone", "Email", "Whatsapp"]}
              value={method}
              onChange={setMethod}
            />
          </div>
        </div>
        <div className="mt-5">
          <FieldLabel>Preferred contact hours</FieldLabel>
          <Select
            defaultValue="Any time"
            options={["Any time", "Business hours", "Evenings", "Weekends"]}
          />
        </div>
        <div className="mt-5">
          <FieldLabel>Languages spoken</FieldLabel>
          <div className="mt-2">
            <Pills
              options={["Eng", "Arabic", "French", "German"]}
              value={lang}
              onChange={setLang}
            />
          </div>
        </div>
        <div className="mt-5 border-t border-black/5 pt-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-[#222]">Request translator by default</p>
            <ToggleStandalone />
          </div>
        </div>
      </Card>

      <Card>
        <CardHead title="Travel & care" />
        <div className="mt-5">
          <FieldLabel>Default chauffeur vehicle</FieldLabel>
          <Select
            defaultValue="Luxury SUV"
            options={["Luxury SUV", "Sedan", "Van", "Convertible"]}
          />
        </div>
        <div className="mt-2">
          <IconToggleRow
            icon={Car}
            label="Airport transfer by default"
            desc=""
            defaultOn
          />
        </div>
        <div className="mt-4">
          <FieldLabel>Dietary and accessibility notes</FieldLabel>
          <div className="relative mt-1">
            <textarea
              rows={4}
              placeholder="Anything we should know to make you comfortable."
              className="w-full rounded-lg border border-black/10 bg-white p-3 text-sm text-[#222] outline-none focus:border-[#761c37]"
            />
            <span className="absolute right-3 bottom-2 text-[10px] text-[#222]/40">
              0/500
            </span>
          </div>
        </div>
        <div className="mt-2">
          <IconToggleRow
            icon={IoEye}
            iconFill
            label="Secure Anonymity Mode by default"
            desc="Reservations are made under a protected client reference."
            defaultOn
          />
        </div>
      </Card>

      <Card>
        <CardHead title="Emergency contact" />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <FieldLabel>Name</FieldLabel>
            <Input defaultValue="Sophie Williamson" />
          </div>
          <div>
            <FieldLabel>Relationship</FieldLabel>
            <Input defaultValue="Spouse" />
          </div>
          <div>
            <FieldLabel>Phone</FieldLabel>
            <Input defaultValue="+971 50 765 4321" />
          </div>
        </div>
      </Card>
    </>
  );
}

function Segmented({ options }: { options: string[] }) {
  const [value, setValue] = useState(options[0]);
  return (
    <div className="mt-1 inline-flex h-10 w-full rounded-full bg-black/5 p-1">
      {options.map((o) => {
        const sel = o === value;
        return (
          <button
            key={o}
            type="button"
            onClick={() => setValue(o)}
            className={`flex-1 rounded-full text-xs font-medium transition ${
              sel
                ? "bg-gradient-to-r from-[#761c37] to-[#913f58] text-white shadow"
                : "text-[#222]/70"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function ToggleStandalone({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return <Toggle on={on} onChange={() => setOn((v) => !v)} />;
}

/* ---------- Language & region ---------- */

function LanguageTab() {
  return (
    <Card>
      <CardHead
        title="Language & region"
        sub="Your currency applies to every price across the platform."
      />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>Language</FieldLabel>
          <Select
            defaultValue="Eng"
            options={["Eng", "Arabic", "French", "German"]}
          />
        </div>
        <div>
          <FieldLabel>Currency</FieldLabel>
          <Select
            defaultValue="AED"
            options={["AED", "USD", "EUR", "GBP"]}
          />
        </div>
        <div>
          <FieldLabel>Time zone</FieldLabel>
          <Select
            defaultValue="Dubai"
            options={["Dubai", "London", "New York", "Tokyo"]}
          />
        </div>
        <div>
          <FieldLabel>Date format</FieldLabel>
          <Select
            defaultValue="DD/MM/YYYY"
            options={["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]}
          />
        </div>
        <div>
          <FieldLabel>Units</FieldLabel>
          <Select
            defaultValue="Metric"
            options={["Metric", "Imperial"]}
          />
        </div>
      </div>
    </Card>
  );
}

/* ---------- Appearance ---------- */

function AppearanceTab() {
  const { theme, setTheme } = useTheme();
  const [choice, setChoice] = useState<"light" | "dark" | "system">(theme);
  const options = [
    {
      id: "light" as const,
      label: "Light",
      icon: Sun,
      preview: "bg-[#fdf7ec]",
      bar: "bg-[#761c37]",
      labelClass: "text-[#222]",
    },
    {
      id: "dark" as const,
      label: "Dark",
      icon: Moon,
      preview: "bg-[#2a0f14]",
      bar: "bg-[#761c37]",
      labelClass: "text-[#222]",
    },
    {
      id: "system" as const,
      label: "System default",
      icon: Laptop,
      preview: "bg-[#e9e5e0]",
      bar: "bg-[#c7c0b7]",
      labelClass: "text-[#222]",
    },
  ];
  const pick = (id: "light" | "dark" | "system") => {
    setChoice(id);
    if (id !== "system") setTheme(id);
  };
  return (
    <>
      <Card>
        <CardHead title="Theme" sub="Matches the switch in your account menu." />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {options.map(({ id, label, icon: Icon, preview, bar, labelClass }) => {
            const selected = choice === id;
            return (
              <button
                key={id}
                onClick={() => pick(id)}
                className={`flex flex-col gap-3 rounded-2xl border p-3 text-left transition ${
                  selected
                    ? "border-[#761c37] shadow-[0_0_0_1px_#761c37]"
                    : "border-black/10 hover:bg-black/5"
                }`}
              >
                <div className={`relative flex h-20 items-center rounded-xl px-4 ${preview}`}>
                  <span className={`h-2.5 w-28 rounded-full ${bar}`} />
                  {selected && (
                    <span className="absolute top-2 right-2 grid size-5 place-items-center rounded-full bg-[#761c37] text-white">
                      <Check className="size-3" />
                    </span>
                  )}
                </div>
                <span className={`flex items-center gap-1.5 text-sm font-medium ${labelClass}`}>
                  <Icon className="size-3.5 text-[#c98a4b]" />
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="text-sm text-[#222]">Reduce motion</p>
            <p className="text-[11px] text-[#222]/50">
              Minimise animations across the platform.
            </p>
          </div>
          <ToggleStandalone />
        </div>
        <div className="mt-4 border-t border-black/5 pt-4">
          <FieldLabel>Text size</FieldLabel>
          <Select
            defaultValue="Default"
            options={["Default", "Small", "Large", "Extra large"]}
          />
        </div>
      </Card>
    </>
  );
}

/* ---------- Privacy & Vault ---------- */

function PrivacyTab() {
  return (
    <Card>
      <CardHead title="Secure Vault" sub="Toggles save instantly." />
      <div className="mt-5">
        <FieldLabel>Auto-lock Secure Vault after inactivity</FieldLabel>
        <Select
          defaultValue="15 mint"
          options={["5 mint", "15 mint", "30 mint", "1 hour", "Never"]}
        />
      </div>
      <div className="mt-4">
        <ToggleRow
          label="Require re-authentication to download documents"
          desc=""
        />
        <ToggleRow
          label="Share anonymized usage data"
          desc="Helps us refine the experience. Never linked to you."
          defaultOn
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <a href="#" className="text-xs font-medium text-[#761c37]">
          Privacy & security
        </a>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FBF8F3] to-[#FAEAD3] min-w-[140px] px-6 py-2 text-xs font-medium text-[#222]">
          <Image
            src="/figma/download-icon.svg"
            alt=""
            width={13}
            height={16}
            className="h-4 w-auto"
          />
          Download my data
        </button>
      </div>
    </Card>
  );
}

/* ---------- Sessions & devices ---------- */

function SessionsTab() {
  const sessions = [
    {
      icon: Laptop,
      name: "MacBook Pro · Safari",
      meta: "Dubai, UAE · Active now",
      current: true,
    },
    {
      icon: Smartphone,
      name: "iPhone 16 Pro · App",
      meta: "Dubai, UAE · 2 hours ago",
      current: false,
    },
    {
      icon: Fingerprint,
      name: "iPad Air · Safari",
      meta: "London, UK · Sep 18, 2026",
      current: false,
    },
  ];
  return (
    <Card>
      <CardHead title="Active sessions" />
      <div className="mt-4 flex flex-col">
        {sessions.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="flex items-center gap-3 border-t border-black/5 py-3 first:border-t-0 first:pt-0"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#fbefde] text-[#c98a4b]">
                <Icon className="size-4" />
              </span>
              <div className="flex-1 leading-tight">
                <p className="text-sm text-[#222]">{s.name}</p>
                <p className="text-[11px] text-[#222]/50">{s.meta}</p>
              </div>
              {s.current ? (
                <span className="rounded-full bg-[#2bb673]/15 px-3 py-1 text-[11px] font-medium text-[#1f9d63]">
                  This device
                </span>
              ) : (
                <button className="rounded-full bg-[#fde4e8] px-4 py-1.5 text-xs font-medium text-[#761c37]">
                  Sign out
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end border-t border-black/5 pt-4">
        <button className="rounded-lg bg-gradient-to-r from-[#FBF8F3] to-[#FAEAD3] min-w-[140px] px-6 py-2 text-xs font-medium text-[#222]">
          Sign out all other devices
        </button>
      </div>
    </Card>
  );
}
