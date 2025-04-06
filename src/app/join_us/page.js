"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const content = {
  en: {
    title: "Join Us",
    section1: {
      heading: "Education with Heart, Results with Impact.",
      desc: "Austin Education is a leading educational institution specialising in comprehensive tutoring services for students from Year 1 to Year 12. Since our establishment in 2014, we have been dedicated to fostering academic excellence and personal growth in our students. Our team consists of 40 full-time staff and over 220 part-time and casual professionals, including subject teachers, teaching assistants, and academic advisors. With campuses in Box Hill, Mt Waverley, Melbourne CBD, Point Cook (Victoria), and Adelaide (South Australia), we provide accessible, high-quality learning environments for both staff and students.",
      button1: "Join Us",
      button2: "Contact",
    },
    section2: {
      heading: "Why Work With Us",
      desc: "We value our employees and are committed to creating a dynamic, supportive, and rewarding work environment. With industry-leading salaries, flexible hours, and continuous professional development, we empower our team to thrive and grow. We provide comprehensive training to ensure every team member feels confident and equipped for success.\nBeyond work, we foster a fun and inclusive community with exciting clubs for sports, board games, and more – offering the perfect way to connect, relax, and enjoy life outside the classroom!",
    },
    positions: {
      title: "Open Positions",
      list: [
        {
          title: "Year 1-9 English Teacher (First Language/EAL)",
          responsibilities: [
            "Teach English to students with diverse language backgrounds in Years 1-9.",
            "Design engaging and interactive lesson plans.",
            "Adapt teaching strategies to support students when required.",
            "Evaluate student performance and provide feedback for improvement.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in English, Education, Linguistics, or a related field, or be a current university student in a related discipline.",
            "For English First Language Teachers: Must be a native English speaker.",
            "Experience in teaching English First Language and/or EAL.",
            "Familiarity with Australian curriculum standards.",
            "Strong communication and classroom management skills.",
            "Teaching qualification (VIT registration preferred).",
          ],
        },
        {
          title: "Year 1-9 Mathematics Teacher",
          responsibilities: [
            "Teach Mathematics to students in Years 1-9, ensuring engagement and comprehension.",
            "Develop lesson plans that align with the curriculum and cater to different learning styles.",
            "Assess student progress and provide constructive feedback.",
            "Foster a positive and encouraging learning environment.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Mathematics, Education, or a related field, or be a current university student in a related discipline.",
            "Experience teaching Mathematics at the primary and/or secondary level.",
            "Familiarity with Australian curriculum standards.",
            "Strong communication and classroom management skills.",
            "Teaching qualification (VIT registration preferred).",
          ],
        },
        {
          title: "Year 7-9 Science Teacher",
          responsibilities: [
            "Teach general Science to students in Years 7-9, covering topics in Biology, Chemistry, Physics, and Earth Sciences.",
            "Develop lesson plans that align with the curriculum and cater to different learning styles.",
            "Design engaging and inquiry-based lessons that promote critical thinking.",
            "Assess student progress and provide constructive feedback.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Science, Education, or a related field, or be a current university student in a related discipline.",
            "Experience teaching Science at the secondary level.",
            "Strong knowledge of the Australian Science curriculum and teaching methodologies.",
            "Teaching qualification (VIT registration preferred).",
          ],
        },
        {
          title: "VCE English Teacher",
          responsibilities: [
            "Teach English First Language, EAL, Literature, or English Language at the VCE level.",
            "Guide students in essay writing, textual analysis, and exam techniques.",
            "Provide individualised feedback and academic support.",
            "Prepare lesson plans aligned with VCE curriculum standards.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in English, Education, or a related field, or be a current university student in a related discipline.",
            "For English First Language Teachers and Literature Teachers: Must be a native English speaker.",
            "Teaching qualification and experience in VCE English instruction.",
            "Experience teaching VCE English subjects.",
            "Strong knowledge of VCE assessment criteria.",
            "Excellent writing and communication skills.",
          ],
        },
        {
          title: "VCE Mathematics Teacher",
          responsibilities: [
            "Teach VCE Mathematical Methods, Specialist Mathematics, or Further Mathematics.",
            "Develop structured lesson plans aligned with the VCE curriculum and exam requirements.",
            "Guide students in problem-solving, logical reasoning, and analytical thinking.",
            "Prepare students for VCE assessments, SACs, and final exams.",
            "Provide individual academic support and track student progress.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Mathematics, Education, or a related field, or be a current university student in a related discipline.",
            "Teaching qualification and/or experience in VCE Mathematics instruction.",
            "Strong knowledge of VCE assessment criteria and study design.",
            "Excellent mathematical and analytical skills.",
          ],
        },
        {
          title: "VCE Science Teacher",
          responsibilities: [
            "Teach VCE Biology, Chemistry, Physics, or Psychology.",
            "Plan and deliver engaging lessons aligned with the VCE study design.",
            "Guide students in scientific inquiry, practical experiments, and data analysis.",
            "Prepare students for VCE assessments, SACs, and final exams.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Science, Education, or a related field, or be a current university student in a related discipline.",
            "Teaching qualification and/or experience in VCE Science instruction.",
            "Strong knowledge of VCE assessment criteria, lab work, and scientific methodologies.",
          ],
        },
        {
          title: "IB English Teacher",
          responsibilities: [
            "Teach IB English A: Language and Literature (HL) or IB English A: Literature (HL).",
            "Guide students in critical reading, textual analysis, and academic writing.",
            "Prepare students for IB assessments, including Internal Assessments and Extended Essays.",
            "Provide individualised feedback to support student growth.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in English, Education, or a related field, or be a current university student in a related discipline.",
            "Must be a native English speaker.",
            "Teaching qualification and/or experience in IB curriculum delivery.",
            "Strong understanding of IB assessment criteria and approaches to learning.",
            "Ability to engage students in an inquiry-based learning environment.",
          ],
        },
        {
          title: "IB Science Teacher",
          responsibilities: [
            "Teach IB Biology, Chemistry, or Physics (HL).",
            "Deliver engaging and concept-driven lessons aligned with the IB framework.",
            "Guide students in lab work, Internal Assessments, and exam preparation.",
            "Foster a deep understanding of scientific inquiry and real-world applications.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Science, Education, or a related field, or be a current university student in a related discipline.",
            "Teaching qualification and/or experience in IB curriculum delivery.",
            "Strong understanding of IB assessment criteria and inquiry-based learning approaches.",
            "Ability to support students in experimental work and research-based assessments.",
          ],
        },
        {
          title: "Language Teacher (Chinese, Japanese, French, Latin)",
          responsibilities: [
            "Teach one or more foreign languages at beginner to advanced/VCE levels.",
            "Develop engaging and interactive language lessons.",
            "Incorporate cultural elements to enhance language learning.",
            "Assess and support students in their language proficiency development.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Linguistics, Education, or a related field, or be a current university student in a related discipline.",
            "Fluency and teaching experience in the target language.",
            "Familiarity with Australian curriculum standards.",
            "Teaching qualification (VIT registration preferred).",
            "Ability to create an immersive language learning experience.",
          ],
        },
        {
          title:
            "Business Studies Teacher (Accounting, Economics, Business Management, etc.)",
          responsibilities: [
            "Teach Accounting, Economics, Business Management, or related subjects at the VCE level.",
            "Develop structured lesson plans that align with the VCE curriculum and exam requirements.",
            "Guide students in critical thinking, financial analysis, and problem-solving.",
            "Prepare students for VCE assessments, SACs, and final exams.",
          ],
          requirements: [
            "Must have obtained a Bachelor’s degree in Business, Accounting, Economics, Education, or a related field, or be a current university student in a related discipline.",
            "Teaching qualification and/or experience in VCE Business Studies instruction.",
            "Strong knowledge of VCE assessment criteria and study design.",
            "Excellent analytical and communication skills.",
          ],
        },
      ],
    },
    form: {
      title: "Online Job Application Form",
      sections: [
        {
          id: "personalInformation",
          heading: "Personal Information",
          fields: [
            {
              name: "fullName",
              label: "Full Name",
              type: "input",
              required: true,
            },
            {
              name: "phoneNumber",
              label: "Phone Number",
              type: "input",
              required: true,
            },
            {
              name: "emailAddress",
              label: "Email Address",
              type: "input",
              required: true,
            },
            {
              name: "city",
              label: "City",
              type: "input",
              required: true,
            },
            {
              name: "state",
              label: "State",
              type: "select",
              required: true,
              options: ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
            },
          ],
        },
        {
          id: "positionAppliedFor",
          heading: "Position Applied For",
          fields: [
            {
              name: "selectPosition",
              label: "Select Position",
              type: "select",
              required: true,
              // 将开放职位的10个名称填入，示例如下
              options: [
                "Year 1-9 English Teacher (First Language/EAL)",
                "Year 1-9 Mathematics Teacher",
                "Year 7-9 Science Teacher",
                "VCE English Teacher",
                "VCE Mathematics Teacher",
                "VCE Science Teacher",
                "IB English Teacher",
                "IB Science Teacher",
                "Language Teacher (Chinese, Japanese, French, Latin)",
                "Business Studies Teacher (Accounting, Economics, Business Management, etc.)",
              ],
            },
            {
              name: "preferredCampusLocation",
              label: "Preferred Campus Location",
              type: "select",
              required: true,
              options: [
                "Melbourne Box Hill",
                "Melbourne Mt Waverley",
                "Melbourne CBD",
                "Melbourne Point Cook",
                "South Australia Adelaide",
              ],
            },
          ],
        },
        {
          id: "educationalBackground",
          heading: "Educational Background",
          fields: [
            {
              name: "highestQualification",
              label: "Highest Qualification",
              type: "select",
              required: true,
              options: [
                "Bachelor’s",
                "Master’s",
                "PhD",
                "Current University Student",
              ],
            },
            {
              name: "majorFieldOfStudy",
              label: "Major/Field of Study",
              type: "input",
              required: false,
            },
            {
              name: "institutionName",
              label: "Institution Name",
              type: "input",
              required: true,
            },
            {
              name: "yearOfGraduation",
              label: "Year of Graduation",
              type: "input",
              required: true,
            },
            {
              name: "vceSubjectsAndScores",
              label: "VCE Subjects & study scores (if applicable)",
              type: "input",
              required: false,
            },
            {
              name: "educationSummary",
              label: "Education Summary",
              type: "text",
              required: false,
              placeholder:
                "List your degrees, majors, and any relevant coursework or honours. You may copy and paste from your resume",
            },
          ],
        },
        {
          id: "workExperience",
          heading: "Work Experience",
          fields: [
            {
              name: "teachingQualification",
              label: "Do you have a teaching qualification?",
              type: "select",
              required: true,
              options: ["Yes", "No", "In Progress"],
            },
            {
              name: "workExperienceSummary",
              label: "Work Experience Summary",
              type: "text",
              required: true,
              placeholder:
                "Include job titles, organisation/school/institution names, responsibilities, and achievements. You may copy and paste from your resume",
            },
          ],
        },
        {
          id: "additionalInformation",
          heading: "Additional Information",
          fields: [
            {
              name: "rightToWork",
              label: "Do you have the right to work in Australia?",
              type: "select",
              required: true,
              options: ["Yes", "No"],
            },
            {
              name: "additionalInfo",
              label: "Additional Information",
              type: "text",
              required: false,
              placeholder: "Anything you'd like us to know",
            },
          ],
        },
      ],
      submitButtonLabel: "Submit Application",
    },
  },
  zh: {
    title: "加入我们",
    section1: {
      heading: "用心教育，成就卓越",
      desc: "奥斯汀教育是一家领先的教育机构，专门为一年级至十二年级的学生提供全面的辅导服务。自 2014 年成立以来，我们一直致力于培养学生的学业成绩和个人成长。我们的团队由 40 名全职员工和 220 多名兼职及临时专业人员组成，其中包括学科教师、教学助理和学术顾问。我们在 Box Hill、Mt Waverley、墨尔本 CBD、Point Cook（维多利亚州）和 Adelaide（南澳大利亚州）均设有校区，为教职员工和学生提供方便、优质的学习环境。",
      button1: "加入我们",
      button2: "联系我们",
    },
    section2: {
      heading: "为什么选择我们",
      desc: "我们重视员工，致力于创造一个充满活力、相互支持、回报丰厚的工作环境。我们提供行业领先的薪酬、灵活的工作时间和持续的职业发展，让我们的团队茁壮成长。我们提供全面的培训，确保每一位团队成员都充满自信，并为成功做好准备。\n在工作之余，我们还通过令人兴奋的体育俱乐部、棋类游戏等活动，营造了一个充满乐趣和包容性的社区，提供了一个沟通、放松和享受课外生活的完美方式！",
    },
    positions: {
      title: "开放职位",
      list: [
        {
          title: "1-9年级英语教师（母语/EAL）",
          responsibilities: [
            "为1至9年级不同语言背景的学生教授英语课程。",
            "设计富有吸引力和互动性的课程计划。",
            "根据需要调整教学策略以支持学生学习。",
            "评估学生表现并提供改进建议。",
          ],
          requirements: [
            "须拥有英语、教育、语言学或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "如申请英语母语教师职位：需为英语母语者。",
            "具有教授英语母语或英语为附加语言（EAL）的经验。",
            "熟悉澳大利亚课程标准。",
            "具备良好的沟通能力和课堂管理能力。",
            "具备教学资质（优先考虑拥有VIT注册者）。",
          ],
        },
        {
          title: "1-9年级数学教师",
          responsibilities: [
            "为1至9年级学生教授数学，确保课堂参与度和理解力。",
            "制定符合课程要求且适应不同学习风格的课程计划。",
            "评估学生进展并提供建设性反馈。",
            "营造积极和鼓励性的学习环境。",
          ],
          requirements: [
            "须拥有数学、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "具有小学或中学数学教学经验。",
            "熟悉澳大利亚课程标准。",
            "具备良好的沟通能力和课堂管理能力。",
            "具备教学资质（优先考虑拥有VIT注册者）。",
          ],
        },
        {
          title: "7-9年级科学教师",
          responsibilities: [
            "为7至9年级学生教授综合科学，包括生物、化学、物理和地球科学内容。",
            "制定符合课程并适应不同学习风格的教学计划。",
            "设计富有趣味性且以探究为导向的课程，培养学生的批判性思维能力。",
            "评估学生进度并提供反馈建议。",
          ],
          requirements: [
            "须拥有科学、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "具有中学科学教学经验。",
            "熟悉澳大利亚科学课程及教学方法。",
            "具备教学资质（优先考虑拥有VIT注册者）。",
          ],
        },
        {
          title: "VCE英语教师",
          responsibilities: [
            "教授VCE阶段的英语母语、EAL、文学或英语语言课程。",
            "指导学生写作、文本分析与考试技巧。",
            "为学生提供个性化反馈与学术支持。",
            "制定符合VCE课程标准的教学计划。",
          ],
          requirements: [
            "须拥有英语、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "如申请英语母语或文学教师职位：需为英语母语者。",
            "具有教学资质与VCE英语授课经验。",
            "熟悉VCE英语学科内容。",
            "对VCE评估标准有深入了解。",
            "具备出色的写作与沟通能力。",
          ],
        },
        {
          title: "VCE数学教师",
          responsibilities: [
            "教授VCE数学方法、专业数学或进一步数学。",
            "制定与VCE课程和考试要求相符的结构化课程计划。",
            "指导学生进行解题、逻辑推理和分析思维训练。",
            "帮助学生准备VCE测验、校内评估（SAC）及最终考试。",
            "为学生提供个别支持并跟踪学习进度。",
          ],
          requirements: [
            "须拥有数学、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "具有教学资质和/或VCE数学教学经验。",
            "熟悉VCE评估标准和课程结构。",
            "具备优异的数学及分析能力。",
          ],
        },
        {
          title: "VCE科学教师",
          responsibilities: [
            "教授VCE阶段的生物、化学、物理或心理学课程。",
            "计划并实施与VCE课程设计一致的精彩课堂教学。",
            "指导学生进行科学探究、实验操作和数据分析。",
            "帮助学生准备VCE考试、校内评估（SAC）和最终测试。",
          ],
          requirements: [
            "须拥有科学、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "具有教学资质和/或VCE科学教学经验。",
            "对VCE评估标准、实验操作及科学教学方法有深入了解。",
          ],
        },
        {
          title: "IB英语教师",
          responsibilities: [
            "教授IB英语A：语言与文学（高级）或IB英语A：文学（高级）课程。",
            "指导学生进行文本分析、批判性阅读与学术写作。",
            "帮助学生完成IB内部评估、拓展论文等任务。",
            "为学生提供个性化反馈以促进成长。",
          ],
          requirements: [
            "须拥有英语、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "须为英语母语者。",
            "具有IB课程教学资质和/或相关经验。",
            "深入理解IB评估标准与学习方法。",
            "能在探究式教学环境中激发学生学习兴趣。",
          ],
        },
        {
          title: "IB科学教师",
          responsibilities: [
            "教授IB生物、化学或物理（高级）课程。",
            "基于IB课程框架开展富有启发性与概念导向的教学。",
            "指导学生进行实验、内部评估和考试准备。",
            "促进学生对科学探究及其现实应用的深入理解。",
          ],
          requirements: [
            "须拥有科学、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "具有IB课程教学资质和/或相关经验。",
            "深入理解IB评估标准及探究式教学方法。",
            "能有效支持学生完成实验与研究型评估任务。",
          ],
        },
        {
          title: "语言教师（中文、日语、法语、拉丁语）",
          responsibilities: [
            "教授一门或多门外语，从入门至高级/VCE水平。",
            "设计富有互动性与趣味性的语言课程。",
            "融入文化元素以增强语言学习体验。",
            "评估学生语言水平并提供学习支持。",
          ],
          requirements: [
            "须拥有语言学、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "熟练掌握目标语言并具有教学经验。",
            "熟悉澳大利亚课程标准。",
            "具备教学资质（优先考虑拥有VIT注册者）。",
            "能够营造沉浸式语言学习环境。",
          ],
        },
        {
          title: "商科教师（会计、经济、商业管理等）",
          responsibilities: [
            "教授VCE阶段的会计、经济、商业管理或相关课程。",
            "制定结构清晰、符合VCE课程与考试要求的教学计划。",
            "引导学生进行批判性思维、财务分析与问题解决。",
            "帮助学生准备VCE校内评估（SAC）及期末考试。",
          ],
          requirements: [
            "须拥有商业、会计、经济、教育或相关领域的学士学位，或目前正在相关学科攻读大学课程。",
            "具有教学资质和/或VCE商科教学经验。",
            "熟悉VCE评估标准与课程设计结构。",
            "具备出色的分析能力与沟通能力。",
          ],
        },
      ],
    },
    form: {
      title: "在线申请表",
      sections: [
        {
          id: "personalInformation",
          heading: "个人信息",
          fields: [
            {
              name: "fullName",
              label: "全名",
              type: "input",
              required: true,
            },
            {
              name: "phoneNumber",
              label: "联系电话",
              type: "input",
              required: true,
            },
            {
              name: "emailAddress",
              label: "邮箱地址",
              type: "input",
              required: true,
            },
            {
              name: "city",
              label: "城市",
              type: "input",
              required: true,
            },
            {
              name: "state",
              label: "州/地区",
              type: "select",
              required: true,
              options: ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
            },
          ],
        },
        {
          id: "positionAppliedFor",
          heading: "申请职位",
          fields: [
            {
              name: "selectPosition",
              label: "选择职位",
              type: "select",
              required: true,
              options: [
                "1-9年级英语教师（母语/EAL）",
                "1-9年级数学教师",
                "7-9年级科学教师",
                "VCE英语教师",
                "VCE数学教师",
                "VCE科学教师",
                "IB英语教师",
                "IB科学教师",
                "语言教师（中文、日语、法语、拉丁语）",
                "商科教师（会计、经济、商业管理等）",
              ],
            },
            {
              name: "preferredCampusLocation",
              label: "首选校区",
              type: "select",
              required: true,
              options: [
                "墨尔本Box Hill",
                "墨尔本Mt Waverley",
                "墨尔本CBD",
                "墨尔本Point Cook",
                "南澳大利亚Adelaide",
              ],
            },
          ],
        },
        {
          id: "educationalBackground",
          heading: "教育背景",
          fields: [
            {
              name: "highestQualification",
              label: "最高学历",
              type: "select",
              required: true,
              options: ["学士", "硕士", "博士", "目前在读大学生"],
            },
            {
              name: "majorFieldOfStudy",
              label: "专业/研究领域",
              type: "input",
              required: false,
            },
            {
              name: "institutionName",
              label: "学校名称",
              type: "input",
              required: true,
            },
            {
              name: "yearOfGraduation",
              label: "毕业年份",
              type: "input",
              required: true,
            },
            {
              name: "vceSubjectsAndScores",
              label: "VCE科目及分数（如适用）",
              type: "input",
              required: false,
            },
            {
              name: "educationSummary",
              label: "教育概述",
              type: "text",
              required: false,
              placeholder:
                "列出你的学历、专业以及任何相关课程或荣誉。可以从简历中复制粘贴。",
            },
          ],
        },
        {
          id: "workExperience",
          heading: "工作/教学经历",
          fields: [
            {
              name: "teachingQualification",
              label: "是否拥有教学资质？",
              type: "select",
              required: true,
              options: ["是", "否", "正在获取中"],
            },
            {
              name: "workExperienceSummary",
              label: "工作经历概述",
              type: "text",
              required: true,
              placeholder:
                "请包含职务名称、任职机构（学校/机构）名称、职责和主要成就等。可从简历中复制粘贴。",
            },
          ],
        },
        {
          id: "additionalInformation",
          heading: "其他信息",
          fields: [
            {
              name: "rightToWork",
              label: "是否拥有在澳大利亚工作的合法身份？",
              type: "select",
              required: true,
              options: ["是", "否"],
            },
            {
              name: "additionalInfo",
              label: "补充说明",
              type: "text",
              required: false,
              placeholder: "任何你想让我们知道的其他信息",
            },
          ],
        },
      ],
      submitButtonLabel: "提交申请",
    },
  },
};

export default function JoinUsPage() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];

  /**
   * 根据字段类型渲染不同的表单控件
   * - 给表单控件添加 className，确保背景、文字、placeholder 等符合需求
   */
  function renderField(field) {
    const commonClassNames =
      "bg-primary-foreground text-gray-800 placeholder:text-gray-400 text-sm md:text-base";
    // 生成带星号的placeholder
    const placeholderText = field.required ? `${field.label} *` : field.label;

    switch (field.type) {
      case "select": {
        return (
          <Select name={field.name} required={field.required}>
            <SelectTrigger className={`w-full ${commonClassNames}`}>
              <SelectValue placeholder={placeholderText} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      case "text": {
        return (
          <Textarea
            name={field.name}
            required={field.required}
            placeholder={field.placeholder || placeholderText}
            className={`min-h-[100px] ${commonClassNames}`}
          />
        );
      }

      default: {
        return (
          <Input
            type={field.type === "input" ? "text" : field.type}
            name={field.name}
            required={field.required}
            placeholder={placeholderText}
            className={commonClassNames}
          />
        );
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      {/* 页面标题 */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
      </div>

      {/* 1. 左右布局：左边图片，右边文字 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* 左侧图片 */}
        <div className="w-full md:w-1/2">
          <Image
            src="/join_us/1.png"
            alt="Placeholder Image"
            width={600}
            height={400}
          />
        </div>
        {/* 右侧文字 */}
        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.section1.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            {t.section1.desc}
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="text-sm md:text-base">
              {t.section1.button1}
            </Button>
            <Button variant="outline" className="text-sm md:text-base">
              {t.section1.button2}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. 文字+图片区块 */}
      <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* 左侧文字 */}
        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.section2.heading}
          </h2>
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
            {t.section2.desc}
          </p>
        </div>
        {/* 右侧图片 */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image
            src="/join_us/2.png"
            alt="Placeholder Image"
            width={600}
            height={400}
            priority
          />
        </div>
      </section>

      {/* 3. 左右布局：职位列表 + 申请表 */}
      <section className="flex flex-col md:flex-row items-start gap-8">
        {/* 左侧：职位列表（Accordion 格式） */}
        <div className="w-full md:w-1/2 pb-12">
          <h2 className="text-3xl font-bold mb-6">{t.positions.title}</h2>
          <Accordion type="multiple" className="space-y-4">
            {t.positions.list.map((position, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-3"
              >
                <AccordionTrigger className="py-3 text-left">
                  <span className="text-base md:text-lg font-medium">
                    {position.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1">
                  <div className="space-y-3 text-sm md:text-base">
                    <div>
                      <h4 className="font-bold mb-2">
                        {lang === "en" ? "Responsibilities" : "工作职责"}
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {position.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        {lang === "en" ? "Requirements" : "任职要求"}
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* 右侧：在线申请表 */}
        <div className="w-full md:w-1/2 sticky top-4">
          <h2 className="text-3xl font-bold mb-6">{t.form.title}</h2>
          <form className="space-y-4 bg-card p-4 md:p-8 rounded-lg shadow-lg bg-primary text-primary-foreground">
            {t.form.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">
                  {section.heading}
                </h3>

                {/* 需要双列的区块 */}
                {["personalInformation", "positionAppliedFor"].includes(
                  section.id
                ) || section.id === "educationalBackground" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.fields
                      // 教育背景特殊处理前四个
                      .filter(
                        (f) =>
                          section.id !== "educationalBackground" ||
                          [
                            "highestQualification",
                            "majorFieldOfStudy",
                            "institutionName",
                            "yearOfGraduation",
                          ].includes(f.name)
                      )
                      .map((field) => (
                        <div
                          key={field.name}
                          className={
                            field.type === "select-multiple" ? "col-span-2" : ""
                          }
                        >
                          <div className="space-y-2">{renderField(field)}</div>
                        </div>
                      ))}

                    {/* 教育背景后续字段 */}
                    {section.id === "educationalBackground" &&
                      section.fields
                        .filter(
                          (f) =>
                            ![
                              "highestQualification",
                              "majorFieldOfStudy",
                              "institutionName",
                              "yearOfGraduation",
                            ].includes(f.name)
                        )
                        .map((field) => (
                          <div
                            key={field.name}
                            className="col-span-1 md:col-span-2 space-y-2"
                          >
                            {renderField(field)}
                          </div>
                        ))}
                  </div>
                ) : (
                  /* 其他区块单列布局 */
                  <div className="space-y-4">
                    {section.fields.map((field) => (
                      <div key={field.name} className="space-y-2">
                        {renderField(field)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-start mt-6">
              <Button
                type="submit"
                className="w-full md:w-auto bg-red-700 text-white hover:bg-red-900"
              >
                {t.form.submitButtonLabel}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
