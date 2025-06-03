import { useContext } from "react";
import Image from "next/image";
import { LangContext } from "@/app/layout";
import { Button } from "./ui/button";
import { homeContent } from "@/app/content";

export default function Hero() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = homeContent[lang].hero;

  // 生成左右侧独立图片数组
  const leftImageNumbers = [1, 3, 6, 8]; 
  const rightImageNumbers = [2, 4, 5, 7, 9]; 

  const leftImages = leftImageNumbers.map(n => 
    `/home/hero_carousel/${n}.png`
  );

  const rightImages = rightImageNumbers.map(n => 
    `/home/hero_carousel/${n}.png`
  );

  // 为了无缝循环，复制一遍图片数组
  const duplicatedLeftImages = [...leftImages, ...leftImages];
  const duplicatedRightImages = [...rightImages, ...rightImages];

  return (
    <>


      <section className="container py-2">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 左侧文字区域 */}
          <div className="space-y-6">
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
              <Button size="lg" className="px-8">
                {content.getStarted}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                {content.contact}
              </Button>
            </div>
          </div>

          {/* 右侧双列滚动容器 */}
          <div className="relative w-full aspect-[600/600]">
            {/* 左侧列 - 向上滚动 */}
            <div className="absolute left-0 w-1/2 h-full z-10">
              <div className="scroll-container h-full">
                <div className="scroll-up flex flex-col gap-8">
                  {duplicatedLeftImages.map((src, index) => (
                    <div key={`left-${index}`} className="flex-shrink-0 mb-8">
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={src}
                          alt={`Carousel Image ${index + 1}`}
                          width={600}
                          height={450}
                          unoptimized
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
                <div className="scroll-down flex flex-col gap-8">
                  {duplicatedRightImages.map((src, index) => (
                    <div key={`right-${index}`} className="flex-shrink-0 mb-8">
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={src}
                          alt={`Carousel Image ${index + 1}`}
                          width={600}
                          height={450}
                          unoptimized
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