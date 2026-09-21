import Image from "next/image";
import React from "react";

const ImageWithOverlay = ({ src, alt, className = "", ...props }) => {
  return (
    <>
      <Image src={src} alt={alt} className={className} {...props} />
      <div className="image-overlay" aria-hidden="true" />
    </>
  );
};

export default ImageWithOverlay;
