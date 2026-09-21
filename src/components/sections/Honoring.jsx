// components/sections/Honoring.jsx
import React from "react";
import { ImageWithOverlay } from "../ui";

const Honoring = () => {
  return (
    <section className="section-grid py-3xl bg-white">
      <div className="max-md:ml-[6vh] col-span-full md:col-span-8 relative h-[40vh] md:h-[65vh]">
        <ImageWithOverlay
          src="/images/Image5.jpg"
          alt="A family of four holding hands, looking out at the ocean"
          fill
          className="object-cover"
        />
      </div>

      <div className="col-span-8 md:col-start-9 max-md:px-[6vw] md:col-span-6 flex items-end mt-lg md:mt-0">
        <h2 className="font-serif text-2xl md:text-3xl leading-heading">
          Honoring where you&apos;ve been{" "}
          <span className="font-script text-accent">&amp;</span> helping shape
          where you&apos;re headed.
        </h2>
      </div>
    </section>
  );
};

export default Honoring;
