import clsx from "clsx";

function SquareBox({ title, bgColor, textColor, isLarge, index }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center p-20 text-[8vw] font-bold w-full mt-5 md:mt-0 md:p-35 md:text-[3vw]",
        isLarge && "md:row-span-3",
        index === 3 && "md:row-span-2 md:mt-2",
        bgColor,
        textColor
      )}
    >
      {title}
    </div>
  );
}

export default SquareBox;
