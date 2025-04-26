"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
import { motion } from "framer-motion";
import { Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const CourseFeature = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const features = coursesContent[lang].feature;

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-8 space-y-64">
        {features.map((feature, featureIndex) => (
          <div key={feature.title}>
            {/* Title & Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground text-3xl">
                {feature.subtitle}
              </p>
              <div className={`h-2 ${feature.color}  w-[150px] mx-auto mt-4`} />
            </div>

            {/* Advantage Cards */}
            <div
              className={`grid gap-2 ${
                feature.advantages.length === 1
                  ? "grid-cols-1"
                  : feature.advantages.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {feature.advantages.map((adv, index) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-background "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`bg-white shadow-lg flex items-center justify-center ${feature.textColor}`}
                    >
                      {adv.icon === "Presentation" && (
                        <Presentation className="w-24 h-24 p-2" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{adv.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional Button */}
            {feature.button && feature.button.text && (
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className={`font-medium bg-gradient-to-r ${feature.button.fromColor} ${feature.button.toColor} hover:brightness-110 transition`}
                >
                  {feature.button.text}
                </Button>
              </div>
            )}

            {/* Optional Carousel */}
            {feature.carousel?.images && (
              <div className="mt-12">
                <Carousel
                  opts={{
                    align: "center", // 改为从左侧开始对齐
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                  className="overflow-visible" // 允许内容溢出可见
                >
                  <CarouselContent className=" pr-[calc(16.6667%+16px)]">
                    {" "}
                    {/* 增加左右间距 */}
                    {feature.carousel.images.map((src, idx) => (
                      <CarouselItem
                        key={idx}
                        className="flex-shrink-0 basis-2/3 md:basis-1/3" // 调整基础宽度
                        style={{
                          paddingLeft: "16px", // 添加间距
                        }}
                      >
                        <Image
                          src={src}
                          alt={`${feature.title} slide ${idx + 1}`}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
