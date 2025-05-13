import React from "react";
import Image from "next/image";
import clsx from "clsx";

function Works({ title, bgColor, image }) {
  return (
    <div className={clsx(bgColor, "relative h-[500px] p-10")}>
      <Image
        src={image}
        alt=""
        width={300}
        height={300}
        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <span className="uppercase font-bold text-3xl">{title}</span>
    </div>
  );
}

export default Works;
