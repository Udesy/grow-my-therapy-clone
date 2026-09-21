import Link from "next/link";
import React from "react";
import { legalLinks } from "@/lib/constant";

const FooterLegalBar = () => {
  return (
    <div className="bg-accent section-grid h-fit py-xs max-md:px-[6vw]">
      <p className="md:col-start-2 col-span-4 text-xs font-light text-white">
        {legalLinks.map(({ label, href }, i) => (
          <React.Fragment key={label}>
            <Link href={href} className="hover:text-white/50 transition-colors">
              {label}
            </Link>
            {i < legalLinks.length - 1 && " | "}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default FooterLegalBar;
