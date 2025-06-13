"use client";

import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import { achievementContent } from "./content";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import { VCEEnglishSubject } from "./components/VCEEnglishSubject";
import { VCEMathSubject } from "./components/VCEMathSubject";
import { VCEScienceSubject } from "./components/VCEScienceSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { MDProgramSubject } from "./components/MDProgramSubject";
import { SelectiveSchoolSubject } from "./components/SelectiveSchoolSubject";
import { AMCSubject } from "./components/AMCSubject";
import { ScholarshipSubject } from "./components/ScholarshipSubject-1";
import { AdvancedProgram35 } from "./components/AdvancedProgram35";
import { AdvancedProgram79 } from "./components/AdvancedProgram79";
import FAQ from "@/components/FAQ";
import { achievementFaqItems } from "@/data/faq_content";

export default function Achievements() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = achievementContent[lang];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    highSchool: true,
    juniorHigh: true,
    primarySchool: true,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 计算导航栏高度偏移量
      const navbarHeight = 132; // 32 * 4 = 128px (mt-32 对应的高度) + 4px (padding)
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setSidebarOpen(false); // 移动端点击后关闭侧边栏
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sidebarContent = (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">
        {lang === "en" ? "Quick Navigation" : "快速导航"}
      </h3>

      {/* 概览部分 */}
      <div className="space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-start text-left"
          onClick={() => scrollToSection("overview")}
        >
          {lang === "en" ? "Overview" : "概览"}
        </Button>
      </div>

      {/* 高中部分 */}
      <Collapsible
        open={openSections.highSchool}
        onOpenChange={() => toggleSection("highSchool")}
      >
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            {lang === "en" ? "Senior High School" : "高中"}
            {openSections.highSchool ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 ml-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("vce-english")}
          >
            {lang === "en" ? "VCE English & EAL" : "VCE 英语"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("vce-math")}
          >
            {lang === "en" ? "VCE Mathematics" : "VCE 数学"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("vce-science")}
          >
            {lang === "en" ? "VCE Science" : "VCE 科学"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("md-program")}
          >
            {lang === "en" ? "Austin MD Program" : "澳升医学院项目"}
          </Button>
        </CollapsibleContent>
      </Collapsible>

      {/* 初中部分 */}
      <Collapsible
        open={openSections.juniorHigh}
        onOpenChange={() => toggleSection("juniorHigh")}
      >
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            {lang === "en" ? "Junior High School" : "初中"}
            {openSections.juniorHigh ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 ml-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("selective-school")}
          >
            {lang === "en" ? "Selective School Program" : "精英公校项目"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("amc")}
          >
            {lang === "en" ? "AMC Competition" : "AMC 竞赛"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("scholarship-junior")}
          >
            {lang === "en" ? "Scholarship Program" : "奖学金项目"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("advanced-79")}
          >
            {lang === "en" ? "Advanced Program (7-9)" : "Y7-9 培优班"}
          </Button>
        </CollapsibleContent>
      </Collapsible>

      {/* 小学部分 */}
      <Collapsible
        open={openSections.primarySchool}
        onOpenChange={() => toggleSection("primarySchool")}
      >
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            {lang === "en" ? "Primary School" : "小学"}
            {openSections.primarySchool ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 ml-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("scholarship-primary")}
          >
            {lang === "en" ? "Scholarship Program" : "奖学金项目"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-left"
            onClick={() => scrollToSection("advanced-35")}
          >
            {lang === "en" ? "Advanced Program (3-5)" : "Y3-5 培优班"}
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  return (
    <>
      <div className="min-h-screen flex">
        {/* 移动端菜单按钮 */}
        <Button
          variant="outline"
          size="sm"
          className="fixed top-20 left-4 z-30 lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>

        {/* 侧边栏 */}
        <div
          className={`
        fixed lg:sticky top-16 lg:top-40 left-0 h-[calc(100vh-4rem)] lg:h-[calc(100vh-8rem)] w-64 bg-background border-r border-gray-300 z-20
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
        >
          <ScrollArea className="h-full p-4 pt-16 lg:pt-4">
            {sidebarContent}
          </ScrollArea>
        </div>

        {/* 遮罩层 (移动端) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* 主内容区域 */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 p-8 lg:p-8">
            {/* 概览部分 */}
            <div id="overview" className="scroll-mt-32 space-y-8">
              {/* VCE Card */}
              <div className="bg-gradient-to-br from-[#2798a9] to-primary rounded-2xl p-8 md:p-16 text-white shadow-xl text-center">
                <h2 className="text-4xl font-bold mb-6">{content.vce.title}</h2>
                <p className="mb-4">{content.vce.subTitle}</p>
                <h3 className="text-lg font-bold mb-6">{content.vce.period}</h3>
                <p className="text-sm mb-4">
                  {content.vce.stats.map((stat, index) => (
                    <span key={index}>
                      <span className="font-bold">{stat.count}</span>{" "}
                      {stat.description}{" "}
                      <span className="font-bold">
                        {content.vce.atarValues[index]}
                      </span>
                      {index < content.vce.stats.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {content.vce.percentages.map(({ value, label }) => (
                    <div key={value} className="flex flex-col items-center">
                      <PercentageCircle
                        value={value}
                        color="text-primary"
                        borderColor="border-[#4bafe3]"
                      />
                      <p className="text-sm mt-2">
                        {value} {lang === "en" ? "of students" : "的学生"}
                      </p>
                      <h2 className="text-3xl font-bold mt-1">{label}</h2>
                    </div>
                  ))}
                </div>
              </div>

              {/* 初中 Card */}
              <div className="bg-gradient-to-br from-[#d2337e] to-[#c12731] rounded-2xl p-8 md:p-16 text-white shadow-xl text-center">
                <h2 className="text-4xl font-bold mb-6">
                  {content.juniorHigh.title}
                </h2>
                <p className="text-sm mb-4 whitespace-pre-line">
                  {content.juniorHigh.description}
                </p>
                <div className="flex flex-col items-center my-8">
                  <PercentageCircle
                    value={content.juniorHigh.admissionRate}
                    color="text-[#c62b49]"
                    borderColor="border-[#f59cb5]"
                  />
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-left">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      {content.juniorHigh.programs.scholarship.title}
                    </h3>
                    <p>{content.juniorHigh.programs.scholarship.content}</p>
                    <p className="italic text-xs">
                      {content.juniorHigh.programs.scholarship.note}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      {content.juniorHigh.programs.amc.title}
                    </h3>
                    {content.juniorHigh.programs.amc.results.map(
                      (result, index) => (
                        <p key={index}>{result}</p>
                      )
                    )}
                    <h3 className="text-xl font-bold mt-4">
                      {content.juniorHigh.programs.advanced.title}
                    </h3>
                    <p>{content.juniorHigh.programs.advanced.content}</p>
                  </div>
                </div>
              </div>

              {/* 小学 Card */}
              <div className="bg-gradient-to-br from-[#e0a178] to-[#e0b678] rounded-2xl p-8 md:p-16 text-white shadow-xl">
                <h2 className="text-4xl font-bold mb-6 text-center">
                  {content.primarySchool.title}
                </h2>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-3/5 space-y-4 text-sm">
                    <h3 className="text-xl font-bold">
                      {content.primarySchool.programs.scholarship.title}
                    </h3>
                    <p>
                      {content.primarySchool.programs.scholarship.content}{" "}
                      <strong>
                        {content.primarySchool.programs.scholarship.rate}
                      </strong>
                    </p>
                    <p className="italic text-xs">
                      {content.primarySchool.programs.scholarship.note}
                    </p>
                    <h3 className="text-xl font-bold">
                      {content.primarySchool.programs.advanced.title}
                    </h3>
                    <p>{content.primarySchool.programs.advanced.content}</p>
                    <h3 className="text-xl font-bold">
                      {content.primarySchool.programs.feedback.title}
                    </h3>
                  </div>
                  <div className="lg:w-2/5 space-y-8">
                    {content.primarySchool.programs.feedback.items.map(
                      (item, index) => (
                        <div key={index} className="flex items-center gap-8">
                          <div>
                            <PercentageCircle
                              value={item.value}
                              color="text-[#e0b078]"
                              borderColor="border-[#feddab]"
                            />
                          </div>
                          <p className="text-sm text-left">{item.label}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 标语部分 */}
            <div className="flex flex-col items-center justify-center my-16 space-y-4">
              <p className="text-5xl font-light text-muted-foreground whitespace-pre-line">
                {lang === "en" ? "Every Student" : "每个学生都"}{" "}
                <span className="text-primary uppercase font-bold">
                  {lang === "en" ? "MATTERS" : "重要"}
                </span>
              </p>
              <p className="text-5xl font-light text-muted-foreground whitespace-pre-line">
                {lang === "en" ? "Every Success" : "每个成功都"}{" "}
                <span className="text-primary uppercase font-bold">
                  {lang === "en" ? "COUNTS" : "算数"}
                </span>
              </p>
            </div>

            {/* 高中科目部分 */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                {lang === "en" ? "Senior High School Subjects" : "高中科目"}
              </h2>
              <div id="vce-english" className="scroll-mt-32">
                <VCEEnglishSubject data={content.subjects.english} />
              </div>
              <div id="vce-math" className="scroll-mt-32">
                <VCEMathSubject data={content.subjects.math} />
              </div>
              <div id="vce-science" className="scroll-mt-32">
                <VCEScienceSubject data={content.subjects.science} />
              </div>
              <div id="md-program" className="scroll-mt-32">
                <MDProgramSubject data={content.subjects.md} />
              </div>
            </div>

            {/* 初中科目部分 */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                {lang === "en" ? "Junior High School Subjects" : "初中科目"}
              </h2>
              <div id="selective-school" className="scroll-mt-32">
                <SelectiveSchoolSubject data={content.subjects.selective} />
              </div>
              <div id="amc" className="scroll-mt-32">
                <AMCSubject data={content.subjects.amc} />
              </div>
              <div id="scholarship-junior" className="scroll-mt-32">
                <ScholarshipSubject data={content.subjects.scholarship} />
              </div>
              <div id="advanced-79" className="scroll-mt-32">
                <AdvancedProgram79 data={content.subjects.advanced79} />
              </div>
            </div>

            {/* 小学科目部分 */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                {lang === "en" ? "Primary School Subjects" : "小学科目"}
              </h2>
              <div id="scholarship-primary" className="scroll-mt-32">
                <ScholarshipSubject data={content.subjects.scholarship} />
              </div>
              <div id="advanced-35" className="scroll-mt-32">
                <AdvancedProgram35 data={content.subjects.advanced35} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ customFaqItems={achievementFaqItems} />
    </>
  );
}
