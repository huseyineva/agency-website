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

export default function Home() {
  console.log(data);
  return (
    <div>
      {buildPage()}
      <Line sectionName="Brand Values" />
      <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-0">
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
      <div className="lg:grid lg:grid-flow-col lg:grid-rows-2 gap-2">
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
      <div className="lg:grid lg:grid-cols-4 lg:gap-6 flex flex-col">
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
      <div className="flex flex-col lg:gap-20 gap-5 relative">
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 w-[40%] h-[40%] z-2 mix-blend-color-burn hidden lg:flex"></div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-end">
          <Image
            src={office1}
            alt=""
            className="object-cover grayscale lg:w-[70%] w-[100%]"
          />
          <Image
            src={office2}
            alt=""
            className="object-cover grayscale lg:w-[20%] w-[100%] lg:h-[500px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-5 gap-5 justify-between">
          <div className="w-[100%] lg:w-[40%] flex flex-col lg:gap-0 gap-5 justify-between items-end">
            <Image
              src={office3}
              alt=""
              className="object-cover grayscale lg:h-[400px] max-h-[49vw]"
            />
            <span className="text-gray-400 max-w-2xs tracking-wide">
              Using black & white photos and supplementing them with "red
              multiply effect" is one of the key elements in our new brand.
            </span>
          </div>
          <Image
            src={office4}
            alt=""
            className="object-cover grayscale lg:w-[50%] w-[100%]"
          />
        </div>
      </div>
      <Line sectionName="Works" />
      <div className="lg:grid lg:grid-cols-3 flex gap-10 overflow-x-scroll lg:overflow-x-visible">
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
    <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5">
      <div className="col-span-3 flex lg:flex-col justify-between items-center">
        <div>LOGO</div>
        <Link
          href="#"
          className="vertical-text max-h-28 uppercase text-[2vw] lg:text-[.75vw] !text-[#666666]"
        >
          Branding and website
        </Link>
        <Link
          href="#"
          className="vertical-text max-h-28 uppercase text-[2vw] lg:text-[.75vw] !text-[#666666]"
        >
          designed at strv
        </Link>
      </div>
      <div className="col-span-9 flex flex-col justify-between lg:pl-30 lg:gap-10 gap-5">
        <span className="lg:text-[5vw] text-[12vw] leading-[13vw] lg:leading-[6vw] font-bold uppercase max-w-4xl">
          Branding <span className="!text-[#666666] !bg-transparent">and</span>
          website redesing
        </span>
        <hr className="lg:w-[5vw] w-[20vw]" />
        <p className="lg:max-w-3xl lg:text-[1.5vw] lg:leading-[2.2vw] text-[5vw] baskervville text-justify">
          We are mobile app and web development compant with offices in Los
          Angeles, San Francisco, New York and Prague craeting apps for the top
          US startups and well established brands.
        </p>
      </div>
    </div>
  );
};
