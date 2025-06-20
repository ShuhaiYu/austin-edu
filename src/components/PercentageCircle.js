import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const SimpleAnimatedNumber = ({ value, textSize, shouldAnimate }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericPart = parseFloat(value);
  const suffix = value.replace(/[-\d.]/g, "");

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime = null;
    const duration = 1500; // 减少动画时间

    const animateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // 使用 easeOut 缓动
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * numericPart;
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };
    
    requestAnimationFrame(animateValue);
  }, [numericPart, shouldAnimate]);

  const displayText = shouldAnimate 
    ? (String(numericPart).includes(".") ? displayValue.toFixed(1) : Math.floor(displayValue))
    : "0";

  return (
    <>
      <span className={`inline-block ${textSize} font-bold`}>
        {displayText}
      </span>
      <span className="text-lg font-bold">{suffix}</span>
    </>
  );
};

export const PercentageCircle = ({
  value,
  color = "text-blue-500",
  size = "w-28 h-28",
  textSize = "text-3xl",
  borderColor = "border-gray-300",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const circleRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // 使用单个 IntersectionObserver 实例
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // 减少延迟时间
            setTimeout(() => {
              setShouldAnimate(true);
            }, delay * 500); // 减少延迟倍数
          }
        },
        {
          threshold: 0.2, // 降低阈值
          rootMargin: "20px", // 减少 rootMargin
        }
      );
    }

    if (circleRef.current) {
      observerRef.current.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current && observerRef.current) {
        observerRef.current.unobserve(circleRef.current);
      }
    };
  }, [delay, isVisible]);

  // 清理 observer
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <motion.div 
      ref={circleRef}
      className={`relative inline-block ${size} mx-auto`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.4, // 减少动画时间
        delay: delay * 0.2, // 减少延迟
        ease: "easeOut"
      }}
    >
      {/* 简化的边框 - 移除复杂的旋转动画 */}
      <motion.div
        className={`absolute inset-0 rounded-full transform scale-105 pointer-events-none`}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.3, 
          delay: delay * 0.2 + 0.1,
        }}
      >
        <div className={`w-full h-full border-2 ${borderColor} rounded-full`}></div>
      </motion.div>
      
      {/* 圆形内容 */}
      <motion.div
        className={`${size} rounded-full bg-white flex items-center justify-center shadow-sm`}
        initial={{ scale: 0.8 }}
        animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
        transition={{ 
          duration: 0.3, 
          delay: delay * 0.2,
          ease: "easeOut"
        }}
      >
        <span className={`${color} ${textSize} font-bold`}>
          <SimpleAnimatedNumber 
            value={value} 
            textSize={textSize} 
            shouldAnimate={shouldAnimate}
          />
        </span>
      </motion.div>
    </motion.div>
  );
};