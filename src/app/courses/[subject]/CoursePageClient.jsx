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
  { name: "Scotch College", image: "school_SC.png" },
  { name: "Presbyterian Ladies’ College", image: "school_PLC.png" },
  { name: "Melbourne Grammar", image: "school_MGS.png" },
  { name: "Trinity Grammar", image: "school_TGS.jpg" },
  { name: "Caulfield Grammar", image: "school_CGS.png" },
  { name: "Yarra Valley Grammar", image: "school_YVG.jpg" },
  { name: "Wesley College", image: "school_WC.jpg" },
  { name: "Korowa Anglican Girls’ School", image: "school_KAGS.jpg" },
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

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* 主标题 */}
          <h1 className="text-6xl font-bold text-center mb-16">
            <span className="bg-clip-text bg-primary text-transparent">
              {course.title}
            </span>
            <div className="mt-4 h-1.5 bg-gradient-to-r from-blue-400 to-blue-200 w-32 mx-auto rounded-full" />
          </h1>

          {/* 当前年度成就 */}
          {course.heroSection?.achievements?.currentYear?.items?.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 mb-20" data-aos="fade-up">
              {course.heroSection.achievements.currentYear.items.map(
                (item, i) => (
                  <div
                    key={i}
                    className="group relative bg-white p-8 rounded-[2rem] shadow-xl transition-all border-2 border-blue-100/50 hover:border-blue-300 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 opacity-0  transition-opacity" />
                    <div className="relative">
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-3">
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
                    <div className="absolute right-6 top-6 w-8 h-8 bg-blue-100/30 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* 历史成就 */}
          {course.heroSection?.achievements?.historical?.items?.length > 0 && (
            <div
              className="bg-primary rounded-3xl p-10 shadow-2xl overflow-hidden relative"
              data-aos="fade-up"
            >
              {/* 背景装饰 */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]" />

              <div className="relative">
                <h3 className="text-xl text-blue-200 font-medium mb-4">
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
        {/* Partner Schools */}{" "}
        {course.heroSection?.schoolLogos?.length > 0 && (
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
      {course.courseDescription && (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4">
            {/* 标题部分 */}
            <div className="mb-16 text-center" data-aos="fade-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {course.courseDescription.title}
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                {course.courseDescription.subtitle}
              </p>
              <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
            </div>

            {/* 课程内容 */}
            {course.courseDescription.courseOverview && (
              <div className="space-y-12" data-aos="fade-up">
                {/* 前置描述 - 卡片式设计 */}
                <div className="grid gap-8">
                  {course.courseDescription.courseOverview.descriptionBeforeFeature?.map(
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

                {/* 关键特性 - 渐变玻璃效果 */}
                {course.courseDescription.courseOverview.features && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl opacity-30" />
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50">
                      <h3 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {course.courseDescription.courseOverview.featureTitle}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {course.courseDescription.courseOverview.features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
                            >
                              <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
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

                {/* 后置描述 - 带引号装饰 */}
                <div className="grid gap-8 relative">
                  {course.courseDescription.courseOverview.descriptionAfterFeature?.map(
                    (paragraph, index) => (
                      <div
                        key={index}
                        className="relative pl-12 border-l-4 border-blue-500/20"
                      >
                        <div className="absolute left-0 top-0 text-6xl font-bold text-blue-500/20 -translate-x-12 -translate-y-4">
                          “
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* 主段落 - 强调样式 */}
            <div
              className="mt-16 max-w-4xl mx-auto text-center"
              data-aos="fade-up"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform -rotate-2 rounded-xl" />
                <p className="relative text-xl text-gray-800 leading-relaxed font-medium px-8 py-6">
                  {course.courseDescription.paragraph}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Features Section */}
      {course.coreFeatures?.sections?.length > 0 && (
        <section className="py-16 border-b border-gray-200">
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
                      {section.list && (
                        <ul className="space-y-4">
                          {section.list.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start text-gray-700"
                            >
                              <svg
                                className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
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

      {/* Course Structure Section */}
      {course.courseStructureOverview?.overview?.length > 0 && (
        <section className="py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              {course.courseStructureOverview.title}
            </h2>
            <div className="space-y-16">
              {course.courseStructureOverview.overview.map((section, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.leftTitle}
                    </h3>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.rightTitle}
                    </h3>
                    <ul className="list-disc pl-6 space-y-3">
                      {section.rightContent?.map((item, i) => (
                        <li key={i} className="text-gray-700 text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {course.whyChooseUs && (
        <section className="py-16 border-b border-gray-200">
          {/* Part A */}
          {course.whyChooseUs.partA?.content?.length > 0 && (
            <div className="max-w-7xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                {course.whyChooseUs.partA.title}
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-8">
                  <div className="relative h-[600px] rounded-2xl overflow-hidden">
                    <Image
                      src={course.whyChooseUs.partA.image1}
                      alt="Why choose us"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[1000px] rounded-2xl overflow-hidden">
                    <Image
                      src={course.whyChooseUs.partA.image2}
                      alt="Process"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-8">
                  {course.whyChooseUs.partA.content.map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Part B */}
          {course.whyChooseUs.partB?.contents?.length > 0 && (
            <div className="max-w-7xl mx-auto mb-20">
              <div className="grid grid-cols-2 gap-16 items-center">
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
          {course.whyChooseUs.partC?.list?.length > 0 && (
            <div className="max-w-7xl mx-auto mb-20 px-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
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
                            className="w-5 h-5 text-blue-600"
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
          {course.whyChooseUs.partD?.table && (
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                {course.whyChooseUs.partD.title}
                <div className="mt-4 h-1.5 bg-blue-600 w-24 mx-auto rounded-full" />
              </h2>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200/50">
                    <thead className="bg-blue-600">
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
                          className="hover:bg-blue-50/50 transition-colors"
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="px-8 py-5 text-gray-800 text-lg font-medium"
                            >
                              {j === 0 ? (
                                <span className="text-blue-600 font-semibold">
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

      {/* Custom Course Feature */}
      {course.customCourseFeature?.title && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              {course.customCourseFeature.title}
            </h2>
            {course.customCourseFeature?.description && (
              <div className="grid grid-cols-3 grid-rows-2 gap-6 mb-16 min-h-[600px]">
                {/* 描述段落1+2 */}
                <div className="col-span-1 row-span-1 p-6">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {course.customCourseFeature.description[0]}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-4">
                    {course.customCourseFeature.description[1]}
                  </p>
                </div>

                {/* 图片1 */}
                <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={course.customCourseFeature.images[0]}
                    alt="Step 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* 图片2（跨两行） */}
                <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={course.customCourseFeature.images[1]}
                    alt="Process Overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* 描述段落3+4（合并单元格） */}
                <div className="col-span-2 row-span-1 p-6 flex gap-6">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {course.customCourseFeature.description[2]}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mt-4">
                      {course.customCourseFeature.description[3]}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Course Feature - 步骤流程 */}
            {course.customCourseFeature?.steps && (
              <div className="max-w-4xl mx-auto">
                <div className="relative space-y-12">
                  {/* 时间线竖线 */}
                  <div
                    className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent"
                    aria-hidden="true"
                  ></div>

                  {course.customCourseFeature.steps.map((step) => (
                    <div
                      key={step.step}
                      className="group relative flex gap-6 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      {/* 步骤指示器 */}
                      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-400 text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110">
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
            {course.customCourseFeature?.extraDescription && (
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
      {course.resources?.packages?.length > 0 && (
        <section className="py-16">
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
                    <h3 className=" font-semibold text-gray-900">
                      {pkg.title}
                    </h3>
                    {pkg.desc && (
                      <p className="mt-1 text-sm text-gray-500 font-medium">
                        {pkg.desc}
                      </p>
                    )}
                  </div>

                  {/* 悬浮装饰点 */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-600/20"></div>
                </div>
              ))}
            </div>

            {/* 渐变背景装饰 */}
            <div
              className="absolute inset-x-0 -bottom-32 -top-48 bg-gradient-to-b from-blue-50/30 to-transparent -z-10"
              aria-hidden="true"
            ></div>
          </div>
        </section>
      )}

      {/* Course Structure Section */}
      {course.courseStructure && (
        <CourseStructure data={course.courseStructure} />
      )}

      {/* Related Courses */}
      {course.relatedCourses?.length > 0 && (
        <section className="py-16 border-t border-gray-200">
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
                  <ArrowRight className="w-8 h-8 p-2 rounded-full bg-blue-50 ml-auto" />
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
