// app/resource-hub/components/ConsultationTab.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import MultiSelect from "@/components/multiselect";
import { toast } from "sonner";
import { X } from "lucide-react";
import Link from "next/link";

const content = {
  en: {
    title: "Book a Meeting Now",
    description_1:
      "Ready to take the next step? \nSchedule your meeting with us today !",
    description_2: "OR Leave Your Information",
    bookingTitle:
      "1. Appointment Information (Please fill in either one of these two fields)",
    parentInfo: "Parent / Guardian Information",
    studentInfo: "Student Information",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    schoolYear: "2. Current School Year / Grade*",
    selectGrade: "Select Grade",
    grades: Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`),
    topicTitle: "3. Topics for Consultation*",
    topics: [
      "School selection consultation",
      "Study planning",
      "VCE subject selection consultation",
      "Medical pathway and UCAT advice",
      "Latin and other language training consultation",
      "Austin tutoring program consultation",
      "Scholarship consultation",
      "Elite public school consultation",
      "Consultation for international students and new immigrants",
      "University major consultation",
      "UK/US university application consultation",
    ],
    topicsPlaceholder: "Select Topics",
    addStudentText: "Consultation for More Than One Student?",
    addStudent: "+ Add Another Student Information",
    removeStudent: "Remove Student",
    questionsTitle: "4. Any Specific Question or Concerns",
    contactTitle: "5. Preferred Contact Method*",
    sendButton: "SEND REQUEST",
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
      contactRequired:
        "Please provide contact information: fill in either Parent OR Student email/phone",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number (Australian format)",
      gradeRequired: "Please select at least one grade level",
      topicRequired: "Please select at least one consultation topic",
      contactMethodRequired: "Please select how you'd like us to contact you",
    },
    // Success/Error messages
    sending: "Sending...",
    success: "Request sent successfully! We will contact you soon.",
    error: "Failed to send request. Please try again.",
  },
  zh: {
    title: "填写表格预约试听课",
    description_1: "在正式开课前，我们将为您提供免费咨询",
    description_2: "或者留下您的信息",
    bookingTitle: "1. 预约信息（请填写以下任意一项）",
    parentInfo: "家长/监护人信息",
    studentInfo: "学生信息",
    fullName: "姓名",
    email: "电子邮箱",
    phone: "联系电话",
    schoolYear: "2. 当前年级*",
    grades: Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`),
    selectGrade: "请选择年级",
    topicTitle: "3. 咨询主题*",
    topics: [
      "择校咨询",
      "学习规划",
      "VCE选课咨询",
      "医学专业报考路径以及UCAT咨询",
      "拉丁等语言培训咨询",
      "Austin补习课程咨询",
      "奖学金咨询",
      "精英公校咨询",
      "留学生以及新移民规划咨询",
      "大学专业咨询",
      "英美留学申请咨询",
    ],
    topicsPlaceholder: "请选择主题",
    addStudentText: "咨询涉及多个学生？",
    addStudent: "+ 添加其他学生信息",
    removeStudent: "移除学生",
    questionsTitle: "4. 特别问题或关注事项",
    contactTitle: "5. 首选联系方式*",
    sendButton: "发送请求",
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
      contactRequired: "请提供联系信息：填写家长或学生的邮箱/电话",
      emailInvalid: "请输入有效的电子邮箱地址",
      phoneInvalid: "请输入有效的电话号码（澳洲格式）",
      gradeRequired: "请至少选择一个年级",
      topicRequired: "请至少选择一个咨询主题",
      contactMethodRequired: "请选择首选联系方式",
    },
    // Success/Error messages
    sending: "发送中...",
    success: "请求发送成功！我们将尽快联系您。",
    error: "发送失败，请重试。",
  },
};

export const ConsultationTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];

  const [schoolYear, setSchoolYear] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [additionalStudents, setAdditionalStudents] = useState([]);
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

  // 添加学生信息
  const addStudent = () => {
    setAdditionalStudents([
      ...additionalStudents,
      {
        id: Date.now(),
        name: "",
        email: "",
        phone: "",
      },
    ]);
  };

  // 移除学生信息
  const removeStudent = (id) => {
    setAdditionalStudents(
      additionalStudents.filter((student) => student.id !== id)
    );
  };

  // 更新学生信息
  const updateStudent = (id, field, value) => {
    setAdditionalStudents(
      additionalStudents.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  // 表单验证
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

    // 检查咨询主题选择
    if (selectedTopics.length === 0) {
      errors.push(t.validation.topicRequired);
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
        schoolYear: schoolYear.join(", "),
        topics: selectedTopics.join(", "),
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
          type: "consultation",
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
        setSelectedTopics([]);
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
          <p className="text-muted-foreground text-justify whitespace-pre-line">
            {t.description_1}
          </p>
          <Link
            href={"https://calendly.com/rachelle-austinedu/30min"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="my-4 px-8">Book Now</Button>
          </Link>
          <p className="text-muted-foreground text-justify">
            {t.description_2}
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 pl-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
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

            {/* School Year */}
            <div className="flex items-center gap-4">
              <label className="w-1/2 font-semibold mb-6">
                {t.schoolYear.replace("*", "")}
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

            {/* Topic Selection */}
            <div className="flex items-center gap-4">
              <label className="w-1/2 font-semibold mb-6">
                {t.topicTitle.replace("*", "")}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="w-1/2">
                <MultiSelect
                  placeholder={
                    selectedTopics.length > 0
                      ? selectedTopics.join(", ")
                      : t.topicsPlaceholder
                  }
                  options={t.topics.map((topic) => ({
                    label: topic,
                    value: topic,
                  }))}
                  selectedOptions={selectedTopics}
                  setSelectedOptions={setSelectedTopics}
                  className="rounded-[2rem] border border-gray-200 p-6 bg-white"
                />
              </div>
            </div>

            {/* Add Student Button */}
            <div className="flex items-center justify-between gap-4 mt-6">
              <label className="w-1/2 text-sm">{t.addStudentText}</label>
              <Button type="button" onClick={addStudent}>
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
                  <div className="flex items-center gap-4">
                    <label className="w-1/2 text-sm">{t.topicTitle}</label>
                    <div className="w-1/2">
                      <MultiSelect
                        placeholder={
                          selectedTopics.length > 0
                            ? selectedTopics.join(", ")
                            : t.topicsPlaceholder
                        }
                        options={t.topics.map((topic) => ({
                          label: topic,
                          value: topic,
                        }))}
                        selectedOptions={selectedTopics}
                        setSelectedOptions={setSelectedTopics}
                        className="rounded-[2rem] border border-gray-200 p-6 bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
