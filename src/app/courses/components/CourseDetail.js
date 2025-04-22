"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
import { Button } from "@/components/ui/button";

export const CourseDetail = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = coursesContent[lang].detail;
  const [selectedCourse, setSelectedCourse] = useState(
    "Y1-6 English Enrichment (Eng/EAL)"
  );

  return (
    <div className="flex gap-8 mb-16">
      <div className="w-1/2">
        <Accordion type="multiple">
          {t.categories.map((category, index) => {
            const bgShades = [
              "bg-gradient-to-r from-[#D8E9F8] to-[#BCD6ED]",
              "bg-gradient-to-r from-[#C6DCF2] to-[#C6DCF2]",
              "bg-gradient-to-r from-[#B2CEEA] to-[#81A7D1]",
              "bg-gradient-to-r from-[#A3C4E6] to-[#6C92C4]",
            ];
            const bgColor = bgShades[index % bgShades.length]; // 防止越界
            return (
              <AccordionItem
                key={category}
                value={category}
                className="gap-4 rounded-[2rem] border border-gray-200 p-2 mb-4 bg-white"
              >
                <AccordionTrigger
                  className={`rounded-[2rem] border border-gray-200 p-6 ${bgColor} font-semibold hover:bg-primary hover:text-muted-foreground transition-colors duration-300`}
                >
                  {category}
                </AccordionTrigger>
                <AccordionContent className="">
                  <ul className="space-y-2 mt-4 pl-4 grid grid-cols-2 list-disc list-inside">
                    {t.courses[category]?.map((course) => (
                      <li
                        key={course.title}
                        onClick={() => setSelectedCourse(course.title)}
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

      <div className="w-1/2 space-y-8 border-6 border-blue-200 bg-white rounded-[2rem] p-8 shadow-lg">
        {selectedCourse && (
          <>
            <h2 className="text-3xl font-bold">{selectedCourse}</h2>
            <Button
              onClick={() => {
                const course = t.courses[t.categories[0]].find(
                  (c) => c.title === selectedCourse
                );
                if (course) {
                  window.open(course.link, "_blank");
                }
              }}
            >
              {lang === "en" ? "Find out more about this course" : "查看课程"}
            </Button>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {lang === "en" ? "What Does the Program Involve?" : "课程详情"}
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                {t.courses[t.categories[0]]
                  .find((c) => c.title === selectedCourse)
                  ?.content.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
