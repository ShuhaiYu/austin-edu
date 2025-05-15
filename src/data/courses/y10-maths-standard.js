import { list } from "postcss";

const courseData = {
  en: {
    slug: "y10-maths-standard",
    title: "Y10 Pre-VCE Maths Standard",
    courseDescription: {
      title: "Course Description",
      subtitle:
        "Stay in Sync with School Progress, Build a Solid Foundation, and Get Ready for the VCE Challenge!",
      paragraph:
        "Y10 Pre-VCE Maths Standard is designed for students currently studying Year 10 Mathematics at school who wish to accelerate their progress, build a stronger foundation, and aim for top performance in school assessments. The course progresses approximately two terms ahead of public schools and one term ahead of most private schools, aligning with accelerated classes in top-tier private schools. What makes Austin different is our strong exam-oriented approach, supported by more intensive practice and deeper concept delivery—helping students truly strengthen their understanding and analytical ability. To ensure a smooth transition into VCE, Term 4 includes early exposure to key General Maths Unit 1 content, laying the groundwork for high VCE performance from Year 10.",
    },
    whyChooseUs: {
      partA: {
        title: "Why Choose Austin’s Y10 Pre-VCE Maths Standard ?",
        image1: "https://placehold.co/400x600?text=Image+1",
        image2: "https://placehold.co/400x1000?text=Image+2",
        content: [
          {
            title: "1. Victoria’s Leading Teaching & Curriculum Team",
            paragraph:
              "All classes are taught by experienced VCE mathematics teachers who help students develop accurate thinking and structured solution habits from an early stage. \nLesson pacing is strategically planned to align with school key assessment points. \nIn 2024, our average raw scores: Maths Methods 42, Specialist Maths  39—among the best in Victoria",
          },
          {
            title: "2. Systematic Practice + Stage-Based Assessments",
            paragraph:
              "Every learning phase includes quizzes and feedback checkpoints. \nHighly effective for identifying and filling knowledge gaps. \nRegular mock exams and semester assessments reinforce a VCE-aligned thinking pattern",
          },
          {
            title: "3. High-Efficiency Class Structure",
            paragraph:
              "Each lesson is structured with: 30% concept instruction + 40% worked examples + 30% integrated problem sets. \nOur lesson delivery is significantly more efficient than school: 2 hours of class = 2 weeks of school content",
          },
        ],
      },
      partC: {
        title: "Ideal For Students Who:",
        list: [
          "Are currently performing at a mid-to-high level in school math and want to go further",
          "Plan to study VCE Maths Methods and General Maths in senior years",
          "Need a structured, efficient, and reliable transition program between Year 10 and VCE",
          "Want to strengthen study habits and experience the pace of VCE before entering senior years",
        ],
      },
      partD: {
        title: "Learning Objectives",
        table: {
          headers: ["Target", "Description"],
          rows: [
            [
              "1",
              "Complete the Year 10 curriculum ahead of schedule and enter a VCE-ready learning state",
            ],
            [
              "2",
              "Establish a solid framework in core mathematical topics (algebra, geometry, functions, probability, etc.)",
            ],
            [
              "3",
              "Strengthen formula memorization and build strategic problem-type thinking",
            ],
            ["4", "Prepare efficiently for school-based assessments"],
            [
              "5",
              "Develop structured problem-solving skills and logical expression formats",
            ],
          ],
        },
      },
    },
    resources: {
      packages: [
        { icon: "📝", title: "Weekly group class", desc: "2 hours" },
        {
          icon: "📘",
          title: "Austin Education Exclusive Textbooks",
          desc: "1",
        },
        {
          icon: "✍️",
          title: "Austin Education Exclusive workbooks",
          desc: "1",
        },
        { icon: "📊", title: "Weekly Homework", desc: "1 hours" },
        { icon: "📚", title: "Stage or topic assessments", desc: "3" },
        { icon: "📚", title: "Semester assessment exams", desc: "2" },
        { icon: "📅", title: "Exam reports", desc: "4" },
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
        {
          icon: "📖",
          title: "Free academic consultation",
          desc: "Full access",
        },
      ],
    },
    courseStructure: {
      title: "Course Structure",
      sections: [
        {
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
      ],
    },
    relatedCourses: [
      {
        title: "VCE",
        subtitle: "Science Unit 1-4",
        slug: "y10-maths-standard",
      },
      {
        title: "VCE",
        subtitle: "Maths Methods  Unit 1-4",
        slug: "y10-maths-standard",
      },
      {
        title: "VCE",
        subtitle: "English Unit 1-4",
        slug: "y10-maths-standard",
      },
    ],
  },
  zh: {
    slug: "y10-maths-standard",
    title: "10年级数学进阶班 · VCE衔接",
    courseDescription: {
      title: "课程描述",
      subtitle: "同步加速日校进度，扎实基础，迎接VCE挑战！",
      paragraph:
        "10年级数学进阶班适合正在学习日校10年级 数学，希望加快进度、打牢基础、冲刺优异校内成绩的学生。课程进度比一般公校快约 2 个学期，比多数私校快 1 个学期，与顶尖私校的加速班同步。但不同的是，澳升 更注重考试导向，课程配套的练习量更充足、知识讲解更深入，真正帮助学生提升理解力与解题能力。 此外，为帮助学生提前衔接 VCE，在第四学期将率先讲授部分 低数Unit 1 内容，在10年级阶段就打下 VCE 的基础，实现无缝过渡，为后续冲刺高分提前布局。",
    },
    whyChooseUs: {
      partA: {
        title: "为什么选择澳升的10年级数学进阶班？",
        image1: "https://placehold.co/400x600?text=Image+1",
        image2: "https://placehold.co/400x1000?text=Image+2",
        content: [
          {
            title: "1. 全维州最强教研团队",
            paragraph:
              "所有班级均由长期教授 VCE 数学的教师团队授课，帮助学生提前建立正确的解题思维与答题规范 \n教学节奏科学规划，紧贴重点考点与校内评分点 \n2024年中数平均分42分，高数39分，业内领先",
          },
          {
            title: "2. 系统练习与阶段测评",
            paragraph:
              "每个阶段配有测验与反馈机制 \n查漏补缺效率极高，确保知识真正掌握 \n定期模拟考试+学期结业考，紧密连接VCE思维模式",
          },
          {
            title: "3. 高效教学节奏",
            paragraph:
              "每节课讲练结合：30%知识讲解 + 40%经典例题 + 30%综合训练 \n内容传授远优于日校效率，两小时内容等于日校 2 周进度",
          },
        ],
      },
      partC: {
        title: "适合人群",
        list: [
          "日校数学中上水平，想进一步提高",
          "计划未来学习VCE中数和低数",
          "需要一个扎实、高效、稳健的数学过渡阶段",
          "希望获得VCE前的学习节奏锻炼与学习方法启发的学生",
        ],
      },
      partD: {
        title: "教学目标",
        table: {
          headers: ["目标", "描述"],
          rows: [
            ["1", "提前完成10年级大纲，进入VCE预热状态"],
            ["2", "建立核心数学知识框架（代数、几何、函数、几率等）"],
            ["3", "强化公式记忆与题型分类思维"],
            ["4", "高效备战校内考试"],
            ["5", "培养科学的解题步骤与逻辑表达格式"],
          ],
        },
      },
    },
    resources: {
      packages: [
        { icon: "📝", title: "每周班课", desc: "2小时" },
        { icon: "📘", title: "澳升独家教材", desc: "1本" },
        { icon: "✍️", title: "澳升独家习题册", desc: "1本" },
        { icon: "📊", title: "每周课后作业", desc: "1小时" },
        { icon: "📚", title: "阶段性或主题性测试", desc: "3次" },
        { icon: "📖", title: "学期检测考试", desc: "2 次" },
        { icon: "📖", title: "考试报告", desc: "2 次" },
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
        slug: "y10-maths-standard",
      },
      {
        title: "VCE",
        subtitle: "Maths Methods Unit 1-4",
        slug: "y10-maths-standard",
      },
      {
        title: "VCE",
        subtitle: "English Unit 1-4",
        slug: "y10-maths-standard",
      },
    ],
  },
};

export default courseData;
