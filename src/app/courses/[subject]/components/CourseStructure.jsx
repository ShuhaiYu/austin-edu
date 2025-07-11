"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Lock } from "lucide-react";

export function CourseStructure({ data }) {
  const sections = data?.sections || [];
  if (sections.length === 0) return null;

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedModule, setSelectedModule] = useState(0);
  const router = useRouter();

  const years = sections;
  const modules = years[selectedYear]?.modules || [];

  const isLockGlobally = data.islock ?? true;
  const isContentLocked = isLockGlobally;

  // 只有当有多个sections且每个section都有title时才显示tabs
  const shouldShowTabs = years.length > 1 && years.every(year => year.title);

  // 计算文本长度和布局策略
  const calculateTabLayout = () => {
    if (!shouldShowTabs) return { useVertical: false, useCompact: false };
    
    const totalChars = years.reduce((sum, year) => sum + (year.title?.length || 0), 0);
    const avgChars = totalChars / years.length;
    const maxChars = Math.max(...years.map(year => year.title?.length || 0));
    
    // 如果平均字符数超过20或最长超过35，使用垂直布局
    const useVertical = avgChars > 20 || maxChars > 35;
    // 如果平均字符数超过15，使用紧凑模式
    const useCompact = avgChars > 15 && !useVertical;
    
    return { useVertical, useCompact };
  };

  const { useVertical, useCompact } = calculateTabLayout();

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
          {data.title}
        </h2>

        {/* Year Tabs - 动态布局版本 */}
        {shouldShowTabs && (
          <div className="mb-8 sm:mb-12">
            <Tabs
              value={selectedYear.toString()}
              onValueChange={(val) => {
                const idx = Number(val);
                setSelectedYear(idx);
                setSelectedModule(0);
              }}
            >
              {useVertical ? (
                // 垂直布局 - 用于长文本
                <div className="flex justify-center">
                  <TabsList className="flex flex-col gap-2 bg-gray-100/50 p-2 rounded-xl max-w-2xl w-full">
                    {years.map((year, idx) => {
                      const lockedTab = isLockGlobally;
                      return (
                        <TabsTrigger
                          key={`${year.title}-${idx}`}
                          value={idx.toString()}
                          className="relative w-full px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 data-[state=inactive]:hover:bg-white/60 text-left"
                        >
                          <span className="block leading-relaxed">{year.title}</span>
                          {lockedTab && (
                            <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#dfb67e] flex items-center justify-center">
                              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                            </div>
                          )}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </div>
              ) : (
                // 水平布局 - 根据文本长度调整
                <div className="flex justify-center">
                  <TabsList className={`flex flex-wrap justify-center gap-2 bg-gray-100/50 p-2 rounded-xl ${useCompact ? 'max-w-6xl' : 'max-w-4xl'} mx-auto`}>
                    {years.map((year, idx) => {
                      const lockedTab = isLockGlobally;
                      const isLongText = year.title && year.title.length > 25;
                      
                      return (
                        <TabsTrigger
                          key={`${year.title}-${idx}`}
                          value={idx.toString()}
                          className={`relative ${
                            useCompact 
                              ? 'min-w-[200px] px-3 py-3' 
                              : isLongText 
                                ? 'min-w-[250px] px-4 py-3' 
                                : 'flex-1 min-w-[120px] px-3 sm:px-6 py-2.5 sm:py-3'
                          } rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 data-[state=inactive]:hover:bg-white/60 text-center`}
                        >
                          <span className={`block ${isLongText ? 'leading-tight' : 'leading-relaxed'}`}>
                            {year.title}
                          </span>
                          {lockedTab && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#dfb67e] flex items-center justify-center">
                              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                            </div>
                          )}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </div>
              )}
            </Tabs>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Module List - 移动端全宽，桌面端1/3宽度 */}
          <div className="w-full lg:w-1/3 space-y-3 sm:space-y-4">
            {modules.map((mod, idx) => {
              const lockedModule = isLockGlobally;
              return (
                <button
                  key={`${mod.title}-${idx}`}
                  onClick={() => setSelectedModule(idx)}
                  className={`relative w-full p-4 sm:p-6 text-left rounded-lg sm:rounded-xl transition-all duration-200 ${
                    selectedModule === idx
                      ? "bg-primary/10 border-2 border-primary/20 shadow-lg"
                      : "bg-white hover:bg-gray-50 border-2 border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-2 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-primary truncate">
                        {mod.subtitle}
                      </p>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1 sm:mt-2 leading-tight">
                        {mod.title}
                      </h3>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-colors ${
                        selectedModule === idx
                          ? "text-primary"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  {lockedModule && (
                    <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#dfb67e] flex items-center justify-center">
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Panel - 移动端全宽，桌面端2/3宽度 */}
          <div className="w-full lg:w-2/3 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 relative min-h-[300px] sm:min-h-[400px]">
            <div
              className={
                isContentLocked ? "filter blur-sm pointer-events-none" : ""
              }
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {modules[selectedModule]?.subtitle}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mt-2">
                  {modules[selectedModule]?.title}
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {modules[selectedModule]?.lessons?.map((lesson, i) => (
                  <div
                    key={`lesson-${i}`}
                    className="flex items-start p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base font-medium">
                      {i + 1}
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {isContentLocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm">
                <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 text-center px-4 leading-relaxed">
                  This content is locked. Please <strong>contact us</strong> to
                  unlock.
                </p>
                <button
                  onClick={() => router.push("/contact_us")}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}