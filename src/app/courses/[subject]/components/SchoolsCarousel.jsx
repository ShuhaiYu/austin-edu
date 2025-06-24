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

  // 根据学校数量动态计算每个项目的基础宽度 - 更精细的响应式控制
  const getBasisClass = useMemo(() => {
    const schoolCount = schools.length;
    
    if (schoolCount >= 8) {
      return "basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"; // 超多学校：手机2个，平板3个，桌面6个
    } else if (schoolCount >= 6) {
      return "basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"; // 原来的样式：手机2个，平板3个，桌面6个
    } else if (schoolCount === 5) {
      return "basis-1/2 sm:basis-1/3 md:basis-1/5"; // 手机2个，平板3个，桌面5个
    } else if (schoolCount === 4) {
      return "basis-1/2 md:basis-1/4"; // 手机2个，桌面4个
    } else if (schoolCount === 3) {
      return "basis-1/2 sm:basis-1/3"; // 手机2个，平板以上3个
    } else if (schoolCount === 2) {
      return "basis-1/2"; // 手机和桌面都是2个
    } else {
      return "basis-full"; // 只有1个时占满全宽
    }
  }, [schools.length]);

  // 当学校数量较少时，禁用轮播功能
  const shouldEnableCarousel = schools.length > 6;

  return (
    <div className="mb-12 sm:mb-16">
      <Carousel
        opts={{
          align: "start",
          loop: shouldEnableCarousel,
          // 当学校数量少于等于6个时，禁用拖拽
          watchDrag: shouldEnableCarousel,
        }}
        plugins={shouldEnableCarousel ? [plugin.current] : []}
        className="w-full px-4 sm:px-6"
        onMouseEnter={shouldEnableCarousel ? plugin.current.stop : undefined}
        onMouseLeave={shouldEnableCarousel ? plugin.current.reset : undefined}
      >
        {/* 标题 - 响应式字体 */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Featured in Top Schools
        </h3>
        
        {/* 描述 - 响应式显示 */}
        {desc && (
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            {desc}
          </p>
        )}

        <CarouselContent className="-ml-1 sm:-ml-2">
          {schools.map((school, index) => (
            <CarouselItem key={index} className={`pl-1 sm:pl-2 ${getBasisClass}`}>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-center border border-gray-200 h-full flex flex-col items-center justify-center transition-all duration-200 hover:shadow-md hover:border-gray-300">
                {/* 学校Logo - 响应式尺寸 */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 sm:mb-3 mx-auto">
                  <Image
                    src={`/courses/schools/${school.image}`}
                    alt={school.name}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                    className="object-contain p-1 sm:p-2"
                    quality={90}
                  />
                </div>
                
                {/* 学校名称 - 响应式字体和行高 */}
                <span className="text-gray-700 font-medium text-xs sm:text-sm leading-tight text-center px-1">
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
              className="left-0 sm:left-2 top-1/2 -translate-x-1/2 sm:-translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              variant="ghost"
              size="sm"
            />
            <CarouselNext
              className="right-0 sm:right-2 top-1/2 translate-x-1/2 sm:translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              variant="ghost"
              size="sm"
            />
          </>
        )}
      </Carousel>
    </div>
  );
}