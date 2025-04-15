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
        {t.features.map((feature, index) => {
          const [title, desc] = feature.split(': ');
          return (
            <div 
              key={title}
              className={`
                ${index !== 2 ? 'col-span-2' : 'col-span-2 col-start-2'}
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
      <Tabs defaultValue="y1-y6">
        {/* Tab导航带中间蓝线 */}
        <div className="relative mb-12">
          <TabsList className="grid grid-cols-3 relative bg-transparent gap-x-8 p-0 h-auto">
            {t.gradeTabs.map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-[2rem] py-6 text-lg border border-gray-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1/3 h-px bg-blue-500 mx-auto" />
          </div>
        </div>

        {/* 内容区域 */}
        {t.gradeContents.map((grade) => (
          <TabsContent key={grade.value} value={grade.value} className="space-y-16">
            {grade.contents.map((content, index) => (
              <div 
                key={content.title}
                className={`grid grid-cols-2 gap-16 items-center ${
                  index % 2 === 0 ? '' : 'flex-row-reverse'
                }`}
              >
                {/* 文字描述 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      {content.icon === 'book' && <BookOpenText size={24} />}
                      {content.icon === 'graduation' && <GraduationCap size={24} />}
                      {content.icon === 'school' && <School size={24} />}
                    </div>
                    <h3 className="text-2xl font-bold">{content.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{content.description}</p>
                </div>

                {/* 图片 */}
                <div className="relative h-96 rounded-[2rem] overflow-hidden shadow-lg">
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
      </Tabs>
    </section>
  );
};