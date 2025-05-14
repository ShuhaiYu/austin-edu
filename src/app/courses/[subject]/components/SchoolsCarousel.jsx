// app/courses/[subject]/SchoolsCarousel.jsx (客户端组件)
"use client";

import { useRef } from "react";
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

  return (
    <div className="mb-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full px-6"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Featured in Top Schools
        </h3>
        <p className="text-gray-500 mb-8 text-center">{desc}</p>

        <CarouselContent className="-ml-1">
          {schools.map((school, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/3 md:basis-1/6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-200 h-full flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-2 mx-auto">
                  <Image
                    src={`/courses/${school.image}`}
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

        {/* 自定义导航按钮 */}
        <CarouselPrevious
          className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          variant="ghost"
          size="lg"
        />
        <CarouselNext
          className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          variant="ghost"
          size="lg"
        />
      </Carousel>
    </div>
  );
}
