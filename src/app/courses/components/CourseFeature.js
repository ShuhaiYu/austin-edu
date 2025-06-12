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

export const CourseFeature = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const features = coursesContent[lang].feature;

  return (
    <section className="py-16">
      <div className="container mx-auto px-8 space-y-64">
        {features.map((feature, featureIndex) => (
          <div key={feature.title}>
            {/* Title & Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground text-3xl">
                {feature.subtitle}
              </p>
              <div className={`h-2 ${feature.color} w-[150px] mx-auto mt-4`} />
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
                  className="p-6 bg-background"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white shadow-lg flex items-center justify-center w-24 h-24 rounded-lg flex-shrink-0">
                      <Image
                        src={adv.icon}
                        alt={adv.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{adv.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
                  asChild
                >
                  <a href={feature.button.link}>
                    {feature.button.text}
                  </a>
                </Button>
              </div>
            )}

            {/* Optional Carousel */}
            {feature.carousel?.images && (
              <div className="mt-12">
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
                  <CarouselContent className="pr-[calc(16.6667%+16px)]">
                    {feature.carousel.images.map((src, idx) => (
                      <CarouselItem
                        key={idx}
                        className="flex-shrink-0 basis-2/3 md:basis-1/3"
                        style={{
                          paddingLeft: "16px",
                        }}
                      >
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={src}
                            alt={`${feature.title} slide ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 66.67vw, 33.33vw"
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* 左右导航按钮 */}
                  <CarouselPrevious className={`absolute -left-10 top-1/2 -translate-y-1/2 z-10 ${feature.color} border-none text-white hover:bg-accent-foreground hover:text-primary`} />
                  <CarouselNext className={`absolute -right-10 top-1/2 -translate-y-1/2 z-10 ${feature.color} border-none text-white hover:bg-accent-foreground hover:text-primary`} />
                </Carousel>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};