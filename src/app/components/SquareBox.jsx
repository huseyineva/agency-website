import clsx from "clsx";

function SquareBox({ title, bgColor, textColor, isLarge, index }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center p-20 lg:p-35 lg:text-[3vw] text-[8vw] font-bold w-full mt-5 lg:mt-0",
        isLarge && "lg:row-span-3",
        index === 3 && "lg:row-span-2 lg:mt-2",
        bgColor,
        textColor
      )}
    >
      {title}
    </div>
  );
}

export default SquareBox;
