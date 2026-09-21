import React from "react";
import { ImageWithOverlay } from "../ui";

const HopeSection = () => {
  return (
    <section className="section-grid relative py-2xl min-h-screen max-md:px-[6vw]">
      {/* Heading + first paragraph block */}
      <div className="col-span-8 md:col-start-2 md:col-span-7 flex flex-col justify-center gap-y-2xl py-lg order-1">
        <h2 className="font-serif text-xl lg:text-3xl md:leading-10 lg:leading-14">
          You’re holding onto hope that life can be better than it is right now.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <p className="text-sm tracking-widest leading-6 uppercase text-secondary font-light">
              At Conejo Valley Family Counseling we want to make that hope a
              reality.
            </p>
            <p className="mt-md text-base font-light leading-7">
              Whether you&apos;re an adult seeking personal growth, looking to
              work through your trauma, a couple working on your relationship,
              or a parent looking for support for your child, we provide a
              compassionate and safe space to help you navigate all of
              life&apos;s ups and downs.
            </p>
          </div>

          {/* Second paragraph — desktop position, hidden on mobile */}
          <p className="hidden md:block text-base font-light leading-7">
            First and foremost, we believe what you&apos;re going through is
            real, valid, and worthy of support. Our team offers clients in the
            Newbury Park area and across CA an environment to discover a new
            life and a deeper sense of self in the midst of their struggles. As
            we tap into the power of connection and understanding, you can find
            your footing again and take a transformative path forward.
          </p>
        </div>
      </div>

      {/* Image — bleeds to the right edge on desktop, full-height across both text rows */}
      <div className="col-span-8 md:col-span-5 md:col-start-10 relative h-[35vh] md:h-full lg:h-[80vh] order-2">
        <ImageWithOverlay
          src="/images/Image3.jpg"
          alt="Ocean waves on the shore"
          fill
          className="object-cover"
        />
      </div>

      {/* Second paragraph — mobile position, hidden on desktop */}
      <p className="col-span-8 md:hidden px-[--spacing-page-x] mt-lg text-base font-light order-3">
        First and foremost, we believe what you&apos;re going through is real,
        valid, and worthy of support. Our team offers clients in the Newbury
        Park area and across CA an environment to discover a new life and a
        deeper sense of self in the midst of their struggles. As we tap into the
        power of connection and understanding, you can find your footing again
        and take a transformative path forward.
      </p>
    </section>
  );
};

export default HopeSection;
