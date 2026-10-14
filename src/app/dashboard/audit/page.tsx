"use client";

import { Search } from "lucide-react";

const AUDIT_ENTRIES = [
  {
    actor: "Super Admin",
    time: "14:42",
    action: "Assigned concierge",
    resource: "CB-261001-0091",
    result: "Success",
    session: "Admin session",
  },
  {
    actor: "Operations Lead",
    time: "14:31",
    action: "Verified partner",
    resource: "PT-03",
    result: "Allowed",
    session: "Admin session",
  },
  {
    actor: "System",
    time: "14:18",
    action: "Sent milestone SMS",
    resource: "INV-8834",
    result: "Delivered",
    session: "Automation",
  },
  {
    actor: "Finance Lead",
    time: "13:57",
    action: "Payment reconciled",
    resource: "DOC-441",
    result: "Delivered",
    session: "Admin session",
  },
  {
    actor: "Super Admin",
    time: "13:45",
    action: "Updated permissions",
    resource: "USR-012",
    result: "Success",
    session: "Admin session",
  },
  {
    actor: "Concierge Manager",
    time: "13:30",
    action: "Reassigned mission",
    resource: "HE-260925-0847",
    result: "Success",
    session: "Admin session",
  },
  {
    actor: "System",
    time: "13:15",
    action: "Auto-escalated case",
    resource: "SUP-1044",
    result: "Triggered",
    session: "Automation",
  },
  {
    actor: "Operations Lead",
    time: "12:58",
    action: "Approved partner",
    resource: "PT-08",
    result: "Allowed",
    session: "Admin session",
  },
];

function resultColor(result: string) {
  switch (result) {
    case "Success":
    case "Allowed":
    case "Delivered":
      return "bg-[#E6F9F0] text-[#0CAF72]";
    case "Triggered":
      return "bg-[#FFF4E5] text-[#c98a4b]";
    case "Failed":
    case "Denied":
      return "bg-[#FFF0F0] text-[#E5484D]";
    default:
      return "bg-[#F0F0F0] text-[#666]";
  }
}

export default function AuditPage() {
  return (
    <>
      <div className="px-3 py-8">
        {/* Section heading */}
        <div className="mb-6">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#222]/40">
            System Activity
          </h2>
          <p className="mt-1 text-sm text-[#222]/50">
            Complete audit trail of all administrative actions and system events.
          </p>
        </div>

        {/* Audit table */}
        <div className="rounded-2xl border border-black/5 bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div>
              <h2 className="text-base font-semibold text-[#222]">
                Activity Log
              </h2>
              <p className="text-xs text-[#222]/50">
                All system events and administrative actions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
                <input
                  placeholder="Search activity..."
                  className="h-9 w-56 rounded-lg border border-black/10 bg-[#faf6f0] pl-9 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
                />
              </div>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All actors</option>
                <option>Super Admin</option>
                <option>Operations Lead</option>
                <option>Finance Lead</option>
                <option>Concierge Manager</option>
                <option>System</option>
              </select>
              <select className="h-9 appearance-none rounded-lg border border-black/10 bg-[#faf6f0] px-3 pr-8 text-sm text-[#222]/60 outline-none">
                <option>All results</option>
                <option>Success</option>
                <option>Allowed</option>
                <option>Delivered</option>
                <option>Triggered</option>
                <option>Failed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-semibold uppercase tracking-wider text-[#222]/40">
                  <th className="px-6 py-3">Actor</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Action</th>
                  <th className="px-4 py-3">Resource</th>
                  <th className="px-4 py-3">Result</th>
                  <th className="px-4 py-3">Session</th>
                </tr>
              </thead>
              <tbody>
                {AUDIT_ENTRIES.map((e, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-6 py-3.5">
                      <span className="font-medium text-[#222]">
                        {e.actor}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#222]/50">
                      {e.time}
                    </td>
                    <td className="px-4 py-3.5 text-[#222]/70">{e.action}</td>
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-xs text-[#222]/50">
                        {e.resource}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${resultColor(e.result)}`}
                      >
                        {e.result}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#222]/50">
                      {e.session}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-black/5 px-6 py-3">
            <p className="text-xs text-[#222]/50">Showing 1–8 of 142</p>
            <div className="flex items-center gap-1">
              <button className="grid size-8 place-items-center rounded-lg bg-[#761c37] text-xs font-medium text-white">
                1
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                2
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                3
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                ...
              </button>
              <button className="grid size-8 place-items-center rounded-lg text-xs font-medium text-[#222]/50 transition hover:bg-black/5">
                18
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
