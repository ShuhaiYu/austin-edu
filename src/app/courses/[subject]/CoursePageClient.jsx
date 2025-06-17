"use client";

import { useContext, useMemo, lazy, Suspense } from "react";
import { LangContext } from "@/app/layout";
import SchoolsCarousel from "./components/SchoolsCarousel";
import Image from "next/image";
import { CourseStructure } from "./components/CourseStructure";
import {
  ArrowRight,
  ChartColumnIncreasing,
  PlaneTakeoff,
  TableCellsMerge,
  Trophy,
} from "lucide-react";
import { CourseFeature } from "../components/CourseFeature";
import {
  BookOpen,
  Repeat,
  Check,
  TestTube,
  MessageCircle,
  GraduationCap,
  School,
  Compass,
  FileText,
  SlidersHorizontal,
  Users,
  ClipboardList,
  BarChart2,
  Target,
  ListChecks,
  Presentation,
  Clock,
  Award,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BirdDecoration from "@/components/BirdDecoration";
import { motion } from "framer-motion";

const SCHOOL_IMAGES = [
  { name: "Balwyn High", image: "Balwyn high.png" },
  { name: "Balwyn High School", image: "Balwyn high.png" },

  { name: "Brighton Grammar", image: "brighton grammar.jpg" },
  { name: "Camberwell High School", image: "camberwell high.jpg" },
  { name: "Camberwell Grammar", image: "camberwell grammar.png" },
  { name: "Camberwell Grammar School", image: "camberwell grammar.png" },

  { name: "Carey Baptist Grammar School", image: "carey.png" },

  { name: "Caulfield Grammar", image: "caulfield.jpg" },
  { name: "East Doncaster Secondary College", image: "edsc-colour.png" },
  { name: "Fintona Girls' School", image: "fintona.jpg" },
  { name: "Glen Waverley Secondary College", image: "glen waverley sc.jpg" },
  { name: "Haileybury", image: "Haileybury.png" },
  { name: "Haileybury College", image: "Haileybury.png" },
  { name: "Huntingtower", image: "hunting-tower.png" },
  { name: "Kingswood College", image: "kingswood.png" },
  { name: "Korowa Anglican Girls' School", image: "korowa.jpg" },
  { name: "Lauriston Girls' School", image: "lauriston.png" },
  { name: "The Mac.Robertson Girls' High School", image: "MacRob.png" },
  { name: "McKinnon Secondary College", image: "mckinnon.jpg" },
  { name: "Melbourne Girls Grammar", image: "melb girls grammar.jpg" },
  { name: "Melbourne Grammar", image: "melb grammar.jpg" },
  { name: "Melbourne High School", image: "melb high.png" },
  { name: "Mentone Grammar", image: "mentone grammar.jpg" },
  { name: "Methodist Ladies' College", image: "methodist ladies college.jpg" },
  { name: "Nossal High School", image: "nossal high.jpg" },
  { name: "Presbyterian Ladies' College", image: "plc.jpg" },
  { name: "Ruyton Girls' School", image: "ruyton.jpg" },
  { name: "Scotch College", image: "scotch.jpg" },
  { name: "Suzanne Cory High School", image: "suzanne.png" },
  { name: "Trinity Grammar", image: "trinity.jpg" },
  { name: "Viewbank College", image: "viewbankcollege.png" },
  { name: "Vermont Secondary College", image: "VSC.png" },

  {
    name: "Waverley Christian College",
    image: "waverley-christian-college-melbourne-australia.jpg",
  },
  { name: "Wesley College", image: "wesley.jpg" },
  { name: "Yarra Valley Grammar", image: "yarra.jpg" },

  { name: "Nossal High School", image: "nossal.jpg" },
];

export default function CoursePageClient({ localizedData }) {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const course = localizedData?.[lang] || {};

  const IconRenderer = ({ name, className }) => {
    console.log("IconRenderer called with name:", name); // 调试日志

    // 2. 清理图标名称并转换为 PascalCase
    const pascalName = useMemo(() => {
      // 去除前后空格和特殊字符
      let cleanName = name.trim().replace(/[️⭐]/g, ""); // 移除 emoji 修饰符
      console.log("Cleaned name:", cleanName);

      // 如果已经是 PascalCase，直接返回
      if (/^[A-Z][a-zA-Z0-9]*$/.test(cleanName)) {
        console.log(`${cleanName} is already PascalCase`);
        return cleanName;
      }

      // 处理 kebab-case, snake_case, 或空格分隔的情况
      const result = cleanName
        .split(/[-_\s]+/) // 按横杠、下划线或空格分割
        .filter(Boolean) // 过滤空字符串
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
        .join("");

      console.log(`Converted ${cleanName} to ${result}`);
      return result;
    }, [name]);

    // 3. 动态 import 对应的 Lucide 图标
    const LucideIcon = useMemo(() => {
      return lazy(() =>
        import("lucide-react")
          .then((mod) => {
            console.log(`Trying to import ${pascalName} from lucide-react`);
            const IconComponent = mod[pascalName];
            if (IconComponent) {
              console.log(`✅ Successfully found ${pascalName}`);
              return { default: IconComponent };
            } else {
              console.error(`❌ ${pascalName} not found in lucide-react`);
              // 如果图标不存在，返回一个通用的图标
              return {
                default:
                  mod.HelpCircle ||
                  (() => (
                    <div
                      className={className}
                      title={`Icon "${name}" -> "${pascalName}" not found`}
                    >
                      <span style={{ fontSize: "12px" }}>?</span>
                    </div>
                  )),
              };
            }
          })
          .catch((error) => {
            console.error(`Failed to import lucide-react:`, error);
            return {
              default: () => (
                <div
                  className={className}
                  title={`Failed to load icon "${name}"`}
                >
                  <span style={{ fontSize: "12px" }}>!</span>
                </div>
              ),
            };
          })
      );
    }, [pascalName, className, name]);

    return (
      <Suspense
        fallback={
          <div className={className}>
            <span style={{ fontSize: "12px" }}>⏳</span>
          </div>
        }
      >
        <LucideIcon className={className} />
      </Suspense>
    );
  };

  // 检查是否有内容的辅助函数
  const hasContent = (data) => {
    if (!data) return false;
    if (Array.isArray(data)) return data.length > 0;
    if (typeof data === "object") {
      return Object.values(data).some((value) => {
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === "object" && value !== null)
          return hasContent(value);
        return Boolean(value);
      });
    }
    return Boolean(data);
  };

  return (
    <div className="flex flex-col max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 gap-20">
      {/* Hero Section */}
      <section className="relative pt-8 mt-20">
        {/* 添加装饰 */}
        <BirdDecoration
          bird="1"
          position="top-8 right-8 md:top-16 md:right-16"
        />
        <BirdDecoration
          bird="3"
          position="top-16 left-8 md:-top-8 md:left-16"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* 主标题 */}
          <h1 className="text-6xl font-bold text-center">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #285ea9, #1e4a87)",
              }}
            >
              {course.title}
            </span>
            <div
              className="mt-8 h-1 w-48 mx-auto rounded-full relative opacity-70"
              style={{
                background: "linear-gradient(90deg, #285ea9, #1e4a87, #285ea9)",
              }}
            >

              {/* 星光装饰 */}
              <span
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-primary text-2xl"
                style={{ animation: "sparkle 2s ease-in-out infinite" }}
              >
                ✦
              </span>
              <span
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary text-2xl"
                style={{
                  animation: "sparkle 2s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                ✦
              </span>
            </div>
          </h1>

          {/* 当前年度成就 */}
          {hasContent(course.heroSection?.achievements?.currentYear?.items) && (
            <div
              className="grid md:grid-cols-3 gap-8 mb-20 mt-36"
              data-aos="fade-up"
            >
              {course.heroSection.achievements.currentYear.items.map(
                (item, i) => (
                  <div
                    key={i}
                    className=" relative bg-white p-8 rounded-[2rem] shadow-xl transition-all border-2 border-gray-100 "
                  >
                    <div className="relative">
                      <div className="text-4xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3">
                        {item.number}
                      </div>
                      <p className="text-sm text-gray-900 mb-2">{item.label}</p>
                      {item.subtitle && (
                        <p className="text-xl text-gray-600 font-medium">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    {/* 装饰性角标 */}
                    <div className="absolute right-6 top-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* 历史成就 - 支持单个或多个数据 */}
          {(hasContent(course.heroSection?.achievements?.historical?.items) ||
            hasContent(course.heroSection?.achievements?.historical)) && (
            <div className="space-y-8">
              {/* 如果 historical 是数组，渲染多个成就块 */}
              {Array.isArray(course.heroSection.achievements.historical)
                ? course.heroSection.achievements.historical.map(
                    (historicalData, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-[#85aedc] to-[#6490c7] rounded-3xl p-10 shadow-2xl overflow-hidden relative"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                      >
                        {/* 背景装饰 */}
                        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]" />

                        <div className="relative">
                          <h3 className="text-xl text-white/80 font-medium mb-4">
                            {historicalData.range}
                          </h3>
                          <h2 className="text-3xl font-bold text-white mb-8">
                            Austin Education has developed:
                          </h2>

                          <div className="grid md:grid-cols-4 gap-6">
                            {historicalData.items.map((item, j) => (
                              <div
                                key={j}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl hover:bg-white transition-all shadow-lg hover:shadow-xl"
                              >
                                {item.title && (
                                  <p className="text-sm text-primary font-medium mb-2">
                                    {item.title}
                                  </p>
                                )}
                                <div className="text-3xl font-semibold text-primary mb-1">
                                  {item.number}
                                </div>
                                <p className="text-base text-gray-800 font-medium">
                                  {item.label}
                                </p>
                                {item.subtitle && (
                                  <p className="text-xs text-gray-600 mt-2">
                                    {item.subtitle}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>

                          {historicalData.extraDescription && (
                            <div className="mt-8">
                              <p className="text-sm text-white">
                                {historicalData.extraDescription}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )
                : /* 如果 historical 不是数组，使用原来的单个渲染方式 */
                  hasContent(
                    course.heroSection.achievements.historical.items
                  ) && (
                    <div
                      className="bg-gradient-to-r from-[#85aedc] to-[#6490c7] rounded-3xl p-10 shadow-2xl overflow-hidden relative"
                      data-aos="fade-up"
                    >
                      {/* 背景装饰 */}
                      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]" />

                      <div className="relative">
                        <h3 className="text-xl text-white/80 font-medium mb-4">
                          {course.heroSection.achievements.historical.range}
                        </h3>
                        <h2 className="text-3xl font-bold text-white mb-8">
                          Austin Education has developed:
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                          {course.heroSection.achievements.historical.items.map(
                            (item, j) => (
                              <div
                                key={j}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl hover:bg-white transition-all shadow-lg hover:shadow-xl"
                              >
                                {item.title && (
                                  <p className="text-sm text-primary font-medium mb-2">
                                    {item.title}
                                  </p>
                                )}
                                <div className="text-3xl font-semibold text-primary mb-1">
                                  {item.number}
                                </div>
                                <p className="text-base text-gray-800 font-medium">
                                  {item.label}
                                </p>
                                {item.subtitle && (
                                  <p className="text-xs text-gray-600 mt-2">
                                    {item.subtitle}
                                  </p>
                                )}
                              </div>
                            )
                          )}
                        </div>

                        {course.heroSection.achievements.historical
                          .extraDescription && (
                          <div className="mt-8">
                            <p className="text-sm text-white">
                              {
                                course.heroSection.achievements.historical
                                  .extraDescription
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
            </div>
          )}
        </div>

        {/* Partner Schools */}
        {hasContent(course.heroSection?.schoolLogos) && (
          <div className="mt-32">
            <SchoolsCarousel
              schools={course.heroSection.schoolLogos.map((schoolName) => {
                const school = SCHOOL_IMAGES.find(
                  (img) =>
                    img.name.toLowerCase() === schoolName.toLowerCase().trim()
                );
                return {
                  name: schoolName,
                  image: school
                    ? `${school.image}`
                    : "/fallback-school-image.png",
                };
              })}
            />
          </div>
        )}

        {/* Hero Section Extra Description */}
        {hasContent(course.heroSection?.extraDescription) && (
          <div className="mt-12">
            <p className="text-lg text-gray-700">
              {course.heroSection?.extraDescription}
            </p>
          </div>
        )}
      </section>

      {/* Course Description Section */}
      {hasContent(course.courseDescription) && (
        <section className="my-16 relative">
          <BirdDecoration
            bird="2"
            position="top-4 right-4 md:top-8 md:right-12"
          />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* 标题部分 */}
            <div className="text-center" data-aos="fade-up">
              {course.courseDescription.title && (
                <h2 className="text-3xl font-bold text-gray-900 mb-16 ">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {course.courseDescription.title}
                  </span>
                </h2>
              )}
              {course.courseDescription.subtitle && (
                <>
                  <p className="text-2xl text-gray-600 my-4 max-w-3xl mx-auto leading-relaxed">
                    {course.courseDescription.subtitle}
                  </p>
                </>
              )}
            </div>

            {/* 课程内容 */}
            {hasContent(course.courseDescription.courseOverview) && (
              <div className="space-y-12" data-aos="fade-up">
                {/* 前置描述 - 卡片式设计 */}
                {hasContent(
                  course.courseDescription.courseOverview
                    .descriptionBeforeFeature
                ) && (
                  <div className="grid gap-8">
                    {course.courseDescription.courseOverview.descriptionBeforeFeature.map(
                      (paragraph, index) => (
                        <div
                          key={index}
                          className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow"
                        >
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* 关键特性 */}
                {hasContent(
                  course.courseDescription.courseOverview.features
                ) && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 blur-3xl opacity-30" />
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50">
                      <h3 className="text-4xl font-bold text-gray-900 mb-8">
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {course.courseDescription.courseOverview.featureTitle}
                        </span>
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {course.courseDescription.courseOverview.features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
                            >
                              <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-gray-800 font-medium leading-[2rem]">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 后置描述 */}
                {hasContent(
                  course.courseDescription.courseOverview
                    .descriptionAfterFeature
                ) && (
                  <div className="grid gap-8 relative">
                    {course.courseDescription.courseOverview.descriptionAfterFeature.map(
                      (paragraph, index) => (
                        <div
                          key={index}
                          className="relative pl-12 border-l-4 border-primary/20"
                        >
                          <div className="absolute left-0 top-0 text-6xl font-bold text-primary/20 -translate-x-12 -translate-y-4">
                            "
                          </div>
                          <p className=" text-gray-700 leading-[2rem]">
                            {paragraph}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
                <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full" />
              </div>
            )}

            {/* 主段落 */}
            {course.courseDescription.paragraph && (
              <div
                className="mt-16 max-w-4xl mx-auto text-center"
                data-aos="fade-up"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform -rotate-2 rounded-xl" />
                  <p className="relative text-xl text-gray-800 leading-relaxed font-medium px-8 py-6">
                    {course.courseDescription.paragraph}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Core Features Section - 支持重复显示 */}
      {Array.isArray(course.coreFeatures)
        ? // 如果是数组，渲染多个核心特性部分
          course.coreFeatures.map(
            (coreFeature, sectionIndex) =>
              hasContent(coreFeature?.sections) && (
                <section key={sectionIndex} className="my-16 relative">
                  {/* 只在第一个coreFeature添加装饰 */}
                  {sectionIndex === 0 && (
                    <BirdDecoration
                      bird="4"
                      position="top-8 left-8 md:-top-12 md:-left-8"
                    />
                  )}

                  <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                      {coreFeature.title || "Core Highlights"}
                    </h2>
                    <p className="text-2xl text-gray-700 mb-12 text-center">
                      {coreFeature.subtitle ||
                        `Key Features of Austin Education's ${course.title}:`}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {coreFeature.sections.map((section, i) => (
                        <div
                          key={i}
                          className={`bg-white p-8 rounded-2xl shadow-lg relative ${
                            section.paragraph
                              ? "lg:col-span-2"
                              : "lg:col-span-1"
                          }`}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {section.title}
                          </h3>
                          <div
                            className={`${
                              section.paragraph
                                ? "grid lg:grid-cols-2 gap-8"
                                : ""
                            }`}
                          >
                            <div>
                              {hasContent(section.list) && (
                                <ul className="space-y-4">
                                  {section.list.map((item, j) => (
                                    <li
                                      key={j}
                                      className="flex items-start text-gray-700"
                                    >
                                      <svg
                                        className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      <span className="text-lg">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>

                            {section.paragraph && (
                              <div className="mt-6 lg:mt-0">
                                <p className="text-gray-600 text-lg leading-[2rem]">
                                  {section.paragraph}
                                </p>
                              </div>
                            )}
                          </div>
                          {/* 背景装饰图片 */}
                          <div className="absolute bottom-0 right-0 h-[200px] w-auto aspect-square">
                            <Image
                              src={`/courses/content/Course-${i + 1}.png`}
                              alt="Course Feature Background"
                              width={240}
                              height={240}
                              className="h-full w-auto object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Extra Description */}
                    {coreFeature.extraDescription && (
                      <div className="mt-12 text-left">
                        <p className="text-lg text-gray-700 mb-4">
                          {coreFeature.extraDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )
          )
        : // 如果不是数组，按原来的方式渲染
          hasContent(course.coreFeatures?.sections) && (
            <section className="my-16 relative">
              <BirdDecoration
                bird="4"
                position="top-8 left-8 md:-top-12 md:-left-8"
              />

              <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                  {course.coreFeatures?.title || "Core Highlights"}
                </h2>
                <p className="text-2xl text-gray-700 mb-12 text-center">
                  {course.coreFeatures?.subtitle ||
                    `Key Features of Austin Education's ${course.title}:`}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                  {course.coreFeatures.sections.map((section, i) => (
                    <div
                      key={i}
                      className={`bg-white p-8 rounded-2xl shadow-lg relative ${
                        section.paragraph ? "lg:col-span-2" : "lg:col-span-1"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-10">
                        {section.title}
                      </h3>
                      <div
                        className={`${
                          section.paragraph ? "grid lg:grid-cols-2 gap-8" : ""
                        }`}
                      >
                        <div>
                          {hasContent(section.list) && (
                            <ul className="space-y-4">
                              {section.list.map((item, j) => (
                                <li
                                  key={j}
                                  className="flex items-start text-gray-700"
                                >
                                  <svg
                                    className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="leading-[2rem]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {section.paragraph && (
                          <div className="mt-6 lg:mt-0">
                            <p className="text-gray-600 leading-[2rem]">
                              {section.paragraph}
                            </p>
                          </div>
                        )}
                      </div>
                      {/* 背景装饰图片 */}
                      <div className="absolute bottom-0 right-0 h-[200px] w-auto aspect-square">
                        <Image
                          src={`/courses/content/Course-${i + 1}.png`}
                          alt="Course Feature Background"
                          width={240}
                          height={240}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Extra Description */}
                {course.coreFeatures?.extraDescription && (
                  <div className="mt-12 text-left">
                    <p className="text-lg text-gray-700 mb-4">
                      {course.coreFeatures.extraDescription}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

      {/* Course Structure Overview Section */}
      {hasContent(course.courseStructureOverview?.overview) && (
        <section className="mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              {course.courseStructureOverview.title}
            </h2>
            <div className="space-y-16">
              {course.courseStructureOverview.overview.map((section, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {/* left = 1/3 */}
                  <div className="flex items-center justify-center p-8 rounded-2xl bg-primary/10 shadow-lg md:col-span-1">
                    <h3 className="text-2xl text-center font-bold text-gray-900 mb-4">
                      {section.leftTitle}
                    </h3>
                  </div>

                  {/* right = 2/3 */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {section.rightTitle}
                    </h3>
                    {hasContent(section.rightContent) && (
                      <ul className="list-disc pl-6 space-y-3">
                        {section.rightContent.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section - 修改为横向图片布局 */}
      {hasContent(course.whyChooseUs) && (
        <section className="my-16">
          {/* Part B */}
          {hasContent(course.whyChooseUs.partB?.contents) && (
            <div className="max-w-7xl mx-auto mb-20">
              <div className="grid grid-cols-2 gap-16 items-center my-8">
                <h2 className="text-4xl font-bold leading-relaxed">
                  {course.whyChooseUs.partB.title}
                </h2>
                <p className="text-muted-foreground">
                  {course.whyChooseUs.partB.description}
                </p>
              </div>

              {course.whyChooseUs.partB.contents.map((content, index) => (
                <div
                  key={content.title}
                  className={`flex flex-col gap-16 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* 文字描述 */}
                  <div className="w-1/2 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary/70">
                        {content.icon === "book" && <BookOpen size={24} />}
                        {content.icon === "repeat" && <Repeat size={24} />}
                        {content.icon === "check" && <Check size={24} />}
                        {content.icon === "test" && <TestTube size={24} />}
                        {content.icon === "communication" && (
                          <MessageCircle size={24} />
                        )}
                        {content.icon === "graduation" && (
                          <GraduationCap size={24} />
                        )}
                        {content.icon === "school" && <School size={24} />}
                        {content.icon === "compass" && <Compass size={24} />}
                        {content.icon === "file-text" && <FileText size={24} />}
                        {content.icon === "sliders-horizontal" && (
                          <SlidersHorizontal size={24} />
                        )}
                        {content.icon === "users" && <Users size={24} />}
                        {content.icon === "clipboard-list" && (
                          <ClipboardList size={24} />
                        )}
                        {content.icon === "bar-chart-2" && (
                          <BarChart2 size={24} />
                        )}
                        {content.icon === "target" && <Target size={24} />}
                        {content.icon === "list-checks" && (
                          <ListChecks size={24} />
                        )}
                        {content.icon === "chalkboard" && (
                          <Presentation size={24} />
                        )}
                        {content.icon === "clock" && <Clock size={24} />}
                        {content.icon === "award" && <Award size={24} />}
                        {content.icon === "calendar" && <Calendar size={24} />}
                      </div>
                      <h3 className="text-2xl font-bold">{content.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {content.description}
                    </p>
                  </div>

                  {/* 图片 */}
                  <div className="w-1/2 relative h-96 rounded-[2rem] overflow-hidden shadow-lg">
                    <Image
                      src={content.image}
                      alt={content.title}
                      width={975}
                      height={650}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Part A - 重新设计为更有趣的布局 */}
          {hasContent(course.whyChooseUs.partA?.content) && (
            <div className="max-w-7xl mx-auto mb-20 relative">
              <BirdDecoration
                bird="5"
                position="top-4 right-8 md:top-8 md:right-16"
              />

              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center relative z-10">
                {course.whyChooseUs.partA.title}
              </h2>

              {/* 主要图片 - 如果存在的话 */}
              {course.whyChooseUs.partA.image1 && (
                <div className="relative mb-16 group">
                  {/* 背景装饰 */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex justify-center">
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={course.whyChooseUs.partA.image1}
                        alt="Why choose us"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                      {/* 图片上的渐变遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* 装饰性元素 */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/15 rounded-full blur-lg"></div>
                </div>
              )}

              {/* 内容卡片 - 交错布局 */}
              <div className="space-y-16">
                {course.whyChooseUs.partA.content.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* 内容区域 */}
                    <div className="flex-1 space-y-6">
                      {/* 数字标识 */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {i + 1}
                        </div>
                        <div className="h-1 flex-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                      </div>

                      {/* 标题和内容 */}
                      <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100/50">
                        <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-[2rem]">
                          {item.paragraph}
                        </p>
                      </div>
                    </div>

                    {/* 视觉装饰区域 */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-40 h-40 relative">
                        {/* 背景圆圈 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
                        <div className="absolute inset-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full"></div>
                        <div className="absolute inset-8 bg-gradient-to-br from-primary/10 to-transparent rounded-full"></div>

                        {/* 中心图标 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-primary/60 rounded-full flex items-center justify-center text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            {i === 0 && (
                              <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            )}
                            {i === 1 && (
                              <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                              </svg>
                            )}
                            {i === 2 && (
                              <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                            )}
                            {i === 3 && (
                              <ChartColumnIncreasing className="w-12 h-12" />
                            )}
                            {i === 4 && <Trophy className="w-12 h-12" />}
                            {i >= 5 && <PlaneTakeoff className="w-12 h-12" />}
                          </div>
                        </div>

                        {/* 浮动装饰点 */}
                        <div className="absolute top-8 right-12 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div
                          className="absolute bottom-12 left-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 第二张图片（如果存在）- 特殊样式 */}
              {course.whyChooseUs.partA.image2 && (
                <div className="mt-20 relative">
                  {/* 标题装饰 */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-primary font-semibold">
                        Our Process
                      </span>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* 图片容器 */}
                  <div className="relative group">
                    {/* 多层背景效果 */}
                    {/* <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-3xl blur-2xl"></div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div> */}

                    <div className="relative flex justify-center transform group-hover:scale-105 transition-transform duration-500 max-w-2xl mx-auto">
                      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                          src={course.whyChooseUs.partA.image2}
                          alt="Process"
                          width={975}
                          height={650}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* 角落装饰 */}
                    {/* <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full blur-md"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/15 rounded-full blur-lg"></div> */}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Part C */}
          {hasContent(course.whyChooseUs.partC?.list) && (
            <div className="max-w-7xl mx-auto mb-20 px-4 relative">
              <BirdDecoration
                bird="6"
                position="bottom-8 left-8 md:bottom-12 md:left-16"
              />

              <div className="bg-gradient-to-r from-[#85aedc] to-[#6490c7] rounded-3xl p-8 shadow-2xl relative z-10">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                  {course.whyChooseUs.partC.title}
                  <div className="mt-4 h-1.5 bg-white/30 w-24 mx-auto rounded-full" />
                </h2>

                <ul className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {course.whyChooseUs.partC.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-white leading-relaxed tracking-wide">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Part D */}
          {hasContent(course.whyChooseUs.partD?.table) && (
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                {course.whyChooseUs.partD.title}
                <div className="mt-4 h-1.5 bg-primary w-24 mx-auto rounded-full" />
              </h2>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200/50">
                    <thead className="bg-primary">
                      <tr>
                        {course.whyChooseUs.partD.table.headers?.map(
                          (header, i) => (
                            <th
                              key={i}
                              className="px-8 py-6 text-left text-lg font-semibold text-white uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200/50">
                      {course.whyChooseUs.partD.table.rows?.map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-primary/5 transition-colors"
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="px-8 py-8 text-gray-800 font-medium"
                            >
                              {j === 0 ? (
                                <span className="text-primary font-semibold leading-[2rem]">
                                  {cell}
                                </span>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Custom Course Feature - 支持重复显示 */}
      {Array.isArray(course.customCourseFeature)
        ? // 如果是数组，渲染多个自定义课程特性部分
          course.customCourseFeature.map(
            (customFeature, sectionIndex) =>
              hasContent(customFeature) && (
                <section key={sectionIndex} className="my-16 relative">
                  {/* 只在第一个customFeature添加装饰 */}
                  {sectionIndex === 0 && (
                    <BirdDecoration
                      bird="1"
                      position="top-4 right-4 md:-top-8 md:right-12"
                    />
                  )}

                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                      {customFeature.title}
                    </h2>

                    {/* 顶部描述和图片区域 - 恢复原来的布局 */}
                    {hasContent(customFeature.description) &&
                      hasContent(customFeature.images) && (
                        <div className="mb-16">
                          <div className="flex gap-6 mb-6">
                            {/* 左侧：描述文本 */}
                            <div className="flex-1 space-y-4">
                              {customFeature.description
                                .slice(0, 2)
                                .map((desc, index) => (
                                  <p
                                    key={index}
                                    className="text-gray-700 leading-relaxed"
                                  >
                                    {desc}
                                  </p>
                                ))}
                            </div>

                            {/* 右侧：图片2（竖图） */}
                            {customFeature.images[1] && (
                              <div className="w-80 relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                  src={customFeature.images[1]}
                                  alt="Feature Image 2"
                                  width={320}
                                  height={480}
                                  className="object-contain w-full h-auto"
                                  sizes="320px"
                                />
                              </div>
                            )}
                          </div>

                          {/* 下方：图片1（横图）和剩余描述 */}
                          <div className="flex gap-6">
                            {/* 左侧：图片1（横图） */}
                            {customFeature.images[0] && (
                              <div className="flex-1 relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                  src={customFeature.images[0]}
                                  alt="Feature Image 1"
                                  width={600}
                                  height={400}
                                  className="object-contain w-full h-auto"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              </div>
                            )}

                            {/* 右侧：剩余描述 */}
                            <div className="flex-1 space-y-4">
                              {customFeature.description
                                .slice(2)
                                .map((desc, index) => (
                                  <p
                                    key={index + 2}
                                    className="text-gray-700 leading-relaxed"
                                  >
                                    {desc}
                                  </p>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Steps区域 - 左边步骤，右边图片 */}
                    {hasContent(customFeature.steps) && (
                      <div className="flex gap-8 mb-16">
                        {/* 左侧：步骤流程 */}
                        <div className="flex-1 max-w-2xl">
                          <div className="relative space-y-12">
                            {/* 时间线竖线 */}
                            <div
                              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"
                              aria-hidden="true"
                            />

                            {customFeature.steps.map((step) => (
                              <div
                                key={step.step}
                                className="group relative flex gap-6 transition-transform duration-300 hover:scale-[1.02]"
                              >
                                {/* 步骤指示器 */}
                                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                                  {step.step}
                                  {/* 微光效果 */}
                                  <div className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay" />
                                </div>

                                {/* 内容卡片 */}
                                <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-1">
                                      <h3 className="text-xl font-semibold text-gray-900">
                                        {step.title}
                                      </h3>
                                      <p className="mt-2 text-gray-600 leading-relaxed">
                                        {step.content}
                                      </p>
                                    </div>
                                    {/* 动态箭头 */}
                                    <ArrowRight className="h-6 w-6 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 右侧：步骤相关图片（竖图） */}
                        {(customFeature.images[2] ||
                          customFeature.images[3]) && (
                          <div className="w-80 space-y-4">
                            {customFeature.images[2] && (
                              <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                  src={customFeature.images[2]}
                                  alt="Step Process Image 1"
                                  width={320}
                                  height={480}
                                  className="object-contain w-full h-auto"
                                  sizes="320px"
                                />
                              </div>
                            )}

                            {customFeature.images[3] && (
                              <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                  src={customFeature.images[3]}
                                  alt="Step Process Image 2"
                                  width={320}
                                  height={480}
                                  className="object-contain w-full h-auto"
                                  sizes="320px"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* 轮播图区域 */}
                    {hasContent(customFeature.carousel) && (
                      <div className="mb-16">
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full"
                        >
                          <CarouselContent className="-ml-2 md:-ml-4">
                            {customFeature.carousel.map((image, index) => (
                              <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                              >
                                <div className="relative rounded-xl overflow-hidden shadow-lg">
                                  <Image
                                    src={image}
                                    alt={`Carousel Image ${index + 1}`}
                                    width={300}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      </div>
                    )}

                    {/* 额外描述段落 */}
                    {customFeature.extraDescription && (
                      <div className="text-center">
                        <p className="text-lg text-gray-700 italic">
                          {customFeature.extraDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )
          )
        : // 如果不是数组，按原来的方式渲染（但使用新的布局）
          hasContent(course.customCourseFeature) && (
            <section className="my-16 relative">
              <BirdDecoration
                bird="1"
                position="top-4 right-4 md:-top-8 md:right-12"
              />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  {course.customCourseFeature.title}
                </h2>

                {/* 顶部描述和图片区域 */}
                {hasContent(course.customCourseFeature.description) &&
                  hasContent(course.customCourseFeature.images) && (
                    <div className="flex gap-8 mb-16">
                      <div className="flex flex-col gap-6 mb-6 w-3/5">
                        {/* 左侧：描述文本 */}
                        <div className="flex-1 space-y-4">
                          {course.customCourseFeature.description.map(
                            (desc, index) => (
                              <p
                                key={index}
                                className="text-gray-700 leading-relaxed"
                              >
                                {desc}
                              </p>
                            )
                          )}
                        </div>
                        {/* 左侧：图片1（横图） */}
                        {course.customCourseFeature.images[0] && (
                          <div className="flex-1 relative overflow-hidden">
                            <Image
                              src={course.customCourseFeature.images[0]}
                              alt="Feature Image 1"
                              width={800}
                              height={300}
                              className="object-contain w-full h-auto shadow-xl rounded-xl"
                            />
                          </div>
                        )}
                      </div>

                      {/* 下方 */}
                      <div className="flex w-2/5">
                        {/* 右侧：图片2（竖图） */}
                        {course.customCourseFeature.images[1] && (
                          <div className="w-full relative rounded-xl overflow-hidden ">
                            <Image
                              src={course.customCourseFeature.images[1]}
                              alt="Feature Image 2"
                              width={1500}
                              height={2000}
                              className="object-contain w-full h-auto shadow-xl"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                {/* Steps区域 - 左边步骤，右边图片 */}
                {hasContent(course.customCourseFeature.steps) && (
                  <div className="flex gap-8 mb-16">
                    {/* 左侧：步骤流程 */}
                    <div className="flex max-w-2xl w-3/5">
                      <div className="relative space-y-12">
                        {/* 时间线竖线 */}
                        <div
                          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"
                          aria-hidden="true"
                        />

                        {course.customCourseFeature.steps.map((step) => (
                          <div key={step.step} className="relative flex gap-6 ">
                            {/* 步骤指示器 */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-lg ">
                              {step.step}
                              {/* 微光效果 */}
                              <div className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay" />
                            </div>

                            {/* 内容卡片 */}
                            <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-md ">
                              <div className="flex items-start gap-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-semibold text-gray-900">
                                    {step.title}
                                  </h3>
                                  <p className="mt-2 text-gray-600 leading-relaxed">
                                    {step.content}
                                  </p>
                                </div>
                                {/* 动态箭头 */}
                                <ArrowRight className="h-6 w-6 text-gray-400 " />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 右侧：步骤相关图片（竖图） */}
                    {(course.customCourseFeature.images[2] ||
                      course.customCourseFeature.images[3]) && (
                      <div className="w-2/5 space-y-4">
                        {course.customCourseFeature.images[2] && (
                          <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={course.customCourseFeature.images[2]}
                              alt="Step Process Image 1"
                              width={1500}
                              height={2000}
                              className="object-contain w-full h-auto"
                            />
                          </div>
                        )}

                        {course.customCourseFeature.images[3] && (
                          <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={course.customCourseFeature.images[3]}
                              alt="Step Process Image 2"
                              width={1500}
                              height={2000}
                              className="object-contain w-full h-auto"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* 轮播图区域 */}
                {hasContent(course.customCourseFeature.carousel) && (
                  <div className="mb-16">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {course.customCourseFeature.carousel.map(
                          (image, index) => (
                            <CarouselItem
                              key={index}
                              className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3"
                            >
                              <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                  src={image}
                                  alt={`Carousel Image ${index + 1}`}
                                  width={1500}
                                  height={2000}
                                  className="object-contain w-full h-auto"
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                />
                              </div>
                            </CarouselItem>
                          )
                        )}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                )}

                {/* 额外描述段落 */}
                {course.customCourseFeature.extraDescription && (
                  <div className="text-center">
                    <p className="text-lg text-gray-700 italic">
                      {course.customCourseFeature.extraDescription}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

      {/* Resources Section */}
      {(hasContent(course.resources?.packages) ||
        hasContent(course.resources?.resourceSections)) && (
        <section className="mb-16 mt-8 relative">
          <BirdDecoration
            bird="3"
            position="top-0 left-4 md:-top-20 md:left-0"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-20 text-center">
              Comprehensive Resources
            </h2>

            {/* 处理新的多资源包结构 */}
            {course.resources?.resourceSections ? (
              <div className="space-y-40">
                {course.resources.resourceSections.map(
                  (section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-40">
                      {/* 资源包标题 */}
                      {section.title && (
                        <div className="text-center mb-12">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {section.title}
                          </h3>
                          {section.subtitle && (
                            <p className="text-lg text-gray-600">
                              {section.subtitle}
                            </p>
                          )}
                        </div>
                      )}

                      {/* 资源包网格 */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-4">
                        {section.packages.map((pkg, i) => (
                          <div
                            key={i}
                            className="relative flex items-center gap-4 p-6 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                          >
                            {/* 图标容器 */}
                            <div className="flex-shrink-0 relative bg-primary rounded-full p-4 transition-colors">
                              <IconRenderer
                                name={pkg.icon}
                                className="w-12 h-12 text-white stroke-[1.5]"
                              />
                            </div>

                            {/* 文字内容 */}
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {pkg.title}
                              </h4>
                              {pkg.desc && pkg.desc.trim() && (
                                <p className="mt-1 text-sm text-gray-500 font-medium">
                                  {pkg.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              /* 处理原有的单一资源包结构 */
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-4">
                {course.resources.packages.map((pkg, i) => (
                  <div
                    key={i}
                    className="relative flex items-center gap-4 p-6 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    {/* 图标容器 */}
                    <div className="flex-shrink-0 relative bg-primary rounded-full p-4 transition-colors">
                      <IconRenderer
                        name={pkg.icon}
                        className="w-12 h-12 text-white stroke-[1.5]"
                      />
                    </div>

                    {/* 文字内容 */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {pkg.title}
                      </h3>
                      {pkg.desc && pkg.desc.trim() && (
                        <p className="mt-1 text-sm text-gray-500 font-medium">
                          {pkg.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Course Structure Section */}
      {hasContent(course.courseStructure) && (
        <CourseStructure data={course.courseStructure} />
      )}

      {/* Related Courses */}
      {hasContent(course.relatedCourses) && (
        <section className="my-16 relative">
          <BirdDecoration
            bird="2"
            position="bottom-4 right-8 md:-top-20 md:-right-8"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.relatedCourses.map((relatedCourse, i) => (
                <Link
                  key={i}
                  href={`/courses/${relatedCourse.slug}`}
                  className="flex items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {relatedCourse.title}
                    </h3>
                    <p className="text-gray-700">{relatedCourse.subtitle}</p>
                  </div>
                  <ArrowRight className="w-8 h-8 p-2 rounded-full bg-primary/10 ml-auto text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer Section */}
      <CourseFeature />
    </div>
  );
}
