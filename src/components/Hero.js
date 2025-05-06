import { useContext } from "react";
import Image from "next/image";
import { LangContext } from "@/app/layout";
import { Button } from "./ui/button";
import { homeContent } from "@/app/content";

export default function Hero() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  const content = homeContent[lang].hero

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

          <p className="leading-relaxed text-left lg:text-justify default-p">
            {content.description}
          </p>

          <div className="flex gap-4 items-center justify-start">
            <Button size="lg" className="px-8">
              {content.getStarted}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
            >
              {content.contact}
            </Button>
          </div>
        </div>

        {/* 右侧：多图叠加容器 */}
        <div className="relative w-full aspect-[600/600]">
          {/* 底层背景图：撑满容器 */}
          <div className="absolute z-0 right-1/3 top-10 transform translate-x-1/3 ">
            <Image
              src="/home/banner decor 2.png"
              alt="Background"
              width={479}
              height={615}
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>

          {/* 左上图片：占容器一半宽度 */}
          <div className="absolute top-5 left-0 w-4/9 z-10">
            <Image
              src="/home/banner image1.png"
              alt="Student"
              width={368}
              height={551}
              unoptimized
              className="object-cover w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* 右下图片：占容器一半宽度 */}
          <div className="absolute bottom-0 right-0 w-4/9 z-10">
            <Image
              src="/home/banner image2.png"
              alt="Classroom"
              width={368}
              height={551}
              unoptimized
              className="object-cover w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* 顶层装饰：占容器 3/4 宽度，可根据需要微调 */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 z-20">
            <Image
              src="/home/banner decor.png"
              alt="Decoration"
              width={358}
              height={217}
              unoptimized
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
