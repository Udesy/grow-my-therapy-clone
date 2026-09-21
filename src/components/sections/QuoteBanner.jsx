// import Image from "next/image";
// import React from "react";

// const QuoteBanner = () => {
//   return (
//     <section className="bleed-grid relative">
//       <div className="col-span-8 md:col-span-14 relative h-[65vh]">
//         <Image
//           src="/images/quote-banner.png"
//           alt="A Brother and Sister running along side of the beach"
//           fill
//           className="object-cover"
//           priority={false}
//         />

//         {/* Dark overlay for text contrast */}
//         <div className="absolute inset-0 bg-secondary/50" />

//         <p className="absolute bottom-0 left-0 max-w-[40ch] pl-3xl top-1/2 md:pb-2xl font-serif text-xl md:text-2xl lg:text-3xl leading-heading text-primary">
//           You deserve a place where your story is heard, valued, and understood.{" "}
//           <span className="italic">
//             Nothing will be too heavy for us to carry together.
//           </span>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default QuoteBanner;

import React from "react";
import { ImageWithOverlay } from "../ui";

const QuoteBanner = () => {
  return (
    <section className="bleed-grid relative">
      <div className="col-span-8 md:col-span-14 relative h-[65vh]">
        <ImageWithOverlay
          src="/images/quote-banner.png"
          alt="A Brother and Sister running along side of the beach"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-secondary/50" />

        <p className="absolute left-0 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 max-w-[40ch] pl-[6vw] md:pl-3xl md:pb-2xl font-serif text-xl md:text-2xl lg:text-3xl leading-heading text-primary">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic">
            Nothing will be too heavy for us to carry together.
          </span>
        </p>
      </div>
    </section>
  );
};

export default QuoteBanner;
