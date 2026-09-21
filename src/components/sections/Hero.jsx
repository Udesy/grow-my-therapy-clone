import React from "react";
import { CtaLink, ImageWithOverlay } from "../ui";

const Hero = () => {
  return (
    <section className="bleed-grid relative py-lg">
      <div className="col-span-6 md:col-span-5 relative h-[clamp(45vh,38.514vh+2.027vw,75vh)] md:h-[75vh] order-2 md:order-1">
        <ImageWithOverlay
          src={"/images/Image1.jpg"}
          alt={"Family walking on the beach"}
          fill
          className="object-cover"
        />
      </div>
      <div className="h-full max-md:px-[6vw] col-span-8 md:col-start-7 md:col-end-14 flex flex-col justify-between max-md:gap-2xl px-[--spacing-page-x] order-1 md:order-2 max-md:py-xl">
        <p className="text-sm tracking-widest uppercase text-secondary font-light md:max-w-[50ch]">
          Online & In-Person Counseling in Newbury Park & Across CA
        </p>
        <div className="flex flex-col md:gap-y-2xl">
          <div className="flex flex-col">
            <h1 className="font-serif text-display leading-display">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-script text-accent">thrive</span>.
            </h1>
            <p className="mt-lg text-base font-light">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>
          </div>
          <CtaLink href="#" className="mt-lg text-2xs">
            Book an Appointment
          </CtaLink>
        </div>
      </div>
      <div className="relative h-[clamp(25vh,19.595vh+1.689vw,50vh)] md:h-[50vh] col-start-7 col-span-2 md:col-start-14 md:col-span-2 order-3">
        <ImageWithOverlay
          src="/images/Image2.jpg"
          alt="Ocean waves and mother and son walking on the beach"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
