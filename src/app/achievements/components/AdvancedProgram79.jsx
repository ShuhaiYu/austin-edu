// components/subjects/AdvancedProgram79.jsx
"use client";

import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

export const AdvancedProgram79 = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex flex-col items-center space-y-4 sm:space-y-5 lg:space-y-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-7 lg:gap-8 max-w-4xl w-full">
          <div className="flex flex-col items-center order-2 lg:order-1">
            {data.headerText && (
              <p className="text-sm sm:text-base font-medium text-gray-600 text-center max-w-xs sm:max-w-64 mb-3 sm:mb-4 leading-6 sm:leading-8">
                {data.headerText}
              </p>
            )}
            <PercentageCircle
              value={data.compactStat.value}
              size="w-20 h-20 sm:w-24 sm:h-24"
              color="text-[#c12731]"
              borderColor="border-[#c12731]/60"
            />
            <p className="text-sm sm:text-base text-gray-600 text-center mt-2 sm:mt-3 max-w-xs sm:max-w-2/3 leading-6 sm:leading-8">
              {data.compactStat.description}
            </p>
          </div>

          {data.additionalText && (
            <div className="flex-1 max-w-md order-1 lg:order-2">
              <div className="p-4 sm:p-5 lg:p-6 bg-red-50/50 rounded-xl border-l-4 border-[#c12731]/30">
                <p className="text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
                  {renderTextWithBold(data.additionalText)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    }
    expandedContent={
      <div className="text-center mt-8 sm:mt-10 lg:mt-12">
        <Button
          className="mx-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-austin-red hover:bg-austin-red/80 leading-6"
          onClick={onLearnMore}
        >
          <span className="mr-2">{data.buttonText}</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);