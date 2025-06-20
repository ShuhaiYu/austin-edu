// components/subjects/VCEMathSubject.jsx
import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";

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

export const VCEMathSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex items-center justify-center w-full">
        <div className="text-center text-xl leading-8">
          {data.compactStats}
        </div>
      </div>
    }
    expandedContent={
      <div className="space-y-12">
        {/* 分块1 */}
        <motion.div
          className="p-10 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">
            {data.block1.title}
          </h3>
          <ul className="space-y-6 text-lg">
            {data.block1.points.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-primary mr-4 text-2xl font-bold">•</span>
                <span className="text-base text-gray-600 leading-8">
                  {renderTextWithBold(point)}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 分块2和3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="p-10 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">
              {data.block2.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.block2.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-lg shadow-sm border border-blue-200 text-center transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-600 leading-6">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-10 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">
              {data.block3.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {data.block3.schools.map((school, i) => (
                <span
                  key={i}
                  className="px-3 py-2 bg-white rounded-full text-primary border border-blue-200 text-sm font-medium transition-colors hover:bg-blue-50"
                >
                  {school}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 分块4 */}
        <motion.div
          className="p-12 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-300 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-primary mb-10 text-center leading-tight">
            {data.block4.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {data.block4.points.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white p-10 rounded-xl shadow-sm border border-blue-200 transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.2 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mt-2">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-primary mb-6 leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-8">
                      {point.description}
                    </p>
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