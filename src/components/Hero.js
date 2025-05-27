import { useContext, useRef } from "react";
import Image from "next/image";
import { LangContext } from "@/app/layout";
import { Button } from "./ui/button";
import { homeContent } from "@/app/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  const content = homeContent[lang].hero;

// 生成左右侧独立图片数组
const leftImageNumbers = [1, 3, 6, 8]; // 左侧图片编号
const rightImageNumbers = [2, 4, 5, 7, 9]; // 右侧图片编号

const leftImages = leftImageNumbers.map(n => 
  `/home/hero_carousel/${n}.png`
);

const rightImages = rightImageNumbers.map(n => 
  `/home/hero_carousel/${n}.png`
);


  return (
    <section className="container py-2">
      {/* 两列布局：左文字 + 右图 */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* 左侧文字区域 */}
        <div className="space-y-6">
          <h1
            className="font-bold leading-tight text-left
                    text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl;
                    whitespace-normal"
          >
            <span className="block">{content.title}</span>
          </h1>

          <p className="leading-relaxed default-p whitespace-break-spaces">
            {content.description}
          </p>

          <div className="flex gap-4 items-center justify-start">
            <Button size="lg" className="px-8">
              {content.getStarted}
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {content.contact}
            </Button>
          </div>
        </div>

        {/* 右侧双列轮播容器 */}
        <div className="relative w-full aspect-[600/600]">
          {/* 左侧列 - 主轮播 */}
          <div className="absolute left-0 w-1/2 h-full z-10 ">
            <Swiper
              direction="vertical"
              slidesPerView={"2"}
              spaceBetween={30}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              loop={true}
              speed={2000}
              modules={[Autoplay]}
              className="h-full"
            >
              {leftImages.map((src, index) => (
                <SwiperSlide key={`left-${index}`}>
                  <div className="relative h-full w-full ">
                    <Image
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      width={400}
                      height={300}
                      unoptimized
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 右侧列 - 覆盖轮播 */}
          <div className="absolute right-0 w-1/2 h-full z-20">
            <Swiper
              direction="vertical"
              slidesPerView={"2"}
              spaceBetween={30}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={2000}
              modules={[Autoplay]}
              className="h-full"
              initialSlide={5}
            >
              {rightImages.map((src, index) => (
                <SwiperSlide key={`right-${index}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      width={400}
                      height={300}
                      unoptimized
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
