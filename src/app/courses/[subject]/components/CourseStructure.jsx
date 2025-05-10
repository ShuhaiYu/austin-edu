`use client`;

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

export function CourseStructure({ data }) {
  // 仅当有 sections 数据时才渲染
  const sections = data?.sections || [];
  if (sections.length === 0) {
    return null;
  }

  // 0 = year1, 1 = year2, ...
  const [selectedYear, setSelectedYear] = useState(0);
  // 0 = module1, 1 = module2, ...
  const [selectedModule, setSelectedModule] = useState(0);

  const years = sections; // [{ title: 'year 1', modules: [...] }, ...]
  const modules = years[selectedYear]?.modules || [];
  if (modules.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          {data.title}
        </h2>

        {/* 年级 Tabs */}
        <Tabs
          value={selectedYear.toString()}
          onValueChange={(val) => {
            const idx = Number(val);
            setSelectedYear(idx);
            setSelectedModule(0);   // 切年级时重置模块选中
          }}
          className="mb-8"
        >
          <TabsList className="justify-center space-x-4">
            {years.map((year, idx) => (
              <TabsTrigger
                key={year.title}
                value={idx.toString()}
                className="px-4 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                {year.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 模块导航 */}
          <div className="w-full md:w-1/3 space-y-4">
            {modules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedModule(idx)}
                className={`w-full p-6 text-left rounded-xl transition-all ${
                  selectedModule === idx
                    ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      {mod.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 ${
                      selectedModule === idx ? 'text-blue-500' : 'text-gray-400'
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
                {modules[selectedModule]?.subtitle}
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                {modules[selectedModule]?.title}
              </p>
            </div>

            <div className="space-y-4">
              {modules[selectedModule]?.lessons?.map((lesson, i) => (
                <div
                  key={i}
                  className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    {lesson}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
