import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { homeContent } from "@/app/content";

export default function Features() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = homeContent[lang].features;
  const { stats, features } = t;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* decorative SVG in the top-right */}
      <div
        className="absolute top-0 right-0 z-0 pointer-events-none
       w-24 h-24       /* 默认手机上 6rem × 6rem */
    sm:w-32 sm:h-32 /* ≥640px 时 8rem × 8rem */
    md:w-48 md:h-48 /* ≥768px 时 12rem × 12rem */
    "
      >
        <Image src="/decoration/2.svg" alt="" width={200} height={200} />
      </div>
      {/* 上半部分 */}
      <div className="grid xl:grid-cols-2 gap-12 mb-20">
        {/* 左侧统计卡片 */}
        <div className="flex flex-row items-start justify-center gap-2 sm:gap-8 relative md:min-h-[400px]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative transition-all duration-300 hover:-translate-y-2"
              style={{
                // 高低错落
                marginTop: i === 0 ? "2rem" : i === 1 ? "-1rem" : "3rem",
                zIndex: 3 - i,
              }}
            >
              <div className="relative">
                {/* 图片容器 */}
                <Image
                  src={`/home/section bg${i + 1}.svg`}
                  alt="Background"
                  width={247}
                  height={326}
                  className="object-contain drop-shadow-lg"
                />
                {/* 文字内容 */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-4 xl:p-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-2 mt-4 md:mt-6 2xl:mt-0 text-white">
                    {stat.num}
                  </div>
                  <div className="h-[2px] w-16 bg-white mb-4 opacity-100" />
                  <div className="text-center">
                    {stat.text.map((line, j) => (
                      <div
                        key={j}
                        className="text-[10px] sm:text-[12px] xl:text-lg font-medium text-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* 右侧文字区 */}
        <div className="space-y-6 mx-auto">
          <div className="text-center">
            <h2 className="font-bold leading-tight">
              {/* 行1: "What makes over" */}
              <div className="text-sm sm:text-lg lg:text-2xl xl:text-lg 2xl:text-xl mb-2">
                {lang === "zh" ? "为什么超过" : "What makes over"}{" "}
                <span className="text-2xl sm:text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl">
                  10,000
                </span>{" "}
                {lang === "zh" ? "名学生选择" : "students choose"}
              </div>

              {/* 行2: "AUSTIN EDUCATION" */}
              <div className="text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl">
                AUSTIN EDUCATION
              </div>
            </h2>
          </div>

          <ul className="text-gray-600 list-disc list-outside pl-4 space-y-2 text-left w-2/3 xl:w-full mx-auto text-sm md:text-base xl:text-sm">
            {t.bullets.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <div className="flex justify-center xl:justify-start">
            <Button size="lg">{t.achievementsButton}</Button>
          </div>
        </div>
      </div>

      {/* Why Choose Austin */}
      <div className="relative z-10 text-center mb-16 py-8 w-[80%] mx-auto">
        {/* 左上角装饰 */}
        <div className="absolute -top-40 md:-top-20 -left-10 z-0 pointer-events-none">
          <Image src="/decoration/3.svg" alt="" width={150} height={150} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase">
          {t.whyTitle}
        </h2>
        <p className="text-sm md:text-base max-w-4xl mx-auto">{t.whyDesc} </p>
      </div>

      {/* 功能卡片 */}
      {/* 网格布局：3列，卡片居中 */}
      <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 justify-center items-center">
        {t.features.map((feat, i) => (
          <div
            key={i}
            className="
              relative 
              bg-white 
              rounded-3xl 
              shadow-2xl 
              p-2 
              pt-16 
              w-[300px]
              overflow-visible
              transition-all duration-300 hover:-translate-y-2
              min-h-[400px]
            "
          >
            {/* 
              图标容器：绝对定位在卡片顶部中央，负top值让一半露出在卡片外 
              w-16 h-16 => 4rem x 4rem
            */}
            <div
              className="
                absolute 
                -top-8 
                left-1/2 
                transform 
                -translate-x-1/2 
                w-16 
                h-16 
                bg-primary 
                rounded-full 
                flex 
                items-center 
                justify-center
                
              "
            >
              <Image
                src={feat.icon}
                width={40}
                height={40}
                alt="Icon"
                className="p-1"
              />
            </div>

            {/* 卡片内容 */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center mx-auto line-clamp-2 whitespace-pre-wrap">
                {feat.title}
              </h3>
              <p className="text-gray-600 mb-12 text-center ">{feat.desc}</p>

              {/* <div className="flex justify-center">
                <Button>{lang === "zh" ? "了解更多" : "Learn More"}</Button>
              </div> */}
            </div>

            <div
              className="absolute 
                bottom-16 
                left-1/2 
                transform 
                -translate-x-1/2 "
            >
              <Button size="lg">
                {lang === "zh" ? "了解更多" : "Learn More"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
