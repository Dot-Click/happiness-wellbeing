"use client";

import { useState } from "react";

interface ToggleSetting {
  label: string;
  key: string;
  defaultOn: boolean;
}

const NOTIFICATION_SETTINGS: ToggleSetting[] = [
  { label: "Email Notifications", key: "email", defaultOn: true },
  { label: "SMS Alerts", key: "sms", defaultOn: true },
  { label: "Push Notifications", key: "push", defaultOn: false },
  { label: "Weekly Digest", key: "digest", defaultOn: true },
];

const SECURITY_TOGGLES: ToggleSetting[] = [
  { label: "Two-Factor Authentication", key: "2fa", defaultOn: true },
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        NOTIFICATION_SETTINGS.map((s) => [s.key, s.defaultOn])
      )
  );

  const [twoFactor, setTwoFactor] = useState(true);
  const [themeLight, setThemeLight] = useState(true);

  function Toggle({
    on,
    onToggle,
  }: {
    on: boolean;
    onToggle: () => void;
  }) {
    return (
      <button
        onClick={onToggle}
        className={`relative h-5 w-10 rounded-full transition-colors ${on ? "bg-[#761c37]" : "bg-[#222]/20"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>
    );
  }

  return (
    <>
      <div className="p-8">
        {/* Section heading */}
        <div className="mb-6">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
            Platform Configuration
          </h2>
          <p className="mt-1 text-sm text-[#222]/50">
            Manage system-wide settings, integrations and platform preferences.
          </p>
        </div>

        {/* Settings cards grid */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {/* General Settings */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-[#222]">
              General Settings
            </h3>
            <div className="divide-y divide-black/5">
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Platform Name</span>
                <span className="text-sm font-medium text-[#222]">
                  Wellness &amp; Mind
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">
                  Default Currency
                </span>
                <span className="text-sm font-medium text-[#222]">AED</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">
                  Default Language
                </span>
                <span className="text-sm font-medium text-[#222]">
                  English
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Timezone</span>
                <span className="text-sm font-medium text-[#222]">
                  GMT+4 (Dubai)
                </span>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-[#222]">
              Notification Preferences
            </h3>
            <div className="divide-y divide-black/5">
              {NOTIFICATION_SETTINGS.map((s) => (
                <div
                  key={s.key}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-sm text-[#222]/70">{s.label}</span>
                  <Toggle
                    on={notifications[s.key]}
                    onToggle={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        [s.key]: !prev[s.key],
                      }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Security Settings */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-[#222]">
              Security Settings
            </h3>
            <div className="divide-y divide-black/5">
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">
                  Two-Factor Authentication
                </span>
                <Toggle
                  on={twoFactor}
                  onToggle={() => setTwoFactor((v) => !v)}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Session Timeout</span>
                <span className="text-sm font-medium text-[#222]">
                  30 minutes
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Password Policy</span>
                <span className="text-sm font-medium text-[#222]">
                  Strong (12+ chars)
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">IP Whitelist</span>
                <span className="rounded-full bg-[#E6F9F0] px-2.5 py-1 text-xs font-medium text-[#0CAF72]">
                  Enabled
                </span>
              </div>
            </div>
          </div>

          {/* Integration Status */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-[#222]">
              Integration Status
            </h3>
            <div className="divide-y divide-black/5">
              {[
                { label: "Payment Gateway", connected: true },
                { label: "Email Provider", connected: true },
                { label: "SMS Provider", connected: true },
                { label: "Calendar Sync", connected: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-sm text-[#222]/70">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-2 rounded-full ${item.connected ? "bg-[#0CAF72]" : "bg-[#E5484D]"}`}
                    />
                    <span
                      className={`text-sm font-medium ${item.connected ? "text-[#0CAF72]" : "text-[#E5484D]"}`}
                    >
                      {item.connected ? "Connected" : "Disconnected"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-[#222]">
              Appearance
            </h3>
            <div className="divide-y divide-black/5">
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Theme</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#222]">
                    {themeLight ? "Light" : "Dark"}
                  </span>
                  <Toggle
                    on={themeLight}
                    onToggle={() => setThemeLight((v) => !v)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Primary Color</span>
                <div className="flex items-center gap-2">
                  <span className="size-5 rounded-md bg-[#761c37]" />
                  <span className="text-sm font-medium text-[#222]">
                    #761c37
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-[#222]/70">Sidebar Style</span>
                <span className="text-sm font-medium text-[#222]">
                  Floating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
