import React from "react";

const Button = ({ label, className }) => {
  return (
    // <button
    //   className={`w-fit h-fit border border-secondary transition-colors duration-75 ease-in-out hover:text-white hover:bg-secondary ${className}`}
    // >
    //   <span className="uppercase leading-[1.2em] tracking-[.12em]">
    //     {label}
    //   </span>
    // </button>
    <button
      className={`w-fit h-fit transition-colors duration-75 ease-in-out bg-accent hover:bg-accent/70 text-white ${className}`}
    >
      <span className="uppercase leading-[1.2em] tracking-[.12em]">
        {label}
      </span>
    </button>
  );
};

export default Button;
