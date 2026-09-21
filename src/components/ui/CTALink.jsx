import Link from "next/link";

export default function CtaLink({ href = "#", children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-cta-primary group relative inline-block w-fit uppercase tracking-widest pb-1 ${className}`}
    >
      {children}
      <span
        className="absolute left-0 bottom-0 h-px w-full bg-secondary origin-left
          transition-transform duration-500 ease-in-out
          scale-x-100 group-hover:scale-x-0"
      />
    </Link>
  );
}
