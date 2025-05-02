"use client";

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export function CourseStructure({ data }) {
  const [selectedModule, setSelectedModule] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {data.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 模块导航 */}
          <div className="w-full md:w-1/3 space-y-4">
            {data.sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelectedModule(index)}
                className={`w-full p-6 text-left rounded-xl transition-all ${
                  selectedModule === index
                    ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      {section.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 ${
                      selectedModule === index
                        ? 'text-blue-500'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* 课程内容 */}
          <div className="w-full md:w-2/3 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {data.sections[selectedModule].subtitle}
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                {data.sections[selectedModule].title}
              </p>
            </div>

            <div className="space-y-4">
              {data.sections[selectedModule].lessons.map(
                (lesson, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {lesson}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}