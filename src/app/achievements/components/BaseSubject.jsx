// components/subjects/BaseSubject.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator"

export const BaseSubject = ({ 
  title,
  compactContent,
  expandedContent,
  initialCompact = false,
  color
}) => {
  const [isExpanded, setIsExpanded] = useState(initialCompact);

  const bgColor = (color ? `bg-${color}` : "bg-background");


  return (
    <motion.div
      layout
      className="bg-background rounded-2xl shadow-lg cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.h3 layout className={`text-2xl rounded-t-2xl p-6 font-bold mb-4 text-center text-white ${bgColor}`}>{title}</motion.h3>

      <motion.div layout className="flex gap-4 mb-4 items-center justify-center">
        {compactContent}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            className="p-6 space-y-4"
          >
            <Separator className="my-4" />
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

