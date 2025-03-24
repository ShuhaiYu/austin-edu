// src/components/Features.js
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { LangContext } from "@/app/layout";

export default function Features() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  const stats = [
    { num: "99", text: ["ATAR achieved by 6", "of our students"] },
    { num: "90%", text: ["Graduates entered", "top universities"] },
    { num: "10K+", text: ["Students trusted", "our service"] },
  ];

  const features = [
    {
      icon: "/home/team icon.png",
      title: "Top-tier teaching team",
      desc: "Dive into our diverse range of online courses tailored to suit various interests.",
    },
    {
      icon: "/home/course icon.png",
      title: "Comprehensive courses",
      desc: "Our curated collection covers a wide range of subjects and topics.",
    },
    {
      icon: "/home/study icon.png",
      title: "Well-equipped space",
      desc: "Join live lectures and activities led by experienced instructors.",
    },
  ];

  return (
    <section className="py-20">
      {/* 上半部分 */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* 左侧统计卡片 */}
        <div className="flex flex-row items-start justify-center gap-4 relative h-[400px]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative transition-all duration-300 hover:-translate-y-2"
              style={{
                marginTop: i === 0 ? "2rem" : i === 1 ? "-1rem" : "3rem",
                marginLeft: i !== 0 ? "-4rem" : 0,
                zIndex: 3 - i,
              }}
            >
              <div className="relative">
                {/* 图片容器 */}
                <Image
                  src={`/home/section bg${i + 1}.png`}
                  alt="Background"
                  width={247}
                  height={326}
                  className="object-contain drop-shadow-lg"
                />

                {/* 文字内容 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="text-5xl font-bold mb-2 text-white">
                    {stat.num}
                  </div>
                  <div className="h-[2px] w-16 bg-white mb-4 opacity-50" />
                  <div className="text-center">
                    {stat.text.map((line, j) => (
                      <div
                        key={j}
                        className="text-sm font-medium text-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 右侧文案 */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            {lang === "zh"
              ? "为什么超过10,000名学生选择"
              : "What makes over 10,000 students choose"}
            <br />
            <span className="text-primary">AUSTIN EDUCATION</span>
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✓ Australia&apos;s most rigorously selected teaching team</li>
            <li>✓ 90% high-achieving graduates & experts</li>
            <li>✓ Well-structured curriculum & support system</li>
          </ul>

          <Button size="lg">
            {lang === "zh" ? "查看成就" : "Our Achievements"}
          </Button>
        </div>
      </div>

      {/* Why Choose Austin */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          {lang === "zh" ? "为什么选择奥斯汀" : "Why Choose Austin"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {lang === "zh"
            ? "奥斯汀教育以卓越的师资团队、全面的高质量课程和非凡的学习环境而闻名。"
            : "Renowned for outstanding teaching team, comprehensive courses and exceptional learning environment."}
        </p>
      </div>

      {/* 功能卡片 */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="p-8 border rounded-lg hover:shadow-lg transition"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <Image src={feat.icon} width={40} height={40} alt="Icon" />
            </div>
            <h3 className="text-xl font-bold mb-4">{feat.title}</h3>
            <p className="text-gray-600 mb-6">{feat.desc}</p>
            <Button variant="outline">
              {lang === "zh" ? "了解更多" : "Learn More"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
