// app/resource-hub/components/ConsultationTab.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import MultiSelect from "@/components/multiselect";

const content = {
  en: {
    title: "Fill out the form to Book for a Trial Lesson",
    description:
      "Before you officially start the trial class, we will provide you with a free consultation based on the information you provide, helping you find the most suitable class for your trial.",
    campusTitle: "1. Which of the following campus can you attend?",
    bookingTitle:
      "2. Booking Information (Please fill in either one of these two fields)",
    parentInfo: "Parent / Guardian Information",
    studentInfo: "Student Information",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    trialDetails: "3. Trial Lesson Details",
    AddTrailText: "Trial Lesson for More than One Child?",
    schoolYear: "Current School Year",
    subject: "Subject",
    addStudent: "+ Add Another Student Information",
    questionsTitle: "4. Any Specific Question or Concerns",
    contactTitle: "5. Preferred Contact Method",
    sendButton: "SEND REQUEST",
    selectGrade: "Current School Year / Grade*",
    selectSubjects: "Subject for the trial lesson*",
    grades: ["Preschool", "Elementary School", "Middle School", "High School"],
    subjects: [
      "Year 9 English",
      "Year 10 Science",
      "Year 11 EAL",
      "Year 12 Maths",
      "Year 9 Japanese",
      "Maths Advanced (Elite Program)",
    ],
    contactMethods: ["Phone call", "Message", "Email"],
  },
  zh: {
    title: "填写表格预约试听课",
    description:
      "在正式开课前，我们将根据您提供的信息为您提供免费咨询，帮助您找到最适合的试听课程。",
    campusTitle: "1. 您可以选择以下哪个校区？",
    bookingTitle: "2. 预约信息（请填写以下任意一项）",
    parentInfo: "家长/监护人信息",
    studentInfo: "学生信息",
    fullName: "姓名",
    email: "电子邮箱",
    phone: "联系电话",
    trialDetails: "3. 试听课程详情",
    AddTrailText: "试听课程适用于多个孩子？",
    schoolYear: "当前学年",
    subject: "科目",
    addStudent: "+ 添加其他学生信息",
    questionsTitle: "4. 特别问题或关注事项",
    contactTitle: "5. 首选联系方式",
    sendButton: "发送请求",
    selectGrade: "选择年级",
    selectSubjects: "选择科目",
    grades: ["学前班", "小学", "初中", "高中"],
    subjects: [
      "九年级英语",
      "十年级科学",
      "十一年级EAL",
      "十二年级数学",
      "九年级日语",
      "数学进阶（精英课程）",
    ],
    contactMethods: ["电话", "短信", "电子邮件"],
  },
};

export const TrialLessonTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];

  const [schoolYear, setSchoolYear] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  return (
    <div className="bg-white rounded-b-xl p-8 shadow-lg">
      <div className="flex gap-8">
        {/* Left Text Section */}
        <div className="w-1/3 pr-8 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-justify">{t.description}</p>
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 pl-8">
          <form className="space-y-8">
            {/* Campus Selection */}
            <div className="">
              <h3 className="font-semibold mb-6">{t.campusTitle}</h3>
              <div className="grid grid-cols-3 gap-4 divide-x divide-gray-200 rounded-[2rem] border border-gray-200 p-6">
                {[
                  "Box Hill",
                  "Mt Waverley",
                  "Melbourne city",
                  "Point Cook",
                  "Adelaide",
                ].map((campus) => (
                  <label
                    key={campus}
                    className="flex items-center gap-3 p-2 relative"
                  >
                    <Input
                      type="radio"
                      name="campus"
                      className="w-4 h-4 shrink-0"
                    />
                    <span className="text-sm">{campus}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Booking Information */}
            <div className="space-y-6">
              <h3 className="font-semibold">{t.bookingTitle}</h3>

              {/* Parent Information */}
              <div className="space-y-4 pb-6 ">
                <h4 className="font-medium">{t.parentInfo}</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.fullName}</label>
                    <Input
                      placeholder="Tony Nguyen"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.email}</label>
                    <Input
                      type="email"
                      placeholder="tony@example.com"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.phone}</label>
                    <Input
                      type="tel"
                      placeholder="(342) 3934 3445"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div className="space-y-4">
                <h4 className="font-medium">{t.studentInfo}</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.fullName}</label>
                    <Input
                      placeholder="Tony Nguyen"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.email}</label>
                    <Input
                      type="email"
                      placeholder="tony@example.com"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.phone}</label>
                    <Input
                      type="tel"
                      placeholder="(342) 3934 3445"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trial Lesson Details */}
            <div className="">
              <h3 className="font-semibold mb-6">{t.trialDetails}</h3>
              <div className="space-y-6">
                {/* School Year */}
                <div className="flex items-center gap-4">
                  <label className="w-1/2 text-sm">{t.schoolYear}</label>
                  <div className="w-1/2">
                    <MultiSelect
                      placeholder={
                        schoolYear.length > 0
                          ? schoolYear.join(", ")
                          : t.selectGrade
                      }
                      options={t.grades.map((grade) => ({
                        label: grade,
                        value: grade,
                      }))}
                      selectedOptions={schoolYear}
                      setSelectedOptions={setSchoolYear}
                      className="rounded-[2rem] border border-gray-200 p-6 bg-white"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex items-center gap-4">
                  <label className="w-1/2 text-sm">{t.subject}</label>
                  <div className="w-1/2">
                    <MultiSelect
                      placeholder={
                        selectedSubjects.length > 0
                          ? selectedSubjects.join(", ")
                          : t.selectSubjects
                      }
                      options={t.subjects.map((subject) => ({
                        label: subject,
                        value: subject,
                      }))}
                      selectedOptions={selectedSubjects}
                      setSelectedOptions={setSelectedSubjects}
                      className="rounded-[2rem] border border-gray-200 p-6 bg-white"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mt-6">
                <label className="w-1/2 text-sm">{t.AddTrailText}</label>
                <Button className="">
                  {t.addStudent}
                </Button>
              </div>
            </div>

            {/* Questions */}
            <div className="">
              <h3 className="font-semibold mb-4">{t.questionsTitle}</h3>
              <textarea
                className="w-full text-sm rounded-[2rem] border border-gray-200 p-6 bg-white"
                rows={3}
                placeholder={
                  lang === "en"
                    ? "Enter your questions..."
                    : "请输入您的问题..."
                }
              />
            </div>

            {/* Contact Method */}
            <div className="">
              <h3 className="font-semibold mb-4">{t.contactTitle}</h3>
              <div className="grid grid-cols-3 divide-x divide-gray-200 gap-6 rounded-[2rem] border border-gray-200 p-6 bg-white">
                {t.contactMethods.map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Input type="radio" name="contact" className="w-4 h-4" />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <Button className="bg-red-700 hover:bg-red-900 text-primary-foreground font-semibold !mt-10 py-6 text-lg uppercase">
              {t.sendButton}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
