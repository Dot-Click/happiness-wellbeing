import Image from "next/image";
import Link from "next/link";
import { AuthLayout } from "@/components/auth-layout";
import { Label, PrimaryButton, SecondaryButton, TextInput } from "@/components/ui";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#222]/70 uppercase">
          Private Member Access
        </p>
        <h2 className="font-serif text-[28px] leading-tight text-[#761c37]">
          Welcome to Happiness Experience.
        </h2>
        <p className="text-sm text-[#222]/70">
          Create your account with your mobile number. No password required.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <Label>Mobile number</Label>
          <div className="flex gap-2">
            <div className="relative shrink-0">
              <select
                defaultValue="+1"
                className="h-11 w-16 appearance-none rounded-xl border border-[#dfdfdf] bg-white pr-4 pl-3 text-center text-sm font-medium text-[#222] shadow-sm outline-none"
              >
                <option>+1</option>
                <option>+44</option>
                <option>+971</option>
              </select>
              <Image
                src="/figma/icon-chevron-down.svg"
                alt=""
                width={9}
                height={5}
                className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2"
              />
            </div>
            <TextInput
              type="tel"
              placeholder="+971 50 000 0000"
              className="flex-1"
            />
          </div>
        </div>

        <PrimaryButton type="submit">Create account &amp; send code</PrimaryButton>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-[#c9c9c9]" />
          <span className="text-xs tracking-wide text-[#222]/60">or</span>
          <span className="h-px flex-1 bg-[#c9c9c9]" />
        </div>

        <SecondaryButton type="button">
          <Image
            src="/figma/icon-fingerprint.svg"
            alt=""
            width={16}
            height={16}
          />
          Sign in with passkey
        </SecondaryButton>
      </form>

      <p className="text-center text-sm text-[#222]/70">
        Already have an account?{" "}
        <Link href="/signin" className="font-medium text-[#761c37]">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
