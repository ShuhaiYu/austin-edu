"use client";

import { useContext } from "react";
import { LangContext } from "@/app/layout";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const langContext = useContext(LangContext);
  if (!langContext) return null;
  const { lang, setLang } = langContext;

  return (
    <Select
      value={lang}
      onValueChange={(value) => setLang(value)}
    >
      <SelectTrigger className="w-[100px] text-sm">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">中文</SelectItem>
      </SelectContent>
    </Select>
  );
}