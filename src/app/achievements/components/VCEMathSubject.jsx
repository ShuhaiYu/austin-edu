// components/subjects/VCEMathSubject.jsx
import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Helper function to render text with bold formatting
const renderTextWithBold = (text) => {
  if (typeof text !== "string") return text;

  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-primary">
          {boldText}
        </strong>
      );
    }
    return part;
  });
};

export const VCEMathSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex items-center justify-center w-full">
        <div className="text-center text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 max-w-4xl">
          {data.compactStats}
        </div>
      </div>
    }
    expandedContent={
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* 分块1 */}
        <motion.div
          className="p-6 sm:p-8 lg:p-10 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-6 sm:mb-7 lg:mb-8 leading-tight">
            {data.block1.title}
          </h3>
          <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-base sm:text-lg">
            {data.block1.points.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-primary mr-3 sm:mr-4 text-xl sm:text-2xl font-bold flex-shrink-0">•</span>
                <span className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                  {renderTextWithBold(point)}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 分块2和3 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <motion.div
            className="p-6 sm:p-8 lg:p-10 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-6 sm:mb-7 lg:mb-8 leading-tight">
              {data.block2.title}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
              {data.block2.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 sm:p-7 lg:p-8 rounded-lg shadow-sm border border-blue-200 text-center transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 leading-5 sm:leading-6">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 lg:p-10 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-6 sm:mb-7 lg:mb-8 leading-tight">
              {data.block3.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              {data.block3.schools.map((school, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white rounded-full text-primary border border-blue-200 text-xs sm:text-sm font-medium transition-colors hover:bg-blue-50"
                >
                  {school}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 分块4 */}
        <motion.div
          className="p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-300 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-8 sm:mb-9 lg:mb-10 text-center leading-tight">
            {data.block4.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {data.block4.points.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm border border-blue-200 transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-4 sm:mb-5 lg:mb-6 leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Learn More Button */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Button 
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-primary hover:bg-primary/90 leading-6"
              onClick={onLearnMore}
            >
              <span className="mr-2">{data.buttonText}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    }
  />
);