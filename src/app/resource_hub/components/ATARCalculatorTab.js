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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useContext, useState, useRef, useEffect } from "react";
import { LangContext } from "@/app/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import { AlertCircle, BookOpen, Calculator, TrendingUp, Lightbulb, Trophy, Target, Info } from "lucide-react";

// 导入更新的数据管理模块
import {
  VCE_SUBJECTS_DB,
  calculateScaledScore,
  getATARFromAggregate,
  getStudyRecommendations,
  DATA_VERSION
} from "@/data/atarData";
import { UNIVERSITY_PREREQUISITES } from "@/data/atarUni";

const content = {
  en: {
    title: "VCE ATAR Calculator 2024",
    description: "Calculate your ATAR based on official 2024 VCE scaling data",
    selectSubject: "Select Subject",
    rawScore: "Raw Score",
    scaledScore: "Scaled Score",
    addSubject: "+ Add Subject",
    calculate: "Calculate ATAR",
    reset: "Reset All",
    results: "ATAR Results",
    aggregate: "Aggregate Score",
    predictedATAR: "Predicted ATAR",
    disclaimer: "Based on official 2024 VTAC data. Actual ATAR may vary based on cohort performance.",
    dataVersion: "Data Version",
    englishRequired: "English subject required",
    primary4: "Primary 4 (100%)",
    increment: "10% Increment",
    notCounted: "Not Counted",
    recommendations: "Study Recommendations",
    universityOptions: "University Course Options",
    categories: {
      English: "English",
      Mathematics: "Mathematics", 
      Science: "Science",
      Humanities: "Humanities",
      Business: "Business Studies",
      Politics: "Politics",
      Languages: "Languages",
      Arts: "The Arts",
      Technology: "Technology",
      Health: "Health & PE",
      Other: "Other Subjects",
      VET: "VET Subjects"
    }
  },
  zh: {
    title: "VCE ATAR计算器 2024",
    description: "基于2024年官方VCE缩放数据计算ATAR",
    selectSubject: "选择科目",
    rawScore: "原始分数",
    scaledScore: "缩放分数",
    addSubject: "+ 添加科目",
    calculate: "计算ATAR",
    reset: "重置所有",
    results: "ATAR结果",
    aggregate: "总分",
    predictedATAR: "预估ATAR",
    disclaimer: "基于2024年官方VTAC数据。实际ATAR可能因考生整体表现而有所不同。",
    dataVersion: "数据版本",
    englishRequired: "需要英语科目",
    primary4: "主要4门 (100%)",
    increment: "10%加分",
    notCounted: "不计入",
    recommendations: "学习建议",
    universityOptions: "大学专业选择",
    categories: {
      English: "英语",
      Mathematics: "数学", 
      Science: "科学",
      Humanities: "人文学科",
      Business: "商科",
      Politics: "政治学",
      Languages: "语言",
      Arts: "艺术",
      Technology: "技术",
      Health: "健康体育",
      Other: "其他学科",
      VET: "职业教育"
    }
  },
};

const AnimatedNumber = ({ value, suffix = "" }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={`${value}-${suffix}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {value}{suffix}
      </motion.span>
    </AnimatePresence>
  );
};

// 更新的ATAR计算逻辑 - 使用2024年官方算法
const calculateATAR = (subjects) => {
  const validSubjects = subjects
    .filter(s => s.subjectId && s.rawScore > 0)
    .map(s => ({
      ...s,
      scaledScore: calculateScaledScore(s.rawScore, s.subjectId),
      isEnglish: VCE_SUBJECTS_DB.find(sub => sub.id === s.subjectId)?.isEnglish || false
    }));

  if (validSubjects.length < 4) {
    return { aggregate: 0, atar: 0, breakdown: [], hasEnglish: false };
  }

  // 检查是否有英语科目
  const hasEnglish = validSubjects.some(s => s.isEnglish);
  
  // 分离英语和非英语科目
  const englishSubjects = validSubjects.filter(s => s.isEnglish);
  const otherSubjects = validSubjects.filter(s => !s.isEnglish);
  
  // 按缩放分数排序
  englishSubjects.sort((a, b) => b.scaledScore - a.scaledScore);
  otherSubjects.sort((a, b) => b.scaledScore - a.scaledScore);
  
  let breakdown = [];
  let aggregate = 0;
  
  // 首先添加最好的英语科目（如果有）
  if (hasEnglish) {
    const bestEnglish = englishSubjects[0];
    breakdown.push({
      ...bestEnglish,
      contribution: bestEnglish.scaledScore,
      type: 'primary4',
      weight: 1.0
    });
    aggregate += bestEnglish.scaledScore;
  }
  
  // 添加其他科目到主要4门
  const remainingSlots = 4 - breakdown.length;
  const availableSubjects = hasEnglish ? 
    [...englishSubjects.slice(1), ...otherSubjects] : 
    otherSubjects;
  
  for (let i = 0; i < remainingSlots && i < availableSubjects.length; i++) {
    const subject = availableSubjects[i];
    breakdown.push({
      ...subject,
      contribution: subject.scaledScore,
      type: 'primary4',
      weight: 1.0
    });
    aggregate += subject.scaledScore;
  }
  
  // 添加10%增量科目（第5、6门）
  for (let i = remainingSlots; i < remainingSlots + 2 && i < availableSubjects.length; i++) {
    const subject = availableSubjects[i];
    const contribution = subject.scaledScore * 0.1;
    breakdown.push({
      ...subject,
      contribution: contribution,
      type: 'increment',
      weight: 0.1
    });
    aggregate += contribution;
  }
  
  // 剩余科目不计入
  for (let i = remainingSlots + 2; i < availableSubjects.length; i++) {
    const subject = availableSubjects[i];
    breakdown.push({
      ...subject,
      contribution: 0,
      type: 'notCounted',
      weight: 0
    });
  }
  
  // 使用2024年精确的ATAR映射
  const atar = getATARFromAggregate(aggregate);
  
  return {
    aggregate: Math.round(aggregate * 100) / 100,
    atar: atar,
    breakdown: breakdown,
    hasEnglish: hasEnglish
  };
};

const SubjectRow = ({ subject, onUpdate, onRemove, lang }) => {
  const t = content[lang];
  const [selectedSubject, setSelectedSubject] = useState(subject.subjectId || "");
  const [rawScore, setRawScore] = useState(subject.rawScore || "");
  
  const scaledScore = selectedSubject && rawScore ? 
    calculateScaledScore(Number(rawScore), selectedSubject) : 0;

  const subjectData = VCE_SUBJECTS_DB.find(s => s.id === selectedSubject);
  
  // 按类别分组科目
  const subjectsByCategory = VCE_SUBJECTS_DB.reduce((acc, subject) => {
    if (!acc[subject.category]) acc[subject.category] = [];
    acc[subject.category].push(subject);
    return acc;
  }, {});

  const handleSubjectChange = (subjectId) => {
    setSelectedSubject(subjectId);
    onUpdate({ 
      ...subject, 
      subjectId, 
      rawScore: Number(rawScore) || 0,
      scaledScore 
    });
  };

  const handleScoreChange = (e) => {
    const subjectInfo = VCE_SUBJECTS_DB.find(s => s.id === selectedSubject);
    const maxScore = subjectInfo?.maxScore || 50;
    const value = Math.min(maxScore, Math.max(0, Number(e.target.value) || 0));
    setRawScore(value);
    onUpdate({ 
      ...subject, 
      subjectId: selectedSubject, 
      rawScore: value,
      scaledScore: selectedSubject ? calculateScaledScore(value, selectedSubject) : 0
    });
  };

  return (
    <Card className="border-0 bg-gray-50/50 shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* 科目选择 */}
          <div className="md:col-span-2">
            <Select value={selectedSubject} onValueChange={handleSubjectChange}>
              <SelectTrigger className="w-full bg-white border-0 text-center">
                <SelectValue placeholder={t.selectSubject} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(subjectsByCategory).map(([category, subjects]) => (
                  <div key={category}>
                    <div className="px-2 py-1.5 text-sm font-semibold text-primary">
                      {t.categories[category]}
                    </div>
                    {subjects.map((sub) => (
                      <SelectItem key={sub.id} value={sub.id}>
                        <div className="flex items-center gap-2">
                          {sub.name}
                          {sub.isEnglish && (
                            <Badge className="text-xs bg-primary text-white border-0">
                              English
                            </Badge>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                    <Separator className="my-1" />
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 分数输入区域 */}
          <div className="flex justify-center">
            <div className="text-center space-y-1">
              <label className="text-xs text-muted-foreground block">{t.rawScore}</label>
              <Input
                type="number"
                placeholder={`0-${subjectData?.maxScore || 50}`}
                value={rawScore}
                onChange={handleScoreChange}
                className="w-16 text-center bg-white border-0"
                min="0"
                max={subjectData?.maxScore || 50}
              />
            </div>
          </div>

          {/* 缩放分数显示 */}
          <div className="flex justify-center items-center gap-4">
            {selectedSubject && rawScore > 0 && (
              <div className="text-center space-y-1">
                <label className="text-xs text-muted-foreground block">{t.scaledScore}</label>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-16 h-9 flex items-center justify-center bg-primary/10 text-primary rounded text-sm font-semibold border-0">
                    <AnimatedNumber value={scaledScore} />
                  </div>
                  
                </div>
              </div>
            )}
            
            {/* 删除按钮 */}
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-800 hover:bg-red-50 border-0 ml-2"
              onClick={onRemove}
            >
              ×
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// 更新的学习建议组件
const RecommendationsPanel = ({ subjects, results, lang }) => {
  const t = content[lang];
  const recommendations = getStudyRecommendations(subjects, results);
  
  if (recommendations.length === 0) return null;

  return (
    <Card className="border-0 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Lightbulb className="w-4 h-4 text-primary" />
          {t.recommendations}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-3 bg-white rounded-lg border-0 shadow-sm">
            <div className="flex items-start gap-2">
              {rec.priority === 'critical' && <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />}
              {rec.priority === 'warning' && <Target className="w-4 h-4 text-amber-500 mt-0.5" />}
              {rec.priority === 'success' && <Trophy className="w-4 h-4 text-primary mt-0.5" />}
              {rec.priority === 'info' && <Lightbulb className="w-4 h-4 text-primary/80 mt-0.5" />}
              <div>
                <p className="text-sm text-gray-700">{rec.message}</p>
                <Badge variant="outline" className="mt-1 text-xs border-0 bg-primary/10 text-primary">
                  {rec.action}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// 更新的大学课程选择组件 - 统一显示所有课程
const UniversityOptions = ({ atar, lang }) => {
  const t = content[lang];
  const [showMore, setShowMore] = useState(false);
  
  if (atar === 0) return null;
  
  // 智能筛选课程：优先显示接近用户ATAR分数的课程
  const getRelevantCourses = () => {
    // 筛选可申请的课程
    const eligibleCourses = UNIVERSITY_PREREQUISITES
      .filter(course => atar >= course.score)
      .sort((a, b) => b.score - a.score);
    
    // 如果ATAR很高，显示高分课程；如果一般，显示更广泛的选择
    let targetCourses = [];
    
    if (atar >= 90) {
      // 高分学生：显示90+, 85-89, 80-84的课程
      targetCourses = eligibleCourses.filter(c => c.score >= 80);
    } else if (atar >= 80) {
      // 中高分学生：显示80+, 70-79, 60-69的课程
      targetCourses = eligibleCourses.filter(c => c.score >= 60 && c.score <= atar + 5);
    } else if (atar >= 70) {
      // 中分学生：显示70+, 60-69, 50-59的课程
      targetCourses = eligibleCourses.filter(c => c.score >= 50 && c.score <= atar + 10);
    } else {
      // 较低分学生：显示所有可申请的课程
      targetCourses = eligibleCourses;
    }
    
    // // 进一步优化：优先显示知名大学和热门专业
    // const priorityInstitutions = ['University of Melbourne', 'Monash University', 'RMIT University', 'Deakin University'];
    // const priorityCourses = targetCourses.filter(c => 
    //   priorityInstitutions.some(inst => c.institution.includes(inst))
    // );
    // const otherCourses = targetCourses.filter(c => 
    //   !priorityInstitutions.some(inst => c.institution.includes(inst))
    // );
    
    // // 合并并限制数量
    // const finalCourses = [...priorityCourses, ...otherCourses];
    
    return showMore ? targetCourses : targetCourses.slice(0, 12); // 默认显示12个
  };
  
  const relevantCourses = getRelevantCourses();
  const totalRelevantCourses = UNIVERSITY_PREREQUISITES.filter(course => atar >= course.score).length;
  
  return (
    <Card className="border-0 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="w-5 h-5 text-primary" />
          {t.universityOptions}
          <Badge variant="outline" className="ml-auto bg-white border-0 text-primary">
            {relevantCourses.length} {lang === 'en' ? 'recommended' : '推荐'}
          </Badge>
        </CardTitle>
        <div className="text-sm text-gray-600">
          {lang === 'en' 
            ? 'Courses selected based on your ATAR score and academic profile'
            : '根据您的ATAR分数和学术背景精选的课程'}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {relevantCourses.length > 0 ? (
          <>
            {/* 统一显示所有课程 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">🎯</span>
                <div>
                  <h5 className="font-semibold text-sm text-gray-700">
                    {lang === 'en' ? "Good Matches" : "合适选择"}
                  </h5>
                  <p className="text-xs text-gray-500">
                    {lang === 'en' ? "Well-suited to your current ATAR level" : "与您当前ATAR水平匹配的课程"}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs bg-primary/15 text-primary border-0 ml-auto">
                  {relevantCourses.length}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {relevantCourses.map((course, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border-0 shadow-sm space-y-3 h-full flex flex-col">
                    {/* 课程标题和分数要求 */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="font-medium text-sm text-gray-900 leading-tight flex-1">
                          {course.name}
                        </h4>
                        <Badge 
                          className={`text-xs border-0 whitespace-nowrap ${
                            course.score === 0 
                              ? 'bg-gray-100 text-gray-600' 
                              : course.score > atar - 5
                              ? 'bg-primary text-white'
                              : course.score >= atar - 15
                              ? 'bg-primary/70 text-white'
                              : 'bg-primary/50 text-white'
                          }`}
                        >
                          {course.score === 0 ? 'No ATAR' : `${course.score}`}
                        </Badge>
                      </div>
                      
                      {/* 机构和地点信息 */}
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{course.institution}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>📍 {course.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* 入学要求 */}
                    <div className="mt-auto">
                      {course.requisites && course.requisites !== "None" ? (
                        <div className="text-xs text-gray-700 bg-primary/5 p-2 rounded border-0">
                          <span className="font-medium text-gray-800">
                            {lang === 'en' ? 'Prerequisites: ' : '入学要求: '}
                          </span>
                          <span className="leading-relaxed">{course.requisites}</span>
                        </div>
                      ) : (
                        <div className="text-xs text-primary bg-primary/10 p-2 rounded border-0">
                          <span className="font-medium">
                            {lang === 'en' ? '✓ No specific prerequisites required' : '✓ 无特殊入学要求'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 显示更多/收起按钮 */}
            {!showMore && totalRelevantCourses > 12 && (
              <div className="text-center pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowMore(true)}
                  className="bg-white text-primary border-primary/20 hover:bg-primary/5 hover:text-primary"
                >
                  {lang === 'en' ? `Show more courses` : `显示更多课程`}
                </Button>
              </div>
            )}
            
            {showMore && (
              <div className="text-center pt-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowMore(false)}
                  className="text-primary hover:bg-primary/10 hover:text-primary"
                >
                  {lang === 'en' ? 'Show less' : '收起'}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center p-6 bg-white rounded-lg border-0">
            <div className="text-primary/40 mb-2 text-2xl">🎯</div>
            <p className="text-sm text-gray-600 font-medium mb-2">
              {lang === 'en' 
                ? 'No courses available yet' 
                : '暂无可申请课程'}
            </p>
            <p className="text-xs text-gray-500">
              {lang === 'en' 
                ? 'Keep working towards your target ATAR to unlock course options!' 
                : '继续努力提高ATAR，解锁更多课程选择！'}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const ATARCalculatorTab = () => {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const t = content[lang];
  
  const [subjects, setSubjects] = useState(() => 
    Array.from({ length: 4 }, (_, i) => ({ 
      id: Date.now() + i, 
      subjectId: "", 
      rawScore: 0,
      scaledScore: 0 
    }))
  );

  const [results, setResults] = useState({ 
    aggregate: 0, 
    atar: 0, 
    breakdown: [], 
    hasEnglish: false 
  });

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { 
        id: Date.now(), 
        subjectId: "", 
        rawScore: 0,
        scaledScore: 0 
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
    if (subjects.length > 1) {
      setSubjects(subjects.filter((sub) => sub.id !== id));
    }
  };

  const resetAll = () => {
    setSubjects([
      { id: Date.now(), subjectId: "", rawScore: 0, scaledScore: 0 }
    ]);
    setResults({ aggregate: 0, atar: 0, breakdown: [], hasEnglish: false });
  };

  // 实时计算
  const debouncedCalculate = useDebouncedCallback(() => {
    const newResults = calculateATAR(subjects);
    setResults(newResults);
  }, 300);

  useEffect(() => {
    debouncedCalculate();
  }, [subjects, debouncedCalculate]);

  const getTypeLabel = (type) => {
    switch(type) {
      case 'primary4': return t.primary4;
      case 'increment': return t.increment;
      case 'notCounted': return t.notCounted;
      default: return '';
    }
  };

  const getTypeBadgeVariant = (type) => {
    switch(type) {
      case 'primary4': return 'default';
      case 'increment': return 'secondary';
      case 'notCounted': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="mx-auto space-y-6">
      {/* Header with Data Version Info */}
      <Card className="border-0 bg-white shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="w-6 h-6 text-primary" />
            {t.title}
          </CardTitle>
          <p className="text-muted-foreground">{t.description}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-0 text-xs">
              <Info className="w-3 h-3 mr-1" />
              {t.dataVersion}: {DATA_VERSION.version}
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-0 text-xs">
              Official VTAC Data
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content - Subjects and Results */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Section - Subjects (3/5 width) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Subjects & Scores
            </h3>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addSubject} 
                className="bg-white hover:bg-primary hover:text-white border-0"
              >
                {t.addSubject}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetAll} 
                className="bg-white hover:bg-gray-50 hover:text-primary border-0"
              >
                {t.reset}
              </Button>
            </div>
          </div>

          {/* English Warning */}
          {!results.hasEnglish && subjects.some(s => s.subjectId) && (
            <Card className="border-0 bg-amber-50 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-amber-800">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.englishRequired}</span>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3">
            {subjects.map((subject) => (
              <SubjectRow
                key={subject.id}
                subject={subject}
                onUpdate={updateSubject}
                onRemove={() => removeSubject(subject.id)}
                lang={lang}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Results and Recommendations (2/5 width) */}
        <div className="lg:col-span-2 space-y-4">
          {/* ATAR Results */}
          <Card className="border-0 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                {t.results}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* ATAR Display */}
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg border-0">
                <div className="text-sm text-muted-foreground mb-1">{t.predictedATAR}</div>
                <div className="text-4xl font-bold text-primary">
                  <AnimatedNumber value={results.atar} />
                </div>
              </div>

              {/* Aggregate Score */}
              <div className="text-center p-4 bg-gray-50 rounded-lg border-0">
                <div className="text-sm text-muted-foreground mb-1">{t.aggregate}</div>
                <div className="text-2xl font-semibold">
                  <AnimatedNumber value={results.aggregate} />
                </div>
              </div>

              {/* Subject Breakdown */}
              {results.breakdown.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Subject Breakdown</h4>
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {results.breakdown.map((item, index) => {
                      const subjectData = VCE_SUBJECTS_DB.find(s => s.id === item.subjectId);
                      return (
                        <div key={index} className="text-xs bg-gray-50 rounded p-2 border-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium truncate">{subjectData?.name}</span>
                            <Badge variant={getTypeBadgeVariant(item.type)} className="text-xs border-0">
                              {getTypeLabel(item.type)}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>{item.rawScore} → {item.scaledScore}</span>
                            <span>+{item.contribution.toFixed(1)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Study Recommendations */}
          <RecommendationsPanel 
            subjects={subjects} 
            results={results} 
            lang={lang}
          />

          {/* Disclaimer */}
          <Card className="border-0 bg-gray-50 shadow-sm">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground leading-relaxed text-center">
                {t.disclaimer}
              </p>
              <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
                <span className="text-xs text-muted-foreground">Sources:</span>
                <a 
                  href="/resource_hub/atar-to-aggregate-24.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-white hover:bg-primary/5 text-primary border border-primary/20 rounded px-2 py-1 transition-colors"
                >
                  📊 ATAR to Aggregate Table 2024
                </a>
                <a 
                  href="/resource_hub/Scaling report 2024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-white hover:bg-primary/5 text-primary border border-primary/20 rounded px-2 py-1 transition-colors"
                >
                  📈 Scaling Report 2024
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* University Course Options - Full Width Section */}
      <UniversityOptions 
        atar={results.atar} 
        lang={lang}
      />
    </div>
  );
};