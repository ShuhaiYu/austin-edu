import { list } from "postcss";

const courseData = {
  en: {
    slug: "y7-9-maths",
    title: "Year 7-9 Maths Enrichment",
    courseDescription: {
      title:
        "Austin’s Junior High School Mathematics Program Highlights (Y7-9)",
      subtitle: "Core Advantages of the Program",
    },
    coreFeatures: {
      sections: [
        {
          title: "Progressive Curriculum, Early Transition to VCE Difficulty",
          list: [
            "The Y7-9 mathematics curriculum progressively aligns with VCE-level difficulty, ensuring that students have a solid mathematical foundation before entering Y10 and can easily handle high school courses.",
            "The depth of knowledge is higher than that of regular schools, focusing not only on consolidating the basics but also on cultivating advanced thinking. This approach enhances students’ competitiveness in math competitions, scholarship exams, and other academic challenges.",
          ],
        },
        {
          title:
            "Strengthen Problem-Solving Logic and Enhance Mathematical Thinking",
          list: [
            "The curriculum includes comprehensive exercises and math competition training, focusing on developing problem-solving thinking rather than just “solving problems.”",
            "For example, in “Sequences & Algebra Applications,” we go beyond basic calculations to include arithmetic and geometric sequences, mixed operations, and word problems, helping students grasp the underlying mathematical logic.",
          ],
        },
        {
          title: "Exam Techniques and Structured Answering Training",
          list: [
            "VCE Mathematics places strong emphasis on clear, structured solutions with complete working steps. At Austin, we begin cultivating proper answering habits from Years 7–9 to ensure students avoid losing marks unnecessarily in future exams.",
            "Many students with strong mathematical skills from overseas struggle initially in Australia—not because of their thinking ability, but because their answer formats do not meet exam standards. Austin’s targeted training helps students adapt to the Australian assessment system, ensuring steady and reliable improvement in their scores.",
          ],
        },
        {
          title:
            "Dual Strengthening in Mathematics and English for Comprehensive Academic Growth",
          list: [
            "Mathematics: Incorporates Olympiad-style thinking training from Years 7–9, helping students build broader and deeper mathematical understanding.",
            "English: Goes beyond basic language skills by developing academic English proficiency, enabling students to clearly articulate mathematical reasoning and problem-solving processes in English",
          ],
        },
        {
          title:
            "Multiple Class Types + Expert Academic Team = Maximum Learning Efficiency",
          list: [
            "Our highly experienced academic team — including senior day school teachers and official VCAA examiners — collaboratively design all course content to ensure students are learning the most accurate, effective, and exam-relevant material.",
            "We offer a range of class types: large, medium, and small classes (fewer than 8 students) to provide personalised guidance and targeted support for each student's specific areas of improvement.",
          ],
        },
      ],
    },
  },
  whyChooseUs: {
    partA: {
      title: "Why Choose Austin’s Maths Program?",
      image1: "https://placehold.co/400x600?text=Image+1",
      image2: "https://placehold.co/400x1000?text=Image+2",
      content: [
        {
          title: "1. Bridging the Gap Left by Day School",
          paragraph:
            "Australian schools often adopt a “consolidation-based” approach—slow-paced and exam-light—while VCE and scholarship exams are highly competitive. Waiting until high school to catch up can leave students behind.",
        },
        {
          title: "2. Foundation + Extension = Real Mathematical Thinking",
          paragraph:
            "Austin’s courses strengthen core skills while stretching student potential. We focus not only on getting the right answer, but on developing true mathematical reasoning.",
        },
        {
          title: "3. Aligned Yet Advanced",
          paragraph:
            "Our curriculum aligns seamlessly with school content but moves approximately 20% ahead, keeping students confidently ahead of their peers.",
        },
        {
          title: "4. Structured, Exam-Ready Solutions",
          paragraph:
            "We train students from an early stage to use clear, formal working and structured responses—building the habits needed for top VCE scores.",
        },
        {
          title: "5. Tailored Teaching, Targeted Growth",
          paragraph:
            "With multiple class types and personalised guidance, we ensure the most efficient learning for every student. No matter their starting point, every learner will see real, measurable progress.",
        },
      ],
    },
  },
  resources: {
    packages: [
      { icon: "📘", title: "Exclusive Textbooks", desc: "4 volumes" },
      { icon: "📝", title: "Weekly Homework", desc: "6-8 hours" },
      { icon: "✍️", title: "Reviewed Essays", desc: "34/term" },
      { icon: "📊", title: "Mock Exams", desc: "Full-length x12" },
      { icon: "📚", title: "Recorded Lessons", desc: "Full access" },
      { icon: "🗣️", title: "1-on-1 Consultations", desc: "Full access" },
      { icon: "📅", title: "Parent-Teacher Meetings", desc: "Full access" },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      {
        icon: "📖",
        title: "Recorded Lessons Library",
        desc: "Full access",
      },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      {
        icon: "📖",
        title: "Recorded Lessons Library",
        desc: "Full access",
      },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      {
        icon: "📖",
        title: "Recorded Lessons Library",
        desc: "Full access",
      },
      { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
      {
        icon: "📖",
        title: "Recorded Lessons Library",
        desc: "Full access",
      },
    ],
  },
  courseStructure: {
    title: "Course Structure",
    sections: [
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
  relatedCourses: [
    {
      title: "VCE",
      subtitle: "English Unit 1-4",
      slug: "y7-9-maths",
    },
    {
      title: "VCE",
      subtitle: "Specialist Maths Unit 1-4",
      slug: "y7-9-maths",
    },
    {
      title: "VCE",
      subtitle: "Science Unit 1-4",
      slug: "y7-9-maths",
    },
  ],

  zh: {
    slug: "y7-9-maths",
    title: "7-9年级数学培优课程",
    courseDescription: {
      title: "澳升初中数学课程亮点（Y7-9）",
      subtitle: "课程核心优势",
    },
    coreFeatures: {
      sections: [
        {
          title: "课程进阶，提前衔接VCE难度",
          list: [
            "7-9年级的数学课程会逐步向VCE靠拢，确保学生进入10年级前已具备扎实的数学基础，轻松应对高中课程",
            "知识深度比日校更高，不仅仅是巩固基础，而是培养高阶思维，让学生在数学竞赛、奖学金考试等方面更具竞争力",
          ],
        },
        {
          title: "强化解题逻辑，提高数学思维能力",
          list: [
            "每个知识点都会深入剖析，结合不同题型，让学生学会从多个角度解题",
            "综合题 & 奥数训练，培养学生解题思维，而不仅仅是“做会题目”",
            "   例如：“数列 & 代数应用”不仅仅教基本计算，还结合等差等比数列、混合运算、应用题，帮助学生理解数学逻辑",
          ],
        },
        {
          title: "应试技巧 & 规范化格式训练",
          list: [
            "VCE数学要求解题格式清晰，步骤完整，澳升从7-9年级阶段开始培养学生的答题习惯，让他们在未来考试中不丢冤枉分",
            "许多国内数学好的学生来到澳洲，虽然数学思维没问题，但格式不符合要求，考试成绩却不理想。澳升的训练能帮助学生适应澳洲考试体系，确保分数稳定提升",
          ],
        },
        {
          title: "数学 + 英语双向强化，全面提升学术能力",
          list: [
            "数学：7-9年级阶段加入奥数思维训练，帮助学生构建更广泛的数学认知",
            "英语：不仅学习基础语言能力，还训练学术英语表达，让学生能够用英语清晰解释数学推理过程",
          ],
        },
        {
          title: "多种班型 + 专业教研支持，确保最高效学习",
          list: [
            "教研团队实力雄厚，由日校资深教师 & 维州考官共同研发教学方案，确保学生学到的是最有效、最正确的内容",
            "多种班型：开设大班、中班和8人以下小班，个性化指导，帮助每个学生针对自身薄弱点进行提升",
          ],
        },
      ],
    },
    whyChooseUs: {
      partA: {
        title: "为什么选择澳升数学课程？",
        image1: "https://placehold.co/400x600?text=Image+1",
        image2: "https://placehold.co/400x1000?text=Image+2",
        content: [
          {
            title: "1. 弥补日校教学的空缺",
            paragraph:
              "澳洲日校普遍采用“巩固型”教学模式——进度慢、考试少，而VCE和奖学金考试竞争激烈，等到高中才开始发力，往往已经落后一步。",
          },
          {
            title: "2. 基础 + 拓展 = 真正的数学思维",
            paragraph:
              "澳升的课程不仅夯实学生的核心能力，更注重激发潜力。我们关注的不只是“算对答案”，更是培养学生真正的数学逻辑与思维能力。",
          },
          {
            title: "3. 同步又超前",
            paragraph:
              "课程紧扣日校大纲，同时整体进度超前约20%，帮助学生在日常学习中始终保持领先。",
          },
          {
            title: "4. 规范表达，直达高分",
            paragraph:
              "从早期开始训练学生使用清晰、规范的解题步骤与结构化表达，建立优良习惯，为将来的VCE考试高分打下坚实基础。",
          },
          {
            title: "5. 因材施教，精准提升",
            paragraph:
              "多种班型，个性化指导，确保最高效学习，无论基础如何，让每一位学生都能看到真实的进步。",
          },
        ],
      },
    },
    resources: {
      packages: [
        { icon: "📘", title: "Exclusive Textbooks", desc: "4 volumes" },
        { icon: "📝", title: "Weekly Homework", desc: "6-8 hours" },
        { icon: "✍️", title: "Reviewed Essays", desc: "34/term" },
        { icon: "📊", title: "Mock Exams", desc: "Full-length x12" },
        { icon: "📚", title: "Recorded Lessons", desc: "Full access" },
        {
          icon: "🗣️",
          title: "1-on-1 Consultations",
          desc: "Full access",
        },
        {
          icon: "📅",
          title: "Parent-Teacher Meetings",
          desc: "Full access",
        },
        { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
        {
          icon: "📖",
          title: "Recorded Lessons Library",
          desc: "Full access",
        },
        { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
        {
          icon: "📖",
          title: "Recorded Lessons Library",
          desc: "Full access",
        },
        { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
        {
          icon: "📖",
          title: "Recorded Lessons Library",
          desc: "Full access",
        },
        { icon: "📖", title: "SAC Revision Kits", desc: "Full access" },
        {
          icon: "📖",
          title: "Recorded Lessons Library",
          desc: "Full access",
        },
      ],
    },
    courseStructure: {
      title: "Course Structure",
      sections: [
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
    relatedCourses: [
      {
        title: "VCE",
        subtitle: "English Unit 1-4",
        slug: "y7-9-maths",
      },
      {
        title: "VCE",
        subtitle: "Specialist Maths Unit 1-4",
        slug: "y7-9-maths",
      },
      {
        title: "VCE",
        subtitle: "Science Unit 1-4",
        slug: "y7-9-maths",
      },
    ],
  },
};

export default courseData;
