"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
import Image from "next/image";
import { BookOpenText, GraduationCap, School } from "lucide-react";

export const CourseContent = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = coursesContent[lang].content;

  return (
    <section className="mb-16">
      {/* 标题部分 */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-5xl font-bold mb-4">{t.title}</h2>
        <h3 className="text-xl text-muted-foreground mb-6">{t.subtitle}</h3>
        <p className="text-muted-foreground">{t.description}</p>
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
              <Card className="p-6 h-full bg-white shadow-lg rounded-[2rem] border border-gray-200">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-muted-foreground">{desc}</p>
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
                  className="data-[state=active]:text-primary data-[state=active]:border-none data-[state=active]:shadow-none data-[state=active]:text-xl hover:cursor-pointer
               text-lg 
              min-w-[180px] mx-auto flex justify-center
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
                      {content.icon === "book" && <BookOpenText size={24} />}
                      {content.icon === "graduation" && (
                        <GraduationCap size={24} />
                      )}
                      {content.icon === "school" && <School size={24} />}
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
                  className="data-[state=active]:text-primary data-[state=active]:border-none data-[state=active]:shadow-none data-[state=active]:text-xl hover:cursor-pointer
               text-lg 
              min-w-[180px] mx-auto flex justify-center
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
              <Card className="p-6 h-full bg-white shadow-lg rounded-[2rem] border border-gray-200">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-muted-foreground">{desc}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};
