import React from "react";
import { Button, ImageWithOverlay } from "../ui";

const FindTherapistCta = () => {
  return (
    <section className="section-grid relative bg-primary py-3xl min-h-screen items-end">
      {/* Left image — narrow, bleeds to the left edge, hidden on mobile per mock */}
      <div className="hidden md:block relative md:col-start-1 md:col-span-2 h-[40vh] md:h-[55vh] order-1">
        <ImageWithOverlay
          src="/images/Image6.png"
          alt="A hand reaching down to collect shells on the sand"
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile-only top image — smaller, inset, not full width */}
      <div className="md:hidden relative col-span-4 h-[25vh] order-1">
        <ImageWithOverlay
          src="/images/Image7.png"
          alt="A hand reaching down to collect shells on the sand"
          fill
          className="object-cover"
        />
      </div>

      {/* Center text block */}
      <div className="h-full col-span-8 md:col-start-4 md:col-span-5 flex flex-col justify-between gap-y-3xl max-md:px-[6vw] mt-lg md:mt-0 order-2">
        <p className="text-sm tracking-widest uppercase text-secondary font-light">
          Schedule an Appointment
        </p>

        <div className="flex flex-col gap-y-xl lg:gap-y-3xl">
          <div className="flex flex-col gap-y-md">
            <h2 className="font-serif text-2xl md:text-3xl mb-md leading-heading">
              You don&apos;t have to figure it all out on your{" "}
              <span className="font-script text-accent">own</span>.
            </h2>

            <p className="text-base font-light leading-7">
              Reaching out for therapy can feel like a big step, especially when
              you’ve been used to handling things on your own. If you’re looking
              for support with anxiety, trauma, burnout, or the pressure of
              constantly pushing through, I’m here to help you explore what
              you’re experiencing and decide what feels right for you.
            </p>

            <p className="text-base font-light leading-7">
              I offer in-person therapy from my office in Santa Monica, as well
              as secure telehealth for clients throughout California.
            </p>
          </div>

          <Button
            href="#"
            className="w-fit mt-sm p-4 text-2xs"
            label={"Start a Conversation"}
          />
        </div>
      </div>

      {/* Right image — bleeds to the right edge on desktop, full-width on mobile */}
      <div className="col-start-2 col-span-7 md:col-start-10 md:col-span-5 relative h-[40vh] md:h-full mt-lg md:mt-0 order-3">
        <ImageWithOverlay
          src="/images/Image6.png"
          alt="A mother and child pointing at shells on the beach"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default FindTherapistCta;
