import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { Button } from "@/components/ui/button";

export const VCEMathSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="[#c12731]"
    compactContent={
      <div className="flex items-center justify-center gap-4">
        <p className="w-2/3 text-center">
            {data.compactStats}
        </p>
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 分块1 */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-xl font-semibold text-blue-600">{data.block1.title}</h4>
            <ul className="space-y-3">
              {data.block1.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* 分块2 */}
          <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="text-xl font-semibold text-purple-600">{data.block2.title}</h4>
            <div className="grid grid-cols-2 gap-4">
              {data.block2.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-3 bg-white rounded">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 分块3 */}
        <motion.div 
          className="p-4 bg-green-50 rounded-lg"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <h4 className="text-xl font-semibold text-green-600 mb-4">{data.block3.title}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {data.block3.schools.map((school, i) => (
              <span 
                key={i}
                className="badge badge-outline bg-white border-green-200 text-green-700"
              >
                {school}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 分块4 */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {data.block4.points.map((point, i) => (
            <div 
              key={i}
              className="p-6 bg-orange-50 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h5 className="text-lg font-semibold text-orange-600 mb-2">
                {point.title}
              </h5>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    }
  />
);