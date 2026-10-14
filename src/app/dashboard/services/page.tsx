"use client";

import { Search, Plus } from "lucide-react";
import Image from "next/image";

type Service = {
  image: string;
  category: string;
  title: string;
  price: string;
  status: string;
};

const SERVICES: Service[] = [
  {
    image: "/figma/card-executive-health.png",
    category: "Health & Vitality",
    title: "Executive Health 360",
    price: "AED 13,350",
    status: "Active",
  },
  {
    image: "/figma/card-corporate.png",
    category: "Corporate",
    title: "Executive Travel & Logistics",
    price: "USD 45,000",
    status: "Active",
  },
  {
    image: "/figma/card-serenity.png",
    category: "Serenity",
    title: "Alpine Serenity Retreat",
    price: "USD 16,800",
    status: "Active",
  },
  {
    image: "/figma/card-international.png",
    category: "International Care",
    title: "International Medical Concierge",
    price: "AED 21,000",
    status: "Active",
  },
  {
    image: "/figma/card-health2.png",
    category: "Health & Vitality",
    title: "Preventive Health Screening",
    price: "AED 6,900",
    status: "Active",
  },
  {
    image: "/figma/card-preventive.png",
    category: "Medical",
    title: "Private Preventive Assessment",
    price: "AED 8,900",
    status: "Active",
  },
  {
    image: "/figma/card-6.png",
    category: "Corporate",
    title: "Corporate Buddy Package",
    price: "USD 4,500",
    status: "Active",
  },
  {
    image: "/figma/card-7.png",
    category: "Serenity",
    title: "Luxury Wellness Journey",
    price: "USD 34,600",
    status: "Active",
  },
];

export default function ServicesPage() {
  return (
    <div className="p-8">
      {/* Toolbar */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#222]/30" />
          <input
            placeholder="Search services..."
            className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 text-sm text-[#222] outline-none placeholder:text-[#222]/35 focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/10"
          />
        </div>
        <button className="flex shrink-0 items-center gap-2 rounded-xl bg-[#761c37] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
          <Plus className="size-4" />
          Add New Experience
        </button>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-black/5 bg-white"
          >
            <div className="relative">
              <Image
                src={s.image}
                alt={s.title}
                width={400}
                height={240}
                className="h-44 w-full object-cover"
              />
              <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#0CAF72] shadow-sm backdrop-blur-sm">
                {s.status}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c98a4b]">
                {s.category}
              </p>
              <h3 className="mt-1 font-serif text-lg font-medium text-[#222]">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-[#222]/60">{s.price}</p>
              <div className="mt-4 flex items-center gap-2">
                <button className="flex-1 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium text-[#222] transition hover:bg-black/5">
                  Edit
                </button>
                <button className="flex-1 rounded-lg bg-[#FFF0F0] px-3 py-2 text-sm font-medium text-[#E5484D] transition hover:bg-[#ffe3e3]">
                  Archive
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
