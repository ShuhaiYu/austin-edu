"use client";

import { useContext, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { LangContext } from "@/app/layout";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { homeContent } from "@/app/content";

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
    title: "VCE Latin Unit 1-4",
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



export default function FindCourse() {
  const { lang = "en" } = useContext(LangContext) || {};
  const router = useRouter();
  const t = homeContent[lang].findCourse;

  const [state, setState] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  // 将Year X转换为数字
  const getGradeNumber = (gradeString) => {
    const match = gradeString.match(/Year (\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  // 根据选择的State和Grade精确过滤课程
  const availableSubjects = useMemo(() => {
    if (!state || !grade) return [];

    const gradeNumber = getGradeNumber(grade);
    
    return COURSE_DATABASE.filter(course => {
      // 检查州是否匹配
      const stateMatches = course.states.includes(state);
      
      // 检查年级是否在课程的适用年级范围内
      const gradeMatches = course.grades.includes(gradeNumber);
      
      return stateMatches && gradeMatches;
    });
  }, [state, grade]);

  // 根据State动态计算可用年级
  const availableGrades = useMemo(() => {
    if (!state) return [];
    
    if (state === "South Australia") {
      return [
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 7", "Year 8", "Year 9"
      ];
    } else if (state === "Victoria") {
      return [
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"
      ];
    }
    
    return [];
  }, [state]);

  // 当State改变时重置Grade和Subject
  const handleStateChange = (newState) => {
    setState(newState);
    setGrade("");
    setSubject("");
  };

  // 当Grade改变时重置Subject
  const handleGradeChange = (newGrade) => {
    setGrade(newGrade);
    setSubject("");
  };

  const handleSearch = () => {
    if (!state || !grade || !subject) {
      alert("Please select all fields before searching");
      return;
    }

    // 构建URL参数
    const params = new URLSearchParams({
      state,
      grade,
      subject
    });

    // 跳转到课程页面并带上参数
    router.push(`/courses?${params.toString()}`);
  };

  return (
    <div className="py-2">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* 1. Label */}
        <span className="font-medium md:text-right text-lg">
          {t.label}
        </span>

        {/* 2. State Selection */}
        <Select
          value={state}
          onValueChange={handleStateChange}
        >
          <SelectTrigger className="bg-white text-gray-800 w-full">
            <SelectValue placeholder={t.placeholders.state} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Victoria">Victoria</SelectItem>
            <SelectItem value="South Australia">South Australia</SelectItem>
          </SelectContent>
        </Select>

        {/* 3. Grade Selection */}
        <Select
          value={grade}
          onValueChange={handleGradeChange}
          disabled={!state}
        >
          <SelectTrigger className="bg-white text-gray-800 w-full">
            <SelectValue placeholder={t.placeholders.grade} />
          </SelectTrigger>
          <SelectContent>
            {availableGrades.map((gradeOption) => (
              <SelectItem key={gradeOption} value={gradeOption}>
                {gradeOption}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* 4. Subject Selection */}
        <Select
          value={subject}
          onValueChange={setSubject}
          disabled={!grade}
        >
          <SelectTrigger className="bg-white text-gray-800 w-full">
            <SelectValue placeholder={t.placeholders.subject} />
          </SelectTrigger>
          <SelectContent>
            {availableSubjects.map((subjectOption) => (
              <SelectItem key={subjectOption.slug} value={subjectOption.slug}>
                {subjectOption.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* 5. Search Button */}
        <Button
          onClick={handleSearch}
          size="icon"
          className="text-white border border-white hover:bg-accent"
          disabled={!state || !grade || !subject}
        >
          <Image
            src="/home/search icon.png"
            alt="Search"
            width={20}
            height={20}
            className="object-contain"
          />
        </Button>
      </div>
    </div>
  );
}