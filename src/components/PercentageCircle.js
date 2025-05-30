import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, textSize }) => {
  const [displayValue, setDisplayValue] = useState("");
  const numericPart = parseFloat(value);
  const suffix = value.replace(/[-\d.]/g, "");
  const motionValue = useMotionValue(0);
  const animatedValue = useTransform(motionValue, (latest) =>
    latest.toFixed(String(numericPart).includes(".") ? 1 : 0)
  );

  useEffect(() => {
    const unsubscribe = animatedValue.onChange((latest) =>
      setDisplayValue(latest)
    );
    const controls = animate(motionValue, numericPart, {
      duration: 1.5,
      ease: "easeOut",
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [numericPart]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`inline-block ${textSize} font-bold`}
      >
        {displayValue}
      </motion.span>
      <span className="text-xl font-bold">{suffix}</span>
    </AnimatePresence>
  );
};

export const PercentageCircle = ({
  value,
  color = "text-blue-500",
  size = "w-28 h-28",
  textSize = "text-3xl",
  borderColor = "border-gray-300",
}) => (
  <div className={`relative inline-block ${size} mx-auto`}>
    {/* 装饰性边框 */}
    <div
      className={`absolute inset-0 rounded-full transform scale-110 pointer-events-none`}
    >
      <div
        className={`w-full h-full border-t-4 border-l-4 border-r-4 ${borderColor} rounded-full`}
      ></div>
    </div>
    {/* 圆形内容 */}
    <div
      className={`${size} rounded-full bg-white flex items-center justify-center`}
    >
      <span className={`${color} ${textSize} font-bold`}>
        <AnimatedNumber value={value} textSize={textSize} />
      </span>
    </div>
  </div>
);