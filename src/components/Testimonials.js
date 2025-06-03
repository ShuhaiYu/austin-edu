"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { homeContent } from "@/app/content";

export default function Testimonials() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const testimonialsData = homeContent[lang].testimonials;

  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
       

        {/* 视频网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 视频容器 */}
              <div className="relative aspect-video bg-gray-100">
                <iframe
                  src={`https://player.vimeo.com/video/${testimonial.videoUrl.split('/')[3].split('/')[0]}?h=${testimonial.videoUrl.split('/')[4]}&color=6366f1&title=0&byline=0&portrait=0&badge=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={`${testimonial.name} Testimonial`}
                />
              </div>

              {/* 学生信息 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {testimonial.achievement}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.description}
                </p>
              </div>

              {/* 装饰性元素 */}
              {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* 底部装饰 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium">
              {lang === "en" ? "Trusted by hundreds of students" : "数百名学生的信任选择"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}