import Image from "next/image";
import Link from "next/link";
import { AuthLayout } from "@/components/auth-layout";
import { Label, PrimaryButton, SecondaryButton, TextInput } from "@/components/ui";

export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#222]/70 uppercase">
          Welcome to your private world
        </p>
        <h2 className="font-serif text-[28px] leading-tight text-[#761c37]">
          Your experience begins here.
        </h2>
        <p className="text-sm text-[#222]/70">
          Enter the mobile number registered with your concierge team.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <Label>Mobile number</Label>
          <TextInput type="tel" placeholder="+971 50 000 0000" />
        </div>

        <PrimaryButton type="submit">Continue with SMS code</PrimaryButton>

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
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-[#761c37]">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}
