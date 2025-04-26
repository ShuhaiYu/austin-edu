"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import FindCourse from "@/components/FindCourse";
import AdmissionProcess from "@/components/AdmissionProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Image from "next/image";

export default function HomePage() {
  const langContext = useContext(LangContext);
  const lang = langContext?.lang || "en";

  const textContent = {
    en: {
      heroTitle: "Melbourne Leading All-in-One Tutorial Service",
      heroSubtitle:
        "Austin Education provides comprehensive tutoring services across all subjects and grades, empowering students to achieve their best.",
      heroButton: "Get Started",
      whyTitle: "Why Choose Austin",
      admissionTitle: "Admission Service Process",
      testimonialTitle: "What Our Students Have to Say",
      faqTitle: "Frequently Asked Questions",
    },
    zh: {
      heroTitle: "墨尔本领先的一站式辅导服务",
      heroSubtitle:
        "Austin Education 提供全面的全科目全年级辅导，帮助学生充分发挥潜能。",
      heroButton: "了解更多",
      whyTitle: "为什么选择 Austin",
      admissionTitle: "入学服务流程",
      testimonialTitle: "学生反馈",
      faqTitle: "常见问题",
    },
  };

  const t = lang === "zh" ? textContent.zh : textContent.en;

  return (
    <div className="flex flex-col items-center">
      {/* Hero 区域 */}
      <section className="w-full py-12 px-[clamp(1rem,3vw,3rem)]">
        <div className="w-full mx-auto">
          <Hero />
        </div>
      </section>

      {/* Find a Course */}
      <section className=" bg-primary text-white py-6 rounded-4xl w-full px-[clamp(1rem,3vw,3rem)]">
        <div className="w-full px-4 mx-auto">
          <FindCourse />
        </div>
      </section>

      {/* Why Choose Austin: 简化示例 */}
      <section className="w-full py-12 px-[clamp(1rem,3vw,3rem)]">
        <div className="w-full mx-auto">
          <Features />
        </div>
      </section>

      {/* Admission Service Process */}
      <section className="w-full py-12 px-[clamp(1rem,3vw,3rem)]">
        <div className="w-full mx-auto">
          <AdmissionProcess />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative w-full py-12 px-6 ">
        {/* 左上角装饰 */}
        <div
          className="
          absolute -top-0 left-0 z-0 pointer-events-none
          md:w-32 md:h-32   /* ≥768px：8rem */
          lg:w-48 lg:h-48   /* ≥1024px：12rem */

        "
        >
          <Image
            src="/decoration/4.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          {t.testimonialTitle}
        </h2>
        <div className="w-full px-4">
          <Testimonials />
        </div>
      </section>

      {/* FAQ: 如果需要放置，可以在此添加相应内容 */}
      <section className="w-full py-12 px-[clamp(1rem,3vw,3rem)]">
        <div className="w-full mx-auto">
          <FAQ />
        </div>
      </section>
    </div>
  );
}
