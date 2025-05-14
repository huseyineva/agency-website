import React from "react";
import Image from "next/image";
import clsx from "clsx";

function Works({ title, bgColor, image }) {
  return (
    <div
      className={clsx(
        bgColor,
        "relative lg:h-[30vw] h-[50vw] w-full shrink-0 lg:p-10 p-3"
      )}
    >
      <Image
        src={image}
        alt=""
        width={300}
        height={300}
        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] lg:w-[300px]"
      />
      <span className="uppercase font-bold lg:text-[1.5vw]">{title}</span>
    </div>
  );
}

export default Works;
