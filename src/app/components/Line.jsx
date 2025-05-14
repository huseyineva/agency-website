import React from "react";

function Line({ sectionName }) {
  return (
    <div className="flex justify-between items-center lg:mt-30 !text-[#666666] py-20">
      <hr className="lg:w-[90%] w-[100%] !text-[#666666]" />
      <span className="lg:text-[.8vw] text-[4vw] text-center pl-10">
        {sectionName}
      </span>
    </div>
  );
}

export default Line;
