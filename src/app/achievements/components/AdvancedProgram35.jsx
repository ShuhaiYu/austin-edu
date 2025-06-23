// components/subjects/AdvancedProgram35.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const renderTextWithBold35 = (text) => {
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

export const AdvancedProgram35 = ({ data, onLearnMore }) => (
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
            <p className="text-base text-gray-600 text-center mt-3 max-w-2/3 leading-8">
              {data.compactStat.description}
            </p>
          </div>

          {data.additionalText && (
            <div className="flex-1 max-w-md">
              <div className="p-6 bg-red-50/50 rounded-xl border-l-4 border-[#c12731]/30">
                <p className="text-lg leading-8 text-gray-600">
                  {renderTextWithBold35(data.additionalText)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* Block 1 - Education Focus */}
        <motion.div 
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-[#c12731] mb-4 border-b border-[#c12731]/30 pb-2 leading-tight">
            {data.block1.title}
          </h3>
          <p className="text-base text-gray-600 leading-8">
            {data.block1.content}
          </p>
        </motion.div>

        {/* Block 2 - Statistics */}
        <motion.div 
          className="bg-red-50/50 p-6 rounded-xl border border-[#c12731]/30 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#c12731] mb-2 leading-tight">
            {data.block2.title}
          </h3>
          <p className="text-[#c12731] mb-6 font-medium leading-7">
            {data.block2.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.block2.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-[#c12731]/30 transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <PercentageCircle
                      value={stat.value}
                      size="w-16 h-16"
                      color="text-[#c12731]"
                      borderColor="border-[#c12731]/60"
                      textSize="text-xl"
                    />
                  </div>
                  <div className="flex-1 my-auto">
                    <p className="text-gray-600 text-sm leading-7">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Learn More Button */}
        <div className="text-center mt-12">
          <Button 
            className="px-8 py-3 text-lg bg-[#c12731] hover:bg-[#c12731]/90 text-white leading-6"
            onClick={onLearnMore}
          >
              <span className="mr-2">{data.buttonText}</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);