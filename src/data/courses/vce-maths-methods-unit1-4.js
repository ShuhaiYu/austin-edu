import { list } from "postcss";

const courseData = {
  en: {
    slug: "vce-maths-methods-unit1-4",
    title: "VCE Mathematical Methods Unit 1-4",
    heroSection: {
      achievements: {
        title: "Past Academic Achievements",
        currentYear: {
          subtitle:
            "In the 2024 VCE, Austin’s Maths Methods achieved outstanding results",
          year: "2024",
          items: [
            {
              number: 30,
              label: "of students achieved",
              subtitle: "a raw score of 45+",
            },
            {
              number: "80",
              label: "of students achieved",
              subtitle: "a raw score of 40+",
            },
          ],
        },
        historical: {
          range:"From 2023 to 2024",
          item:[
              {
              number: 2023,
              label: "out of 17 Chinese-background Premiers in Victoria",
              subtitle:"5 were from Austin.",
              },
              {
              number: 2024,
              label: "out of 14 Chinese-background Premiers in Victoria",
              subtitle:"7 were from Austin.",
              },
             ],
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
            
            },{
              number: "28%",
              label: "achieved raw score 45+",
            },
            {
              number: "62%",
              label: "achieved raw score 40+",
            },
          ],
                      extraDescription:"On average, our students achieve a raw score of 42, with a scaled score of 48—far above the state average.",

        },
      },
      schoolLogos: [
        "Scotch College",
        "Camberwell Grammar School",
        "Presbyterian Ladies' College",
        "Melbourne Grammar",
        "Trinity Grammar",
        "Caulfield Grammar",
        "Yarra Valley Grammar",
        "Wesley College",
        "Korowa Anglican Girls' School",
        "Methodist Ladies' College",
        "Kingswood College",
        "Lauriston Girls' School",
        "Ruyton Girls' School",
        "Melbourne High School",
        "Nossal High School",
        "Balwyn High School",
        "McKinnon Secondary College",
        "Camberwell High School",
        "Mentone Grammar",
        "Melbourne Girls Grammar",
        "Carey Baptist Grammar School",
        "Fintona Girls' School",
        "Brighton Grammar",
        "East Doncaster Secondary College",
        "Glen Waverley Secondary College",
        "Haileybury",
        "Waverley Christian College",
        "Viewbank College",
        "Vermont Secondary College",
      ],
      extraDescription:"In the past years, numerous top-ranking students who selected Austin Education for their learning have achieved Rank 1, 2, 3, or Top 5% in their prestigious and high-performing day schools, including:",
    },
    coreFeatures: {
      sections: [
        {
          title:
            "Well-Structured Curriculum with Optimal Pacing",
          list: [
            "Designed with a goal-oriented approach, ensuring a structured and effective learning rhythm.",
            "Focuses on key VCE exam topics, allocating more time to critical areas for maximum efficiency.",
            "Adapts dynamically to exam trends, keeping students aligned with the latest syllabus requirements.",
            "Optimized SAC-focused teaching strategy—for instance, in Unit 1/2, we prioritize content relevant to the first SAC in Unit 3/4, giving students a strong start.",
          ],
        },
        {
          title:
            "Efficient Teaching Methods for Maximum Improvement",
          list: [
            "Strong emphasis on proper mathematical working, setting out and efficient use of CAS technologies, intimately aligned with VCE exam marking criteria to prevent unnecessary mark losses and to consolidate good scores.",
            "More effective instruction compared to day schools—topics that take 3-4 hours in school are thoroughly covered in just 45 minutes with us.",
            "Designed for high-achieving students, with effective, fast-paced and intensive content delivery—our 2-hour session covers the equivalent of two weeks of school material.",
          ],
        },
        {
          title:
            "Optimized Lesson Structure for Maximum Learning Efficiency",
          list: [
            "Each class is strategically divided: 30% for core concepts, 40% for classic examples, and 30% for advanced problem-solving, ensuring a perfect balance of theory and practice.",
            "Regular quizzes, in-class tests, and online assessments provide continuous feedback, allowing students to identify weaknesses early.",
            "Personalized 1-on-1 tutoring available to address specific weak areas, ensuring comprehensive mastery of key topics.",
          ],
        },
        {
          title:
            "Systematic Exam Preparation for Stronger Performance",
          list: [
            "Term Assessments: Conducted periodically to reinforce learning and track student progress.",
            "Mock Exams: Austin Education was the first institution in Victoria to introduce a structured mock exam system, offering:",
                "High frequency (April, July, and September) and significantly more practice compared to other institutions.",
                "Fully original mock exam papers, some of which are even used by elite schools like Melbourne High.",
                "Expert-designed difficulty levels, ensuring students practice with questions that closely resemble actual VCE and SAC exams.",
          ],
        },
        {
          title:
            " Exclusive, High-Quality Study Materials",
          list: [
            "Developed by a top-tier research team, our study materials are significantly more comprehensive and detailed than those found in schools or other institutions.",
            "Beyond classroom use, these materials serve as valuable resources for independent study and exam preparation.",
          ],
        },
      ],
    },
    resources: {
      packages: [
        { icon: "📝", title: "Weekly group class", desc: "2 hours" },
        { icon: "📘", title: "Austin Education Exclusive Textbooks", desc: "3" },
        { icon: "✍️", title: "Austin Education Exclusive workbooks", desc: "3" },
        { icon: "📊", title: "Structured weekly homework", desc: "2" },
        { icon: "📚", title: "high-difficulty challenge questions", desc: "20+ per week" },
        { icon: "📚", title: "Additional practice tasks provided regularly", desc: "as need" },
        { icon: "📅", title: "Based progress tests (for Units 1&2)", desc: "4 unit/topic" },
        { icon: "📖", title: "level assessment exams (for Units 1&2)", desc: "2 semester" },
        { icon: "📖", title: "detailed semester academic reports", desc: "2" },
        { icon: "📖", title: "parent-teacher meetings per year", desc: "2" },
        { icon: "📖", title: "full-scale Austin mock exams (for Units 3&4)", desc: "5" },
        { icon: "📖", title: "Targeted SAC revision sessions", desc: "Full access" },
        { icon: "📖", title: "To class video recordings for review", desc: "Full access" },
        { icon: "📖", title: "Unlimited Q&A and academic support", desc: "Full access" },
        { icon: "📖", title: "Dedicated 1-on-1 learning manager for personalised issue resolution", desc: "Full access" },
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
        subtitle: "Specialist Maths Unit 1-4",
        slug: "vce-maths-methods-unit1-4",
      },
      {
        title: "VCE",
        subtitle: "Specialist Mathematics Unit 1-4",
        slug: "vce-maths-methods-unit1-4",
      },
      {
        title: "VCE",
        subtitle: "Science Unit 1-4",
        slug: "vce-maths-methods-unit1-4",
      },
    ],
  },
  zh: {
    slug: "vce-maths-methods-unit1-4",
    title: "VCE 中数 Unit 1-4",
    heroSection: {
      achievements: {
        title: "课程历史成就",
        currentYear: {
          subtitle:
            "在2024年VCE考试中，澳升教育的中数课程取得了卓越成绩",
          year: "2024",
          items: [
            { number: 30, label: "学生达到", subtitle: "裸分45以上" },
            { number: "80", label: "学生达到", subtitle: "裸分40以上" },
          ],
        },
        historical:{
            range:"2023年至2024年",
            item:[
                {
                number:2023,
                label:"有17位华人中数状元",
                subtitle:"其中5位来自澳升",
                },
                {
                number:2024,
                label:"有14位华人中数状元",
                subtitle:"其中7位来自澳升",
                },
            ],
        },
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
                      extraDescription:"平均下来，每年中数裸分均分42（加分后48）。"

        },
      },
      schoolLogos: [
        "Scotch College",
        "Camberwell Grammar School",
        "Presbyterian Ladies' College",
        "Melbourne Grammar",
        "Trinity Grammar",
        "Caulfield Grammar",
        "Yarra Valley Grammar",
        "Wesley College",
        "Korowa Anglican Girls' School",
        "Methodist Ladies' College",
        "Kingswood College",
        "Lauriston Girls' School",
        "Ruyton Girls' School",
        "Melbourne High School",
        "Nossal High School",
        "Balwyn High School",
        "McKinnon Secondary College",
        "Camberwell High School",
        "Mentone Grammar",
        "Melbourne Girls Grammar",
        "Carey Baptist Grammar School",
        "Fintona Girls' School",
        "Brighton Grammar",
        "East Doncaster Secondary College",
        "Glen Waverley Secondary College",
        "Haileybury",
        "Waverley Christian College",
        "Viewbank College",
        "Vermont Secondary College",
      ],
      extraDescription:"历年许多在Austin学习的学生在就读的日校中名列前茅，拿到年级第1、第2、第3，或进入年级前5%，这些日校包括：",
    },
    coreFeatures: {
      sections: [
        {
          title: "课程设置科学，节奏精准",
          list: [
            "以终为始，目标导向，课程节奏经过精心设计，确保高效学习",
            "针对VCE考试重难点，合理分配课时，强化高考核心考点，省时省力",
            "依据考试趋势实时调整课程内容，让学生始终紧跟最新考纲要求",
            "以SAC为阶段目标优化教学策略，例如Unit 1/2阶段重点聚焦3/4第一个SAC，使学生提前进入备考状态，首战告捷",
          ],
        },
        {
          title: "授课方式高效，精准提升",
          list: [
            "高标准的数学解题格式训练，符合VCE评分要求，确保学生在考试中不丢不必要的分",
            "教学方式远超日校，45分钟即可高效讲解新知识点，并结合经典例题加深理解",
            "课程节奏更适应优秀学生，授课内容密度高，2小时课程相当于日校两周的学习量",
          ],
        },
        {
          title:
            "课堂安排合理，学习效率最大化",
          list: [
            "课堂时间精细拆分：30% 讲解核心知识，40% 经典例题，30% 拔高训练，实现“讲练结合”",
            "通过高频测验、课堂Test、在线Quiz，实时评估学生的学习成果，精准查漏补缺",
            "针对薄弱点提供个性化1on1辅导，确保学生在关键知识点上得到巩固",
          ],
        },
        {
          title:
            "系统化考试安排，强化应试能力",
          list: [
            "学期考试：定期进行阶段性检测，督促学生复习，确保稳步进步",
            "模考体系：维州最早开展模考的机构，考试安排科学，评分精准，帮助学生明确定位",
              "频次高（4月/7月/9月），总训练量远超市面上众多机构及日校。",
              "原创模考试题，涵盖高考必考点，部分顶尖公私校学校曾直接采用我们的模考材料",
              "经验丰富的教学团队精心设计考试难度，使训练最贴近VCE高考真题和SAC标准",
          ],
        },
        {
          title:
            " 独家讲义，全面细致",
          list: [
            "讲义远超市面水平，内容覆盖广、解析深入，由顶级教研团队精心编写",
            "讲义不仅助力课堂教学，还为学生提供高质量的课后复习资料，提高备考效率",
          ],
        },
      ],
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
        { icon: "📖", title: "澳升独家全真模拟考试（Unit3&4）", desc: "5 次" },
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
        subtitle: "English Unit 1-4",
        slug: "vce-maths-methods-unit1-4",
      },
      {
        title: "VCE",
        subtitle: "Specialist Mathematics Unit 1-4",
        slug: "vce-maths-methods-unit1-4",
      },
      {
        title: "VCE",
        subtitle: "Science Unit 1-4",
        slug: "vce-maths-methods-unit1-4",
      },
    ],
  },
};

export default courseData;
