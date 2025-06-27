// src/content/home.js
export const homeContent = {
  en: {
    hero: {
      title: "Melbourne‘s Leading All-In-One Tutoring Service",
      description: `At Austin Education, we believe that real academic progress comes from expert guidance and consistent support—not luck. That’s why we are committed to providing every student with the highest-quality resources and the most genuine care.
Since 2013, we have specialised in comprehensive tutoring for students from Year 1 to Year 12, covering all major academic pathways including VCE, IB, UCAT, and more—always upholding the highest teaching standards.
What we offer is a fully structured learning system: Curriculum precisely aligned with exam standards； A handpicked team of outstanding teachers； High-quality in-house textbooks； Efficient and targeted practice tasks, supported by a full suite of academic resources.
Our mission is to: help every student make real, measurable progress; bring together Australia's best teaching talent; build the most complete and caring academic support system.`,
      getStarted: "Trial Lesson",
      contact: "Contact Us",
    },
    findCourse: {
      label: "Find a Course:",
      placeholders: {
        state: "State",
        grade: "Grade",
        subject: "Subject",
      },
      options: {
        state: ["Victoria", "South Australia"],
        grade: [
          "Year 1",
          "Year 2",
          "Year 3",
          "Year 4",
          "Year 5",
          "Year 6",
          "Year 7",
          "Year 8",
          "Year 9",
          "Year 10",
          "Year 11",
          "Year 12",
          "Medical Program",
        ],
        subject: [
          "Math",
          "Science",
          "English",
          "Scholarship",
          "Selective School",
        ],
      },
    },
    features: {
      // 上半部分统计数据
      stats: [
        { num: "99.95", text: ["ATAR achieved by 6 of our students."] },
        { num: "99", text: ["ATAR or above by 46 of our students"] },
        { num: "90", text: ["ATAR or above by 84% of our students"] },
      ],
      // 右侧标题行
      header: {
        prefix: "What makes over",
        highlight: "10,000",
        suffix: "students choose",
        brand: "AUSTIN EDUCATION",
      },
      // 右侧描述列表
      bullets: [
        "Australia's most rigorously selected teaching team, with over 90% consisting of high-achieving graduates and subject experts.",
        "We help students achieve top scores, ensuring visible and tangible progress for everyone.",
        "A well-structured curriculum and strong support system make learning more efficient and breakthroughs easier.",
      ],
      achievementsButton: "Our Achievements",

      // 第二部分 “Why Choose Austin”
      whyTitle: "Why Choose Austin",
      whyDesc:
        "Austin Education is renowned for its outstanding teaching team, comprehensive high-quality course offerings, and exceptional learning environment. As a result, students often affectionately refer to it as their 'second day school'.",
      // 功能卡片数据
      features: [
        {
          icon: "/home/team icon.png",
          title: "Expert-Led Institution",
          desc: "A well-managed institution with expert teachers and dedicated support.",
          buttonText: "About us",
          buttonLink: "/about_us",
        },
        {
          icon: "/home/course icon.png",
          title: "Full Year-Level Coverage",
          desc: "Structured programs from Year 1 to Year 12.",
          buttonText: "Explore Courses",
          buttonLink: "/courses",
        },
        {
          icon: "/home/study icon.png",
          title: "Extensive Resources",
          desc: "Comprehensive resources for smarter learning.",
          buttonText: "Learn More",
          buttonLink: "/homework_system",
        },
      ],
    },
    admissionProcess: {
      title: "STEP-BY-STEP ADMISSION GUIDE",
      desc: "Besides exceptional teachers and resources, Austin Education is known for its systematic and comprehensive service process. From consultation to the end of their studies, we provide full support, ensuring the best learning outcomes with a responsible attitude and meticulous service.",
      parts: [
        {
          part: 1,
          title: "Enrolment",
          steps: [
            {
              step: 0,
              title: "Step 0: Free Consultation",
              desc: `• Our consultations are led by experienced Australian education professionals and expert advisors who bring deep knowledge of the local system. Each session offers a comprehensive review of the student’s situation, providing tailored study recommendations, course selection support, and career planning guidance. We aim to bridge the information gap many parents face when navigating the Australian education system — making sure students receive the best possible academic advice and long-term planning support.
    • Recommendations may include (but not limited to): school transfer advice, VCE subject selection, guidance on study outcomes, participation in extracurricular activities, competition planning, scholarship exam preparation, and entry exam strategies for elite school.`,
              buttonText: "Book Now",
              buttonLink: "/contact_us",
            },
            {
              step: 1,
              title: "Step 1: Testing and Assessment",
              desc: `• Austin Education provides an authoritative, multi-subject internal admission test developed by Victoria’s top academic team. Based on the results, teachers identify students’ weaknesses and offer tailored learning plans.
    • Academic managers and subject teachers recommend the most suitable teaching formats, such as group classes, small classes, one-on-one sessions, or a combination. They also advise on placement in advanced classes or accelerated grade levels, ensuring optimal academic progress.
    • Austin’s academic team includes VCE exam assessors, textbook authors, senior teachers with 20+ years of experience, private school high-score teachers, VCE top scorers, and Victoria’s best-performing educators.`,
              buttonText: "Book a Trial Lesson",
              buttonLink: "/resource_hub",
            },
            {
              step: 2,
              title: "Step 2: Confirming Courses",
              desc: `• Austin Education brings together Victoria’s top educators, matching students with teachers suited to their learning styles. Should a student find the class or instructor unsuitable after commencing, we offer full support in arranging a suitable alternative. This ensures an optimal learning environment that promotes sustained engagement and academic progress.`,
              buttonText: "Explore Courses",
              buttonLink: "/courses",
            },
            {
              step: 3,
              title:
                "Step 3: Payment (Unconditional Refund Policy) and Student Record Creation",
              desc: `• After payment, a receipt will be sent to the designated contact, and student information will be into Austin’s system added.
    • If dissatisfied with the course, you may request an unconditional refund, which will be processed within two weeks.
    * Refunds exclude promotional discounts applied at enrolment.`,
            },
          ],
        },
        {
          part: 2,
          title: "Pre-Course Preparation",
          steps: [
            {
              step: 4,
              title:
                "Step 4: Joining Class Groups & Private Academic Manager Services",
              desc: `• After enrolment, students will join classes where multiple teachers provide dedicated support, addressing academic and scheduling questions.
   • Each student will be assigned a private academic manager that is responsible for all academic-related matters at Austin and day school, including leave requests, rescheduling, class transferring, homework supervision, and study plans. Such service will be provided until the VCE exams.
    * Services apply to group class students only.`,
            },
            {
              step: 5,
              title: "Step 5: Accessing Homework System",
              desc: `• Students will be provided with their own account to access Austin Homework System and guided to learn how to use it.
    • Austin provides a systematic homework management model, combining in-class paper assignments with an online system. Students have assigned homework after every class. Additional practice materials and mock exams are available online or on-site.
    • The system includes an error collection function to help students identify and correct mistakes. Teachers can monitor homework progress and provide timely feedback to students and parents.`,
              buttonText: "Learn More",
              buttonLink: "/homework_system",
            },
            {
              step: 6,
              title: "Step 6: Receiving Materials",
              desc: `• Students will receive textbooks during the first class of each term.
    • Austin’s textbooks, designed by Victoria’s leading academic team, are the most comprehensive and VCE-aligned in the state. They are widely used by over 80 schools across Victoria.
    * Online students will receive materials via nationwide delivery.`,
            },
          ],
        },
        {
          part: 3,
          title: "Course Services",
          steps: [
            {
              step: 7,
              title: "Step 7: During Classes",
              desc: `• Group classes are delivered for four terms, aligned with day school schedules. Each term’s curriculum is designed to optimise learning through extensive research.
    • Flexible class options allow students to adjust between standard and advanced levels to match their current level and pace.
    • Learning includes four components: regular classes, homework, exams, and reports/parent-teacher interviews.`,
            },
            {
              step: 8,
              title: "Step 8: Term-End Tests & Reports/Parents Meetings",
              desc: `• For Year 1–9 students, parents will receive feedback after exams in various formats, including parent-teacher interviews, exam rankings, or reports.
    •  For Year 10–12 students, mock exam reports and periodic parent-teacher interviews will be offered to update students’ overall academic performance and provide corresponding strategies for improvement.`,
            },
            {
              step: 9,
              title: "Step 9: Holiday Courses",
              desc: `• Austin offers targeted holiday courses lasting two weeks (4–6 sessions). These are designed to help students catch up by addressing missed knowledge points, and cover VCE-specific topics not addressed in regular courses.
    Services include:
    1) Addressing Knowledge Gaps: based on students' transcripts and assessment reports, teachers will conduct a precise analysis of their performance in each subject to identify key areas, difficulties, and missed topics. Tailored explanations are provided to help students fill in the gaps and deepen their understanding.
    2) Catching Up on Progress: for students who may have fallen behind due to learning difficulties or personal reasons, our holiday courses offer the perfect opportunity to help them keep up. Austin is committed to helping students quickly catch up during the holiday period, ensuring a smooth transition into the new semester.
    3) Specialised Tutoring for Less Common Exam Topics: we offer targeted tutoring for VCE exam topics that are not covered in regular school or Austin courses. This ensures no topic is overlooked and helps students expand their knowledge during the holiday period, improving their overall cognitive abilities.
    * Holiday courses are also available for trial sessions.`,
            },
            {
              step: 10,
              title: "Step 10: Update Student Records",
              desc: `• Austin’s extensive database enables accurate predictions of student performance and personalised recommendations based on past cases, ensuring consistent progress and targeted improvement.`,
            },
            {
              step: 11,
              title: "Step 11: Follow-Up Consultation & Free Planning",
              desc: `• Students can schedule follow-up consultations with their academic manager or teachers for updated learning plans based on their progress.`,
              buttonText: "Book Now",
              buttonLink: "/contact_us",
            },
          ],
        },
        {
          part: 4,
          title: "Additional\n Services",
          steps: [
            {
              step: "Service 1",
              title: "Authentic Mock Exams",
              desc: `• Austin’s mock exams are renowned for their exceptional quality, covering nearly 100% of VCE exam content. They are recognised as one of Victoria’s top four mock exams and are the only ones provided by a Chinese-run institution.
                     •  Full mock exams serve as an additional assurance for Austin students to deliver outstanding results every year. With extensive experience and unparalleled professionalism, our academic team ensures the difficulty level and question types of the mock exams align with actual VCE exams. We also recreate exam conditions and timing to provide a fully authentic simulation. After the exams, teachers thoroughly analyse each student's papers to identify weak areas and offer targeted revision plans. This can help them build exam readiness, adapt to the test environment, and achieve exceptional results.
    
                     Mock Exams Offered:
                   • NAPLAN Mock Exams
                     • Selective School Mock Exams
                     • Scholarship Mock Exams & Interview Simulations
                     • VCE Comprehensive Mock Exams
                     
                     Key Subjects:
                    • Mathematics: Three full mock exams, earning the title “The King of Predictions.
                     • English: Mock exams designed to develop writing strategies and improve writing speed in exam conditions.
                     • Chinese: \n Speaking: Students undertake at least six internal mock exams with Austin teachers and five face-to-face mock exams with experienced VCE oral examiners. Feedback and recommendations are provided to help students improve. \n Writing: Students complete two authentic mock exams simulating real test scenarios.
                     • Other Subjects: Physics, Chemistry, Biology, Accounting, Economics, and Japanese—all include at least one full mock exam opportunity.`,
            },
            {
              step: "Service 2",
              title: "Free Seminars Throughout the Year",
              desc: `Austin Education hosts over 20 free seminars each year, aimed at helping parents gain in-depth knowledge about the educational field in Victoria, bridging any information gaps. Seminar details will be promptly shared with our internal students and parents to ensure that no one misses out on topics of interest.
                     
              Seminar topics include:
                     For Years 1-9:
                     • NAPLAN Seminar
                     • Scholarship & Elite Public School Seminar
                     • Ausyouth English/Math Seminar
                     • Public vs. Private School Rankings, Pros and Cons, and Comparisons.
                     
                     For Years 10-12:
                     • VCE Curriculum Overview Seminar (Years 10-12)
                     • University Admission and Application Seminars
                     • VCE Subject Selection Seminars (Introductory and Advanced)
                     • VCE Mathematics Seminar
                     • VCE English Seminar
                     • Seminar on the Differences Between EAL, ENGLISH, and English Language
                     • VCE Chinese Seminar
                     • Study Abroad in the U.S. Seminar
                     • Medical Studies Seminar
                     • High-Performing Student Experience Sharing Seminars`,
              buttonText: "Register Now",
              buttonLink: "/resource_hub?tab=webinar",
            },
          ],
        },
      ],
    },
    testimonials: [
      {
        name: "Xinyi Wu",
        achievement: "ATAR 99.95",
        videoUrl: "https://vimeo.com/1086683560/78f12a4d86",
      },
      {
        name: "Jason Song",
        achievement: "ATAR 99.90",
        videoUrl: "https://vimeo.com/1086681238/38d1c81ab6",
      },
      {
        name: "Tiffany Xu",
        achievement: "ATAR 99.90",
        videoUrl: "https://vimeo.com/1086682470/803a5eb431",
      },
      {
        name: "Aaron Leng",
        achievement: "ATAR 99.90",
        videoUrl: "https://vimeo.com/1086685145/36e595361c",
      },
      {
        name: "Gloria Chen",
        achievement: "ATAR 99.85",
        videoUrl: "https://vimeo.com/1087885109/91be676b86",
      },
    ],
  },
  zh: {
    hero: {
      title: "墨尔本优质教学的第一选择",
      description: `在澳升教育，我们相信，真正的进步来自专业的引导与持续的支持，而不是运气。正因如此，我们始终致力于为每一位学生提供最优质的资源与最用心的陪伴。
自 2013 年起，我们专注于提供 Y1–Y12全科补习，涵盖 VCE、IB 、UCAT等所有核心学科，始终坚持最高教学标准。
澳升提供的是一整套系统化教学方案：严格贴合考纲的课程设计、精挑细选的教师团队、高质量的内部教材、以及高效有针对性的课后练习与辅助资源。
我们的使命是：让每位学生都实现真正可见的进步; 提供全澳最高质量的教学团队; 打造最全面的学术支持体系。`,
      getStarted: "预约试听",
      contact: "联系我们",
    },
    findCourse: {
      label: "搜索课程：",
      placeholders: {
        state: "选择州/地区",
        grade: "选择年级",
        subject: "选择科目",
      },
      options: {
        state: ["维多利亚州", "南澳大利亚州"],
        grade: [
          "1年级",
          "2年级",
          "3年级",
          "4年级",
          "5年级",
          "6年级",
          "7年级",
          "8年级",
          "9年级",
          "10年级",
          "11年级",
          "12年级",
          "Medical Program",
        ],
        subject: ["数学", "科学", "英文", "奖学金", "精英公校"],
      },
    },
    features: {
      stats: [
        { num: "99.95", text: ["6 名学生取得 99.95 ATAR。"] },
        { num: "99", text: ["46 名学生取得 99 或以上 ATAR"] },
        { num: "90", text: ["84% 的学生取得 90 或以上 ATAR"] },
      ],
      header: {
        prefix: "为什么超过",
        highlight: "10,000",
        suffix: "名学生选择",
        brand: "澳升教育",
      },
      bullets: [
        "澳洲最严格筛选的教师团队，90% 以上由高分毕业生及学科专家组成",
        "我们帮助学生冲刺高分，让每个人都看到真正的进步",
        "完善的课程体系和强大支持，让学生学习更高效，轻松突破",
      ],
      achievementsButton: "查看成就",
      whyTitle: "为什么选择澳升",
      whyDesc:
        "澳升教育以顶尖的教师团队、全面优质的课程资源和一流的学习环境闻名。正因如此，这里常被学生亲切地称为他们的‘第二日校’。",
      features: [
        {
          icon: "/home/team icon.png",
          title: "专业团队保障",
          desc: "管理严谨，师资强大，教学与服务一体化。",
          buttonText: "了解我们",
          buttonLink: "/about_us",
        },
        {
          icon: "/home/course icon.png",
          title: "全年级课程覆盖",
          desc: "从Y1到Y12，系统课程全面支持成长。",
          buttonText: "探索课程",
          buttonLink: "/courses",
        },
        {
          icon: "/home/study icon.png",
          title: "丰富教育资源 ",
          desc: "海量学习资源，助力高效备考与提升。",
          buttonText: "了解更多",
          buttonLink: "/homework_system",
        },
      ],
    },
    admissionProcess: {
      title: "澳升教育入学服务流程",
      desc: "除了优秀的老师和教学资源外，澳升教育还以系统性、全面的服务流程闻名。从学生咨询开始，直到学习结束，我们为每一位学生提供全方位的支持。我们以认真负责的态度和细致入微的服务流程，确保学生在整个学习过程中都能得到充分保障，最大化学习效果。",
      parts: [
        {
          part: 1,
          title: "报名流程",
          steps: [
            {
              step: 0,
              title: "Step 0 免费咨询",
              desc: `• 由澳洲专业教育从业者、深耕教育领域的专业指导老师，根据学生的情况，进行全面剖析，以提供个性化的学习建议、选课建议和生涯规划。服务旨在消除家长对澳洲教育领域可能存在的信息差，以帮助孩子获得最专业的学业建议和规划。
              • 建议包括但不限于：转校建议、VCE选课建议、留学国家建议、是否参与社会活动、各类竞赛规划、奖学金考试规划、精英中学考试规划等。`,
              buttonText: "联系我们",
              buttonLink: "/contact_us",
            },
            {
              step: 1,
              title: "Step 1 测试评估",
              desc: `• 澳升拥有由维州最强教研团队共同打磨出的极具权威的内部全科入学测试。老师根据测试结果找出学生的薄弱项后，会给学生提供量身定制的教学计划。
              • 学习管理老师和专业老师会根据学生的测试结果，推荐授课模式：大班课、小班课、一对一、或班课结合一对一的同步授课模式，以及有关是否需要进入快班或升年级超前跟班等方面的建议。
              • 澳升教研团队包括：维州高考考官、维州教材编写者、日校20年教龄资深老师、私校高考班高分老师、维州VCE状元、维州出分最高的明星老师等。`,
              buttonText: "立刻预约",
              buttonLink: "/resource_hub",
            },
            {
              step: 2,
              title: "Step 2 确认课程",
              desc: `• 澳升汇聚了全维州领先的师资力量，可以为学生匹配最适合自己学习风格的老师。课程开始之后，学生如果对老师或班级不适应，澳升也支持学生换班，目标是让学生获得最完美的课程体验，激发其学习兴趣，获得高效的学习进步。`,
              buttonText: "了解课程",
              buttonLink: "/courses",
            },
            {
              step: 3,
              title: "Step 3 缴费（无条件退款）& 建立学生档案",
              desc: `• 完成缴费后，工作人员将会发送收据至您指定的联系方式，并将学生信息录入澳升系统。
             • 如果在课程进行过程中对教学不满意，您可以随时提出无条件退款申请，退款金额会在两周之内退还回指定账户。
              * 若报名时享受优惠，退款时已上课程则不享受折扣`,
            },
          ],
        },
        {
          part: 2,
          title: "课前准备",
          steps: [
            {
              step: 4,
              title: "Step 4 加入班级群 & 私人学管服务",
              desc: `• 学生正式入学后会加入班级群。群内有多位老师分别负责专项服务，给学生的学习问题或课程安排问题进行答疑解惑。
              • 每个学生都有专属的学习管理老师，学管老师负责学生在澳升和日校的一切学习相关事务（包括请假、调课、调班、监督作业完成情况、制定学习计划等），为学生保驾护航直至VCE高考考试结束。
              * 以上服务仅为班课学生享有。`,
            },
            {
              step: 5,
              title: "Step 5 开通作业系统",
              desc: `• 工作人员将协助学生开通作业系统账号，并由学生学习使用作业系统。
             • 澳升拥有系统化的课后作业管理模式随堂纸质作业 & 线上作业系统。学生在每节课后都有定量的作业需要完成。
             • 此外，学生如需更多练习机会，还可以在澳升的作业系统、或线下，获取海量题库和模拟考试。
             • 澳升作业系统包含错题集功能，学生所有错题会被自动收集，方便查漏补缺。作业系统便于老师后台跟踪作业情况和学习状态，能够及时与学生和家长沟通学习上出现的问题和改进建议。`,
              buttonText: "查看更多",
              buttonLink: "/homework_system",
            },
            {
              step: 6,
              title: "Step 6 领取教材",
              desc: `• 学生将于每学期开学的第一节课领取纸质教科书。
              • 澳升拥有全维州最系统、最优质、最符合VCE考纲设计的教材。由维州最强教研团队编写。澳升的各种教材、内部测试卷也被全维州八十多所日校广泛采用并传播。
              * 网课学生全澳范围邮寄教材。`,
            },
          ],
        },
        {
          part: 3,
          title: "课程相关服务",
          steps: [
            {
              step: 7,
              title: "Step 7 课程开始",
              desc: `• 班课全年共有四个学期，上课时间均和日校同步。每个学期的课程安排都是由老师们经过多年教研和不断精进而得出的最佳方案。
              • 各年级、各学科都有进度不同的班级，学生可以根据自己的学习情况，灵活调整快慢班来保证自己紧跟进度。
              • 学习安排通常分为四个部分：日常上课 & 课后作业 & 期未测试 & 发成绩单/开家长会。`,
            },
            {
              step: 8,
              title: "Step 8 期末测试 & 报告评估/家长会",
              desc: `• Y1-Y9的学生，每个学期期未测试后，家长都会收到一份学习反馈，反馈形式各学期不同，包括家长会、考试排名、Report。
              • Y10-Y12的学生，模考后收到考试Report，不定期开设家长会。`,
            },
            {
              step: 9,
              title: "Step 9 假期课",
              desc: `• 澳升在每个假期都会推出针对性更强的假期课。假期课将持续两周，共包含4-6节课，旨在为那些在日常学习中知识点掌握不佳或没有跟上进度的学生提供额外的辅导支持。
              1）查漏补缺：根据学生的成绩单和评估报告，精准分析出各科目的学习情况，总结出重点、难点、遗漏点，并提供具有针对性的讲解以帮助学生查漏补缺。
              2）追赶进度：对于学习能力稍显欠佳或因个人原因而导致学习进度滞后的学生，假期课是弥补差距的最佳机会。澳升致力于帮助孩子在假期中迅速追赶进度，确保他们在新学期能够顺利衔接。
              3）冷门考点专项辅导：针对平时日校和澳升课程中没有涵盖的VCE冷门考点进行专项辅导，保证不放过任何一个考点，帮助学生在假期过程中拓宽知识面，全面提高认知水平。
              * 假期课同样开放试听。`,
            },
            {
              step: 10,
              title: "Step 10 更新学生档案",
              desc: `• 在超过十年的深耕与积累中，澳升教育打造了巨量的学生数据库。从数据库中，老师、学生、以及家长们将能够精准匹配与当前学生情况高度契合的过往案例，对学生的学习成果进行阶段性预测，拟合出未来的成长趋势，从而更有针对性地查漏补缺，强化学生的学习成果。`,
            },
            {
              step: 11,
              title: "Step 11 根据考试情况二次咨询 & 免费规划",
              desc: `• 学生在澳升完成一段时间的学习后，可以根据自身的学习情况再次预约学管和任课老师进行一对一咨询，并重新规划学习路线。`,
              buttonText: "立刻预约",
              buttonLink: "/contact_us",
            },
          ],
        },
        {
          part: 4,
          title: "附加服务",
          steps: [
            {
              step: "Service 1",
              title: "全真模拟考试",
              desc: `• 澳升的模考卷以极高的质量著称，覆盖了近百分之百的VCE真题知识点，因此被誉为维州四大模考卷之一，也是其中唯一由华人机构提供的全真模考试卷。
               • 全真模拟考试是澳升的学生每年都能交出优异答卷的另一份保障。澳升教研团队凭借多年的教育经验和过硬的专业素质，确保了模拟考试难度和题型与真实考试相对应，同时还完成了考场状态和考试时间一比一还原的全真模拟。考完老师会详细分析每个学生的试卷，找出学生的薄弱项，在最后时间针对性复习。致力于帮助学生锻炼考试素质，熟悉考场状态，最终以良好的心态取得满意的成绩。
            
               澳升模考提供:,
                • Naplan模拟考试
                • 精英公校模拟考试
                • 奖学金模拟考试 & 面试模拟
                • VCE全科模考`,
            },
            {
              step: "Service 2",
              title: "全年免费讲座",
              desc: `澳升全年会举办20余场免费讲座，旨在帮助家长深入了解维州教育领域的相关知识，消除家长的信息差。工作人员会将讲座信息第一时间通知澳升内部学员及家长，以确保各位不会错过任何感兴趣的讲座。
              
              讲座内容涵盖： 
              1-9年级:
                • Naplan讲座
                • 奖学金 ＆ 精英公校专题讲座
                 • Ausyouth青少部英文/数学讲座
                 • 公私校排名、优缺点及对比讲座

              10-12年级:
               • VCE课程体系介绍讲座
               • 大学志愿报考讲座
               • VCE选课专题讲座（基础版和深度版）
               • VCE数学讲座
               • VCE英语讲座
               • EAL/ENGLISH/English language的区别专题讲座
               • VCE中文讲座
               • 留学美国讲座
               • 医学讲座
               • 优秀学员分享讲座`,
              buttonText: "立刻注册",
              buttonLink: "/resource_hub?tab=webinar",
            },
          ],
        },
      ],
    },
    testimonials: [
      {
        name: "Xinyi Wu",
        achievement: "ATAR 99.95",
        videoUrl: "https://vimeo.com/1086683560/78f12a4d86",
      },
      {
        name: "Jason Song",
        achievement: "ATAR 99.90",
        videoUrl: "https://vimeo.com/1086681238/38d1c81ab6",
      },
      {
        name: "Tiffany Xu",
        achievement: "ATAR 99.90",
        videoUrl: "https://vimeo.com/1086682470/803a5eb431",
      },
      {
        name: "Aaron Leng",
        achievement: "ATAR 99.90",
        videoUrl: "https://vimeo.com/1086685145/36e595361c",
      },
      {
        name: "Gloria Chen",
        achievement: "ATAR 99.85",
        videoUrl: "https://vimeo.com/1087885109/91be676b86",
      },
    ],
  },
};
