// app/resource-hub/components/WebinarTab.js
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import MultiSelect from "@/components/multiselect";
import { toast } from "sonner";

const content = {
  en: {
    title:
      "Please leave your details to receive the latest updates on our free Webinar",
    description:
      "Join our expert-led webinars for valuable insights on academic planning and school selection. Register now to secure your spot!",
    subscriptionTitle:
      "1. Subscription Information (Please fill in either one of these two fields)*",
    parentInfo: "Parent / Guardian Information",
    studentInfo: "Student Information",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    schoolYear: "2. Current School Year / Grade*",
    selectGrade: "Select Grade",
    grades: [
      "Primary School - Years 1-6",
      "Secondary School - Years 7-9",
      "Senior Secondary School - Years 10-12",
    ],
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
    languageTitle: "4. Tick your Preferred Language*",
    languages: ["Mandarin", "English"],
    sendButton: "REGISTER NOW",
    // Placeholders
    placeholders: {
      fullName: "Please enter full name",
      email: "Please enter email address",
      phone: "Please enter phone number",
    },
    // Validation messages
    validation: {
      contactRequired:
        "Please provide contact information: fill in either Parent OR Student email/phone",
      emailRequired: "Please provide at least one email address to receive confirmation",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number (Australian format)",
      gradeRequired: "Please select at least one grade level",
      webinarRequired: "Please select a webinar you're interested in",
      languageRequired: "Please select your preferred language",
    },
    // Success/Error messages
    sending: "Registering...",
    success: "Registration successful! We will send you webinar details soon.",
    error: "Registration failed. Please try again.",
  },
  zh: {
    title: "免费在线研讨会注册",
    description:
      "参加我们专家主持的在线研讨会，获取学业规划和学校选择的宝贵建议。现在注册，确保您的位置！",
    subscriptionTitle: "1. 注册信息（请填写以下任意一项）*",
    parentInfo: "家长/监护人信息",
    studentInfo: "学生信息",
    fullName: "姓名",
    email: "电子邮箱",
    phone: "联系电话",
    schoolYear: "2. 当前年级*",
    grades: ["小学 1-6年级", "初中 7-9年级", "高中 10-12年级"],
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
    languageTitle: "4. 选择首选语言*",
    languages: ["中文", "英文"],
    sendButton: "立即注册",
    // Placeholders
    placeholders: {
      fullName: "请输入姓名",
      email: "请输入电子邮箱",
      phone: "请输入联系电话",
    },
    // Validation messages
    validation: {
      contactRequired: "请提供联系信息：填写家长或学生的邮箱/电话",
      emailRequired: "请至少提供一个邮箱地址以接收确认邮件",
      emailInvalid: "请输入有效的电子邮箱地址",
      phoneInvalid: "请输入有效的电话号码（澳洲格式）",
      gradeRequired: "请至少选择一个年级",
      webinarRequired: "请选择您感兴趣的研讨会",
      languageRequired: "请选择您的首选语言",
    },
    // Success/Error messages
    sending: "注册中...",
    success: "注册成功！我们将尽快发送研讨会详情给您。",
    error: "注册失败，请重试。",
  },
};

export const WebinarTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const [schoolYear, setSchoolYear] = useState([]);
  const [selectedWebinars, setSelectedWebinars] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // 表单验证 - 更新版本，确保邮箱必填
  const validateForm = (formData) => {
    const errors = [];

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

    // 新增：确保至少有一个有效邮箱（用于发送确认邮件）
    if (!parentEmail && !studentEmail) {
      errors.push(t.validation.emailRequired);
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

    // 检查研讨会选择
    if (selectedWebinars.length === 0) {
      errors.push(t.validation.webinarRequired);
    }

    // 检查语言选择
    if (!selectedLanguage) {
      errors.push(t.validation.languageRequired);
    }

    return errors;
  };

  // 处理研讨会选择
  const handleWebinarChange = (webinar) => {
    setSelectedWebinars([webinar]);
  };

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.target);

    // 验证表单
    const errors = validateForm(formData);
    if (errors.length > 0) {
      // 显示第一个错误，让用户知道具体需要填写什么
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
        schoolYear: schoolYear.join(", "),
        webinars: selectedWebinars.join(", "),
        language: selectedLanguage,
        timestamp: new Date().toISOString(),
      };

      // 发送到API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "webinar",
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
        setSelectedWebinars([]);
        setSelectedLanguage("");
      } else {
        throw new Error("Failed to send registration");
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
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Text Section - 移动端在上方 */}
        <div className="w-full lg:w-1/3 lg:pr-8 lg:border-r border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-justify text-sm sm:text-base">{t.description}</p>
        </div>

        {/* Right Form Section - 移动端在下方 */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
            {/* Subscription Information */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-semibold text-sm sm:text-base">
                {t.subscriptionTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>

              {/* Parent Information */}
              <div className="space-y-4 pb-4 lg:pb-6">
                <h4 className="font-medium text-sm sm:text-base">{t.parentInfo}</h4>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-28 text-sm">{t.fullName}</label>
                    <Input
                      name="parentName"
                      placeholder={t.placeholders.fullName}
                      className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-28 text-sm">
                      {t.email}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      name="parentEmail"
                      placeholder={t.placeholders.email}
                      className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-28 text-sm">
                      {t.phone}
                    </label>
                    <Input
                      name="parentPhone"
                      placeholder={t.placeholders.phone}
                      className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6"
                    />
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm sm:text-base">{t.studentInfo}</h4>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-28 text-sm">{t.fullName}</label>
                    <Input
                      name="studentName"
                      placeholder={t.placeholders.fullName}
                      className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-28 text-sm">
                      {t.email}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      name="studentEmail"
                      placeholder={t.placeholders.email}
                      className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-28 text-sm">
                      {t.phone}
                    </label>
                    <Input
                      name="studentPhone"
                      placeholder={t.placeholders.phone}
                      className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* School Year */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="w-full sm:w-1/2 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
                {t.schoolYear.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="w-full sm:w-1/2">
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
                  className="rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6 bg-white"
                />
              </div>
            </div>

            {/* Webinar Selection */}
            <div className="">
              <h3 className="font-semibold mb-4 lg:mb-6 text-sm sm:text-base">
                {t.webinarTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {Object.entries(t.webinars).map(([gradeGroup, webinars]) => (
                  <div key={gradeGroup} className="border-b pb-4 lg:pb-6 last:border-0">
                    <h4 className="font-medium mb-3 lg:mb-4 text-sm sm:text-base">{gradeGroup}</h4>
                    <div className="grid grid-cols-1 gap-3 lg:gap-4 rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6">
                      {webinars.map((webinar) => (
                        <label
                          key={webinar}
                          className="flex items-start sm:items-center gap-3 p-2 relative"
                        >
                          <Input
                            type="radio"
                            name="webinar"
                            value={webinar}
                            className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0"
                            checked={selectedWebinars.includes(webinar)}
                            onChange={() => handleWebinarChange(webinar)}
                          />
                          <span className="text-sm leading-relaxed">{webinar}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Preference */}
            <div className="">
              <h3 className="font-semibold mb-4 text-sm sm:text-base">
                {t.languageTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded-xl lg:rounded-[2rem] border border-gray-200 p-4 lg:p-6">
                {t.languages.map((language) => (
                  <label
                    key={language}
                    className="flex items-center gap-3 p-2 relative"
                  >
                    <Input
                      type="radio"
                      name="language"
                      value={language}
                      className="w-4 h-4 shrink-0"
                      checked={selectedLanguage === language}
                      onChange={() => setSelectedLanguage(language)}
                    />
                    <span className="text-sm">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-700 hover:bg-red-900 text-primary-foreground font-semibold !mt-8 lg:!mt-10 py-4 lg:py-6 text-base lg:text-lg uppercase disabled:opacity-50 w-full sm:w-auto"
            >
              {isSubmitting ? t.sending : t.sendButton}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};