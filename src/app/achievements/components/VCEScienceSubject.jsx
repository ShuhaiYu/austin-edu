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
      <div className="grid grid-cols-3 gap-16">
        {data.compactStats.map((subject, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <PercentageCircle
              value={subject.value}
              size="w-20 h-20"
              color={
                index === 0
                  ? "text-green-500"
                  : index === 1
                  ? "text-blue-500"
                  : "text-purple-500"
              }
              borderColor={
                index === 0
                  ? "border-green-300"
                  : index === 1
                  ? "border-blue-300"
                  : "border-purple-300"
              }
            />
            <p className="text-sm mt-2 text-center">{subject.label}</p>
          </motion.div>
        ))}
      </div>
    }
    expandedContent={
      <div className="space-y-8">
        {/* 分块1 - 科目详情 */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {data.details.map((subject, index) => (
            <div
              key={index}
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${
                  index === 0 ? "#f0fdf4" : index === 1 ? "#f0f9ff" : "#faf5ff"
                }, white)`,
              }}
            >
              <h4
                className="text-xl font-semibold mb-4"
                style={{
                  color:
                    index === 0
                      ? "#16a34a"
                      : index === 1
                      ? "#2563eb"
                      : "#9333ea",
                }}
              >
                {subject.title}
              </h4>
              <div className="space-y-3">
                {subject.stats.map((stat, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="text-gray-500">•</span>
                    <p className="text-sm">{stat}</p>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col items-center justify-center mt-4 pt-4">
                <PercentageCircle
                  value={subject.percentage}
                  size="w-20 h-20"
                  textSize="text-lg"
                    color={
                        index === 0
                        ? "text-green-500"
                        : index === 1
                        ? "text-blue-500"
                        : "text-purple-500"
                    }
                    borderColor={
                        index === 0
                        ? "border-green-300"
                        : index === 1
                        ? "border-blue-300"
                        : "border-purple-300"
                    }
                />
                <p className="text-sm mt-2 text-center">
                  {subject.percentageLabel}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 分块2 - 课程优势 */}
        <motion.div
          className="space-y-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <h4 className="text-2xl font-bold text-gray-800">
            {data.advantages.title}
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {data.advantages.points.map((point, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <span
                    className="text-2xl font-bold mr-2"
                    style={{
                      color:
                        index === 0
                          ? "#16a34a"
                          : index === 1
                          ? "#2563eb"
                          : "#9333ea",
                    }}
                  >
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <h5 className="text-lg font-semibold">{point.title}</h5>
                </div>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    }
  />
);
