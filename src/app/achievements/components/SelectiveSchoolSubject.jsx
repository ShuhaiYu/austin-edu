// components/subjects/SelectiveSchoolSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const SelectiveSchoolSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="primary"
    compactContent={
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <PercentageCircle
            value={data.compactStat.value}
            size="w-24 h-24"
            color="text-primary"
            borderColor="border-primary/60"
          />
          <p className="text-xl font-bold mt-4 text-blue-800">
            {data.compactStat.label}
          </p>
        </motion.div>

        {data.compactStat.description && (
          <motion.p
            className="text-sm text-gray-600 text-center max-w-md leading-relaxed"
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
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.expandedContent?.title && (
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            {data.expandedContent.title}
          </h4>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {data.expandedContent?.admissions?.map((school, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 text-center transition-all duration-300 group-hover:shadow-lg group-hover:border-blue-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <h5 className="text-base font-bold text-blue-900 mb-3 leading-tight">
                    {school.name}
                  </h5>
                  <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full">
                    <span className="text-sm font-semibold text-blue-700">
                      {school.admissions}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    }
  />
);
