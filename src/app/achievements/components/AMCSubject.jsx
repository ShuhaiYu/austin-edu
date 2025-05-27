// components/subjects/AMCSubject.jsx
"use client";

import { motion } from "framer-motion";
import { PercentageCircle } from "@/components/PercentageCircle";
import { BaseSubject } from "./BaseSubject";

export const AMCSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    color="[#c12731]"
    compactContent={
      <div className="flex justify-center gap-6">
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <PercentageCircle
            value={data.hd.value}
            size="w-20 h-20"
            color="text-emerald-500"
          />
          <p className="text-sm mt-2">{data.hd.label}</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <PercentageCircle
            value={data.d.value}
            size="w-20 h-20"
            color="text-amber-500"
          />
          <p className="text-sm mt-2">{data.d.label}</p>
        </motion.div>
      </div>
    }
    // 无展开内容
    expandedContent={null}
  />
);
