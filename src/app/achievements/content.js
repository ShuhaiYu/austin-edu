export const achievementContent = {
  en: {
    vce: {
      title: "VCE Results",
      subTitle: "At Austin, our achievements include:",
      period: "From 2017 to 2024",
      stats: [
        { count: "16", description: "students scored a top ATAR of" },
        {
          count: "254",
          description: "students achieved an outstanding ATAR of",
        },
        { count: "608", description: "students earned an impressive ATAR of" },
        { count: "Over 100", description: "students attained a perfect" },
      ],
      atarValues: ["99.95", "99+", "97+", "Row 50"],
      percentages: [
        { value: "18%", label: "ATAR 99+" },
        { value: "36%", label: "ATAR 97+" },
        { value: "85%", label: "ATAR 90+" },
      ],
    },
    juniorHigh: {
      title: "Junior High Results",
      description:
        "Austin Education Selective Program achieved\nan average annual admission rate of:",
      admissionRate: "83.7%",
      programs: {
        scholarship: {
          title: "Scholarship Program",
          content:
            "Receiving offers from nearly 40 private schools each year, with an average admission rate of 51%",
          note: "*Scholarship results include scores from the 3-of-5, 5-of-7, and 7-of-9 assessments",
        },
        amc: {
          title: "AMC Math Competition Program",
          results: [
            "4 students achieved High Distinction",
            "11 students achieved Distinction",
          ],
        },
        advanced: {
          title: "Year 7-9 Enrichment Program",
          content:
            "On average, each year, 70% of students achieve top scores in NAPLAN exams",
        },
      },
    },
    primarySchool: {
      title: "Primary School Results",
      programs: {
        scholarship: {
          title: "Scholarship Program",
          content:
            "Receiving offers from nearly 40 private schools each year, with an average admission rate of",
          rate: "51%",
        },
        advanced: {
          title: "Y3-5 Advanced Program",
          content:
            "On average, each year, 84.7% of students achieve top scores in NAPLAN exams.",
        },
        feedback: {
          title:
            "Feedback from parents and students after joining Austin Education:",
          items: [
            {
              value: "100%",
              label:
                "of children believe that the teachers are approachable and enjoy class time.",
            },
            {
              value: "98%",
              label:
                "of children have developed and maintained excellent study habits.",
            },
            {
              value: "98%",
              label:
                "of children have gained increased confidence in their learning at school.",
            },
            {
              value: "95%",
              label:
                "Over 95% of children have demonstrated significant improvement in their academic performance.",
            },
          ],
        },
      },
    },
    slogans: ["Every Student MATTERS", "Every Success COUNTS"],
    subjects: {
      english: {
        title: "VCE English & EAL",
        compactStats: [
          { value: "96%", label: "of students passed with a raw score of 30" },
          {
            value: "40%",
            label: "of students achieved a raw score of 40 or above",
          },
        ],
        classes: {
          austin: [
            {
              title: "Austin Education EAL + ENG Class (2024)",
              stats: [
                "A total of 43 students achieved a raw score of 45 or higher.",
                "40% of students scored a raw score of 40 or above.",
                "80% of students received a 'Very High' rating in SACs.",
              ],
            },
            {
              title: "PLC English (ENG) School Class:",
              stats: [
                "100% of students achieved a raw score of 40 or above, with an average score of 43.",
              ],
            },
          ],
          school: {
            title: "School-Grouped Austin Education English Classes:",
            description: `Several students ranked in the top 5% in their school’s SACs.
            Top performers from leading schools include:`,
            schools: [
              "Scotch College",
              "Haileybury",
              "Caulfield Grammar",
              "Melbourne Grammar",
              "Huntingtower",
              "Korowa",
              "Ruyton Girls’",
              "…and others",
            ],
          },
        },
        keyPoints: {
          title: "Keys to Austin Education’s High English Scores:",
          points: [
            {
              title: "Pre-Exam Forecasting",
              description:
                "Over the past two years of VCE English exams, Austin Education has successfully predicted several exam questions, with the highest similarity rate reaching 95%.",
            },
            {
              title: "Meticulous Essay Revision",
              description:
                "We are the only institution in Victoria that offers dedicated, thorough essay revisions. Our teachers help refine each student's essay—from structure and logic to grammar and vocabulary—with some revised essays even being selected as model examples by the VCAA in 2023.",
            },
            {
              title: "Focus on SACs in English",
              description:
                "Since the overall English score is composed of both SAC and exam results, having SACs as a safety net ensures that students consistently achieve their best possible scores.",
            },
          ],
        },
      },
      math: {
        title: "VCE Mathematics",
        compactStats: (
          <span>
            From 2017 to 2024,{" "}
            <strong className="font-bold text-xl text-primary">36</strong>{" "}
            students scored a{" "}
            <strong className="font-bold text-xl">perfect score of 50</strong>{" "}
            in both MM and SM.
            <br />
            The MM class had an average raw score of{" "}
            <strong className="font-bold text-xl text-primary">42</strong>,
            while that figure of the SM class was{" "}
            <strong className="font-bold text-xl">38</strong>.<br />
            Numerous top-ranked math achievers in various day schools have
            received tutoring from Austin Education.
          </span>
        ),
        block1: {
          title: "We don't boast ourselves, let the Numbers Speak.",
          points: [
              "In the 2023 VCE Math Exam:",
              "**4** Chinese background students achieved **perfect score 50 in SM**, with **2 coming from Austin Education**.",
              "**17** Chinese background students achieved **perfect score 50 in MM**, with **5 from Austin Education.**",
              "In the 2024 VCE Math Exam:",
              "**14** Chinese background students achieved **perfect score 50 in MM**, with **7 coming from Austin Education!**"
            ]
        },
        block2: {
          title: "In total:",
          stats: [
            { value: "25", label: "MM students with a perfect score 50" },
            { value: "11", label: "SM students with a perfect score 50" },
            {
              value: "42 (48)",
              label: "Mathematical Methods: average raw score",
            },
            {
              value: "38 (50.2)",
              label: "Specialist Mathematics: average raw score",
            },
          ],
        },
        block3: {
          title:
            "Top MM and SM achievers from Austin Education come from these schools:",
          schools: [
            "Balwyn High",
            "Melbourne Grammar School",
            "McKinnon Secondary College",
            "Caulfield Grammar",
            "Melbourne Girls Grammar",
            "Carey Baptist Grammar School",
            "Yarra Valley Grammar School",
            "East Doncaster Secondary College",
            "...and more",
          ],
        },
        block4: {
          title: "Why is Austin Education Math Dominating Victoria?",
          points: [
            {
              title: "Precise Exam Forecasting:",
              description:
                "Forecasting exam questions is a longstanding tradition at Austin Education. Every year, our math team accurately identifies exam trends, consistently predicting questions worth at least 20-30 marks in each exam.",
            },
            {
              title: "Unmatched Focus on SACs:",
              description:
                "Austin Education Math is the only institution in Victoria that incorporates SACs into its curriculum and syllabus. This unique focus ensures that many top SAC ranks in day school math exams come from our program.",
            },
          ],
        },
      },
      science: {
        title: "VCE Science",
        compactStats: [
          { value: "33%", label: "of BIO students achieved raw 40+" },
          { value: "37%", label: "of CHEM students achieved raw 40+" },
          { value: "41%", label: "of PHY students achieved raw 40+" },
        ],
        details: [
          {
            title: "Biology Class",
            stats: [
              "Average per year, 12 students score 40+",
              "The class average raw score is 39",
            ],
            percentage: "33%",
            percentageLabel: "students achieved raw 40+",
          },
          {
            title: "Chemistry Class",
            stats: [
              "Average per year, 13 students score 45+",
              "The class median raw score is 37",
            ],
            percentage: "37%",
            percentageLabel: "students achieved raw 40+",
          },
          {
            title: "Physics Class",
            stats: [
              "Average per year, 8 students score 40+",
              "The class median raw score is 36",
            ],
            percentage: "41%",
            percentageLabel: "students achieved raw 40+",
          },
        ],
        advantages: {
          title:
            "Austin Education Science maintains its consistent high standard",
          points: [
            {
              title: "Curriculum Design",
              description:
                "Our teaching pace matches that of top science schools, ensuring that students cover all the required topics for the SACs before the test.",
            },
            {
              title: "Customized Bound Reference",
              description:
                "We offer a personalised Bound Reference that neither day schools nor students can create on their own. This resource includes all exam points predicted by our teachers.",
            },
            {
              title: "Teacher Credentials",
              description:
                "Our biology and chemistry teachers have medical backgrounds—including practicing doctors—while our physics teachers come from families with competition experience.",
            },
          ],
        },
      },
      md: {
        title: "Austin MD Program",
        compactStats: [
          {
            value: "100%",
            label: "meet interview standards",
          },
          {
            value: "100%",
            label: "achieve ATAR 99+",
          },
        ],
        introText: "In the 2023-2024 Exams, Among our Year 12 UCAT candidates:",
        fullStats: [
          {
            value: "100%",
            label: "Met Interview Criteria",
            subLabel: "Highest UCAT: 3260",
            description:
              "All our medical candidates met the interview standards",
          },
          {
            value: "100%",
            label: "Achieved ATAR 99+",
            description: "Every candidate achieved an exceptional ATAR of 99+",
          },
          {
            value: "92%",
            label: "Medical School Admission",
            description:
              "The vast majority of our candidates were admitted to medical schools",
          },
        ],
        additionalInfo: [
          "Comprehensive UCAT preparation with personalized strategies",
          "Expert guidance on medical school applications and interviews",
          "ATAR optimization strategies tailored for medical aspirants",
        ],
      },
      selective: {
        title: "Selective School Program",
        compactStat: {
          value: "83.7%",
          label: "Average Admission Rate",
          description:
            "Between 2017 and 2024, Austin Education's Selective School classes achieved an average admission rate of 83.7%",
        },
        expandedContent: {
          title: "The admission results include:",
          admissions: [
            { name: "Melbourne High School", admissions: "26 admissions" },
            {
              name: "MacRobertson Girls High School",
              admissions: "24 admissions",
            },
            { name: "Nossal High School", admissions: "11 admissions" },
            { name: "Suzanne Cory High School", admissions: "9 admissions" },
            { name: "John Monash Science School", admissions: "14 admissions" },
          ],
        },
      },
      amc: {
        title: "AMC Competition",
        compactStats: (
          <span>
            Between 2023 and 2024: <br />
            <strong className="font-bold text-xl text-[#c12731]">4</strong>{" "}
            students achieved{" "}
            <strong className="font-bold text-xl">High Distinction</strong>{" "}
            <br />
            <strong className="font-bold text-xl text-[#c12731]">
              11
            </strong>{" "}
            students achieved{" "}
            <strong className="font-bold text-xl">Distinction</strong>{" "}
          </span>
        ),
      },
      scholarship: {
        title: "Scholarship Program",
        compactStat: {
          value: "51%",
          label: "Average Admission Rate",
          description:
            "Between 2017 and 2024, students from Scholarship Program received offers from nearly 40 private schools each year, with an average admission rate of 51%",
        },
        expandedContent: {
          title: "Austin students received offers from:",
          schools: [
            { name: "Haileybury College", rate: "90%" },
            { name: "Haileybury College", rate: "75%" },
            { name: "Haileybury College", rate: "50%" },
            { name: "Camberwell", rate: "90%" },
            {
              name: "Scotch College",
              rate: "confidential",
            },
            { name: "Ballarat Clarendon College", rate: "40%" },
            { name: "Melbourne Grammar", rate: "50%" },
            { name: "Melbourne Grammar", rate: "70%" },
            { name: "Caulfield grammar", rate: "90%" },
            { name: "Caulfield grammar", rate: "50%" },
            { name: "Huntingtower", rate: "35%" },
            { name: "Huntingtower", rate: "25%" },
            { name: "Lauriston Girls School", rate: "70%" },
            { name: "Presbyterian Ladies College", rate: "50%" },
            { name: "Presbyterian Ladies College", rate: "35%" },
            { name: "Carey Baptist Grammar School", rate: "70%" },
            { name: "Carey Baptist Grammar School", rate: "50%" },
            { name: "Wesley College", rate: "50%" },
            { name: "Wesley College", rate: "70%" },
            { name: "St Catherine", rate: "25%" },
            { name: "Methodist Ladies' College", rate: "50%" },
            { name: "Methodist Ladies' College", rate: "25%" },
            { name: "Firbank Grammar", rate: "50%" },
            { name: "Korowa", rate: "50%" },
            { name: "Korowa", rate: "35%" },
            { name: "Brighton Grammar", rate: "50%" },
            { name: "Loreto", rate: "50%" },
            { name: "Sacre Coeur", rate: "50%" },
            { name: "St.Michael's", rate: "50%" },
            { name: "Berwick Grammar", rate: "50%" },
            { name: "Peninsula Grammar", rate: "50%" },
            { name: "...and others", rate: "" },
          ],
        },
      },
      advanced79: {
        title: "Year 7-9 Enrichment Program",
        headerText: "From 2017 to 2024, in the Year 7-9 Enrichment Program:",
        compactStat: {
          value: "71%",
          description:
            "of students achieve at least one top score (dot in the triangle) in NAPLAN per year.",
        },
        additionalText:
          "Every year, at least **4** students achieved top score (dot in the triangle) in **all the subjects of NAPLAN.**",
      },
      advanced35: {
        title: "Year 3-5 Enrichment Program",
        headerText: "From 2017 to 2024, in the Year 3-5 Enrichment Program:",
        compactStat: {
          value: "84.7%",
          description:
            "of students achieved at least one top score (dot in the triangle) in NAPLAN on average.",
        },
        additionalText:
          "Every year, at least **6** students achieved top score (dot in the triangle) in **all the subjects of NAPLAN.**",
        block1: {
          title: "Primary Education Focus",
          content:
            "At the Australian primary school stage, the most important goal is to cultivate good study habits and the interest of learning. At Austin Education's primary school program, we offer high-quality classes in Mathematics, English, Chinese, and Writing. Our teaching content is based on the day school curriculum and is enhanced at different levels to suit each child's abilities. All our primary school teachers at Austin Education are very approachable, ensuring that children experience both engaging learning and personalized attention.",
        },
        block2: {
          title: "Parent & Student Feedback",
          subtitle:
            "Feedback from parents and students after joining Austin Education:",
          stats: [
            {
              value: "100%",
              label:
                "of children believe that the teachers are approachable and enjoy class time.",
            },
            {
              value: "98%",
              label:
                "of children have developed and maintained excellent study habits.",
            },
            {
              value: "98%",
              label:
                "of children have gained increased confidence in their learning at school.",
            },
            {
              value: "95%",
              label:
                "of children have demonstrated significant improvement in their academic performance.",
            },
          ],
        },
      },
    },
  },
  zh: {
    vce: {
      title: "VCE总成绩",
      subTitle: "在Austin，我们的成就包括：",
      period: "从2017到2024",
      stats: [
        { count: "16", description: "学生获得最高ATAR分数" },
        { count: "254", description: "学生取得优异ATAR分数" },
        { count: "608", description: "学生获得杰出ATAR分数" },
        { count: "超过100", description: "学生在至少一门VCE科目中获得完美" },
      ],
      atarValues: ["99.95", "99+", "97+", "Row 50"],
      percentages: [
        { value: "18%", label: "ATAR 99+" },
        { value: "36%", label: "ATAR 97+" },
        { value: "85%", label: "ATAR 90+" },
      ],
    },
    juniorHigh: {
      title: "初中总成绩",
      description: "Austin Education精英计划年度平均录取率达到：",
      admissionRate: "83.7%",
      programs: {
        scholarship: {
          title: "奖学金计划",
          content: "每年收到近40所私立学校offer，平均录取率51%",
          note: "*奖学金成绩包含3进5、5进7、7进9考试成绩",
        },
        amc: {
          title: "AMC数学竞赛计划",
          results: ["4名学生获得HD", "11名学生获得D"],
        },
        advanced: {
          title: "7-9年级进阶计划",
          content: "每年平均70%学生在NAPLAN考试中取得顶尖成绩",
        },
      },
    },
    primarySchool: {
      title: "小学总成绩",
      programs: {
        scholarship: {
          title: "奖学金计划",
          content: "每年收到近40所私立学校offer，平均录取率",
          rate: "51%",
        },
        advanced: {
          title: "3-5年级进阶计划",
          content: "每年平均84.7%学生在NAPLAN考试中取得顶尖成绩",
        },
        feedback: {
          title: "家长和学生加入Austin后的反馈：",
          items: [
            {
              value: "100%",
              label: "的孩子认为老师亲切并享受课堂时间",
            },
            {
              value: "98%",
              label: "的孩子培养并保持了优秀的学习习惯",
            },
            {
              value: "98%",
              label: "的孩子对在校学习增加了信心",
            },
            {
              value: "95%",
              label: "的孩子在学业表现上有显著提升",
            },
          ],
        },
      },
    },
    slogans: ["每个学生都重要", "每次成功都算数"],
    subjects: {
      english: {
        title: "VCE English & EAL",
        compactStats: [
          { value: "96%", label: "同学成功达到裸分30" },
          {
            value: "40%",
            label: "同学取得裸分40+",
          },
        ],
        classes: {
          austin: [
            {
              title: "2024年，在澳升EAL + ENG班中：",
              stats: [
                "共计43位同学取得裸分45+",
                "40%同学取得裸分40+",
                "80%同学在SAC中取得Very High",
              ],
            },
            {
              title: "PLC英文（ENG）学校班中:",
              stats: ["100%同学取得裸分40+，班级平均分达到43"],
            },
          ],
          school: {
            title: "在澳升英文以学校分组的班级中:",
            description: `出现了多位日校SAC中排名Top5%的同学
                          这些同学分别来自：`,
            schools: [
              "Scotch College",
              "Haileybury",
              "Caulfield Grammar",
              "Melbourne Grammar",
              "Huntingtower",
              "Korowa",
              "Ruyton Girls’",
              "…",
            ],
          },
        },
        keyPoints: {
          title: "澳升英文取得高分的关键在于：",
          points: [
            {
              title: "考前押题",
              description:
                "近2年的VCE英文考试中，澳升成功押中多道题目，押中的题目中，最高相似度能达到95%",
            },
            {
              title: "维州独一家，最用心的作文精改",
              description:
                "从结构逻辑到语法词汇，澳升老师们为每个学生提供作文精改，一篇被老师修改过的作文，成功被VCAA收录为2023年范文",
            },
            {
              title: "维州最重视SAC的英文班",
              description:
                "英文总分由SAC + EXAM构成，有了SAC做保障，能有效保证同学们拿到最好的分数",
            },
          ],
        },
      },
      math: {
        title: "VCE 数学",
        compactStats: (
          <span>
            17-24年，澳升中数+高数共诞生
            <strong className="font-bold text-lg text-[#c12731]">36</strong>位Raw Score
            50<strong className="font-bold text-lg ">单科状元</strong>，
            <br />
            中数班裸分均分<strong className="font-bold text-lg text-[#c12731]">42</strong>
            ，高数班裸分均分<strong className="font-bold text-lg text-[#c12731]">38</strong>
            <br />
            多个日校的中高数Rank 1均是来自澳升
          </span>
        ),
        block1: {
          title: "澳升数学只拿数据说话：",
          points: [
              "在23年的VCE数学考试中，",
              "有**4**位华人高数状元，其中**2位来自澳升**",
              "有**17**位华人中数状元，其中**5位来自澳升**",
              "在24年的VCE数学考试中，",
              "有**14**位华人中数状元，其中**7位来自澳升**"
            ]
        },
        block2: {
          title: "澳升总共培养出了：",
          stats: [
            { value: "25", label: "位中数状元" },
            { value: "11", label: "位高数状元" },
            { value: "42 (48)", label: "中数班裸分均分（加分后）" },
            { value: "38 (50.2)", label: "高数班裸分均分（加分后）" },
          ],
        },
        block3: {
          title: "多个日校的中高数Rank 1均是来自澳升",
          schools: [
            "Balwyn High",
            "Melbourne Grammar School",
            "McKinnon Secondary College",
            "Caulfield Grammar",
            "Melbourne Girls Grammar",
            "Carey Baptist Grammar School",
            "Yarra Valley Grammar School",
            "East Doncaster Secondary College",
            "...等",
          ],
        },
        block4: {
          title: "澳升数学为什么能在全维州顶尖：",
          points: [
            {
              title: "精准押题",
              description:
                "澳升数学组押题每年都有成功押题，每年都能准确观察到出题趋势，Exam中至少押中20-30分的题目",
            },
            {
              title: "最重视SAC的维州机构",
              description:
                "澳升数学是全维州，唯一一个将SAC放入教学计划、大纲的机构，多所日校中的数学SAC rank1均出自澳升",
            },
          ],
        },
      },
      science: {
        title: "VCE 科学",
        compactStats: [
          { value: "33%", label: "生物学生获得裸分40+" },
          { value: "37%", label: "化学学生获得裸分40+" },
          { value: "41%", label: "物理学生获得裸分40+" },
        ],
        details: [
          {
            title: "澳升生物",
            stats: ["平均每年诞生12位裸分40+", "班课平均裸分39"],
            percentage: "33%",
            percentageLabel: "学生获得裸分40+",
          },
          {
            title: "澳升化学",
            stats: ["平均每年诞生13位裸分45+", "班级中位数裸分37"],
            percentage: "37%",
            percentageLabel: "学生获得裸分40+",
          },
          {
            title: "澳升物理",
            stats: ["平均每年诞生8位裸分40+", "班级中位数裸分36"],
            percentage: "41%",
            percentageLabel: "学生获得裸分40+",
          },
        ],
        advantages: {
          title: "澳升Science维持了一贯的高标准",
          points: [
            {
              title: "教纲设计",
              description:
                "教学进度追平理科top日校，保证学生能在SAC前学完所有考察知识点。",
            },
            {
              title: "定制化参考书",
              description:
                "提供独家定制Bound Reference，包含老师预判的所有考点，在考场上给予最大帮助。",
            },
            {
              title: "师资力量",
              description:
                "生物/化学老师均有医学背景（在职医生）；物理老师来自竞赛经验的物理世家。",
            },
          ],
        },
      },
      md: {
        title: "澳升医学院项目",
        compactStats: [
          {
            value: "100%",
            label: "达到面试标准",
          },
          {
            value: "100%",
            label: "获得ATAR 99+",
          },
        ],
        introText: "23-24年的考试，澳升UCAT考生中：",
        fullStats: [
          {
            value: "100%",
            label: "达到面试标准",
            subLabel: "UCAT最高分3260",
            description: "所有医学生候选人达到面试标准",
          },
          {
            value: "100%",
            label: "获得ATAR 99+",
            description: "每位候选人都获得了99+的卓越ATAR成绩",
          },
          {
            value: "92%",
            label: "医学院录取",
            description: "绝大多数候选人成功被医学院录取",
          },
        ],
        additionalInfo: [
          "全面的UCAT准备，提供个性化策略",
          "医学院申请和面试的专业指导",
          "为医学生量身定制的ATAR优化策略",
        ],
      },
      selective: {
        title: "精英公校项目",
        compactStat: {
          value: "83.7%",
          label: "平均录取率",
          description: "澳升在17-24年间，精英公校班平均录取率达到83.7%",
        },
        expandedContent: {
          title: "录取情况为：",
          admissions: [
            { name: "Melbourne High School", admissions: "26人被录取" },
            {
              name: "MacRobertson Girls High School",
              admissions: "24人被录取",
            },
            { name: "Nossal High School", admissions: "11人被录取" },
            { name: "Suzanne Cory High School", admissions: "9人被录取" },
            { name: "John Monash Science School", admissions: "14人被录取" },
          ],
        },
      },
      amc: {
        title: "AMC Competition",
        compactStats: (
          <span>
            From 2017 to 2024,{" "}
            <strong className="font-bold text-xl text-[#c12731]">36</strong>{" "}
            students scored a{" "}
            <strong className="font-bold text-xl">perfect score of 50</strong>{" "}
            in both MM and SM.
            <br />
            The MM class had an average raw score of{" "}
            <strong className="font-bold text-xl text-[#c12731]">42</strong>,
            while that figure of the SM class was{" "}
            <strong className="font-bold text-xl">38</strong>.<br />
            Numerous top-ranked math achievers in various day schools have
            received tutoring from Austin Education.
          </span>
        ),
      },
      scholarship: {
        title: "奖学金项目",
        compactStat: {
          value: "51%",
          label: "平均录取率",
          description:
            "在17-24年间，澳升学子每年平均能收到近40个私校offer，私校平均录取率为51%",
        },
        expandedContent: {
          title: "澳升学子收到的部分offer统计为：",
          schools: [
            { name: "Haileybury College", rate: "90%" },
            { name: "Haileybury College", rate: "75%" },
            { name: "Haileybury College", rate: "50%" },
            { name: "Camberwell", rate: "90%" },
            { name: "Scotch College", rate: "保密" },
            { name: "Ballarat Clarendon College", rate: "40%" },
            { name: "Melbourne Grammar", rate: "50%" },
            { name: "Melbourne Grammar", rate: "70%" },
            { name: "Caulfield grammar", rate: "90%" },
            { name: "Caulfield grammar", rate: "50%" },
            { name: "Huntingtower", rate: "35%" },
            { name: "Huntingtower", rate: "25%" },
            { name: "Lauriston Girls School", rate: "70%" },
            { name: "Presbyterian Ladies College", rate: "50%" },
            { name: "Presbyterian Ladies College", rate: "35%" },
            { name: "Carey Baptist Grammar School", rate: "70%" },
            { name: "Carey Baptist Grammar School", rate: "50%" },
            { name: "Wesley College", rate: "50%" },
            { name: "Wesley College", rate: "70%" },
            { name: "St Catherine", rate: "25%" },
            { name: "Methodist Ladies' College", rate: "50%" },
            { name: "Methodist Ladies' College", rate: "25%" },
            { name: "Firbank Grammar", rate: "50%" },
            { name: "Korowa", rate: "50%" },
            { name: "Korowa", rate: "35%" },
            { name: "Brighton Grammar", rate: "50%" },
            { name: "Loreto", rate: "50%" },
            { name: "Sacre Coeur", rate: "50%" },
            { name: "St.Michael's", rate: "50%" },
            { name: "Berwick Grammar", rate: "50%" },
            { name: "Peninsula Grammar", rate: "50%" },
            { name: "…等", rate: "" },
          ],
        },
      },
      advanced79: {
        title: "Y7-9 培优班",
        headerText: "17-24年，在Y7-9 培优班中：",
        compactStat: {
          value: "71%",
          description: "同学成功收获'小尖尖'",
        },
        additionalText: "每年至少有4位同学拿到了**全科'小尖尖'**",
      },

      advanced35: {
        title: "Y3-5 培优班",
        headerText: "17-24年间，在澳升Year 3-5培优班中：",
        compactStat: {
          value: "84.7%",
          description: "同学成功收获NAPLAN一门科目的“小尖尖”",
        },
        additionalText: "每年至少有**6**位同学拿到了**NAPLAN全科“小尖尖”**",
        block1: {
          title: "小学教育重点",
          content:
            "澳洲小学阶段,最重要的是培养孩子良好学习习惯和对学习的兴趣。澳升在小学阶段,提供了数学、英文、中文、写作等高质量课堂。教学内容基于日校,根据孩子水平不同进行程度不同的拔高。澳升小学老师均具备强亲和力,保证孩子学习的同时能感受到趣味和关注。",
        },
        block2: {
          title: "家长学生反馈",
          subtitle: "据家长和学生反馈统计,学生加入澳升后:",
          stats: [
            { value: "100%", label: "认为老师具有亲和力,享受课堂时光" },
            { value: "98%", label: "培养并维持了良好的学习习惯" },
            { value: "98%", label: "在日校对学习增加自信" },
            { value: "95%", label: "在日校成绩上展现巨大的进步" },
          ],
        },
      },
    },
  },
};
