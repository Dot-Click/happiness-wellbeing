"use client";

import {
  Bell,
  Camera,
  Check,
  Fingerprint,
  Globe,
  Laptop,
  MessageSquare,
  Moon,
  Palette,
  ShieldCheck,
  Smartphone,
  Sun,
  Trash2,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useTheme } from "@/components/theme-provider";

const SIDE = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "concierge", label: "Concierge Preferences", icon: MessageSquare },
  { id: "language", label: "Language & region", icon: Globe },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "privacy", label: "Privacy & Vault", icon: ShieldCheck },
  { id: "sessions", label: "Sessions & Devices", icon: Smartphone },
];

const FIELDS = [
  ["Full name", "Daniel Williamson"],
  ["Email", "daniel.williams@mail.com"],
  ["Phone", "+971"],
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/figma/hero-city.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f0]/90 via-[#faf6f0]/60 to-[#faf6f0]/20" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-8 lg:px-10">
          <h1 className="font-serif text-[clamp(28px,3.4vw,44px)] text-[#222]">
            Account Settings
          </h1>
          <p className="mt-1 text-sm text-[#222]/60">
            Manage your profile, privacy and how your concierge reaches you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 lg:grid-cols-[240px_1fr] lg:px-10">
        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-3">
          <ul className="flex flex-col gap-1">
            {SIDE.map(({ id, label, icon: Icon }) => {
              const isActive = id === active;
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
                    <Icon className="size-3.5" />
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content */}
        <div className="flex flex-col gap-6">
          {active === "profile" && <ProfileTab />}
          {active === "security" && <SecurityTab />}
          {active === "notifications" && <NotificationsTab />}
          {active === "concierge" && <ConciergeTab />}
          {active === "language" && <LanguageTab />}
          {active === "appearance" && <AppearanceTab />}
          {active === "privacy" && <PrivacyTab />}
          {active === "sessions" && <SessionsTab />}
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
            width={64}
            height={64}
            className="size-16 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-3 py-1.5 text-xs font-medium text-white">
              <Camera className="size-3.5" /> Change Photo
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-black/5 px-3 py-1.5 text-xs text-[#222]/70">
              <X className="size-3.5" /> Remove
            </button>
            <span className="text-[11px] text-[#222]/40">
              JPG or PNG, up to 5 MB
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FIELDS.map(([label, value]) => (
            <div key={label}>
              <FieldLabel>{label}</FieldLabel>
              <Input defaultValue={value} />
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
    "At least 12 characters",
    "One uppercase letter",
    "One number",
    "One symbol",
  ];
  return (
    <>
      <Card>
        <div className="flex items-start justify-between gap-3">
          <CardHead
            title="Change password"
            sub="Use a special code you don't use anywhere else."
          />
          <button className="shrink-0 rounded-lg bg-gradient-to-r from-[#761c37] to-[#913f58] px-4 py-2 text-xs font-medium text-white">
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
        <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-[#222]/60 sm:grid-cols-2">
          {requirements.map((r) => (
            <span key={r} className="flex items-center gap-2">
              <Check className="size-4 text-[#f4c481]" /> {r}
            </span>
          ))}
        </div>
      </Card>

      <Card>
        <CardHead
          title="Two-factor authentication"
          sub="Toggle second factors."
        />
        <div className="mt-4">
          <ToggleRow
            label="Two-factor authentication"
            desc="Add a second step when you sign in."
            defaultOn
          />
          <ToggleRow
            label="Biometric / Passkey"
            desc="Sign in with Face / Touch or a device passkey."
          />
        </div>
      </Card>
    </>
  );
}

/* ---------- Notifications ---------- */

function NotificationsTab() {
  return (
    <Card>
      <CardHead
        title="Notifications"
        sub="Choose how your concierge team reaches you."
      />
      <div className="mt-4">
        <ToggleRow
          label="Email updates"
          desc="Mission updates and confirmations by email."
          defaultOn
        />
        <ToggleRow
          label="SMS alerts"
          desc="Time-sensitive updates by text message."
          defaultOn
        />
        <ToggleRow
          label="Push notifications"
          desc="Real-time alerts on your devices."
        />
        <ToggleRow
          label="Concierge messages"
          desc="New messages from your care team."
          defaultOn
        />
        <ToggleRow
          label="Billing & receipts"
          desc="Invoices and payment confirmations."
          defaultOn
        />
      </div>
    </Card>
  );
}

/* ---------- Concierge preferences ---------- */

function ConciergeTab() {
  return (
    <Card>
      <CardHead
        title="Concierge Preferences"
        sub="How and when your concierge should reach you."
      />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>Preferred contact method</FieldLabel>
          <Input defaultValue="Message" />
        </div>
        <div>
          <FieldLabel>Preferred hours</FieldLabel>
          <Input defaultValue="09:00 – 18:00 GST" />
        </div>
        <div>
          <FieldLabel>Primary concierge</FieldLabel>
          <Input defaultValue="Marcus Reed" />
        </div>
        <div>
          <FieldLabel>Spoken language</FieldLabel>
          <Input defaultValue="English" />
        </div>
      </div>
      <div className="mt-5">
        <ToggleRow
          label="Allow proactive suggestions"
          desc="Let your concierge recommend experiences."
          defaultOn
        />
        <ToggleRow
          label="Share calendar availability"
          desc="Helps schedule around your time."
        />
      </div>
    </Card>
  );
}

/* ---------- Language & region ---------- */

function LanguageTab() {
  return (
    <Card>
      <CardHead
        title="Language & region"
        sub="Set your language, region and currency."
      />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>Language</FieldLabel>
          <Input defaultValue="English (UK)" />
        </div>
        <div>
          <FieldLabel>Region</FieldLabel>
          <Input defaultValue="United Arab Emirates" />
        </div>
        <div>
          <FieldLabel>Time zone</FieldLabel>
          <Input defaultValue="GST (GMT+4)" />
        </div>
        <div>
          <FieldLabel>Currency</FieldLabel>
          <Input defaultValue="AED" />
        </div>
      </div>
    </Card>
  );
}

/* ---------- Appearance ---------- */

function AppearanceTab() {
  const { theme, setTheme } = useTheme();
  const options = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
  ] as const;
  return (
    <Card>
      <CardHead title="Appearance" sub="Choose how the experience looks." />
      <div className="mt-5 grid grid-cols-2 gap-4 sm:max-w-md">
        {options.map(({ id, label, icon: Icon }) => {
          const selected = theme === id;
          return (
            <button
              key={id}
              onClick={() => setTheme(id)}
              className={`flex flex-col items-center gap-2 rounded-xl border p-5 transition ${
                selected
                  ? "border-[#761c37] bg-[#f6e4ea]"
                  : "border-black/10 bg-white hover:bg-black/5"
              }`}
            >
              <Icon
                className={`size-6 ${selected ? "text-[#761c37]" : "text-[#222]/60"}`}
              />
              <span className="text-sm font-medium text-[#222]">{label}</span>
              {selected && (
                <span className="flex items-center gap-1 text-[10px] text-[#761c37]">
                  <Check className="size-3" /> Selected
                </span>
              )}
            </button>
          );
        })}
      </div>
    </Card>
  );
}

/* ---------- Privacy & Vault ---------- */

function PrivacyTab() {
  return (
    <Card>
      <CardHead
        title="Privacy & Vault"
        sub="Control how your documents and data are handled."
      />
      <div className="mt-4">
        <ToggleRow
          label="End-to-end encryption"
          desc="Keep vault documents encrypted at rest."
          defaultOn
        />
        <ToggleRow
          label="Concierge document access"
          desc="Let your assigned team view shared files."
          defaultOn
        />
        <ToggleRow
          label="Usage analytics"
          desc="Help improve the experience with anonymised data."
        />
        <ToggleRow
          label="Auto-delete drafts"
          desc="Remove unsent uploads after 30 days."
        />
      </div>
    </Card>
  );
}

/* ---------- Sessions & devices ---------- */

function SessionsTab() {
  const sessions = [
    {
      icon: Laptop,
      name: "MacBook Pro · Dubai",
      meta: "Chrome · This device",
      current: true,
    },
    {
      icon: Smartphone,
      name: "iPhone 16 Pro · Dubai",
      meta: "Happiness app · 2 hours ago",
      current: false,
    },
    {
      icon: Fingerprint,
      name: "iPad · London",
      meta: "Safari · 3 days ago",
      current: false,
    },
  ];
  return (
    <Card>
      <CardHead
        title="Sessions & Devices"
        sub="Devices currently signed in to your account."
      />
      <div className="mt-4 flex flex-col">
        {sessions.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="flex items-center gap-3 border-t border-black/5 py-3 first:border-t-0 first:pt-0"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-black/5 text-[#222]/60">
                <Icon className="size-4" />
              </span>
              <div className="flex-1 leading-tight">
                <p className="text-sm text-[#222]">{s.name}</p>
                <p className="text-[11px] text-[#222]/50">{s.meta}</p>
              </div>
              {s.current ? (
                <span className="rounded-full bg-[#2bb673]/15 px-2.5 py-0.5 text-[10px] font-medium text-[#1f9d63]">
                  Current
                </span>
              ) : (
                <button className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs text-[#222]/70">
                  Sign out
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
