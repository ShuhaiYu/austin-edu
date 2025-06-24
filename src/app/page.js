"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import FindCourse from "@/components/FindCourse";
import AdmissionProcess from "@/components/AdmissionProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BirdDecoration from "@/components/BirdDecoration";
import { homeFAQContent } from "@/data/faq_content";

export default function HomePage() {
  const langContext = useContext(LangContext);
  const lang = langContext?.lang || "en";

  return (
    <div className="flex flex-col items-center">
      {/* Hero 区域 */}
      <section className="w-full py-6 sm:py-8 md:py-12">
        <Hero />
      </section>

      {/* Find a Course */}
      <section className="bg-primary text-white py-4 sm:py-6 rounded-2xl sm:rounded-3xl md:rounded-4xl w-full mx-2 sm:mx-4 md:mx-0">
        <div className="px-2 sm:px-4 md:px-0">
          <FindCourse />
        </div>
      </section>

      {/* Why Choose Austin */}
      <section className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-0">
        <Features />
      </section>

      {/* Admission Service Process */}
      <section className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-0">
        <AdmissionProcess />
      </section>

      {/* Testimonials */}
      <section className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-0 overflow-hidden">
        {/* 使用BirdDecoration组件替换装饰 */}
        <BirdDecoration 
          bird="4" 
          position="top-0 left-0 md:top-4 md:left-4"
        />
        
        {/* 标题 - 优化移动端字体大小 */}
        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 px-4">
          {lang === "zh" ? "学生反馈" : "What Our Students Have to Say"}
        </h2>
        
        <div className="relative z-10">
          <Testimonials />
        </div>
      </section>

      {/* FAQ - 使用自定义内容 */}
      <section className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-0">
        <FAQ customFaqItems={homeFAQContent} />
      </section>
    </div>
  );
}