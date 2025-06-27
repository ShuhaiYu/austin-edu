// app/resource-hub/data/atarData.js
import { UNIVERSITY_PREREQUISITES } from "@/data/atarUni";

/**
 * ATAR Calculator Data Management - 2024 VTAC Official Data
 * 基于2024年12月12日发布的官方VTAC数据更新
 * 包含VCE科目、精确分数映射、ATAR转换等核心数据
 */

// VCE科目完整数据库 - 基于2024年真实VCE课程数据和官方scaling report
export const VCE_SUBJECTS_DB = [
  // === 英语类科目（必修） ===
  {
    id: "14",
    name: "English",
    code: "EN",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling",
    officialMapping: { 20: 17, 25: 22, 30: 28, 35: 33, 40: 39, 45: 45, 50: 50 },
    mean: 28.2,
    stdDev: 7.6
  },
  {
    id: "15",
    name: "English as an Additional Language",
    code: "EF",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling",
    officialMapping: { 20: 16, 25: 21, 30: 27, 35: 34, 40: 40, 45: 46, 50: 50 },
    mean: 27.7,
    stdDev: 8.3
  },
  {
    id: "16",
    name: "English Language",
    code: "EG",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "high_scaling",
    officialMapping: { 20: 22, 25: 27, 30: 33, 35: 38, 40: 43, 45: 47, 50: 50 },
    mean: 32.6,
    stdDev: 7.1
  },
  {
    id: "76",
    name: "Literature",
    code: "LI",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling",
    officialMapping: { 20: 20, 25: 26, 30: 31, 35: 36, 40: 41, 45: 46, 50: 50 },
    mean: 31.2,
    stdDev: 7.3
  },

  // === 数学类科目 ===
  {
    id: "78",
    name: "Mathematical Methods",
    code: "NJ",
    maxScore: 51, // 注意：2024年此科目最高分为51
    isEnglish: false,
    category: "Mathematics",
    scalingType: "high_scaling",
    officialMapping: { 20: 21, 25: 29, 30: 35, 35: 41, 40: 46, 45: 49, 50: 51 },
    mean: 34.5,
    stdDev: 8.4
  },
  {
    id: "79",
    name: "Specialist Mathematics",
    code: "NS",
    maxScore: 55, // 注意：2024年此科目最高分为55
    isEnglish: false,
    category: "Mathematics",
    scalingType: "very_high_scaling",
    officialMapping: { 20: 28, 25: 36, 30: 43, 35: 48, 40: 52, 45: 54, 50: 55 },
    mean: 41.6,
    stdDev: 8.3
  },
  {
    id: "77",
    name: "General Mathematics",
    code: "NF",
    maxScore: 50,
    isEnglish: false,
    category: "Mathematics",
    scalingType: "medium_scaling",
    officialMapping: { 20: 18, 25: 23, 30: 28, 35: 33, 40: 38, 45: 44, 50: 50 },
    mean: 27.8,
    stdDev: 7.2
  },
  {
    id: "777",
    name: "Foundation Mathematics",
    code: "MA10",
    maxScore: 50,
    isEnglish: false,
    category: "Mathematics",
    scalingType: "low_scaling",
    officialMapping: { 20: 12, 25: 16, 30: 20, 35: 25, 40: 31, 45: 39, 50: 50 },
    mean: 21.3,
    stdDev: 6.9
  },

  // === 科学类科目 ===
  {
    id: "87",
    name: "Physics",
    code: "PH",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "high_scaling",
    officialMapping: { 20: 21, 25: 27, 30: 32, 35: 38, 40: 43, 45: 47, 50: 50 },
    mean: 32.2,
    stdDev: 7.4
  },
  {
    id: "9",
    name: "Chemistry",
    code: "CH",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "high_scaling",
    officialMapping: { 20: 23, 25: 28, 30: 34, 35: 39, 40: 44, 45: 47, 50: 50 },
    mean: 33.7,
    stdDev: 7.3
  },
  {
    id: "7",
    name: "Biology",
    code: "BI",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "medium_scaling",
    officialMapping: { 20: 19, 25: 25, 30: 31, 35: 36, 40: 41, 45: 46, 50: 50 },
    mean: 30.4,
    stdDev: 7.4
  },
  {
    id: "91",
    name: "Psychology",
    code: "PY",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "medium_scaling",
    officialMapping: { 20: 18, 25: 23, 30: 28, 35: 34, 40: 39, 45: 45, 50: 50 },
    mean: 28.4,
    stdDev: 7.4
  },
  {
    id: "17",
    name: "Environmental Science",
    code: "EV",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "medium_scaling",
    officialMapping: { 20: 18, 25: 23, 30: 28, 35: 33, 40: 38, 45: 44, 50: 50 },
    mean: 28.0,
    stdDev: 7.0
  },

  // === 人文社科类科目 ===
  {
    id: "24",
    name: "Revolutions",
    code: "HR",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling",
    officialMapping: { 20: 17, 25: 23, 30: 28, 35: 34, 40: 40, 45: 45, 50: 50 },
    mean: 28.6,
    stdDev: 7.7
  },
  {
    id: "22",
    name: "Ancient History",
    code: "HI17",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling",
    officialMapping: { 20: 16, 25: 22, 30: 28, 35: 34, 40: 40, 45: 46, 50: 50 },
    mean: 27.9,
    stdDev: 8.0
  },
  {
    id: "23",
    name: "Australian History",
    code: "HA",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling",
    officialMapping: { 20: 16, 25: 22, 30: 28, 35: 34, 40: 40, 45: 46, 50: 50 },
    mean: 27.8,
    stdDev: 8.2
  },
  {
    id: "20",
    name: "Geography",
    code: "GE",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling",
    officialMapping: { 20: 18, 25: 23, 30: 28, 35: 34, 40: 39, 45: 45, 50: 50 },
    mean: 28.5,
    stdDev: 7.4
  },
  {
    id: "75",
    name: "Legal Studies",
    code: "LS",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling",
    officialMapping: { 20: 17, 25: 23, 30: 28, 35: 34, 40: 40, 45: 45, 50: 50 },
    mean: 28.4,
    stdDev: 7.6
  },
  {
    id: "85",
    name: "Philosophy",
    code: "PL",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling",
    officialMapping: { 20: 19, 25: 24, 30: 30, 35: 35, 40: 40, 45: 45, 50: 50 },
    mean: 29.6,
    stdDev: 7.4
  },

  // === 商科类科目 ===
  {
    id: "13",
    name: "Economics",
    code: "EC",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "medium_scaling",
    officialMapping: { 20: 21, 25: 26, 30: 32, 35: 37, 40: 42, 45: 46, 50: 50 },
    mean: 31.5,
    stdDev: 7.2
  },
  {
    id: "1",
    name: "Accounting",
    code: "AC",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "medium_scaling",
    officialMapping: { 20: 20, 25: 25, 30: 31, 35: 36, 40: 41, 45: 46, 50: 50 },
    mean: 30.8,
    stdDev: 7.4
  },
  {
    id: "8",
    name: "Business Management",
    code: "BM",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "low_scaling",
    officialMapping: { 20: 17, 25: 21, 30: 27, 35: 32, 40: 38, 45: 44, 50: 50 },
    mean: 27.1,
    stdDev: 7.3
  },

  // === 政治学科目 ===
  {
    id: "88",
    name: "Australian Politics",
    code: "PS03",
    maxScore: 50,
    isEnglish: false,
    category: "Politics",
    scalingType: "medium_scaling",
    officialMapping: { 20: 21, 25: 26, 30: 32, 35: 37, 40: 42, 45: 47, 50: 50 },
    mean: 32.2,
    stdDev: 7.1
  },
  {
    id: "89",
    name: "Global Politics",
    code: "PS05",
    maxScore: 50,
    isEnglish: false,
    category: "Politics",
    scalingType: "medium_scaling",
    officialMapping: { 20: 22, 25: 27, 30: 33, 35: 38, 40: 42, 45: 47, 50: 50 },
    mean: 32.2,
    stdDev: 7.1
  },

  // === 语言类科目（高缩放） ===
  {
    id: "31",
    name: "Chinese First Language",
    code: "CN",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling",
    officialMapping: { 20: 19, 25: 26, 30: 33, 35: 39, 40: 44, 45: 48, 50: 50 },
    mean: 32.5,
    stdDev: 8.6
  },
  {
    id: "34",
    name: "Chinese Second Language",
    code: "CL",
    maxScore: 54, // 注意最高分
    isEnglish: false,
    category: "Languages",
    scalingType: "very_high_scaling",
    officialMapping: { 20: 31, 25: 37, 30: 42, 35: 46, 40: 49, 45: 52, 50: 54 },
    mean: 40.6,
    stdDev: 6.5
  },
  {
    id: "33",
    name: "Chinese Second Language Advanced",
    code: "CK",
    maxScore: 53, // 注意最高分
    isEnglish: false,
    category: "Languages",
    scalingType: "very_high_scaling",
    officialMapping: { 20: 25, 25: 31, 30: 37, 35: 43, 40: 47, 45: 51, 50: 53 },
    mean: 37.5,
    stdDev: 7.6
  },

  // === 技术类科目 ===
  {
    id: "3",
    name: "Algorithmics(HESS)",
    code: "AL03",
    maxScore: 51, // 注意最高分
    isEnglish: false,
    category: "Technology",
    scalingType: "high_scaling",
    officialMapping: { 20: 26, 25: 33, 30: 38, 35: 43, 40: 47, 45: 49, 50: 51 },
    mean: 37.9,
    stdDev: 6.6
  },
  {
    id: "4",
    name: "Data Analytics",
    code: "IT02",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "low_scaling",
    officialMapping: { 20: 16, 25: 21, 30: 26, 35: 32, 40: 38, 45: 44, 50: 50 },
    mean: 26.9,
    stdDev: 7.2
  },
  {
    id: "5",
    name: "Software Development",
    code: "IT03",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "low_scaling",
    officialMapping: { 20: 18, 25: 23, 30: 28, 35: 34, 40: 39, 45: 45, 50: 50 },
    mean: 28.8,
    stdDev: 7.1
  },

  // === 健康与体育类科目 ===
  {
    id: "21",
    name: "Health and Human Development",
    code: "HH",
    maxScore: 50,
    isEnglish: false,
    category: "Health",
    scalingType: "low_scaling",
    officialMapping: { 20: 16, 25: 21, 30: 26, 35: 31, 40: 37, 45: 43, 50: 50 },
    mean: 26.3,
    stdDev: 7.3
  },
  {
    id: "86",
    name: "Physical Education",
    code: "PE",
    maxScore: 50,
    isEnglish: false,
    category: "Health",
    scalingType: "low_scaling",
    officialMapping: { 20: 17, 25: 22, 30: 27, 35: 33, 40: 38, 45: 44, 50: 50 },
    mean: 27.5,
    stdDev: 7.3
  },

  // === 艺术类科目（低缩放） ===
  {
    id: "94",
    name: "Studio Arts",
    code: "SA",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling",
    officialMapping: { 20: 15, 25: 20, 30: 25, 35: 31, 40: 37, 45: 44, 50: 50 },
    mean: 26.6,
    stdDev: 7.3
  },
  {
    id: "98",
    name: "Visual Communication Design",
    code: "VC",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling",
    officialMapping: { 20: 16, 25: 21, 30: 26, 35: 32, 40: 38, 45: 44, 50: 50 },
    mean: 27.4,
    stdDev: 7.2
  },
  {
    id: "80",
    name: "Media",
    code: "ME",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling",
    officialMapping: { 20: 16, 25: 21, 30: 26, 35: 32, 40: 38, 45: 44, 50: 50 },
    mean: 27.1,
    stdDev: 7.1
  }
];

// 2024年精确ATAR映射表 - 基于官方VTAC 2024年12月12日数据
export const PRECISE_ATAR_MAPPING_2024 = [
  { atar: 99.95, aggregateMin: 211.60, aggregateMax: 230.00 },
  { atar: 99.90, aggregateMin: 208.16, aggregateMax: 211.59 },
  { atar: 99.85, aggregateMin: 206.35, aggregateMax: 208.15 },
  { atar: 99.80, aggregateMin: 205.09, aggregateMax: 206.34 },
  { atar: 99.75, aggregateMin: 203.82, aggregateMax: 205.08 },
  { atar: 99.70, aggregateMin: 202.15, aggregateMax: 203.81 },
  { atar: 99.65, aggregateMin: 200.99, aggregateMax: 202.14 },
  { atar: 99.60, aggregateMin: 199.80, aggregateMax: 200.98 },
  { atar: 99.55, aggregateMin: 198.80, aggregateMax: 199.79 },
  { atar: 99.50, aggregateMin: 198.02, aggregateMax: 198.79 },
  { atar: 99.45, aggregateMin: 197.21, aggregateMax: 198.01 },
  { atar: 99.40, aggregateMin: 196.56, aggregateMax: 197.20 },
  { atar: 99.35, aggregateMin: 196.11, aggregateMax: 196.55 },
  { atar: 99.30, aggregateMin: 195.62, aggregateMax: 196.10 },
  { atar: 99.25, aggregateMin: 194.97, aggregateMax: 195.61 },
  { atar: 99.20, aggregateMin: 194.48, aggregateMax: 194.96 },
  { atar: 99.15, aggregateMin: 193.85, aggregateMax: 194.47 },
  { atar: 99.10, aggregateMin: 193.25, aggregateMax: 193.84 },
  { atar: 99.05, aggregateMin: 192.66, aggregateMax: 193.24 },
  { atar: 99.00, aggregateMin: 192.07, aggregateMax: 192.65 },
  { atar: 98.95, aggregateMin: 191.38, aggregateMax: 192.06 },
  { atar: 98.90, aggregateMin: 190.82, aggregateMax: 191.37 },
  { atar: 98.85, aggregateMin: 190.50, aggregateMax: 190.81 },
  { atar: 98.80, aggregateMin: 190.15, aggregateMax: 190.49 },
  { atar: 98.75, aggregateMin: 189.65, aggregateMax: 190.14 },
  { atar: 98.70, aggregateMin: 189.18, aggregateMax: 189.64 },
  { atar: 98.65, aggregateMin: 188.71, aggregateMax: 189.17 },
  { atar: 98.60, aggregateMin: 188.24, aggregateMax: 188.70 },
  { atar: 98.55, aggregateMin: 187.81, aggregateMax: 188.23 },
  { atar: 98.50, aggregateMin: 187.35, aggregateMax: 187.80 },
  { atar: 98.00, aggregateMin: 183.84, aggregateMax: 184.04 },
  { atar: 97.50, aggregateMin: 180.73, aggregateMax: 181.01 },
  { atar: 97.00, aggregateMin: 178.13, aggregateMax: 178.35 },
  { atar: 96.50, aggregateMin: 175.77, aggregateMax: 175.97 },
  { atar: 96.00, aggregateMin: 173.65, aggregateMax: 173.82 },
  { atar: 95.50, aggregateMin: 171.41, aggregateMax: 171.60 },
  { atar: 95.00, aggregateMin: 169.54, aggregateMax: 169.70 },
  { atar: 94.50, aggregateMin: 167.91, aggregateMax: 168.06 },
  { atar: 94.00, aggregateMin: 166.18, aggregateMax: 166.37 },
  { atar: 93.50, aggregateMin: 164.43, aggregateMax: 164.57 },
  { atar: 93.00, aggregateMin: 162.88, aggregateMax: 163.03 },
  { atar: 92.50, aggregateMin: 161.38, aggregateMax: 161.50 },
  { atar: 92.00, aggregateMin: 159.98, aggregateMax: 160.11 },
  { atar: 91.50, aggregateMin: 158.74, aggregateMax: 158.86 },
  { atar: 91.00, aggregateMin: 157.43, aggregateMax: 157.55 },
  { atar: 90.50, aggregateMin: 156.18, aggregateMax: 156.31 },
  { atar: 90.00, aggregateMin: 154.85, aggregateMax: 154.99 },
  { atar: 89.50, aggregateMin: 153.62, aggregateMax: 153.73 },
  { atar: 89.00, aggregateMin: 152.52, aggregateMax: 152.63 },
  { atar: 88.50, aggregateMin: 151.45, aggregateMax: 151.55 },
  { atar: 88.00, aggregateMin: 150.38, aggregateMax: 150.46 },
  { atar: 87.50, aggregateMin: 149.37, aggregateMax: 149.45 },
  { atar: 87.00, aggregateMin: 148.26, aggregateMax: 148.37 },
  { atar: 86.50, aggregateMin: 147.31, aggregateMax: 147.37 },
  { atar: 86.00, aggregateMin: 146.34, aggregateMax: 146.43 },
  { atar: 85.50, aggregateMin: 145.38, aggregateMax: 145.47 },
  { atar: 85.00, aggregateMin: 144.51, aggregateMax: 144.58 },
  { atar: 84.50, aggregateMin: 143.52, aggregateMax: 143.62 },
  { atar: 84.00, aggregateMin: 142.60, aggregateMax: 142.68 },
  { atar: 83.50, aggregateMin: 141.58, aggregateMax: 141.65 },
  { atar: 83.00, aggregateMin: 140.65, aggregateMax: 140.74 },
  { atar: 82.50, aggregateMin: 139.83, aggregateMax: 139.90 },
  { atar: 82.00, aggregateMin: 138.99, aggregateMax: 139.05 },
  { atar: 81.50, aggregateMin: 138.15, aggregateMax: 138.24 },
  { atar: 81.00, aggregateMin: 137.30, aggregateMax: 137.36 },
  { atar: 80.50, aggregateMin: 136.38, aggregateMax: 136.47 },
  { atar: 80.00, aggregateMin: 135.55, aggregateMax: 135.62 },
  { atar: 79.50, aggregateMin: 134.65, aggregateMax: 134.72 },
  { atar: 79.00, aggregateMin: 133.83, aggregateMax: 133.91 },
  { atar: 78.50, aggregateMin: 133.01, aggregateMax: 133.08 },
  { atar: 78.00, aggregateMin: 132.20, aggregateMax: 132.26 },
  { atar: 77.50, aggregateMin: 131.45, aggregateMax: 131.55 },
  { atar: 77.00, aggregateMin: 130.67, aggregateMax: 130.74 },
  { atar: 76.50, aggregateMin: 130.00, aggregateMax: 130.05 },
  { atar: 76.00, aggregateMin: 129.25, aggregateMax: 129.30 },
  { atar: 75.50, aggregateMin: 128.51, aggregateMax: 128.57 },
  { atar: 75.00, aggregateMin: 127.72, aggregateMax: 127.77 },
  { atar: 74.50, aggregateMin: 126.98, aggregateMax: 127.05 },
  { atar: 74.00, aggregateMin: 126.28, aggregateMax: 126.34 },
  { atar: 73.50, aggregateMin: 125.53, aggregateMax: 125.59 },
  { atar: 73.00, aggregateMin: 124.73, aggregateMax: 124.78 },
  { atar: 72.50, aggregateMin: 124.00, aggregateMax: 124.06 },
  { atar: 72.00, aggregateMin: 123.25, aggregateMax: 123.32 },
  { atar: 71.50, aggregateMin: 122.52, aggregateMax: 122.59 },
  { atar: 71.00, aggregateMin: 121.80, aggregateMax: 121.85 },
  { atar: 70.50, aggregateMin: 121.10, aggregateMax: 121.16 },
  { atar: 70.00, aggregateMin: 120.37, aggregateMax: 120.42 },
  { atar: 69.50, aggregateMin: 119.65, aggregateMax: 119.71 },
  { atar: 69.00, aggregateMin: 118.97, aggregateMax: 119.04 },
  { atar: 68.50, aggregateMin: 118.25, aggregateMax: 118.30 },
  { atar: 68.00, aggregateMin: 117.59, aggregateMax: 117.64 },
  { atar: 67.50, aggregateMin: 116.91, aggregateMax: 116.95 },
  { atar: 67.00, aggregateMin: 116.23, aggregateMax: 116.28 },
  { atar: 66.50, aggregateMin: 115.57, aggregateMax: 115.62 },
  { atar: 66.00, aggregateMin: 114.90, aggregateMax: 114.97 },
  { atar: 65.50, aggregateMin: 114.16, aggregateMax: 114.21 },
  { atar: 65.00, aggregateMin: 113.43, aggregateMax: 113.52 },
  { atar: 64.50, aggregateMin: 112.72, aggregateMax: 112.79 },
  { atar: 64.00, aggregateMin: 112.08, aggregateMax: 112.12 },
  { atar: 63.50, aggregateMin: 111.47, aggregateMax: 111.53 },
  { atar: 63.00, aggregateMin: 110.89, aggregateMax: 110.94 },
  { atar: 62.50, aggregateMin: 110.25, aggregateMax: 110.32 },
  { atar: 62.00, aggregateMin: 109.61, aggregateMax: 109.68 },
  { atar: 61.50, aggregateMin: 108.97, aggregateMax: 109.02 },
  { atar: 61.00, aggregateMin: 108.28, aggregateMax: 108.33 },
  { atar: 60.50, aggregateMin: 107.52, aggregateMax: 107.59 },
  { atar: 60.00, aggregateMin: 106.90, aggregateMax: 106.94 },
  { atar: 59.50, aggregateMin: 106.26, aggregateMax: 106.30 },
  { atar: 59.00, aggregateMin: 105.58, aggregateMax: 105.61 },
  { atar: 58.50, aggregateMin: 104.93, aggregateMax: 104.99 },
  { atar: 58.00, aggregateMin: 104.27, aggregateMax: 104.32 },
  { atar: 57.50, aggregateMin: 103.66, aggregateMax: 103.71 },
  { atar: 57.00, aggregateMin: 102.98, aggregateMax: 103.04 },
  { atar: 56.50, aggregateMin: 102.32, aggregateMax: 102.40 },
  { atar: 56.00, aggregateMin: 101.68, aggregateMax: 101.73 },
  { atar: 55.50, aggregateMin: 101.01, aggregateMax: 101.05 },
  { atar: 55.00, aggregateMin: 100.30, aggregateMax: 100.37 },
  { atar: 54.50, aggregateMin: 99.67, aggregateMax: 99.72 },
  { atar: 54.00, aggregateMin: 99.02, aggregateMax: 99.07 },
  { atar: 53.50, aggregateMin: 98.38, aggregateMax: 98.42 },
  { atar: 53.00, aggregateMin: 97.64, aggregateMax: 97.69 },
  { atar: 52.50, aggregateMin: 97.00, aggregateMax: 97.08 },
  { atar: 52.00, aggregateMin: 96.30, aggregateMax: 96.37 },
  { atar: 51.50, aggregateMin: 95.61, aggregateMax: 95.68 },
  { atar: 51.00, aggregateMin: 94.95, aggregateMax: 95.00 },
  { atar: 50.50, aggregateMin: 94.28, aggregateMax: 94.34 },
  { atar: 50.00, aggregateMin: 93.66, aggregateMax: 93.70 },
  { atar: 49.50, aggregateMin: 93.05, aggregateMax: 93.09 },
  { atar: 49.00, aggregateMin: 92.35, aggregateMax: 92.41 },
  { atar: 48.50, aggregateMin: 91.65, aggregateMax: 91.72 },
  { atar: 48.00, aggregateMin: 90.97, aggregateMax: 91.03 },
  { atar: 47.50, aggregateMin: 90.25, aggregateMax: 90.31 },
  { atar: 47.00, aggregateMin: 89.51, aggregateMax: 89.57 },
  { atar: 46.50, aggregateMin: 88.90, aggregateMax: 88.93 },
  { atar: 46.00, aggregateMin: 88.15, aggregateMax: 88.21 },
  { atar: 45.50, aggregateMin: 87.45, aggregateMax: 87.54 },
  { atar: 45.00, aggregateMin: 86.80, aggregateMax: 86.84 },
  { atar: 44.50, aggregateMin: 86.14, aggregateMax: 86.18 },
  { atar: 44.00, aggregateMin: 85.52, aggregateMax: 85.59 },
  { atar: 43.50, aggregateMin: 84.80, aggregateMax: 84.86 },
  { atar: 43.00, aggregateMin: 84.05, aggregateMax: 84.11 },
  { atar: 42.50, aggregateMin: 83.33, aggregateMax: 83.41 },
  { atar: 42.00, aggregateMin: 82.50, aggregateMax: 82.55 },
  { atar: 41.50, aggregateMin: 81.71, aggregateMax: 81.78 },
  { atar: 41.00, aggregateMin: 80.94, aggregateMax: 81.01 },
  { atar: 40.50, aggregateMin: 80.14, aggregateMax: 80.23 },
  { atar: 40.00, aggregateMin: 79.51, aggregateMax: 79.56 },
  { atar: 39.50, aggregateMin: 78.76, aggregateMax: 78.79 },
  { atar: 39.00, aggregateMin: 78.01, aggregateMax: 78.05 },
  { atar: 38.50, aggregateMin: 77.27, aggregateMax: 77.36 },
  { atar: 38.00, aggregateMin: 76.63, aggregateMax: 76.67 },
  { atar: 37.50, aggregateMin: 75.91, aggregateMax: 75.98 },
  { atar: 37.00, aggregateMin: 75.30, aggregateMax: 75.34 },
  { atar: 36.50, aggregateMin: 74.61, aggregateMax: 74.67 },
  { atar: 36.00, aggregateMin: 73.83, aggregateMax: 73.88 },
  { atar: 35.50, aggregateMin: 73.11, aggregateMax: 73.18 },
  { atar: 35.00, aggregateMin: 72.41, aggregateMax: 72.47 },
  { atar: 34.50, aggregateMin: 71.75, aggregateMax: 71.80 },
  { atar: 34.00, aggregateMin: 70.97, aggregateMax: 71.03 },
  { atar: 33.50, aggregateMin: 70.28, aggregateMax: 70.34 },
  { atar: 33.00, aggregateMin: 69.63, aggregateMax: 69.68 },
  { atar: 32.50, aggregateMin: 68.94, aggregateMax: 68.96 },
  { atar: 32.00, aggregateMin: 68.32, aggregateMax: 68.35 },
  { atar: 31.50, aggregateMin: 67.70, aggregateMax: 67.75 },
  { atar: 31.00, aggregateMin: 67.00, aggregateMax: 67.06 },
  { atar: 30.50, aggregateMin: 66.37, aggregateMax: 66.42 },
  { atar: 30.00, aggregateMin: 65.62, aggregateMax: 65.65 },
  { atar: 0.00, aggregateMin: 0.00, aggregateMax: 65.61 }
];

// 基于2024年官方数据的精确缩放算法
export const calculateScaledScore = (rawScore, subjectId) => {
  const subject = VCE_SUBJECTS_DB.find(s => s.id === subjectId);
  if (!subject || !subject.officialMapping) {
    return rawScore; // 如果没有官方映射数据，返回原始分数
  }
  
  const mapping = subject.officialMapping;
  const scores = [20, 25, 30, 35, 40, 45, 50];
  
  // 边界情况处理
  if (rawScore <= 20) return mapping[20];
  if (rawScore >= 50) return mapping[50];
  
  // 在映射点之间进行线性插值
  for (let i = 0; i < scores.length - 1; i++) {
    const lowerScore = scores[i];
    const upperScore = scores[i + 1];
    
    if (rawScore >= lowerScore && rawScore <= upperScore) {
      const lowerScaled = mapping[lowerScore];
      const upperScaled = mapping[upperScore];
      
      // 线性插值
      const ratio = (rawScore - lowerScore) / (upperScore - lowerScore);
      const scaledScore = lowerScaled + ratio * (upperScaled - lowerScaled);
      
      return Math.round(scaledScore * 10) / 10; // 保留一位小数
    }
  }
  
  return rawScore;
};

// 基于2024年官方ATAR映射表的精确查找
export const getATARFromAggregate = (aggregate) => {
  // 使用2024年官方映射表进行精确查找
  for (const mapping of PRECISE_ATAR_MAPPING_2024) {
    if (aggregate >= mapping.aggregateMin && aggregate <= mapping.aggregateMax) {
      return mapping.atar;
    }
  }
  
  // 如果找不到精确匹配，找最接近的ATAR值
  const sortedMappings = [...PRECISE_ATAR_MAPPING_2024].sort((a, b) => b.atar - a.atar);
  
  for (const mapping of sortedMappings) {
    if (aggregate >= mapping.aggregateMin) {
      return mapping.atar;
    }
  }
  
  return 0; // 如果aggregate太低，返回0
};

// 学习建议配置（基于2024年数据更新）
export const STUDY_RECOMMENDATIONS = {
  english_missing: {
    priority: "critical",
    message: "An English subject is required for ATAR calculation. Please add English, EAL, Literature, or English Language.",
    action: "Add English Subject"
  },
  low_scaling_heavy: {
    priority: "warning", 
    message: "Consider adding higher-scaling subjects like Mathematical Methods, Specialist Mathematics, Chemistry, or Physics to improve your aggregate.",
    action: "Review Subject Selection"
  },
  very_high_scaling_subjects: {
    priority: "info",
    message: "Excellent choice! You've selected high-scaling subjects. Focus on achieving your best possible scores.",
    action: "Maximize Performance"
  },
  good_balance: {
    priority: "info",
    message: "Good subject balance. Focus on achieving your best possible scores in each subject.",
    action: "Optimize Study Plan"
  },
  high_achiever: {
    priority: "success",
    message: "Excellent performance! You're on track for competitive course entry.",
    action: "Maintain Excellence"
  }
};

// 更新的学习建议函数
export const getStudyRecommendations = (subjects, results) => {
  const recommendations = [];
  
  // 检查英语科目
  if (!results.hasEnglish) {
    recommendations.push(STUDY_RECOMMENDATIONS.english_missing);
  }
  
  // 检查科目组合质量
  const validSubjects = subjects.filter(s => s.subjectId && s.rawScore > 0);
  const subjectTypes = validSubjects.map(s => {
    const subject = VCE_SUBJECTS_DB.find(sub => sub.id === s.subjectId);
    return subject?.scalingType;
  });
  
  const veryHighScalingCount = subjectTypes.filter(type => type === 'very_high_scaling').length;
  const highScalingCount = subjectTypes.filter(type => type === 'high_scaling').length;
  const lowScalingCount = subjectTypes.filter(type => type === 'low_scaling').length;
  
  // 推荐逻辑
  if (veryHighScalingCount >= 2 || highScalingCount >= 3) {
    recommendations.push(STUDY_RECOMMENDATIONS.very_high_scaling_subjects);
  } else if (lowScalingCount >= 3) {
    recommendations.push(STUDY_RECOMMENDATIONS.low_scaling_heavy);
  }
  
  // 基于ATAR给出建议
  if (results.atar >= 95) {
    recommendations.push(STUDY_RECOMMENDATIONS.high_achiever);
  } else if (results.atar >= 70) {
    recommendations.push(STUDY_RECOMMENDATIONS.good_balance);
  }
  
  return recommendations;
};

// 数据版本信息
export const DATA_VERSION = {
  version: "2024.12.12",
  source: "VTAC Official 2024 Aggregate to ATAR Table",
  lastUpdated: "2024-12-12",
  description: "Based on official 2024 VTAC scaling and aggregation data"
};

// 导出所有功能
const atarDataModule = {
  VCE_SUBJECTS_DB,
  PRECISE_ATAR_MAPPING_2024,
  STUDY_RECOMMENDATIONS,
  calculateScaledScore,
  getATARFromAggregate,
  getStudyRecommendations,
  DATA_VERSION
};

export default atarDataModule;