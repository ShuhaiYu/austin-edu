// components/subjects/VCEEnglishSubject.jsx
import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const VCEEnglishSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full max-w-2xl">
        {data.compactStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <PercentageCircle
              value={stat.value}
              size="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
              color="text-austin-red"
              borderColor="border-austin-red/60"
              delay={index * 0.3}
            />
            <p className="text-sm sm:text-base mt-3 sm:mt-4 text-center font-medium leading-6 sm:leading-8 text-gray-600 max-w-[140px] sm:max-w-none">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            {data.classes.austin.map((part, i) => (
              <motion.div 
                key={i} 
                className="space-y-4 sm:space-y-5 lg:space-y-6 p-6 sm:p-7 lg:p-8 bg-red-50 rounded-xl border border-red-200 shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-austin-red leading-tight">
                  {part.title}
                </h4>
                <ul className="list-disc pl-4 sm:pl-5 lg:pl-6 space-y-2 sm:space-y-3">
                  {part.stats.map((stat, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                      {stat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="space-y-4 sm:space-y-5 lg:space-y-6 p-6 sm:p-7 lg:p-8 bg-gray-50/50 rounded-xl border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              {data.classes.school.title}
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
              {data.classes.school.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-5 lg:mt-6">
              {data.classes.school.schools.map((school, i) => (
                <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 border border-gray-200 text-center leading-5 sm:leading-6">
                  {school}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8 sm:space-y-9 lg:space-y-10">
          <h4 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 border-b border-gray-200 pb-4 sm:pb-5 lg:pb-6 leading-tight">
            {data.keyPoints.title}
          </h4>
          <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-3">
            {data.keyPoints.points.map((point, i) => (
              <motion.div
                key={i}
                className="p-6 sm:p-7 lg:p-8 rounded-xl bg-gradient-to-br from-red-50 to-austin-red/5 border border-red-200 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-5 lg:mb-6 gap-4 sm:gap-6">
                  <span className="text-white text-center p-3 sm:p-4 font-bold bg-austin-red rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                    {i + 1}
                  </span>
                  <h5 className="font-semibold text-lg sm:text-xl text-gray-800 leading-6 sm:leading-7">
                    {point.title}
                  </h5>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Button 
              className="mx-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-austin-red hover:bg-austin-red/80 leading-6"
              onClick={onLearnMore}
            >
              <span className="mr-2">{data.buttonText}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    }
  />
);