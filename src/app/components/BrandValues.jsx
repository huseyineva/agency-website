import React from "react";

function BrandValues({ no, title, content, color }) {
  return (
    <div className="flex flex-col gap-5">
      <span className="baskervville leading-4 text-lg">
        No.
        <br />0{no}
      </span>
      <h1 className="font-bold text-xl uppercase">{title}</h1>
      <p className="max-w-2xs !text-[#666666]">{content}</p>
    </div>
  );
}

export default BrandValues;
