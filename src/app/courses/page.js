// app/courses/page.tsx
"use client";

import { CourseDetail } from "./components/CourseDetail";
import { CourseContent } from "./components/CourseContent";
import { CourseFeature } from "./components/CourseFeature";
import FAQ from "@/components/FAQ";
import { courseFaqItems } from "@/data/faq_content";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CoursesPageContent() {
  const searchParams = useSearchParams();
  
  // 获取搜索参数
  const searchFilter = {
    state: searchParams.get('state'),
    grade: searchParams.get('grade'),
    subject: searchParams.get('subject')
  };

  return (
    <div className="container mx-auto p-8 space-y-16">
      <div className="mb-28">
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