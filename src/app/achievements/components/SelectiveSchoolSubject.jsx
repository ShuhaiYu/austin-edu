// components/subjects/SelectiveSchoolSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const SelectiveSchoolSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <PercentageCircle
            value={data.compactStat.value}
            size="w-20 h-20 sm:w-24 sm:h-24"
            color="text-primary"
            borderColor="border-primary/60"
          />
          <p className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 text-primary leading-tight">
            {data.compactStat.label}
          </p>
        </motion.div>

        {data.compactStat.description && (
          <motion.p
            className="text-sm sm:text-base text-gray-600 text-center max-w-md leading-6 sm:leading-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {data.compactStat.description}
          </motion.p>
        )}
      </div>
    }
    expandedContent={
      <div className="space-y-6 sm:space-y-7 lg:space-y-8">
        {data.expandedContent?.title && (
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-4 sm:mb-5 lg:mb-6 leading-tight">
            {data.expandedContent.title}
          </h4>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {data.expandedContent?.admissions?.map((school, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <div className="p-4 sm:p-5 lg:p-6 text-center">
                <div className="absolute inset-0 bg-blue-50/50 transition-opacity duration-300 rounded-xl border border-blue-100"></div>
                <div className="relative z-10">
                  <h5 className="text-sm sm:text-base font-semibold text-primary mb-2 sm:mb-3 leading-tight">
                    {school.name}
                  </h5>
                  <div className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 bg-blue-100 rounded-full">
                    <span className="text-xs sm:text-sm font-semibold text-primary leading-4 sm:leading-5">
                      {school.admissions}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Button 
            className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg bg-primary hover:bg-primary/90 leading-6"
            onClick={onLearnMore}
          >
              <span className="mr-2">{data.buttonText}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);
