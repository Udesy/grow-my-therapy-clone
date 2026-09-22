// components/sections/Specialties.jsx
import React from "react";
import { CtaLink } from "../ui";
import { specialties } from "@/lib/constant";

const Specialties = () => {
  return (
    <section className="section-grid py-3xl px-[--spacing-page-x] max-md:px-[6vw] bg-white">
      <h2 className="font-serif text-xl md:text-2xl leading-13 col-span-full md:col-start-2 md:col-span-3">
        My <span className="font-script text-accent">specialties</span>{" "}
        include...
      </h2>

      <div className="col-span-8 md:col-end-14 md:col-start-6 md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-x-2xl gap-y-3xl mt-2xl md:mt-0">
        {specialties.map(({ id, title, description }) => (
          <div key={id} className="flex flex-col gap-md">
            <h3 className="font-serif text-lg md:text-xl">{title}</h3>
            <p className="text-base font-light leading-7">{description}</p>
            <CtaLink href="#" className="mt-sm w-fit text-xs">
              Learn more
            </CtaLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
