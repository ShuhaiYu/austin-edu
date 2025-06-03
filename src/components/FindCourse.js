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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { homeContent } from "@/app/content";

export default function FindCourse() {
  const { lang = "en" } = useContext(LangContext) || {};
  const t = homeContent[lang].findCourse;

  const [state,   setState]   = useState("");
  const [grade,   setGrade]   = useState("");
  const [subject, setSubject] = useState("");

  const fields = [
    { key: "state",   value: state,   onChange: setState   },
    { key: "grade",   value: grade,   onChange: setGrade   },
    { key: "subject", value: subject, onChange: setSubject },
  ];

  const handleSearch = () => {
    console.log("Searching with:", { state, grade, subject });
  };

  return (
    <div className="py-2">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* 1. Label */}
        <span className="font-medium md:text-right text-lg">
          {t.label}
        </span>

        {/* 动态渲染 3 个下拉 */}
        {fields.map(({ key, value, onChange }) => (
          <Select
            key={key}
            value={value}
            onValueChange={onChange}
          >
            <SelectTrigger className="bg-white text-gray-800 w-full">
              <SelectValue placeholder={t.placeholders[key]} />
            </SelectTrigger>
            <SelectContent>
              {t.options[key].map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}

        {/* 5. Search 按钮 */}
        <Button
          onClick={handleSearch}
          size="icon"
          className="text-white border border-white hover:bg-accent"
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