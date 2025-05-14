import React from "react";

function BrandValues({ no, title, content, color }) {
  return (
    <div className="flex flex-col gap-5">
      <span className="baskervville lg:leading-[1vw] lg:text-[1vw] text-[5vw]">
        No.
        <br />0{no}
      </span>
      <h1 className="font-bold lg:text-[1vw] text-[5vw] uppercase">{title}</h1>
      <p className="max-w-2xs lg:text-[.8vw] text-[4.5vw] !text-[#666666]">
        {content}
      </p>
    </div>
  );
}

export default BrandValues;
