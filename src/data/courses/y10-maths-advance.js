import { list } from "postcss";

const courseData = {
  en: {
    slug: "y10-maths-advance",
    title: "Y10 Pre-VCE Maths Advance",
    heroSection: {
      achievements: {
        title: "VCE Mathematics Track Record",
        currentYear: {
          subtitle: "VCE Maths Methods",
        },
        historical: {
          range: "From 2017 to 2024",
          items: [
            {
              number: 25,
              label: "top scorers in Maths Methods",
            },
            {
              number: "450+",
              title: "Over",
              label: "students with raw score 40+ (Top 9% of State cohort)",
            },
            {
              number: "180+",
              title: "Over",
              label: "students with raw score 45+ (Top 2% of State cohort)",
            },
            {
              number: "28%",
              label: "achieved raw score 45+",
            },
            {
              number: "62%",
              label: "achieved raw score 40+",
            },
          ],
          extraDescription:
            "On average, our students achieve a raw score of 42, with a scaled score of 48—far above the state average.",
        },
        subtitle: "VCE Specialist Maths",
      },
      historical: {
        range: "From 2017 to 2024",
        items: [
          {
            number: 11,
            label: "top scorers in Specialist Maths",
          },
          {
            number: "240+",
            title: "Over",
            label: "students with raw score 40+ (Top 9% of State cohort)",
          },
          {
            number: "120+",
            title: "Over",
            label: "students with raw score 45+ (Top 2% of State cohort)",
          },
          {
            number: "24%",
            label: "achieved raw score 45+",
          },
          {
            number: "37%",
            label: "achieved raw score 40+",
          },
        ],
        extraDescription:
          "The average raw score is 38, and the average scaled score is 50.2—a testament to our teaching excellence.",
      },
    },
  },
  courseDescription: {
    title: "Course Description",
    subtitle:
      "A strong head start for VCE Methods and Specialist Maths — build a solid foundation, get ahead, and secure a place in top-performing classes.",
    paragraph:
      "Y10 Pre-VCE Maths Advance is Austin Education’s exclusive preparatory course designed for students planning to take both VCE Mathematical Methods and Specialist Mathematics. The program thoroughly covers key and challenging Year 10 content while introducing key Year 11 concepts, laying a strong foundation for future success in VCE mathematics.This course also serves as a key entry pathway to Austin’s Year 11 Top Maths classes. Student performance will be an important consideration for placement.",
  },
  coreFeatures: {
    sections: [
      {
        title: "Early Preparation for a Smooth VCE Transition",
        list: [
          "Build a strong foundation in core topics and smooth transitions tiling towards Mathematical Methods and Specialist Maths Unit 1 and 2, including advanced algebra, functions and graphs, introductory calculus, probability and statistics, and other extension topics.",
          "Key VCE concepts are introduced ahead of time, allowing students to enter accelerated classes with confidence in Year 11.",
          "This early exposure reduces the steep learning curve in Y11, helping students develop problem-solving strategies and establish long-term academic approaches.",
        ],
      },
      {
        title: "High-Standard Teaching Approach",
        list: [
          "Strong emphasis on mathematical expression and presentation to prevent loss of marks due to formatting issues in VCE exams.",
          "Each lesson follows a clear structure: concept explanation → in-depth examples → comprehensive practice.",
          "All teachers have over 8 years of experience on average and are actively involved in developing original questions and tailored learning materials.",
        ],
      },
      {
        title: "After-Class Support & Practice Training",
        list: [
          "Frequent quizzes, tests, and mock exams conducted throughout the term.",
          "Real-time performance tracking, 1-on-1 catch-up sessions, and personalised progress reports provided.",
          "Mock exam results directly determines class placement, ensuring a structured and rigorous learning pathway.",
        ],
      },
    ],
  },
  whyChooseUs: {
    partB: {
      title: "Building a Strong Foundation: Pre-VCE Maths Advance in Year 10？",
      contents: [
        {
          title:
            "Year 11 Methods and Specialist Maths involve a major jump in difficulty from Year 9–10",
          icon: "book",
          //   image: "/images/y1-y6-1.jpg",
          image: "https://placehold.co/600x400",
        },
        {
          title:
            "Starting Advance in Year 10 builds early understanding of VCE concepts and exam pacing",
          icon: "repeat",
          image: "https://placehold.co/600x400",
        },
        {
          title:
            "Helps students avoid the pressure and steep learning curve of Year 11",
          icon: "check",
          image: "https://placehold.co/600x400",
        },
      ],
    },
    partC: {
      title: "Is This Course Right for You?",
      list: [
        "Students with a solid foundation in mathematics, looking to tackle more advanced content",
        "Those aiming for a 40+ score in VCE Maths Methods and Specialist Maths",
        "Students planning to pursue majors in Business, Engineering, Medicine, Computer Science, etc.",
        "Students intending to sit for scholarship exams or accelerate their learning in advance",
      ],
    },
  },
  resources: {
    packages: [
      { icon: "📝", title: "Weekly group class", desc: "2 hours" },
      { icon: "📘", title: "Austin Education Exclusive Textbooks", desc: "3" },
      { icon: "✍️", title: "Austin Education Exclusive workbooks", desc: "3" },
      { icon: "📊", title: "Structured weekly homework", desc: "2" },
      {
        icon: "📚",
        title: "high-difficulty challenge questions",
        desc: "20+ per week",
      },
      {
        icon: "📚",
        title: "Additional practice tasks provided regularly",
        desc: "as need",
      },
      {
        icon: "📅",
        title: "Based progress tests (for Units 1&2)",
        desc: "4 unit/topic",
      },
      {
        icon: "📖",
        title: "level assessment exams (for Units 1&2)",
        desc: "2 semester",
      },
      { icon: "📖", title: "detailed semester academic reports", desc: "2" },
      { icon: "📖", title: "parent-teacher meetings per year", desc: "2" },
      {
        icon: "📖",
        title: "full-scale Austin mock exams (for Units 3&4)",
        desc: "5",
      },
      {
        icon: "📖",
        title: "Targeted SAC revision sessions",
        desc: "Full access",
      },
      {
        icon: "📖",
        title: "To class video recordings for review",
        desc: "Full access",
      },
      {
        icon: "📖",
        title: "Unlimited Q&A and academic support",
        desc: "Full access",
      },
      {
        icon: "📖",
        title:
          "Dedicated 1-on-1 learning manager for personalised issue resolution",
        desc: "Full access",
      },
      { icon: "📖", title: "Free academic consultation", desc: "Full access" },
    ],
  },
  courseStructure: {
    title: "Course Structure",
    sections: [
      {
        title: "Unit 1-2",
        modules: [
          {
            title: "Introduction to Genres",
            subtitle: "Module 1",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
          {
            title: "Introduction to Genres",
            subtitle: "Module 2",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
          {
            title: "Introduction to Genres",
            subtitle: "Module 3",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
          {
            title: "Introduction to Genres",
            subtitle: "Module 4",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
        ],
      },
      {
        title: "Unit 3-4",
        modules: [
          {
            title: "Introduction to Genres",
            subtitle: "Module 1",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
          {
            title: "Introduction to Genres",
            subtitle: "Module 2",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
          {
            title: "Introduction to Genres",
            subtitle: "Module 3",
            lessons: [
              "lintroducing the Graphic Novel (Nimon ",
              "Reading a Graphic Novel (Nimona ",
              "Introduction to Genre (Nimona) ",
              "Reading Fables (Nimona) ",
              "A odern Fable (The Hobbit) ",
              "The Moral of Animal Farm (The Hobbit ",
              "Reading Fantasy (The Hobbit ",
              "The Hobbit (The Hobbit) ",
              "Topic Test and Miarking & Feedback",
            ],
          },
        ],
      },
    ],
  },
  relatedCourses: [
    {
      title: "VCE",
      subtitle: "Science Unit 1-4",
      slug: "y10-maths-advance",
    },
    {
      title: "VCE",
      subtitle: "Maths Methods  Unit 1-4",
      slug: "y10-maths-advance",
    },
    {
      title: "VCE",
      subtitle: "English Unit 1-4",
      slug: "y10-maths-advance",
    },
  ],

  zh: {
    slug: "y10-maths-advance",
    title: "10年级数学精英班 · VCE衔接",
    heroSection: {
      achievements: {
        title: "VCE数学历史成就",
        currentYear: {
          subtitle: "VCE 中数",
          historical: {
            range: "2017年至2024年",
            items: [
              {
                number: 25,
                label: "中数状元",
              },
              {
                number: "450+",
                title: "超过",
                label: "学生裸分40以上（位列全州前9%）",
              },
              {
                number: "180+",
                title: "超过",
                label: "学生裸分45以上（位列全州前2%）",
              },
              {
                number: "28%",
                label: "学生裸分45以上",
              },
              {
                number: "62%",
                label: "学生裸分40以上",
              },
            ],
            extraDescription: "平均下来，每年中数裸分均分42（加分后48）。",
          },
          subtitle: "VCE 高数",
          historical: {
            range: "2017年至2024年",
            items: [
              {
                number: 11,
                label: "中数状元",
              },
              {
                number: "240+",
                title: "超过",
                label: "学生裸分40以上（位列全州前9%）",
              },
              {
                number: "120+",
                title: "超过",
                label: "学生裸分45以上（位列全州前2%）",
              },
              {
                number: "24%",
                label: "学生裸分45以上",
              },
              {
                number: "37%",
                label: "学生裸分40以上",
              },
            ],
            extraDescription: "平均下来，每年高数裸分均分38（加分后50.2）。",
          },
        },
      },
      courseDescription: {
        title: "Course Description",
        subtitle: "VCE中高数预科 · 打基础 · 拉开差距 · 冲进高分快班！",
        paragraph:
          "10年级数学精英班是澳升独家开设的中高数预备课程，专为未来计划学习 VCE 中数+ 高数的学生而设。课程内容深入覆盖10年级关键复杂知识点 + 11年级中高数关键基础，为冲刺VCE高分做好“提前布局”。本课程也是进入澳升11年级中高数Top班的前置课程之一，成绩将作为重要录取依据。",
      },
      coreFeatures: {
        sections: [
          {
            title: "提前布局，衔接VCE",
            list: [
              "掌握中数/高数核心章节基础，保障顺利衔接11年级数学内容（函数与图像/代数/微积分/概率与统计以及其它延申内容）",
              "涉及VCE中高数难点提前铺垫，11年级直接进入快节奏班级",
              "依据考试趋势实时调整课程内容，让学生始终紧跟最新考纲要求",
              "减轻11年级爆炸式难度压力，建立信心，搭建系统解题思维，培养长期学习方法",
            ],
          },
          {
            title: "高标准授课方法",
            list: [
              "强调数学表达格式，确保VCE考试不因格式丢分",
              "每节课结构清晰：知识讲解 → 深度例题 → 综合训练",
              "教师平均经验8年以上，参与编写原创新题与讲义",
            ],
          },
          {
            title: "课后支持与刷题训练",
            list: [
              "高频Weekly Quiz、Test、模考同步进行",
              "学生成绩实时追踪 + 1v1补课安排 + 进度分析报告",
              "模考成绩直接决定升班机制，课程严谨科学",
            ],
          },
        ],
      },
      whyChooseUs: {
        partB: {
          title: "打下坚实基础：为什么从Y10开始进入 Pre-VCE Maths Advance？",
          contents: [
            {
              title: "11年级中高数难度大，内容跨度远超9-10年级",
              icon: "book",
              //   image: "/images/y1-y6-1.jpg",
              image: "https://placehold.co/600x400",
            },
            {
              title: "提前一年进入VCE逻辑，建立深度理解与考试节奏",
              icon: "repeat",
              image: "https://placehold.co/600x400",
            },
            {
              title: "避免11年级“被炸”的高压状况，让学习更从容",
              icon: "check",
              image: "https://placehold.co/600x400",
            },
          ],
        },
        partC: {
          title: "适合人群",
          list: [
            "数学基础扎实、希望挑战更深内容",
            "有意在VCE中高数中冲击40+分",
            "想在未来升读商科、理工、医学、计算机等专业",
            "有计划参加奖学金考试、提前加速的学生",
          ],
        },
      },
      resources: {
        packages: [
          { icon: "📝", title: "每周班课", desc: "2小时" },
          { icon: "📘", title: "澳升独家教材", desc: "3本" },
          { icon: "✍️", title: "澳升独家习题册", desc: "3本" },
          { icon: "📊", title: "每周课后作业", desc: "2小时" },
          { icon: "📚", title: "每周高阶题", desc: "20+" },
          { icon: "📚", title: "不定期充足额外练习", desc: "提供" },
          { icon: "📅", title: "阶段/主题测试（Unit 1&2）", desc: "4 次" },
          { icon: "📖", title: "学期检测考试( Unit 1&2）", desc: "2 次" },
          { icon: "📖", title: "学期报告", desc: "2 次" },
          { icon: "📖", title: "家长会", desc: "2 次" },
          {
            icon: "📖",
            title: "澳升独家全真模拟考试（Unit3&4）",
            desc: "5 次",
          },
          { icon: "📖", title: "SAC专选复习", desc: "提供" },
          { icon: "📖", title: "课程录像", desc: "提供" },
          { icon: "📖", title: "无限的沟通答疑", desc: "提供" },
          { icon: "📖", title: "私人学管一对一解决问题", desc: "提供" },
          { icon: "📖", title: "免费学业咨询", desc: "提供" },
        ],
      },
      courseStructure: {
        title: "Course Structure",
        sections: [
          {
            title: "Unit 1-2",
            modules: [
              {
                title: "Introduction to Genres",
                subtitle: "Module 1",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
              {
                title: "Introduction to Genres",
                subtitle: "Module 2",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
              {
                title: "Introduction to Genres",
                subtitle: "Module 3",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
              {
                title: "Introduction to Genres",
                subtitle: "Module 4",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
            ],
          },
          {
            title: "Unit3-4",
            modules: [
              {
                title: "Introduction to Genres",
                subtitle: "Module 1",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
              {
                title: "Introduction to Genres",
                subtitle: "Module 2",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
              {
                title: "Introduction to Genres",
                subtitle: "Module 3",
                lessons: [
                  "lintroducing the Graphic Novel (Nimon ",
                  "Reading a Graphic Novel (Nimona ",
                  "Introduction to Genre (Nimona) ",
                  "Reading Fables (Nimona) ",
                  "A odern Fable (The Hobbit) ",
                  "The Moral of Animal Farm (The Hobbit ",
                  "Reading Fantasy (The Hobbit ",
                  "The Hobbit (The Hobbit) ",
                  "Topic Test and Miarking & Feedback",
                ],
              },
            ],
          },
        ],
      },
      relatedCourses: [
        {
          title: "VCE",
          subtitle: "Science Unit 1-4",
          slug: "y10-maths-advance",
        },
        {
          title: "VCE",
          subtitle: "Maths Methods Unit 1-4",
          slug: "y10-maths-advance",
        },
        {
          title: "VCE",
          subtitle: "English Unit 1-4",
          slug: "y10-maths-advance",
        },
      ],
    },
  },
};

export default courseData;
