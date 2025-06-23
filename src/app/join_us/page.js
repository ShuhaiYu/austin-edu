"use client";

import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import FAQ from "@/components/FAQ";
import { joinUsContent } from "./join_us_content.js"; // 引入多语言内容
import { joinUsFaqItems } from "@/data/faq_content.js";
import BirdDecoration from "@/components/BirdDecoration";

export default function JoinUsPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = joinUsContent[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = {};

      // 收集所有表单数据
      for (let [key, value] of formData.entries()) {
        if (data[key]) {
          // 处理多选值
          if (Array.isArray(data[key])) {
            data[key].push(value);
          } else {
            data[key] = [data[key], value];
          }
        } else {
          data[key] = value;
        }
      }

      // 添加时间戳
      data.timestamp = new Date().toISOString();

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "job-application",
          data: data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      toast.success(
        lang === "en"
          ? "Application submitted successfully! We'll contact you soon."
          : "申请提交成功！我们会尽快与您联系。"
      );

      // 重置表单
      e.target.reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(
        lang === "en"
          ? "Failed to submit application. Please try again."
          : "申请提交失败，请重试。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 根据字段类型渲染不同的表单控件
   * - 给表单控件添加 className，确保背景、文字、placeholder 等符合需求
   */
  function renderField(field) {
    const commonClassNames =
      "bg-primary-foreground text-gray-800 placeholder:text-gray-400 placeholder:text-sm text-sm md:text-base";
    // 生成带星号的placeholder
    const placeholderText = field.required ? `${field.label} *` : field.label;

    switch (field.type) {
      case "select": {
        return (
          <Select name={field.name} required={field.required}>
            <SelectTrigger className={`w-full ${commonClassNames}`}>
              <SelectValue placeholder={placeholderText} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      case "text": {
        return (
          <Textarea
            name={field.name}
            required={field.required}
            placeholder={field.placeholder || placeholderText}
            className={`min-h-[100px] ${commonClassNames}`}
          />
        );
      }

      default: {
        return (
          <Input
            type={field.type === "input" ? "text" : field.type}
            name={field.name}
            required={field.required}
            placeholder={placeholderText}
            className={commonClassNames}
          />
        );
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      {/* 页面标题：相对定位 + 装饰 */}
      <div className="text-center relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
        <BirdDecoration
          bird="1"
          position="top-8 right-8 md:top-16 md:right-16"
        />
      </div>
      {/* 1. 左右布局：左边图片，右边文字 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* 左侧图片 */}
        <div className="w-full md:w-1/2">
          <Image
            src="/join_us/1.png"
            alt="Placeholder Image"
            width={600}
            height={400}
          />
        </div>
        {/* 右侧文字 */}
        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0 relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            {t.section1.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-line text-gray-600 mb-12">
            {t.section1.desc}
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <Button asChild className="text-sm md:text-base">
              <a href="mailto:hr@austinedu.com.au">{t.section1.button1}</a>
            </Button>
            <Button variant="outline" className="text-sm md:text-base" asChild>
              <Link href="/about_us">{t.section1.button2}</Link>
            </Button>
          </div>
          {/* decoration 2 */}
          <BirdDecoration
            bird="2"
            position="top-4 right-8 md:top-8 md:right-16"
          />
        </div>
      </section>
      {/* 2. 文字+图片区块 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* 左侧文字 */}
        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0 order-2 md:order-1 relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            {t.section2.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-line text-gray-600">
            {t.section2.desc}
          </p>
          {/* decoration 3 */}
          <BirdDecoration
            bird="3"
            position="-top-8 -left-4 md:-top-40 md:left-16"
          />
        </div>
        {/* 右侧图片 */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image
            src="/join_us/2.png"
            alt="Placeholder Image"
            width={600}
            height={400}
            priority
          />
        </div>
      </section>
      {/* 3. 左右布局：职位列表 + 申请表 */}
      <section className="flex flex-col md:flex-row items-start gap-12 mt-32">
        {/* 左侧：职位列表（Accordion 格式） */}
        <div className="w-full md:w-1/2 pb-12">
          <h2 className="text-3xl font-bold mb-6">{t.positions.title}</h2>
          <Accordion type="multiple" className="space-y-6">
            {t.positions.list.map((position, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-3 border-b-0"
              >
                <AccordionTrigger className="py-3 px-4 text-left bg-white border border-gray-200">
                  <span className="text-base md:text-lg font-medium">
                    {position.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="py-2">
                  <div className="space-y-3 text-sm md:text-base">
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

        {/* 右侧：在线申请表 */}
        <div className="w-full md:w-1/2 sticky top-4">
          <h2 className="text-3xl font-bold mb-6">{t.form.title}</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-4 md:p-8 rounded-lg shadow-lg bg-primary text-primary-foreground"
          >
            {t.form.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">
                  {section.heading}
                </h3>

                {/* 需要双列的区块 */}
                {["personalInformation", "positionAppliedFor"].includes(
                  section.id
                ) || section.id === "educationalBackground" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.fields
                      // 教育背景特殊处理前四个
                      .filter(
                        (f) =>
                          section.id !== "educationalBackground" ||
                          [
                            "highestQualification",
                            "majorFieldOfStudy",
                            "institutionName",
                            "yearOfGraduation",
                          ].includes(f.name)
                      )
                      .map((field) => (
                        <div
                          key={field.name}
                          className={
                            field.type === "select-multiple" ? "col-span-2" : ""
                          }
                        >
                          <div className="space-y-2">
                            <Label>
                              {field.label}
                              {field.required && (
                                <span className="text-red-500"> *</span>
                              )}
                            </Label>
                            {renderField(field)}
                          </div>
                        </div>
                      ))}

                    {/* 教育背景后续字段 */}
                    {section.id === "educationalBackground" &&
                      section.fields
                        .filter(
                          (f) =>
                            ![
                              "highestQualification",
                              "majorFieldOfStudy",
                              "institutionName",
                              "yearOfGraduation",
                            ].includes(f.name)
                        )
                        .map((field) => (
                          <div
                            key={field.name}
                            className="col-span-1 md:col-span-2 space-y-2"
                          >
                            <Label>
                              {field.label}
                              {field.required && (
                                <span className="text-red-500"> *</span>
                              )}
                            </Label>
                            {renderField(field)}
                          </div>
                        ))}
                  </div>
                ) : (
                  /* 其他区块单列布局 */
                  <div className="space-y-4">
                    {section.fields.map((field) => (
                      <div key={field.name} className="space-y-2">
                        <Label>
                          {field.label}
                          {field.required && (
                            <span className="text-red-500"> *</span>
                          )}
                        </Label>

                        {renderField(field)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-start mt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-red-700 text-white hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? lang === "en"
                    ? "Submitting..."
                    : "提交中..."
                  : t.form.submitButtonLabel}
              </Button>
            </div>
          </form>
        </div>
      </section>
      <FAQ customFaqItems={joinUsFaqItems} />
    </div>
  );
}
