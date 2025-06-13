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
    compactContent={
      <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
        {data.compactStats.map((stat, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center p-4"
          >
            <PercentageCircle 
              value={stat.value} 
              size="w-24 h-24"
              color="text-primary"
              borderColor="border-primary/30"
            />
            <p className="text-sm mt-3 text-center font-medium max-w-[120px]">
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
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-6">
            {data.introText}
          </h3>
        </motion.div>
        
        {/* 主要统计卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.fullStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm border border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <PercentageCircle 
                  value={stat.value} 
                  size="w-24 h-24"
                  color="text-primary"
                  borderColor="border-primary/30"
                  textSize="text-2xl"
                />
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {stat.label}
                </h4>
                {stat.subLabel && (
                  <p className="text-sm text-primary font-medium mb-4">
                    {stat.subLabel}
                  </p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 附加信息 */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-center text-gray-700">
            Program Highlights
          </h4>
          
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
            <ul className="space-y-4">
              {data.additionalInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base leading-relaxed">{info}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              Learn More About Our MD Program
            </Button>
          </div>
        </motion.div>
      </div>
    }
  />
);