"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export const CourseFeature = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const features = coursesContent[lang].feature;

  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 space-y-32 lg:space-y-64">
        {features.map((feature, featureIndex) => (
          <div key={feature.title}>
            {/* Title & Subtitle */}
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {feature.title}
              </h2>
              <p className="text-muted-foreground text-lg sm:text-2xl lg:text-3xl">
                {feature.subtitle}
              </p>
              <div className={`h-2 ${feature.color} w-[100px] lg:w-[150px] mx-auto mt-4`} />
            </div>

            {/* Advantage Cards */}
            <div
              className={`grid gap-4 lg:gap-2 ${
                feature.advantages.length === 1
                  ? "grid-cols-1"
                  : feature.advantages.length === 2
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1 lg:grid-cols-3"
              }`}
            >
              {feature.advantages.map((adv, index) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 lg:p-6 bg-background"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="bg-white shadow-lg flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-lg flex-shrink-0 mx-auto sm:mx-0">
                      <Image
                        src={adv.icon}
                        alt={adv.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-base lg:text-lg font-semibold mb-2">
                        {adv.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional Button */}
            {feature.button && feature.button.text && (
              <div className="text-center mt-8 lg:mt-12">
                <Button
                  size="lg"
                  className={`font-medium bg-gradient-to-r ${feature.button.fromColor} ${feature.button.toColor} hover:brightness-110 transition text-sm lg:text-base px-6 lg:px-8`}
                  asChild
                >
                  <Link href={feature.button.link}>
                    {feature.button.text}
                  </Link>
                </Button>
              </div>
            )}

            {/* Optional Carousel */}
            {feature.carousel?.images && (
              <div className="mt-8 lg:mt-12 px-4 sm:px-0">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                  className="relative overflow-visible"
                >
                  <CarouselContent className="pr-0 sm:pr-[calc(16.6667%+16px)]">
                    {feature.carousel.images.map((src, idx) => (
                      <CarouselItem
                        key={idx}
                        className="flex-shrink-0 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
                        style={{
                          paddingLeft: "8px",
                        }}
                      >
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={src}
                            alt={`${feature.title} slide ${idx + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 66.67vw, (max-width: 1024px) 50vw, 33.33vw"
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* 左右导航按钮 - 响应式调整 */}
                  <CarouselPrevious 
                    className={`absolute -left-6 lg:-left-10 top-1/2 -translate-y-1/2 z-10 ${feature.color} border-none text-white hover:bg-accent-foreground hover:text-primary w-8 h-8 lg:w-10 lg:h-10`} 
                  />
                  <CarouselNext 
                    className={`absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 z-10 ${feature.color} border-none text-white hover:bg-accent-foreground hover:text-primary w-8 h-8 lg:w-10 lg:h-10`} 
                  />
                </Carousel>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};