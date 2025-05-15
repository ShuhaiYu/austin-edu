import { notFound } from "next/navigation";
import CoursePageClient from "./CoursePageClient";

// 静态课程列表
const COURSES = {
  "y1-6-english-enrichment": () =>
    import("@/data/courses/y1-6-english-enrichment"),
  "y1-6-chinese": () =>
    import("@/data/courses/y1-6-chinese"),
  "y7-9-maths": () => import("@/data/courses/y7-9-maths"),
  "y10-maths-advance": () =>
    import("@/data/courses/y10-maths-advance"),
  "y10-maths-standard": () =>
    import("@/data/courses/y10-maths-standard"),
  "vce-english-eal-unit1-4": () =>
    import("@/data/courses/vce-english-eal-unit1-4"),
  "vce-english-language-unit1-4": () =>
    import("@/data/courses/vce-english-language-unit1-4"),
  "vce-maths-methods-unit1-4": () =>
    import("@/data/courses/vce-maths-methods-unit1-4"),
  "vce-specialist-maths-unit1-4": () =>
    import("@/data/courses/vce-specialist-maths-unit1-4"),
  "vce-chinese-first-language-unit1-4": () =>
    import("@/data/courses/vce-chinese-first-language-unit1-4"),

  // 添加其他课程...
};

export async function generateStaticParams() {
  return Object.keys(COURSES).map((subject) => ({
    subject,
  }));
}

async function getCourseData(subject) {
  if (!COURSES[subject]) return null;

  try {
    const courseModule = await COURSES[subject]();
    return courseModule.default;
  } catch (error) {
    console.error(`Failed to load ${subject}:`, error);
    return null;
  }
}

export default async function CoursePage(props) {
  const { subject } = await props.params;
  const localizedData = await getCourseData(subject);
  if (!localizedData) return notFound();

  return <CoursePageClient localizedData={localizedData} />;
}
