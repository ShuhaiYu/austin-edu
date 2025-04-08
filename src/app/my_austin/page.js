// src/app/my-austin/page.jsx
"use client";

import { useContext } from "react";
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

const i18nContent = {
  myAustin: {
    en: {
      hero: {
        title: "Austin Education Homework System",
        desc: "At Austin Education, we go beyond high-quality courses by offering a powerful, intelligent, and efficient homework system designed to support students at every step of their learning journey.",
        button: "Access My Austin",
      },
      slider: {
        title: 'Diverse Practice Types, Aligned with Learning Stages',
        desc: 'Austin Education’s homework system offers a variety of question types, including multiple-choice, fill-in-the-blank, short-answer, and writing tasks, tailored to different learning stages to help students improve comprehensively.',
        items: [
          { image: 'https://placehold.co/600x400', title: 'Dashboard' },
          { image: 'https://placehold.co/600x400', title: 'Analytics' },
          { image: 'https://placehold.co/600x400', title: 'Courses' },
          { image: 'https://placehold.co/600x400', title: 'Assignments' },
          { image: 'https://placehold.co/600x400', title: 'Reports' },
          { image: 'https://placehold.co/600x400', title: 'Notifications' },
        ]
      },
      sections: {
        threeCol: Array(3)
          .fill()
          .map((_, i) => ({
            title: `Feature ${i + 1}`,
            desc: `Description for feature ${i + 1}`,
          })),
        fourCol: Array(4)
          .fill()
          .map((_, i) => ({
            title: `Advanced Feature ${i + 1}`,
            desc: `Detailed description for advanced feature ${i + 1}`,
          })),
        centered: {
          title: "Structured Course Planning for Clear Learning Progress",
          desc: "Centralized learning management interface",
        },
      },
      finalCta: {
        title: "Ready to Get Started?",
        desc: "Join thousands of students already using our platform",
      },
    },
    zh: {
      hero: {
        title: "Austin Education 作业系统",
        desc: "在 Austin Education，我们不仅提供优质的课程，更打造了一套功能强大、智能高效的作业系统。帮助学生提升学习效率，精准攻克难题。",
        button: "进入作业系统",
      },
      slider: {
        title: '平台功能',
        desc: '发现核心功能',
        items: [
          { image: '/lms/feature1.jpg', title: '仪表盘' },
          { image: '/lms/feature2.jpg', title: '数据分析' },
          { image: '/lms/feature3.jpg', title: '课程管理' },
          { image: '/lms/feature4.jpg', title: '作业系统' },
          { image: '/lms/feature5.jpg', title: '报告生成' }
        ]
      },
      sections: {
        threeCol: Array(3)
          .fill()
          .map((_, i) => ({
            title: `功能 ${i + 1}`,
            desc: `功能 ${i + 1} 的详细描述`,
          })),
        fourCol: Array(4)
          .fill()
          .map((_, i) => ({
            title: `高级功能 ${i + 1}`,
            desc: `高级功能 ${i + 1} 的详细说明`,
          })),
        centered: {
          title: "核心平台",
          desc: "集中式学习管理界面",
        },
      },
      finalCta: {
        title: "准备开始了吗？",
        desc: "加入已经使用我们平台的数千名学生",
      },
    },
  },
};

const FeatureRow = ({ title, desc, index, lang }) => (
  <motion.section
    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`py-16 flex flex-col ${
      index % 2 ? "md:flex-row-reverse" : "md:flex-row"
    } gap-8 items-center`}
  >
    <div className="md:w-1/2 relative">
      <Image
        src="https://placehold.co/600x400"
        alt={title}
        width={600}
        height={400}
        className="rounded-lg shadow-xl"
      />
    </div>
    <div className="md:w-1/2 space-y-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </motion.section>
);

export default function MyAustinPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = i18nContent.myAustin[lang];

  return (
    <main className="container">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          {i18nContent.myAustin[lang].hero.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {i18nContent.myAustin[lang].hero.desc}
        </p>
        <Button size="lg" asChild>
          <a
            href="https://lms.austinedu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18nContent.myAustin[lang].hero.button}
          </a>
        </Button>
      </motion.section>

      {/* First Slider */}
      <section className="py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{content.slider.title}</h2>
          <p className="text-gray-600">{content.slider.desc}</p>
        </div>
        <ScaleCarousel items={content.slider.items} />
      </section>

      {/* 3 Columns Section */}
      {i18nContent.myAustin[lang].sections.threeCol.map((section, index) => (
        <FeatureRow
          key={index}
          title={section.title}
          desc={section.desc}
          index={index}
          lang={lang}
        />
      ))}

      {/* Centered Section */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">
          {i18nContent.myAustin[lang].sections.centered.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <Image
            src="https://placehold.co/800x400"
            alt="System Overview"
            width={800}
            height={400}
            className="rounded-lg mx-auto mb-8"
          />
          <p className="text-gray-600">
            {i18nContent.myAustin[lang].sections.centered.desc}
          </p>
        </div>
      </motion.section>

      {/* 4 Columns Section */}
      {i18nContent.myAustin[lang].sections.fourCol.map((section, index) => (
        <FeatureRow
          key={index}
          title={section.title}
          desc={section.desc}
          index={index}
          lang={lang}
        />
      ))}

      {/* Final Centered Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">
          {i18nContent.myAustin[lang].sections.centered.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <Image
            src="https://placehold.co/800x400"
            alt="System Overview"
            width={800}
            height={400}
            className="rounded-lg mx-auto mb-8"
          />
          <p className="text-gray-600">
            {i18nContent.myAustin[lang].sections.centered.desc}
          </p>
        </div>
      </motion.section>

      {/* Final Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <section className="py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {i18nContent.myAustin[lang].finalCta.title}
            </h2>
            <p className="text-gray-600">
              {i18nContent.myAustin[lang].finalCta.desc}
            </p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {[1, 2, 3].map((index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-2">
                    <Image
                      src="https://placehold.co/600x400"
                      alt={`Feature ${index}`}
                      width={600}
                      height={400}
                      className="rounded-lg h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <a
                href="https://lms.austinedu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18nContent.myAustin[lang].hero.button}
              </a>
            </Button>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
