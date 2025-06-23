"use client";

import Slogan from "@/components/Slogan";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 单个事件项组件
const EventItem = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-15% 0px" });

  return (
    <motion.li
      ref={ref}
      className="relative pl-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -20,
      }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* 点，绝对定位在竖线上 */}
      <span className="absolute -left-[21px] top-2 w-3 h-3 bg-primary rounded-full" />

      {/* 事件文本 */}
      <span className="text-sm sm:text-base lg:text-lg leading-relaxed block">
        {event}
      </span>
    </motion.li>
  );
};

// 年份组组件
const YearGroup = ({ year, events }) => {
  const groupRef = useRef(null);
  const isInView = useInView(groupRef, { margin: "-10% 0px" });

  return (
    <div ref={groupRef} className="relative mb-12">
      {/* 使用 Grid 布局来处理响应式 */}
      <div className="grid grid-cols-[minmax(80px,120px)_1fr] md:grid-cols-[minmax(100px,150px)_1fr] gap-4 md:gap-8 items-start">
        {/* 年份部分 - 响应式宽度 */}
        <motion.div
          className="text-right pr-4 md:pr-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -20,
          }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary sticky top-20">
            {year}
          </div>
        </motion.div>

        {/* 内容部分 */}
        <div className="relative">
          {/* 竖线 - 调整位置 */}
          <motion.div
            className="absolute -left-4 md:-left-4.5 top-0 bottom-0 w-1 bg-primary/20 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "anticipate" }}
          />

          {/* 事件列表 */}
          <ul className="space-y-6 md:space-y-10">
            {events.map((event, index) => (
              <EventItem key={index} event={event} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// 主时间轴组件
const TimelineSection = ({ content }) => {
  const sectionRef = useRef(null);
  useInView(sectionRef, { margin: "-20% 0px" });

  return (
    <section className="py-16" ref={sectionRef}>
      <Slogan
        slogans={[
          { prefix: "Where", highlight: "DEDICATION" },
          { prefix: "Meets", highlight: "DISTINCTION" },
        ]}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {content.timeline.map((item, index) => (
            <YearGroup key={index} year={item.year} events={item.events} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
