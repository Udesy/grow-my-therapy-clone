"use client";

export default function HamburgerMenu({ open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle menu"
      className="relative w-9 h-6 bg-transparent border-none cursor-pointer"
    >
      <span
        className={`absolute left-0 w-full h-px bg-secondary transition-all duration-300 ease-in-out
          ${open ? "top-[11px] rotate-45" : "top-0"}`}
      />
      <span
        className={`absolute left-0 top-[11px] w-full h-px bg-secondary transition-all duration-300 ease-in-out
          ${open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
      />
      <span
        className={`absolute left-0 w-full h-px bg-secondary transition-all duration-300 ease-in-out
          ${open ? "top-[11px] -rotate-45" : "top-[22px]"}`}
      />
    </button>
  );
}
