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

// 从paste.txt提取的课程数据映射
const COURSE_DATA = {
  "Primary School 1-6 Years": {
    grades: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
    subjects: {
      "Enrichment Courses": [
        { slug: "y1-6-english-enrichment", title: "Year 1-6 English Enrichment" },
        { slug: "y1-6-maths-enrichment", title: "Year 1-6 Maths Enrichment" },
        { slug: "y1-6-chinese-enrichment", title: "Year 1-6 Chinese Enrichment" },
        { slug: "y3-6-writing", title: "Year 3-6 Writing" }
      ],
      "Scholarship / Selective Courses": [
        { slug: "3-to-5-scholarship-victoria", title: "Year 3-to-5 Scholarship Victoria" },
        { slug: "5-to-7-scholarship-victoria", title: "Year 5-to-7 Scholarship Victoria" },
        { slug: "3-to-5-scholarship-south-australia", title: "Year 3-to-5 Scholarship South Australia" },
        { slug: "5-to-7-scholarship-south-australia", title: "Year 5-to-7 Scholarship South Australia" },
        { slug: "5-to-7-selective-school-south-australia", title: "Year 5-to-7 Selective School South Australia" }
      ],
      "Competition Courses": [
        { slug: "y3-4-amc", title: "Year 3-4 AMC" },
        { slug: "y5-6-amc", title: "Year 5-6 AMC" }
      ],
      "Exam Preparation": [
        { slug: "y3-y5-naplan", title: "Year 3, Year 5 Naplan" },
        { slug: "aeas", title: "AEAS" }
      ]
    }
  },
  "Junior High School 7-9 Years": {
    grades: ["Year 7", "Year 8", "Year 9"],
    subjects: {
      "Enrichment Courses": [
        { slug: "y7-9-english", title: "Year 7-9 English Enrichment" },
        { slug: "y7-9-maths", title: "Year 7-9 Maths Enrichment" },
        { slug: "y7-9-writing", title: "Year 7-9 Writing" },
        { slug: "y8-9-science", title: "Year 8-9 Science" }
      ],
      "Language Courses": [
        { slug: "y7-9-latin-enrichment", title: "Year 7-9 Latin Enrichment" },
        { slug: "y7-9-france-enrichment", title: "Year 7-9 France Enrichment" },
        { slug: "y7-9-japanese-enrichment", title: "Year 7-9 Japanese Enrichment" }
      ],
      "Scholarship / Selective Courses": [
        { slug: "7-to-9-scholarship-victoria", title: "Year 7-to-9 Scholarship Victoria" },
        { slug: "y8-9-selective", title: "Year 8-to-9 Selective School Program" }
      ],
      "Competition Courses": [
        { slug: "y7-8-amc", title: "Year 7-8 AMC" }
      ]
    }
  },
  "Senior High School 10-12 Years": {
    grades: ["Year 10", "Year 11", "Year 12"],
    subjects: {
      "Year 10 Pre-VCE Courses": [
        { slug: "y10-english", title: "Year 10 Pre-VCE English" },
        { slug: "y10-eal", title: "Year 10 EAL Foundation Class" },
        { slug: "y10-maths-advance", title: "Year 10 Pre-VCE Maths Advance" },
        { slug: "y10-maths-standard", title: "Year 10 Pre-VCE Maths Standard" },
        { slug: "y9-10-science", title: "Year 9-10 Pre-VCE Science" },
        { slug: "y10-chemistry", title: "Year 10 Pre-VCE Chemistry" },
        { slug: "y10-latin", title: "Year 10 Pre-VCE Latin" }
      ],
      "VCE English Courses": [
        { slug: "vce-english-eal-unit1-4", title: "VCE English / EAL Unit 1-4" },
        { slug: "vce-english-language-unit1-4", title: "VCE English Language Unit 1-4" }
      ],
      "VCE Maths Courses": [
        { slug: "vce-maths-methods-unit1-4", title: "VCE Mathematical Methods Unit1-4" },
        { slug: "vce-specialist-maths-unit1-4", title: "VCE Specialist Mathematics Unit1-4" },
        { slug: "vce-general-maths-unit-1-4", title: "VCE General Mathematics Unit1-4" }
      ],
      "VCE Science Courses": [
        { slug: "vce-chemistry-unit-1-4", title: "VCE Chemistry Unit1-4" },
        { slug: "vce-biology-unit-1-4", title: "VCE Biology Unit1-4" },
        { slug: "vce-physics-unit-1-4", title: "VCE Physics Unit1-4" },
        { slug: "vce-psychology-unit-1-4", title: "VCE Psychology Unit 1–4" }
      ],
      "VCE Languages Courses": [
        { slug: "vce-lantin-unit-1-4", title: "VCE Lantin Unit 1-4" },
        { slug: "vce-chinese-first-language-unit-1-4", title: "VCE Chinese First Language Unit 1–4" },
        { slug: "vce-chinese-second-language-unit-1-4", title: "VCE Chinese Second Language Unit 1–4" },
        { slug: "vce-chinese-second-language-advanced-unit-1-4", title: "VCE Chinese Second Language Advanced Unit 1–4" },
        { slug: "vce-japanese-second-language", title: "VCE Japanese Second Language" }
      ],
      "VCE Business and Economics Courses": [
        { slug: "vce-accounting-unit-1-4", title: "VCE Accounting Unit 1-4" },
        { slug: "vce-economics-unit-1-4", title: "VCE Economics Unit 1-4" },
        { slug: "vce-business-management-unit-1-4", title: "VCE Business Management Unit 1-4" },
        { slug: "vce-legal-studies-unit-1-4", title: "VCE Legal Studies Unit 1-4" }
      ],
      "IB Courses": [
        { slug: "ib-english-a-literature-standard-level", title: "IB English A: Literature — Standard Level" },
        { slug: "ib-english-a-literature-higher-level", title: "IB English A: Literature — Higher Level" },
        { slug: "ib-maths-analysis-approaches-standard-level", title: "IB Mathematics: Analysis and Approaches (AA) — Standard Level" },
        { slug: "ib-maths-analysis-approaches-higher-level", title: "IB Mathematics: Analysis and Approaches (AA) — Higher Level" },
        { slug: "ib-chemistry-standard-level", title: "IB Chemistry (Sciences) — Standard Level" },
        { slug: "ib-chemistry-higher-level", title: "IB Chemistry (Sciences) — Higher Level" },
        { slug: "ib-chinese-a-standard-level", title: "IB Chinese A: Literature — Standard Level" },
        { slug: "ib-chinese-a-higher-level", title: "IB Chinese A: Literature — Higher Level" },
        { slug: "ib-economics-standard-level", title: "IB Economics — Standard Level" },
        { slug: "ib-economics-higher-level", title: "IB Economics — Higher Level" }
      ]
    }
  },
  "Medical Preparation Courses": {
    grades: ["Year 12"],
    subjects: {
      "Medical Foundation Courses": [
        { slug: "ucat", title: "UCAT Preparation Program" },
        { slug: "y12-ucat-medical-interview", title: "Y12 Medical Interview Preparation Program" }
      ]
    }
  }
};

export default function FindCourse() {
  const { lang = "en" } = useContext(LangContext) || {};
  const router = useRouter();
  const t = homeContent[lang].findCourse;

  const [state, setState] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  // 根据选择的State和Grade动态计算可用的课程
  const availableSubjects = useMemo(() => {
    if (!state || !grade) return [];

    const subjects = [];
    
    // 根据State过滤年级范围
    const gradeCategories = state === "South Australia" 
      ? ["Primary School 1-6 Years", "Junior High School 7-9 Years"]
      : Object.keys(COURSE_DATA);

    // 检查当前grade属于哪个分类
    gradeCategories.forEach(categoryKey => {
      const category = COURSE_DATA[categoryKey];
      if (category.grades.includes(grade)) {
        // 将该分类下的所有课程添加到subjects
        Object.values(category.subjects).forEach(subjectGroup => {
          subjects.push(...subjectGroup);
        });
      }
    });

    return subjects;
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