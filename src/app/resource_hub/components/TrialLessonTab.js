// app/resource-hub/components/TrialLessonTab.js
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState, useMemo } from "react";
import { LangContext } from "@/app/layout";
import MultiSelect from "@/components/multiselect";
import { toast } from "sonner";
import { X } from "lucide-react";

// 课程数据库 - 从FindCourse.js复制过来
const COURSE_DATABASE = [
  // Primary School 1-6 Years - Enrichment Courses
  {
    slug: "y1-6-english-enrichment",
    title: "Year 1-6 English Enrichment",
    grades: [1, 2, 3, 4, 5, 6],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },
  {
    slug: "y1-6-maths-enrichment",
    title: "Year 1-6 Maths Enrichment",
    grades: [1, 2, 3, 4, 5, 6],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },
  {
    slug: "y1-6-chinese-enrichment",
    title: "Year 1-6 Chinese Enrichment",
    grades: [1, 2, 3, 4, 5, 6],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },
  {
    slug: "y3-6-writing",
    title: "Year 3-6 Writing",
    grades: [3, 4, 5, 6],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },


  // Primary School 1-6 Years - Scholarship / Selective Courses
  {
    slug: "3-to-5-scholarship-victoria",
    title: "Year 3-to-5 Scholarship Victoria",
    grades: [2,3],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "3-to-5-scholarship-interview-victoria",
    title: "Year 3-to-5 Scholarship Interview Victoria",
    grades: [2,3],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "3-to-5-scholarship-mock-exam-victoria",
    title: "Year 3-to-5 Scholarship Mock Exam Victoria",
    grades: [2,3],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "5-to-7-scholarship-victoria",
    title: "Year 5-to-7 Scholarship Victoria",
    grades: [4,5],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "5-to-7-scholarship-interview-victoria",
    title: "Year 5-to-7 Scholarship Interview Victoria",
    grades: [4,5],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "5-to-7-scholarship-mock-exam-victoria",
    title: "Year 5-to-7 Scholarship Mock Exam Victoria",
    grades: [4,5],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "3-to-5-scholarship-south-australia",
    title: "Year 3-to-5 Scholarship South Australia",
    grades: [2,3],
    states: ["South Australia"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "5-to-7-scholarship-south-australia",
    title: "Year 5-to-7 Scholarship South Australia",
    grades: [4,5],
    states: ["South Australia"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "5-to-7-selective-school-south-australia",
    title: "Year 5-to-7 Selective School South Australia",
    grades: [4,5],
    states: ["South Australia"],
    category: "Scholarship / Selective Courses"
  },


  // Primary School 1-6 Years - Competition Courses
  {
    slug: "y3-4-amc",
    title: "Year 3-4 AMC",
    grades: [3, 4],
    states: ["Victoria"],
    category: "Competition Courses"
  },
  {
    slug: "y5-6-amc",
    title: "Year 5-6 AMC",
    grades: [5, 6],
    states: ["Victoria"],
    category: "Competition Courses"
  },


  // Primary School 1-6 Years - Exam Preparation
  {
    slug: "y3-y5-naplan",
    title: "Year 3, Year 5 Naplan & holiday program",
    grades: [3, 5],
    states: ["Victoria"],
    category: "Exam Preparation"
  },
  {
    slug: "aeas",
    title: "AEAS",
    grades: [1, 2, 3, 4, 5, 6], // 适用1-6年级
    states: ["Victoria"],
    category: "Exam Preparation"
  },


  // Primary School 1-6 Years - Other Courses
  {
    slug: "y1-6-extra-holiday-class",
    title: "Extra holiday class",
    grades: [1, 2, 3, 4, 5, 6],
    states: ["Victoria", "South Australia"],
    category: "Other Courses"
  },


  // Junior High School 7-9 Years - Enrichment Courses
  {
    slug: "y7-9-english",
    title: "Year 7-9 English Enrichment",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },
  {
    slug: "y7-9-maths",
    title: "Year 7-9 Maths Enrichment",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },
  {
    slug: "y7-9-writing",
    title: "Year 7-9 Writing",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },
  {
    slug: "y8-9-science",
    title: "Year 8-9 Science",
    grades: [8, 9],
    states: ["Victoria", "South Australia"],
    category: "Enrichment Courses"
  },


  // Junior High School 7-9 Years - Language Courses
  {
    slug: "y7-9-latin-enrichment",
    title: "Year 7-9 Latin Enrichment",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Language Courses"
  },
  {
    slug: "y7-9-france-enrichment",
    title: "Year 7-9 France Enrichment",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Language Courses"
  },
  {
    slug: "y7-9-japanese-enrichment",
    title: "Year 7-9 Japanese Enrichment",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Language Courses"
  },


  // Junior High School 7-9 Years - Scholarship / Selective Courses
  {
    slug: "7-to-9-scholarship-victoria",
    title: "Year 7-to-9 Scholarship Victoria",
    grades: [6,7],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "7-to-9-scholarship-interview-victoria",
    title: "Year 7-to-9 Scholarship Interview Victoria",
    grades: [6,7],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "7-to-9-scholarship-mock-exam-victoria",
    title: "Year 7-to-9 Scholarship Mock Exam Victoria",
    grades: [6,7],
    states: ["Victoria"],
    category: "Scholarship / Selective Courses"
  },
  {
    slug: "y8-9-selective",
    title: "Year 8-to-9 Selective School Program",
    grades: [7,8],
    states: ["Victoria", "South Australia"],
    category: "Scholarship / Selective Courses"
  },


  // Junior High School 7-9 Years - Competition Courses
  {
    slug: "y7-8-amc",
    title: "Year 7-8 AMC",
    grades: [7, 8],
    states: ["Victoria", "South Australia"],
    category: "Competition Courses"
  },


  // Junior High School 7-9 Years - Other Courses
  {
    slug: "y7-y9-naplan",
    title: "Year 7, Year 9 Naplan",
    grades: [7, 9],
    states: ["Victoria", "South Australia"],
    category: "Other Courses"
  },
  {
    slug: "y7-9-extra-holiday-class",
    title: "Extra holiday class",
    grades: [7, 8, 9],
    states: ["Victoria", "South Australia"],
    category: "Other Courses"
  },


  // Senior High School 10-12 Years - Year 10 Pre-VCE Courses
  {
    slug: "y10-english",
    title: "Year 10 Pre-VCE English",
    grades: [10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },
  {
    slug: "y10-eal",
    title: "Year 10 EAL Foundation Class",
    grades: [10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },
  {
    slug: "y10-maths-advance",
    title: "Year 10 Pre-VCE Maths Advance",
    grades: [10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },
  {
    slug: "y10-maths-standard",
    title: "Year 10 Pre-VCE Maths Standard",
    grades: [10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },
  {
    slug: "y9-10-science",
    title: "Year 9-10 Pre-VCE Science",
    grades: [9, 10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },
  {
    slug: "y10-chemistry",
    title: "Year 10 Pre-VCE Chemistry",
    grades: [10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },
  {
    slug: "y10-latin",
    title: "Year 10 Pre-VCE Latin",
    grades: [10],
    states: ["Victoria"],
    category: "Year 10 Pre-VCE Courses"
  },


  // Senior High School 10-12 Years - VCE English Courses
  {
    slug: "vce-english-eal-unit1-4",
    title: "VCE English / EAL Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE English Courses"
  },
  {
    slug: "vce-english-language-unit1-4",
    title: "VCE English Language Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE English Courses"
  },


  // Senior High School 10-12 Years - VCE Maths Courses
  {
    slug: "vce-maths-methods-unit1-4",
    title: "VCE Mathematical Methods Unit1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Maths Courses"
  },
  {
    slug: "vce-specialist-maths-unit1-4",
    title: "VCE Specialist Mathematics Unit1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Maths Courses"
  },
  {
    slug: "vce-general-maths-unit-1-4",
    title: "VCE General Mathematics Unit1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Maths Courses"
  },


  // Senior High School 10-12 Years - VCE Science Courses
  {
    slug: "vce-chemistry-unit-1-4",
    title: "VCE Chemistry Unit1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Science Courses"
  },
  {
    slug: "vce-biology-unit-1-4",
    title: "VCE Biology Unit1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Science Courses"
  },
  {
    slug: "vce-physics-unit-1-4",
    title: "VCE Physics Unit1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Science Courses"
  },
  {
    slug: "vce-psychology-unit-1-4",
    title: "VCE Psychology Unit 1–4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Science Courses"
  },


  // Senior High School 10-12 Years - VCE Languages Courses
  {
    slug: "vce-lantin-unit-1-4",
    title: "VCE Lantin Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Languages Courses"
  },
  {
    slug: "vce-chinese-first-language-unit-1-4",
    title: "VCE Chinese First Language Unit 1–4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Languages Courses"
  },
  {
    slug: "vce-chinese-second-language-unit-1-4",
    title: "VCE Chinese Second Language Unit 1–4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Languages Courses"
  },
  {
    slug: "vce-chinese-second-language-advanced-unit-1-4",
    title: "VCE Chinese Second Language Advanced Unit 1–4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Languages Courses"
  },
  {
    slug: "vce-japanese-second-language",
    title: "VCE Japanese Second Language",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Languages Courses"
  },


  // Senior High School 10-12 Years - VCE Business and Economics Courses
  {
    slug: "vce-accounting-unit-1-4",
    title: "VCE Accounting Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Business and Economics Courses"
  },
  {
    slug: "vce-economics-unit-1-4",
    title: "VCE Economics Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Business and Economics Courses"
  },
  {
    slug: "vce-business-management-unit-1-4",
    title: "VCE Business Management Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Business and Economics Courses"
  },
  {
    slug: "vce-legal-studies-unit-1-4",
    title: "VCE Legal Studies Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Business and Economics Courses"
  },


  // Senior High School 10-12 Years - VCE Other Courses
  {
    slug: "vce-vcd-unit-1-4",
    title: "VCE Visual Communication Design Unit 1-4",
    grades: [11, 12],
    states: ["Victoria"],
    category: "VCE Other Courses"
  },
  {
    slug: "y10-12-extra-holiday-class",
    title: "Extra holiday class",
    grades: [10, 11, 12],
    states: ["Victoria"],
    category: "VCE Other Courses"
  },
  {
    slug: "y10-12-mock-exam",
    title: "Mock Exam",
    grades: [10, 11, 12],
    states: ["Victoria"],
    category: "VCE Other Courses"
  },


  // Senior High School 10-12 Years - IB Courses
  {
    slug: "ib-english-a-literature-standard-level",
    title: "IB English A: Literature — Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-english-a-literature-higher-level",
    title: "IB English A: Literature — Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-english-a-language-literature-standard-level",
    title: "IB English A: Language and Literature — Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-english-a-language-literature-higher-level",
    title: "IB English A: Language and Literature — Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-english-b-standard-level",
    title: "IB English B: Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-english-b-higher-level",
    title: "IB English B: Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-maths-analysis-approaches-standard-level",
    title: "IB Mathematics: Analysis and Approaches (AA) — Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-maths-analysis-approaches-higher-level",
    title: "IB Mathematics: Analysis and Approaches (AA) — Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chemistry-standard-level",
    title: "IB Chemistry (Sciences) — Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chemistry-higher-level",
    title: "IB Chemistry (Sciences) — Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chinese-a-standard-level",
    title: "IB Chinese A: Literature — Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chinese-a-higher-level",
    title: "IB Chinese A: Literature — Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chinese-b-standard-level",
    title: "IB Chinese B: Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chinese-b-higher-level",
    title: "IB Chinese B: Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-chinese-ab-initio-standard-level",
    title: "IB Chinese ab initio: Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-economics-standard-level",
    title: "IB Economics — Standard Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },
  {
    slug: "ib-economics-higher-level",
    title: "IB Economics — Higher Level",
    grades: [11, 12],
    states: ["Victoria"],
    category: "IB Courses"
  },


  // Medical Preparation Courses
  {
    slug: "ucat",
    title: "UCAT Preparation Program",
    grades: [10,11,12],
    states: ["Victoria"],
    category: "Medical Foundation Courses"
  },
  {
    slug: "y12-ucat-medical-interview",
    title: "Y12 Medical Interview Preparation Program",
    grades: [10,11,12],
    states: ["Victoria"],
    category: "Medical Foundation Courses"
  }
];

const content = {
  en: {
    title: "Fill out the form to Book for a Trial Lesson",
    description:
      "Before you officially start the trial class, we will provide you with a free consultation based on the information you provide, helping you find the most suitable class for your trial.",
    campusTitle: "1. Which of the following campus can you attend?*",
    bookingTitle:
      "2. Booking Information (Please fill in either one of these two fields)*",
    parentInfo: "Parent / Guardian Information",
    studentInfo: "Student Information",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    trialDetails: "3. Trial Lesson Details*",
    AddTrailText: "Trial Lesson for More than One Child?",
    schoolYear: "Current School Year",
    subject: "Subject",
    addStudent: "+ Add Another Student Information",
    removeStudent: "Remove Student",
    questionsTitle: "4. Any Specific Question or Concerns",
    contactTitle: "5. Preferred Contact Method*",
    sendButton: "SEND REQUEST",
    selectGrade: "Select Grade",
    selectSubjects: "Select Subject",
        grades: Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`),

    contactMethods: ["Phone call", "Message", "Email"],
    // Placeholders
    placeholders: {
      fullName: "Please enter full name",
      email: "Please enter email address",
      phone: "Please enter phone number",
      questions: "Please enter your questions or concerns...",
    },
    // Validation messages
    validation: {
      campusRequired: "Please select a campus",
      contactRequired:
        "Please provide contact information: fill in either Parent OR Student email/phone",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number (Australian format)",
      gradeRequired: "Please select at least one grade level",
      subjectRequired: "Please select at least one subject",
      contactMethodRequired: "Please select how you'd like us to contact you",
    },
    // Success/Error messages
    sending: "Sending...",
    success: "Request sent successfully! We will contact you soon.",
    error: "Failed to send request. Please try again.",
  },
  zh: {
    title: "填写表格预约试听课",
    description:
      "在正式开课前，我们将根据您提供的信息为您提供免费咨询，帮助您找到最适合的试听课程。",
    campusTitle: "1. 您可以选择以下哪个校区？*",
    bookingTitle: "2. 预约信息（请填写以下任意一项）*",
    parentInfo: "家长/监护人信息",
    studentInfo: "学生信息",
    fullName: "姓名",
    email: "电子邮箱",
    phone: "联系电话",
    trialDetails: "3. 试听课程详情*",
    AddTrailText: "试听课程适用于多个孩子？",
    schoolYear: "当前学年",
    subject: "科目",
    addStudent: "+ 添加其他学生信息",
    removeStudent: "移除学生",
    questionsTitle: "4. 特别问题或关注事项",
    contactTitle: "5. 首选联系方式*",
    sendButton: "发送请求",
    selectGrade: "选择年级",
    selectSubjects: "选择科目",
    grades: Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`),
    contactMethods: ["电话", "短信", "电子邮件"],
    // Placeholders
    placeholders: {
      fullName: "请输入姓名",
      email: "请输入电子邮箱",
      phone: "请输入联系电话",
      questions: "请输入您的问题或关注事项...",
    },
    // Validation messages
    validation: {
      campusRequired: "请选择校区",
      contactRequired: "请提供联系信息：填写家长或学生的邮箱/电话",
      emailInvalid: "请输入有效的电子邮箱地址",
      phoneInvalid: "请输入有效的电话号码（澳洲格式）",
      gradeRequired: "请至少选择一个年级",
      subjectRequired: "请至少选择一个科目",
      contactMethodRequired: "请选择首选联系方式",
    },
    // Success/Error messages
    sending: "发送中...",
    success: "请求发送成功！我们将尽快联系您。",
    error: "发送失败，请重试。",
  },
};

export const TrialLessonTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];

  const [schoolYear, setSchoolYear] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalStudents, setAdditionalStudents] = useState([]);

  // 验证邮箱格式
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 验证手机号格式 (澳洲手机号)
  const isValidPhone = (phone) => {
    const phoneRegex = /^(\+61|0)[2-9]\d{8}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    return phoneRegex.test(cleanPhone) || /^[0-9]{10}$/.test(cleanPhone);
  };

  // 添加学生信息
  const addStudent = () => {
    setAdditionalStudents([
      ...additionalStudents,
      {
        id: Date.now(),
        name: "",
        email: "",
        phone: "",
        schoolYear: [],
        subjects: [],
      },
    ]);
  };

  // 移除学生信息
  const removeStudent = (id) => {
    setAdditionalStudents(
      additionalStudents.filter((student) => student.id !== id)
    );
  };

  // 更新学生信息 - 修复数组处理
  const updateStudent = (id, field, value) => {
    // 确保值始终是数组（MultiSelect 组件返回数组）
    const newValue = Array.isArray(value) ? value : [value];

    setAdditionalStudents(
      additionalStudents.map((student) =>
        student.id === id ? { ...student, [field]: newValue } : student
      )
    );
  };

  // 根据选择的Grade获取可用的科目
  const availableSubjects = useMemo(() => {
    if (schoolYear.length === 0) return [];
    // map selected Year strings back to numeric grades:
    const selectedGrades = schoolYear.map((g) => parseInt(g.replace(/[^0-9]/g, '')));
    return COURSE_DATABASE.filter((course) =>
      course.grades.some((grade) => selectedGrades.includes(grade))
    );
  }, [schoolYear]);

  // 表单验证
  const validateForm = (formData) => {
    const errors = [];

    // 检查校区选择
    if (!formData.get("campus")) {
      errors.push(t.validation.campusRequired);
    }

    // 检查联系信息（家长或学生至少填写一方的邮箱或电话）
    const parentEmail = formData.get("parentEmail");
    const parentPhone = formData.get("parentPhone");
    const studentEmail = formData.get("studentEmail");
    const studentPhone = formData.get("studentPhone");

    const hasParentContact = parentEmail || parentPhone;
    const hasStudentContact = studentEmail || studentPhone;

    if (!hasParentContact && !hasStudentContact) {
      errors.push(t.validation.contactRequired);
    }

    // 验证邮箱格式
    if (parentEmail && !isValidEmail(parentEmail)) {
      errors.push(t.validation.emailInvalid);
    }
    if (studentEmail && !isValidEmail(studentEmail)) {
      errors.push(t.validation.emailInvalid);
    }

    // 验证手机号格式
    if (parentPhone && !isValidPhone(parentPhone)) {
      errors.push(t.validation.phoneInvalid);
    }
    if (studentPhone && !isValidPhone(studentPhone)) {
      errors.push(t.validation.phoneInvalid);
    }

    // 检查年级选择
    if (schoolYear.length === 0) {
      errors.push(t.validation.gradeRequired);
    }

    // 检查科目选择
    if (selectedSubjects.length === 0) {
      errors.push(t.validation.subjectRequired);
    }

    // 检查联系方式选择
    if (!formData.get("contact")) {
      errors.push(t.validation.contactMethodRequired);
    }

    return errors;
  };

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.target);

    // 验证表单
    const errors = validateForm(formData);
    // 修改后的错误处理 - 只显示第一个错误
    if (errors.length > 0) {
      // 只显示第一个错误
      toast.error(errors[0], {
        duration: 4000,
        position: "top-center",
      });
      return false;
    }

    setIsSubmitting(true);

    try {
      // 收集表单数据
      const data = {
        parentName: formData.get("parentName"),
        parentEmail: formData.get("parentEmail"),
        parentPhone: formData.get("parentPhone"),
        studentName: formData.get("studentName"),
        studentEmail: formData.get("studentEmail"),
        studentPhone: formData.get("studentPhone"),
        campus: formData.get("campus"),
        schoolYear: schoolYear.join(", "),
        subjects: selectedSubjects.join(", "),
        additionalStudents: additionalStudents,
        questions: formData.get("questions"),
        contactMethod: formData.get("contact"),
        timestamp: new Date().toISOString(),
      };

      // 发送到API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "trial-lesson",
          data: data,
        }),
      });

      if (response.ok) {
        toast.success(t.success, {
          duration: 5000,
          position: "top-center",
        });
        // 重置表单
        e.target.reset();
        setSchoolYear([]);
        setSelectedSubjects([]);
        setAdditionalStudents([]);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t.error, {
        duration: 4000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <h3 className="font-semibold mb-6">
                {t.campusTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>
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
              <h3 className="font-semibold">
                {t.bookingTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>

              {/* Parent Information */}
              <div className="space-y-4 pb-6 ">
                <h4 className="font-medium">{t.parentInfo}</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">{t.fullName}</label>
                    <Input
                      name="parentName"
                      placeholder={t.placeholders.fullName}
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">
                      {t.email}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      name="parentEmail"
                      type="email"
                      placeholder={t.placeholders.email}
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">
                      {t.phone}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      name="parentPhone"
                      type="tel"
                      placeholder={t.placeholders.phone}
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {lang === "en"
                      ? "Either email or phone is required"
                      : "邮箱或电话至少填写一项"}
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
                      placeholder={t.placeholders.fullName}
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">
                      {t.email}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      name="studentEmail"
                      type="email"
                      placeholder={t.placeholders.email}
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-28 text-sm">
                      {t.phone}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      name="studentPhone"
                      type="tel"
                      placeholder={t.placeholders.phone}
                      className="rounded-[2rem] border border-gray-200 p-6"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {lang === "en"
                      ? "Either email or phone is required"
                      : "邮箱或电话至少填写一项"}
                  </div>
                </div>
              </div>
            </div>

            {/* Trial Lesson Details */}
            <div className="">
              <h3 className="font-semibold mb-6">
                {t.trialDetails.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>
              <div className="space-y-6">
                {/* School Year */}
                <div className="flex items-center gap-4">
                  <label className="w-1/2 text-sm">
                    {t.schoolYear}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
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
                  <label className="w-1/2 text-sm">
                    {t.subject}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
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

              {/* Add Student Button */}
              <div className="flex items-center justify-between gap-4 mt-6">
                <label className="w-1/2 text-sm">{t.AddTrailText}</label>
                <Button
                  type="button"
                  onClick={addStudent}
                >
                  {t.addStudent}
                </Button>
              </div>

              {/* Additional Students */}
              {additionalStudents.map((student, index) => (
                <div
                  key={student.id}
                  className="mt-6 p-6 border border-gray-200 rounded-[2rem] bg-gray-50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">
                      {t.studentInfo} {index + 2}
                    </h4>
                    <Button
                      type="button"
                      onClick={() => removeStudent(student.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 border-red-600 hover:border-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4 mr-1" />
                      {t.removeStudent}
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="w-28 text-sm">{t.fullName}</label>
                      <Input
                        placeholder={t.placeholders.fullName}
                        value={student.name}
                        onChange={(e) =>
                          updateStudent(student.id, "name", e.target.value)
                        }
                        className="rounded-[2rem] border border-gray-200 p-6"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <label className="w-28 text-sm">{t.email}</label>
                      <Input
                        type="email"
                        placeholder={t.placeholders.email}
                        value={student.email}
                        onChange={(e) =>
                          updateStudent(student.id, "email", e.target.value)
                        }
                        className="rounded-[2rem] border border-gray-200 p-6"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <label className="w-28 text-sm">{t.phone}</label>
                      <Input
                        type="tel"
                        placeholder={t.placeholders.phone}
                        value={student.phone}
                        onChange={(e) =>
                          updateStudent(student.id, "phone", e.target.value)
                        }
                        className="rounded-[2rem] border border-gray-200 p-6"
                      />
                    </div>
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
                  </div>
                </div>
              ))}
            </div>

            {/* Questions */}
            <div className="">
              <h3 className="font-semibold mb-4">{t.questionsTitle}</h3>
              <textarea
                name="questions"
                className="w-full text-sm rounded-[2rem] border border-gray-200 p-6 bg-white"
                rows={3}
                placeholder={t.placeholders.questions}
              />
            </div>

            {/* Contact Method */}
            <div className="">
              <h3 className="font-semibold mb-4">
                {t.contactTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>
              <div className="grid grid-cols-3 divide-x divide-gray-200 gap-6 rounded-[2rem] border border-gray-200 p-6 bg-white">
                {t.contactMethods.map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Input
                      type="radio"
                      name="contact"
                      value={method}
                      className="w-4 h-4"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-700 hover:bg-red-900 text-primary-foreground font-semibold !mt-10 py-6 text-lg uppercase disabled:opacity-50"
            >
              {isSubmitting ? t.sending : t.sendButton}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
