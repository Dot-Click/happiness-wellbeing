"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const COMMAND_NAV = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/dashboard/requests", label: "Requests & Missions", icon: "request" },
  { href: "/dashboard/clients", label: "Clients", icon: "clients" },
];

const OPERATIONS_NAV = [
  { href: "/dashboard/concierge", label: "Concierge Team", icon: "concierge" },
  { href: "/dashboard/services", label: "Services & Experiences", icon: "service" },
  { href: "/dashboard/partners", label: "Partners & Resources", icon: "partner" },
  { href: "/dashboard/documents", label: "Secure Documents", icon: "document" },
  { href: "/dashboard/payments", label: "Payments & Billing", icon: "payment" },
  { href: "/dashboard/notifications", label: "Notification Center", icon: "notification" },
  { href: "/dashboard/messages", label: "Messages & Meetings", icon: "messages" },
  { href: "/dashboard/support", label: "Support & Escalations", icon: "support" },
];

const CONTROL_NAV = [
  { href: "/dashboard/admin", label: "Admin & Permissions", icon: "admin" },
  { href: "/dashboard/audit", label: "Audit Log", icon: "audit" },
  { href: "/dashboard/settings", label: "Platform Settings", icon: "settings" },
];

// Renders a Figma sidebar icon (public/figma/sidebar-icons) as a CSS mask so it
// takes the nav item's text color: white "fill" variant when active, gray
// "outline" variant when not.
function NavIcon({ name, active }: { name: string; active: boolean }) {
  const file = `/figma/sidebar-icons/${name}-${active ? "fill" : "outline"}.svg`;
  return (
    <span
      aria-hidden
      className="block size-[18px] shrink-0 bg-current"
      style={{
        maskImage: `url(${file})`,
        WebkitMaskImage: `url(${file})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

function NavSection({
  title,
  items,
  pathname,
}: {
  title: string;
  items: typeof COMMAND_NAV;
  pathname: string;
}) {
  return (
    <>
      <p className="mb-2 mt-6 first:mt-4 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
        {title}
      </p>
      {items.map((item) => {
        const active =
          item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
              active
                ? "bg-gradient-to-r from-[#9E4560] to-[#761C37] text-white "
                : "text-[#222]/70 hover:bg-black/5"
            }`}
          >
            <NavIcon name={item.icon} active={active} />
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

const PAGE_META: Record<string, { breadcrumb: string; title: string }> = {
  "/dashboard": {
    breadcrumb: "Super Admin / Overview",
    title: "Operational Command Center",
  },
  "/dashboard/requests": {
    breadcrumb: "Super Admin / Requests & Missions",
    title: "Requests & Missions",
  },
  "/dashboard/clients": {
    breadcrumb: "Super Admin / Command",
    title: "Clients",
  },
  "/dashboard/concierge": {
    breadcrumb: "Super Admin / Operations",
    title: "Concierge Team",
  },
  "/dashboard/services": {
    breadcrumb: "Super Admin / Operations",
    title: "Services & Experiences",
  },
  "/dashboard/partners": {
    breadcrumb: "Super Admin / Operations",
    title: "Partners & Resources",
  },
  "/dashboard/documents": {
    breadcrumb: "Super Admin / Operations",
    title: "Secure Documents",
  },
  "/dashboard/payments": {
    breadcrumb: "Super Admin / Operations",
    title: "Payments & Billing",
  },
  "/dashboard/notifications": {
    breadcrumb: "Super Admin / Operations",
    title: "Notification Center",
  },
  "/dashboard/messages": {
    breadcrumb: "Super Admin / Operations",
    title: "Messages & Meetings",
  },
  "/dashboard/support": {
    breadcrumb: "Super Admin / Operations",
    title: "Support & Escalations",
  },
  "/dashboard/admin": {
    breadcrumb: "Super Admin / Control",
    title: "Admin & Permissions",
  },
  "/dashboard/audit": {
    breadcrumb: "Super Admin / Control",
    title: "Audit Log",
  },
  "/dashboard/settings": {
    breadcrumb: "Super Admin / Control",
    title: "Platform Settings",
  },
};

function PanelToggleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden>
      <rect width="28" height="28" rx="8" fill="#8B3A54" />
      <rect x="3.5" y="3.5" width="11" height="21" rx="2.75" fill="#ffffff" />
    </svg>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const meta = PAGE_META[pathname] ?? {
    breadcrumb: "Super Admin",
    title: "Dashboard",
  };

  return (
    <div className="flex min-h-screen bg-[#faf6f0] font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed left-3 top-3 bottom-3 z-30 flex w-[268px] flex-col overflow-y-auto rounded-2xl border border-black/10 bg-white transition-transform duration-300 ${
          collapsed ? "-translate-x-[120%]" : "translate-x-0"
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-5">
          <Image
            src="/figma/logo.png"
            alt="Wellness & Mind"
            width={44}
            height={44}
            className="size-11 shrink-0"
          />
          <span className="font-serif leading-tight text-[#222]">
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em]">
              Wellness
            </span>
            <span className="block text-[15px] font-medium tracking-wider">
              &amp; Mind
            </span>
          </span>
          <button
            onClick={() => setCollapsed(true)}
            className="ml-auto grid size-8 shrink-0 place-items-center rounded-lg text-[#761c37] transition hover:bg-[#761c37]/10"
            title="Collapse sidebar"
            aria-label="Collapse sidebar"
          >
            <PanelToggleIcon className="size-7" />
          </button>
        </div>

        <nav className="flex-1 px-3 pb-6">
          <NavSection title="Command" items={COMMAND_NAV} pathname={pathname} />
          <NavSection title="Operations" items={OPERATIONS_NAV} pathname={pathname} />
          <NavSection title="Control" items={CONTROL_NAV} pathname={pathname} />
        </nav>
      </aside>

      {/* Main content */}
      <div
        className={`flex-1 transition-[margin] duration-300 ${
          collapsed ? "ml-0" : "ml-[286px]"
        }`}
      >
        {/* Top bar */}
        <header className="sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl border border-black/10 bg-white/95 px-6 py-3.5  backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {collapsed && (
              <button
                onClick={() => setCollapsed(false)}
                className="grid size-9 shrink-0 place-items-center rounded-lg text-[#761c37] transition hover:bg-[#761c37]/10"
                title="Open sidebar"
                aria-label="Open sidebar"
              >
                <PanelToggleIcon className="size-7" />
              </button>
            )}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
                {meta.breadcrumb}
              </p>
              <h1 className="font-serif text-2xl font-semibold text-[#761c37]">
                {meta.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/figma/avatar-daniel.png"
              alt="Will Bettelhiem"
              width={36}
              height={36}
              className="size-9 rounded-full object-cover ring-2 ring-black/10"
            />
            <div className="hidden flex-col text-left leading-tight lg:flex">
              <span className="text-sm font-medium text-[#222]">
                Will_Bettelhiem
              </span>
              <span className="text-[11px] text-[#222]/50">
                will_bettelhiem@gmail.com
              </span>
            </div>
            <ChevronDown className="size-4 text-[#222]/40" />
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
