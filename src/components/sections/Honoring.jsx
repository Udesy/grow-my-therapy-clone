// components/sections/Honoring.jsx
import React from "react";
import { ImageWithOverlay } from "../ui";

const Honoring = () => {
  return (
    <section className="section-grid py-3xl bg-white">
      <div className="max-md:ml-[6vh] col-span-full md:col-span-8 relative h-[40vh] md:h-[65vh]">
        <ImageWithOverlay
          src="/images/Image5.png"
          alt="A man standing in the forest and sun light falling on his face."
          fill
          className="object-cover"
        />
      </div>

      <div className="col-span-8 md:col-start-9 max-md:px-[6vw] md:col-span-6 flex items-end mt-lg md:mt-0">
        <h2 className="font-serif text-2xl md:text-3xl leading-heading">
          Making sense of where you&apos;ve been
          <span className="font-script text-accent">&amp;</span> finding your
          way forward.
        </h2>
      </div>
    </section>
  );
};

export default Honoring;
