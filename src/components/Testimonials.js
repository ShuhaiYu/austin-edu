"use client";

import { useContext, useState, useEffect } from "react";
import { LangContext } from "@/app/layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const testimonialsData = [
  {
    name: "Alice",
    role: "Student",
    rating: 5,
    feedback_en: "Great tutoring service! I improved my scores a lot.",
    feedback_zh: "很棒的辅导服务！我的成绩提升显著。",
  },
  {
    name: "Bob",
    role: "Parent",
    rating: 4,
    feedback_en: "The tutors are very patient.",
    feedback_zh: "导师非常有耐心。",
  },
  {
    name: "Gloria",
    role: "Student",
    rating: 5,
    feedback_en: "Flexible schedule and personalized approach.",
    feedback_zh: "时间灵活，辅导方案也很个性化。",
  },
  {
    name: "David",
    role: "Parent",
    rating: 5,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
  {
    name: "Eva",
    role: "Student",
    rating: 4,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
  {
    name: "Frank",
    role: "Parent",
    rating: 5,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
  {
    name: "Helen",
    role: "Student",
    rating: 5,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
  {
    name: "Ivy",
    role: "Parent",
    rating: 5,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
  {
    name: "Jack",
    role: "Student",
    rating: 5,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
  {
    name: "Kelly",
    role: "Parent",
    rating: 5,
    feedback_en: "The tutors are very knowledgeable and professional.",
    feedback_zh: "导师非常有知识和专业。",
  },
];

export default function Testimonials() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  // Carousel 的 API 实例
  const [api, setApi] = useState(null)
  // 存储当前可见 slides 的中间索引
  const [centerIndex, setCenterIndex] = useState(null);

  useEffect(() => {
    if (!api) return;

    // 取当前选中的索引
    setCenterIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setCenterIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // 卸载时记得清理
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full px-4 py-12">
      
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="px-12"
      >
        <CarouselContent className="-ml-4">
          {testimonialsData.map((item, index) => {
            // 判断当前 item 是否是可见列表中的“居中 slide”
            const isCenter = centerIndex === index;
            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/1 md:basis-1/3 xl:basis-1/5" // 显示5个
              >
                <div className={`
                    p-2 
                    transition-transform duration-300 
                    ${isCenter ? "scale-105 z-10" : "scale-95"}
                  `}>
                  <div
                    className="bg-white rounded-xl shadow-sm p-6 h-64 transition-all duration-300 
                  group relative"
                  >
                    <div className="flex flex-col justify-between items-center h-full">
                      <p className="italic text-sm text-gray-600 line-clamp-4">
                        {lang === "zh" ? item.feedback_zh : item.feedback_en}
                      </p>
                      <div className="flex flex-col justify-between items-center">
                        <div className="font-semibold text-gray-900 text-sm">
                          - {item.name} (
                          {lang === "zh"
                            ? item.role === "Student"
                              ? "学生"
                              : "家长"
                            : item.role}
                          )
                        </div>
                        <div className="text-yellow-500 text-sm">
                          {"★".repeat(item.rating)}
                          {"☆".repeat(5 - item.rating)}
                        </div>
                        <Image
                          src={`/home/video-icon.png`}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                          priority
                        />
                      </div>
                    </div>
                    {/* 高亮边框 */}
                    <div
                      className="absolute inset-0 border-2 border-transparent 
                    group-hover:border-primary/20 rounded-xl transition-all"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* 自定义导航按钮 */}
        <CarouselPrevious
          className="left-0 -translate-x-1/2"
          variant="ghost"
          size="lg"
        />
        <CarouselNext
          className="right-0 translate-x-1/2"
          variant="ghost"
          size="lg"
        />
      </Carousel>
    </div>
  );
}
