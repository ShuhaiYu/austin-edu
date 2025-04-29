"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }) => {
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
        className="text-4xl font-bold"
      >
        {displayValue}
      </motion.span>
      <span className="text-xl font-bold">{suffix}</span>
    </AnimatePresence>
  );
};

const PercentageCircle = ({
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
        <AnimatedNumber value={value} />
      </span>
    </div>
  </div>
);

const Achievements = () => (
  <div className="min-h-screen p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
      {/* VCE Card */}
      <div className="bg-gradient-to-br from-[#2798a9] to-primary rounded-2xl p-8 md:p-16 text-white shadow-xl text-center">
        <h2 className="text-4xl font-bold mb-6">VCE总成绩</h2>
        <p className="mb-4">At Austin, our achievements include:</p>
        <h3 className="text-lg font-bold mb-6">From 2017 to 2024</h3>
        <p className="text-sm mb-4">
          <span className="font-bold">16</span> students scored a top ATAR of{" "}
          <span className="font-bold">99.95</span>
          <br />
          <span className="font-bold">254</span> students achieved an
          outstanding ATAR of <span className="font-bold">99+</span>
          <br />
          <span className="font-bold">608</span> students earned an impressive
          ATAR of <span className="font-bold">97+</span>
          <br />
          <span className="font-bold">Over 100</span> students attained a
          perfect <span className="font-bold">Row 50</span> in at least one VCE
          subject
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { value: "18%", label: "ATAR of 99+" },
            { value: "36%", label: "ATAR of 97+" },
            { value: "85%", label: "ATAR of 90+" },
          ].map(({ value, label }) => (
            <div key={value} className="flex flex-col items-center">
              <PercentageCircle
                value={value}
                color="text-primary"
                borderColor="border-[#4bafe3]"
              />
              <p className="text-sm mt-2">{value} of students</p>
              <h2 className="text-3xl font-bold mt-1">{label}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* 初中 Card */}
      <div className="bg-gradient-to-br from-[#d2337e] to-[#c12731] rounded-2xl p-8 md:p-16 text-white shadow-xl text-center">

        <h2 className="text-4xl font-bold mb-6">初中总成绩</h2>
        <p className="text-sm mb-4 whitespace-pre-line">
          Austin Education Selective Program achieved <br /> 
          an average annual admission rate of:
        </p>
        <div className="flex flex-col items-center my-8">
          <PercentageCircle
            value="83.7%"
            color="text-[#c62b49]"
            borderColor="border-[#f59cb5]"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-left">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Scholarship Program</h3>
            <p>
            Receiving offers from nearly 40 private schools each year, with an average admission rate of 51% 
            </p>
            <p className="italic text-xs">
            *Scholarship results include scores from the 3-of-5, 5-of-7, and 7-of-9 assessments
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">AMC Math Competition Program</h3>
            <p>4 students achieved High Distinction</p>
            <p>11 students achieved Distinction</p>
            <h3 className="text-xl font-bold mt-4">
              Year 7-9 Advanced Program
            </h3>
            <p>
              On average, each year, 70% of students achieve top scores in
              NAPLAN exams
            </p>
          </div>
        </div>
      </div>

      {/* 小学 Card */}
      <div className="bg-gradient-to-br from-[#e0a178] to-[#e0b678] rounded-2xl p-8 md:p-16 text-white shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-center">小学总成绩</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧文字 */}
          <div className="lg:w-3/5 space-y-4 text-sm">
            <h3 className="text-xl font-bold">Scholarship Program</h3>
            <p>
              Receiving offers from nearly 40 private schools each year, with an
              average admission rate of <strong>51%</strong>
            </p>
            <p className="italic text-xs">
              *Scholarship results include scores from the 3-of-5, 5-of-7, and
              7-of-9 assessments
            </p>
            <h3 className="text-xl font-bold">Y3-5 Advanced Program</h3>
            <p>
              On average, each year, <strong>84.7%</strong> of students achieve
              top scores in NAPLAN exams.
            </p>
            <h3 className="text-xl font-bold">
              Feedback from parents and students after joining Austin Education:
            </h3>
          </div>
          {/* 右侧指标 */}
          <div className="lg:w-2/5 space-y-8">
            {[
              {
                value: "100%",
                label:
                  "of children believe that the teachers are approachable and enjoy class time.",
              },
              {
                value: "98%",
                label:
                  "of children have developed and maintained excellent study habits.",
              },
              {
                value: "98%",
                label:
                  "of children have gained increased confidence in their learning at school.",
              },
              {
                value: "95%",
                label:
                  "Over 95% of children have demonstrated significant improvement in their academic performance.",
              },
            ].map(({ value, label }, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-8"
              >
                <div>
                  {" "}
                  <PercentageCircle
                    value={value}
                    color="text-[#e0b078]"
                    borderColor="border-[#feddab]"
                  />
                </div>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center my-16 space-y-4">
        <p className="text-5xl font-light text-muted-foreground whitespace-pre-line">
          Every Student{" "}
          <span className="text-primary uppercase font-bold">
            MATTERS
          </span>
        </p>
        <p className="text-5xl font-light text-muted-foreground whitespace-pre-line">
          Every Success{" "}
          <span className="text-primary uppercase font-bold">
            COUNTS
          </span>
        </p>
      </div>
  </div>
);

export default Achievements;
