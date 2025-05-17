import BrandValues from "./components/BrandValues";
import Link from "next/link";
import data from "./data.json";
import Line from "./components/Line";
import SquareBox from "./components/SquareBox";
import squareData from "./square.json";
import rectangle from "./rectangle.json";
import Rectangle from "./components/Rectangle";
import Image from "next/image";
import office1 from "./images/1.jpg";
import office2 from "./images/2.jpg";
import office3 from "./images/3.jpg";
import office4 from "./images/4.jpg";
import works from "./works.json";
import Works from "./components/Works";
import logo from "./images/logo.webp";

export default function Home() {
  console.log(data);
  return (
    <div>
      {buildPage()}
      <Line sectionName="Brand Values" />
      <div className="flex justify-between gap-10 flex-col md:flex-row md:gap-0">
        {data.map((e) => {
          return (
            <BrandValues
              key={e.no}
              no={e.no}
              title={e.title}
              content={e.content}
              color={e.color}
            />
          );
        })}
      </div>
      <Line sectionName="Logo Variatons" />
      <div className="gap-2 md:grid md:grid-rows-2 md:grid-flow-col ">
        {squareData.map((e) => (
          <SquareBox
            key={e.no}
            title={e.title}
            bgColor={e.bgColor}
            textColor={e.textColor}
            isLarge={e.isLarge}
            index={e.no}
          />
        ))}
      </div>
      <Line sectionName="Colors" />
      <div className="flex flex-col md:grid md:grid-cols-4 md:gap-6">
        {rectangle.map((e) => (
          <Rectangle
            key={e.no}
            title={e.title}
            content={e.content}
            bgColor={e.bgColor}
            textColor={e.textColor}
            isLarge={e.isLarge}
            index={e.no}
          />
        ))}
      </div>
      <Line sectionName="Photos" />
      <div className="flex flex-col gap-5 relative md:gap-20">
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 w-[40%] h-[40%] z-2 mix-blend-color-burn hidden md:flex"></div>
        <div className="flex flex-col gap-5 justify-between items-end md:flex-row">
          <Image
            src={office1}
            alt=""
            className="object-cover grayscale w-[100%] md:w-[70%]"
          />
          <Image
            src={office2}
            alt=""
            className="object-cover grayscale w-[100%] md:w-[20%] md:h-[30vw]"
          />
        </div>
        <div className="flex flex-col gap-5 justify-between md:flex-row md:gap-5">
          <div className="w-[100%] flex flex-col gap-5 justify-between items-end md:w-[40%] md:gap-10 md:gap-0">
            <Image
              src={office3}
              alt=""
              className="object-cover grayscale max-h-[49vw] md:h-[400px]"
            />
            <span className="text-gray-400 max-w-2xs tracking-wide">
              Using black & white photos and supplementing them with "red
              multiply effect" is one of the key elements in our new brand.
            </span>
          </div>
          <Image
            src={office4}
            alt=""
            className="object-cover grayscale w-[100%] md:w-[50%]"
          />
        </div>
      </div>
      <Line sectionName="Works" />
      <div className="flex gap-10 overflow-x-scroll md:grid md:grid-cols-3 md:overflow-x-visible">
        {works.map((e) => (
          <Works
            key={e.no}
            title={e.title}
            bgColor={e.bgColor}
            image={e.image}
          />
        ))}
      </div>
    </div>
  );
}

const buildPage = () => {
  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-12">
      <div className="col-span-3 flex justify-between items-center md:flex-col md:items-start">
        <Image
          src={logo}
          alt="Cuk Reklam"
          width={100}
          className="w-[60px] lg:w-[80px] xl:w-[100px]"
        />
        <Link
          href="#"
          className="vertical-text uppercase text-[2.2vw] text-white md:max-h-20 md:text-[1.2vw] md:text-[#666666] lg:max-h-30 xl:text-[.75vw]"
        >
          Branding and website
        </Link>
        <Link
          href="#"
          className="vertical-text uppercase text-[2.2vw] text-white md:max-h-20 md:text-[1.2vw] md:text-[#666666] lg:max-h-30 xl:text-[.75vw]"
        >
          designed at strv
        </Link>
      </div>
      <div className="col-span-9 flex flex-col justify-between gap-5 pt-10 md:pl-30 md:gap-10 md:pt-0">
        <span className="text-[12vw] leading-[13vw] font-bold uppercase max-w-4xl md:leading-[6vw] md:text-[5vw]">
          Branding <span className="!text-[#666666] !bg-transparent">and</span>
          website redesing
        </span>
        <hr className="w-[20vw] md:w-[5vw]" />
        <p className="text-[5vw] baskervville text-justify md:max-w-[45vw] md:text-[1.5vw] md:leading-[2.2vw]">
          We are mobile app and web development compant with offices in Los
          Angeles, San Francisco, New York and Prague craeting apps for the top
          US startups and well established brands.
        </p>
      </div>
    </div>
  );
};
