"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext, Fragment } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
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

  // 箭头连接组件 - 使用arrow.png图片
  const ArrowConnection = () => (
    <div className="flex items-center justify-center flex-grow px-4 relative z-30">
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
      <div className="w-full mb-16 relative overflow-hidden">
        {/* decoration svg2 in the top-right */}
        <div
          className="
      absolute top-0 right-0 z-0 pointer-events-none
      w-16 h-16         /* 手机上 4rem */
      sm:w-24 sm:h-24   /* ≥640px 上 6rem */
      md:w-32 md:h-32   /* ≥768px 上 8rem */
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
          <h2 className="text-5xl font-bold mb-4">{t.title}</h2>
          <h3 className="text-xl text-muted-foreground mb-6">{t.subtitle}</h3>
          <p className="text-muted-foreground">{t.description}</p>
        </div>
      </div>

      {/* 功能卡片 */}
      <div className="grid grid-cols-5 gap-8 mb-24 ">
        {t.features.slice(0, 4).map((feature, index) => {
          const [title, desc] = feature.split("; ");
          return (
            <div
              key={`feature-top-${index}`}
              className={`
          ${index !== 2 ? "col-span-2" : "col-span-2 col-start-2"}
          transition-all 
        `}
            >
              <Card className="p-6 h-full bg-white shadow-lg rounded-[2rem] border border-gray-200 relative min-h-[300px]">
                {/* 背景装饰图片 */}
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
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl font-bold mb-2">{title}</h4>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* 年级Tabs */}
      <Tabs defaultValue="y1-y6" className="mb-16">
        {/* Tab导航带箭头 */}
        <div className="relative mb-16">
          <TabsList className="flex w-full bg-transparent p-0 h-auto justify-between items-center">
            {t.gradeTabs.map((tab, index) => (
              <Fragment key={`bottom-tab-${tab.value}`}>
                <div className="flex items-center">
                  {/* Tab 按钮 */}
                  <div className="relative z-10 flex-shrink-0">
                    <TabsTrigger
                      value={tab.value}
                      className="relative data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:text-xl hover:cursor-pointer
                 text-lg 
                min-w-[180px] mx-auto flex justify-center bg-background px-6
                /* 激活时启用伪元素 */
      data-[state=active]:after:content-['']
      data-[state=active]:after:absolute
      data-[state=active]:after:left-0
      data-[state=active]:after:right-0
      data-[state=active]:after:-bottom-5
      data-[state=active]:after:h-2
      data-[state=active]:after:bg-primary
                  "
                    >
                      {tab.label}
                    </TabsTrigger>
                  </div>
                </div>
                {/* 箭头连接 - 不在最后一个tab后显示 */}
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
            className="space-y-16 mb-16"
          >
            <div className="grid grid-cols-2 gap-16 items-center">
              <h2 className="text-5xl font-bold leading-[4rem]">
                {grade.title}
              </h2>
              <p className="text-muted-foreground">{grade.description}</p>
            </div>
            {grade.contents.map((content, index) => (
              <div
                key={`${grade.value}-content-${index}`}
                className={`flex flex-col gap-16 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 文字描述 */}
                <div className="w-1/2 space-y-4 pr-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
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
                    <h3 className="text-2xl font-bold ">{content.title}</h3>
                  </div>
                  <p className="mt-8 text-muted-foreground leading-[2rem]">
                    {content.description}
                  </p>
                </div>

                {/* 图片 */}
                <div className="w-1/2 relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-2xl">
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

        {/* 底部Tab导航带箭头 */}
        <div className="relative mb-16">
          <TabsList className="flex w-full bg-transparent p-0 h-auto justify-between items-center">
            {t.gradeTabs.map((tab, index) => (
              <Fragment key={`bottom-tab-${tab.value}`}>
                <div className="flex items-center">
                  {/* Tab 按钮 */}
                  <div className="relative z-10 flex-shrink-0">
                    <TabsTrigger
                      value={tab.value}
                      className="relative data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:text-xl hover:cursor-pointer
                 text-lg 
                min-w-[180px] mx-auto flex justify-center bg-background px-6
                /* 激活时启用伪元素 */
      data-[state=active]:after:content-['']
      data-[state=active]:after:absolute
      data-[state=active]:after:left-0
      data-[state=active]:after:right-0
      data-[state=active]:after:-top-5
      data-[state=active]:after:h-2
      data-[state=active]:after:bg-primary
                  "
                    >
                      {tab.label}
                    </TabsTrigger>
                  </div>
                </div>
                {index < t.gradeTabs.length - 1 && <ArrowConnection />}
              </Fragment>
            ))}
          </TabsList>
        </div>
      </Tabs>

      {/* 功能卡片 */}
      <div className="grid grid-cols-5 gap-8 mb-24 ">
        {t.features.slice(4, 6).map((feature, index) => {
          const [title, desc] = feature.split("; ");
          return (
            <div
              key={`feature-top-${index}`}
              className={`
          ${index !== 2 ? "col-span-2" : "col-span-2 col-start-2"}
          transition-all 
        `}
            >
              <Card className="p-6 h-full bg-white shadow-lg rounded-[2rem] border border-gray-200 relative min-h-[300px]">
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
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl font-bold mb-2">{title}</h4>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
