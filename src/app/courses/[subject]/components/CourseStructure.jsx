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
  // Only Year0→Module0 is truly “unlocked”
  const isContentLocked = isLockGlobally && !(selectedYear === 0 && selectedModule === 0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          {data.title}
        </h2>

        {/* Year Tabs */}
        <Tabs
          value={selectedYear.toString()}
          onValueChange={(val) => {
            const idx = Number(val);
            setSelectedYear(idx);
            setSelectedModule(0);
          }}
          className="mb-8"
        >
          <TabsList className="justify-center space-x-4">
            {years.map((year, idx) => {
              const lockedTab = isLockGlobally && idx !== 0;
              return (
                <TabsTrigger
                  key={year.title}
                  value={idx.toString()}
                  className="relative px-4 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  {year.title}
                  {lockedTab && (
                    <Lock className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-yellow-300 text-yellow-600 p-1" />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Module List */}
          <div className="w-full md:w-1/3 space-y-4">
            {modules.map((mod, idx) => {
              const lockedModule = isLockGlobally && !(selectedYear === 0 && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedModule(idx)}
                  className={`relative w-full p-6 text-left rounded-xl transition-all ${
                    selectedModule === idx
                      ? "bg-blue-50 border-2 border-blue-500 shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
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
                        selectedModule === idx ? "text-blue-500" : "text-gray-400"
                      }`}
                    />
                  </div>
                  {lockedModule && (
                    <Lock className="absolute top-2 right-2 rounded-full bg-yellow-300 p-2 w-8 h-8 text-yellow-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="w-full md:w-2/3 bg-white p-8 rounded-xl shadow-lg border border-gray-200 relative">
            <div
              className={isContentLocked ? "filter blur-sm pointer-events-none" : ""}
            >
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

            {isContentLocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70">
                <Lock className="w-12 h-12 text-gray-500 mb-4" />
                <p className="text-gray-700 mb-4 text-center px-4">
                  This content is locked. Please <strong>contact us</strong> to unlock.
                </p>
                <button
                  onClick={() => router.push("/contact_us")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
