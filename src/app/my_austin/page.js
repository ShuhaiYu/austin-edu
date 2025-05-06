// src/app/my-austin/page.jsx
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
import ScaleCarousel from "@/components/ScaleCarousel";
import FAQ from "@/components/FAQ";
import { myAustinContent } from "./content";


const FeatureRow = ({ title, desc, index, lang, image }) => (
  <motion.section
    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      bounce: 0.1,
      duration: 2,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className={`py-16 flex flex-col ${
      index % 2 ? "md:flex-row-reverse" : "md:flex-row"
    } gap-8 items-center`}
  >
    <div className="md:w-1/2 relative">
      <Image
        src={image || "https://placehold.co/600x400"}
        alt={title || "Austin Education's Feature"}
        width={600}
        height={400}
      />
    </div>
    <div className="md:w-1/2 space-y-4 mx-12">
      {title && <h3 className="text-2xl font-bold">{title}</h3>}
      <p className="text-gray-600 whitespace-pre-line text-justify leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.section>
);

export default function MyAustinPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = myAustinContent[lang];

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
    <main className="container">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center max-w-2/3 mx-auto"
      >
        <h1 className="text-5xl font-bold mb-4 whitespace-pre-line">
          {content.hero.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {content.hero.desc}
        </p>
        <Button size="lg" asChild>
          <a
            href="https://lms.austinedu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.hero.button}
          </a>
        </Button>
      </motion.section>

      {/* First Slider */}
      <section className="py-16 relative">
        {/* 左侧装饰 */}
        <div
          className="
        absolute -top-1/4 left-0 z-0 pointer-events-none

        transform -translate-x-1/4
      "
        >
          <Image
            src="/decoration/3.svg"
            alt=""
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="mb-12 text-center w-1/2 mx-auto">
          <h2 className="text-3xl font-bold mb-4 whitespace-pre-line">
            {content.slider.title}
          </h2>
          <p className="text-gray-600">{content.slider.desc}</p>
        </div>
        <ScaleCarousel items={content.slider.items} />
      </section>

      {/* 3 Columns Section */}
      {content.sections.threeCol.map((section, index) => (
        <FeatureRow
          key={index}
          title={section.title}
          desc={section.desc}
          index={index}
          lang={lang}
          image={section.image}
        />
      ))}

      {/* Centered Section */}
      <motion.section
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.1,
          duration: 2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="py-16 text-center relative"
      >
        {/* 左侧装饰 */}
        <div
          className="
        absolute top-0 left-0 z-0 pointer-events-none

        transform -translate-x-1/4
      "
        >
          <Image
            src="/decoration/6.svg"
            alt=""
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="relative z-10">
          <div className="w-3/4 mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-8 whitespace-pre-line">
              {content.sections.centeredFeature1.title}
            </h2>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {content.sections.centeredFeature1.desc}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/my_austin/weekterm.png"
              alt="System Overview"
              width={800}
              height={400}
              className="rounded-lg mx-auto mb-8"
            />
          </div>
        </div>
      </motion.section>

      {/* 4 Columns Section */}
      {content.sections.fourCol.map((section, index) => (
        <FeatureRow
          key={index}
          title={section.title}
          desc={section.desc}
          index={index}
          lang={lang}
          image={section.image}
        />
      ))}

      {/* Final Centered Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.1,
          duration: 2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <div className="w-3/4 mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-8">
            {content.sections.centeredFeature2.title}
          </h2>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
            {content.sections.centeredFeature2.desc}
          </p>
        </div>
        <div className="max-w-4xl mx-auto ">
          <Image
            src="/my_austin/exam.png"
            alt="System Overview"
            width={800}
            height={400}
            className="rounded-lg mx-auto my-8"
          />
        </div>
      </motion.section>

      {/* Final Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <section className="py-16 relative ">
          {/* 右侧装饰 */}
          <div
            className="
        absolute -top-10 right-0 z-0 pointer-events-none

        transform -translate-x-1/4
      "
          >
            <Image
              src="/decoration/2.svg"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          {/* 背景容器 */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {content.finalCta.title}
            </h2>
            <p className="text-gray-600">
              {content.finalCta.desc}
            </p>
          </div>

          <div className="relative max-w-[1600px] mx-auto px-12 ">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  ...content.finalSlider.items,
                  ...content.finalSlider.items,
                ].map((item, index) => {
                  const isCenter = centerIndex === index;

                  return (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 "
                    >
                      <motion.div
                        className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 my-6 ${
                          isCenter ? "scale-105 z-10" : "scale-95 opacity-80"
                        }`}
                      >
                        {/* 背景图片容器 */}
                        <div className="absolute inset-0">
                          <Image
                            src="/my_austin/slider_bg.png"
                            alt="background"
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* 内容容器 */}
                        <div className="relative h-full flex flex-col p-4 bg-black/30 backdrop-blur-sm">
                          {/* 图片区域 */}
                          <div className="flex-1 relative mb-4">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </div>

                          {/* 文字区域 */}
                          <div className="text-center space-y-4">
                            <h3 className="text-lg font-bold text-white">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-200 line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
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
          </div>

          {/* 描述文本 */}
          <div className="flex flex-col items-center mt-6">
            {/* 上方的直线 */}
            <div className="h-28 w-1 bg-primary my-4" />

            {/* 描述文本 */}
            <div className="w-1/2 mx-auto text-center">
              <p className="text-gray-600 whitespace-pre-line text-lg italic">
                {content.finalSlider.toolDesc}
              </p>
            </div>

            {/* 下方的直线 */}
            <div className="h-28 w-1 bg-primary" />
          </div>

          {/* 行动按钮 */}
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a
                href="https://lms.austinedu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.hero.button}
              </a>
            </Button>
          </div>
        </section>
      </motion.div>
      <FAQ />
    </main>
  );
}
