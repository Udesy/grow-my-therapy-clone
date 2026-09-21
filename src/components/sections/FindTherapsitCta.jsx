import React from "react";
import { Button, ImageWithOverlay } from "../ui";

const FindTherapistCta = () => {
  return (
    <section className="bleed-grid relative bg-primary py-2xl">
      {/* Left image — narrow, bleeds to the left edge, hidden on mobile per mock */}
      <div className="hidden md:block relative md:col-start-1 md:col-span-2 h-[40vh] md:h-[60vh] order-1">
        <ImageWithOverlay
          src="/images/Image6.jpg"
          alt="A hand reaching down to collect shells on the sand"
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile-only top image — smaller, inset, not full width */}
      <div className="md:hidden relative col-span-4 h-[25vh] order-1">
        <ImageWithOverlay
          src="/images/Image6.jpg"
          alt="A hand reaching down to collect shells on the sand"
          fill
          className="object-cover"
        />
      </div>

      {/* Center text block */}
      <div className="col-span-8 md:col-start-4 md:col-span-6 flex flex-col justify-between gap-3xl px-[--spacing-page-x] max-md:px-[6vw] mt-lg md:mt-0 order-2">
        <p className="text-sm tracking-widest uppercase text-secondary font-light">
          Schedule an Appointment
        </p>

        <div className="flex flex-col gap-y-md">
          <h2 className="font-serif text-2xl md:text-3xl leading-heading">
            Find a therapist who is the right fit for{" "}
            <span className="font-script text-accent">you</span>.
          </h2>

          <p className="text-base font-light leading-7">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we&apos;re here to support you with
            care and understanding every step of the way. Each member of our
            team brings dedicated expertise and a commitment to support you in
            your struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>

          <p className="text-base font-light leading-7">
            Click the button below to schedule an appointment.
          </p>

          <Button
            href="#"
            className="w-fit mt-sm p-4 text-2xs"
            label={"Book Now"}
          />
        </div>
      </div>

      {/* Right image — bleeds to the right edge on desktop, full-width on mobile */}
      <div className="col-start-2 col-span-7 md:col-start-10 md:col-span-5 relative h-[40vh] md:h-full mt-lg md:mt-0 order-3">
        <ImageWithOverlay
          src="/images/Image7.jpg"
          alt="A mother and child pointing at shells on the beach"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default FindTherapistCta;
