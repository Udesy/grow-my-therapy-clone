import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  team,
  footerContact,
  footerBrand,
  footerNavigation,
  specialities,
} from "@/lib/constant";

const Footer = () => {
  return (
    <footer className="section-grid overflow-x-clip bg-white py-2xl max-md:px-[6vw]">
      {/* Brand + description */}
      <div className="col-span-8 md:col-span-4 md:col-start-2 order-1 flex flex-col">
        <div className="relative w-full max-w-95 aspect-0/2">
          <Image
            src="/images/logo.png"
            alt="Conejo Valley Family Counseling"
            width={500}
            height={200}
            className="object-contain h-auto w-full"
          />
        </div>
        <p className="text-base font-light leading-7">
          {footerBrand.description}
        </p>
      </div>

      {/* Navigate / Our Team / Contact group */}
      <div className="col-span-8 md:col-start-7 md:col-end-14 md:gap-x-md order-2 grid md:grid-cols-3">
        {/* Navigate */}
        <div className="col-span-4 md:col-span-1 order-2 mt-2xl md:mt-0">
          <p className="text-sm tracking-widest uppercase text-secondary font-light mb-md">
            Navigate
          </p>
          <ul className="flex flex-col gap-2xs">
            {footerNavigation.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-sm md:text-xs font-light leading-2.5 hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Team — 3rd on desktop, last on mobile */}
        <div className="col-span-4 md:col-span-1 order-4 md:order-3 mt-2xl md:mt-0">
          <p className="text-sm tracking-widest uppercase text-secondary font-light mb-md">
            Specialities
          </p>
          <ul className="flex flex-col gap-2xs">
            {specialities.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href="#"
                  className="text-sm md:text-xs font-light leading-2.5 hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — last on desktop, 3rd on mobile */}
        <div className="col-span-8 md:col-span-1 order-3 md:order-4 mt-2xl md:mt-0">
          <p className="text-sm tracking-widest uppercase text-secondary font-light mb-md">
            Contact
          </p>
          <div className="flex flex-col gap-2xs text-sm md:text-xs font-light">
            {footerContact.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <Link
              href={`mailto:${footerContact.email}`}
              className="hover:text-accent transition-colors"
            >
              {footerContact.email}
            </Link>
            <Link
              href={`tel:${footerContact.phone.replace(/\./g, "")}`}
              className="hover:text-accent transition-colors"
            >
              {footerContact.phone}
            </Link>
          </div>
          <p className="mt-md text-xs font-light italic leading-5">
            {footerContact.servingAreas}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
