import React from "react";
import Image from "next/image";
import logo from "../images/logo.webp";

function Footer() {
  return (
    <div className="mt-30 flex flex-col items-center justify-between gap-5 md:gap-0 md:flex-row">
      <Image
        src={logo}
        alt="Cuk Reklam"
        width={100}
        className="md:w-[75px] xl:w-[100px]"
      />
      <span className="text-[3.5vw] text-center md:text-[1.5vw] lg:text-[1.2vw] xl:text-[.8vw] xl:leading-[.8vw]">
        © 2025 Cuk Reklam, bütün hakları saklıdır.
      </span>
    </div>
  );
}

export default Footer;
