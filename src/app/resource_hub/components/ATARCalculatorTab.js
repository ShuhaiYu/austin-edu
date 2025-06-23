// app/resource-hub/components/ATARCalculatorTab.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext, useState, useRef, useEffect } from "react";
import { LangContext } from "@/app/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";

const AnimatedNumber = ({ value }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        {value}
      </motion.div>
    </AnimatePresence>
  );
};

const content = {
  en: {
    title: "ATAR Calculator",
    description: "Estimate your ATAR rank based on current scores",
    state: "Select State/Territory",
    subjects: "Subjects & Scores",
    addSubject: "+ Add Subject",
    calculate: "Calculate ATAR",
    reset: "Reset All",
    prediction: "Predicted ATAR Result",
    disclaimer:
      "Note: This is an estimation tool only. Actual ATAR may vary based on cohort performance and scaling factors.",
    states: [
      "Victoria (VCE)",
      "NSW (HSC)",
      "Queensland (QCE)",
      "WA (WACE)",
      "SA (SACE)",
      "TAS (TCE)",
      "ACT",
    ],
    subjectLevels: ["Unit 3/4", "Main Subjects", "Additional Subjects"],
    advice: {
      high: "Excellent scores! Likely to qualify for most competitive courses.",
      medium: "Good results. Consider some improvement in weaker areas.",
      low: "Explore foundation programs or alternative pathways.",
    },
  },
  zh: {
    title: "ATAR成绩计算器",
    description: "根据当前成绩预估您的ATAR排名",
    state: "选择所在州/领地",
    subjects: "科目与分数",
    addSubject: "+ 添加科目",
    calculate: "计算ATAR",
    reset: "重置所有",
    prediction: "预估ATAR范围",
    disclaimer:
      "注意：本工具仅为预估，实际ATAR可能因考生整体表现和分数调整而变化。",
    states: [
      "维多利亚州 (VCE)",
      "新南威尔士州 (HSC)",
      "昆士兰州 (QCE)",
      "西澳州 (WACE)",
      "南澳州 (SACE)",
      "塔斯马尼亚州 (TCE)",
      "首都领地",
    ],
    subjectLevels: ["Unit 3/4", "主修科目", "附加科目"],
    advice: {
      high: "优秀成绩！可能符合大多数竞争激烈课程的入学要求。",
      medium: "良好成绩，建议在薄弱科目继续提高。",
      low: "可考虑预科项目或其他入学途径。",
    },
  },
};

const SubjectRow = ({ subject, onUpdate, onRemove, levels, lang }) => {
  const [score, setScore] = useState("");
  const [level, setLevel] = useState(levels[0]);

  const handleScoreChange = (e) => {
    const value = Math.min(100, Math.max(0, e.target.value));
    setScore(value);
    onUpdate({ ...subject, score: value, level });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center mb-4 p-3 sm:p-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none">
      <Input
        type="number"
        placeholder={lang === "en" ? "Score" : "分数"}
        value={score}
        onChange={handleScoreChange}
        className="w-full sm:w-32 rounded-xl lg:rounded-[2rem] p-3 lg:p-4"
        min="0"
        max="100"
      />
      <Select
        value={level}
        onValueChange={(val) => {
          setLevel(val);
          onUpdate({ ...subject, score, level: val });
        }}
      >
        <SelectTrigger className="w-full sm:w-48 rounded-xl lg:rounded-[2rem] p-3 lg:p-4">
          {level}
        </SelectTrigger>
        <SelectContent>
          {levels.map((l) => (
            <SelectItem key={l} value={l}>
              {l}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="ghost"
        className="text-red-600 hover:text-red-800 w-full sm:w-auto justify-center sm:justify-start"
        onClick={onRemove}
      >
        ×
      </Button>
    </div>
  );
};

export const ATARCalculatorTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  const [selectedState, setSelectedState] = useState("");
  const [subjects, setSubjects] = useState(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      score: "",
      level: t.subjectLevels[1],
    }))
  );
  const [atarResult, setAtarResult] = useState("-");

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        id: Date.now(),
        score: "",
        level: t.subjectLevels[0],
      },
    ]);
  };

  const updateSubject = (updatedSubject) => {
    setSubjects(
      subjects.map((sub) =>
        sub.id === updatedSubject.id ? updatedSubject : sub
      )
    );
  };

  const removeSubject = (id) => {
    setSubjects(subjects.filter((sub) => sub.id !== id));
  };

  const calculateATAR = useDebouncedCallback(() => {
    const validScores = subjects
      .filter((s) => s.score > 0 && s.score <= 100)
      .map((s) => Number(s.score))
      .sort((a, b) => b - a); // 从高到低排序
  
    if (validScores.length < 4) {
      setAtarResult("-");
      return;
    }
  
    // Primary 4: 前四门总分
    const primaryFour = validScores.slice(0, 4);
    const primarySum = primaryFour.reduce((a, b) => a + b, 0);
  
    // 额外科目贡献10%
    const extras = validScores.slice(4, 6); // 最多两门
    const extraSum = extras.reduce((a, b) => a + b * 0.1, 0);
  
    const aggregate = primarySum + extraSum;
  
    // 简化版 aggregate → ATAR 映射（近似线性）
    const atarEstimate = Math.min(99.95, Math.max(30, (aggregate / 220) * 99.95));
  
    const newResult = `${atarEstimate.toFixed(2)}`;
  
    if (newResult !== atarResult) {
      setAtarResult(newResult);
    }
  }, 300);
  

  // 自动触发计算
  useEffect(() => {
    calculateATAR();
  }, [subjects, calculateATAR]);

  const resetAll = () => {
    setSelectedState("");
    setSubjects([]);
    setAtarResult("-");
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Section - 移动端在上方 */}
        <div className="w-full lg:w-1/3 lg:pr-8 lg:border-r border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-justify text-sm sm:text-base">{t.description}</p>
          <div className="mt-6 lg:mt-8 space-y-4">
            <p className="text-xs sm:text-sm text-muted-foreground">{t.disclaimer}</p>
          </div>
        </div>

        {/* Right Section - 移动端在下方 */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <div className="space-y-6 lg:space-y-8">
            {/* State Selection */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="w-full sm:w-1/3 font-semibold text-sm sm:text-base">{t.state}</label>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="rounded-xl lg:rounded-[2rem] p-3 lg:p-4">
                  <SelectValue placeholder={t.state} />
                </SelectTrigger>
                <SelectContent>
                  {t.states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subjects Input */}
            <div>
              <h3 className="font-semibold mb-4 lg:mb-6 text-sm sm:text-base">{t.subjects}</h3>
              {subjects.map((subject) => (
                <SubjectRow
                  key={subject.id}
                  subject={subject}
                  onUpdate={updateSubject}
                  onRemove={() => removeSubject(subject.id)}
                  levels={t.subjectLevels}
                  lang={lang}
                />
              ))}
              <Button 
                variant="outline" 
                className="mt-4 w-full sm:w-auto text-sm sm:text-base" 
                onClick={addSubject}
              >
                {t.addSubject}
              </Button>
            </div>

            {/* Results Section */}
            <div className="bg-muted rounded-lg p-4 lg:p-6 space-y-4">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">{t.prediction}</p>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
                  <AnimatedNumber value={atarResult} />
                </div>
              </div>

              {atarResult !== "-" && (
                <div className="p-3 lg:p-4 bg-white rounded-lg">
                  <p className="text-xs sm:text-sm">
                    {atarResult > 90
                      ? t.advice.high
                      : atarResult > 70
                      ? t.advice.medium
                      : t.advice.low}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end">
              <Button 
                variant="outline" 
                onClick={resetAll} 
                className="px-6 lg:px-8 text-sm sm:text-base"
              >
                {t.reset}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};