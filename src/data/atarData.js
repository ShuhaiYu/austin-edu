// app/resource-hub/data/atarData.js
import { UNIVERSITY_PREREQUISITES } from "@/data/atarUni";

/**
 * ATAR Calculator Data Management
 * 包含VCE科目、分数映射、ATAR转换等核心数据
 */

// VCE科目完整数据库 - 基于真实VCE课程数据
export const VCE_SUBJECTS_DB = [
  // === 英语类科目（必修，main_course_state = 1） ===
  {
    id: "14",
    name: "English",
    code: "EN",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling"
  },
  {
    id: "15",
    name: "English as an Additional Language",
    code: "EF",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling"
  },
  {
    id: "16",
    name: "English Language",
    code: "EL EG",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling"
  },
  {
    id: "76",
    name: "Literature",
    code: "LI",
    maxScore: 50,
    isEnglish: true,
    category: "English",
    scalingType: "medium_scaling"
  },

  // === 数学类科目 ===
  {
    id: "78",
    name: "Mathematical Methods",
    code: "MM NJ",
    maxScore: 51,
    isEnglish: false,
    category: "Mathematics",
    scalingType: "high_scaling"
  },
  {
    id: "79",
    name: "Specialist Mathematics",
    code: "SM NS",
    maxScore: 50,
    isEnglish: false,
    category: "Mathematics",
    scalingType: "high_scaling"
  },
  {
    id: "77",
    name: "General Mathematics",
    code: "FM NF",
    maxScore: 50,
    isEnglish: false,
    category: "Mathematics",
    scalingType: "medium_scaling"
  },
  {
    id: "777",
    name: "Foundation Mathematics",
    code: "FM NF",
    maxScore: 50,
    isEnglish: false,
    category: "Mathematics",
    scalingType: "medium_scaling"
  },

  // === 科学类科目 ===
  {
    id: "87",
    name: "Physics",
    code: "PH",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "high_scaling"
  },
  {
    id: "9",
    name: "Chemistry",
    code: "CH",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "high_scaling"
  },
  {
    id: "7",
    name: "Biology",
    code: "BI",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "medium_scaling"
  },
  {
    id: "91",
    name: "Psychology",
    code: "PY",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "medium_scaling"
  },
  {
    id: "17",
    name: "Environmental Science",
    code: "ES EV",
    maxScore: 50,
    isEnglish: false,
    category: "Science",
    scalingType: "medium_scaling"
  },

  // === 人文社科类科目 ===
  {
    id: "24",
    name: "Revolutions",
    code: "R HR",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "22",
    name: "Ancient History",
    code: "AH HI17",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "23",
    name: "Australian History",
    code: "AH HA",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "20",
    name: "Geography",
    code: "GE",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "75",
    name: "Legal Studies",
    code: "LS",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "85",
    name: "Philosophy",
    code: "PL",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "92",
    name: "Religion and Society",
    code: "RS RAS",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "93",
    name: "Sociology",
    code: "SO03",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },
  {
    id: "96",
    name: "Texts and Traditions",
    code: "TT TAT",
    maxScore: 50,
    isEnglish: false,
    category: "Humanities",
    scalingType: "medium_scaling"
  },

  // === 商科类科目 ===
  {
    id: "13",
    name: "Economics",
    code: "EC",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "medium_scaling"
  },
  {
    id: "1",
    name: "Accounting",
    code: "AC",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "low_scaling"
  },
  {
    id: "8",
    name: "Business Management",
    code: "BM",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "low_scaling"
  },
  {
    id: "25",
    name: "Industry and Enterprise",
    code: "IE IAE",
    maxScore: 50,
    isEnglish: false,
    category: "Business",
    scalingType: "low_scaling"
  },

  // === 政治学科目 ===
  {
    id: "88",
    name: "Australian Politics",
    code: "AP PS03",
    maxScore: 50,
    isEnglish: false,
    category: "Politics",
    scalingType: "medium_scaling"
  },
  {
    id: "89",
    name: "Global Politics",
    code: "GP PS05",
    maxScore: 50,
    isEnglish: false,
    category: "Politics",
    scalingType: "medium_scaling"
  },

  // === 语言类科目 ===
  {
    id: "31",
    name: "Chinese First Language",
    code: "CFL CN",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling"
  },
  {
    id: "34",
    name: "Chinese Second Language",
    code: "CSL CL",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "33",
    name: "Chinese Second Language Advanced",
    code: "CSLA CK",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling"
  },
  {
    id: "32",
    name: "Chinese Language Culture and Society",
    code: "CLCS CLCAS LO57",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "50",
    name: "Japanese First Language",
    code: "JFL JA",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling"
  },
  {
    id: "51",
    name: "Japanese Second Language",
    code: "JSL JS",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "54",
    name: "Korean First Language",
    code: "KFL KO",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling"
  },
  {
    id: "55",
    name: "Korean Second Language",
    code: "KSL KS",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "71",
    name: "Vietnamese First Language",
    code: "VFL LO54",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling"
  },
  {
    id: "72",
    name: "Vietnamese Second Language",
    code: "VT",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "47",
    name: "Indonesian First Language",
    code: "IFL IN",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "high_scaling"
  },
  {
    id: "48",
    name: "Indonesian Second Language",
    code: "IX",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "40",
    name: "French",
    code: "FR",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "41",
    name: "German",
    code: "GN",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "49",
    name: "Italian",
    code: "IL",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "67",
    name: "Spanish",
    code: "S SP",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "56",
    name: "Latin",
    code: "LA",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "35",
    name: "Classical Greek",
    code: "AG",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "43",
    name: "Hebrew",
    code: "HB",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "26",
    name: "Arabic",
    code: "AR",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },
  {
    id: "28",
    name: "Auslan",
    code: "AU",
    maxScore: 50,
    isEnglish: false,
    category: "Languages",
    scalingType: "medium_scaling"
  },

  // === 艺术类科目 ===
  {
    id: "6",
    name: "Art Creative Practice",
    code: "AT",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "666",
    name: "Art Making and Exhibiting",
    code: "SA",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "94",
    name: "Studio Arts",
    code: "SA",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "98",
    name: "Visual Communication Design",
    code: "VCD VC",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "11",
    name: "Dance",
    code: "DA",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "12",
    name: "Drama",
    code: "DR",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "97",
    name: "Theatre Studies",
    code: "TS TS",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "80",
    name: "Media",
    code: "ME",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "881",
    name: "Music Composition",
    code: "MD",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "81",
    name: "Music Contemporary Performance",
    code: "MI MC05",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "82",
    name: "Music Inquiry",
    code: "MP MC04",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },
  {
    id: "83",
    name: "Music Repertoire Performance",
    code: "MSC MSAC MD",
    maxScore: 50,
    isEnglish: false,
    category: "Arts",
    scalingType: "low_scaling"
  },

  // === 技术类科目 ===
  {
    id: "3",
    name: "Algorithmics(HESS)",
    code: "AL03",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "medium_scaling"
  },
  {
    id: "4",
    name: "Data Analytics",
    code: "DA IT02",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "medium_scaling"
  },
  {
    id: "5",
    name: "Software Development",
    code: "SD IT03",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "medium_scaling"
  },
  {
    id: "90",
    name: "Product Design and Technology",
    code: "PDT PDAT DT",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "low_scaling"
  },
  {
    id: "95",
    name: "Systems Engineering",
    code: "SE03",
    maxScore: 50,
    isEnglish: false,
    category: "Technology",
    scalingType: "medium_scaling"
  },

  // === 健康与体育类科目 ===
  {
    id: "21",
    name: "Health and Human Development",
    code: "HHD HAHD HH",
    maxScore: 50,
    isEnglish: false,
    category: "Health",
    scalingType: "medium_scaling"
  },
  {
    id: "86",
    name: "Physical Education",
    code: "PE",
    maxScore: 50,
    isEnglish: false,
    category: "Health",
    scalingType: "medium_scaling"
  },
  {
    id: "84",
    name: "Outdoor and Environmental Studies",
    code: "OES OAES OS",
    maxScore: 50,
    isEnglish: false,
    category: "Health",
    scalingType: "medium_scaling"
  },

  // === 其他学科 ===
  {
    id: "19",
    name: "Food Studies",
    code: "FS FT",
    maxScore: 50,
    isEnglish: false,
    category: "Other",
    scalingType: "low_scaling"
  },
  {
    id: "10",
    name: "Classical Studies",
    code: "CC",
    maxScore: 50,
    isEnglish: false,
    category: "Other",
    scalingType: "medium_scaling"
  },
  {
    id: "18",
    name: "Extended Investigation",
    code: "EI XI03",
    maxScore: 50,
    isEnglish: false,
    category: "Other",
    scalingType: "medium_scaling"
  },
  {
    id: "2",
    name: "Agricultural & Horticultural Studies",
    code: "AHS AH",
    maxScore: 50,
    isEnglish: false,
    category: "Other",
    scalingType: "low_scaling"
  },

  // === VET科目 ===
  {
    id: "114",
    name: "VCE VET Sport and Recreation",
    code: "VVSR VVSAR SR41",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "113",
    name: "VCE VET Music Sound Production",
    code: "VVMSP MI30",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "112",
    name: "VCE VET Music Performance",
    code: "VVMP MI19",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "111",
    name: "VCE VET Laboratory Skills",
    code: "VVLS LB21",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "110",
    name: "VCE VET Integrated Technologies",
    code: "ET16",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "109",
    name: "VCE VET Information Technology",
    code: "VVIT IN60",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "108",
    name: "VCE VET Hospitality (Kitchen Operations)",
    code: "VVHKP HS32",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "107",
    name: "VCE VET Hospitality",
    code: "VVH HS31",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "106",
    name: "VCE VET Health Services",
    code: "VVHS CT37",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "105",
    name: "VCE VET Furnishing",
    code: "VVF FN19",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "104",
    name: "VCE VET Equine Studies",
    code: "VVES EQ05",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "103",
    name: "VCE VET Engineering Studies",
    code: "VVES EG16",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "102",
    name: "VCE VET Dance",
    code: "VVD DN06",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "101",
    name: "VCE VET Creative and Digital Media",
    code: "VVCDM VVCADM MU07",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "100",
    name: "VCE VET Community Services",
    code: "VVCS CT41",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  },
  {
    id: "99",
    name: "VCE VET Business",
    code: "VVB BU23",
    maxScore: 50,
    isEnglish: false,
    category: "VET",
    scalingType: "low_scaling"
  }
];

// 详细的分数映射数据（基于2023年VCE数据）
export const DETAILED_SCORE_MAPPING = {
  // 高缩放科目 (数学、物理、化学、中文第一语言等)
  high_scaling: [
    { rawMin: 45, rawMax: 50, scaledMin: 47, scaledMax: 50 },
    { rawMin: 40, rawMax: 45, scaledMin: 41, scaledMax: 47 },
    { rawMin: 35, rawMax: 40, scaledMin: 35, scaledMax: 41 },
    { rawMin: 30, rawMax: 35, scaledMin: 29, scaledMax: 35 },
    { rawMin: 25, rawMax: 30, scaledMin: 23, scaledMax: 29 },
    { rawMin: 20, rawMax: 25, scaledMin: 17, scaledMax: 23 },
    { rawMin: 15, rawMax: 20, scaledMin: 11, scaledMax: 17 },
    { rawMin: 10, rawMax: 15, scaledMin: 6, scaledMax: 11 },
    { rawMin: 0, rawMax: 10, scaledMin: 0, scaledMax: 6 },
  ],

  // 中等缩放科目 (英语、生物、经济学等)
  medium_scaling: [
    { rawMin: 45, rawMax: 50, scaledMin: 44, scaledMax: 50 },
    { rawMin: 40, rawMax: 45, scaledMin: 37, scaledMax: 44 },
    { rawMin: 35, rawMax: 40, scaledMin: 31, scaledMax: 37 },
    { rawMin: 30, rawMax: 35, scaledMin: 26, scaledMax: 31 },
    { rawMin: 25, rawMax: 30, scaledMin: 20, scaledMax: 26 },
    { rawMin: 20, rawMax: 25, scaledMin: 15, scaledMax: 20 },
    { rawMin: 15, rawMax: 20, scaledMin: 10, scaledMax: 15 },
    { rawMin: 10, rawMax: 15, scaledMin: 5, scaledMax: 10 },
    { rawMin: 0, rawMax: 10, scaledMin: 0, scaledMax: 5 },
  ],

  // 低缩放科目 (艺术、VET、部分商科等)
  low_scaling: [
    { rawMin: 45, rawMax: 50, scaledMin: 40, scaledMax: 47 },
    { rawMin: 40, rawMax: 45, scaledMin: 33, scaledMax: 40 },
    { rawMin: 35, rawMax: 40, scaledMin: 28, scaledMax: 33 },
    { rawMin: 30, rawMax: 35, scaledMin: 23, scaledMax: 28 },
    { rawMin: 25, rawMax: 30, scaledMin: 18, scaledMax: 23 },
    { rawMin: 20, rawMax: 25, scaledMin: 13, scaledMax: 18 },
    { rawMin: 15, rawMax: 20, scaledMin: 8, scaledMax: 13 },
    { rawMin: 10, rawMax: 15, scaledMin: 4, scaledMax: 8 },
    { rawMin: 0, rawMax: 10, scaledMin: 0, scaledMax: 4 },
  ]
};

// 精确的ATAR映射表（基于2023年数据）
export const PRECISE_ATAR_MAPPING = [
  { aggregateMin: 199.5, aggregateMax: 210, atar: 99.95 },
  { aggregateMin: 197.0, aggregateMax: 199.5, atar: 99.90 },
  { aggregateMin: 194.5, aggregateMax: 197.0, atar: 99.85 },
  { aggregateMin: 192.0, aggregateMax: 194.5, atar: 99.80 },
  { aggregateMin: 189.5, aggregateMax: 192.0, atar: 99.75 },
  { aggregateMin: 187.0, aggregateMax: 189.5, atar: 99.70 },
  { aggregateMin: 184.5, aggregateMax: 187.0, atar: 99.65 },
  { aggregateMin: 182.0, aggregateMax: 184.5, atar: 99.60 },
  { aggregateMin: 179.5, aggregateMax: 182.0, atar: 99.55 },
  { aggregateMin: 177.0, aggregateMax: 179.5, atar: 99.50 },
  { aggregateMin: 174.5, aggregateMax: 177.0, atar: 99.40 },
  { aggregateMin: 172.0, aggregateMax: 174.5, atar: 99.30 },
  { aggregateMin: 169.5, aggregateMax: 172.0, atar: 99.20 },
  { aggregateMin: 167.0, aggregateMax: 169.5, atar: 99.10 },
  { aggregateMin: 164.5, aggregateMax: 167.0, atar: 99.00 },
  { aggregateMin: 162.0, aggregateMax: 164.5, atar: 98.80 },
  { aggregateMin: 159.5, aggregateMax: 162.0, atar: 98.60 },
  { aggregateMin: 157.0, aggregateMax: 159.5, atar: 98.40 },
  { aggregateMin: 154.5, aggregateMax: 157.0, atar: 98.20 },
  { aggregateMin: 152.0, aggregateMax: 154.5, atar: 98.00 },
  { aggregateMin: 149.5, aggregateMax: 152.0, atar: 97.70 },
  { aggregateMin: 147.0, aggregateMax: 149.5, atar: 97.40 },
  { aggregateMin: 144.5, aggregateMax: 147.0, atar: 97.10 },
  { aggregateMin: 142.0, aggregateMax: 144.5, atar: 96.80 },
  { aggregateMin: 139.5, aggregateMax: 142.0, atar: 96.50 },
  { aggregateMin: 137.0, aggregateMax: 139.5, atar: 96.00 },
  { aggregateMin: 134.5, aggregateMax: 137.0, atar: 95.50 },
  { aggregateMin: 132.0, aggregateMax: 134.5, atar: 95.00 },
  { aggregateMin: 129.5, aggregateMax: 132.0, atar: 94.50 },
  { aggregateMin: 127.0, aggregateMax: 129.5, atar: 94.00 },
  { aggregateMin: 124.5, aggregateMax: 127.0, atar: 93.00 },
  { aggregateMin: 122.0, aggregateMax: 124.5, atar: 92.00 },
  { aggregateMin: 119.5, aggregateMax: 122.0, atar: 91.00 },
  { aggregateMin: 117.0, aggregateMax: 119.5, atar: 90.00 },
  { aggregateMin: 114.5, aggregateMax: 117.0, atar: 89.00 },
  { aggregateMin: 112.0, aggregateMax: 114.5, atar: 88.00 },
  { aggregateMin: 109.5, aggregateMax: 112.0, atar: 87.00 },
  { aggregateMin: 107.0, aggregateMax: 109.5, atar: 86.00 },
  { aggregateMin: 104.5, aggregateMax: 107.0, atar: 85.00 },
  { aggregateMin: 102.0, aggregateMax: 104.5, atar: 84.00 },
  { aggregateMin: 99.5, aggregateMax: 102.0, atar: 83.00 },
  { aggregateMin: 97.0, aggregateMax: 99.5, atar: 82.00 },
  { aggregateMin: 94.5, aggregateMax: 97.0, atar: 81.00 },
  { aggregateMin: 92.0, aggregateMax: 94.5, atar: 80.00 },
  { aggregateMin: 89.5, aggregateMax: 92.0, atar: 78.00 },
  { aggregateMin: 87.0, aggregateMax: 89.5, atar: 76.00 },
  { aggregateMin: 84.5, aggregateMax: 87.0, atar: 74.00 },
  { aggregateMin: 82.0, aggregateMax: 84.5, atar: 72.00 },
  { aggregateMin: 79.5, aggregateMax: 82.0, atar: 70.00 },
  { aggregateMin: 77.0, aggregateMax: 79.5, atar: 68.00 },
  { aggregateMin: 74.5, aggregateMax: 77.0, atar: 66.00 },
  { aggregateMin: 72.0, aggregateMax: 74.5, atar: 64.00 },
  { aggregateMin: 69.5, aggregateMax: 72.0, atar: 62.00 },
  { aggregateMin: 67.0, aggregateMax: 69.5, atar: 60.00 },
  { aggregateMin: 64.5, aggregateMax: 67.0, atar: 58.00 },
  { aggregateMin: 62.0, aggregateMax: 64.5, atar: 56.00 },
  { aggregateMin: 59.5, aggregateMax: 62.0, atar: 54.00 },
  { aggregateMin: 57.0, aggregateMax: 59.5, atar: 52.00 },
  { aggregateMin: 54.5, aggregateMax: 57.0, atar: 50.00 },
  { aggregateMin: 52.0, aggregateMax: 54.5, atar: 48.00 },
  { aggregateMin: 49.5, aggregateMax: 52.0, atar: 46.00 },
  { aggregateMin: 47.0, aggregateMax: 49.5, atar: 44.00 },
  { aggregateMin: 44.5, aggregateMax: 47.0, atar: 42.00 },
  { aggregateMin: 42.0, aggregateMax: 44.5, atar: 40.00 },
  { aggregateMin: 39.5, aggregateMax: 42.0, atar: 38.00 },
  { aggregateMin: 37.0, aggregateMax: 39.5, atar: 36.00 },
  { aggregateMin: 34.5, aggregateMax: 37.0, atar: 34.00 },
  { aggregateMin: 32.0, aggregateMax: 34.5, atar: 32.00 },
  { aggregateMin: 29.5, aggregateMax: 32.0, atar: 30.00 },
  { aggregateMin: 0, aggregateMax: 29.5, atar: 0.00 },
];



// 学习建议配置
export const STUDY_RECOMMENDATIONS = {
  english_missing: {
    priority: "critical",
    message: "An English subject is required for ATAR calculation. Please add English, EAL, Literature, or English Language.",
    action: "Add English Subject"
  },
  low_scaling_heavy: {
    priority: "warning", 
    message: "Consider adding higher-scaling subjects like Mathematical Methods, Chemistry, or Physics to improve your aggregate.",
    action: "Review Subject Selection"
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

// 工具函数：计算缩放分数
export const calculateScaledScore = (rawScore, subjectId) => {
  const subject = VCE_SUBJECTS_DB.find(s => s.id === subjectId);
  if (!subject) return rawScore;
  
  const scalingType = subject.scalingType;
  const mappings = DETAILED_SCORE_MAPPING[scalingType];
  
  const mapping = mappings.find(m => 
    rawScore >= m.rawMin && rawScore <= m.rawMax
  );
  
  if (!mapping) return rawScore;
  
  // 线性插值计算
  const ratio = (rawScore - mapping.rawMin) / (mapping.rawMax - mapping.rawMin);
  const scaledScore = mapping.scaledMin + ratio * (mapping.scaledMax - mapping.scaledMin);
  
  return Math.round(scaledScore * 10) / 10;
};

// 工具函数：获取ATAR
export const getATARFromAggregate = (aggregate) => {
  const mapping = PRECISE_ATAR_MAPPING.find(m => 
    aggregate >= m.aggregateMin && aggregate < m.aggregateMax
  );
  
  return mapping ? mapping.atar : 0;
};

// 工具函数：获取学习建议
export const getStudyRecommendations = (subjects, results) => {
  const recommendations = [];
  
  // 检查英语科目
  if (!results.hasEnglish) {
    recommendations.push(STUDY_RECOMMENDATIONS.english_missing);
  }
  
  // 检查低缩放科目比例
  const validSubjects = subjects.filter(s => s.subjectId && s.rawScore > 0);
  const lowScalingCount = validSubjects.filter(s => {
    const subject = VCE_SUBJECTS_DB.find(sub => sub.id === s.subjectId);
    return subject?.scalingType === 'low_scaling';
  }).length;
  
  if (lowScalingCount >= 3) {
    recommendations.push(STUDY_RECOMMENDATIONS.low_scaling_heavy);
  }
  
  // 基于ATAR给出建议
  if (results.atar >= 90) {
    recommendations.push(STUDY_RECOMMENDATIONS.high_achiever);
  } else if (results.atar >= 70) {
    recommendations.push(STUDY_RECOMMENDATIONS.good_balance);
  }
  
  return recommendations;
};

// 修复ESLint警告：先定义对象再导出
const atarDataModule = {
  VCE_SUBJECTS_DB,
  DETAILED_SCORE_MAPPING, 
  PRECISE_ATAR_MAPPING,
  STUDY_RECOMMENDATIONS,
  calculateScaledScore,
  getATARFromAggregate,
  getStudyRecommendations
};

export default atarDataModule;