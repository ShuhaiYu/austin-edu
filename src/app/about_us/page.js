"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { aboutUsContent } from "./about_us_content";
import FAQ from "@/components/FAQ";
import TimelineSection from "./components/TimeLine";
import Map from "@/components/Map";
import { aboutUsFAQContent } from "@/data/faq_content";

export default function AboutPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = aboutUsContent[lang];
  return (
    <div className="container mx-auto px-4 py-16">
      {/* About Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center py-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">{content.aboutSection.title}</h2>
          <p className="text-lg text-muted-foreground ">
            {content.aboutSection.content}
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={content.aboutSection.image}
            width={600}
            height={400}
            alt="About Austin"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* History Timeline with decorations */}
      <div className="relative overflow-hidden py-16">
        {/* Top-left decoration (svg 1) */}
        <div
          className="
            absolute top-0 left-0 z-0 pointer-events-none
            w-24 h-24         /* 手机 6rem */
            sm:w-32 sm:h-32   /* ≥640px 8rem */
            md:w-40 md:h-40   /* ≥768px 10rem */
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
            absolute bottom-0 right-0 z-0 pointer-events-none
            w-24 h-24
            sm:w-32 sm:h-32
            md:w-40 md:h-40
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
      <section className="py-16">
        <h2 className="text-4xl font-bold">{content.visionSection.title}</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center ">
          <div className="flex-1 space-y-6">
            <p className="text-lg text-muted-foreground">
              {content.visionSection.content}
            </p>
            <h2 className="text-2xl font-bold mb-4">
              {lang === "en" ? "We strive to:" : "我们希望："}
            </h2>
            <ul className="space-y-4">
              {content.visionSection.points.map((item, i) => {
                const [title, description] = item.split("; ");
                return (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <li key={i} className="flex flex-col items-start">
                      <span className="font-bold">{title}</span>
                      <span className="text-muted-foreground">
                        {description}
                      </span>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* 图片容器 */}
          <div className="flex-1 w-full relative min-h-[400px]">
            {/* 主图 */}
            <div className="relative w-full aspect-[3/2]">
              <Image
                src={content.visionSection.imageMain}
                fill
                alt="Main Vision"
                className="rounded-lg shadow-lg object-cover z-10"
              />

              {/* 叠加小图1 */}
              <div className="absolute -left-8 top-2 w-[40%] aspect-[4/3] z-20">
                <Image
                  src={content.visionSection.imageOverlay1}
                  fill
                  alt="Overlay 1"
                  className="rounded-lg shadow-xl border-4 border-background object-cover"
                />
              </div>

              {/* 叠加小图2 */}
              <div className="absolute -left-8 bottom-2 w-[40%] aspect-[4/3] z-20">
                <Image
                  src={content.visionSection.imageOverlay2}
                  fill
                  alt="Overlay 2"
                  className="rounded-lg shadow-xl border-4 border-background object-cover"
                />
              </div>
            </div>

            {/* 底部文字 */}
            <p className="text-muted-foreground text-sm mt-8 pl-4">
              {content.visionSection.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="py-16">
        {content.campusesSection.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
            <div className="grid md:grid-cols-2  gap-8">
              {section.campuses.map((campus, i) => (
                <div key={i} className="rounded-lg p-6">
                  <h3 className="text-xl font-bold">{campus.name}</h3>
                  <div className="h-1 bg-primary w-10 mb-4" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{campus.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>{campus.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>{campus.email}</span>
                    </div>
                  </div>

                  {/* Map  */}
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <Map address={campus.address} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <FAQ customFaqItems={aboutUsFAQContent}/>
    </div>
  );
}
