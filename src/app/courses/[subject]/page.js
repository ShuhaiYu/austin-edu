import { notFound } from "next/navigation";
import Image from "next/image";

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

  const course = await getCourseData(subject);

  if (!course) return notFound();
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 border-b border-gray-200">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          {course.title}
        </h1>

        {/* Achievement Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {course.heroSection.achievements.currentYear.items.map((item, i) => (
            <div key={i} className="bg-blue-50 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-blue-700 mb-2">
                {item.number}
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {item.label}
              </p>
              {item.subtitle && (
                <p className="text-sm text-gray-600 mt-2">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        {/* Historical Achievements */}
        <div className="bg-gray-50 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Achievements {course.heroSection.achievements.historical.range}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {course.heroSection.achievements.historical.items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-blue-700">
                  {item.number}
                </div>
                <p className="text-gray-800 font-medium">{item.label}</p>
                {item.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Partner Schools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured in Top Schools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {course.heroSection.schoolLogos.map((school, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-200"
              >
                <span className="text-gray-700 font-medium">{school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 border-b border-gray-200">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Core Highlights
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {course.coreFeatures.sections.map((section, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mt-2">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essay Refinement Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {course.essayRefinement.title}
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {course.essayRefinement.steps.map((step) => (
              <div 
                key={step.step}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Learning Package
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {course.resources.packages.map((pkg, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">{pkg.icon}</div>
                    <div className="font-medium text-gray-900">{pkg.title}</div>
                    <div className="text-sm text-gray-600">{pkg.count}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Support System
              </h3>
              <div className="space-y-4">
                {course.resources.support.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center bg-gray-50 px-4 py-3 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
