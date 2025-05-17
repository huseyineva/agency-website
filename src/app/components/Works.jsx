import React from "react";
import Image from "next/image";
import clsx from "clsx";

function Works({ title, bgColor, image }) {
  return (
    <div
      className={clsx(
        bgColor,
        "relative h-[50vw] p-3 w-full shrink-0 md:p-5 md:h-[30vw] xl:p-10"
      )}
    >
      <Image
        src={image}
        alt=""
        width={300}
        height={300}
        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[300px]"
      />
      <span className="uppercase font-bold text-[4vw] md:text-[1.7vw] xl:text-[1.5vw]">
        {title}
      </span>
    </div>
  );
}

export default Works;
