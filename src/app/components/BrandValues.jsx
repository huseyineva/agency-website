import React from "react";

function BrandValues({ no, title, content }) {
  return (
    <div className="flex flex-col gap-5">
      <span className="baskervville text-[5vw] leading-[5vw] md:leading-[1.7vw] md:text-[1.7vw] xl:text-[1.2vw] xl:leading-[1.2vw]">
        No.
        <br />0{no}
      </span>
      <h1 className="font-bold text-[5vw] uppercase md:text-[1.7vw] xl:text-[1.2vw]">
        {title}
      </h1>
      <p className="max-w-2xs text-[4.5vw] !text-[#666666] md:text-[1.5vw] md:max-w-50 lg:text-[1.2vw] xl:text-[1vw] xl:max-w-80">
        {content}
      </p>
    </div>
  );
}

export default BrandValues;
