import Image from "next/image";
import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

const BUTTON_BASE =
  "flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium tracking-wide text-white transition disabled:opacity-50";

export function PrimaryButton({
  children,
  className = "",
  showArrow = true,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  showArrow?: boolean;
}) {
  return (
    <button
      className={`${BUTTON_BASE} border border-white/15 bg-gradient-to-r from-[#761c37] to-[#913f58] hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <Image src="/figma/icon-arrow.svg" alt="" width={13} height={11} />
      )}
    </button>
  );
}

export function SecondaryButton({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={`${BUTTON_BASE} border border-white/10 bg-gradient-to-r from-[#313030] to-[#202020] hover:brightness-125 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={`flex h-11 items-center justify-center rounded-xl border border-black/10 bg-gradient-to-r from-[#f8f8f8] to-white px-5 text-sm font-medium tracking-wide text-[#222] transition hover:brightness-95 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <label className="mb-1.5 block text-sm font-medium tracking-wide text-[#222]">
      {children}
    </label>
  );
}

const FIELD_BASE =
  "h-11 w-full rounded-xl border border-black/10 bg-white px-3.5 text-sm tracking-wide text-[#222] outline-none placeholder:font-light placeholder:text-[rgba(34,34,34,0.42)] focus:border-[#761c37] focus:ring-2 focus:ring-[#761c37]/15";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={FIELD_BASE} {...props} />;
}

export function Select({
  className = "",
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <div className="relative">
      <select
        className={`${FIELD_BASE} appearance-none pr-9 font-light ${className}`}
        {...props}
      >
        {children}
      </select>
      <Image
        src="/figma/icon-chevron-down.svg"
        alt=""
        width={11}
        height={6}
        className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2"
      />
    </div>
  );
}

export function NotificationRow({
  label,
  description,
  checked,
  onToggle,
}: {
  label: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex min-h-[56px] w-full items-center gap-3 rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-left"
    >
      {checked ? (
        <Image
          src={
            label === "Email"
              ? "/figma/icon-check-email.svg"
              : "/figma/icon-check-sms.svg"
          }
          alt=""
          width={20}
          height={20}
          className="shrink-0"
        />
      ) : (
        <span className="block size-5 shrink-0 rounded-md bg-[#f2f2f2]" />
      )}
      <span className="flex flex-col leading-tight text-[#222]">
        <span className="text-sm tracking-wide">{label}</span>
        <span className="text-xs font-light tracking-wide text-[#222]/60">
          {description}
        </span>
      </span>
    </button>
  );
}
