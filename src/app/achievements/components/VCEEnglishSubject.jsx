// components/subjects/VCEEnglishSubject.jsx
import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { Button } from "@/components/ui/button";

export const VCEEnglishSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="grid grid-cols-2 gap-8 w-full max-w-md">
        {data.compactStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <PercentageCircle
              value={stat.value}
              size="w-24 h-24"
              color="text-primary"
              borderColor="border-primary/60"
            />
            <p className="text-sm mt-3 text-center font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {data.classes.austin.map((part, i) => (
              <motion.div 
                key={i} 
                className="space-y-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-primary">{part.title}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {part.stats.map((stat, i) => (
                    <li key={i} className="text-gray-700">{stat}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="space-y-4 p-4 bg-gray-50/50 rounded-lg border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-800">
              {data.classes.school.title}
            </h4>
            <p className="text-gray-700 leading-relaxed">{data.classes.school.description}</p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {data.classes.school.schools.map((school, i) => (
                <span key={i} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 text-center">
                  {school}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-center text-gray-800 border-b border-gray-200 pb-3">{data.keyPoints.title}</h4>
          <div className="grid gap-6 md:grid-cols-3">
            {data.keyPoints.points.map((point, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start mb-4 gap-4">
                  <span className="text-white text-center p-3 font-bold bg-primary rounded-full w-12 h-12 flex items-center justify-center text-lg flex-shrink-0">
                    {i + 1}
                  </span>
                  <h5 className="font-bold text-lg text-gray-800 leading-tight">{point.title}</h5>
                </div>
                <p className="text-gray-700 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="mx-auto px-8 py-3 text-lg">Learn More</Button>
          </div>
        </div>
      </div>
    }
  />
);