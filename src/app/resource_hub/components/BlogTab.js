// app/resource-hub/components/BlogTab.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { date } from "zod";

const content = {
  en: {
    // title: "Blog & Resources",
    interviews: "TOP Student Interviews",
    blogs: "Latest Blogs",
    readMore: "Read More →",
    students: [
      {
        name: "Jennifer",
        major: "Science",
        // image: "/images/student1.jpg"
        image: "https://placehold.co/600x400",
      },
      {
        name: "John",
        major: "Math",
        image: "https://placehold.co/600x400",
      },
      {
        name: "Sammy",
        major: "Science",
        image: "https://placehold.co/600x400",
      },
    ],
    posts: [
      {
        title: "VCE Study Strategies That Actually Work",
        desc: "Discover proven methods to boost your VCE scores",
        image: "https://placehold.co/600x400",
        date: "March 15, 2024",
      },
      {
        title: "Choosing Between Public and Private Schools",
        desc: "A comprehensive comparison guide for parents",
        image: "https://placehold.co/600x400",
        date: "September 20, 2024",
      },
      {
        title: "Mastering Time Management in Year 12",
        desc: "Essential tips for balancing study and life",
        image: "https://placehold.co/600x400",
        date: "October 5, 2024",
      },
    ],
    checkMore: "Check More",
  },
  zh: {
    // title: "博客与资源中心",
    interviews: "优秀学生访谈",
    blogs: "最新博客文章",
    readMore: "阅读全文 →",
    students: [
      {
        name: "Jennifer",
        major: "科学系",
        image: "https://placehold.co/600x400",
      },
      {
        name: "John",
        major: "数学系",
        image: "https://placehold.co/600x400",
      },
      {
        name: "Sammy",
        major: "科学系",
        image: "https://placehold.co/600x400",
      },
    ],
    posts: [
      {
        title: "真正有效的VCE学习策略",
        desc: "探索提高VCE成绩的有效方法",
        image: "https://placehold.co/600x400",
        date: "三月 15, 2023",
      },
      {
        title: "公立与私立学校的选择",
        desc: "家长必备的全面对比指南",
        image: "https://placehold.co/600x400",
        date: "十月 20, 2023",
      },
      {
        title: "掌握12年级时间管理",
        desc: "平衡学习与生活的重要技巧",
        image: "https://placehold.co/600x400",
        date: "十月 5, 2023",
      },
    ],
    checkMore: "查看更多",
  },
};

export const BlogTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const [mainIndex, setMainIndex] = useState(0);
  const [activeStudent, setActiveStudent] = useState(0);

  return (
    <div className="bg-white rounded-xl p-16 shadow-lg">
      {/* Student Interviews Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">{t.interviews}</h2>

        {/* Main Featured Student */}
        <div className="relative h-[500px] w-full mb-8 rounded-[2rem] overflow-hidden">
          <Image
            src={t.students[activeStudent].image}
            alt={t.students[activeStudent].name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 p-0 bg-white/20 hover:bg-white/30"
                >
                  <Play className="w-8 h-8 fill-current" />
                </Button>
                <div className="text-white">
                  <h3 className="text-2xl font-bold uppercase">
                    {t.students[activeStudent].name}
                  </h3>
                  <p className="text-lg opacity-90 capitalize">
                    {t.students[activeStudent].major}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Carousel */}
        <div className="grid grid-cols-3 gap-6">
          {t.students.map((student, index) => (
            <div
              key={index}
              onClick={() => setActiveStudent(index)}
              className={`relative h-48 rounded-[2rem] overflow-hidden cursor-pointer transition-all ${
                index === activeStudent ? "ring-4 ring-primary" : ""
              }`}
            >
              <Image
                src={student.image}
                alt={student.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-lg font-medium text-center uppercase">
                  {student.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">{t.blogs}</h2>

        <Carousel
          opts={{
            align: "start",
            slidesToScroll: "auto",
          }}
          className="w-full"
        >
          <CarouselContent>
            {t.posts.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <article className="group relative transition-all h-full">
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    {/* 日期显示 */}
                    <div className="absolute left-0 top-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-muted text-primary px-3 py-1.5 text-sm">
                        {post.date}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 transition-opacity ">
                        {t.readMore}
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 bg-background h-[200px]">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground">{post.desc}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" variant="ghost" size="lg" />
          <CarouselNext className="-right-12" variant="ghost" size="lg" />
        </Carousel>

        {/* Check More Button */}
        <div className="flex justify-center my-12">
          <Button size="lg" className="px-12">
            {t.checkMore}
          </Button>
        </div>
      </section>
    </div>
  );
};
