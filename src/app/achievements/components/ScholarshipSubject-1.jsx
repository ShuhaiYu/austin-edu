// components/subjects/ScholarshipSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const ScholarshipSubject1 = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="primary"
    compactContent={
      <div className="flex justify-center">
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <PercentageCircle 
            value={data.compactStat.value} 
            size="w-28 h-28"
            color="text-yellow-500"
          />
          <p className="text-lg font-semibold mt-4">{data.compactStat.label}</p>
        </motion.div>
      </div>
    }
    expandedContent={
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data.schools.map((school, index) => (
          <div 
            key={index}
            className="p-4 bg-yellow-50 rounded-lg flex justify-between items-center"
          >
            <span className="font-medium text-yellow-800">{school.name}</span>
            <span className="text-sm bg-yellow-100 px-3 py-1 rounded-full">
              {school.rate}
            </span>
          </div>
        ))}
      </motion.div>
    }
  />
);