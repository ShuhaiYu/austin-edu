"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
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

export default function JoinUsPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = joinUsContent[lang];

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
        <div
          className="
            absolute top-0 right-0 z-0 pointer-events-none

          "
        >
          <Image
            src="/decoration/1.svg"
            alt=""
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
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
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.section1.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-justify whitespace-pre-line text-gray-600">
            {t.section1.desc}
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="text-sm md:text-base">
              {t.section1.button1}
            </Button>
            <Button variant="outline" className="text-sm md:text-base">
              {t.section1.button2}
            </Button>
          </div>
          {/* decoration 2 */}
          <div
            className="
              absolute bottom-0 right-0 z-0 pointer-events-none
             
              transform translate-y-1/2
            "
          >
            <Image
              src="/decoration/2.svg"
              alt=""
              width={200}
              height={200}
              className="object-contain "
            />
          </div>
        </div>
      </section>
      {/* 2. 文字+图片区块 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* 左侧文字 */}
        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0 order-2 md:order-1 relative">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.section2.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-justify whitespace-pre-line text-gray-600">
            {t.section2.desc}
          </p>
          {/* decoration 3 */}
          <div
            className="
              absolute bottom-0 left-0 z-0 pointer-events-none
              transform translate-y-1/2 -translate-x-1/2
            "
          >
            <Image
              src="/decoration/3.svg"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
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
      <section className="flex flex-col md:flex-row items-start gap-8 mt-32">
        {/* 左侧：职位列表（Accordion 格式） */}
        <div className="w-full md:w-1/2 pb-12">
          <h2 className="text-3xl font-bold mb-6">{t.positions.title}</h2>
          <Accordion type="multiple" className="space-y-4">
            {t.positions.list.map((position, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-3 border-b-0"
              >
                <AccordionTrigger className="py-3 px-2 text-left bg-white border border-gray-200">
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
          <h2 className="text-5xl font-bold mb-6">{t.form.title}</h2>
          <form className="space-y-4 bg-card p-4 md:p-8 rounded-lg shadow-lg bg-primary text-primary-foreground">
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
                className="w-full md:w-auto bg-red-700 text-white hover:bg-red-900"
              >
                {t.form.submitButtonLabel}
              </Button>
            </div>
          </form>
        </div>
      </section>
      <FAQ customFaqItems={joinUsFaqItems} />
    </div>
  );
}
