"use client";

import { useContext, useState } from "react";
import { LangContext } from "@/app/layout";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import Image from "next/image";

export default function FindCourse() {
  const langContext = useContext(LangContext);
  const lang = langContext?.lang || "en";

  const [state, setState] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  const placeholderText = {
    state: lang === "zh" ? "选择州/地区" : "State",
    grade: lang === "zh" ? "选择年级" : "Grade",
    subject: lang === "zh" ? "选择科目" : "Subject",
  };

  const stateOptions = ["Victoria", "New South Wales", "Queensland"];
  const gradeOptions = [
    "Year 7",
    "Year 8",
    "Year 9",
    "Year 10",
    "Year 11",
    "Year 12",
  ];
  const subjectOptions = ["Math", "Science", "English", "History"];

  const handleSearch = () => {
    console.log("Searching with:", { state, grade, subject });
  };

  return (
    // 最外层容器，撑满页面可用宽度
    <div className="w-full px-4 py-2">
      {/* 使用grid布局，小屏幕1列，中屏幕5列 */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* 1. Label */}
        <span className="font-medium md:text-right text-lg">
          {lang === "zh" ? "搜索课程:" : "Find a Course:"}
        </span>

        {/* 2. State 下拉 */}
        <Select value={state} onValueChange={(val) => setState(val)}>
          <SelectTrigger className="bg-white text-gray-800 w-full">
            <SelectValue placeholder={placeholderText.state} />
          </SelectTrigger>
          <SelectContent>
            {stateOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* 3. Grade 下拉 */}
        <Select value={grade} onValueChange={(val) => setGrade(val)}>
          <SelectTrigger className="bg-white text-gray-800 w-full">
            <SelectValue placeholder={placeholderText.grade} />
          </SelectTrigger>
          <SelectContent>
            {gradeOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* 4. Subject 下拉 */}
        <Select value={subject} onValueChange={(val) => setSubject(val)}>
          <SelectTrigger className="bg-white text-gray-800 w-full">
            <SelectValue placeholder={placeholderText.subject} />
          </SelectTrigger>
          <SelectContent>
            {subjectOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* 5. Search 按钮 */}
        <Button
          onClick={handleSearch}
          // variant="outline"
          size="icon"
          className="bg-primary hover:bg-secondary text-white border border-white"
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
