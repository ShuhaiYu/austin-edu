"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext, Fragment } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../../../data/courses_content";
import Image from "next/image";
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

export const CourseContent = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = coursesContent[lang].content;

  // 箭头连接组件 - 使用arrow.png图片，隐藏在移动端
  const ArrowConnection = () => (
    <div className="hidden lg:flex items-center justify-center flex-grow px-4 relative z-30">
      <div className="w-full h-6 relative">
        <Image
          src="/courses/content/arrow.png"
          alt="Arrow Connection"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <section className="mb-16">
      {/* 标题部分 with decoration */}
      <div className="w-full mb-12 lg:mb-16 relative overflow-hidden">
        {/* decoration svg2 in the top-right - 响应式调整 */}
        <div
          className="
      absolute top-0 right-0 z-0 pointer-events-none
      w-12 h-12         /* 移动端更小 */
      sm:w-16 sm:h-16   /* 小屏幕 */
      md:w-24 md:h-24   /* 中屏幕 */
      lg:w-32 lg:h-32   /* 大屏幕原尺寸 */
    "
        >
          <Image
            src="/decoration/2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* 原内容提到上层 */}
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <h3 className="text-lg sm:text-xl text-muted-foreground mb-4 lg:mb-6">
            {t.subtitle}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t.description}
          </p>
        </div>
      </div>

      {/* 功能卡片 - 响应式布局 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mb-16 lg:mb-24">
        {t.features.slice(0, 4).map((feature, index) => {
          const [title, desc] = feature.split("; ");
          return (
            <div
              key={`feature-top-${index}`}
              className={`
          /* 移动端和小屏幕全宽 */
          col-span-1
          /* 中屏幕双列 */
          sm:col-span-1
          /* 大屏幕保持原布局 */
          ${index !== 2 ? "lg:col-span-2" : "lg:col-span-2 lg:col-start-2"}
          transition-all 
        `}
            >
              <Card className="p-4 lg:p-6 h-full bg-white shadow-lg rounded-xl lg:rounded-[2rem] border border-gray-200 relative min-h-[250px] lg:min-h-[300px]">
                {/* 背景装饰图片 - 响应式调整 */}
                <div className="absolute bottom-0 right-0 h-2/3 w-auto aspect-square">
                  <Image
                    src={`/courses/content/Course-${index + 1}.png`}
                    alt="Course Feature Background"
                    width={240}
                    height={240}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* 内容 */}
                <div className="relative z-10 pt-2 lg:pt-4">
                  <h4 className="text-lg lg:text-xl font-bold mb-2">{title}</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">{desc}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* 年级Tabs */}
      <Tabs defaultValue="y1-y6" className="mb-16">
        {/* Tab导航带箭头 - 响应式调整 */}
        <div className="relative mb-12 lg:mb-16">
          <TabsList className="flex w-full bg-transparent p-0 h-auto justify-between lg:justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
            {t.gradeTabs.map((tab, index) => (
              <Fragment key={`bottom-tab-${tab.value}`}>
                <div className="flex items-center w-full lg:w-auto">
                  {/* Tab 按钮 */}
                  <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
                    <TabsTrigger
                      value={tab.value}
                      className="relative data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:text-lg lg:data-[state=active]:text-xl hover:cursor-pointer
                 text-base lg:text-lg w-full lg:w-auto
                min-w-[120px] lg:min-w-[180px] mx-auto flex justify-center bg-background px-4 lg:px-6 py-2
                /* 激活时启用伪元素 */
      data-[state=active]:after:content-['']
      data-[state=active]:after:absolute
      data-[state=active]:after:left-0
      data-[state=active]:after:right-0
      data-[state=active]:after:-bottom-3 lg:data-[state=active]:after:-bottom-5
      data-[state=active]:after:h-1 lg:data-[state=active]:after:h-2
      data-[state=active]:after:bg-primary
                  "
                    >
                      {tab.label}
                    </TabsTrigger>
                  </div>
                </div>
                {/* 箭头连接 - 只在大屏幕显示，不在最后一个tab后显示 */}
                {index < t.gradeTabs.length - 1 && <ArrowConnection />}
              </Fragment>
            ))}
          </TabsList>
        </div>

        {/* 内容区域 */}
        {t.gradeContents.map((grade) => (
          <TabsContent
            key={grade.value}
            value={grade.value}
            className="space-y-12 lg:space-y-16 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[4rem]">
                {grade.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {grade.description}
              </p>
            </div>
            {grade.contents.map((content, index) => (
              <div
                key={`${grade.value}-content-${index}`}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* 文字描述 */}
                <div className="w-full lg:w-1/2 space-y-4 lg:pr-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 lg:p-3 rounded-full bg-primary/10 text-primary">
                      {content.icon === "book" && <BookOpen size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "repeat" && <Repeat size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "check" && <Check size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "test" && <TestTube size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "communication" && (
                        <MessageCircle size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "graduation" && (
                        <GraduationCap size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "school" && <School size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "compass" && <Compass size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "file-text" && <FileText size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "sliders-horizontal" && (
                        <SlidersHorizontal size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "users" && <Users size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "clipboard-list" && (
                        <ClipboardList size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "bar-chart-2" && (
                        <BarChart2 size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "target" && <Target size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "list-checks" && (
                        <ListChecks size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "chalkboard" && (
                        <Presentation size={20} className="lg:w-6 lg:h-6" />
                      )}
                      {content.icon === "clock" && <Clock size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "award" && <Award size={20} className="lg:w-6 lg:h-6" />}
                      {content.icon === "calendar" && <Calendar size={20} className="lg:w-6 lg:h-6" />}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold">{content.title}</h3>
                  </div>
                  <p className="mt-6 lg:mt-8 text-muted-foreground leading-relaxed lg:leading-[2rem] text-sm sm:text-base">
                    {content.description}
                  </p>
                </div>

                {/* 图片 */}
                <div className="w-full lg:w-1/2 relative aspect-[3/2] rounded-xl lg:rounded-[2rem] overflow-hidden shadow-xl lg:shadow-2xl">
                  <Image
                    src={content.image || "https://placehold.co/600x400"}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </TabsContent>
        ))}

        {/* 底部Tab导航带箭头 - 响应式调整 */}
        <div className="relative mb-12 lg:mb-16">
          <TabsList className="flex w-full bg-transparent p-0 h-auto justify-between lg:justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
            {t.gradeTabs.map((tab, index) => (
              <Fragment key={`bottom-tab-${tab.value}`}>
                <div className="flex items-center w-full lg:w-auto">
                  {/* Tab 按钮 */}
                  <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
                    <TabsTrigger
                      value={tab.value}
                      className="relative data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:text-lg lg:data-[state=active]:text-xl hover:cursor-pointer
                 text-base lg:text-lg w-full lg:w-auto
                min-w-[120px] lg:min-w-[180px] mx-auto flex justify-center bg-background px-4 lg:px-6 py-2
                /* 激活时启用伪元素 */
      data-[state=active]:after:content-['']
      data-[state=active]:after:absolute
      data-[state=active]:after:left-0
      data-[state=active]:after:right-0
      data-[state=active]:after:-top-3 lg:data-[state=active]:after:-top-5
      data-[state=active]:after:h-1 lg:data-[state=active]:after:h-2
      data-[state=active]:after:bg-primary
                  "
                    >
                      {tab.label}
                    </TabsTrigger>
                  </div>
                </div>
                {/* 箭头连接 - 只在大屏幕显示 */}
                {index < t.gradeTabs.length - 1 && <ArrowConnection />}
              </Fragment>
            ))}
          </TabsList>
        </div>
      </Tabs>

      {/* 功能卡片 - 响应式布局 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mb-16 lg:mb-24">
        {t.features.slice(4, 6).map((feature, index) => {
          const [title, desc] = feature.split("; ");
          return (
            <div
              key={`feature-bottom-${index}`}
              className={`
          /* 移动端和小屏幕全宽 */
          col-span-1
          /* 中屏幕双列 */
          sm:col-span-1
          /* 大屏幕保持原布局 */
          ${index !== 2 ? "lg:col-span-2" : "lg:col-span-2 lg:col-start-2"}
          transition-all 
        `}
            >
              <Card className="p-4 lg:p-6 h-full bg-white shadow-lg rounded-xl lg:rounded-[2rem] border border-gray-200 relative min-h-[250px] lg:min-h-[300px]">
                {/* 背景装饰图片 */}
                <div className="absolute bottom-0 right-0 h-2/3 w-auto aspect-square">
                  <Image
                    src={`/courses/content/Course-${index + 5}.png`}
                    alt="Course Feature Background"
                    width={240}
                    height={240}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* 内容 */}
                <div className="relative z-10 pt-2 lg:pt-4">
                  <h4 className="text-lg lg:text-xl font-bold mb-2">{title}</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">{desc}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};