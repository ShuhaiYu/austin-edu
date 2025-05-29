// src/components/AdmissionProcess.js
"use client";

import { useState, useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { homeContent } from "@/app/content";

export default function AdmissionProcess() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const { title, parts } = homeContent[lang].admissionProcess;

  // 初始状态设为-1表示所有步骤默认关闭
  const [activeSteps, setActiveSteps] = useState(() => parts.map(() => 0));

  // 处理hover事件
  const handleStepHover = (partIndex, stepIndex) => {
    setActiveSteps((prev) => {
      const newActiveSteps = [...prev];
      newActiveSteps[partIndex] = stepIndex;
      return newActiveSteps;
    });
  };

  // 根据 partIndex 获取颜色配置
  const getColorConfig = (partIndex) => {
    const colors = [
      { dot: "bg-[#4664aa]", border: "border-[#4664aa]" },
      { dot: "bg-[#c12731]", border: "border-[#c12731]" }, // red
      { dot: "bg-[#dfb67e]", border: "border-[#dfb67e]" },
    ];
    return colors[partIndex % 3];
  };

  return (
    <section className="py-4 xl:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 uppercase">
        {title}
      </h2>

      {parts.map((part, i) => {
        const currentStepIndex = activeSteps[i];
        const currentStep =
          currentStepIndex !== -1 ? part.steps[currentStepIndex] : null;
        const { dot: dotColor, border: borderColor } = getColorConfig(i);

        return (
          <div key={i} className="mb-16">
            {/* Part 标题 */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] xl:w-[180px] xl:h-[180px] mb-8 justify-center mx-auto"
            >
              <Image
                src={`/home/title-bg${part.part}.png`}
                alt="Part background"
                width={240}
                height={240}
                className="object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-center">
                <h1 className="font-bebas mt-4 md:mt-6 text-3xl md:text-4xl uppercase">
                  Part {part.part}
                </h1>
                <span className="text-[11px] md:text-sm xl:text-base whitespace-pre-line text-gray-700 font-semibold">
                  {part.title}
                </span>
              </div>
            </motion.div>

            {/* 分割布局 */}
            <div className="flex w-full relative">
              {/* 左侧 - 描述（只在有选择时显示） */}
              <AnimatePresence mode="wait">
                {currentStep ? (
                  <motion.div
                    key={currentStep.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="w-1/2 sticky top-1/4 self-start"
                  >
                    <div className="bg-white shadow-2xl mr-8 p-2 sm:p-4 md:p-8 ">
                      <p className="text-gray-600 whitespace-pre-line text-[12px] sm:text-sm md:text-base">
                        {currentStep.desc}
                      </p>
                      <div className="flex items-center justify-end mt-8">
                        <span className="text-gray-500 text-xs sm:text-sm md:text-base">
                          {currentStep.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-1/2"></div>
                )}
              </AnimatePresence>

              {/* 右侧 - 步骤列表 */}
              <div className={`pl-8 relative w-1/2`}>
                <div className="absolute left-0 top-0 h-full w-px bg-gray-300">
                  {/* 虚线分界线 */}
                  <div className="absolute inset-0 border-l-2 border-dotted border-gray-300" />
                </div>

                <div className="space-y-4 relative">
                  {part.steps.map((stepData, j) => {
                    const isActive = currentStepIndex === j;
                    return (
                      <div key={j} className="relative group">
                        {/* 连接线 */}
                        <div
                          className={`absolute left-[-24px] top-1/2 w-6 h-[1px] ${dotColor}`}
                          style={{ transform: "translateY(-50%)" }}
                        />

                        {/* 圆形指示点 */}
                        <div
                          className={`absolute left-[-39px] top-1/2 w-4 h-4 rounded-full border-2 ${dotColor} 
                            ${
                              isActive
                                ? "border-white scale-125"
                                : "border-gray-300"
                            }`}
                          style={{
                            transform: "translateY(-50%)",
                            transition: "all 0.2s ease",
                          }}
                        />

                        <button
                          onMouseEnter={() => handleStepHover(i, j)}
                          className={`block w-full text-left p-4 my-16 rounded-r-lg transition-all 
                            ${
                              isActive
                                ? `${borderColor} border-l-4 bg-gradient-to-r from-white via-${borderColor}/10 to-white`
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                          <div className="flex items-center justify-start">
                            <span
                              className={`font-bebas font-bold text-3xl md:text-4xl xl:text-5xl mr-4 text-gray-500`}
                            >
                              {stepData.step.toString().padStart(2, "0")}
                            </span>
                            <span
                              className={`font-semibold text-sm md:text-lg text-gray-700`}
                            >
                              {stepData.title}
                            </span>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
