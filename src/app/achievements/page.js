"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("");
  const [numericValue, suffix] = value.split(/(?=\D)/);
  const num = parseFloat(numericValue);
  const motionValue = useMotionValue(0);
  const animatedValue = useTransform(motionValue, (latest) =>
    latest.toFixed(numericValue.includes(".") ? 1 : 0)
  );

  useEffect(() => {
    const unsubscribe = animatedValue.onChange((latest) => {
      setDisplayValue(latest);
    });

    const controls = animate(motionValue, num, {
      duration: 1.5,
      ease: "easeOut"
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [num]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {displayValue}
        {suffix}
      </motion.span>
    </AnimatePresence>
  );
};

const PercentageCircle = ({ value, color = "text-blue-500" }) => (
  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto">
    <span className={`${color} text-2xl font-bold`}>
      <AnimatedNumber value={value} />
    </span>
  </div>
);

const PercentageItem = ({ value, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
      <span className="text-yellow-600 text-xl font-bold">
        <AnimatedNumber value={value} />
      </span>
    </div>
    <p className="flex-1">{text}</p>
  </div>
);

const Achievements = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        {/* VCE Card */}
        <div className="bg-primary rounded-2xl p-8 text-white shadow-xl text-center min-h-1/2">
          <h2 className="text-3xl font-bold mb-6">VCE总成绩</h2>
          <p className="mb-4">At Austin, our achievements include:</p>
          <h3 className="text-lg font-bold mb-6">From 2017 to 2024</h3>
          <p className="text-sm mb-4">
            16 students scored a top ATAR of 99.95 <br />
            254 students achieved an outstanding ATAR of 99+
            <br />
            608 students earned an impressive ATAR of 97+
            <br />
            Over 100 students attained a perfect Raw 50 in at
            <br />
            least one VCE subject
          </p>

          <div className="space-y-6">
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">2024</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <PercentageCircle value="18%" />
                  <p className="text-sm">18% of students achieved an</p>
                  <h2 className="text-2xl font-bold">ATAR of 99+</h2>
                </div>
                <div>
                  <PercentageCircle value="36%" />
                  <p className="text-sm">36% of students scored an</p>
                  <h2 className="text-2xl font-bold">ATAR of 97+</h2>
                </div>
                <div>
                  <PercentageCircle value="85%" />
                  <p className="text-sm">85% of students obtained ar</p>
                  <h2 className="text-2xl font-bold">ATAR of 90+</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 初中 Card */}
        <div className="bg-[#c62b49] rounded-2xl p-8 text-white shadow-xl text-center min-h-1/2">
          <h2 className="text-3xl font-bold mb-6">初中总成绩</h2>
          <div className="space-y-6">
            <div className="p-4 rounded-xl">
              <p className="text-xl font-semibold">
                Austin Education Selective Program Achieved an average annual
                admission rate of
              </p>
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto my-4">
                <span className="text-red-500 text-2xl font-bold">
                  <AnimatedNumber value="63.7%" />
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Scholarship Program</h3>
              <p>Receiving offers from nearly 40 private schools...</p>
            </div>
          </div>
        </div>

        {/* 小学 Card */}
        <div className="bg-[#e0b078] rounded-2xl p-8 text-white shadow-xl min-h-1/2">
          <h2 className="text-3xl font-bold mb-6 text-center">小学总成绩</h2>
          <div className="flex space-y-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">Scholarship Program</h3>
            </div>
            <div className="flex-1 space-y-6">
              <PercentageItem
                value="93%"
                text="developed excellent study habits"
              />
              <PercentageItem value="98%" text="gained increased confidence" />
              <PercentageItem
                value="95%"
                text="improved academic performance"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
