import React from "react";
import { motion } from "framer-motion";
import { BaseSubject } from "./BaseSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { Button } from "@/components/ui/button";

export const VCEEnglishSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="primary"
    compactContent={
      <>
        {data.compactStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <PercentageCircle
              value={stat.value}
              size="w-20 h-20"
              color="text-primary"
              borderColor="border-primary/60"
            />
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </>
    }
    expandedContent={
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {data.classes.austin.map((part, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl font-semibold">{part.title}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {part.stats.map((stat, i) => (
                    <li key={i}>{stat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">
              {data.classes.school.title}
            </h4>
            <p>{data.classes.school.description}</p>
            <div className="grid grid-cols-1 gap-2">
              {data.classes.school.schools.map((school, i) => (
                <span key={i} className="badge badge-outline">
                  {school}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">{data.keyPoints.title}</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {data.keyPoints.points.map((point, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg bg-muted"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-2 gap-6">
                  <span className="text-white text-center p-2 font-bold bg-primary rounded-full w-[40px] h-[40px]">{i + 1}</span>
                  <h5 className="font-bold">{point.title}</h5>
                </div>
                <p className="text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button className="mx-auto">Learn More</Button>
          </div>
        </div>
      </div>
    }
  />
);
