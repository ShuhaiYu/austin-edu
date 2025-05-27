// components/subjects/AdvancedProgram35.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const AdvancedProgram35 = ({ data }) => (
  <BaseSubject
    title={data.title}
        color="[#c12731]"

    compactContent={
      <div className="flex flex-col items-center gap-4">
        <motion.div 
          className="flex items-center gap-6"
          whileHover={{ scale: 1.02 }}
        >
          <PercentageCircle 
            value={data.percentage} 
            size="w-28 h-28"
            color="text-pink-500"
          />
          <div className="max-w-[200px]">
            <p className="text-sm">{data.description}</p>
            <p className="text-xs text-gray-600 mt-2">{data.additionalText}</p>
          </div>
        </motion.div>
      </div>
    }
    expandedContent={
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 分块1 */}
        <div className="space-y-4 p-6 bg-blue-50 rounded-xl">
          <h4 className="text-xl font-semibold text-blue-600">{data.block1.title}</h4>
          <ul className="space-y-3 list-disc pl-5">
            {data.block1.points.map((point, i) => (
              <li key={i} className="text-sm">{point}</li>
            ))}
          </ul>
        </div>

        {/* 分块2 */}
        <div className="space-y-4 p-6 bg-green-50 rounded-xl">
          <h4 className="text-xl font-semibold text-green-600">{data.block2.title}</h4>
          <div className="grid grid-cols-2 gap-4">
            {data.block2.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-3 bg-white rounded-lg">
                <PercentageCircle 
                  value={stat.value} 
                  size="w-16 h-16"
                  textSize="text-lg"
                />
                <p className="text-xs text-center mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    }
  />
);