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
  const gradeOptions = ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"];
  const subjectOptions = ["Math", "Science", "English", "History"];

  const handleSearch = () => {
    console.log("Searching with:", { state, grade, subject });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 justify-center py-4">
      <span className="font-medium mb-2 md:mb-0 md:mr-2">
        {lang === "zh" ? "搜索课程:" : "Find a Course:"}
      </span>

      {/* State */}
      <Select value={state} onValueChange={(val) => setState(val)}>
        <SelectTrigger className="w-[150px] bg-white text-gray-800">
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

      {/* Grade */}
      <Select value={grade} onValueChange={(val) => setGrade(val)}>
        <SelectTrigger className="w-[150px] bg-white text-gray-800">
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

      {/* Subject */}
      <Select value={subject} onValueChange={(val) => setSubject(val)}>
        <SelectTrigger className="w-[150px] bg-white text-gray-800">
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

      {/* Search button */}
      <Button
        onClick={handleSearch}
        variant="outline"
        className="shadow-lg"
      >
        <Image src="/home/search icon.png" alt="Search" width={20} height={20} />
      </Button>
    </div>
  );
}