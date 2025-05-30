import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { Button } from "@/components/ui/button";

// Helper function to render text with bold formatting
const renderTextWithBold = (text) => {
  if (typeof text !== 'string') return text;
  
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-[#c12731]">
          {boldText}
        </strong>
      );
    }
    return part;
  });
};

export const VCEMathSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="[#c12731]"
    compactContent={
      <div className="flex items-center justify-center">
        <div className="w-4/5 text-center">{data.compactStats}</div>
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 分块1 - 单独一行 */}
        <motion.div 
          className="p-6 bg-red-50/50 rounded-xl border border-red-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-2xl font-bold text-[#c12731] mb-4">{data.block1.title}</h3>
          <ul className="space-y-3 text-lg">
            {data.block1.points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#c12731] mr-2">•</span>
                <span className="text-gray-700">
                  {renderTextWithBold(point)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 分块2和3 - 左右共占一行 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          {/* 分块2 */}
          <div className="p-6 bg-red-50/50 rounded-xl border border-red-100">
            <h3 className="text-2xl font-bold text-[#c12731] mb-4">
              {data.block2.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {data.block2.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm border border-purple-100"
                >
                  <div className="text-3xl font-bold text-center text-[#c12731]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-center mt-2 text-gray-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 分块3 */}
          <div className="p-6 bg-red-50/50 rounded-xl border border-red-100">
            <h3 className="text-2xl font-bold text-[#c12731] mb-4">{data.block3.title}</h3>
            <div className="flex flex-wrap gap-2">
              {data.block3.schools.map((school, i) => (
                <span 
                  key={i}
                  className="px-3 py-2 bg-white rounded-full text-[#c12731] border border-red-200 text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  {school}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 分块4 - 单独一行 */}
        <motion.div 
          className="p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl border border-red-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-2xl font-bold text-[#c12731] mb-6">{data.block4.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.block4.points.map((point, i) => (
              <motion.div 
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-red-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#c12731] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#c12731] mb-3">{point.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    }
  />
);
