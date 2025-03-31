"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Link from "next/link";
// 假设你已经有 shadcn 的组件封装，这里引入 Accordion、Button、Input、Label 组件
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const content = {
  en: {
    title: "Join Us",
    section1: {
      heading: "Education with Heart, Results with Impact.",
      desc: "This is a paragraph",
      button1: "Join Us",
      button2: "Contact",
    },
    section2: {
      heading: "Why Work With Us",
      desc: "This is a paragraph",
    },
    positions: {
      title: "Open Positions",
      list: [
        {
          title: "Year 1-9 English Teacher (First Language/EAL)",
          responsibilities: ["Teach English...", "Design lesson plans..."],
          requirements: ["Bachelor’s degree...", "Native English speaker..."],
        },
        // 其他职位可以用类似格式添加
      ],
    },
    form: {
      personalInfo: "Personal Information",
      fullName: "Full Name",
      phone: "Phone Number",
      submit: "Submit Application",
    },
  },
  zh: {
    title: "加入我们",
    section1: {
      heading: "用心教育，成就卓越",
      desc: "这是一个文字段落",
      button1: "加入我们",
      button2: "联系我们",
    },
    section2: {
      heading: "为什么选择我们",
      desc: "这是一个文字段落",
    },
    positions: {
      title: "开放职位",
      list: [
        {
          title: "1-9年级英语教师（母语/EAL）",
          responsibilities: ["教授英语课程...", "设计教案..."],
          requirements: ["拥有学士学位...", "英语母语者..."],
        },
      ],
    },
    form: {
      personalInfo: "个人信息",
      fullName: "全名",
      phone: "联系电话",
      submit: "提交申请",
    },
  },
};

export default function JoinUsPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* 页面标题 */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      </div>

      {/* 1. 左右布局：左边图片，右边文字 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* 左侧图片 */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder Image"
            className="w-full h-auto"
          />
        </div>
        {/* 右侧文字 */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">{t.section1.heading}</h2>
          <p className="text-base mb-6">{t.section1.desc}</p>
          <div className="flex space-x-4">
            <Button>{t.section1.button1}</Button>
            <Button variant="outline">{t.section1.button2}</Button>
          </div>
        </div>
      </section>

      {/* 2. 左右布局：左边文字，右边图片 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* 左侧文字 */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{t.section2.heading}</h2>
          <p className="text-base mb-6">{t.section2.desc}</p>
        </div>
        {/* 右侧图片 */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder Image"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* 3. 左右布局：职位列表 + 申请表 */}
      <section className="flex flex-col md:flex-row items-start md:space-x-8">
        {/* 左侧：职位列表（Accordion 格式） */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">{t.positions.title}</h2>
          <Accordion type="single" collapsible>
            {t.positions.list.map((position, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{position.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">
                        {lang === "en" ? "Responsibilities" : "工作职责"}
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {position.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        {lang === "en" ? "Requirements" : "任职要求"}
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* 右侧：在线申请表（使用 shadcn 组件构建） */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "en" ? "Online Job Application Form" : "在线申请表"}
          </h2>
          <form className="space-y-6 bg-primary p-8 rounded-lg text-primary-foreground">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{t.form.personalInfo}</h3>
              <div className="space-y-4">
                <div>
                  <Label className="block mb-1">{t.form.fullName} *</Label>
                  <Input type="text" required className="w-full" />
                </div>
                <div>
                  <Label className="block mb-1">{t.form.phone} *</Label>
                  <Input type="tel" required className="w-full" />
                </div>
                {/* 可根据需要增加其他表单字段 */}
              </div>
            </div>
            <div className="text-center">
              <Button type="submit">{t.form.submit}</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
