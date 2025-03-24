"use client";

import { useState, useContext } from "react";
import { LangContext } from "@/app/layout";

const processParts = [
  {
    id: 1,
    title_en: "Part 01 Enrollment",
    title_zh: "Part 01 报名注册",
    description_en: "Complete enrollment forms and submit initial assessments.",
    description_zh: "完成报名表并提交初始评估。",
  },
  {
    id: 2,
    title_en: "Part 02 Pre-Course Preparation",
    title_zh: "Part 02 课程准备",
    description_en: "Tailored academic plan and pre-course guidance.",
    description_zh: "制定个性化学习计划，并提供课程前指导。",
  },
  {
    id: 3,
    title_en: "Part 03 Course Services",
    title_zh: "Part 03 课程服务",
    description_en: "Regular tutoring sessions, progress monitoring, and feedback.",
    description_zh: "定期辅导课程，监控学习进度并反馈。",
  },
];

export default function AdmissionProcess() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const [activePart, setActivePart] = useState(1);

  const currentPart = processParts.find((p) => p.id === activePart);

  return (
    <div className="flex flex-col md:flex-row">
      {/* 左侧描述内容 */}
      <div className="md:w-2/3 md:pr-6 mb-6 md:mb-0">
        {currentPart && (
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {lang === "zh" ? currentPart.title_zh : currentPart.title_en}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "zh"
                ? currentPart.description_zh
                : currentPart.description_en}
            </p>
          </div>
        )}
      </div>
      {/* 右侧阶段列表按钮 */}
      <div className="md:w-1/3 flex flex-col space-y-4">
        {processParts.map((part) => {
          const isActive = part.id === activePart;
          return (
            <button
              key={part.id}
              onClick={() => setActivePart(part.id)}
              className={`text-left px-4 py-3 rounded-lg font-medium transition-colors
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {lang === "zh" ? part.title_zh : part.title_en}
            </button>
          );
        })}
      </div>
    </div>
  );
}