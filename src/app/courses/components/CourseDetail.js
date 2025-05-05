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
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";

export const CourseDetail = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const detail = coursesContent[lang].detail;
  const { categories, courses } = detail;

  // 初始默认课程：第一分类的第一门课
  const defaultCourse = courses[categories[0]][0];
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);

  useEffect(() => {
    console.log("Selected Course:", selectedCourse);
  }, [selectedCourse]);

  return (
    <div className="flex gap-8 mb-16">
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
                key={category}
                value={category}
                className="gap-4 rounded-[2rem] border border-gray-200 p-2 mb-4 bg-white"
              >
                <AccordionTrigger
                  className={`rounded-[2rem] border border-gray-200 p-6 ${bgColor} font-semibold hover:from-primary hover:to-primary hover:text-white [&>svg]:hover:stroke-white transition-colors duration-300`}
                >
                  {category}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-4 pl-4 grid grid-cols-2 list-disc list-inside">
                    {courses[category]?.map((course) => (
                      <li
                        key={course.slug}
                        onClick={() => setSelectedCourse(course)}
                        className="text-left hover:text-primary w-full p-2 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-50"
                      >
                        {course.title}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* 右侧 详情面板 */}
      <div className="w-1/2 space-y-8 border-6 border-blue-200 bg-white rounded-[2rem] p-8 shadow-lg">
        <h2 className="text-3xl font-bold">{selectedCourse.title}</h2>

        {/* 跳转按钮，直接用 selectedCourse.slug */}
        <Link href={`/courses/${selectedCourse.slug}`}>
          <Button>
            {lang === "en" ? "Find out more about this course" : "查看课程详情"}
          </Button>
        </Link>

        <div className="space-y-4 mt-12">
          <h3 className="text-xl font-semibold">
            {lang === "en" ? "What Does the Program Involve?" : "课程详情"}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {selectedCourse.content.map((item, i) => (
              <li key={i} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
