"use client";

import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
// 假设你已添加了 carousel 组件, 或自己写个简单轮播
// 这里以最简单的方式用 index 做手动切换

const testimonialsData = [
  {
    name: "Alice",
    role: "Student",
    rating: 5,
    feedback_en: "Great tutoring service! I improved my scores a lot.",
    feedback_zh: "很棒的辅导服务！我的成绩提升显著。",
  },
  {
    name: "Bob",
    role: "Parent",
    rating: 4,
    feedback_en: "The tutors are very patient.",
    feedback_zh: "导师非常有耐心。",
  },
  {
    name: "Gloria",
    role: "Student",
    rating: 5,
    feedback_en: "Flexible schedule and personalized approach.",
    feedback_zh: "时间灵活，辅导方案也很个性化。",
  },
  // 可再添加更多...
];

export default function Testimonials() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentItem = testimonialsData[index];

  return (
    <div className="relative w-full max-w-md mx-auto text-center">
      <div className="bg-gray-100 p-6 rounded shadow">
        <p className="italic text-gray-700 mb-4">
       {lang === "zh" ? currentItem.feedback_zh : currentItem.feedback_en}
        </p>
        <div className="font-semibold text-gray-900">
          - {currentItem.name} (
          {lang === "zh"
            ? currentItem.role === "Student"
              ? "学生"
              : "家长"
            : currentItem.role}
          )
        </div>
        <div className="text-yellow-500">
          {"★".repeat(currentItem.rating)}
          {"☆".repeat(5 - currentItem.rating)}
        </div>
      </div>

      {/* 手动切换按钮 */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-2 py-1 rounded"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-2 py-1 rounded"
      >
        →
      </button>
    </div>
  );
}