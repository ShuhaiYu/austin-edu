// components/subjects/AdvancedProgram79.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const AdvancedProgram79 = ({ data }) => (
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
            color="text-sky-500"
          />
          <div className="max-w-[200px]">
            <p className="text-sm">{data.description}</p>
            <p className="text-xs text-gray-600 mt-2">{data.additionalText}</p>
          </div>
        </motion.div>
      </div>
    }
    expandedContent={null}
  />
);