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
      <div className="grid grid-cols-3 gap-12 w-full">
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
              size="w-24 h-24"
              color="text-[#dfb67e]"
              borderColor="border-[#dfb67e]/30"
              delay={index * 0.3}
            />
            <p className="text-base mt-4 text-center font-medium text-[#9c7146] leading-8">
              {subject.label}
            </p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-12">
        {/* 科目详情卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.details.map((subject, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl shadow-sm border border-[#dfb67e]/20 bg-gradient-to-br from-orange-50/50 to-amber-50/30 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.2 }}
            >
              <h4 className="text-2xl font-semibold mb-6 text-[#9c7146] text-center leading-tight">
                {subject.title}
              </h4>

              <div className="space-y-4 mb-8">
                {subject.stats.map((stat, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-[#9c7146] mr-3 font-bold text-lg">
                      •
                    </span>
                    <p className="text-base text-gray-600 leading-8">{stat}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-6 bg-[#9c7146]/20" />

              <div className="flex flex-col items-center justify-center space-y-4">
                <PercentageCircle
                  value={subject.percentage}
                  size="w-18 h-18"
                  textSize="text-xl"
                  color="text-[#dfb67e]"
                  borderColor="border-[#dfb67e]/30"
                  delay={0.5 + index * 0.2}
                />
                <p className="text-base text-center font-medium text-[#b8926b] leading-6">
                  {subject.percentageLabel}
                </p>
                
                {/* View Course Button for each subject */}
                {subject.target && (
                  <Button 
                    className="mt-4 px-6 py-2 text-sm bg-[#9c7146] hover:bg-[#9c7146]/90 text-white leading-5"
                    onClick={() => onLearnMore && onLearnMore(subject.target)}
                  >
                    <span className="mr-2">{subject.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 课程优势部分 */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-3xl font-bold text-[#9c7146] text-center border-b-2 border-[#dfb67e]/20 pb-6 leading-tight">
            {data.advantages.title}
          </h4>
          <div className="grid gap-10 md:grid-cols-3">
            {data.advantages.points.map((point, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-red-200 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div className="flex items-start mb-6 gap-6">
                  <span className="text-white text-center p-4 font-bold bg-[#dfb67e] rounded-full w-14 h-14 flex items-center justify-center text-xl flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <h5 className="font-semibold text-xl text-[#9c7146] leading-7">
                    {point.title}
                  </h5>
                </div>
                <p className="text-base text-gray-600 leading-8">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#dfb67e]/50 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    }
  />
);