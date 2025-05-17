import React from "react";
import clsx from "clsx";

function Rectangle({ title, content, bgColor, textColor, index }) {
  return (
    <div
      className={clsx(
        "h-[100vw] p-10 flex flex-col gap-2 mt-3 md:gap-1 md:mt-0 md:h-[25vw] md:p-5 xl:p-10",
        bgColor,
        textColor,
        index % 2 == 0 && "md:mt-10"
      )}
    >
      <div className="font-bold uppercase text-[5vw] md:text-[1.5vw] xl:text-[1.2vw]">
        {title}
      </div>
      <div className="font-light text-[5vw] md:text-[1.3vw] xl:text-[1vw]">
        {content}
      </div>
    </div>
  );
}

export default Rectangle;
