import React from "react";
import clsx from "clsx";

function Rectangle({ title, content, bgColor, textColor, index }) {
  return (
    <div
      className={clsx(
        "lg:h-[25vw] p-10 flex flex-col gap-2 mt-3 lg:mt-0",
        bgColor,
        textColor,
        index % 2 == 0 && "lg:mt-10"
      )}
    >
      <div className="font-bold uppercase lg:text-[1.2vw] text-[5vw]">
        {title}
      </div>
      <div className="font-light lg:text-[.8vw] text-[5vw]">{content}</div>
    </div>
  );
}

export default Rectangle;
