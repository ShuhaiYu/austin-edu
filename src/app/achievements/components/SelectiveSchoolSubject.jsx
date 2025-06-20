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
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <PercentageCircle
            value={data.compactStat.value}
            size="w-24 h-24"
            color="text-primary"
            borderColor="border-primary/60"
          />
          <p className="text-xl font-semibold mt-4 text-primary leading-tight">
            {data.compactStat.label}
          </p>
        </motion.div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.expandedContent?.admissions?.map((school, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <div className="p-6 text-center">
                <div className="absolute inset-0 bg-blue-50/50 transition-opacity duration-300 rounded-xl border border-blue-100"></div>
                <div className="relative z-10">
                  <h5 className="text-base font-semibold text-primary mb-3 leading-tight">
                    {school.name}
                  </h5>
                  <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full">
                    <span className="text-sm font-semibold text-primary leading-5">
                      {school.admissions}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Learn More Button */}
        <div className="text-center mt-12">
          <Button 
            className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 leading-6"
            onClick={onLearnMore}
          >
            <span className="mr-2">Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);