"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";

export default function Footer() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  return (
    <footer className="bg-primary text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">Austin Education</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            {lang === "zh"
              ? "Austin Education 是墨尔本和悉尼领先的辅导机构，专注于为学生提供优质的一站式辅导服务。"
              : "Austin Education is a leading tutoring service in Melbourne and Sydney, offering all-in-one tutorial services."}
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">
            {lang === "zh" ? "快速链接" : "Quick Links"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                {lang === "zh" ? "首页" : "Home"}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {lang === "zh" ? "课程" : "Courses"}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {lang === "zh" ? "入学" : "Admissions"}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {lang === "zh" ? "常见问题" : "FAQ"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">
            {lang === "zh" ? "联系我们" : "Contact Us"}
          </h4>
          <p className="text-sm">Email: info@austinedu.com</p>
          <p className="text-sm">Phone: +61 0123 456 789</p>
          <div className="mt-3 space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-block text-gray-100 hover:text-white"
            >
              FB
            </a>
            <a
              href="#"
              aria-label="WeChat"
              className="inline-block text-gray-100 hover:text-white"
            >
              WeChat
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-block text-gray-100 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-200">
        © 2025 Austin Education. {lang === "zh" ? "保留所有权利。" : "All rights reserved."}
      </div>
    </footer>
  );
}