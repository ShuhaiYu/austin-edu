// src/content/home.js
export const homeContent = {
  en: {
    hero: {
      title: "Melbourne's Leading All-In-One Tutorial Service",
      description: `Founded in 2013, Austin Education is dedicated to providing every student
        with the highest-quality educational resources, including exceptional
        teachers, premium materials, structured courses, and extensive practice,
        empowering each student to achieve success in the most efficient way.`,
      getStarted: "Get Started",
      contact: "Contact",
    },
    findCourse: {
      label: "Find a Course:",
      placeholders: {
        state: "State",
        grade: "Grade",
        subject: "Subject",
      },
      options: {
        state: ["Victoria", "New South Wales", "Queensland"],
        grade: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"],
        subject: ["Math", "Science", "English", "History"],
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
        "A well-structured curriculum and strong support system make learning more efficient and breakthroughs easier",
      ],
      achievementsButton: "Our Achievements",

      // 第二部分 “Why Choose Austin”
      whyTitle: "Why Choose Austin",
      whyDesc:
        "Austin Education is renowned for its outstanding teaching team, comprehensive high-quality course offerings, and exceptional learning environment. As a result, students often affectionately refer to it as their second day school.",

      // 功能卡片数据
      features: [
        {
          icon: "/home/team icon.png",
          title: "Top-tier\n teaching team",
          desc: "Dive into our diverse range of online courses tailored to suit various interests.",
        },
        {
          icon: "/home/course icon.png",
          title: "Comprehensive and\n high-quality courses",
          desc: "Our curated collection covers a wide range of subjects and topics.",
        },
        {
          icon: "/home/study icon.png",
          title: "Well-equipped\n learning space",
          desc: "Join live lectures, interactive discussions, and group activities led by experienced.",
        },
      ],
      learnMoreButton: "Learn More",
    },
    admissionProcess: {
      title: "Admission Service Process",
      parts: [
        {
          part: 1,
          title: "Enrollment Steps",
          steps: [
            {
              step: 0,
              title: "Step 0: Free Consultation",
              desc: `Conducted by experienced Australian education professionals and expert advisors with extensive knowledge of the field, the consultation provides a comprehensive analysis of the student’s situation. This ensures personalised study recommendations, course selection guidance, and career planning. The goal is to eliminate any information gaps parents might face in the Australian education system, helping students access the best academic advice and planning.
    Recommendations may include (but are not limited to): school transfer advice, VCE subject selection, guidance on study destinations, participation in extracurricular activities, competition planning, scholarship exam preparation, and elite school entry exam strategies.`,
            },
            {
              step: 1,
              title: "Step 1: Testing and Assessment",
              desc: `Austin Education provides an authoritative, multi-subject internal admission test developed by Victoria’s top academic team. Based on the results, teachers identify students’ weaknesses and offer tailored learning plans.
    Academic managers and subject teachers recommend the most suitable teaching formats, such as group classes, small classes, one-on-one sessions, or a combination. They also advise on placement in advanced classes or accelerated grade levels, ensuring optimal academic progress.
    Austin’s academic team includes VCE exam assessors, textbook authors, senior teachers with 20+ years of experience, private school high-score teachers, VCE top scorers, and Victoria’s best-performing educators.`,
            },
            {
              step: 2,
              title: "Step 2: Confirming Courses",
              desc: `Austin Education brings together Victoria’s top educators, matching students with teachers suited to their learning styles. If students find the class or teacher unsuitable after starting, they are supported in switching to ensure the best experience, fostering learning interest and efficient progress.`,
            },
            {
              step: 3,
              title:
                "Step 3: Payment (Unconditional Refund Policy) and Student Record Creation",
              desc: `After payment, a receipt will be sent to the designated contact, and student information will be entered into Austin’s system.
    If dissatisfied with the course, you may request an unconditional refund, processed within two weeks.
    *Refunds exclude promotional discounts applied at enrollment.`,
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
                "Step 4: Joining Class Groups + Private Academic Manager Services",
              desc: `After enrollment, students will join class groups where multiple teachers provide dedicated support, addressing academic and scheduling questions.
    Each student is assigned a private academic manager responsible for all academic-related matters at Austin and day school, including leave requests, rescheduling, class transferring, homework supervision, and study plans, guiding them through to VCE exams.
    *Services apply to group class students only.`,
            },
            {
              step: 5,
              title: "Step 5: Accessing Homework System",
              desc: `Staff assist students in setting up their homework system account and learning how to use it.
    Austin provides a systematic homework management model, combining in-class paper assignments with an online system. Students have assigned homework after every class. Additional practice materials and mock exams are available online or on-site.
    The system includes an error collection function to help students identify and correct mistakes. Teachers can monitor homework progress and provide timely feedback to students and parents.`,
            },
            {
              step: 6,
              title: "Step 6: Receiving Materials",
              desc: `Students will receive textbooks during the first class of each term.
    Austin’s textbooks, designed by Victoria’s leading academic team, are the most comprehensive and VCE-aligned in the state. They are widely used by over 80 schools across Victoria.
    *Online students will receive materials via nationwide delivery.`,
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
              desc: `Group classes run for four terms, aligned with day school schedules. Each term’s curriculum is designed to optimise learning through extensive research and refinement.
    Flexible class options allow students to adjust between standard and accelerated levels to match their progress.
    Learning includes four components: regular classes, homework, term-end tests, and reports/parent-teacher interviews.`,
            },
            {
              step: 8,
              title: "Step 8: Term-End Tests + Reports/Parent Meetings",
              desc: `For Year 1–9 students, parents receive feedback after term-end tests in various formats, including parent-teacher interviews, exam rankings, or reports.
    For Year 10–12 students, mock exam reports and periodic parent-teacher interviews provide updates and strategies for improvement.`,
            },
            {
              step: 9,
              title: "Step 9: Holiday Courses",
              desc: `Austin offers targeted holiday courses lasting two weeks (4–6 sessions). These address missed knowledge points, help students catch up, and cover VCE-specific topics not addressed in regular courses.
    Services include:
    1) Addressing Knowledge Gaps
    2) Catching Up on Progress
    3) Specialised Tutoring for Less Common Exam Topics
    *Holiday courses are also available for trial sessions.`,
            },
            {
              step: 10,
              title: "Step 10: Update Student Records",
              desc: `Austin’s extensive database enables accurate predictions of student performance and personalised recommendations based on past cases, ensuring consistent progress and targeted improvement.`,
            },
            {
              step: 11,
              title: "Step 11: Follow-Up Consultation + Free Planning",
              desc: `Students can schedule follow-up consultations with their academic manager or teachers for updated learning plans based on their progress.`,
            },
          ],
        },
      ],
    },
    testimonials: [
        {
            name: "Alice",
            role: "Student",
            rating: 5,
            feedback: "Great tutoring service! I improved my scores a lot.",
          },
          {
            name: "Bob",
            role: "Parent",
            rating: 4,
            feedback: "The tutors are very patient.",
          },
          {
            name: "Gloria",
            role: "Student",
            rating: 5,
            feedback: "Flexible schedule and personalized approach.",
          },
          {
            name: "David",
            role: "Parent",
            rating: 5,
            feedback: "The tutors are very knowledgeable and professional.",
          },
          {
            name: "Eva",
            role: "Student",
            rating: 4,
            feedback: "The tutors are very knowledgeable and professional.",
          },
          {
            name: "Frank",
            role: "Parent",
            rating: 5,
            feedback: "The tutors are very knowledgeable and professional.",
          },
          {
            name: "Helen",
            role: "Student",
            rating: 5,
            feedback: "The tutors are very knowledgeable and professional.",
          },
          {
            name: "Ivy",
            role: "Parent",
            rating: 5,
            feedback: "The tutors are very knowledgeable and professional.",
          },
          {
            name: "Jack",
            role: "Student",
            rating: 5,
            feedback: "The tutors are very knowledgeable and professional.",
          },
          {
            name: "Kelly",
            role: "Parent",
            rating: 5,
            feedback: "The tutors are very knowledgeable and professional.",
          },
    ],
  },
  zh: {
    hero: {
      title: "墨尔本领先的一体化辅导服务",
      description: `奥斯汀教育成立于2013年，致力于为每位学生提供最优质的教育资源，
        包括卓越的教师团队、精品教材、系统化课程和丰富实践，
        帮助每位学生以最高效的方式取得成功。`,
      getStarted: "立即开始",
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
        state: ["Victoria", "New South Wales", "Queensland"],
        grade: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"],
        subject: ["Math", "Science", "English", "History"],
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
        brand: "AUSTIN EDUCATION",
      },
      bullets: [
        "澳大利亚最严格筛选的师资团队，超过90%为高分毕业生和学科专家。",
        "我们帮助学生取得顶尖成绩，确保每个人都能看到明显和实质性的进步。",
        "系统化的课程结构和强大的支持体系，让学习更高效，突破更容易。",
      ],
      achievementsButton: "查看成就",
      whyTitle: "为什么选择奥斯汀",
      whyDesc:
        "奥斯汀教育以卓越的师资团队、全面的高质量课程和非凡的学习环境而闻名。学生们常称它为自己的第二个学校。",
      features: [
        {
          icon: "/home/team icon.png",
          title: "顶尖师资团队",
          desc: "深入了解我们多样化的在线课程，满足不同兴趣需求。",
        },
        {
          icon: "/home/course icon.png",
          title: "全面高质量课程",
          desc: "我们精心策划的课程涵盖了多个学科和主题。",
        },
        {
          icon: "/home/study icon.png",
          title: "优质学习环境",
          desc: "参加由经验丰富的老师主持的直播讲座、互动讨论和小组活动。",
        },
      ],
      learnMoreButton: "了解更多",
    },
    admissionProcess: {
      title: "入学服务流程",
      parts: [
        {
          part: 1,
          title: "报名流程",
          steps: [
            {
              step: 0,
              title: "Step 0 免费咨询",
              desc: `• 由澳洲专业教育从业者……`,
            },
            {
              step: 1,
              title: "Step 1 测试评估",
              desc: `• 澳升拥有由维州最强教研团队……`,
            },
            {
              step: 2,
              title: "Step 2 确认课程",
              desc: `• 澳升汇聚了全维州领先的师资力量……`,
            },
            {
              step: 3,
              title: "Step 3 缴费（无条件退款）＋建立学生档案",
              desc: `完成缴费后……`,
            },
          ],
        },
        {
          part: 2,
          title: "课前准备",
          steps: [
            {
              step: 4,
              title: "Step 4 加入班级群＋私人学管服务",
              desc: `• 学生正式入学后……`,
            },
            {
              step: 5,
              title: "Step 5 开通作业系统",
              desc: `• 工作人员将协助……`,
            },
            {
              step: 6,
              title: "Step 6 领取教材",
              desc: `• 学生将于每学期开学的第一节课领取纸质教科书……`,
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
              desc: `• 班课全年共有四个学期……`,
            },
            {
              step: 8,
              title: "Step 8 期末测试＋报告评估/家长会",
              desc: `• Y1-9的学生，每个学期期未测试后……`,
            },
            {
              step: 9,
              title: "Step 9 假期课",
              desc: `• 澳升在每个假期都会推出……`,
            },
            {
              step: 10,
              title: "Step 10 更新学生档案",
              desc: `• 在超过十年的深耕与积累中……`,
            },
            {
              step: 11,
              title: "Step 11 根据考试情况二次咨询＋免费规划",
              desc: `• 学生在澳升完成一段时间的学习后……`,
            },
          ],
        },
      ],
    },
    testimonials: [
      {
        name: "Alice",
        role: "学生",
        rating: 5,
        feedback: "很棒的辅导服务！我的成绩提升显著。",
      },
      {
        name: "Bob",
        role: "家长",
        rating: 4,
        feedback: "导师非常有耐心。",
      },
      {
        name: "Gloria",
        role: "学生",
        rating: 5,
        feedback: "时间灵活，辅导方案也很个性化。",
      },
      
      {
        name: "David",
        role: "家长",
        rating: 5,
        feedback: "导师非常有知识和专业。",
      },
      {
        name: "Eva",
        role: "学生",
        rating: 4,
        feedback: "导师非常有知识和专业。",
      },
      {
        name: "Frank",
        role: "家长",
        rating: 5,
        feedback: "导师非常有知识和专业。",
      },
      {
        name: "Helen",
        role: "学生",
        rating: 5,
        feedback: "导师非常有知识和专业。",
      },
      {
        name: "Ivy",
        role: "家长",
        rating: 5,
        feedback: "导师非常有知识和专业。",
      },
      {
        name: "Jack",
        role: "学生",
        rating: 5,
        feedback: "导师非常有知识和专业。",
      },
      {
        name: "Kelly",
        role: "家长",
        rating: 5,
        feedback: "导师非常有知识和专业。",
      },
      
    ],
  },
};
