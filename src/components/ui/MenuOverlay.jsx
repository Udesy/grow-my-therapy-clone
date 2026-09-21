// "use client";
// import { navigation } from "@/lib/constant";
// import Link from "next/link";
// import { RightArrow } from "./icons";
// import { Button } from ".";

// export default function MenuOverlay({ open, onClose }) {
//   const buttonDelay = navigation.length * 80;

//   return (
//     <div
//       className={`relative top-0 w-full lg:hidden z-40 px-[8vw] bg-primary flex flex-col justify-end gap-y-28 mb-14
//         transition-all duration-500 ease-in-out border border-red-500
//         ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//     >
//       <div className="w-full h-fit flex flex-col gap-y-lg">
//         {navigation.map(({ id, label, href, arrow }, index) => (
//           <div key={id} className="overflow-hidden">
//             <Link
//               href={href}
//               onClick={onClose}
//               style={{
//                 transitionDelay: open ? `${index * 80}ms` : "0ms",
//               }}
//               className={`flex flex-row items-center gap-xs font-sans font-normal text-2xl leading-2xl uppercase tracking-wider
//                 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//                 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
//             >
//               {label}
//               <span>{arrow && <RightArrow />}</span>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="w-fit h-fit overflow-hidden">
//         <div
//           style={{
//             transitionDelay: open ? `${buttonDelay}ms` : "0ms",
//           }}
//           className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//             ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
//         >
//           <Button
//             label={"contact"}
//             className={"px-18 py-[1rem] text-sm"}
//             onClick={onClose}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { navigation } from "@/lib/constant";
import Link from "next/link";
import { RightArrow } from "./icons";
import { Button } from ".";

export default function MenuOverlay({ open, onClose }) {
  const buttonDelay = navigation.length * 80;

  return (
    <div
      style={{
        top: "var(--header-height, 0px)",
        visibility: open ? "visible" : "hidden",
        transition: `opacity 500ms ease-in-out, visibility 0ms linear ${open ? "0ms" : "500ms"}`,
      }}
      className={`fixed inset-x-0 bottom-0 lg:hidden z-40 bg-primary overflow-y-auto
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="min-h-full px-[8vw] flex flex-col justify-end gap-y-28 py-14">
        <div className="w-full h-fit flex flex-col gap-y-lg">
          {navigation.map(({ id, label, href, arrow }, index) => (
            <div key={id} className="overflow-hidden">
              <Link
                href={href}
                onClick={onClose}
                style={{ transitionDelay: open ? `${index * 80}ms` : "0ms" }}
                className={`flex flex-row items-center gap-xs font-sans font-normal text-2xl leading-2xl uppercase tracking-wider
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                {label}
                <span>{arrow && <RightArrow />}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-fit h-fit overflow-hidden">
          <div
            style={{ transitionDelay: open ? `${buttonDelay}ms` : "0ms" }}
            className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <Button
              label={"contact"}
              className={"px-18 py-[1rem] text-sm"}
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
