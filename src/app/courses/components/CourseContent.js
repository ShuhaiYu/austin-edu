"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
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
      <div className="grid grid-cols-5 gap-8 mb-24">
        {t.features.slice(0, 4).map((feature, index) => {
          const [title, desc] = feature.split("; ");
          return (
            <div
              key={title}
              className={`
                ${index !== 2 ? "col-span-2" : "col-span-2 col-start-2"}
                transition-all hover:scale-105
              `}
            >
              <Card className="p-6 h-full bg-white shadow-lg rounded-[2rem] border border-gray-200 relative">
                {/* 序号标识 */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* 背景装饰圆圈 */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full" />
                <div className="absolute top-8 right-8 w-12 h-12 bg-primary/10 rounded-full" />
                
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
        {/* Tab导航带横线 */}
        <div className="relative mb-16">
          {/* 蓝色横线 */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500 transform -translate-y-1/2 z-0" />

          <TabsList className="flex w-full bg-transparent p-0 h-auto justify-between">
            {t.gradeTabs.map((tab, index) => (
              <div
                key={tab.value}
                className="relative z-10 bg-background px-4" // 添加背景色覆盖横线
              >
                <TabsTrigger
                  value={tab.value}
                  className="relative data-[state=active]:text-primary data-[state=active]:border-none data-[state=active]:shadow-none data-[state=active]:text-xl hover:cursor-pointer
               text-lg 
              min-w-[180px] mx-auto flex justify-center
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
              <h2 className="text-5xl font-bold">{grade.title}</h2>
              <p className="text-muted-foreground">{grade.description}</p>
            </div>
            {grade.contents.map((content, index) => (
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
                  <p className="text-muted-foreground">{content.description}</p>
                </div>

                {/* 图片 */}
                <div className="w-1/2 relative h-96 rounded-[2rem] overflow-hidden shadow-lg">
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </TabsContent>
        ))}
        {/* Tab导航带横线 */}
        <div className="relative mb-16">
          {/* 蓝色横线 */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500 transform -translate-y-1/2 z-0" />

          <TabsList className="flex w-full bg-transparent p-0 h-auto justify-between">
            {t.gradeTabs.map((tab, index) => (
              <div
                key={tab.value}
                className="relative z-10 bg-background px-4" // 添加背景色覆盖横线
              >
                <TabsTrigger
                  value={tab.value}
                  className="relative data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:text-xl hover:cursor-pointer
               text-lg 
              min-w-[180px] mx-auto flex justify-center
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
            ))}
          </TabsList>
        </div>
      </Tabs>

      {/* 功能卡片 */}
      <div className="grid grid-cols-5 gap-8 mb-24">
        {t.features.slice(4, 6).map((feature, index) => {
          const [title, desc] = feature.split("; ");
          return (
            <div
              key={title}
              className={`
                ${index !== 2 ? "col-span-2" : "col-span-2 col-start-2"}
                transition-all hover:scale-105
              `}
            >
              <Card className="p-6 h-full bg-white shadow-lg rounded-[2rem] border border-gray-200 relative">
                {/* 序号标识 */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12">
                  {String(index + 5).padStart(2, '0')}
                </div>
                
                {/* 背景装饰圆圈 */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full" />
                <div className="absolute top-8 right-8 w-12 h-12 bg-primary/10 rounded-full" />
                
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