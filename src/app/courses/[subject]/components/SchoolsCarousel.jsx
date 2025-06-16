// app/courses/[subject]/SchoolsCarousel.jsx (客户端组件)
"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SchoolsCarousel({ schools, desc }) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  // 根据学校数量动态计算每个项目的基础宽度
  const getBasisClass = useMemo(() => {
    const schoolCount = schools.length;
    
    if (schoolCount >= 6) {
      return "basis-1/3 md:basis-1/6"; // 原来的样式：移动端3个，桌面端6个
    } else if (schoolCount === 5) {
      return "basis-1/3 md:basis-1/5"; // 移动端3个，桌面端5个
    } else if (schoolCount === 4) {
      return "basis-1/2 md:basis-1/4"; // 移动端2个，桌面端4个
    } else if (schoolCount === 3) {
      return "basis-1/3 md:basis-1/3"; // 移动端和桌面端都是3个
    } else if (schoolCount === 2) {
      return "basis-1/2 md:basis-1/2"; // 移动端和桌面端都是2个
    } else {
      return "basis-full"; // 只有1个时占满全宽
    }
  }, [schools.length]);

  // 当学校数量较少时，禁用轮播功能
  const shouldEnableCarousel = schools.length > 6;

  return (
    <div className="mb-16">
      <Carousel
        opts={{
          align: "start",
          loop: shouldEnableCarousel,
          // 当学校数量少于等于6个时，禁用拖拽
          watchDrag: shouldEnableCarousel,
        }}
        plugins={shouldEnableCarousel ? [plugin.current] : []}
        className="w-full px-6"
        onMouseEnter={shouldEnableCarousel ? plugin.current.stop : undefined}
        onMouseLeave={shouldEnableCarousel ? plugin.current.reset : undefined}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Featured in Top Schools
        </h3>
        <p className="text-gray-500 mb-8 text-center">{desc}</p>

        <CarouselContent className="-ml-1">
          {schools.map((school, index) => (
            <CarouselItem key={index} className={`pl-1 ${getBasisClass}`}>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-200 h-full flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-2 mx-auto">
                  <Image
                    src={`/courses/schools/${school.image}`}
                    alt={school.name}
                    fill
                    sizes="(max-width: 768px) 128px, 192px"
                    className="object-contain p-2"
                    quality={90}
                  />
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {school.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 只有当学校数量超过6个时才显示导航按钮 */}
        {shouldEnableCarousel && (
          <>
            <CarouselPrevious
              className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
              variant="ghost"
              size="lg"
            />
            <CarouselNext
              className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
              variant="ghost"
              size="lg"
            />
          </>
        )}
      </Carousel>
    </div>
  );
}