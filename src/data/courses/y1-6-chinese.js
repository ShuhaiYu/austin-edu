import { list } from "postcss";

const courseData = {
  en: {
    slug: "y1-6-chinese",
    title: "Year 1-6 Chinese",
    courseDescription:{
        title:"Austin Y1–6 Chinese Program | Unique Highlights",
        paragraph:"Austin’s Y1–6 Chinese program combines systematic learning with engaging, interactive classrooms, helping children learn through play and play through learning. \nThe curriculum develops skills in listening, speaking, reading, writing, and cultural understanding through a dynamic blend of Game-Based Learning, Interactive Learning, and Kinesthetic Learning. \nEvery class is lively and immersive, allowing students to explore the charm of traditional Chinese culture while building genuine interest and confidence in the language!",
    },
    whyChooseUs: {
      partA: {
        title: "Exclusive Highlights | Why Choose Austin’s Y1–6 Chinese Program?",
        image1: "https://placehold.co/400x600?text=Image+1",
        image2: "https://placehold.co/400x1000?text=Image+2",
        content: [
          {
            title: "1. Tiered, Progressive Curriculum for Steady Improvement",
            paragraph:
              "Structured into Foundation → Intermediate → Advanced levels, the course is precisely tailored to suit different stages of learning, gradually building listening, speaking, reading, and writing skills. \n Utilises a spiral progression approach, with key concepts regularly revisited to ensure deep understanding and long-term retention. \n  Aligned with the expectations of VCE Chinese, IB Chinese, and HSK, laying a strong foundation for advanced Chinese studies in later years.",
          },
          {
            title: "2. “High-Frequency Input + Efficient Output” Language Acquisition Method",
            paragraph:
              "Comprehensive development of listening, speaking, reading, and writing—making Chinese a truly usable second language. \nDiverse reading materials including picture books, stories, science texts, and current affairs to build vocabulary and strengthen reading comprehension.\nStructured writing progression: from picture-based sentence building → sentence combinations → full paragraph writing—steadily improving writing skills step by step.",
          },
          {
            title: "3. Exclusive Learning Resources for Efficient Progress",
            paragraph:
              "Custom-designed textbooks and a vast question bank make after-class revision easier and more effective.\nSmart error-tracking system accurately logs common mistakes, allowing targeted improvement.\nRegular assessments with detailed feedback reports help track progress clearly and identify areas for improvement.",
          },
        ],
      },
        partB: {
        title: "Fun & Interactive Classrooms | Bring Chinese Learning to Life!",
        description:
          "A dynamic blend of Game-Based, Interactive, and Kinesthetic Learning gets students truly moving and engaged—making Chinese fun, active, and memorable!",
        contents: [
          {
            title: "Challenge-Based Learning",
            description:
              "“Character Bomb”: Say the correct character before the countdown ends—or the “bomb” explodes! A fun way to build quick recall. \n“Frozen Vegetables”: A time-based memory challenge to recall as many characters as possible—boosts urgency and retention.\n“Rhythm Master”: Chant tones to music rhythmically—an enjoyable way to internalize the four tones of Mandarin.",
            icon: "book",
            //   image: "/images/y1-y6-1.jpg",
            image: "https://placehold.co/600x400",
          },
          {
            title: "Experiential Learning",
            description:
              "“Simulated Restaurant”: Students take on roles as restaurant staff and customers to practice real-life communication in Chinese. \n“Festival Activities”: Experience Chinese cultural festivals in class, with immersive language and cultural learning.",
            icon: "repeat",
            image: "https://placehold.co/600x400",
          },
          {
            title: "Group Learning & Team Collaboration",
            description:
              "“One Stroke at a Time”: Teams take turns writing characters—great for handwriting practice and building collaboration. \n“Character Relay” / “Character Builder” / “Word Train”: Team-based word-building games that grow vocabulary through fun competition.",
            icon: "check",
            image: "https://placehold.co/600x400",
          },
          {
            title: "Kinesthetic Learning",
            description:
              "“My Body Can Write”: Use your head, hands, or feet to “write” characters in the air—strengthens visual memory. \n“Fly Swatter”: Students listen to words and slap the matching image on the screen—enhances listening and word recognition. \n“Character Whack-a-Mole”: Identify and pronounce pinyin as characters pop up—trains reaction speed and phonetic recognition.",
            icon: "test",
            image: "https://placehold.co/600x400",
          },
          {
            title: "Special Activities for Upper Primary (Creative + Social Reasoning)",
            description:
              "“Draw & Guess”: Use imagination to draw characters based on descriptions—builds both creativity and expression. \n“Werewolf Game – Chinese Edition” & “Who’s the Spy – Chinese Version”: Strategic gameplay requiring vocabulary use and verbal reasoning—enhances expressive language and social interaction. \n“Visit the Three Parks” & “I Have, You Don’t”: Festival-themed activity sets based on students’ real-life experiences—deepens cultural understanding through personalized engagement.",
            icon: "communication",
            image: "https://placehold.co/600x400",
          },
        ],
      },
    },
    customCourseFeature: {
      title: "Winning Strategies | How to Make Chinese Learning More Effective for Your Child",
      description: [
       "Levelled Reading Method: 10–15 minutes of reading daily to develop language intuition and comprehension skills.",
       "Efficient Writing Practice: From picture-based writing to short passages, helping children build logical thinking and expressive abilities.",
       "Fun Speaking Activities: Games, debates, and speeches build confidence in speaking Chinese.",
       " Systematic Revision + Smart Error Tracking: Ensures knowledge is truly mastered and prevents “learn-and-forget” issue",
      ],
      images: [
        "https://placehold.co/400x600?text=Image+1",
        "https://placehold.co/400x1000?text=Image+2",
      ],
    },
    customCourseFeature: {
      title: "With Austin Chinese, Your Child’s Language Skills Truly Come Alive!",
      description: [
       "Balanced development in listening, speaking, reading, and writing – confidently handle both exams and daily communication.",
       "A well-structured teaching system that ensures steady progress, building a strong foundation in Chinese from primary school to support future success.",
       " A perfect blend of fun and practicality – helping your child fall in love with learning Chinese!",
      ],
      images: [
        "https://placehold.co/400x600?text=Image+1",
        "https://placehold.co/400x1000?text=Image+2",
      ],
             extraDescription:" For more effective, systematic, and engaging Chinese learning, choose Austin!",

    },
    resources: {
      packages: [
        { icon: "📝", title: "Weekly group class", desc: "1.5 hours" },
        { icon: "📘", title: "Austin Education Exclusive Textbooks", desc: "4" },
        { icon: "✍️", title: "Austin Education Exclusive workbooks", desc: "2" },
        { icon: "✍️", title: "online questions per week", desc: "30 questions" },
        { icon: "📅", title: "Based progress tests", desc: "4 unit/topic" },
        { icon: "📖", title: "level assessment exams", desc: "4 semester" },
        { icon: "📖", title: "detailed semester academic reports", desc: "4" },
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
          title: "year 1",
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
          title: "year 2",
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
        subtitle: "English 1-6",
        slug: "y1-6-chinese",
      },
      {
        title: "VCE",
        subtitle: "Specialist Maths Unit 1-4",
        slug: "y1-6-chinese",
      },
      {
        title: "VCE",
        subtitle: "Science Unit 1-4",
        slug: "y1-6-chinese",
      },
    ],
  },
  zh: {
    slug: "y1-6-chinese",
    title: "1-6年级中文课程",
    courseDescription:{
        title:"澳升 Y1-6 中文课程 | 独家亮点",
        paragraph:"澳升 Y1-6 中文课程以 系统化学习+趣味互动课堂 为核心，让孩子 在玩中学、在学中玩，实现听、说、读、写、文化知识全面提升。通过 游戏化学习（Game-Based Learning）+ 互动化学习（Interactive Learning）+ 动觉学习（Kinesthetic Learning），让每一节中文课都充满活力，感受传统文化魅力，激发孩子的学习兴趣！",
        whyChooseUs: {
      partA: {
        title: "独家亮点 | 为什么选择澳升 Y1-6 中文课程？",
        image1: "https://placehold.co/400x600?text=Image+1",
        image2: "https://placehold.co/400x1000?text=Image+2",
        content: [
          {
            title: "1. 分级进阶课程，确保稳步提升",
            paragraph:
              "基础 → 提升 → 高阶，精准匹配不同阶段，逐步培养听说读写能力 \n采用 “螺旋递进” 教学法，知识点不断复现，确保真正掌握 \n结合 VCE 中文、IB 中文、HSK 等考试要求，提前为高年级中文学习打好基础",
          },
          {
            title: "2. ““高频输入 + 高效输出” 语言习得法",
            paragraph:
              "听说读写四大能力全覆盖，让中文真正成为可用的第二语言 \n丰富阅读材料，涵盖绘本、故事、科普、时事文章，积累词汇、培养阅读理解能力 \n系统性写作训练，从 看图写话 → 句子组合 → 文章表达，循序渐进提升写作能力。",
          },
          {
            title: "3. 独家学习资源，助力高效成长",
            paragraph:
              "专属教材 + 海量练习题库，课后巩固更轻松 \n 智能错题本，精准记录易错点，针对性提高 \n阶段性测试 + 反馈报告，清晰掌握学习进度，查漏补缺。",
          },
        ],
      },
        partB: {
        title: "趣味互动课堂 | 让中文学习真正“活”起来！",
        description:
          "游戏化学习（Game-Based Learning）+ 互动式学习（Interactive Learning）+ 动觉学习（Kinesthetic Learning），让孩子在课堂上 真正动起来、学进去！",
        contents: [
          {
            title: "挑战式学习（Challenge-Based Learning）",
            description:
              "“汉字炸弹”：倒计时内说出对应汉字，否则“炸弹”爆炸，训练快速反应 \n“冻住的蔬菜”：限时挑战，记住最多汉字的获胜，培养紧迫感，提高记忆力 \n“ 节奏大师”：跟着节奏唱歌谣，快乐的活动中轻松掌握四个音调。",
            icon: "book",
            //   image: "/images/y1-y6-1.jpg",
            image: "https://placehold.co/600x400",
          },
          {
            title: "体验式学习（Experiential Learning",
            description:
              "“模拟餐厅”：孩子们扮演店长和顾客，用中文进行点餐、结账，锻炼实际交流能力 \n“节日活动”：课堂中体验中国传统节日活动，沉浸式获取文化知识",
            icon: "repeat",
            image: "https://placehold.co/600x400",
          },
          {
            title: "团队合作学习（Group Learning & Group Cooperation）",
            description:
              "“一人一笔”：小组成员轮流接力写汉字，训练书写规范和团队协作能力 \n“汉字接力/拼汉字/开火车”：队员依次接龙组成汉字，增强词汇量",
            icon: "check",
            image: "https://placehold.co/600x400",
          },
          {
            title: "动觉学习（Kinesthetic Learning）",
            description:
              "“我的身体会写字”：用头、手、脚在空气中写字，加深对汉字的形象记忆 \n“拍苍蝇”：老师说词语，学生抢拍屏幕上的对应图片，提升听觉反应和词汇量 \n“汉字打地鼠”：看到汉字迅速说出拼音，训练反应速度和拼音识别能力",
            icon: "test",
            image: "https://placehold.co/600x400",
          },
          {
            title: "高年级特别活动（社交推理+创造力）",
            description:
              "“你画我猜”：根据描述绘制汉字，提高想象力和表达能力 \n“狼人杀-中文版” & “谁是卧底-汉字版”：推理+词汇运用结合，提高中文表达和社交沟通能力 \n“ 逛三园” & “你有我没有” ：传统节日+庆祝活动匹配结合，允许孩子结合生活经验，感受中国文化",
            icon: "communication",
            image: "https://placehold.co/600x400",
          },
        ],
      },
    },
  },
  customCourseFeature: {
      title: "制胜技巧 | 如何让孩子的中文学习更高效？",
      description: [
       "分级阅读法：每日10-15分钟阅读，培养语感和理解能力",
       "高效写作训练：从看图写话到小短文，训练思维逻辑和表达",
       "趣味口语训练：通过游戏、辩论、演讲等方式，让孩子自信说中文",
       "系统性复习+智能错题整理，确保所学知识真正掌握，避免“学了就忘”",
      ],
      images: [
        "https://placehold.co/400x600?text=Image+1",
        "https://placehold.co/400x1000?text=Image+2",
      ],
    },
    customCourseFeature: {
      title: "澳升中文，让孩子的语言能力真正“活”起来！",
      description: [
       "听说读写全面发展，轻松应对考试 & 生活交流",
       "科学教学体系，稳步提升，从小学打好中文基础，为未来腾飞助力！",
       " 趣味性+实用性结合，让孩子真正爱上中文！",
      ],
      images: [
        "https://placehold.co/400x600?text=Image+1",
        "https://placehold.co/400x1000?text=Image+2",
      ],
             extraDescription:"让中文学习更高效、更系统、更有趣，就来澳升！",

    },
    resources: {
      packages: [
        { icon: "📝", title: "每周班课", desc: "1.5小时" },
        { icon: "📘", title: "澳升独家教材", desc: "4本" },
        { icon: "✍️", title: "澳升独家习题册", desc: "4本" },
        { icon: "📊", title: "每周课后作业", desc: "2小时" },
        { icon: "📚", title: "每周高阶题", desc: "30+" },
        { icon: "📅", title: "阶段/主题测试", desc: "4 次" },
        { icon: "📖", title: "学期检测考试", desc: "4 次" },
        { icon: "📖", title: "学期报告(包含每周记录听写及作业完成情况)", desc: "4 次" },
        { icon: "📖", title: "家长会", desc: "2 次" },
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
          title: "year 1",
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
          title: "year 2",
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
        slug: "y1-6-chinese",
      },
      {
        title: "VCE",
        subtitle: "Specialist Maths Unit 1-4",
        slug: "y1-6-chinese",
      },
      {
        title: "VCE",
        subtitle: "Science Unit 1-4",
        slug: "y1-6-chinese",
      },
    ],
  },
};

export default courseData;
