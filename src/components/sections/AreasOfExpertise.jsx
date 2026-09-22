import { expertiseAreas } from "@/lib/constant";
import React from "react";

const AreasOfExpertise = () => {
  // Split the flat list into two even columns
  const half = Math.ceil(expertiseAreas.length / 2);
  const columnOne = expertiseAreas.slice(0, half);
  const columnTwo = expertiseAreas.slice(half);

  return (
    <section className="max-md:px-[6vw] py-2xl section-grid bg-white">
      <h2 className="font-serif text-xl md:text-2xl leading-13 col-span-full md:col-start-2 md:col-span-3">
        My areas of <span className="font-script text-accent">expertise</span>
      </h2>

      <div className="col-span-full md:col-start-6 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-2xl font-light">
        <ul>
          {columnOne.map((item) => (
            <li
              key={item}
              className="py-7 border-b border-surface md:last:border-0 text-sm tracking-widest uppercase text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>

        <ul>
          {columnTwo.map((item) => (
            <li
              key={item}
              className="py-7 border-b border-surface last:border-0 text-sm tracking-widest uppercase text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
