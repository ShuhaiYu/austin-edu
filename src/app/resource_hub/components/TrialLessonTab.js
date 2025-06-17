// app/resource-hub/components/TrialLessonTab.js
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState, useMemo } from "react";
import { LangContext } from "@/app/layout";
import MultiSelect from "@/components/multiselect";

// 课程数据库 - 从FindCourse.js复制过来
const COURSE_DATABASE = [
  // Primary School 1-6 Years - Enrichment Courses
  { 
    slug: "y1-6-english-enrichment", 
    title: "Year 1-6 English Enrichment",
    grades: [1, 2, 3, 4, 5, 6],
    category: "Enrichment Courses"
  },
  { 
    slug: "y1-6-maths-enrichment", 
    title: "Year 1-6 Maths Enrichment",
    grades: [1, 2, 3, 4, 5, 6],
    category: "Enrichment Courses"
  },
  { 
    slug: "y1-6-chinese-enrichment", 
    title: "Year 1-6 Chinese Enrichment",
    grades: [1, 2, 3, 4, 5, 6],
    category: "Enrichment Courses"
  },
  { 
    slug: "y3-6-writing", 
    title: "Year 3-6 Writing",
    grades: [3, 4, 5, 6],
    category: "Enrichment Courses"
  },
  { 
    slug: "y3-4-amc", 
    title: "Year 3-4 AMC",
    grades: [3, 4],
    category: "Competition Courses"
  },
  { 
    slug: "y5-6-amc", 
    title: "Year 5-6 AMC",
    grades: [5, 6],
    category: "Competition Courses"
  },
  { 
    slug: "y3-y5-naplan", 
    title: "Year 3, Year 5 Naplan",
    grades: [3, 5],
    category: "Exam Preparation"
  },
  { 
    slug: "aeas", 
    title: "AEAS",
    grades: [1, 2, 3, 4, 5, 6],
    category: "Exam Preparation"
  },
  // Junior High School 7-9 Years
  { 
    slug: "y7-9-english", 
    title: "Year 7-9 English Enrichment",
    grades: [7, 8, 9],
    category: "Enrichment Courses"
  },
  { 
    slug: "y7-9-maths", 
    title: "Year 7-9 Maths Enrichment",
    grades: [7, 8, 9],
    category: "Enrichment Courses"
  },
  { 
    slug: "y7-9-writing", 
    title: "Year 7-9 Writing",
    grades: [7, 8, 9],
    category: "Enrichment Courses"
  },
  { 
    slug: "y8-9-science", 
    title: "Year 8-9 Science",
    grades: [8, 9],
    category: "Enrichment Courses"
  },
  { 
    slug: "y7-9-latin-enrichment", 
    title: "Year 7-9 Latin Enrichment",
    grades: [7, 8, 9],
    category: "Language Courses"
  },
  { 
    slug: "y7-9-france-enrichment", 
    title: "Year 7-9 France Enrichment",
    grades: [7, 8, 9],
    category: "Language Courses"
  },
  { 
    slug: "y7-9-japanese-enrichment", 
    title: "Year 7-9 Japanese Enrichment",
    grades: [7, 8, 9],
    category: "Language Courses"
  },
  { 
    slug: "y7-8-amc", 
    title: "Year 7-8 AMC",
    grades: [7, 8],
    category: "Competition Courses"
  },
  { 
    slug: "y7-y9-naplan", 
    title: "Year 7, Year 9 Naplan",
    grades: [7, 9],
    category: "Other Courses"
  },
  // Senior High School 10-12 Years
  { 
    slug: "y10-english", 
    title: "Year 10 Pre-VCE English",
    grades: [10],
    category: "Year 10 Pre-VCE Courses"
  },
  { 
    slug: "y10-eal", 
    title: "Year 10 EAL Foundation Class",
    grades: [10],
    category: "Year 10 Pre-VCE Courses"
  },
  { 
    slug: "y10-maths-advance", 
    title: "Year 10 Pre-VCE Maths Advance",
    grades: [10],
    category: "Year 10 Pre-VCE Courses"
  },
  { 
    slug: "y10-maths-standard", 
    title: "Year 10 Pre-VCE Maths Standard",
    grades: [10],
    category: "Year 10 Pre-VCE Courses"
  },
  { 
    slug: "y9-10-science", 
    title: "Year 9-10 Pre-VCE Science",
    grades: [9, 10],
    category: "Year 10 Pre-VCE Courses"
  },
  { 
    slug: "y10-chemistry", 
    title: "Year 10 Pre-VCE Chemistry",
    grades: [10],
    category: "Year 10 Pre-VCE Courses"
  },
  { 
    slug: "y10-latin", 
    title: "Year 10 Pre-VCE Latin",
    grades: [10],
    category: "Year 10 Pre-VCE Courses"
  },
  // VCE Courses
  { 
    slug: "vce-english-eal-unit1-4", 
    title: "VCE English / EAL Unit 1-4",
    grades: [11, 12],
    category: "VCE English Courses"
  },
  { 
    slug: "vce-english-language-unit1-4", 
    title: "VCE English Language Unit 1-4",
    grades: [11, 12],
    category: "VCE English Courses"
  },
  { 
    slug: "vce-maths-methods-unit1-4", 
    title: "VCE Mathematical Methods Unit1-4",
    grades: [11, 12],
    category: "VCE Maths Courses"
  },
  { 
    slug: "vce-specialist-maths-unit1-4", 
    title: "VCE Specialist Mathematics Unit1-4",
    grades: [11, 12],
    category: "VCE Maths Courses"
  },
  { 
    slug: "vce-general-maths-unit-1-4", 
    title: "VCE General Mathematics Unit1-4",
    grades: [11, 12],
    category: "VCE Maths Courses"
  },
  { 
    slug: "vce-chemistry-unit-1-4", 
    title: "VCE Chemistry Unit1-4",
    grades: [11, 12],
    category: "VCE Science Courses"
  },
  { 
    slug: "vce-biology-unit-1-4", 
    title: "VCE Biology Unit1-4",
    grades: [11, 12],
    category: "VCE Science Courses"
  },
  { 
    slug: "vce-physics-unit-1-4", 
    title: "VCE Physics Unit1-4",
    grades: [11, 12],
    category: "VCE Science Courses"
  },
  { 
    slug: "vce-psychology-unit-1-4", 
    title: "VCE Psychology Unit 1–4",
    grades: [11, 12],
    category: "VCE Science Courses"
  },
  { 
    slug: "vce-lantin-unit-1-4", 
    title: "VCE Lantin Unit 1-4",
    grades: [11, 12],
    category: "VCE Languages Courses"
  },
  { 
    slug: "vce-chinese-first-language-unit-1-4", 
    title: "VCE Chinese First Language Unit 1–4",
    grades: [11, 12],
    category: "VCE Languages Courses"
  },
  { 
    slug: "vce-chinese-second-language-unit-1-4", 
    title: "VCE Chinese Second Language Unit 1–4",
    grades: [11, 12],
    category: "VCE Languages Courses"
  },
  { 
    slug: "vce-chinese-second-language-advanced-unit-1-4", 
    title: "VCE Chinese Second Language Advanced Unit 1–4",
    grades: [11, 12],
    category: "VCE Languages Courses"
  },
  { 
    slug: "vce-japanese-second-language", 
    title: "VCE Japanese Second Language",
    grades: [11, 12],
    category: "VCE Languages Courses"
  },
  { 
    slug: "vce-accounting-unit-1-4", 
    title: "VCE Accounting Unit 1-4",
    grades: [11, 12],
    category: "VCE Business and Economics Courses"
  },
  { 
    slug: "vce-economics-unit-1-4", 
    title: "VCE Economics Unit 1-4",
    grades: [11, 12],
    category: "VCE Business and Economics Courses"
  },
  { 
    slug: "vce-business-management-unit-1-4", 
    title: "VCE Business Management Unit 1-4",
    grades: [11, 12],
    category: "VCE Business and Economics Courses"
  },
  { 
    slug: "vce-legal-studies-unit-1-4", 
    title: "VCE Legal Studies Unit 1-4",
    grades: [11, 12],
    category: "VCE Business and Economics Courses"
  },
  { 
    slug: "vce-vcd-unit-1-4", 
    title: "VCE Visual Communication Design Unit 1-4",
    grades: [11, 12],
    category: "VCE Other Courses"
  },
  // Medical Preparation
  { 
    slug: "ucat", 
    title: "UCAT Preparation Program",
    grades: [12],
    category: "Medical Foundation Courses"
  },
  { 
    slug: "y12-ucat-medical-interview", 
    title: "Y12 Medical Interview Preparation Program",
    grades: [12],
    category: "Medical Foundation Courses"
  }
];

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
    selectGrade: "Select Grade",
    selectSubjects: "Select Subject",
    grades: [
      "Primary School - Years 1-6",
      "Secondary School - Years 7-9", 
      "Senior Secondary School - Years 10-12"
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
    grades: [
      "小学 1-6年级",
      "初中 7-9年级", 
      "高中 10-12年级"
    ],
    contactMethods: ["电话", "短信", "电子邮件"],
  },
};

export const TrialLessonTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];

  const [schoolYear, setSchoolYear] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // 根据选择的Grade获取可用的科目
  const availableSubjects = useMemo(() => {
    if (schoolYear.length === 0) return [];

    let gradeRanges = [];
    
    schoolYear.forEach(grade => {
      if (grade.includes("1-6") || grade.includes("Primary")) {
        gradeRanges.push(...[1, 2, 3, 4, 5, 6]);
      } else if (grade.includes("7-9") || grade.includes("Secondary")) {
        gradeRanges.push(...[7, 8, 9]);
      } else if (grade.includes("10-12") || grade.includes("Senior")) {
        gradeRanges.push(...[10, 11, 12]);
      }
    });

    // 去重
    gradeRanges = [...new Set(gradeRanges)];
    
    return COURSE_DATABASE.filter(course => {
      return course.grades.some(grade => gradeRanges.includes(grade));
    });
  }, [schoolYear]);

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 收集表单数据
    const formData = new FormData(e.target);
    const data = {
      parentName: formData.get('parentName'),
      parentEmail: formData.get('parentEmail'),
      parentPhone: formData.get('parentPhone'),
      studentName: formData.get('studentName'),
      studentEmail: formData.get('studentEmail'),
      studentPhone: formData.get('studentPhone'),
      campus: formData.get('campus'),
      schoolYear: schoolYear.join(', '),
      subjects: selectedSubjects.join(', '),
      questions: formData.get('questions'),
      contactMethod: formData.get('contact'),
      timestamp: new Date().toISOString()
    };

    // 这里应该发送到 rachelle@austinedu.com.au
    console.log('Form submitted to rachelle@austinedu.com.au:', data);
    
    // 显示成功消息
    alert('Request sent successfully! We will contact you soon.');
  };

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
          <form className="space-y-8" onSubmit={handleSubmit}>
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
                      value={campus}
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
                      name="parentName"
                      placeholder="Tony Nguyen"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.email}</label>
                    <Input
                      name="parentEmail"
                      type="email"
                      placeholder="tony@example.com"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.phone}</label>
                    <Input
                      name="parentPhone"
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
                      name="studentName"
                      placeholder="Tony Nguyen"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.email}</label>
                    <Input
                      name="studentEmail"
                      type="email"
                      placeholder="tony@example.com"
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.phone}</label>
                    <Input
                      name="studentPhone"
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
                      options={availableSubjects.map((subject) => ({
                        label: subject.title,
                        value: subject.title,
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
                <Button type="button" className="">
                  {t.addStudent}
                </Button>
              </div>
            </div>

            {/* Questions */}
            <div className="">
              <h3 className="font-semibold mb-4">{t.questionsTitle}</h3>
              <textarea
                name="questions"
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
                    <Input type="radio" name="contact" value={method} className="w-4 h-4" />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <Button 
              type="submit"
              className="bg-red-700 hover:bg-red-900 text-primary-foreground font-semibold !mt-10 py-6 text-lg uppercase"
            >
              {t.sendButton}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};