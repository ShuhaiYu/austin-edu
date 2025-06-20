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
import { homeFAQContent } from "@/data/faq_content";

export default function HomePage() {
  const langContext = useContext(LangContext);
  const lang = langContext?.lang || "en";

  return (
    <div className="flex flex-col items-center">
      {/* Hero 区域 */}
      <section className="w-full py-12">
        <Hero />
      </section>

      {/* Find a Course */}
      <section className="bg-primary text-white py-6 rounded-4xl w-full">
        <FindCourse />
      </section>

      {/* Why Choose Austin */}
      <section className="w-full py-12">
        <Features />
      </section>

      {/* Admission Service Process */}
      <section className="w-full py-12">
        <AdmissionProcess />
      </section>

      {/* Testimonials */}
      <section className="relative w-full py-12">
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
          {lang === "zh" ? "学生反馈" : "What Our Students Have to Say"}
        </h2>
        <Testimonials />
      </section>

      {/* FAQ - 使用自定义内容 */}
      <section className="w-full py-12">
        <FAQ customFaqItems={homeFAQContent} />
      </section>
    </div>
  );
}
