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
      <div className="flex items-center justify-center">
        <div className="w-full text-center">
          {data.compactStats}
        </div>
      </div>
    }
    // 无展开内容
    expandedContent={null}
  />
);
