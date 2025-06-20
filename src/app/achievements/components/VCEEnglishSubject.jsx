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
      <div className="grid grid-cols-2 gap-12 w-full max-w-lg">
        {data.compactStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <PercentageCircle
              value={stat.value}
              size="w-28 h-28"
              color="text-austin-red"
              borderColor="border-austin-red/60"
              delay={index * 0.3}
            />
            <p className="text-base mt-4 text-center font-medium leading-8 text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {data.classes.austin.map((part, i) => (
              <motion.div 
                key={i} 
                className="space-y-6 p-8 bg-red-50 rounded-xl border border-red-200 shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-2xl font-semibold text-austin-red leading-tight">{part.title}</h4>
                <ul className="list-disc pl-6 space-y-3">
                  {part.stats.map((stat, i) => (
                    <li key={i} className="text-base text-gray-600 leading-8">{stat}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="space-y-6 p-8 bg-gray-50/50 rounded-xl border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 leading-tight">
              {data.classes.school.title}
            </h4>
            <p className="text-base text-gray-600 leading-8">{data.classes.school.description}</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {data.classes.school.schools.map((school, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 text-center leading-6">
                  {school}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-10">
          <h4 className="text-3xl font-bold text-center text-gray-800 border-b border-gray-200 pb-6 leading-tight">{data.keyPoints.title}</h4>
          <div className="grid gap-10 md:grid-cols-3">
            {data.keyPoints.points.map((point, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-austin-red/5 border border-red-200 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div className="flex items-start mb-6 gap-6">
                  <span className="text-white text-center p-4 font-bold bg-austin-red rounded-full w-14 h-14 flex items-center justify-center text-xl flex-shrink-0">
                    {i + 1}
                  </span>
                  <h5 className="font-semibold text-xl text-gray-800 leading-7">{point.title}</h5>
                </div>
                <p className="text-base text-gray-600 leading-8">{point.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="mx-auto px-10 py-4 text-lg bg-austin-red hover:bg-austin-red/80 leading-6">Learn More</Button>
          </div>
        </div>
      </div>
    }
  />
);