import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { homeContent } from "@/app/content";
import Link from "next/link";
import BirdDecoration from "@/components/BirdDecoration";

export default function Features() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = homeContent[lang].features;
  const { stats, features } = t;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* 使用BirdDecoration替换装饰SVG */}
      <BirdDecoration bird="2" position="-top-4 right-0 md:-top-8 md:right-4" />

      {/* 上半部分 */}
      <div className="grid xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
        {/* 左侧统计卡片 */}
        <div className="flex flex-row items-start justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-8 relative md:min-h-[400px] px-2 sm:px-4 md:px-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative transition-all duration-300 hover:-translate-y-2 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-none"
              style={{
                // 高低错落 - 移动端减少偏移量
                marginTop: i === 0 ? "1rem" : i === 1 ? "-0.5rem" : "1.5rem",
                zIndex: 3 - i,
              }}
            >
              <div className="relative">
                {/* 图片容器 - 移动端优化尺寸 */}
                <Image
                  src={`/home/section bg${i + 1}.png`}
                  alt="Background"
                  width={494}
                  height={652}
                  className="object-contain drop-shadow-lg rounded-2xl sm:rounded-3xl md:rounded-4xl w-full h-auto"
                  quality={95}
                  priority={true}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 右侧文字区 */}
        <div className="space-y-4 sm:space-y-6 mx-auto px-4 sm:px-6 xl:px-0">
          <div className="text-center">
            <h2 className="font-bold leading-tight">
              {/* 行1: "What makes over" - 移动端优化字体大小 */}
              <div className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-lg 2xl:text-xl mb-1 sm:mb-2">
                {lang === "zh" ? "为什么超过" : "What makes over"}{" "}
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl">
                  10,000
                </span>{" "}
                {lang === "zh" ? "名学生选择" : "students choose"}
              </div>

              {/* 行2: "AUSTIN EDUCATION" */}
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl">
                AUSTIN EDUCATION
              </div>
            </h2>
          </div>

          <ul className="text-gray-600 list-disc list-outside pl-4 space-y-1 sm:space-y-2 text-left w-full sm:w-4/5 xl:w-full mx-auto text-xs sm:text-sm md:text-base xl:text-sm">
            {t.bullets.map((line, i) => (
              <li key={i} className="leading-relaxed">
                {line}
              </li>
            ))}
          </ul>

          <div className="flex justify-center xl:justify-start pt-2 sm:pt-4">
            <Link href="/achievements">
              <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8">
                {t.achievementsButton}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Austin */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 py-6 sm:py-8 w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        {/* 使用BirdDecoration替换左上角装饰 */}
        <BirdDecoration
          bird="3"
          position="-top-20 sm:-top-32 md:-top-40 -left-5 sm:-left-8 md:-left-10"
        />

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
          {t.whyTitle}
        </h2>
        <p className="text-xs sm:text-sm md:text-base max-w-5xl mx-auto leading-relaxed sm:leading-[2rem] px-4 sm:px-0">
          {t.whyDesc}
        </p>
      </div>

      {/* 功能卡片 */}
      <div className="flex flex-col xl:flex-row gap-8 sm:gap-12 md:gap-16 xl:gap-24 justify-center items-center px-4 sm:px-6 md:px-8 xl:px-0">
        {t.features.map((feat, i) => (
          <div
            key={i}
            className="
              relative 
              bg-white 
              rounded-2xl sm:rounded-3xl 
              shadow-lg sm:shadow-xl md:shadow-2xl 
              p-2 
              pt-12 sm:pt-14 md:pt-16 
              w-full sm:w-[280px] md:w-[300px]
              overflow-visible
              transition-all duration-300 hover:-translate-y-2
              min-h-[350px] sm:min-h-[380px] md:min-h-[400px]
            "
          >
            {/* 图标容器 - 移动端优化尺寸 */}
            <div
              className="
                absolute 
                -top-6 sm:-top-7 md:-top-8 
                left-1/2 
                transform 
                -translate-x-1/2 
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                bg-primary 
                rounded-full 
                flex 
                items-center 
                justify-center
                shadow-lg
              "
            >
              <Image
                src={feat.icon}
                width={32}
                height={32}
                alt="Icon"
                className="p-1 sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]"
              />
            </div>

            {/* 卡片内容 */}
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center mx-auto line-clamp-2 whitespace-pre-wrap leading-tight">
                {feat.title}
              </h3>
              <p className="text-gray-600 mb-8 sm:mb-10 md:mb-12 text-center text-sm sm:text-base leading-relaxed">
                {feat.desc}
              </p>
            </div>

            <div
              className="absolute 
                bottom-12 sm:bottom-14 md:bottom-16 
                left-1/2
                transform
                -translate-x-1/2"
            >
              <Link href={feat.buttonLink}>
                <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8">
                  {feat.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
