// components/subjects/ScholarshipSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ScholarshipSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center">
          <PercentageCircle
            value={data.compactStat.value}
            size="w-24 h-24"
            color="text-primary"
            borderColor="border-primary/60"
          />
          <p className="text-xl font-semibold mt-4 text-primary leading-tight">
            {data.compactStat.label}
          </p>
        </div>

        {data.compactStat.description && (
          <motion.p
            className="text-base text-gray-600 text-center max-w-md leading-8"
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
      <div className="space-y-8">
        {data.expandedContent?.title && (
          <h4 className="text-xl font-semibold text-gray-800 text-center mb-6 leading-tight">
            {data.expandedContent.title}
          </h4>
        )}

        <div className="space-y-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-0">
            {data.expandedContent?.schools?.map((school, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + Math.min(index * 0.02, 0.8) }}
              >
                <div className="flex items-start gap-3 py-3 rounded-lg px-3 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-gray-800 text-sm leading-6">
                        {school.name}
                      </span>
                      {school.rate && (
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 leading-4 ${
                            school.rate.includes("confidential") ||
                            school.rate.includes("保密")
                              ? "bg-gray-100 text-gray-600"
                              : "bg-blue-100 text-primary"
                          }`}
                        >
                          {school.rate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.p
            className="text-sm text-gray-500 italic leading-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            * Some admission rates may vary by year and application strength
          </motion.p>
          
          {/* Learn More Button */}
          <Button 
            className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 leading-6"
            onClick={onLearnMore}
          >
              <span className="mr-2">{data.buttonText}</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);