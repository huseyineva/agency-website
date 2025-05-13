import React from "react";
import clsx from "clsx";

function Rectangle({ title, content, bgColor, textColor, index }) {
  return (
    <div
      className={clsx(
        "h-[420px] p-10 flex flex-col gap-2",
        bgColor,
        textColor,
        index % 2 == 0 && "mt-10"
      )}
    >
      <div className="font-bold uppercase text-xl">{title}</div>
      <div className="font-light">{content}</div>
    </div>
  );
}

export default Rectangle;
