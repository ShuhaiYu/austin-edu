// src/components/AdmissionProcess.js
"use client";

import { useState, useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";

const steps = [
  {
    part: 1,
    title: "Enrollment Process",
    steps: [
      { title: "Initial Consultation", desc: "Discuss your academic goals" },
      { title: "Document Submission", desc: "Submit required documents" },
      { title: "Assessment Test", desc: "Evaluate current level" }
    ]
  },
  // 添加更多part...
];

export default function AdmissionProcess() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {lang === "zh" ? "入学服务流程" : "Admission Service Process"}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* 时间线 */}
        <div className="md:w-1/3 space-y-8">
          {steps.map((part, i) => (
            <div key={i} className="relative">
              <div className="relative h-24">
                <Image
                  src={`/home/title-bg${part.part}.png`}
                  alt="Part background"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  PART {part.part}
                </div>
              </div>

              <div className="ml-8 border-l-2 border-primary pl-8 space-y-4">
                {part.steps.map((step, j) => (
                  <button
                    key={j}
                    onClick={() => setActiveStep(j)}
                    className={`text-left p-4 rounded-lg transition ${
                      activeStep === j ? "bg-primary/10 border border-primary" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="text-lg font-semibold">{step.title}</div>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 内容展示 */}
        <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-lg">
          {/* 动态内容区域 */}
          <div className="text-primary text-lg mb-4">Step {activeStep + 1}</div>
          <h3 className="text-2xl font-bold mb-4">
            {steps[0].steps[activeStep].title}
          </h3>
          <p className="text-gray-600">
            {steps[0].steps[activeStep].desc}
          </p>
        </div>
      </div>
    </section>
  );
}