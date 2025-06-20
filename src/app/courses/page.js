// app/courses/page.tsx
"use client";

import { CourseDetail } from "./components/CourseDetail";
import { CourseContent } from "./components/CourseContent";
import { CourseFeature } from "./components/CourseFeature";
import FAQ from "@/components/FAQ";
import { courseFaqItems } from "@/data/faq_content";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

function CoursesPageContent() {
  const searchParams = useSearchParams();
  
  // 添加navbar状态监听
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  // 监听navbar滚动状态
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      if (currentScrollY < 10) {
        setIsScrolled(false);
      }
    };

    const throttle = (fn, wait) => {
      let lastCall = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastCall < wait) return;
        lastCall = now;
        return fn(...args);
      };
    };

    const debouncedScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "up" && lastScrollY > 100) {
      setIsScrolled(false);
      document.documentElement.className = "";
    } else if (scrollDirection === "down" && lastScrollY > 100) {
      setIsScrolled(true);
      document.documentElement.className = "scrolled";
    }
  }, [scrollDirection, lastScrollY]);
  
  // 获取搜索参数
  const searchFilter = {
    state: searchParams.get('state'),
    grade: searchParams.get('grade'),
    subject: searchParams.get('subject')
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-8">Courses</h1>
        <CourseDetail searchFilter={searchFilter} />
      </div>
      <div className="mb-28">
        <CourseContent />
      </div>
      <div className="mb-28">
        <CourseFeature />
      </div>

      <FAQ customFaqItems={courseFaqItems} />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesPageContent />
    </Suspense>
  );
}