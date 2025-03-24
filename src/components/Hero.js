import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  
  // 多语言文本配置
  const content = {
    en: {
      titlePart1: "Melbourne's Leading",
      titlePart2: "All-In-One Tutorial Service",
      description: `Founded in 2013, Austin Education is dedicated to providing every student
      with the highest-quality educational resources, including exceptional
      teachers, premium materials, structured courses, and extensive practice,
      empowering each student to achieve success in the most efficient way.`,
      getStarted: "Get Started",
      contact: "Contact Us"
    },
    zh: {
      titlePart1: "墨尔本领先的",
      titlePart2: "一体化辅导服务",
      description: `奥斯汀教育成立于2013年，致力于为每位学生提供最优质的教育资源，
      包括卓越的教师团队、精品教材、系统化课程和丰富实践，
      帮助每位学生以最高效的方式取得成功。`,
      getStarted: "立即开始",
      contact: "联系我们"
    }
  }[lang];

  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* 文字内容区域 */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {content.titlePart1}
            <span className="text-primary block mt-2">{content.titlePart2}</span>
          </h1>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            {content.description}
          </p>

          <div className="flex gap-4 items-center justify-center"> 
            <Button size="lg" className="px-8">
              {content.getStarted}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 border-primary text-primary hover:bg-primary/10"
            >
              {content.contact}
            </Button>
          </div>
        </div>

        {/* 图片叠加区域 */}
        <div className="relative h-[600px] w-full">
          {/* 底层背景 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/home/banner decor 2.png"
              alt="Background"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* 左上图片 */}
          <div className="absolute top-0 left-0 w-1/2 z-10">
            <Image
              src="/home/banner image1.png"
              alt="Student"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-xl"
            />
          </div>

          {/* 右下图片 */}
          <div className="absolute bottom-0 right-0 w-1/2 z-10">
            <Image
              src="/home/banner image2.png"
              alt="Classroom"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-xl"
            />
          </div>

          {/* 顶层装饰 */}
          <div className="absolute top-0 left-0  z-20 w-3/4">
            <Image
              src="/home/banner decor.png"
              alt="Decoration"
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}