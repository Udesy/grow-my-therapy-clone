import React from "react";
import { ImageWithOverlay } from "../ui";

const About = () => {
  return (
    <section className="section-grid relative py-2xl min-h-screen max-md:px-[6vw]">
      {/* Heading + first paragraph block */}
      <div className="col-span-8 md:col-start-2 md:col-span-7 flex flex-col justify-center gap-y-2xl py-lg order-1">
        <h1 className="font-serif text-xl lg:text-3xl md:leading-10 lg:leading-14">
          I&apos;m Dr. Maya Reynolds, PsyD, and I specialize in helping adults
          with anxiety, trauma, and burnout.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <p className="text-sm tracking-widest leading-6 uppercase text-secondary font-light">
              A space to slow down and reconnect.
            </p>
            <p className="mt-md text-base font-light leading-7">
              Based in Santa Monica, California, I work with adults who feel
              overwhelmed by anxiety, emotionally on edge, or exhausted from
              years of pushing through. Many of my clients are thoughtful,
              high-achieving people who may look fine on the outside while
              feeling stuck, disconnected, or tired of holding everything
              together.
            </p>
          </div>

          {/* Second paragraph — desktop position, hidden on mobile */}
          <p className="hidden md:block text-base font-light leading-7">
            My approach is warm, collaborative, and grounded. I combine
            evidence-based methods such as CBT, EMDR, mindfulness-based
            practices, and body-oriented techniques with thoughtful reflection
            and deeper therapeutic work. My sessions are structured enough to
            feel supportive while leaving room to explore what you’re
            experiencing at a pace that feels comfortable.
          </p>
        </div>
      </div>

      {/* Image — bleeds to the right edge on desktop, full-height across both text rows */}
      <div className="col-span-8 md:col-span-5 md:col-start-10 relative aspect-3/4 md:h-full lg:h-[80vh] order-2">
        <ImageWithOverlay
          src="/images/maya_profile.png"
          alt="Dr. Maya Reynolds smiling in a softly lit, neutral-toned office portrait."
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Second paragraph — mobile position, hidden on desktop */}
      <p className="col-span-8 md:hidden px-[--spacing-page-x] mt-lg text-base font-light order-3">
        Her approach is warm, collaborative, and grounded. She combines
        evidence-based methods such as CBT, EMDR, mindfulness-based practices,
        and body-oriented techniques with thoughtful reflection and deeper
        therapeutic work. Sessions are structured enough to feel supportive
        while leaving room to explore what you&apos;re experiencing at a pace
        that feels comfortable.
      </p>
    </section>
  );
};

export default About;
