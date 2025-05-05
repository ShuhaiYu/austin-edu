import { notFound } from "next/navigation";
import CoursePageClient from "./CoursePageClient";

// 静态课程列表
const COURSES = {
  "y1-6-english-enrichment": () =>
    import("@/data/courses/y1-6-english-enrichment"),
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
