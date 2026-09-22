import { whoWeHelp } from "@/lib/constant";
import React from "react";
import { ImageWithOverlay } from "../ui";

const WhoWeHelp = () => {
  return (
    <section className="px-[--spacing-page-x] py-2xl max-md:px-[6vw] bg-white bleed-grid">
      <h2 className="md:col-start-2 col-span-full font-serif text-2xl md:text-3xl leading-display mb-md">
        How I can <span className="font-script text-accent">help</span>.
      </h2>

      <div className="col-span-full md:col-start-3 md:col-span-11 grid grid-cols-1 gap-y-3xl md:grid-cols-3 md:gap-md ">
        {whoWeHelp.map(({ id, title, image, alt, description }) => (
          <div
            key={title}
            className={`flex flex-col gap-y-lg ${id == 0 ? "mt-0" : "max-md:mt-2"}`}
          >
            <div className="relative w-full max-md:h-[45vh] md:aspect-4/5">
              <ImageWithOverlay
                src={image}
                alt={alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-md">
              <h3 className="font-serif text-lg md:text-xl">{title}</h3>
              <p className="text-base font-light">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeHelp;
