import { useContext } from "react";
import Image from "next/image";
import { LangContext } from "@/app/layout";
import { Button } from "./ui/button";
import { homeContent } from "@/data/home_content";
import Link from "next/link";

export default function Hero() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = homeContent[lang].hero;

  // 生成左右侧独立图片数组
  const leftImageNumbers = [1, 3, 6, 8];
  const rightImageNumbers = [2, 4, 5, 7, 9];

  const leftImages = leftImageNumbers.map(
    (n) => `/home/hero_carousel/${n}.png`
  );

  const rightImages = rightImageNumbers.map(
    (n) => `/home/hero_carousel/${n}.png`
  );

  // 为了真正无缝循环，我们需要足够多的重复图片
  // 确保在任何时候视窗内都有完整的图片
  const extendedLeftImages = [
    ...leftImages,
    ...leftImages,
    ...leftImages,
    ...leftImages, // 4倍重复确保无缝
  ];

  const extendedRightImages = [
    ...rightImages,
    ...rightImages,
    ...rightImages,
    ...rightImages, // 4倍重复确保无缝
  ];

  return (
    <>
      <section className="container py-2">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 左侧文字区域 */}
          <div className="space-y-6">
            <p className="text-primary text-lg font-semibold my-0">
              Year 1 - Year 12
            </p>
            <h1
              className="font-bold leading-tight text-left
                      text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl
                      whitespace-normal"
            >
              <span className="block">{content.title}</span>
            </h1>

            <p className="leading-relaxed default-p whitespace-break-spaces">
              {content.description}
            </p>

            <div className="flex gap-4 items-center justify-start">
              <Link href="/resource_hub">
                <Button size="lg" className="px-8">
                  {content.getStarted}
                </Button>
              </Link>
              <Link href="/contact_us">
                <Button size="lg" variant="outline" className="px-8">
                  {content.contact}
                </Button>
              </Link>
            </div>
          </div>

          {/* 右侧双列滚动容器 */}
          <div className="relative w-full aspect-[600/600]">
            {/* 左侧列 - 向上滚动 */}
            <div className="absolute left-0 w-1/2 h-full z-10">
              <div className="scroll-container h-full">
                <div className="scroll-up-smooth flex flex-col gap-8">
                  {extendedLeftImages.map((src, index) => (
                    <div key={`left-${index}`} className="flex-shrink-0">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={src}
                          alt={`Carousel Image ${(index % leftImages.length) + 1}`}
                          width={600}
                          height={450}
                          priority={index < 6}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧列 - 向下滚动 */}
            <div className="absolute right-0 w-1/2 h-full z-20">
              <div className="scroll-container h-full">
                <div className="scroll-down-smooth flex flex-col gap-8">
                  {extendedRightImages.map((src, index) => (
                    <div key={`right-${index}`} className="flex-shrink-0">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={src}
                          alt={`Carousel Image ${(index % rightImages.length) + 1}`}
                          width={600}
                          height={450}
                          priority={index < 6}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
