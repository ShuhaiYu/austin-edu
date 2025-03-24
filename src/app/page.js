"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import FindCourse from "@/components/FindCourse";
import AdmissionProcess from "@/components/AdmissionProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

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
      heroSubtitle: "Austin Education 提供全面的全科目全年级辅导，帮助学生充分发挥潜能。",
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
      <section className="w-full bg-gray-50 py-12 px-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">{t.heroSubtitle}</p>
        <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90">
          {t.heroButton}
        </button>
      </section>

      {/* Find a Course */}
      <section className="w-full bg-primary text-white py-6 px-4">
        <div className="container mx-auto">
          <FindCourse />
        </div>
      </section>

      {/* Why Choose Austin: 简化示例 */}
      <section className="w-full py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">{t.whyTitle}</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {lang === "zh" ? "顶尖师资团队" : "Top-tier Tutoring Team"}
            </h3>
            <p className="text-sm text-gray-600">
              {lang === "zh"
                ? "我们拥有严格筛选的优秀导师，确保教学质量。"
                : "Our tutors are carefully selected to ensure top teaching quality."}
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {lang === "zh" ? "全面而灵活的课程" : "Comprehensive Courses"}
            </h3>
            <p className="text-sm text-gray-600">
              {lang === "zh"
                ? "课程涵盖各年级各科目，可根据学生需求定制。"
                : "Courses cover all grades and subjects, customizable to student needs."}
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {lang === "zh" ? "良好的口碑与认可" : "Well-Recognized"}
            </h3>
            <p className="text-sm text-gray-600">
              {lang === "zh"
                ? "我们在社区中享有良好声誉，获得超过10000名学生的信赖。"
                : "Trusted by over 10,000 students, with an excellent reputation."}
            </p>
          </div>
        </div>
      </section>

      {/* Admission Service Process */}
      <section className="w-full py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{t.admissionTitle}</h2>
        <div className="max-w-5xl mx-auto">
          <AdmissionProcess />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{t.testimonialTitle}</h2>
        <div className="max-w-4xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* FAQ: 如果需要放置，可以在此添加相应内容 */}
      <section className="w-full py-12 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <FAQ />
        </div>
      </section>
    </div>
  );
}