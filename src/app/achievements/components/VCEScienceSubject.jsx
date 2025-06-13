// components/subjects/VCEScienceSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Separator } from "@/components/ui/separator";

export const VCEScienceSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="grid grid-cols-3 gap-8 w-full max-w-md">
        {data.compactStats.map((subject, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <PercentageCircle
              value={subject.value}
              size="w-20 h-20"
              color="text-[#dfb67e]"
              borderColor="border-[#dfb67e]/30"
            />
            <p className="text-sm mt-3 text-center font-medium text-[#9c7146]">
              {subject.label}
            </p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 科目详情卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.details.map((subject, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-sm border border-[#dfb67e]/20 bg-gradient-to-br from-orange-50/50 to-amber-50/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <h4 className="text-xl font-bold mb-4 text-[#9c7146] text-center">
                {subject.title}
              </h4>
              
              <div className="space-y-3 mb-6">
                {subject.stats.map((stat, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-[#9c7146] mr-2 font-bold">•</span>
                    <p className="text-sm text-gray-700">{stat}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-[#9c7146]/20" />

              <div className="flex flex-col items-center justify-center">
                <PercentageCircle
                  value={subject.percentage}
                  size="w-20 h-20"
                  textSize="text-lg"
                  color="text-[#dfb67e]"
                  borderColor="border-[#dfb67e]/30"
                />
                <p className="text-sm mt-3 text-center font-medium text-[#b8926b]">
                  {subject.percentageLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 课程优势部分 */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-2xl font-bold text-[#9c7146] text-center border-b-2 border-[#dfb67e]/20 pb-4">
            {data.advantages.title}
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.advantages.points.map((point, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 shadow-md border border-[#dfb67e]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-[#dfb67e] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 mr-4 mt-1">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold mb-3 text-[#9c7146]">{point.title}</h5>
                    <p className="text-gray-700 leading-relaxed">
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
          transition={{ delay: 0.8 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#dfb67e]/50 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    }
  />
);