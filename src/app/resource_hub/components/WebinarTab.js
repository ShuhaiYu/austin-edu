"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import MultiSelect from "@/components/multiselect";

const content = {
  en: {
    title: "Please leave your details to receive the latest updates on our free Webinar",
    description:
      "Before you officially start the trial class, we will provide you with a free consultation based on the information you provide, helping you find the most suitable class for your trial.",
    subscriptionTitle:
      "1. Subscription Information (Please fill in either one of these two fields)",
    parentInfo: "Parent / Guardian Information",
    studentInfo: "Student Information",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    schoolYear: "2. Current School Year / Grade*",
    selectGrade: "Select Grade",
    grades: ["Preschool", "Elementary School", "Middle School", "High School"],
    webinarTitle: "3. Which Webinar Are You Interested in?*",
    webinars: {
      "Year 1-9": [
        "Scholarship & Selective School Webinar",
        "Naplan Preparation Seminar",
        "Public vs Private School Comparison",
      ],
      "Year 10-12": [
        "VCE Subject Selection Guide",
        "Science Stream Seminar",
        "Medical Career Pathways",
        "Humanities Stream Seminar",
      ],
    },
    languageTitle: "4. Tick your Preferred Language",
    languages: ["Mandarin", "English"],
    sendButton: "REGISTER NOW",
  },
  zh: {
    title: "免费在线研讨会注册",
    description:
      "参加我们专家主持的在线研讨会，获取学业规划和学校选择的宝贵建议。",
    subscriptionTitle: "1. 注册信息（请填写以下任意一项）",
    parentInfo: "家长/监护人信息",
    studentInfo: "学生信息",
    fullName: "姓名",
    email: "电子邮箱",
    phone: "联系电话",
    schoolYear: "2. 当前年级*",
    grades: ["学前班", "小学", "初中", "高中"],
    selectGrade: "请选择年级",
    webinarTitle: "3. 您感兴趣的研讨会*",
    webinars: {
      "1-9年级": ["奖学金&精英公校讲座", "Naplan备考讲座", "公校/私校对比分析"],
      "10-12年级": [
        "VCE选课指导讲座",
        "理科方向专题讲座",
        "医学职业路径讲座",
        "文科方向专题讲座",
      ],
    },
    languageTitle: "4. 选择首选语言",
    languages: ["中文", "英文"],
    sendButton: "立即注册",
  },
};

export const WebinarTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const [schoolYear, setSchoolYear] = useState([]);
  const [selectedWebinars, setSelectedWebinars] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex gap-8">
        {/* Left Text Section */}
        <div className="w-1/3 pr-8 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-justify">{t.description}</p>
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 pl-8">
          <form className="space-y-8">
            {/* Subscription Information */}
            <div className="space-y-6">
              <h3 className="font-semibold">{t.subscriptionTitle}</h3>

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

            {/* School Year */}
            <div className="flex items-center gap-4">
              <label className="w-1/2 font-semibold mb-6">{t.schoolYear}</label>
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

            {/* Webinar Selection */}
            <div className="">
              <h3 className="font-semibold mb-6">{t.webinarTitle}</h3>
              <div className="space-y-6">
                {Object.entries(t.webinars).map(([gradeGroup, webinars]) => (
                  <div key={gradeGroup} className="border-b pb-6 last:border-0">
                    <h4 className="font-medium mb-4">{gradeGroup}</h4>
                    <div className="grid grid-cols-3 gap-4 divide-x divide-gray-200 rounded-[2rem] border border-gray-200 p-6">
                      {webinars.map((webinar) => (
                        <label
                          key={webinar}
                          className="flex items-center gap-3 p-2 relative"
                        >
                          <Input
                            type="radio"
                            name="webinar"
                            className="w-4 h-4 shrink-0"
                            onChange={() => setSelectedWebinars([webinar])}
                          />
                          <span className="text-sm">{webinar}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Preference */}
            <div className="">
              <h3 className="font-semibold mb-4">{t.languageTitle}</h3>
              <div className="grid grid-cols-2 gap-4 divide-x divide-gray-200 rounded-[2rem] border border-gray-200 p-6">
                {t.languages.map((language) => (
                  <label
                    key={language}
                    className="flex items-center gap-3 p-2 relative"
                  >
                    <Input
                      type="radio"
                      name="language"
                      className="w-4 h-4 shrink-0"
                      checked={selectedLanguage === language}
                      onChange={() => setSelectedLanguage(language)}
                    />
                    <span className="text-sm">{language}</span>
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
