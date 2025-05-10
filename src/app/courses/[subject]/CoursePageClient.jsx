"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import SchoolsCarousel from "./components/SchoolsCarousel";
import Image from "next/image";
import { CourseStructure } from "./components/CourseStructure";
import { ArrowRight } from "lucide-react";
import { CourseFeature } from "../components/CourseFeature";

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

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}

      <section className="py-16 border-b border-gray-200">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          {course.title}
        </h1>
        {/* Achievement Grid */}
        {course.heroSection?.achievements?.currentYear?.items?.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {course.heroSection.achievements.currentYear.items.map(
              (item, i) => (
                <div key={i} className="bg-blue-50 p-8 rounded-2xl text-center">
                  <div className="text-5xl font-bold text-blue-700 mb-2">
                    {item.number}
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.label}
                  </p>
                  {item.subtitle && (
                    <p className="text-sm text-gray-600 mt-2">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {/* Historical Achievements */}
        {course.heroSection?.achievements?.historical?.items?.length > 0 && (
          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl text-gray-900 mb-6">
              {course.heroSection.achievements.historical.range}
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Austin Education has developed:
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {course.heroSection.achievements.historical.items.map(
                (item, j) => (
                  <div
                    key={j}
                    className="text-center bg-blue-50 p-6 rounded-[2rem]"
                  >
                    {item.title && (
                      <p className="text-gray-800 font-medium">{item.title}</p>
                    )}
                    <div className="text-3xl font-bold text-blue-700">
                      {item.number}
                    </div>
                    <p className="text-gray-800 font-medium">{item.label}</p>
                    {item.subtitle && (
                      <p className="text-sm text-gray-600 mt-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Partner Schools */}
        {SCHOOL_IMAGES?.length > 0 && (
          <SchoolsCarousel schools={SCHOOL_IMAGES} />
        )}
      </section>

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
          </div>
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

            {/* 步骤流程（保持垂直排列） */}
            {course.customCourseFeature?.steps && (
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8">
                  {course.customCourseFeature.steps.map((step) => (
                    <div
                      key={step.step}
                      className="bg-white p-6 rounded-xl shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mt-2">{step.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Resources Section */}
      {course.resources?.packages?.length > 0 && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Resources
            </h2>

            <div className="grid grid-cols-3 gap-8">
              {course.resources.packages.map((pkg, i) => (
                <div
                  key={i}
                  className="flex bg-white p-4 rounded-full shadow-md"
                >
                  <div className="text-3xl mb-2">{pkg.icon}</div>
                  <div>
                    <div className="font-medium text-gray-900">{pkg.title}</div>
                    {pkg.desc && (
                      <div className="text-sm text-gray-600 mt-1">
                        {pkg.desc}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
