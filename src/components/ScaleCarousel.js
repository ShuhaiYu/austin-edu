"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ScaleCarousel = ({ items }) => {
  const [api, setApi] = useState(null);
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
        {items.map((item, index) => {
          const isCenter = centerIndex === index;
          return (
            <CarouselItem
              key={index}
              className="pl-4 basis-full lg:basis-1/3"
            >
              <div
                className={`
                    p-2 
                    transition-transform duration-300 
                    ${isCenter ? "scale-105 z-10" : "scale-95 opacity-70"}
                  `}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
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
  );
};

export default ScaleCarousel;
