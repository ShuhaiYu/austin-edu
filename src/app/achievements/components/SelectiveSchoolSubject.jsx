// components/subjects/SelectiveSchoolSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const SelectiveSchoolSubject = ({ data }) => (
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
            color="text-primary"
            borderColor="border-primary/60"
          />
          <p className="text-lg font-semibold mt-4">{data.compactStat.label}</p>
        </motion.div>
      </div>
    }
    expandedContent={
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data.admissions.map((school, index) => (
          <div 
            key={index}
            className="p-4 bg-indigo-50 rounded-lg text-center"
          >
            <h5 className="text-lg font-bold text-indigo-800 mb-2">
              {school.name}
            </h5>
            <p className="text-sm">
              {school.admissions}
            </p>
          </div>
        ))}
      </motion.div>
    }
  />
);