// app/courses/page.tsx
import { CourseDetail } from "./components/CourseDetail";
import { CourseContent } from "./components/CourseContent";
import { CourseFeature } from "./components/CourseFeature";
import FAQ from "@/components/FAQ";

export default function CoursesPage() {
  return (
    <div className="container mx-auto p-8 space-y-16">
      <div className="mb-28">
        <h1 className="text-5xl font-bold mb-8">Courses</h1>
        <CourseDetail />
      </div>
      <div className="mb-28">
        <CourseContent />
      </div>
      <div className="mb-28">
        <CourseFeature />
      </div>

      <FAQ />
    </div>
  );
}
