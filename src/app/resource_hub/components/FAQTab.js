// app/resource-hub/components/FAQTab.js
"use client";
import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import {
  homeFAQContent,
  courseFaqItems,
  achievementFaqItems,
  joinUsFaqItems,
  contactUsFaqItems,
  homeworkSystemFaqItems,
} from "@/data/faq_content";

const content = {
  en: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our services, courses, and admission process. Can't find what you're looking for? Ask us directly using the contact form.",
    contactText: "If your question wasn't answered above, please don't hesitate to contact our team for further assistance.",
    contactButton: "Contact Us"
  },
  zh: {
    title: "常见问题解答",
    description:
      "在这里找到关于我们的服务、课程和申请流程的常见问题答案。如果找不到您需要的信息，可以直接使用联系表单向我们提问。",
    contactText: "没有找到你想要的答案？欢迎随时联系我们，我们乐意为你解答任何疑问，协助你获得所需的信息。",
    contactButton: "联系我们"
  },
};

// 合并所有FAQ内容
const getAllFAQItems = () => {
  return {
    en: [
      // 基本信息FAQ
      ...homeFAQContent.en,
      // 课程相关FAQ
      ...courseFaqItems.en,
      // 成绩相关FAQ
      ...achievementFaqItems.en,
      // 招聘相关FAQ
      ...joinUsFaqItems.en,
      // 联系我们FAQ
      ...contactUsFaqItems.en,
      // 作业系统FAQ
      ...homeworkSystemFaqItems.en,
    ],
    zh: [
      // 基本信息FAQ
      ...homeFAQContent.zh,
      // 课程相关FAQ
      ...courseFaqItems.zh,
      // 成绩相关FAQ
      ...achievementFaqItems.zh,
      // 招聘相关FAQ
      ...joinUsFaqItems.zh,
      // 联系我们FAQ
      ...contactUsFaqItems.zh,
      // 作业系统FAQ
      ...homeworkSystemFaqItems.zh,
    ],
  };
};

export const FAQTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const allFAQItems = getAllFAQItems();

  return (
    <div className="bg-white rounded-b-xl shadow-lg">
      <FAQ
        customFaqItems={allFAQItems}
        customTitle={t.title}
        customDescription={t.description}
        showContactForm={false}
      />
      
      {/* Contact Section - 响应式调整 */}
      <div className="p-4 sm:p-6 lg:p-8 border-t border-gray-200 bg-gray-50/50 rounded-b-xl">
        <div className="text-center space-y-4 lg:space-y-6">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t.contactText}
          </p>
          
          <Link href="/contact_us">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg leading-6 transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              <span className="mr-2">{t.contactButton}</span>
              <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};