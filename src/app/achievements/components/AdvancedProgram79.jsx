"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

const renderTextWithBold = (text) => {
  if (!text) return text;

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

export const AdvancedProgram79 = ({ data }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex flex-col items-center space-y-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-4xl w-full">
          <div className="flex flex-col items-center">
            {data.headerText && (
              <p className="text-base font-medium text-gray-600 text-center max-w-64 mb-4 leading-8">
                {data.headerText}
              </p>
            )}
            <PercentageCircle
              value={data.compactStat.value}
              size="w-24 h-24"
              color="text-[#c12731]"
              borderColor="border-[#c12731]/60"
            />
            <p className="text-base text-gray-600 text-center mt-3 max-w-48 leading-8">
              {data.compactStat.description}
            </p>
          </div>

          {data.additionalText && (
            <div className="flex-1 max-w-md">
              <div className="p-6 bg-red-50/50 rounded-xl border-l-4 border-[#c12731]/30">
                <p className="text-lg leading-8 text-gray-600">
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