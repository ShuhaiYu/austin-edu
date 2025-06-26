// src/components/AdmissionProcess.js
"use client";

import { useState, useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { homeContent } from "@/data/home_content";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function AdmissionProcess() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const { title, parts } = homeContent[lang].admissionProcess;

  // 初始状态设为0表示默认选择第一个步骤
  const [activeSteps, setActiveSteps] = useState(() => parts.map(() => 0));

  // 处理点击/hover事件
  const handleStepSelect = (partIndex, stepIndex) => {
    setActiveSteps((prev) => {
      const newActiveSteps = [...prev];
      newActiveSteps[partIndex] = stepIndex;
      return newActiveSteps;
    });
  };

  // 根据 partIndex 获取颜色配置
  const getColorConfig = (partIndex) => {
    const colors = [
      { dot: "bg-[#4664aa]", border: "border-[#4664aa]", button: "hover:text-[#4664aa] hover:bg-primary/30" }, // blue
      { dot: "bg-[#c12731]", border: "border-[#c12731]", button: "hover:text-[#c12731] hover:bg-austin-red/30" }, // red
      { dot: "bg-[#dfb67e]", border: "border-[#dfb67e]", button: "hover:text-[#dfb67e] hover:bg-austin-yellow/30" } // yellow
    ];
    return colors[partIndex % 3];
  };

  return (
    <section className="py-4 sm:py-6 md:py-8 xl:py-8 px-4 sm:px-6 md:px-8 xl:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 uppercase">
        {title}
      </h2>

      {parts.map((part, i) => {
        const currentStepIndex = activeSteps[i];
        const currentStep = part.steps[currentStepIndex];
        const { dot: dotColor, border: borderColor, button } = getColorConfig(i);

        return (
          <div key={i} className="mb-12 sm:mb-14 md:mb-16">
            {/* Part 标题 */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] xl:w-[180px] xl:h-[180px] mb-6 sm:mb-8 justify-center mx-auto"
            >
              <Image
                src={`/home/title-bg${part.part}.png`}
                alt="Part background"
                width={240}
                height={240}
                className="object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="font-bebas mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl uppercase">
                  Part {part.part}
                </h1>
                <span className="text-[10px] sm:text-[11px] md:text-sm xl:text-base whitespace-pre-line text-gray-700 font-semibold px-2">
                  {part.title}
                </span>
              </div>
            </motion.div>

            {/* 移动端和桌面端不同布局 */}
            <div className="lg:hidden">
              {/* 移动端：垂直布局 */}
              <div className="space-y-6">
                {/* 步骤选择器 */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {part.steps.map((stepData, j) => {
                    const isActive = currentStepIndex === j;
                    return (
                      <button
                        key={j}
                        onClick={() => handleStepSelect(i, j)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? `${dotColor} text-white`
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {stepData.step.toString().padStart(2, "0")}
                      </button>
                    );
                  })}
                </div>

                {/* 当前步骤内容 */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6"
                  >
                    <h3 className="text-gray-700 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                      {currentStep.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base mb-6 leading-relaxed">
                      {currentStep.desc}
                    </p>
                    {currentStep.buttonText && currentStep.buttonLink && (
                      <div className="flex justify-center sm:justify-end">
                        <Link href={currentStep.buttonLink} passHref>
                          <Button
                            className={`${dotColor} ${button} inline-flex items-center gap-2 px-4 py-2 text-sm text-white font-medium rounded-lg transition-colors duration-200`}
                          >
                            {currentStep.buttonText}
                            <SquareArrowOutUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 桌面端：原有的左右分栏布局 */}
            <div className="hidden lg:flex w-full relative">
              {/* 左侧 - 描述 */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="w-1/2 sticky top-1/4 self-start"
                >
                  <div className="bg-white shadow-2xl mr-8 p-2 sm:p-4 md:p-8">
                    <h3 className="text-gray-700 font-semibold text-sm md:text-lg mb-4">
                      {currentStep.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line text-[12px] sm:text-sm md:text-base mb-8">
                      {currentStep.desc}
                    </p>
                    {currentStep.buttonText && currentStep.buttonLink && (
                      <div className="flex items-center justify-end">
                        <Link href={currentStep.buttonLink} passHref>
                          <Button
                            className={`${dotColor} ${button} inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                          >
                            {currentStep.buttonText}
                            <SquareArrowOutUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 右侧 - 步骤列表 */}
              <div className="pl-8 relative w-1/2">
                <div className="absolute left-0 top-0 h-full w-px bg-gray-300">
                  <div className="absolute inset-0 border-l-2 border-dotted border-gray-300" />
                </div>

                <div className="space-y-4 relative">
                  {part.steps.map((stepData, j) => {
                    const isActive = currentStepIndex === j;
                    return (
                      <div key={j} className="relative group">
                        <div
                          className={`absolute left-[-24px] top-1/2 w-6 h-[1px] ${dotColor}`}
                          style={{ transform: "translateY(-50%)" }}
                        />
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
                          onMouseEnter={() => handleStepSelect(i, j)}
                          onClick={() => handleStepSelect(i, j)}
                          className={`block w-full text-left p-4 my-16 rounded-r-lg transition-all 
                            ${
                              isActive
                                ? `${borderColor} border-l-4 bg-gradient-to-r from-white via-${borderColor}/10 to-white`
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                          <div className="flex items-center justify-start">
                            <span className="font-bebas font-bold text-3xl md:text-4xl xl:text-5xl mr-4 text-gray-500">
                              {stepData.step.toString().padStart(2, "0")}
                            </span>
                            <span className="font-semibold text-sm md:text-lg text-gray-700">
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