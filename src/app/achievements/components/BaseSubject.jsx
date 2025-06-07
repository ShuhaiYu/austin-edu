// components/subjects/BaseSubject.jsx
"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator"

export const BaseSubject = ({ 
  title,
  compactContent,
  expandedContent,
  color
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-background my-16 relative"
    >
      {/* Section Divider with Title */}
      <div className="relative mb-12">
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
        
        {/* Title with decorative lines */}
        <div className="relative flex items-center justify-center">
          <div className="bg-background px-8 py-4">
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-center text-gray-800 tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {title}
            </motion.h3>
            
            {/* Decorative elements under title */}
            <div className="flex justify-center mt-4">
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary/60"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-primary to-primary/60"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Content with enhanced spacing */}
      <motion.div 
        className="flex gap-6 mb-12 items-center justify-center px-8 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {compactContent}
      </motion.div>

      {/* Always show expanded content if it exists */}
      {expandedContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="px-8 pb-12 space-y-8"
        >
          {/* Enhanced separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-4">
                <div className="w-8 h-px bg-primary"></div>
              </div>
            </div>
          </div>
          
          {expandedContent}
        </motion.div>
      )}

      {/* Bottom section divider */}
      <div className="relative mt-16 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <motion.div 
              className="flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};