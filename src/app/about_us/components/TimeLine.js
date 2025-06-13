"use client";

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
      <span className="absolute -left-21 top-2 w-3 h-3 bg-primary rounded-full" />

      {/* 事件文本 */}
      <span>{event}</span>
    </motion.li>
  );
};

// 年份组组件
const YearGroup = ({ year, events }) => {
  const groupRef = useRef(null);
  const isInView = useInView(groupRef, { margin: "-10% 0px" });

  return (
    <div ref={groupRef} className="relative mb-12 pl-20">
      {/* 本年份的竖线 */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "anticipate" }}
      />

      {/* 年份 */}
      <motion.div
        className="absolute -left-[200px] top-0 text-5xl font-bold text-primary text-right w-[100px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -20,
        }}
      >
        {year}
      </motion.div>

      {/* 事件列表 */}
      <ul className="space-y-10">
        {events.map((event, index) => (
          <EventItem key={index} event={event} index={index} />
        ))}
      </ul>
    </div>
  );
};

// 主时间轴组件
const TimelineSection = ({ content }) => {
  const sectionRef = useRef(null);
  useInView(sectionRef, { margin: "-20% 0px" });

  return (
    <section className="py-16" ref={sectionRef}>
      <div className="flex flex-col items-center justify-center mb-16 space-y-4">
        <h2 className="text-3xl text-center mb-8">{content.title}</h2>
        <p className="text-5xl font-light  whitespace-pre-line">
          Where{" "}
          <span className="text-primary uppercase font-bold">
            DEDICATION
          </span>
        </p>
        <p className="text-5xl font-light  whitespace-pre-line">
          Meets{" "}
          <span className="text-primary uppercase font-bold">
            DISTINCTION
          </span>
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
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
