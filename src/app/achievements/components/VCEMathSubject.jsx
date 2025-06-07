// components/subjects/VCEMathSubject.jsx
import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";

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
    compactContent={
      <div className="flex items-center justify-center w-full">
        <div className="max-w-2xl text-center text-lg leading-relaxed">{data.compactStats}</div>
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 分块1 - 单独一行 */}
        <motion.div 
          className="p-6 bg-red-50/50 rounded-xl border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-[#c12731] mb-6">{data.block1.title}</h3>
          <ul className="space-y-4 text-lg">
            {data.block1.points.map((point, i) => (
              <motion.li 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-[#c12731] mr-3 text-xl font-bold">•</span>
                <span className="text-gray-700 leading-relaxed">
                  {renderTextWithBold(point)}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 分块2和3 - 左右共占一行 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 分块2 */}
          <motion.div
            className="p-6 bg-red-50/50 rounded-xl border border-red-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#c12731] mb-6">
              {data.block2.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.block2.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-sm border border-red-100 text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-[#c12731] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 分块3 */}
          <motion.div
            className="p-6 bg-red-50/50 rounded-xl border border-red-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[#c12731] mb-6">{data.block3.title}</h3>
            <div className="flex flex-wrap gap-3">
              {data.block3.schools.map((school, i) => (
                <motion.span 
                  key={i}
                  className="px-4 py-2 bg-white rounded-full text-[#c12731] border border-red-200 text-sm font-medium hover:bg-red-50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {school}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 分块4 - 单独一行 */}
        <motion.div 
          className="p-8 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl border border-red-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#c12731] mb-8 text-center">{data.block4.title}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.block4.points.map((point, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c12731] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#c12731] mb-4">{point.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-base">{point.description}</p>
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