import React from "react";

function Line({ sectionName }) {
  return (
    <div className="flex justify-between items-center pt-30 !text-[#666666] py-20">
      <hr className="w-[90%] !text-[#666666]" />
      {sectionName}
    </div>
  );
}

export default Line;
