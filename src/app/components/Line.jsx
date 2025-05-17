import React from "react";

function Line({ sectionName }) {
  return (
    <div className="flex justify-between items-center !text-[#666666] py-20 md:mt-10">
      <hr className="w-[50%] !text-[#666666] md:w-[80%] lg:w-[75%] xl:w-[85%]" />
      <span className="text-[3.5vw] text-center pl-10 md:text-[1.5vw] xl:text-[1vw]">
        {sectionName}
      </span>
    </div>
  );
}

export default Line;
