import Image from "next/image";
import type { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f0202]">
      {/* Full-bleed hero photo */}
      <div className="absolute inset-0">
        <Image
          src="/figma/hero-photo.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,2,2,0.85) 0%, rgba(15,2,2,0.4) 40%, rgba(27,4,4,0.12) 100%)",
          }}
        />
      </div>

      {/* Desktop hero copy */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="absolute top-10 left-12">
          <Image
            src="/figma/logo.png"
            alt="Happiness Experience"
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </div>
        <div
          className="absolute flex flex-col gap-4"
          style={{
            top: "clamp(180px, 32vh, 280px)",
            left: "48px",
            maxWidth: "min(560px, calc(100vw - 48px - 500px))",
          }}
        >
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#f4c481] uppercase">
            Executive Medical &amp; Lifestyle Concierge
          </p>
          <h1 className="font-serif text-[clamp(32px,3.2vw,52px)] leading-[1.05] text-white">
            Care arranged with absolute discretion.
          </h1>
          <p className="text-sm leading-relaxed text-white/85">
            Private clinics, senior specialists, chauffeurs, translators and a
            dedicated concierge coordinated around a single day of your time.
          </p>
        </div>
      </div>

      {/* Mobile logo */}
      <div className="relative z-10 flex items-start justify-start p-5 lg:hidden">
        <Image
          src="/figma/logo.png"
          alt="Happiness Experience"
          width={44}
          height={44}
        />
      </div>

      {/* Floating card panel — fixed height on desktop so step forms stay consistent */}
      <div className="relative z-20 flex min-h-screen w-full items-center justify-center p-4 lg:absolute lg:inset-0 lg:w-auto lg:justify-end lg:p-0 lg:pr-5">
        <div
          className="flex w-full max-w-[460px] flex-col rounded-2xl border border-[#ccc7c7] bg-gradient-to-b from-[#fffcf6] to-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8 lg:h-[640px] lg:max-h-[calc(100vh-40px)]"
        >
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-1">
            {children}
          </div>

          <div className="mt-4 flex shrink-0 items-start gap-2 border-t border-[#222]/10 pt-3 text-xs font-light tracking-wide text-[#222]/70">
            <Image
              src="/figma/icon-shield.svg"
              alt=""
              width={13}
              height={15}
              className="mt-0.5 shrink-0"
            />
            <p className="leading-snug">
              Your session is protected. We never ask for medical details
              before you are verified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
