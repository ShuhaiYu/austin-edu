// components/subjects/MDProgramSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MDProgramSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="primary"
    compactContent={
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        {data.compactStats.map((stat, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center p-4"
            whileHover={{ scale: 1.05 }}
          >
            <PercentageCircle 
              value={stat.value} 
              size="w-16 h-16 md:w-24 md:h-24"
              color="text-primary"
              borderColor="border-primary/30"
            />
            <p className="text-xs md:text-sm mt-2 text-center font-medium max-w-[120px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 简介文字 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
            {data.introText}
          </h3>
        </motion.div>
        
        {/* 主要统计卡片 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {data.fullStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm border border-primary/20"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-center mb-4">
                <PercentageCircle 
                  value={stat.value} 
                  size="w-20 h-20 md:w-24 md:h-24"
                  color="text-primary"
                  borderColor="border-primary/30"
                  textSize="text-xl md:text-2xl"
                />
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {stat.label}
                </h4>
                {stat.subLabel && (
                  <p className="text-sm text-primary font-medium mb-3">
                    {stat.subLabel}
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 附加信息 */}
        <motion.div 
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-lg font-bold text-center mb-4 text-gray-700">
            Program Highlights
          </h4>
          
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <ul className="space-y-3">
              {data.additionalInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{info}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Learn More About Our MD Program
            </Button>
          </div>
        </motion.div>
      </div>
    }
  />
);