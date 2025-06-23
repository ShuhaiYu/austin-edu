// components/subjects/BaseSubject.jsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BaseSubject = ({ 
  title,
  compactContent,
  expandedContent,
  onLearnMore
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-background my-8 sm:my-12 lg:my-16 relative"
    >
      {/* 统一的标题设计 - 响应式 */}
      <div className="relative mb-8 sm:mb-10 lg:mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="bg-background px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-800 tracking-wide leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h3>
            
            <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4">
              <motion.div 
                className="flex items-center space-x-1 sm:space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="w-6 sm:w-8 h-0.5 bg-primary"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                <div className="w-6 sm:w-8 h-0.5 bg-primary"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 统一的内容区域 - 响应式间距 */}
      <motion.div 
        className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 items-center justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {compactContent}
      </motion.div>

      {/* 展开内容 */}
      {expandedContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="px-3 sm:px-4 lg:px-6 pb-8 sm:pb-10 lg:pb-12 space-y-6 sm:space-y-7 lg:space-y-8"
        >
          <div className="relative my-6 sm:my-7 lg:my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-3 sm:px-4">
                <div className="w-6 sm:w-8 h-px bg-primary"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {expandedContent}
          </div>
        </motion.div>
      )}

      {/* 底部分隔符 - 响应式 */}
      <div className="relative mt-12 sm:mt-14 lg:mt-16 mb-6 sm:mb-7 lg:mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-px bg-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-3 sm:px-4">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};