import React from "react";
import { CtaLink, ImageWithOverlay } from "../ui";

const HowWeWork = () => {
  return (
    <section className="section-grid relative py-2xl max-md:px-[6vw] min-h-screen bg-surface">
      {/* Eyebrow */}
      <p className="col-span-8 md:col-start-2 md:col-span-7 md:row-start-1 text-sm max-md:text-md tracking-widest uppercase text-secondary font-light order-1">
        How We Work
      </p>

      {/* Heading */}
      <h2 className="col-span-8 md:col-start-2 md:col-span-7 md:row-start-2 font-serif text-xl lg:text-3xl md:leading-10 lg:leading-14 mt-lg md:mt-2xl order-2">
        We&apos;re here to make a difference.
      </h2>

      {/* Image — bleeds right, spans the full height of all four text rows on desktop */}
      <div className="col-span-8 md:col-start-11 md:col-span-4 md:row-start-1 md:row-span-4 max-md:mt-6 relative h-[40vh] md:h-auto md:self-stretch order-3">
        <ImageWithOverlay
          src="/images/Image4.jpg"
          alt="A mother and daughter dancing together on the beach"
          fill
          className="object-cover"
        />
      </div>

      {/* Paragraphs — stacked on mobile, side-by-side on desktop */}
      <div className="col-span-8 md:col-start-2 md:col-span-8 md:row-start-3 grid grid-cols-1 md:grid-cols-2 gap-lg mt-lg md:mt-0 order-4">
        <div>
          <p className="text-sm tracking-widest leading-6 uppercase text-secondary">
            The clients we work with are balancing so many things at once,
            it&apos;s often hard for them to put themselves first.
          </p>
          <p className="mt-md text-base font-light leading-7">
            Here, your needs are always top priority. Our team takes the time to
            deeply listen to our clients in order to truly understand their
            story and their struggles. We recognize that no two people are the
            same and that personalized therapy means an intentional, tailored
            approach. (You won&apos;t find anything
            &quot;one-size-fits-all&quot; here.) If you&apos;re ready to do the
            work, we&apos;re ready to help.
          </p>
        </div>

        <p className="text-base font-light leading-7">
          Sometimes we may gently challenge you to look at things differently
          and other times we may explore your emotions, all while encouraging
          you to practice what you&apos;ve learned in your daily life. We take
          what we do seriously because we know how important it is for you to
          heal from what&apos;s hurting you, discover a fulfilling life, and
          build meaningful relationships. Our goal is to walk alongside you in
          this journey, offering support and guidance as you uncover your
          strengths and embrace what the future can hold for you.
        </p>
      </div>

      {/* CTA */}
      <div className="col-span-8 md:col-start-2 md:col-span-7 md:row-start-4 mt-lg order-5">
        <CtaLink href="#" className="text-xs">
          Learn more about us
        </CtaLink>
      </div>
    </section>
  );
};

export default HowWeWork;
