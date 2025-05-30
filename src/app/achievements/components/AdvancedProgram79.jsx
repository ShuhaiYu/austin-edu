// components/subjects/AdvancedProgram79.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const AdvancedProgram79 = ({ data }) => {
  // Function to render text with bold formatting
  const renderTextWithBold = (text) => {
    if (!text) return text;

    // Split by ** markers and render alternating normal and bold text
    const parts = text.split("**");
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-bold text-red-700">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <BaseSubject
      title={data.title}
      color="[#c12731]"
      compactContent={
        <div className="flex flex-col items-center space-y-6">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-4xl">
            {/* Percentage Circle */}
            <div className="flex flex-col items-center">
              {/* Header Text */}
              {data.headerText && (
                <p className="text-base font-medium text-gray-700 text-center max-w-64 mb-4">
                  {data.headerText}
                </p>
              )}
              <PercentageCircle
                value={data.compactStat.value}
                size="w-24 h-24"
                color="text-[#c12731]"
                borderColor="border-[#c12731]/60"
              />
              <p className="text-sm text-gray-600 text-center mt-3 max-w-48">
                {data.compactStat.description}
              </p>
            </div>

            {/* Additional Text */}
            {data.additionalText && (
              <div
                className="flex-1 max-w-md"
                
              >
                <div className="p-4 bg-red-50/50 rounded-xl border-l-4 border-[#c12731]/30">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {renderTextWithBold(data.additionalText)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      }
      expandedContent={null}
    />
  );
};
