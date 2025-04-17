"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { coursesContent } from "../content";
import { motion } from "framer-motion";
import Link from "next/link";
import { Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CourseFeature = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const features = coursesContent[lang].feature;

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-8 space-y-24">
        {features.map((feature, featureIndex) => (
          <div key={feature.title}>
            {/* Title & Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground text-3xl">
                {feature.subtitle}
              </p>
              <div className={`h-2 ${feature.color}  w-[150px] mx-auto mt-4`}/>
            </div>

            {/* Advantage Cards */}
            <div
              className={`grid gap-2 ${
                feature.advantages.length === 1
                  ? "grid-cols-1"
                  : feature.advantages.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {feature.advantages.map((adv, index) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-background "
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-white flex items-center justify-center ${feature.textColor}`} >
                      {adv.icon === "Presentation" && (
                        <Presentation className="w-24 h-24 p-2" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{adv.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional Button */}
            {feature.button && feature.button.text && (
              <div className="text-center mt-12">
                <Button
                  className={`px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r ${feature.button.fromColor} ${feature.button.toColor} hover:brightness-110 transition`}
                >
                  {feature.button.text}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
