"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AuthLayout } from "@/components/auth-layout";
import {
  GhostButton,
  Label,
  NotificationRow,
  PrimaryButton,
  Select,
  TextInput,
} from "@/components/ui";

const TOTAL_STEPS = 4;

const INTERESTS = [
  {
    id: "health",
    label: "Health & Vitality",
    icon: "/figma/heart.svg",
    iconActive: "/figma/heart-white.svg",
  },
  {
    id: "mind",
    label: "Mind & Serenity",
    icon: "/figma/lotus.svg",
    iconActive: "/figma/lotus-white.svg",
  },
  {
    id: "business",
    label: "Business & Logistics",
    icon: "/figma/briefcase.svg",
    iconActive: "/figma/briefcase-white.svg",
  },
] as const;

function StepHeader({
  step,
  onBack,
}: {
  step: number;
  onBack: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="flex items-center gap-2 text-sm font-medium tracking-wide text-[#761c37]"
    >
      <Image
        src="/figma/icon-chevron-back.svg"
        alt=""
        width={12}
        height={10}
        className="rotate-180"
      />
      Back &nbsp;{step}/{TOTAL_STEPS}
    </button>
  );
}

function SectionHeading({
  tagline,
  title,
  description,
}: {
  tagline: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-medium tracking-[0.18em] text-[#222]/70 uppercase">
        {tagline}
      </p>
      <h2 className="font-serif text-[26px] leading-tight text-[#761c37]">
        {title}
      </h2>
      <p className="text-sm leading-snug text-[#222]/70">{description}</p>
    </div>
  );
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [interest, setInterest] = useState<string>("health");
  const [emailOn, setEmailOn] = useState(true);
  const [smsOn, setSmsOn] = useState(true);
  const [appOn, setAppOn] = useState(false);

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  // Completion takeover: hero stays, but the whole screen is dimmed and only the welcome card shows.
  if (done) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-[#0f0202]">
        <div className="absolute inset-0">
          <Image
            src="/figma/hero-photo.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(15,2,2,0.88)]" />
        </div>
        <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
          <div className="flex w-full max-w-[400px] flex-col items-center gap-5 rounded-2xl border border-black/10 bg-gradient-to-b from-[#fffcf3] to-[rgba(255,255,255,0.95)] p-10 text-center backdrop-blur-xl">
            <Image
              src="/figma/icon-check-badge.png"
              alt=""
              width={80}
              height={80}
            />
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#222]/70 uppercase">
                Welcome aboard
              </p>
              <h2 className="font-serif text-[32px] leading-tight text-[#761c37]">
                You&apos;re all set.
              </h2>
              <p className="text-sm leading-snug text-[#222]/70">
                Your private world is ready. Explore curated experiences or
                connect with your concierge.
              </p>
            </div>
            <Link
              href="/"
              className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-gradient-to-r from-[#761c37] to-[#913f58] text-sm font-medium tracking-wide text-white transition hover:brightness-110"
            >
              Go to your dashboard
              <Image src="/figma/icon-arrow.svg" alt="" width={13} height={11} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthLayout>
      {step === 1 ? (
        <Link
          href="/signup"
          className="flex items-center gap-2 text-sm font-medium tracking-wide text-[#761c37]"
        >
          <Image
            src="/figma/icon-chevron-back.svg"
            alt=""
            width={12}
            height={10}
            className="rotate-180"
          />
          Back &nbsp;1/{TOTAL_STEPS}
        </Link>
      ) : (
        <StepHeader step={step} onBack={back} />
      )}

      {step === 1 && (
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
        >
          <SectionHeading
            tagline="A Personal Welcome"
            title="Let's make this yours."
            description="A few essential details help us tailor your private experience and allow your concierge team to reach you."
          />
          <div>
            <Label>Full name</Label>
            <TextInput placeholder="e.g. Olivia Bennett" required />
          </div>
          <div>
            <Label>
              Email address{" "}
              <span className="font-normal text-[#222]/50">(optional)</span>
            </Label>
            <TextInput type="email" placeholder="e.g. olivia@example.com" />
          </div>
          <PrimaryButton type="submit">Continue</PrimaryButton>
        </form>
      )}

      {step === 2 && (
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
        >
          <SectionHeading
            tagline="A Personal Welcome"
            title="A little care, from the start."
            description="Set your communication preference. You can update these details later from your profile."
          />
          <div className="flex flex-col gap-3">
            <div>
              <Label>Account type</Label>
              <Select defaultValue="vip">
                <option value="vip">VIP Client</option>
                <option value="standard">Standard Client</option>
                <option value="corporate">Corporate Client</option>
              </Select>
            </div>
            <div>
              <Label>Preferred language</Label>
              <Select defaultValue="en">
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <NotificationRow
              label="Email"
              description="Confirmations, documents and important summaries."
              checked={emailOn}
              onToggle={() => setEmailOn((v) => !v)}
            />
            <NotificationRow
              label="SMS"
              description="Time-sensitive service and concierge updates."
              checked={smsOn}
              onToggle={() => setSmsOn((v) => !v)}
            />
            <NotificationRow
              label="In-app notifications"
              description="Messages, booking updates and reminders."
              checked={appOn}
              onToggle={() => setAppOn((v) => !v)}
            />
          </div>
          <PrimaryButton type="submit">Continue</PrimaryButton>
        </form>
      )}

      {step === 3 && (
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
        >
          <SectionHeading
            tagline="Secure Document Vault"
            title="Add prior records, if you'd like."
            description="Optional. Reports here are encrypted end-to-end and reach only your assigned concierge and clinic — never shared before you've verified."
          />
          <label className="flex min-h-[110px] w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#a96666] bg-white/70 px-4 py-6 text-center">
            <input type="file" className="hidden" />
            <span className="text-sm font-medium text-[#222]">
              Drag files here, or click to browse
            </span>
            <span className="text-xs tracking-wide text-[#222]/60">
              PDF or JPG, up to 20MB per file
            </span>
          </label>
          <div className="flex gap-2">
            <GhostButton type="button" className="w-20" onClick={next}>
              Skip
            </GhostButton>
            <PrimaryButton type="submit" className="flex-1">
              Continue
            </PrimaryButton>
          </div>
        </form>
      )}

      {step === 4 && (
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <SectionHeading
            tagline="Optional Personalization"
            title="What interests you most?"
            description="This helps personalize discovery only. It does not limit what you can explore or book."
          />
          <div className="flex gap-2.5">
            {INTERESTS.map(({ id, label, icon, iconActive }) => {
              const active = interest === id;
              return (
                <button
                  type="button"
                  key={id}
                  onClick={() => setInterest(id)}
                  className={`flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border py-4 text-center transition ${
                    active
                      ? "border-[#402b31] bg-gradient-to-b from-[#781f3a] to-[#903e57]"
                      : "border-[#e8e2e2] bg-white"
                  }`}
                >
                  <Image
                    src={active ? iconActive : icon}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <span
                    className={`text-xs leading-tight ${
                      active ? "text-white" : "text-[#222]"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <GhostButton
              type="button"
              className="w-20"
              onClick={() => setDone(true)}
            >
              Skip
            </GhostButton>
            <PrimaryButton type="submit" className="flex-1">
              Setup Complete
            </PrimaryButton>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
