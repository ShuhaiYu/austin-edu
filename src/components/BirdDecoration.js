import Image from "next/image";

// 装饰鸟类组件
const BirdDecoration = ({ bird, position, className = "" }) => {
  return (
    <div
      className={`
        absolute pointer-events-none z-0
        w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
        ${position}
        ${className}
      `}
    >
      <Image
        src={`/decoration/${bird}.svg`}
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
};

export default BirdDecoration;
