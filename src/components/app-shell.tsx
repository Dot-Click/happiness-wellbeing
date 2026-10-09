"use client";

import { Bell, ChevronDown, ChevronRight, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTheme } from "@/components/theme-provider";

const NAV = [
  { href: "/discover", label: "Discover" },
  { href: "/missions", label: "My Missions" },
  { href: "/messages", label: "Message" },
  { href: "/vault", label: "Secure Vault" },
];

export function AppShell({
  children,
  active,
  forceDark = false,
  lightNav = false,
  hideNav = false,
}: {
  children: ReactNode;
  active?: string;
  forceDark?: boolean;
  lightNav?: boolean;
  hideNav?: boolean;
}) {
  const { theme } = useTheme();
  const dark = forceDark || theme === "dark";
  return (
    <div
      className={`relative flex min-h-screen flex-col ${
        dark ? "bg-[#120606] text-white" : "bg-[#faf6f0] text-[#222]"
      }`}
    >
      {!hideNav && (
        <TopNav active={active} dark={dark} lightNav={lightNav && !dark} />
      )}
      <main className="flex-1">{children}</main>
      <Footer dark={dark} />
    </div>
  );
}

function TopNav({
  active,
  dark,
  lightNav,
}: {
  active?: string;
  dark: boolean;
  lightNav: boolean;
}) {
  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 h-16 ${
        lightNav
          ? "border-b border-black/5 bg-[#faf6f0]/95 text-[#222] backdrop-blur-sm"
          : "text-white"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/discover" className="flex items-center gap-2">
          <Image
            src="/figma/logo.png"
            alt="Wellness & Mind"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span
            className={`hidden font-serif leading-tight sm:block ${
              lightNav ? "text-[#222]" : "text-white drop-shadow-sm"
            }`}
          >
            <span className="block text-[13px] tracking-wider">WELLNESS</span>
            <span className="block text-[16px] tracking-wider">&amp; MIND</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition ${
                  lightNav
                    ? isActive
                      ? "font-medium text-[#761c37]"
                      : "text-[#222]/70 hover:text-[#222]"
                    : isActive
                      ? "text-[#f4c481] drop-shadow-sm"
                      : "text-white/85 drop-shadow-sm hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={`relative grid size-9 place-items-center rounded-full backdrop-blur-sm ${
              lightNav
                ? "bg-black/5 text-[#222]"
                : "bg-white/10 text-white drop-shadow-sm"
            }`}
            aria-label="Notifications"
          >
            <Bell className="size-5 fill-current" strokeWidth={1.5} />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-[#E5484D]" />
          </button>

          <UserMenu dark={dark} lightNav={lightNav} />
        </div>
      </div>
    </header>
  );
}

function UserMenu({ dark, lightNav }: { dark: boolean; lightNav: boolean }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (!open) return;
      if (menuRef.current?.contains(t) || anchorRef.current?.contains(t)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={anchorRef}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Image
          src="/figma/avatar-daniel.png"
          alt="Daniel Williamson"
          width={36}
          height={36}
          className={`size-9 rounded-full object-cover ring-2 ${
            lightNav ? "ring-black/10" : "ring-white/30"
          }`}
        />
        <div
          className={`hidden flex-col text-left leading-tight sm:flex ${
            lightNav ? "text-[#222]" : "text-white drop-shadow-sm"
          }`}
        >
          <span className="text-sm font-medium">Daniel Williamson</span>
          <span
            className={`text-[11px] ${lightNav ? "text-[#222]/60" : "text-white/70"}`}
          >
            danielwilliams@mail.com
          </span>
        </div>
        <ChevronDown
          className={`hidden size-4 shrink-0 transition-transform sm:block ${
            open ? "rotate-180" : ""
          } ${lightNav ? "text-[#222]/50" : "text-white/70 drop-shadow-sm"}`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 z-40 mt-3 w-[320px]"
        >
          <UserMenuDropdown dark={dark} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

function UserMenuDropdown({
  dark,
  onClose,
}: {
  dark: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const { theme, toggle } = useTheme();

  const MENU = [
    {
      icon: "/figma/icons/reference.svg",
      label: "Reference",
      sub: "HE-260923-0849",
      href: "/missions",
    },
    {
      icon: "/figma/icons/my-bookings.svg",
      label: "My Bookings",
      sub: "View upcoming",
      href: "/missions",
    },
    {
      icon: "/figma/icons/documents.svg",
      label: "Documents",
      sub: "Encrypted intake",
      href: "/vault",
    },
    {
      icon: "/figma/icons/payment-methods.svg",
      label: "Payment Methods",
      sub: "Wire + card on file",
      href: "/payment",
    },
    {
      icon: "/figma/icons/settings.svg",
      label: "Settings",
      sub: "Preferences",
      href: "/settings",
    },
  ];

  return (
    <div
      className={`overflow-hidden rounded-2xl border backdrop-blur-xl ${
        dark
          ? "border-white/10 bg-black/70 text-white"
          : "border-black/10 bg-white/95 text-[#222]"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-3 border-b p-4 ${
          dark ? "border-white/10" : "border-black/5"
        }`}
      >
        <Image
          src="/figma/avatar-daniel.png"
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">Daniel Williamson</span>
          <span className="text-[11px] text-[#913F58]">
            danielwilliams@mail.com
          </span>
        </div>
      </div>

      {/* Menu items */}
      <ul className="flex flex-col p-2">
        {MENU.map(({ icon, label, sub, href }) => (
          <li key={label}>
            <button
              onClick={() => {
                router.push(href);
                onClose();
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs transition ${
                dark ? "hover:bg-white/5" : "hover:bg-black/5"
              }`}
            >
              <Image src={icon} alt="" width={32} height={32} className="size-8 shrink-0" />
              <span className="flex-1">
                <span className="block font-medium">{label}</span>
                <span
                  className={`block text-[10px] ${dark ? "text-white/40" : "text-[#222]/50"}`}
                >
                  {sub}
                </span>
              </span>
              <ChevronRight
                className={`size-3.5 ${dark ? "text-white/40" : "text-[#222]/40"}`}
              />
            </button>
          </li>
        ))}

        {/* Theme toggle */}
        <li>
          <div className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs">
            <Image
              src="/figma/icons/theme.svg"
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0"
            />
            <span className="flex-1">
              <span className="block font-medium">Theme</span>
              <span
                className={`block text-[10px] ${dark ? "text-white/40" : "text-[#222]/50"}`}
              >
                {theme === "dark" ? "Dark" : "Light"} · tap to switch
              </span>
            </span>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition ${
                theme === "dark" ? "bg-[#761c37]" : "bg-black/15"
              }`}
            >
              <span
                className={`absolute left-0.5 inline-flex size-4 items-center justify-center rounded-full bg-white shadow transition-transform ${
                  theme === "dark" ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </li>
      </ul>

      {/* Sign out */}
      <div className={`border-t p-3 ${dark ? "border-white/10" : "border-black/5"}`}>
        <button
          onClick={() => {
            onClose();
            router.push("/signin");
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-lg border py-2 text-xs ${
            dark
              ? "border-white/10 text-[#f4c481]"
              : "border-black/10 text-[#761c37]"
          }`}
        >
          <LogOut className="size-3.5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

function Footer({ dark }: { dark: boolean }) {
  return (
    <footer
      className={`text-xs ${
        dark
          ? "bg-[#1a0b0b]/70 text-white/60"
          : "border-t border-black/5 bg-[#E9DFD5] text-[#222]/60"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 lg:px-10">
        <p>&copy; 2026 Happiness Experience. Private client platform.</p>
        <div className="flex items-center gap-6">
          <Link href="/vault" className="hover:underline">
            Secure Vault
          </Link>
          <Link href="/settings" className="hover:underline">
            Privacy &amp; security
          </Link>
        </div>
      </div>
    </footer>
  );
}
