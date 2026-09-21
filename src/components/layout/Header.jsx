// "use client";

// import { navigation } from "@/lib/constant";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import Button from "../ui/Button";
// import { HamburgerMenu, MenuOverlay } from "../ui";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const header = headerRef.current;
//     if (!header) return;

//     const setHeaderHeightVar = () => {
//       document.documentElement.style.setProperty(
//         "--header-height",
//         `${header.getBoundingClientRect().height}px`,
//       );
//     };

//     setHeaderHeightVar();

//     const images = header.getElementsByTagName("img");
//     Array.from(images).forEach((img) => {
//       if (!img.complete) img.addEventListener("load", setHeaderHeightVar);
//     });

//     window.addEventListener("resize", setHeaderHeightVar);
//     return () => window.removeEventListener("resize", setHeaderHeightVar);
//   }, []);

//   return (
//     <>
//       <div
//         ref={headerRef}
//         className="w-full h-fit relative header-padding flex flex-row justify-between z-50"
//       >
//         <div className="relative w-fit h-fit">
//           <Image
//             src="/images/logo.png"
//             alt="Conejo Valley Family Counselling Logo"
//             width={1500}
//             height={438}
//             loading="eager"
//             className="block w-60 md:w-65 h-auto"
//           />
//         </div>
//         <div className="flex-row items-center gap-x-lg hidden lg:flex">
//           <div className="flex flex-row gap-x-lg">
//             {navigation.map(({ id, label, href }) => (
//               <Link
//                 key={id}
//                 href={href}
//                 className="uppercase tracking-widest leading-[1.8em] text-2xs"
//               >
//                 <span>{label}</span>
//               </Link>
//             ))}
//           </div>
//           <Button
//             label={"Contact"}
//             className={"py-[0.9rem] px-[1.3rem] text-2xs"}
//           />
//         </div>
//         <div className="flex justify-center items-center lg:hidden">
//           <HamburgerMenu
//             open={open}
//             onToggle={() => setOpen(!open)}
//             className="lg:hidden"
//           />
//         </div>
//       </div>

//       <MenuOverlay open={open} onClose={() => setOpen(false)} />
//     </>
//   );
// };

// export default Header;

"use client";

import { navigation } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import { HamburgerMenu, MenuOverlay } from "../ui";

const NavItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="uppercase tracking-widest leading-[1.8em] text-xs"
      >
        <span>{item.label}</span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-x-2xs uppercase tracking-widest leading-[1.8em] text-2xs"
      >
        <span>{item.label}</span>
        {item.arrow && (
          <svg
            width="8"
            height="8"
            viewBox="0 0 10 6"
            fill="none"
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>

      <div
        className={`absolute right-0 top-[calc(100%+1.25rem)] min-w-45 bg-primary transition-all duration-200 px-xs origin-top-right ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-y-xs">
          {item.dropdown.map((entry) => (
            <li key={entry.id}>
              <Link
                href="#"
                className="block whitespace-nowrap text-sm pb-1 text-right font-light border-secondary/0 border-b hover:border-secondary transition-colors"
              >
                {entry.name
                  ? `${entry.name}${entry.credential ? `, ${entry.credential}` : ""}`
                  : entry.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const setHeaderHeightVar = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    setHeaderHeightVar();

    const images = header.getElementsByTagName("img");
    Array.from(images).forEach((img) => {
      if (!img.complete) img.addEventListener("load", setHeaderHeightVar);
    });

    window.addEventListener("resize", setHeaderHeightVar);
    return () => window.removeEventListener("resize", setHeaderHeightVar);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="w-full h-fit relative header-padding flex flex-row justify-between z-50"
      >
        <div className="relative w-fit h-fit">
          <Image
            src="/images/logo.png"
            alt="Conejo Valley Family Counselling Logo"
            width={1500}
            height={438}
            loading="eager"
            className="block w-60 md:w-65 h-auto"
          />
        </div>

        <div className="flex-row items-center gap-x-lg hidden lg:flex">
          <div className="flex flex-row gap-x-lg">
            {navigation.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>
          <Button
            label={"Contact"}
            className={"py-[0.9rem] px-[1.3rem] text-2xs"}
          />
        </div>

        <div className="flex justify-center items-center lg:hidden">
          <HamburgerMenu
            open={open}
            onToggle={() => setOpen(!open)}
            className="lg:hidden"
          />
        </div>
      </div>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
