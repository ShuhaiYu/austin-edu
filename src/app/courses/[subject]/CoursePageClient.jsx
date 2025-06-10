"use client";

import { useContext, useMemo, lazy, Suspense } from "react";
import { LangContext } from "@/app/layout";
import SchoolsCarousel from "./components/SchoolsCarousel";
import Image from "next/image";
import { CourseStructure } from "./components/CourseStructure";
import { ArrowRight } from "lucide-react";
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
    // 1. 先判断是不是 emoji
    const isEmoji = /\p{Emoji}/u.test(name);
    if (isEmoji) {
      return <span className={className}>{name}</span>;
    }

    // 2. 把 kebab-case 或 snake_case 转成 PascalCase
    const pascalName = useMemo(() => {
      return name
        .split(/[-_]/) // 按横杠或下划线分割
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1)) // 每段首字母大写
        .join("");
    }, [name]);

    // 3. 动态 import 对应的 Lucide 图标
    const LucideIcon = useMemo(() => {
      return lazy(() =>
        import("lucide-react").then((mod) => ({
          default:
            mod[pascalName] ||
            (() => <span className={className}>{name}</span>),
        }))
      );
    }, [pascalName, className, name]);

    return (
      <Suspense fallback={<span className={className}>...</span>}>
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
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative pt-20 my-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* 主标题 */}
          <h1 className="text-6xl font-bold text-center mb-16">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #285ea9, #1e4a87)",
              }}
            >
              {course.title}
            </span>
            <div
              className="mt-4 h-1.5 w-32 mx-auto rounded-full"
              style={{ background: "linear-gradient(90deg, #285ea9, #1e4a87)" }}
            />
          </h1>

          {/* 当前年度成就 */}
          {hasContent(course.heroSection?.achievements?.currentYear?.items) && (
            <div className="grid md:grid-cols-3 gap-8 mb-20" data-aos="fade-up">
              {course.heroSection.achievements.currentYear.items.map(
                (item, i) => (
                  <div
                    key={i}
                    className="group relative bg-white p-8 rounded-[2rem] shadow-xl transition-all border-2 border-gray-100 hover:border-primary/30 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3">
                        {item.number}
                      </div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        {item.label}
                      </p>
                      {item.subtitle && (
                        <p className="text-sm text-gray-600 font-medium">
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

          {/* 历史成就 */}
          {hasContent(course.heroSection?.achievements?.historical?.items) && (
            <div
              className="bg-primary rounded-3xl p-10 shadow-2xl overflow-hidden relative"
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
                        <div className="text-3xl font-bold text-primary mb-1">
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
              </div>
            </div>
          )}
        </div>

        {/* Partner Schools */}
        {hasContent(course.heroSection?.schoolLogos) && (
          <div className="mt-16">
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
      </section>

      {/* Course Description Section */}
      {hasContent(course.courseDescription) && (
        <section className="my-16 pt-6 bg-gradient-to-b from-white to-gray-50/30">
          <div className="max-w-7xl mx-auto px-4">
            {/* 标题部分 */}
            <div className="mb-16 text-center" data-aos="fade-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {course.courseDescription.title}
                </span>
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                {course.courseDescription.subtitle}
              </p>
              <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full" />
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
                      <h3 className="text-3xl font-bold text-gray-900 mb-8">
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
                              <span className="text-lg text-gray-800 font-medium leading-relaxed">
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
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
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
                <section
                  key={sectionIndex}
                  className="my-16 border-b border-gray-200"
                >
                  <div className="max-w-7xl mx-auto">
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
                          className={`bg-white p-8 rounded-2xl shadow-lg ${
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
                                <p className="text-gray-600 text-lg leading-relaxed">
                                  {section.paragraph}
                                </p>
                              </div>
                            )}
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
            <section className="my-16 border-b border-gray-200">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                  Core Highlights
                </h2>
                <p className="text-2xl text-gray-700 mb-12 text-center">
                  Key Features of Austin Education&apos;s {course.title}:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {course.coreFeatures.sections.map((section, i) => (
                    <div
                      key={i}
                      className={`bg-white p-8 rounded-2xl shadow-lg ${
                        section.paragraph ? "lg:col-span-2" : "lg:col-span-1"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
                                  <span className="text-lg">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {section.paragraph && (
                          <div className="mt-6 lg:mt-0">
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {section.paragraph}
                            </p>
                          </div>
                        )}
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
        <section className="my-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              {course.courseStructureOverview.title}
            </h2>
            <div className="space-y-16">
              {course.courseStructureOverview.overview.map((section, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8">
                  <div className="bg-primary/5 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.leftTitle}
                    </h3>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.rightTitle}
                    </h3>
                    {hasContent(section.rightContent) && (
                      <ul className="list-disc pl-6 space-y-3">
                        {section.rightContent.map((item, i) => (
                          <li key={i} className="text-gray-700 text-lg">
                            {item}
                          </li>
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
        <section className="my-16 border-b border-gray-200">
          {/* Part A - 重新设计为更有趣的布局 */}
          {hasContent(course.whyChooseUs.partA?.content) && (
            <div className="max-w-7xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {item.paragraph}
                        </p>

                        {/* 装饰性引号 */}
                        <div className="mt-6 flex justify-end">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-primary"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 视觉装饰区域 */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-64 h-64 relative">
                        {/* 背景圆圈 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
                        <div className="absolute inset-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full"></div>
                        <div className="absolute inset-8 bg-gradient-to-br from-primary/10 to-transparent rounded-full"></div>

                        {/* 中心图标 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
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
                            {i >= 2 && (
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
                          </div>
                        </div>

                        {/* 浮动装饰点 */}
                        <div className="absolute top-8 right-12 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div
                          className="absolute bottom-12 left-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="absolute top-16 left-16 w-4 h-4 bg-primary/40 rounded-full animate-pulse"
                          style={{ animationDelay: "1s" }}
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
                    <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-3xl blur-2xl"></div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>

                    <div className="relative flex justify-center transform group-hover:scale-105 transition-transform duration-500">
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
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full blur-md"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/15 rounded-full blur-lg"></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Part B */}
          {hasContent(course.whyChooseUs.partB?.contents) && (
            <div className="max-w-7xl mx-auto mb-20">
              <div className="grid grid-cols-2 gap-16 items-center my-8">
                <h2 className="text-5xl font-bold">
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
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600">
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

          {/* Part C */}
          {hasContent(course.whyChooseUs.partC?.list) && (
            <div className="max-w-7xl mx-auto mb-20 px-4">
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {course.whyChooseUs.partC.title}
                  <div className="mt-4 h-1.5 bg-white/30 w-24 mx-auto rounded-full" />
                </h2>

                <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {course.whyChooseUs.partC.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-primary"
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
                      <span className="text-white text-lg font-medium leading-relaxed">
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
                              className="px-8 py-5 text-gray-800 text-lg font-medium"
                            >
                              {j === 0 ? (
                                <span className="text-primary font-semibold">
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
                <section key={sectionIndex} className="my-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                      {customFeature.title}
                    </h2>

                    {hasContent(customFeature.description) &&
                      hasContent(customFeature.images) && (
                        <div className="grid grid-cols-3 grid-rows-2 gap-6 mb-16 min-h-[600px]">
                          {/* 描述段落1+2 */}
                          <div className="col-span-1 row-span-1 p-6">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {customFeature.description[0]}
                            </p>
                            {customFeature.description[1] && (
                              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                                {customFeature.description[1]}
                              </p>
                            )}
                          </div>

                          {/* 图片1 */}
                          {customFeature.images[0] && (
                            <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src={customFeature.images[0]}
                                alt="Step 1"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </div>
                          )}

                          {/* 图片2（跨两行） */}
                          {customFeature.images[1] && (
                            <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
                              <Image
                                src={customFeature.images[1]}
                                alt="Process Overview"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </div>
                          )}

                          {/* 描述段落3+4（合并单元格） */}
                          <div className="col-span-2 row-span-1 p-6 flex gap-6">
                            <div className="flex-1">
                              {customFeature.description[2] && (
                                <p className="text-sm text-gray-700 leading-relaxed">
                                  {customFeature.description[2]}
                                </p>
                              )}
                              {customFeature.description[3] && (
                                <p className="text-sm text-gray-700 leading-relaxed mt-4">
                                  {customFeature.description[3]}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Custom Course Feature - 步骤流程 */}
                    {hasContent(customFeature.steps) && (
                      <div className="max-w-4xl mx-auto">
                        <div className="relative space-y-12">
                          {/* 时间线竖线 */}
                          <div
                            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"
                            aria-hidden="true"
                          ></div>

                          {customFeature.steps.map((step) => (
                            <div
                              key={step.step}
                              className="group relative flex gap-6 transition-transform duration-300 hover:scale-[1.02]"
                            >
                              {/* 步骤指示器 */}
                              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                                {step.step}
                                {/* 微光效果 */}
                                <div className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay"></div>
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
                    )}

                    {/* 额外描述段落 */}
                    {customFeature.extraDescription && (
                      <div className="mt-12 text-left">
                        <p className="text-lg text-gray-700 mb-4">
                          {customFeature.extraDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )
          )
        : // 如果不是数组，按原来的方式渲染
          hasContent(course.customCourseFeature) && (
            <section className="my-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  {course.customCourseFeature.title}
                </h2>

                {hasContent(course.customCourseFeature.description) &&
                  hasContent(course.customCourseFeature.images) && (
                    <div className="grid grid-cols-3 grid-rows-2 gap-6 mb-16 min-h-[600px]">
                      {/* 描述段落1+2 */}
                      <div className="col-span-1 row-span-1 p-6">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {course.customCourseFeature.description[0]}
                        </p>
                        {course.customCourseFeature.description[1] && (
                          <p className="text-sm text-gray-700 leading-relaxed mt-4">
                            {course.customCourseFeature.description[1]}
                          </p>
                        )}
                      </div>

                      {/* 图片1 */}
                      {course.customCourseFeature.images[0] && (
                        <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={course.customCourseFeature.images[0]}
                            alt="Step 1"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}

                      {/* 图片2（跨两行） */}
                      {course.customCourseFeature.images[1] && (
                        <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={course.customCourseFeature.images[1]}
                            alt="Process Overview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}

                      {/* 描述段落3+4（合并单元格） */}
                      <div className="col-span-2 row-span-1 p-6 flex gap-6">
                        <div className="flex-1">
                          {course.customCourseFeature.description[2] && (
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {course.customCourseFeature.description[2]}
                            </p>
                          )}
                          {course.customCourseFeature.description[3] && (
                            <p className="text-sm text-gray-700 leading-relaxed mt-4">
                              {course.customCourseFeature.description[3]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                {/* Custom Course Feature - 步骤流程 */}
                {hasContent(course.customCourseFeature.steps) && (
                  <div className="max-w-4xl mx-auto">
                    <div className="relative space-y-12">
                      {/* 时间线竖线 */}
                      <div
                        className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"
                        aria-hidden="true"
                      ></div>

                      {course.customCourseFeature.steps.map((step) => (
                        <div
                          key={step.step}
                          className="group relative flex gap-6 transition-transform duration-300 hover:scale-[1.02]"
                        >
                          {/* 步骤指示器 */}
                          <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                            {step.step}
                            {/* 微光效果 */}
                            <div className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay"></div>
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
                )}

                {/* 额外描述段落 */}
                {course.customCourseFeature.extraDescription && (
                  <div className="mt-12 text-left">
                    <p className="text-lg text-gray-700 mb-4">
                      {course.customCourseFeature.extraDescription}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

      {/* Resources Section */}
      {hasContent(course.resources?.packages) && (
        <section className="my-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Resources
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {course.resources.packages.map((pkg, i) => (
                <div
                  key={i}
                  className="relative flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
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
                    <h3 className="font-semibold text-gray-900">{pkg.title}</h3>
                    {pkg.desc && (
                      <p className="mt-1 text-sm text-gray-500 font-medium">
                        {pkg.desc}
                      </p>
                    )}
                  </div>

                  {/* 悬浮装饰点 */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/20"></div>
                </div>
              ))}
            </div>

            {/* 渐变背景装饰 */}
            <div
              className="absolute inset-x-0 -bottom-32 -top-48 bg-gradient-to-b from-primary/5 to-transparent -z-10"
              aria-hidden="true"
            ></div>
          </div>
        </section>
      )}

      {/* Course Structure Section */}
      {hasContent(course.courseStructure) && (
        <CourseStructure data={course.courseStructure} />
      )}

      {/* Related Courses */}
      {hasContent(course.relatedCourses) && (
        <section className="my-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.relatedCourses.map((relatedCourse, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white p-6 rounded-xl shadow-lg"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {relatedCourse.title}
                    </h3>
                    <p className="text-gray-700">{relatedCourse.subtitle}</p>
                  </div>
                  <ArrowRight className="w-8 h-8 p-2 rounded-full bg-primary/10 ml-auto text-primary" />
                </div>
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
