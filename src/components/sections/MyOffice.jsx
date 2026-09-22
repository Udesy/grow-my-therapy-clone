import React from "react";
import { CtaLink, ImageWithOverlay } from "../ui";

const Office = () => {
  return (
    <section className="bg-white bleed-grid relative max-md:px-[6vw] py-2xl">
      <div className="col-span-8 md:col-span-6 grid grid-cols-2 gap-sm order-2 md:order-1">
        <div className="relative col-span-2 md:col-span-2 h-[35vh] md:h-[50vh]">
          <ImageWithOverlay
            src="/images/office/office.jpeg"
            alt="Dr. Maya Reynolds' therapy office in Santa Monica"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative col-span-1 h-[30vh]">
          <ImageWithOverlay
            src="/images/office/office2.png"
            alt="Seating area in the office"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative col-span-1 h-[30vh]">
          <ImageWithOverlay
            src="/images/office/office3.png"
            alt="Detail of the office space"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="h-full col-span-8 md:col-start-8 md:col-end-14 flex flex-col justify-center max-md:gap-2xl px-[--spacing-page-x] order-1 md:order-2 max-md:py-xl">
        <p className="text-sm tracking-widest uppercase text-secondary font-light md:max-w-[50ch]">
          My Office
        </p>
        <div className="flex flex-col md:gap-y-lg mt-lg">
          <h2 className="font-serif text-3xl leading-tight">
            A place to breathe and{" "}
            <span className="font-script text-accent">slow down</span>.
          </h2>
          <p className="mt-lg text-base font-light">
            My office in Santa Monica is a quiet, private space designed to feel
            calm and grounding natural light, comfortable surroundings, and a
            warm, unhurried atmosphere. It’s a place to pause, take a breath,
            and settle in before we begin.
          </p>
          <p className="mt-md text-base font-light">
            I offer in-person sessions here, as well as secure telehealth for
            clients throughout California whichever fits where you are and what
            feels right for you.
          </p>
        </div>
        <CtaLink href="#about" className="mt-lg text-2xs">
          Learn more about me
        </CtaLink>
      </div>
    </section>
  );
};

export default Office;
