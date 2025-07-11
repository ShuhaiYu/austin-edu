// src/app/courses/components/CourseDetail.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../../../data/courses_content";

export const CourseDetail = ({ searchFilter }) => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const router = useRouter();
  const detail = coursesContent[lang].detail;
  const { categories, courses } = detail;

  // 检测是否为移动端
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg断点
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // 更简单的滚动函数 - 使用原生API滚动到中间
  const scrollToElement = (element, behavior = "smooth") => {
    if (!element) return;

    console.log("Scrolling element to center:", element);

    element.scrollIntoView({
      behavior: behavior,
      block: "center", // 将元素置于视窗中间
      inline: "nearest",
    });
  };

  // 获取第一个分类的第一个子分类的第一门课作为默认课程
  const getDefaultCourse = () => {
    const firstCategory = categories[0];
    const firstSubcategory = firstCategory.subcategories[0];
    const firstCourseSlug = firstSubcategory.courses[0];
    return courses[firstCourseSlug];
  };

  const [selectedCourse, setSelectedCourse] = useState(getDefaultCourse());
  const [openAccordions, setOpenAccordions] = useState([]);
  const courseRefs = useRef({});

  // 根据课程slug找到所属的分类
  const findCourseCategory = (courseSlug) => {
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        if (subcategory.courses.includes(courseSlug)) {
          return {
            category: category.title,
            subcategory: subcategory.title,
            course: courses[courseSlug],
          };
        }
      }
    }
    return null;
  };

  // 根据年级名称找到对应的分类
  const findCategoryByGrade = (gradeName) => {
    // 创建双向映射：英文<->中文，以及统一的grade level映射
    const gradeMapping = {
      // 英文原名映射
      "Primary School - Years 1-6": {
        en: "Primary School - Years 1-6",
        zh: "小学 1-6 年级",
        level: "primary",
      },
      "Secondary School - Years 7-9": {
        en: "Secondary School - Years 7-9",
        zh: "初中 7-9 年级",
        level: "secondary",
      },
      "Senior Secondary School - Years 10-12": {
        en: "Senior Secondary School - Years 10-12",
        zh: "高中 10-12 年级",
        level: "senior",
      },
      // 中文原名映射
      "小学 1-6 年级": {
        en: "Primary School - Years 1-6",
        zh: "小学 1-6 年级",
        level: "primary",
      },
      "初中 7-9 年级": {
        en: "Secondary School - Years 7-9",
        zh: "初中 7-9 年级",
        level: "secondary",
      },
      "高中 10-12 年级": {
        en: "Senior Secondary School - Years 10-12",
        zh: "高中 10-12 年级",
        level: "senior",
      },
    };

    // 首先尝试直接匹配
    let targetTitle = gradeName;

    // 如果在映射中找到，根据当前语言获取正确的标题
    if (gradeMapping[gradeName]) {
      targetTitle = gradeMapping[gradeName][lang];
    }

    return categories.find((category) => category.title === targetTitle);
  };

  // 处理搜索过滤器参数
  useEffect(() => {
    // 处理具体课程搜索
    if (searchFilter && searchFilter.subject) {
      const courseInfo = findCourseCategory(searchFilter.subject);

      if (courseInfo) {
        // 移动端直接跳转，桌面端设置选中课程
        if (isMobile) {
          const path = getNavigationPath(courseInfo.course);
          router.push(path);
          return;
        }

        // 桌面端保持原有逻辑
        setSelectedCourse(courseInfo.course);

        // 自动展开对应的Accordion
        setOpenAccordions((prev) => {
          const newOpenAccordions = [...prev];
          if (!newOpenAccordions.includes(courseInfo.category)) {
            newOpenAccordions.push(courseInfo.category);
          }
          return newOpenAccordions;
        });

        // 延迟滚动，确保Accordion已经展开
        setTimeout(() => {
          const courseElement = courseRefs.current[searchFilter.subject];
          if (courseElement) {
            console.log(
              "Found course element for subject navigation:",
              searchFilter.subject
            );
            scrollToElement(courseElement);
          } else {
            console.warn("Course element not found:", searchFilter.subject);
          }
        }, 500);

        // 显示搜索结果提示
        const params = new URLSearchParams();
        params.set("searchResult", "true");
        params.set("courseName", courseInfo.course.title);
        window.history.replaceState({}, "", `/courses?${params.toString()}`);
      }
    }
    // 处理年级搜索
    else if (searchFilter && searchFilter.grade) {
      const category = findCategoryByGrade(searchFilter.grade);

      if (category) {
        // 自动展开对应的年级分类
        setOpenAccordions((prev) => {
          const newOpenAccordions = [...prev];
          if (!newOpenAccordions.includes(category.title)) {
            newOpenAccordions.push(category.title);
          }
          return newOpenAccordions;
        });

        // 选择该分类下的第一门课程作为默认显示（仅桌面端）
        if (
          !isMobile &&
          category.subcategories &&
          category.subcategories.length > 0
        ) {
          const firstSubcategory = category.subcategories[0];
          if (firstSubcategory.courses && firstSubcategory.courses.length > 0) {
            const firstCourseSlug = firstSubcategory.courses[0];
            const firstCourse = courses[firstCourseSlug];
            if (firstCourse) {
              setSelectedCourse(firstCourse);
            }
          }
        }

        // 延迟滚动到分类顶部
        setTimeout(() => {
          const categoryElement = document.querySelector(
            `[data-category="${category.title}"]`
          );
          if (categoryElement) {
            console.log(
              "Found category element for grade navigation:",
              category.title
            );
            scrollToElement(categoryElement);
          } else {
            console.warn("Category element not found:", category.title);
          }
        }, 500);

        // 显示年级搜索结果提示
        const params = new URLSearchParams();
        params.set("gradeResult", "true");
        params.set("gradeName", category.title);
        window.history.replaceState({}, "", `/courses?${params.toString()}`);
      }
    }
  }, [searchFilter, isMobile]);

  // 提取跳转逻辑为独立函数
  const getNavigationPath = (course) => {
    const isContactCourse =
      course.content.length === 1 &&
      (course.content[0].includes("contact us") ||
        course.content[0].includes("联系我们") ||
        course.content[0].includes("欢迎联系我们"));

    return isContactCourse ? "/contact_us" : `/courses/${course.slug}`;
  };

  // 处理课程点击 - 移动端和桌面端不同行为
  const handleCourseClick = (course) => {
    if (isMobile) {
      // 移动端直接跳转
      const path = getNavigationPath(course);
      router.push(path);
    } else {
      // 桌面端预览
      setSelectedCourse(course);
    }
  };

  // 处理双击跳转（仅桌面端）
  const handleDoubleClick = (course) => {
    if (!isMobile) {
      const path = getNavigationPath(course);
      router.push(path);
    }
  };

  // 处理Accordion展开/收起
  const handleAccordionChange = (value) => {
    setOpenAccordions(value);
  };

  // Tooltip 文案 - 根据设备类型显示不同提示
  const getTooltipText = () => {
    if (isMobile) {
      return lang === "en" ? "Tap to enter course" : "点击进入课程";
    } else {
      return lang === "en"
        ? "Single click to preview, double click to enter course"
        : "单击预览，双击进入课程";
    }
  };

  useEffect(() => {
    console.log("Selected Course:", selectedCourse);
  }, [selectedCourse]);

  return (
    <TooltipProvider>
      {/* 搜索结果提示 */}
      {searchFilter && searchFilter.subject && !isMobile && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-blue-800 font-medium text-sm sm:text-base">
              {lang === "en"
                ? `Search Result: Found course "${selectedCourse.title}" for ${searchFilter.state}, ${searchFilter.grade}`
                : `搜索结果：为${searchFilter.state}，${searchFilter.grade}找到课程"${selectedCourse.title}"`}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-8 items-start">
        {/* 左侧 Accordion - 移动端占满宽度，桌面端占一半 */}
        <div className="w-full lg:w-1/2">
          <Accordion
            type="multiple"
            value={openAccordions}
            onValueChange={handleAccordionChange}
          >
            {categories.map((category, idx) => {
              const bgShades = [
                "bg-gradient-to-r from-[#D8E9F8] to-[#BCD6ED]",
                "bg-gradient-to-r from-[#C6DCF2] to-[#C6DCF2]",
                "bg-gradient-to-r from-[#B2CEEA] to-[#81A7D1]",
                "bg-gradient-to-r from-[#A3C4E6] to-[#6C92C4]",
                "bg-gradient-to-r from-[#8FB8E0] to-[#5A7FB8]",
              ];
              const bgColor = bgShades[idx % bgShades.length];

              // 检查是否为年级搜索结果
              const isGradeResult =
                searchFilter &&
                searchFilter.grade &&
                !searchFilter.subject &&
                category.title === searchFilter.grade;

              return (
                <AccordionItem
                  key={category.title}
                  value={category.title}
                  data-category={category.title}
                  className={`gap-4 rounded-xl lg:rounded-[2rem] border p-2 mb-4 bg-white ${
                    isGradeResult
                      ? "border-green-300 shadow-lg ring-2 ring-green-100"
                      : "border-gray-200"
                  }`}
                >
                  <AccordionTrigger
                    className={`rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6 ${bgColor} font-semibold hover:from-primary hover:to-primary hover:text-white [&>svg]:hover:stroke-white transition-colors duration-300 ${
                      isGradeResult ? "ring-2 ring-green-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm sm:text-base">
                      {isGradeResult && (
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                      {category.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-4 pl-2 lg:pl-4 space-y-6">
                      {category.subcategories?.map((subcategory, subIdx) => (
                        <div key={subcategory.title} className="space-y-3">
                          {/* 子分类标题 */}
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <h4 className="text-base lg:text-lg font-semibold text-gray-800">
                              {subcategory.title}
                            </h4>
                          </div>

                          {/* 课程列表 */}
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-2 lg:ml-4">
                            {subcategory.courses?.map((courseSlug) => {
                              const course = courses[courseSlug];
                              if (!course) return null;

                              // 检查是否为选中的课程（仅桌面端需要）
                              const isSelected =
                                !isMobile &&
                                selectedCourse.slug === course.slug;

                              // 检查是否为搜索结果
                              const isSearchResult =
                                searchFilter &&
                                searchFilter.subject === courseSlug;

                              return (
                                <Tooltip key={courseSlug}>
                                  <TooltipTrigger asChild>
                                    <li
                                      ref={(el) =>
                                        (courseRefs.current[courseSlug] = el)
                                      }
                                      onClick={() => handleCourseClick(course)}
                                      onDoubleClick={() =>
                                        handleDoubleClick(course)
                                      }
                                      className={`text-left w-full p-2 lg:p-3 rounded-lg cursor-pointer transition-all duration-300 select-none relative
                                        ${
                                          isSelected
                                            ? "bg-primary/10 text-primary border-none shadow-sm font-bold "
                                            : "hover:text-primary hover:bg-primary/5 hover:shadow-sm border-transparent hover:border-primary/20"
                                        } border
                                        ${
                                          isSearchResult
                                            ? "animate-pulse bg-yellow-50 border-yellow-300"
                                            : ""
                                        }
                                        ${
                                          isMobile
                                            ? "active:bg-primary/20 active:scale-98 transform"
                                            : ""
                                        }
                                      `}
                                    >
                                      <span
                                        className={`text-xs sm:text-sm ${
                                          isSelected
                                            ? "font-bold"
                                            : "font-medium"
                                        }`}
                                      >
                                        {course.title}
                                      </span>
                                      {isSearchResult && (
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                                      )}
                                      {/* 移动端显示箭头图标提示可点击 */}
                                      {isMobile && (
                                        <svg
                                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      )}
                                    </li>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="text-xs">
                                      {getTooltipText()}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
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

        {/* 右侧 详情面板 - 仅在桌面端显示 */}
        <div className="hidden lg:block w-1/2 sticky top-40 self-start">
          <div className="space-y-6 lg:space-y-8 border-4 lg:border-6 border-blue-200 bg-white rounded-xl lg:rounded-[2rem] p-4 lg:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              {selectedCourse.title}
            </h2>

            {/* 动态按钮和内容处理 */}
            {(() => {
              // 检查是否是需要联系咨询的课程
              const isContactCourse =
                selectedCourse.content.length === 1 &&
                (selectedCourse.content[0].includes("contact us") ||
                  selectedCourse.content[0].includes("联系我们") ||
                  selectedCourse.content[0].includes("欢迎联系我们"));

              return (
                <>
                  {/* 跳转按钮 */}
                  <Link href={getNavigationPath(selectedCourse)}>
                    <Button className="w-full sm:w-auto text-sm sm:text-base">
                      {isContactCourse
                        ? lang === "en"
                          ? "Contact Us"
                          : "联系我们"
                        : lang === "en"
                          ? "Find out more about this course"
                          : "查看课程详情"}
                    </Button>
                  </Link>

                  <div className="space-y-4 mt-8 lg:mt-12">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {lang === "en"
                        ? "What Does the Program Involve?"
                        : "课程详情"}
                    </h3>

                    {isContactCourse ? (
                      /* 特殊显示咨询信息 */
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 lg:p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <svg
                            className="w-5 h-5 text-blue-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-semibold text-primary text-sm sm:text-base">
                            {lang === "en" ? "Course Information" : "课程咨询"}
                          </span>
                        </div>
                        <p className="text-primary leading-relaxed text-sm sm:text-base">
                          {selectedCourse.content[0]}
                        </p>
                      </div>
                    ) : (
                      /* 正常显示课程内容 */
                      <div className="space-y-2">
                        {selectedCourse.content.map((item, i) => {
                          // 检查是否是Unit标题行 - 更精确的匹配
                          const isUnitTitle = /^Unit \d+-?\d*：/.test(item);

                          if (isUnitTitle) {
                            return (
                              <div
                                key={i}
                                className="font-bold text-base sm:text-lg text-primary mt-4 lg:mt-6 mb-2 lg:mb-3 first:mt-0"
                              >
                                {item}
                              </div>
                            );
                          }

                          return (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-muted-foreground text-sm mt-1 flex-shrink-0">
                                •
                              </span>
                              <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
