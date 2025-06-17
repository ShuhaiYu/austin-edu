// app/resource-hub/components/FAQTab.js
"use client";
import { useContext } from "react";
import { LangContext } from "@/app/layout";
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
  },
  zh: {
    title: "常见问题解答",
    description:
      "在这里找到关于我们的服务、课程和申请流程的常见问题答案。如果找不到您需要的信息，可以直接使用联系表单向我们提问。",
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
    </div>
  );
};
