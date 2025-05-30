// components/subjects/ScienceSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const VCEScienceSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="[#dfb67e]"
    compactContent={
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {data.compactStats.map((subject, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <PercentageCircle
              value={subject.value}
              size="w-16 h-16 md:w-24 md:h-24"
              color="text-[#dfb67e]"
              borderColor="border-[#dfb67e]/30"
            />
            <p className="text-xs md:text-sm mt-2 text-center font-medium text-[#9c7146]">
              {subject.label}
            </p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 科目详情卡片 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {data.details.map((subject, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-xl shadow-sm border border-[#dfb67e]/20 bg-gradient-to-br from-orange-50/50 to-amber-50/30 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h4 className="text-xl font-bold mb-4 text-[#9c7146]">
                {subject.title}
              </h4>
              
              <div className="space-y-3 mb-4">
                {subject.stats.map((stat, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-[#9c7146] mr-2 font-bold">•</span>
                    <p className="text-sm md:text-base text-gray-700">{stat}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-[#9c7146]/20" />

              <div className="flex flex-col items-center justify-center mt-2">
                <PercentageCircle
                  value={subject.percentage}
                  size="w-16 h-16 md:w-20 md:h-20"
                  textSize="text-md md:text-xl"
                  color="text-[#dfb67e]"
                  borderColor="border-[#dfb67e]/30"
                />
                <p className="text-sm mt-2 text-center font-medium text-[#b8926b]">
                  {subject.percentageLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 课程优势部分 */}
        <motion.div
          className="space-y-6 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-[#9c7146] text-center border-b-2 border-[#dfb67e]/20 pb-3">
            {data.advantages.title}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.advantages.points.map((point, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 shadow-md border border-[#dfb67e]/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-[#dfb67e] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mr-3 mt-1">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold mb-2 text-[#9c7146]">{point.title}</h5>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 底部装饰性元素 */}
        <motion.div 
          className="flex justify-center pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#dfb67e]/50 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    }
  />
);