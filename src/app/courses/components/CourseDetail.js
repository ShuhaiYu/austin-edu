// src/app/courses/components/CourseDetail.tsx
"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";

export const CourseDetail = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const detail = coursesContent[lang].detail;
  const { categories, courses } = detail;

  // 获取第一个分类的第一个子分类的第一门课作为默认课程
  const getDefaultCourse = () => {
    const firstCategory = categories[0];
    const firstSubcategory = firstCategory.subcategories[0];
    const firstCourseSlug = firstSubcategory.courses[0];
    return courses[firstCourseSlug];
  };

  const [selectedCourse, setSelectedCourse] = useState(getDefaultCourse());

  useEffect(() => {
    console.log("Selected Course:", selectedCourse);
  }, [selectedCourse]);

  return (
    <div className="flex gap-8 mb-16 items-start">
      {/* 左侧 Accordion */}
      <div className="w-1/2">
        <Accordion type="multiple">
          {categories.map((category, idx) => {
            const bgShades = [
              "bg-gradient-to-r from-[#D8E9F8] to-[#BCD6ED]",
              "bg-gradient-to-r from-[#C6DCF2] to-[#C6DCF2]",
              "bg-gradient-to-r from-[#B2CEEA] to-[#81A7D1]",
              "bg-gradient-to-r from-[#A3C4E6] to-[#6C92C4]",
            ];
            const bgColor = bgShades[idx % bgShades.length];
            
            return (
              <AccordionItem
                key={category.title}
                value={category.title}
                className="gap-4 rounded-[2rem] border border-gray-200 p-2 mb-4 bg-white"
              >
                <AccordionTrigger
                  className={`rounded-[2rem] border border-gray-200 p-6 ${bgColor} font-semibold hover:from-primary hover:to-primary hover:text-white [&>svg]:hover:stroke-white transition-colors duration-300`}
                >
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-4 pl-4 space-y-6">
                    {category.subcategories?.map((subcategory, subIdx) => (
                      <div key={subcategory.title} className="space-y-3">
                        {/* 子分类标题 */}
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h4 className="text-lg font-semibold text-gray-800">
                            {subcategory.title}
                          </h4>
                        </div>
                        
                        {/* 课程列表 */}
                        <ul className="grid grid-cols-2 gap-2 ml-4">
                          {subcategory.courses?.map((courseSlug) => {
                            const course = courses[courseSlug];
                            if (!course) return null;
                            
                            return (
                              <li
                                key={courseSlug}
                                onClick={() => setSelectedCourse(course)}
                                className="text-left hover:text-primary w-full p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:shadow-sm border border-transparent hover:border-primary/20"
                              >
                                <span className="text-sm font-medium">
                                  {course.title}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        
                        {/* 分隔符 - 除了最后一个子分类 */}
                        {subIdx < category.subcategories.length - 1 && (
                          <div className="py-2">
                            <Separator className="bg-gray-200" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* 右侧 详情面板 */}
      <div className="w-1/2 sticky top-40 self-start">
        <div className="space-y-8 border-6 border-blue-200 bg-white rounded-[2rem] p-8 shadow-lg">
          <h2 className="text-3xl font-bold">{selectedCourse.title}</h2>

          {/* 动态按钮和内容处理 */}
          {(() => {
            // 检查是否是需要联系咨询的课程
            const isContactCourse = selectedCourse.content.length === 1 && 
              (selectedCourse.content[0].includes("contact us") || 
               selectedCourse.content[0].includes("联系我们") ||
               selectedCourse.content[0].includes("欢迎联系我们"));

            return (
              <>
                {/* 跳转按钮 */}
                <Link href={isContactCourse ? "/contact_us" : `/courses/${selectedCourse.slug}`}>
                  <Button>
                    {isContactCourse 
                      ? (lang === "en" ? "Contact Us" : "联系我们")
                      : (lang === "en" ? "Find out more about this course" : "查看课程详情")
                    }
                  </Button>
                </Link>

                <div className="space-y-4 mt-12">
                  <h3 className="text-xl font-semibold">
                    {lang === "en" ? "What Does the Program Involve?" : "课程详情"}
                  </h3>
                  
                  {isContactCourse ? (
                    /* 特殊显示咨询信息 */
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold text-primary">
                          {lang === "en" ? "Course Information" : "课程咨询"}
                        </span>
                      </div>
                      <p className="text-primary leading-relaxed">
                        {selectedCourse.content[0]}
                      </p>
                    </div>
                  ) : (
                    /* 正常显示课程内容 */
                    <ul className="list-disc pl-6 space-y-2">
                      {selectedCourse.content.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};