"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import { achievementContent } from "./content";

import { VCEEnglishSubject } from "./components/VCEEnglishSubject";
import { VCEMathSubject } from "./components/VCEMathSubject";
import { VCEScienceSubject } from "./components/VCEScienceSubject";
import { PercentageCircle } from "@/components/PercentageCircle";
import { MDProgramSubject } from "./components/MDProgramSubject";
import { SelectiveSchoolSubject } from "./components/SelectiveSchoolSubject";
import { AMCSubject } from "./components/AMCSubject";
import { ScholarshipSubject } from "./components/ScholarshipSubject-1";
// import { ScholarshipSubject2 } from "./components/ScholarshipSubject-2";
import { AdvancedProgram35 } from "./components/AdvancedProgram35";
import { AdvancedProgram79 } from "./components/AdvancedProgram79";

export default function Achievements() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const content = achievementContent[lang];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        {/* VCE Card */}
        <div className="bg-gradient-to-br from-[#2798a9] to-primary rounded-2xl p-8 md:p-16 text-white shadow-xl text-center">
          <h2 className="text-4xl font-bold mb-6">{content.vce.title}</h2>
          <p className="mb-4">{content.vce.subTitle}</p>
          <h3 className="text-lg font-bold mb-6">{content.vce.period}</h3>
          <p className="text-sm mb-4">
            {content.vce.stats.map((stat, index) => (
              <span key={index}>
                <span className="font-bold">{stat.count}</span>{" "}
                {stat.description}{" "}
                <span className="font-bold">
                  {content.vce.atarValues[index]}
                </span>
                {index < content.vce.stats.length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {content.vce.percentages.map(({ value, label }) => (
              <div key={value} className="flex flex-col items-center">
                <PercentageCircle
                  value={value}
                  color="text-primary"
                  borderColor="border-[#4bafe3]"
                />
                <p className="text-sm mt-2">
                  {value} {lang === "en" ? "of students" : "的学生"}
                </p>
                <h2 className="text-3xl font-bold mt-1">{label}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* 初中 Card */}
        <div className="bg-gradient-to-br from-[#d2337e] to-[#c12731] rounded-2xl p-8 md:p-16 text-white shadow-xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            {content.juniorHigh.title}
          </h2>
          <p className="text-sm mb-4 whitespace-pre-line">
            {content.juniorHigh.description}
          </p>
          <div className="flex flex-col items-center my-8">
            <PercentageCircle
              value={content.juniorHigh.admissionRate}
              color="text-[#c62b49]"
              borderColor="border-[#f59cb5]"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-left">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                {content.juniorHigh.programs.scholarship.title}
              </h3>
              <p>{content.juniorHigh.programs.scholarship.content}</p>
              <p className="italic text-xs">
                {content.juniorHigh.programs.scholarship.note}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                {content.juniorHigh.programs.amc.title}
              </h3>
              {content.juniorHigh.programs.amc.results.map((result, index) => (
                <p key={index}>{result}</p>
              ))}
              <h3 className="text-xl font-bold mt-4">
                {content.juniorHigh.programs.advanced.title}
              </h3>
              <p>{content.juniorHigh.programs.advanced.content}</p>
            </div>
          </div>
        </div>

        {/* 小学 Card */}
        <div className="bg-gradient-to-br from-[#e0a178] to-[#e0b678] rounded-2xl p-8 md:p-16 text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            {content.primarySchool.title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5 space-y-4 text-sm">
              <h3 className="text-xl font-bold">
                {content.primarySchool.programs.scholarship.title}
              </h3>
              <p>
                {content.primarySchool.programs.scholarship.content}{" "}
                <strong>
                  {content.primarySchool.programs.scholarship.rate}
                </strong>
              </p>
              <p className="italic text-xs">
                {content.primarySchool.programs.scholarship.note}
              </p>
              <h3 className="text-xl font-bold">
                {content.primarySchool.programs.advanced.title}
              </h3>
              <p>{content.primarySchool.programs.advanced.content}</p>
              <h3 className="text-xl font-bold">
                {content.primarySchool.programs.feedback.title}
              </h3>
            </div>
            <div className="lg:w-2/5 space-y-8">
              {content.primarySchool.programs.feedback.items.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-8"
                  >
                    <div>
                      <PercentageCircle
                        value={item.value}
                        color="text-[#e0b078]"
                        borderColor="border-[#feddab]"
                      />
                    </div>
                    <p className="text-sm text-left">{item.label}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-16 space-y-4">
        {content.slogans.map((slogan, index) => {
          const [first, last] = slogan.split(" ");
          return (
            <p
              key={index}
              className="text-5xl font-light text-muted-foreground whitespace-pre-line"
            >
              {first}{" "}
              <span className="text-primary uppercase font-bold">{last}</span>
            </p>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto grid gap-6">
        <h2 className="text-3xl font-bold mb-6">
          {lang === "en" ? "Senior High School Subjects" : "高中科目"}
        </h2>
        <VCEEnglishSubject data={content.subjects.english} />
        <VCEMathSubject data={content.subjects.math} />
        <VCEScienceSubject data={content.subjects.science} />
        <MDProgramSubject data={content.subjects.md} />
        <h2 className="text-3xl font-bold mb-6">
          {lang === "en" ? "Junior High School Subjects" : "初中科目"}
        </h2>
        <SelectiveSchoolSubject data={content.subjects.selective} />
        <AMCSubject data={content.subjects.amc} />
        <ScholarshipSubject data={content.subjects.scholarship} />
        <AdvancedProgram79 data={content.subjects.advanced79} />
        <h2 className="text-3xl font-bold mb-6">
          {lang === "en" ? "Primary School Subjects" : "小学科目"}
        </h2>
        {/* <ScholarshipSubject2 data={content.subjects.scholarship} /> */}
        <ScholarshipSubject data={content.subjects.scholarship} />
        <AdvancedProgram35 data={content.subjects.advanced35} />
        
      </div>
    </div>
  );
}
