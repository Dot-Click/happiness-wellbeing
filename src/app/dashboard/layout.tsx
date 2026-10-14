"use client";

import {
  LayoutDashboard,
  ClipboardList,
  Users,
  UserCog,
  Sparkles,
  Handshake,
  FileCheck,
  CreditCard,
  Bell,
  MessageSquare,
  HeadphonesIcon,
  Shield,
  FileText,
  Settings,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const COMMAND_NAV = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/requests", label: "Requests & Missions", icon: ClipboardList },
  { href: "/dashboard/clients", label: "Clients", icon: Users },
];

const OPERATIONS_NAV = [
  { href: "/dashboard/concierge", label: "Concierge Team", icon: UserCog },
  { href: "/dashboard/services", label: "Services & Experiences", icon: Sparkles },
  { href: "/dashboard/partners", label: "Partners & Resources", icon: Handshake },
  { href: "/dashboard/documents", label: "Secure Documents", icon: FileCheck },
  { href: "/dashboard/payments", label: "Payments & Billing", icon: CreditCard },
  { href: "/dashboard/notifications", label: "Notification Center", icon: Bell },
  { href: "/dashboard/messages", label: "Messages & Meetings", icon: MessageSquare },
  { href: "/dashboard/support", label: "Support & Escalations", icon: HeadphonesIcon },
];

const CONTROL_NAV = [
  { href: "/dashboard/admin", label: "Admin & Permissions", icon: Shield },
  { href: "/dashboard/audit", label: "Audit Log", icon: FileText },
  { href: "/dashboard/settings", label: "Platform Settings", icon: Settings },
];

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
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition ${
              active
                ? "bg-[#761c37] text-white "
                : "text-[#222]/70 hover:bg-black/5"
            }`}
          >
            <Icon className="size-[18px] shrink-0" strokeWidth={1.8} />
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

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const meta = PAGE_META[pathname] ?? {
    breadcrumb: "Super Admin",
    title: "Dashboard",
  };

  return (
    <div className="flex min-h-screen bg-[#faf6f0] font-sans">
      {/* Sidebar */}
      <aside className="fixed left-3 top-3 bottom-3 z-30 flex w-[268px] flex-col overflow-y-auto rounded-2xl border border-black/10 bg-white ">
        <div className="flex items-center gap-3 px-6 py-5">
          <Image
            src="/figma/logo.png"
            alt="Wellness & Mind"
            width={44}
            height={44}
            className="size-11"
          />
          <span className="font-serif leading-tight text-[#222]">
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em]">
              Wellness
            </span>
            <span className="block text-[15px] font-medium tracking-wider">
              &amp; Mind
            </span>
          </span>
        </div>

        <nav className="flex-1 px-3 pb-6">
          <NavSection title="Command" items={COMMAND_NAV} pathname={pathname} />
          <NavSection title="Operations" items={OPERATIONS_NAV} pathname={pathname} />
          <NavSection title="Control" items={CONTROL_NAV} pathname={pathname} />
        </nav>
      </aside>

      {/* Main content */}
      <div className="ml-[286px] flex-1">
        {/* Top bar */}
        <header className="sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl border border-black/10 bg-white/95 px-6 py-3.5  backdrop-blur-sm">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
              {meta.breadcrumb}
            </p>
            <h1 className="font-serif text-2xl font-semibold text-[#761c37]">
              {meta.title}
            </h1>
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
