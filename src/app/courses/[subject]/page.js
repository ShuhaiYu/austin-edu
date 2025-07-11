import { notFound } from "next/navigation";
import CoursePageClient from "./CoursePageClient";

// 静态课程列表
const COURSES = {
  // 1-6年级课程
  template: () => import("@/data/courses/template"),
  "y1-6-english-enrichment": () =>
    import("@/data/courses/y1-6-english-enrichment"),
  "y1-6-maths-enrichment": () => import("@/data/courses/y1-6-maths-enrichment"),
  "y1-6-chinese-enrichment": () =>
    import("@/data/courses/y1-6-chinese-enrichment"),
  "y3-6-writing": () => import("@/data/courses/y3-6-writing"),
  "y5-6-amc": () => import("@/data/courses/y5-6-amc"),
  "5-to-7-scholarship-victoria": () =>
    import("@/data/courses/y5-to-7-scholarship-victoria"),

  // 7-9年级课程
  "y7-9-english": () => import("@/data/courses/y7-9-english"),
  "y7-9-maths": () => import("@/data/courses/y7-9-maths"),
  "y7-9-writing": () => import("@/data/courses/y7-9-writing"),
  "y8-9-science": () => import("@/data/courses/y8-9-science"),
  "y7-8-amc": () => import("@/data/courses/y7-8-amc"),
  "y8-9-selective": () => import("@/data/courses/y8-9-selective"),

  // 10-12年级课程
  "y10-english": () => import("@/data/courses/y10-english"),
  "y10-maths-advance": () => import("@/data/courses/y10-maths-advance"),
  "y10-maths-standard": () => import("@/data/courses/y10-maths-standard"),
  "y9-10-science": () => import("@/data/courses/y9-10-science"),
  "y10-chemistry": () => import("@/data/courses/y10-chemistry"),
  "vce-english-eal-unit1-4": () =>
    import("@/data/courses/vce-english-eal-unit1-4"),
  "vce-english-language-unit1-4": () =>
    import("@/data/courses/vce-english-language-unit1-4"),
  "vce-maths-methods-unit1-4": () =>
    import("@/data/courses/vce-maths-methods-unit1-4"),
  "vce-specialist-maths-unit1-4": () =>
    import("@/data/courses/vce-specialist-maths-unit1-4"),
  "vce-general-maths-unit-1-4": () =>
    import("@/data/courses/vce-general-maths-unit-1-4"),
  "vce-chemistry-unit-1-4": () =>
    import("@/data/courses/vce-chemistry-unit-1-4"),
  "vce-biology-unit-1-4": () => import("@/data/courses/vce-biology-unit-1-4"),
  "vce-physics-unit-1-4": () => import("@/data/courses/vce-physics-unit-1-4"),
  "vce-psychology-unit-1-4": () =>
    import("@/data/courses/vce-psychology-unit-1-4"),
  "vce-chinese-first-language-unit-1-4": () =>
    import("@/data/courses/vce-chinese-first-language-unit-1-4"),
  "vce-chinese-second-language-unit-1-4": () =>
    import("@/data/courses/vce-chinese-second-language-unit-1-4"),
  "vce-chinese-second-language-advanced-unit-1-4": () =>
    import("@/data/courses/vce-chinese-second-language-advanced-unit-1-4"),

  // Medical Program
  ucat: () => import("@/data/courses/ucat"),

  // Other courses
  "ameb-theory-music-grade-1-6-term": () =>
    import("@/data/courses/ameb-theory-music-grade-1-6-term"),
  "ameb-theory-music-grade-1-6-holiday": () =>
    import("@/data/courses/ameb-theory-music-grade-1-6-holiday"),
  "ameb-musicianship-grade-5-6": () =>
    import("@/data/courses/ameb-musicianship-grade-5-6"),
  "ameb-aural-sight-reading-grade-4-8": () =>
    import("@/data/courses/ameb-aural-sight-reading-grade-4-8"),
  "ameb-general-knowledge-coaching": () =>
    import("@/data/courses/ameb-general-knowledge-coaching"),
  "music-appreciation-course": () =>
    import("@/data/courses/music-appreciation-course"),
  "vce-music-performance-unit-1-2": () =>
    import("@/data/courses/vce-music-performance-unit-1-2"),
  "vce-music-performance-unit-3-4": () =>
    import("@/data/courses/vce-music-performance-unit-3-4"),
  "ausyouth-music-instrumental-masterclasses": () =>
    import("@/data/courses/ausyouth-music-instrumental-masterclasses"),

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
