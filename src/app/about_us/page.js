"use client";

import { useContext, useEffect } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { aboutUsContent } from "./about_us_content";
import FAQ from "@/components/FAQ";
import TimelineSection from "./components/TimeLine";
import Map from "@/components/Map";
import { aboutUsFAQContent } from "@/data/faq_content";

export default function AboutPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = aboutUsContent[lang];

  // 处理锚点跳转到 Campuses Section
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1); // 移除 # 符号
      // 只要有任何校区相关的 hash，都跳转到 campuses section
      const campusHashes = [
        "box-hill",
        "mount-waverley",
        "cbd",
        "point-cook",
        "adelaide",
      ];

      if (hash && campusHashes.includes(hash)) {
        // 延迟执行确保页面完全加载
        setTimeout(() => {
          const campusesSection = document.getElementById("campuses-section");
          if (campusesSection) {
            campusesSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }
        }, 100);
      }
    };

    // 页面加载时处理
    handleHashNavigation();

    // 监听 hash 变化
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  // 生成Google Maps链接的函数
  const generateGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      {/* About Section */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16">
        <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {content.aboutSection.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {content.aboutSection.content}
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
            <Image
              src={content.aboutSection.image}
              fill
              alt="About Austin"
              className="rounded-lg shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* History Timeline with decorations */}
      <div className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
        {/* Top-left decoration (svg 1) */}
        <div
          className="
            absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-0 lg:left-0 z-0 pointer-events-none
            w-16 h-16        /* 手机 4rem */
            sm:w-20 sm:h-20  /* ≥640px 5rem */
            md:w-24 md:h-24  /* ≥768px 6rem */
            lg:w-32 lg:h-32  /* ≥1024px 8rem */
            xl:w-40 xl:h-40  /* ≥1280px 10rem */
            opacity-30 sm:opacity-50 lg:opacity-100
          "
        >
          <Image
            src="/decoration/3.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Bottom-right decoration (svg 2) */}
        <div
          className="
            absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-0 lg:right-0 z-0 pointer-events-none
            w-16 h-16
            sm:w-20 sm:h-20
            md:w-24 md:h-24
            lg:w-32 lg:h-32
            xl:w-40 xl:h-40
            opacity-30 sm:opacity-50 lg:opacity-100
          "
        >
          <Image
            src="/decoration/2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Your TimelineSection lifted above decorations */}
        <div className="relative z-10">
          <TimelineSection content={content.historySection} />
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
          {content.visionSection.title}
        </h2>
        
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="flex-1 space-y-6 order-2 xl:order-1">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {content.visionSection.content}
            </p>
            
            <h3 className="text-xl sm:text-2xl font-bold">
              {lang === "en" ? "We strive to:" : "我们希望："}
            </h3>
            
            <ul className="space-y-4 sm:space-y-6">
              {content.visionSection.points.map((item, i) => {
                const [title, description] = item.split("; ");
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary text-lg mt-1 flex-shrink-0">✓</span>
                    <li className="flex flex-col items-start">
                      <span className="font-bold text-sm sm:text-base">{title}</span>
                      <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {description}
                      </span>
                    </li>
                  </div>
                );
              })}
            </ul>
            
            {/* 移动端显示的结论文字 */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed xl:hidden">
              {content.visionSection.conclusion}
            </p>
          </div>

          {/* Image Container - 重新设计移动端布局 */}
          <div className="flex-1 w-full order-1 xl:order-2">
            {/* 移动端简化布局 */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* 主图占据左侧 */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={content.visionSection.imageMain}
                    fill
                    alt="Main Vision"
                    className="rounded-lg shadow-lg object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                
                {/* 右侧两个小图垂直排列 */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={content.visionSection.imageOverlay1}
                      fill
                      alt="Vision Image 1"
                      className="rounded-lg shadow-lg object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={content.visionSection.imageOverlay2}
                      fill
                      alt="Vision Image 2"
                      className="rounded-lg shadow-lg object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 桌面端保持原有复杂布局 */}
            <div className="hidden lg:block relative min-h-[400px]">
              {/* 主图 */}
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={content.visionSection.imageMain}
                  fill
                  alt="Main Vision"
                  className="rounded-lg shadow-lg object-cover z-10"
                  sizes="(max-width: 1200px) 50vw, 33vw"
                />

                {/* 叠加小图1 */}
                <div className="absolute -left-8 top-2 w-[40%] aspect-[4/3] z-20">
                  <Image
                    src={content.visionSection.imageOverlay1}
                    fill
                    alt="Overlay 1"
                    className="rounded-lg shadow-xl border-4 border-background object-cover"
                    sizes="(max-width: 1200px) 20vw, 15vw"
                  />
                </div>

                {/* 叠加小图2 */}
                <div className="absolute -left-8 bottom-2 w-[40%] aspect-[4/3] z-20">
                  <Image
                    src={content.visionSection.imageOverlay2}
                    fill
                    alt="Overlay 2"
                    className="rounded-lg shadow-xl border-4 border-background object-cover"
                    sizes="(max-width: 1200px) 20vw, 15vw"
                  />
                </div>
              </div>

              {/* 桌面端显示的结论文字 */}
              <p className="text-muted-foreground text-sm mt-8 pl-4">
                {content.visionSection.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section id="campuses-section" className="py-8 sm:py-12 lg:py-16">
        {content.campusesSection.map((section, index) => (
          <div key={index} className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
              {section.title}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {section.campuses.map((campus, i) => (
                <div key={i} className="rounded-lg p-4 sm:p-6 border border-border/50 bg-card/50">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {campus.name}
                  </h3>
                  <div className="h-1 bg-primary w-10 mb-4" />
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                      <Link
                        href={generateGoogleMapsUrl(campus.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base hover:text-blue-800 hover:underline transition-colors duration-200 break-words"
                      >
                        {campus.address}
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <Link
                        href={`tel:${campus.phone}`}
                        className="text-sm sm:text-base hover:text-blue-800 hover:underline transition-colors duration-200"
                      >
                        {campus.phone}
                      </Link>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                      <Link
                        href={`mailto:${campus.email}`}
                        className="text-sm sm:text-base hover:text-blue-800 hover:underline transition-colors duration-200 break-words"
                      >
                        {campus.email}
                      </Link>
                    </div>
                  </div>

                  {/* Map - 响应式高度 */}
                  <div className="mt-4 sm:mt-6 rounded-lg overflow-hidden">
                    <div className="h-48 sm:h-56 lg:h-64">
                      <Map address={campus.address} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      <FAQ customFaqItems={aboutUsFAQContent} />
    </div>
  );
}