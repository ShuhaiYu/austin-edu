// components/subjects/MDProgramSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";

export const MDProgramSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="primary"
    compactContent={
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        {data.compactStats.map((stat, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <PercentageCircle 
              value={stat.value} 
              size="w-20 h-20"
              color="text-primary"
                borderColor="border-primary/60"
            />
            <p className="text-sm mt-2 text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <motion.div 
        className="grid md:grid-cols-3 gap-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data.fullStats.map((stat, index) => (
          <div key={index} className="space-y-4 p-8 bg-primary/10 rounded-lg">
            <PercentageCircle 
              value={stat.value} 
              size="w-24 h-24"
              color="text-primary"
                borderColor="border-primary/60"
              textSize="text-2xl"
            />
            <p className="text-sm font-semibold">{stat.label}</p>
            {stat.subLabel && (
              <p className="text-xs text-gray-600">{stat.subLabel}</p>
            )}
          </div>
        ))}
      </motion.div>
    }
  />
);