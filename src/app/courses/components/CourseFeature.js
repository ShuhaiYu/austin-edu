"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
import { motion } from "framer-motion";

export const CourseFeature = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = coursesContent[lang].feature;

  return (
    <section className="py-16 bg-accent/10">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-2 gap-8">
          {t.advantages.map((advantage, index) => (
            <motion.div 
              key={advantage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-background shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-lg">{advantage}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};