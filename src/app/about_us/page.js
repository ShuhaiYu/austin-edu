"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";
import { CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import { aboutUsContent } from "./content";
import FAQ from "@/components/FAQ";

export default function AboutPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = aboutUsContent[lang];
  return (
    <div className="container mx-auto px-4 py-16">
      {/* About Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center py-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">{content.aboutSection.title}</h2>
          <p className="text-lg text-muted-foreground text-justify">
            {content.aboutSection.content}
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={content.aboutSection.image}
            width={600}
            height={400}
            alt="About Austin"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          {content.historySection.title}
          <br />
          <span className="text-2xl text-muted-foreground whitespace-pre-line">
            {content.historySection.subtitle}
          </span>
        </h2>

        {/* Timeline渲染逻辑 */}
        <div className="relative max-w-4xl mx-auto">
          {content.historySection.timeline.map((item, index) => (
            <div key={index} className="relative pl-16 mb-12">
              <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {item.events.map((event, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold">{content.visionSection.title}</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center ">
          <div className="flex-1 space-y-6">
            <p className="text-lg text-muted-foreground">
              {content.visionSection.content}
            </p>
            <ul className="space-y-4">
              {content.visionSection.points.map((item, i) => {
                const [title, description] = item.split("; ");
                return (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <li key={i} className="flex flex-col items-start">
                      <span className="font-bold">{title}</span>
                      <span className="text-muted-foreground">
                        {description}
                      </span>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 items-center justify-center">
            <Image
              src={content.visionSection.image}
              width={600}
              height={400}
              alt="Our Vision"
              className="rounded-lg shadow-lg"
            />
            <p className="text-muted-foreground text-sm mt-4">
              {content.visionSection.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="py-16">
        {content.campusesSection.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
            <div className="grid md:grid-cols-2  gap-8">
              {section.campuses.map((campus, i) => (
                <div key={i} className="rounded-lg p-6">
                  <h3 className="text-xl font-bold">{campus.name}</h3>
                  <div className="h-1 bg-primary w-10 mb-4" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{campus.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>{campus.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>{campus.email}</span>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="mt-6 bg-muted h-48 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <FAQ />
    </div>
  );
}
