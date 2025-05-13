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
      <div className="flex justify-between">
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
      <div className="grid grid-flow-col grid-rows-2 justify-between">
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
      <div className="grid grid-cols-4 gap-30">
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
      <div className="flex flex-col gap-20 relative">
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 w-[40%] h-[40%] z-2 mix-blend-color-burn"></div>
        <div className="flex gap-5 justify-between items-end">
          <Image
            src={office1}
            alt=""
            className="object-cover grayscale w-[70%]"
          />
          <Image
            src={office2}
            alt=""
            className="object-cover grayscale w-[20%] h-[500px]"
          />
        </div>
        <div className="flex gap-5 justify-between">
          <div className="w-[40%] flex flex-col justify-between items-end">
            <Image
              src={office3}
              alt=""
              className="object-cover grayscale h-[400px]"
            />
            <span className="text-gray-400 max-w-2xs tracking-wide">
              Using black & white photos and supplementing them with "red
              multiply effect" is one of the key elements in our new brand.
            </span>
          </div>
          <Image
            src={office4}
            alt=""
            className="object-cover grayscale w-[50%]"
          />
        </div>
      </div>
      <Line sectionName="Works" />
      <div className="grid grid-cols-3 gap-10">
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
    <div className="grid grid-cols-12 gap-5 h-[85vh]">
      <div className="col-span-3 flex flex-col justify-between">
        <div>LOGO</div>
        <Link
          href="#"
          className="vertical-text max-h-28 uppercase text-sm !text-[#666666]"
        >
          Branding and website
        </Link>
        <Link
          href="#"
          className="vertical-text max-h-28 uppercase text-sm !text-[#666666]"
        >
          designed at strv
        </Link>
      </div>
      <div className="col-span-9 flex flex-col justify-between pl-30">
        <span className="text-9xl font-bold uppercase max-w-4xl">
          Branding <span className="!text-[#666666] !bg-transparent">and</span>{" "}
          website redesing
        </span>
        <hr className="w-[80px]" />
        <p className="max-w-3xl text-3xl leading-11 baskervville">
          We are mobile app and web development compant with offices in Los
          Angeles, San Francisco, New York and Prague craeting apps for the top
          US startups and well established brands.
        </p>
      </div>
    </div>
  );
};
