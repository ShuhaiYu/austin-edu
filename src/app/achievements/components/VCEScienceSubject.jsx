// components/subjects/VCEScienceSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const VCEScienceSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full max-w-4xl">
        {data.compactStats.map((subject, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <PercentageCircle
              value={subject.value}
              size="w-20 h-20 sm:w-24 sm:h-24"
              color="text-[#dfb67e]"
              borderColor="border-[#dfb67e]/30"
              delay={index * 0.3}
            />
            <p className="text-sm sm:text-base mt-3 sm:mt-4 text-center font-medium text-[#9c7146] leading-6 sm:leading-8 max-w-[120px] sm:max-w-none">
              {subject.label}
            </p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {/* 科目详情卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {data.details.map((subject, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-7 lg:p-8 rounded-xl shadow-sm border border-[#dfb67e]/20 bg-gradient-to-br from-orange-50/50 to-amber-50/30 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.2 }}
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-[#9c7146] text-center leading-tight">
                {subject.title}
              </h4>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 lg:mb-8">
                {subject.stats.map((stat, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-[#9c7146] mr-2 sm:mr-3 font-bold text-base sm:text-lg flex-shrink-0">
                      •
                    </span>
                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">{stat}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-4 sm:my-5 lg:my-6 bg-[#9c7146]/20" />

              <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                <PercentageCircle
                  value={subject.percentage}
                  size="w-16 h-16 sm:w-18 sm:h-18"
                  textSize="text-lg sm:text-xl"
                  color="text-[#dfb67e]"
                  borderColor="border-[#dfb67e]/30"
                  delay={0.5 + index * 0.2}
                />
                <p className="text-sm sm:text-base text-center font-medium text-[#b8926b] leading-5 sm:leading-6">
                  {subject.percentageLabel}
                </p>
                
                {/* View Course Button for each subject */}
                {subject.target && (
                  <Button 
                    className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 text-xs sm:text-sm bg-[#9c7146] hover:bg-[#9c7146]/90 text-white leading-4 sm:leading-5"
                    onClick={() => onLearnMore && onLearnMore(subject.target)}
                  >
                    <span className="mr-1.5 sm:mr-2">{subject.buttonText}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 课程优势部分 */}
        <motion.div
          className="space-y-8 sm:space-y-9 lg:space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#9c7146] text-center border-b-2 border-[#dfb67e]/20 pb-4 sm:pb-5 lg:pb-6 leading-tight">
            {data.advantages.title}
          </h4>
          <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-3">
            {data.advantages.points.map((point, i) => (
              <motion.div
                key={i}
                className="p-6 sm:p-7 lg:p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-red-200 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-5 lg:mb-6 gap-4 sm:gap-6">
                  <span className="text-white text-center p-3 sm:p-4 font-bold bg-[#dfb67e] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <h5 className="font-semibold text-lg sm:text-xl text-[#9c7146] leading-6 sm:leading-7">
                    {point.title}
                  </h5>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center pt-6 sm:pt-7 lg:pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#dfb67e]/50 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    }
  />
);