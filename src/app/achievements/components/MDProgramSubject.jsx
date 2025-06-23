// components/subjects/MDProgramSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MDProgramSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-lg">
        {data.compactStats.map((stat, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center p-3 sm:p-4"
          >
            <PercentageCircle 
              value={stat.value} 
              size="w-20 h-20 sm:w-24 sm:h-24"
              color="text-primary"
              borderColor="border-primary/30"
            />
            <p className="text-sm sm:text-base mt-2 sm:mt-3 text-center font-medium max-w-[100px] sm:max-w-[120px] leading-5 sm:leading-6 text-gray-600">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-6 sm:space-y-7 lg:space-y-8">
        {/* 简介文字 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-4 sm:mb-5 lg:mb-6 leading-tight">
            {data.introText}
          </h3>
        </motion.div>
        
        {/* 主要统计卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {data.fullStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="p-6 sm:p-7 lg:p-8 bg-white rounded-xl shadow-sm border border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
                <PercentageCircle 
                  value={stat.value} 
                  size="w-20 h-20 sm:w-24 sm:h-24"
                  color="text-primary"
                  borderColor="border-primary/30"
                  textSize="text-lg sm:text-xl lg:text-2xl"
                />
              </div>
              
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">
                  {stat.label}
                </h4>
                {stat.subLabel && (
                  <p className="text-xs sm:text-sm text-primary font-medium mb-3 sm:mb-4 leading-5 sm:leading-6">
                    {stat.subLabel}
                  </p>
                )}
                <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 附加信息 */}
        <motion.div 
          className="space-y-4 sm:space-y-5 lg:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-lg sm:text-xl font-semibold text-center text-gray-700 leading-tight">
            Program Highlights
          </h4>
          
          <div className="bg-primary/5 p-6 sm:p-7 lg:p-8 rounded-xl border border-primary/10">
            <ul className="space-y-3 sm:space-y-4">
              {data.additionalInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">{info}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg leading-6"
              onClick={onLearnMore}
            >
              <span className="mr-2">{data.buttonText}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);