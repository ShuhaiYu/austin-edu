"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LangContext } from "@/app/layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import { myAustinContent } from "./my_austin_content";
import FAQ from "@/components/FAQ";
import { homeworkSystemFaqItems } from "@/data/faq_content";
import BirdDecoration from "@/components/BirdDecoration";

// 轮播图组件
const ImageSlider = ({ images }) => {
  const [api, setApi] = useState(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCenterIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setCenterIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full mx-auto mb-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-8">
          {images.map((image, index) => {
            const isCenter = centerIndex === index;
            return (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 flex justify-center items-center min-h-[350px]">
                  <div
                    className={`
                    relative rounded-lg overflow-hidden transition-transform duration-300
                    ${isCenter ? "scale-115 z-10" : "scale-90 opacity-80"}
                  `}
                  >
                    <Image
                      src={image}
                      alt={`Austin System Screenshot ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          className="-left-10 -translate-x-1/2"
          variant="ghost"
          size="lg"
        />
        <CarouselNext
          className="-right-10 translate-x-1/2"
          variant="ghost"
          size="lg"
        />
      </Carousel>
    </div>
  );
};

// 功能展示组件
const FeatureSection = ({ feature, index }) => {
  const { layout, title, subtitle, desc, subDesc, image, images } = feature;

  // 处理subDesc，将第一行作为标题，其余作为内容
  const processSubDesc = (subDesc) => {
    if (!subDesc) return null;
    
    const lines = subDesc.split('\n');
    const subTitle = lines[0].trim();
    const subContent = lines.slice(1).join('\n').trim();
    
    return {
      subTitle,
      subContent
    };
  };

  const subDescData = processSubDesc(subDesc);

  if (layout === "center") {
    return (
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 relative"
      >
        {/* 为center布局添加装饰鸟类 */}
        <BirdDecoration 
          bird="2" 
          position="top-0 right-0 md:top-4 md:right-12" 
        />
        
        <div className="text-center mb-8 relative z-10">
          <h3 className="text-3xl font-bold mb-12">{title}</h3>
        </div>
        <div className="max-w-4xl mx-auto mb-8 relative z-10">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              quality={100}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {desc}
          </p>
        </div>
      </motion.section>
    );
  }

  const isLeft = layout === "left";

  return (
    <motion.section
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-16 flex flex-col ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 items-center relative`}
    >
      {/* 为每个feature section添加不同的装饰鸟类 */}
      {index === 0 && (
        <BirdDecoration 
          bird="4" 
          position="top-4 left-4 md:top-8 md:left-8" 
        />
      )}
      {index === 1 && (
        <BirdDecoration 
          bird="5" 
          position="top-4 right-4 md:top-8 md:right-8" 
        />
      )}
      {index === 2 && (
        <BirdDecoration 
          bird="6" 
          position="bottom-4 left-4 md:bottom-8 md:left-8" 
        />
      )}

      {/* 图片部分 */}
      <div className="lg:w-1/2 relative z-10">
        {images ? (
          // 多张图片的情况 - 纵向展示
          <div className="space-y-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden "
              >
                <Image
                  src={img}
                  alt={`${title} ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          // 单张图片的情况
          <div className="relative rounded-lg overflow-hidden ">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>

      {/* 文字部分 */}
      <div className="lg:w-1/2 space-y-6 relative z-10">
        <div>
          <h3 className="text-3xl font-bold mb-12">{title}</h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {desc}
          </p>
        </div>

        {subDescData && (
          <div className="pt-6">
            <Separator className="mb-6" />
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              {subDescData.subTitle}
            </h4>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {subDescData.subContent}
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default function MyAustinPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = myAustinContent[lang];

  return (
    <main className="container mx-auto px-4 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center relative"
      >
        {/* Hero区域装饰鸟类 */}
        <BirdDecoration 
          bird="1" 
          position="top-8 right-8 md:top-16 md:right-16" 
        />
        <BirdDecoration 
          bird="3" 
          position="top-16 left-8 md:top-20 md:left-16" 
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            {content.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{content.hero.desc}</p>
          <h2 className="text-2xl font-semibold mb-12">
            {content.hero.subtitle}
          </h2>
          <Button size="lg" asChild>
            <a
              href="https://myaustin.com.au/login.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.hero.button}
            </a>
          </Button>
        </div>
      </motion.section>

      {/* 介绍文字 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 mb-4 text-center relative"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.intro.desc}
          </p>
        </div>
      </motion.section>

      {/* 轮播图片展示 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-16 pt-8"
      >
        <ImageSlider images={content.sliderImages} />
      </motion.section>

      {/* 功能展示部分 */}
      <div className="space-y-20">
        {content.features.map((feature, index) => (
          <FeatureSection key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      {/* 底部行动按钮 */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 text-center relative"
      >
        {/* 底部区域装饰鸟类 */}
        <BirdDecoration 
          bird="2" 
          position="top-4 right-8 md:top-8 md:right-16" 
        />
        <BirdDecoration 
          bird="4" 
          position="bottom-4 left-8 md:bottom-8 md:left-16" 
        />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-6">
            {lang === "en"
              ? "Ready to Transform Your Learning?"
              : "准备好改变你的学习方式了吗？"}
          </h3>
          <p className="text-lg text-gray-600 mb-8 whitespace-pre-line">
            {lang === "en"
              ? "Join thousands of students who are already using Austin's powerful homework system to achieve better results."
              : "已有数千名学生正在使用澳升高效的作业系统，提升学习成绩 \n—— 欢迎你也加入我们的行列！"}
          </p>
          <Button size="lg" asChild>
            <a
              href="https://myaustin.com.au/login.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.hero.button}
            </a>
          </Button>
        </div>
      </motion.section>

      {/* FAQ部分 */}
      <FAQ customFaqItems={homeworkSystemFaqItems}/>
    </main>
  );
}