"use client";

import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LangContext } from "@/app/layout";
import { achievementContent } from "./content";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";

import { VCEEnglishSubject } from "./components/VCEEnglishSubject";
import { VCEMathSubject } from "./components/VCEMathSubject";
import { VCEScienceSubject } from "./components/VCEScienceSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { MDProgramSubject } from "./components/MDProgramSubject";
import { SelectiveSchoolSubject } from "./components/SelectiveSchoolSubject";
import { AMCSubject } from "./components/AMCSubject";
import { ScholarshipSubject } from "./components/ScholarshipSubject";
import { AdvancedProgram35 } from "./components/AdvancedProgram35";
import { AdvancedProgram79 } from "./components/AdvancedProgram79";
import FAQ from "@/components/FAQ";
import { achievementFaqItems } from "@/data/faq_content";
import Slogan from "@/components/Slogan";

export default function Achievements() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = achievementContent[lang];
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    highSchool: true,
    juniorHigh: true,
    primarySchool: true,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  // Navigation handlers
  const navigateToCoursesWithGrade = (grade) => {
    const gradeIdentifiers = {
      "VCE": "Senior Secondary School - Years 10-12",
      "JuniorHigh": "Secondary School - Years 7-9", 
      "PrimarySchool": "Primary School - Years 1-6",
      "高中": "高中 10-12 年级",
      "初中": "初中 7-9 年级",
      "小学": "小学 1-6 年级"
    };

    const gradeParam = gradeIdentifiers[grade] || grade;
    router.push(`/courses?grade=${encodeURIComponent(gradeParam)}`);
  };

  const navigateToCoursesWithSubject = (subject) => {
    router.push(`/courses?subject=${encodeURIComponent(subject)}`);
  };

  // 完全同步navbar的滚动逻辑
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      if (currentScrollY < 10) {
        setIsScrolled(false);
      }
    };

    const throttle = (fn, wait) => {
      let lastCall = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastCall < wait) return;
        lastCall = now;
        return fn(...args);
      };
    };

    const debouncedScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "up" && lastScrollY > 100) {
      setIsScrolled(false);
      document.documentElement.className = "";
    } else if (scrollDirection === "down" && lastScrollY > 100) {
      setIsScrolled(true);
      document.documentElement.className = "scrolled";
    }
  }, [scrollDirection, lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = isScrolled ? 32 : 96;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setSidebarOpen(false);
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sidebarContent = (
    <div className="space-y-1">
      {/* 标题区域 */}
      <div className="px-3 sm:px-4 py-4 sm:py-5 border-b border-gray-200">
        <h3 className="font-bold text-lg sm:text-xl text-gray-900 flex items-center gap-2 sm:gap-3 leading-relaxed">
          <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          {lang === "en" ? "Quick Navigation" : "快速导航"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 leading-relaxed">
          {lang === "en" ? "Jump to any section" : "快速跳转到任意部分"}
        </p>
      </div>

      {/* 概览部分 */}
      <div className="px-2 sm:px-3 py-1 sm:py-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-left h-10 sm:h-12 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
          onClick={() => scrollToSection("overview")}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
            <span className="font-medium text-sm sm:text-base leading-relaxed">
              {lang === "en" ? "Overview" : "概览"}
            </span>
          </div>
        </Button>
      </div>

      {/* 高中部分 */}
      <div className="px-2 sm:px-3">
        <Collapsible
          open={openSections.highSchool}
          onOpenChange={() => toggleSection("highSchool")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between h-11 sm:h-13 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary/70 group-hover:text-primary" />
                <span className="font-semibold text-gray-700 group-hover:text-primary text-sm sm:text-base leading-relaxed">
                  {lang === "en" ? "Senior Secondary" : "高中"}
                </span>
              </div>
              {openSections.highSchool ? (
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary" />
              ) : (
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 ml-4 sm:ml-6 mt-1 sm:mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("vce-english")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "VCE English & EAL" : "VCE 英语"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("vce-math")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "VCE Mathematics" : "VCE 数学"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("vce-science")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "VCE Science" : "VCE 科学"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("md-program")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "Austin MD Program" : "澳升医学院项目"}
                </span>
              </div>
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* 初中部分 */}
      <div className="px-2 sm:px-3">
        <Collapsible
          open={openSections.juniorHigh}
          onOpenChange={() => toggleSection("juniorHigh")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between h-11 sm:h-13 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary/70 group-hover:text-primary" />
                <span className="font-semibold text-gray-700 group-hover:text-primary text-sm sm:text-base leading-relaxed">
                  {lang === "en" ? "Secondary School" : "初中"}
                </span>
              </div>
              {openSections.juniorHigh ? (
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary" />
              ) : (
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 ml-4 sm:ml-6 mt-1 sm:mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("selective-school")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "Selective School Program" : "精英公校项目"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("amc")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "AMC Competition" : "AMC 竞赛"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("scholarship-junior")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "Scholarship Program" : "奖学金项目"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("advanced-79")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "Enrichment Program (7-9)" : "Y7-9 培优班"}
                </span>
              </div>
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* 小学部分 */}
      <div className="px-2 sm:px-3">
        <Collapsible
          open={openSections.primarySchool}
          onOpenChange={() => toggleSection("primarySchool")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between h-11 sm:h-13 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary/70 group-hover:text-primary" />
                <span className="font-semibold text-gray-700 group-hover:text-primary text-sm sm:text-base leading-relaxed">
                  {lang === "en" ? "Primary School" : "小学"}
                </span>
              </div>
              {openSections.primarySchool ? (
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary" />
              ) : (
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-primary" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 ml-4 sm:ml-6 mt-1 sm:mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("scholarship-primary")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "Scholarship Program" : "奖学金项目"}
                </span>
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left h-9 sm:h-11 px-3 sm:px-4 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              onClick={() => scrollToSection("advanced-35")}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary leading-relaxed">
                  {lang === "en" ? "Enrichment Program (3-5)" : "Y3-5 培优班"}
                </span>
              </div>
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen flex">
        {/* 移动端菜单按钮 */}
        <Button
          variant="outline"
          size="sm"
          className="fixed z-30 lg:hidden shadow-lg bg-white/90 backdrop-blur-sm border-gray-300 mobile-menu-btn"
          style={{
            top: isScrolled ? "60px" : "128px",
            left: "12px",
          }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>

        {/* 侧边栏 - 响应式宽度和位置调整 */}
        <div
          className={`
        fixed lg:sticky left-0 w-72 sm:w-80 bg-white/95 backdrop-blur-sm border-r border-gray-200 z-20 shadow-lg lg:shadow-none sidebar-transition
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${isScrolled ? "sidebar-mobile scrolled" : "sidebar-mobile"}
      `}
          style={{
            top: isScrolled ? "32px" : "96px",
            height: isScrolled ? "calc(100vh - 32px)" : "calc(100vh - 96px)",
          }}
        >
          <ScrollArea className="h-full py-2 sm:py-3 lg:pt-4 sm:lg:pt-6">
            {sidebarContent}
          </ScrollArea>
        </div>

        {/* 遮罩层 (移动端) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-500/30 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* 主内容区域 */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 p-4 sm:p-6 lg:p-10 xl:p-12">
            {/* 概览部分 - 响应式卡片布局 */}
            <div id="overview" className="scroll-mt-32 space-y-8 sm:space-y-10 lg:space-y-12">
              {/* VCE Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-20 shadow-xl text-center border-2 border-primary/20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-primary leading-relaxed">
                  {content.vce.title}
                </h2>
                <p className="mb-4 sm:mb-5 lg:mb-6 text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {content.vce.subTitle}
                </p>
                <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-7 lg:mb-8 text-primary leading-relaxed">
                  {content.vce.period}
                </h3>
                <p className="text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 text-gray-700 leading-loose">
                  {content.vce.stats.map((stat, index) => (
                    <span key={index}>
                      <span className="font-bold text-primary">
                        {stat.count}
                      </span>{" "}
                      {stat.description}{" "}
                      <span className="font-bold text-primary">
                        {content.vce.atarValues[index]}
                      </span>
                      {index < content.vce.stats.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10">
                  {content.vce.percentages.map(({ value, label }, index) => (
                    <div key={value} className="flex flex-col items-center">
                      <PercentageCircle
                        value={value}
                        color="text-primary"
                        borderColor="border-primary/30"
                        delay={index * 0.3}
                        size="w-20 h-20 sm:w-24 sm:h-24"
                      />
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-2 text-primary leading-relaxed">
                        {label}
                      </h2>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 sm:mt-10 lg:mt-12">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg leading-6"
                    onClick={() => navigateToCoursesWithGrade("Senior Secondary School - Years 10-12")}
                  >
                    <span className="mr-2">
                      {lang === "en" ? "Learn More" : "了解更多"}
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              {/* 初中 Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-20 shadow-xl text-center border-2 border-austin-yellow/30">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-austin-yellow leading-relaxed">
                  {content.juniorHigh.title}
                </h2>
                <p className="text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 whitespace-pre-line text-gray-700 leading-loose">
                  {content.juniorHigh.description}
                </p>
                <div className="flex flex-col items-center my-6 sm:my-8 lg:my-10">
                  <PercentageCircle
                    value={content.juniorHigh.admissionRate}
                    color="text-austin-yellow"
                    borderColor="border-austin-yellow/30"
                    delay={0.5}
                    size="w-20 h-20 sm:w-24 sm:h-24"
                  />
                </div>
                <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 text-sm sm:text-base text-left">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-austin-yellow leading-relaxed">
                      {content.juniorHigh.programs.scholarship.title}
                    </h3>
                    <p className="text-gray-700 leading-loose">
                      {content.juniorHigh.programs.scholarship.content}
                    </p>
                    <p className="italic text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {content.juniorHigh.programs.scholarship.note}
                    </p>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-austin-yellow leading-relaxed">
                      {content.juniorHigh.programs.amc.title}
                    </h3>
                    {content.juniorHigh.programs.amc.results.map(
                      (result, index) => (
                        <p key={index} className="text-gray-700 leading-loose">
                          {result}
                        </p>
                      )
                    )}
                    <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-6 text-austin-yellow leading-relaxed">
                      {content.juniorHigh.programs.advanced.title}
                    </h3>
                    <p className="text-gray-700 leading-loose">
                      {content.juniorHigh.programs.advanced.content}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10 lg:mt-12">
                  <Button 
                    className="bg-austin-yellow hover:bg-austin-yellow/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg leading-6"
                    onClick={() => navigateToCoursesWithGrade("Secondary School - Years 7-9")}
                  >
                    <span className="mr-2">
                      {lang === "en" ? "Learn More" : "了解更多"}
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              {/* 小学 Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-20 shadow-xl border-2 border-austin-red/20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-austin-red leading-relaxed">
                  {content.primarySchool.title}
                </h2>
                <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-10">
                  <div className="xl:w-3/5 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base">
                    <h3 className="text-lg sm:text-xl font-bold text-austin-red leading-relaxed">
                      {content.primarySchool.programs.scholarship.title}
                    </h3>
                    <p className="text-gray-700 leading-loose">
                      {content.primarySchool.programs.scholarship.content}{" "}
                      <strong className="text-austin-red">
                        {content.primarySchool.programs.scholarship.rate}
                      </strong>
                    </p>
                    <p className="italic text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {content.primarySchool.programs.scholarship.note}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-austin-red leading-relaxed">
                      {content.primarySchool.programs.advanced.title}
                    </h3>
                    <p className="text-gray-700 leading-loose">
                      {content.primarySchool.programs.advanced.content}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-austin-red leading-relaxed">
                      {content.primarySchool.programs.feedback.title}
                    </h3>
                  </div>
                  <div className="xl:w-2/5 space-y-6 sm:space-y-8 lg:space-y-10">
                    {content.primarySchool.programs.feedback.items.map(
                      (item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                          <div className="flex-shrink-0">
                            <PercentageCircle
                              value={item.value}
                              color="text-austin-red"
                              borderColor="border-austin-red/30"
                              delay={index * 0.2 + 0.5}
                              size="w-20 h-20 sm:w-24 sm:h-24"
                            />
                          </div>
                          <p className="text-xs sm:text-sm text-center sm:text-left text-gray-700 leading-loose">
                            {item.label}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
                  <Button 
                    className="bg-austin-red hover:bg-austin-red/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg leading-6"
                    onClick={() => navigateToCoursesWithGrade("Primary School - Years 1-6")}
                  >
                    <span className="mr-2">
                      {lang === "en" ? "Learn More" : "了解更多"}
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* 标语部分 */}
            <div className="py-4 sm:py-6 lg:py-8">
              <Slogan
                slogans={[
                  { prefix: "Every Student", highlight: "MATTERS" },
                  { prefix: "Every Success", highlight: "COUNTS" },
                ]}
              />
            </div>

            {/* 高中科目部分 */}
            <div className="space-y-12 sm:space-y-14 lg:space-y-16">
              <div className="relative mb-8 sm:mb-10 lg:mb-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-background px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-800 tracking-wider uppercase leading-tight">
                      {lang === "en"
                        ? "Senior Secondary Subjects"
                        : "高中科目"}
                    </h2>
                    <div className="flex justify-center mt-2 sm:mt-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gray-800"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-800 rotate-45"></div>
                        <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="vce-english" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <VCEEnglishSubject 
                  data={content.subjects.english} 
                  onLearnMore={() => navigateToCoursesWithSubject("vce-english-eal-unit1-4")}
                />
              </div>
              <div id="vce-math" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <VCEMathSubject 
                  data={content.subjects.math} 
                  onLearnMore={() => navigateToCoursesWithSubject("vce-maths-methods-unit1-4")}
                />
              </div>
              <div id="vce-science" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <VCEScienceSubject 
                  data={content.subjects.science} 
                  onLearnMore={(targetCourse) => {
                    const courseSlug = targetCourse || "vce-chemistry-unit-1-4";
                    navigateToCoursesWithSubject(courseSlug);
                  }}
                />
              </div>
              <div id="md-program" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <MDProgramSubject 
                  data={content.subjects.md} 
                  onLearnMore={() => navigateToCoursesWithSubject("ucat")}
                />
              </div>
            </div>

            {/* 初中科目部分 */}
            <div className="space-y-12 sm:space-y-14 lg:space-y-16">
              <div className="relative mb-8 sm:mb-10 lg:mb-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-background px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-800 tracking-wider uppercase leading-tight">
                      {lang === "en"
                        ? "Secondary School Subjects"
                        : "初中科目"}
                    </h2>
                    <div className="flex justify-center mt-2 sm:mt-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gray-800"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-800 rotate-45"></div>
                        <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="selective-school" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <SelectiveSchoolSubject 
                  data={content.subjects.selective} 
                  onLearnMore={() => navigateToCoursesWithSubject("y8-9-selective")}
                />
              </div>
              <div id="amc" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <AMCSubject 
                  data={content.subjects.amc} 
                  onLearnMore={() => navigateToCoursesWithSubject("y7-8-amc")}
                />
              </div>
              <div id="scholarship-junior" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <ScholarshipSubject 
                  data={content.subjects.scholarship} 
                  onLearnMore={() => navigateToCoursesWithSubject("7-to-9-scholarship-victoria")}
                />
              </div>
              <div id="advanced-79" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <AdvancedProgram79 
                  data={content.subjects.advanced79} 
                  onLearnMore={() => navigateToCoursesWithSubject("y7-9-english")}
                />
              </div>
            </div>

            {/* 小学科目部分 */}
            <div className="space-y-12 sm:space-y-14 lg:space-y-16">
              <div className="relative mb-8 sm:mb-10 lg:mb-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-background px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-800 tracking-wider uppercase leading-tight">
                      {lang === "en" ? "Primary School Subjects" : "小学科目"}
                    </h2>
                    <div className="flex justify-center mt-2 sm:mt-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gray-800"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-800 rotate-45"></div>
                        <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="scholarship-primary" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <ScholarshipSubject 
                  data={content.subjects.scholarship} 
                  onLearnMore={() => navigateToCoursesWithSubject("5-to-7-scholarship-victoria")}
                />
              </div>
              <div id="advanced-35" className="scroll-mt-24 mb-16 sm:mb-18 lg:mb-20">
                <AdvancedProgram35 
                  data={content.subjects.advanced35} 
                  onLearnMore={() => navigateToCoursesWithSubject("y1-6-english-enrichment")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ customFaqItems={achievementFaqItems} />
    </>
  );
}