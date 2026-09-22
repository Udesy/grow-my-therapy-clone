import React from "react";
import { CtaLink, ImageWithOverlay } from "../ui";

const HowWeWork = () => {
  return (
    <section className="section-grid relative py-2xl max-md:px-[6vw] min-h-screen bg-surface">
      {/* Eyebrow */}
      <p className="col-span-8 md:col-start-2 md:col-span-7 md:row-start-1 text-sm text-md tracking-widest uppercase text-secondary font-light order-1">
        How my Approach works
      </p>

      {/* Heading */}
      <h2 className="col-span-8 md:col-start-2 md:col-span-7 md:row-start-2 font-serif text-xl lg:text-3xl md:leading-10 lg:leading-14 mt-lg md:mt-2xl order-2">
        A grounded approach to therapy, built around you.
      </h2>

      {/* Image — bleeds right, spans the full height of all four text rows on desktop */}
      <div className="col-span-8 md:col-start-11 md:col-span-4 md:row-start-1 md:row-span-4 max-md:mt-6 relative h-[40vh] md:h-auto md:self-stretch order-3">
        <ImageWithOverlay
          src="/images/Image4.png"
          alt="A mother and daughter dancing together on the beach"
          fill
          className="object-cover"
        />
      </div>

      {/* Paragraphs — stacked on mobile, side-by-side on desktop */}
      <div className="col-span-8 md:col-start-2 md:col-span-8 md:row-start-3 grid grid-cols-1 md:grid-cols-2 gap-lg mt-lg md:mt-0 order-4">
        <div>
          <p className="text-sm tracking-widest leading-6 uppercase text-secondary">
            The people I work with are thoughtful and high-achieving, but
            underneath, they&apos;re often exhausted from years of pushing
            through.
          </p>
          <p className="mt-md text-base font-light leading-7">
            My approach is warm, collaborative, and grounded. I want you to feel
            supported while also having space to understand what you&apos;re
            experiencing. I use CBT, EMDR, mindfulness-based practices, and
            body-oriented techniques to bring both practical tools and deeper
            reflection into our work.
          </p>
        </div>

        <p className="text-base font-light leading-7">
          Some sessions may focus on practical tools that help you feel more
          grounded, while others may give you space to slow down and understand
          the patterns beneath what you’re experiencing. When we work through
          difficult or long-standing experiences, we move carefully and at a
          pace that feels safe and supportive. I offer in-person therapy from my
          office in Santa Monica, as well as secure telehealth for clients
          throughout California. Over time, the goal is to build greater
          insight, resilience, and a stronger relationship with yourself.
        </p>
      </div>

      {/* CTA */}
      <div className="col-span-8 md:col-start-2 md:col-span-7 md:row-start-4 mt-lg order-5">
        <CtaLink href="#" className="text-xs">
          Learn more about me
        </CtaLink>
      </div>
    </section>
  );
};

export default HowWeWork;
