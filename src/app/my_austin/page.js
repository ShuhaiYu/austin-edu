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
import Autoplay from "embla-carousel-autoplay";
import FAQ from "@/components/FAQ";

const i18nContent = {
  myAustin: {
    en: {
      hero: {
        title:
          "Austin Education Homework System\n Your Smart Learning Assistant",
        desc: "At Austin Education, we go beyond high-quality courses by offering a powerful, intelligent, and efficient homework system designed to support students at every step of their learning journey.",
        button: "Access My Austin",
      },
      slider: {
        title: "Diverse Practice Types, \nAligned with Learning Stages",
        desc: "Austin Education’s homework system offers a variety of question types, including multiple-choice, fill-in-the-blank, short-answer, and writing tasks, tailored to different learning stages to help students improve comprehensively.",
        items: [
          { image: "/my_austin/slider1-1.png", title: "Dashboard" },
          { image: "/my_austin/slider1-1.png", title: "Analytics" },
          { image: "/my_austin/slider1-1.png", title: "Courses" },
          { image: "/my_austin/slider1-1.png", title: "Assignments" },
          { image: "/my_austin/slider1-1.png", title: "Reports" },
          { image: "/my_austin/slider1-1.png", title: "Notifications" },
        ],
      },
      sections: {
        threeCol: [
          {
            desc: "In the early stages, the focus is on mastering core concepts through multiple-choice, fill-in-the-blank, and reading comprehension questions to solidify the knowledge foundation. As students progress, the system introduces short-answer and application questions to develop logical thinking and problem-solving skills.",
            image: "/my_austin/quiz1.png",
          },
          {
            desc: "For senior students and those in the VCE stage, the homework system offers a variety of question types that comprehensively cover subject requirements, helping students strengthen their critical thinking and knowledge application skills. Writing exercises come with teacher feedback and detailed revisions to improve writing precision.",
            image: "/my_austin/test1.png",
          },
          {
            desc: "The system also supports a simulated exam mode, strictly adhering to the official exam format and time constraints, allowing students to practice in a real exam-like environment and enhance their test-taking skills.",
            image: "/my_austin/test2.png",
          },
        ],
        centeredFeature1: {
          title: "Structured Course Planning for Clear Learning Progress",
          desc: "Austin Education’s curriculum is systematically organised by semester and weekly study plans, providing students with a clear structure for their learning. Through the homework system, students can easily track their coursework and stay on top of their progress. \n Each semester’s curriculum is thoughtfully designed to introduce topics in a logical sequence, ensuring a steady buildup of knowledge. Weekly study plans outline key learning objectives, helping students manage their time effectively and align their revision with the course material.",
        },
        fourCol: [
          {
            title: "Lesson Record for Flexible Review",
            desc: "Austin Education provides a lesson record feature, allowing students to revisit class content at any time. Whether they need to review key concepts, refine their notes, or gain deeper insights into the material, this tool offers the flexibility to support their learning.\nFor additional resources, students can contact the administrative team for further support and guidance.",
            image: "/my_austin/dashboard.png",
          },
          {
            title: "Extensive Question Bank for Targeted Practice",
            desc: "Austin Education’s homework system includes a well-structured question bank covering past exam questions, key subject exercises, and high-difficulty challenges. All questions are closely aligned with curriculum content, ensuring students can strengthen their knowledge through relevant practice.\nThe system also offers a simulation exam mode, replicating real test conditions with official time limits and question formats. This feature helps students familiarise themselves with exam settings, refine their answering speed, and develop strategic approaches to different question types.",
            image: "/my_austin/achievement.png",
          },
          {
            title: "Smart Mistake Collection & Personalised Review",
            desc: "Our system automatically logs mistakes and categorises them by difficulty, helping students identify patterns in their learning. Students can also manually add questions to their personal mistake collection, making it easier to focus on challenging areas.\nMistakes are organised by semester, with each question accompanied by step-by-step solutions and explanations. This structured approach helps students refine their problem-solving skills and strengthen their understanding of key concepts.",
            image: "/my_austin/dashboard.png",
          },
          {
            desc: "For targeted revision, students can customise their review by selecting specific question types or difficulty levels. The system also provides smart recommendations to help students efficiently address knowledge gaps and optimise their study plans.",
            image: "/my_austin/profile.png",
          },
        ],
        centeredFeature2: {
          title: "Real-Time Data Tracking for Learning Insights",
          desc: "Austin Education’s homework system continuously tracks student performance across unit tests, midterms, and mock exams, providing a comprehensive view of their academic progress.\nWith data-driven analysis, the system highlights strengths, pinpoints areas for improvement, and offers a clear breakdown of subject performance. Students can also compare their results with peers to gain valuable context on their learning journey.\nAdditionally, the system generates personalised revision recommendations based on individual study patterns, helping students plan their review sessions more effectively and focus on the areas that need the most attention.",
        },
      },
      finalCta: {
        title: "Essential Learning Tools for a Smarter Study Experience",
        desc: "Austin Education’s homework system includes a range of practical tools to help students stay on top of their academic progress:",
      },
      finalSlider: {
        title: "Diverse Practice Types, \nAligned with Learning Stages",
        desc: "Austin Education’s homework system offers a variety of question types, including multiple-choice, fill-in-the-blank, short-answer, and writing tasks, tailored to different learning stages to help students improve comprehensively.",
        items: [
          {
            image: "/my_austin/slider2-2.png",
            title: "ATAR Calculator",
            desc: "Estimates VCE scores using official grading criteria, giving students a clearer picture of their academic standing.",
          },
          {
            image: "/my_austin/slider2-1.png",
            title: "Seminars Registration System",
            desc: "Provides easy access to expert-led seminars covering study techniques, exam strategies, and the latest educational insights.",
          },
          {
            image: "/my_austin/slider2-3.png",
            title: "AI Math Assistant",
            desc: "An intelligent problem-solving tool that helps students understand mathematical concepts and receive instant guidance.",
          },
        ],
        toolDesc:
          "These tools are designed to streamline the learning process, offering valuable support at every stage of a student’s academic journey.",
      },
    },
    zh: {
      hero: {
        title: "Austin Education 作业系统",
        desc: "在 Austin Education，我们不仅提供优质的课程，更打造了一套功能强大、智能高效的作业系统。帮助学生提升学习效率，精准攻克难题。",
        button: "进入作业系统",
      },
      slider: {
        title: "平台功能",
        desc: "发现核心功能",
        items: [
          { image: "/lms/feature1.jpg", title: "仪表盘" },
          { image: "/lms/feature2.jpg", title: "数据分析" },
          { image: "/lms/feature3.jpg", title: "课程管理" },
          { image: "/lms/feature4.jpg", title: "作业系统" },
          { image: "/lms/feature5.jpg", title: "报告生成" },
        ],
      },
      sections: {
        threeCol: [
          {
            title: "个性化学习路径",
            desc: "根据个人学习进度和目标定制的学习计划。",
            image: "https://placehold.co/600x400",
          },
          {
            title: "实时进度追踪",
            desc: "每个作业的即时反馈和表现分析。",
            image: "https://placehold.co/600x400",
          },
          {
            title: "互动练习系统",
            desc: "多种题型搭配即时评分和解析。",
            image: "https://placehold.co/600x400",
          },
        ],
        fourCol: [
          {
            title: "智能推荐系统",
            desc: "基于薄弱环节的AI智能题目推荐。",
            image: "https://placehold.co/600x400",
          },
          {
            title: "多媒体资源",
            desc: "视频解析和互动学习资料。",
            image: "https://placehold.co/600x400",
          },
          {
            title: "教师反馈",
            desc: "24小时内获取专业导师的详细批改意见。",
            image: "https://placehold.co/600x400",
          },
          {
            title: "进度报告",
            desc: "完整的每周学习表现报告。",
            image: "https://placehold.co/600x400",
          },
        ],
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

const FeatureRow = ({ title, desc, index, lang, image }) => (
  <motion.section
    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
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
      <p className="text-gray-600 whitespace-pre-line">{desc}</p>
    </div>
  </motion.section>
);

export default function MyAustinPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = i18nContent.myAustin[lang];

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
        className="py-20 text-center w-2/3 mx-auto"
      >
        <h1 className="text-5xl font-bold mb-4 whitespace-pre-line">
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
        <div className="mb-12 text-center w-1/2 mx-auto">
          <h2 className="text-3xl font-bold mb-4 whitespace-pre-line">
            {content.slider.title}
          </h2>
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
          image={section.image}
        />
      ))}

      {/* Centered Section */}
      <motion.section
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <div className="w-3/4 mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-8 whitespace-pre-line">
            {i18nContent.myAustin[lang].sections.centeredFeature1.title}
          </h2>
          <p className="text-gray-600 whitespace-pre-line">
            {i18nContent.myAustin[lang].sections.centeredFeature1.desc}
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
      </motion.section>

      {/* 4 Columns Section */}
      {i18nContent.myAustin[lang].sections.fourCol.map((section, index) => (
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
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <div className="w-3/4 mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-8">
            {i18nContent.myAustin[lang].sections.centeredFeature2.title}
          </h2>
          <p className="text-gray-600 whitespace-pre-line">
            {i18nContent.myAustin[lang].sections.centeredFeature2.desc}
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
          {/* 背景容器 */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {i18nContent.myAustin[lang].finalCta.title}
            </h2>
            <p className="text-gray-600">
              {i18nContent.myAustin[lang].finalCta.desc}
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
                {i18nContent.myAustin[lang].finalSlider.toolDesc}
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
                {i18nContent.myAustin[lang].hero.button}
              </a>
            </Button>
          </div>
        </section>
      </motion.div>
      <FAQ />
    </main>
  );
}
