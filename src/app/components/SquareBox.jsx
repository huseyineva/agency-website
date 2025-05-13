import clsx from "clsx";

function SquareBox({ title, bgColor, textColor, isLarge, index }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-sm h-[385px] text-7xl font-bold",
        isLarge && "h-full row-span-3 !w-6xl",
        index === 3 && "row-span-2 mt-2",
        bgColor,
        textColor
      )}
    >
      {title}
    </div>
  );
}

export default SquareBox;
