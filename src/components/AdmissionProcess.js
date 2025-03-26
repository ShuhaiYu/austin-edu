// src/components/AdmissionProcess.js
"use client";

import { useState, useContext } from "react";
import { LangContext } from "@/app/layout";
import Image from "next/image";

// 全部的中英文内容，按 Part 分段
const steps = [
  {
    part: 1,
    title: {
      zh: "报名流程",
      en: "Enrollment Steps",
    },
    steps: [
      {
        step: 0,
        title: {
          zh: "Step 0 免费咨询",
          en: "Step 0: Free Consultation",
        },
        desc: {
          zh: `• 由澳洲专业教育从业者、深耕教育领域的专业指导老师，根据学生的情况，进行全面剖析，以提供个性化的学习建议、选课建议和生涯规划。服务旨在消除家长对澳洲教育领域可能存在的信息差，以帮助孩子获得最专业的学业建议和规划。
• 建议包括但不限于：转校建议、VCE选课建议、留学国家建议、是否参与社会活动、各类竞赛规划、奖学金考试规划、精英中学考试规划等。`,
          en: `Conducted by experienced Australian education professionals and expert advisors with extensive knowledge of the field, the consultation provides a comprehensive analysis of the student’s situation. This ensures personalised study recommendations, course selection guidance, and career planning. The goal is to eliminate any information gaps parents might face in the Australian education system, helping students access the best academic advice and planning.
Recommendations may include (but are not limited to): school transfer advice, VCE subject selection, guidance on study destinations, participation in extracurricular activities, competition planning, scholarship exam preparation, and elite school entry exam strategies.`,
        },
      },
      {
        step: 1,
        title: {
          zh: "Step 1 测试评估",
          en: "Step 1: Testing and Assessment",
        },
        desc: {
          zh: `• 澳升拥有由维州最强教研团队共同打磨出的极具权威的内部全科入学测试。老师根据测试结果找出学生的薄弱项后，会给学生提供量身定制的教学计划。
• 学习管理老师和专业老师会根据学生的测试结果，推荐授课模式：大班课、小班课、一对一、或班课结合一对一的同步授课模式，以及有关是否需要进入快班或升年级超前跟班等方面的建议。
澳升教研团队包括：维州高考考官、维州教材编写者、日校20年教龄资深老师、私校高考班高分老师、维州VCE状元、维州出分最高的明星老师等。`,
          en: `Austin Education provides an authoritative, multi-subject internal admission test developed by Victoria’s top academic team. Based on the results, teachers identify students’ weaknesses and offer tailored learning plans.
Academic managers and subject teachers recommend the most suitable teaching formats, such as group classes, small classes, one-on-one sessions, or a combination. They also advise on placement in advanced classes or accelerated grade levels, ensuring optimal academic progress.
Austin’s academic team includes VCE exam assessors, textbook authors, senior teachers with 20+ years of experience, private school high-score teachers, VCE top scorers, and Victoria’s best-performing educators.`,
        },
      },
      {
        step: 2,
        title: {
          zh: "Step 2 确认课程",
          en: "Step 2: Confirming Courses",
        },
        desc: {
          zh: `• 澳升汇聚了全维州领先的师资力量，可以为学生匹配最适合自己学习风格的老师。课程开始之后，学生如果对老师或班级不适应，澳升也支持学生换班，目标是让学生获得最完美的课程体验，激发其学习兴趣，获得高效的学习进步。`,
          en: `Austin Education brings together Victoria’s top educators, matching students with teachers suited to their learning styles. If students find the class or teacher unsuitable after starting, they are supported in switching to ensure the best experience, fostering learning interest and efficient progress.`,
        },
      },
      {
        step: 3,
        title: {
          zh: "Step 3 缴费（无条件退款）＋建立学生档案",
          en: "Step 3: Payment (Unconditional Refund Policy) and Student Record Creation",
        },
        desc: {
          zh: `完成缴费后，工作人员将会发送收据至您指定的联系方式，并将学生信息录入澳升系统。
如果在课程进行过程中对教学不满意，您可以随时提出无条件退款申请，退款金额会在两周之内退还回指定账户。
*若报名时享受优惠，退款时已上课程则不享受折扣`,
          en: `After payment, a receipt will be sent to the designated contact, and student information will be entered into Austin’s system.
If dissatisfied with the course, you may request an unconditional refund, processed within two weeks.
*Refunds exclude promotional discounts applied at enrollment.`,
        },
      },
    ],
  },
  {
    part: 2,
    title: {
      zh: "课前准备",
      en: "Pre-Course Preparation",
    },
    steps: [
      {
        step: 4,
        title: {
          zh: "Step 4 加入班级群＋私人学管服务",
          en: "Step 4: Joining Class Groups + Private Academic Manager Services",
        },
        desc: {
          zh: `• 学生正式入学后会加入班级群。群内有多位老师分别负责专项服务，给学生的学习问题或课程安排问题进行答疑解惑。
• 每个学生都有专属的学习管理老师，学管老师负责学生在澳升和日校的一切学习相关事务（包括请假、调课、调班、监督作业完成情况、制定学习计划等），为学生保驾护航直至VCE高考考试结束。
*以上服务仅为班课学生享有。`,
          en: `After enrollment, students will join class groups where multiple teachers provide dedicated support, addressing academic and scheduling questions.
Each student is assigned a private academic manager responsible for all academic-related matters at Austin and day school, including leave requests, rescheduling, class transferring, homework supervision, and study plans, guiding them through to VCE exams.
*Services apply to group class students only.`,
        },
      },
      {
        step: 5,
        title: {
          zh: "Step 5 开通作业系统",
          en: "Step 5: Accessing Homework System",
        },
        desc: {
          zh: `• 工作人员将协助学生开通作业系统账号，并由学生学习使用作业系统。
• 澳升拥有系统化的课后作业管理模式：随堂纸质作业+线上作业系统。学生在每节课后都有定量的作业需要完成。此外，学生如需更多练习机会，还可以在澳升的作业系统、或线下，获取海量题库和模拟考试。
• 澳升作业系统包含错题集功能，学生所有错题会被自动收集，方便查漏补缺。作业系统便于老师后台跟踪作业情况和学习状态，能够及时与学生和家长沟通学习上出现的问题和改进建议。`,
          en: `Staff assist students in setting up their homework system account and learning how to use it.
Austin provides a systematic homework management model, combining in-class paper assignments with an online system. Students have assigned homework after every class. Additional practice materials and mock exams are available online or on-site.
The system includes an error collection function to help students identify and correct mistakes. Teachers can monitor homework progress and provide timely feedback to students and parents.`,
        },
      },
      {
        step: 6,
        title: {
          zh: "Step 6 领取教材",
          en: "Step 6: Receiving Materials",
        },
        desc: {
          zh: `• 学生将于每学期开学的第一节课领取纸质教科书。
• 澳升拥有全维州最系统、最优质、最符合VCE考纲设计的教材。由维州最强教研团队编写。澳升的各种教材、内部测试卷也被全维州八十多所日校广泛采用并传播。
*网课学生全澳范围邮寄教材。`,
          en: `Students will receive textbooks during the first class of each term.
Austin’s textbooks, designed by Victoria’s leading academic team, are the most comprehensive and VCE-aligned in the state. They are widely used by over 80 schools across Victoria.
*Online students will receive materials via nationwide delivery.`,
        },
      },
    ],
  },
  {
    part: 3,
    title: {
      zh: "课程相关服务",
      en: "Course Services",
    },
    steps: [
      {
        step: 7,
        title: {
          zh: "Step 7 课程开始",
          en: "Step 7: During Classes",
        },
        desc: {
          zh: `• 班课全年共有四个学期，上课时间均和日校同步。每个学期的课程安排都是由老师们经过多年教研和不断精进而得出的最佳方案。
• 各年级、各学科都有进度不同的班级，学生可以根据自己的学习情况，灵活调整快慢班来保证自己紧跟进度。
• 学习安排通常分为四个部分：日常上课+课后作业+期末测试+发成绩单/开家长会。`,
          en: `Group classes run for four terms, aligned with day school schedules. Each term’s curriculum is designed to optimise learning through extensive research and refinement.
Flexible class options allow students to adjust between standard and accelerated levels to match their progress.
Learning includes four components: regular classes, homework, term-end tests, and reports/parent-teacher interviews.`,
        },
      },
      {
        step: 8,
        title: {
          zh: "Step 8 期末测试＋报告评估/家长会",
          en: "Step 8: Term-End Tests + Reports/Parent Meetings",
        },
        desc: {
          zh: `• Y1-9的学生，每个学期期未测试后，家长都会收到一份学习反馈，反馈形式各学期不同，包括家长会、考试排名、Report。
• Y10-12的学生，模考后收到考试Report，不定期开设家长会。`,
          en: `For Year 1–9 students, parents receive feedback after term-end tests in various formats, including parent-teacher interviews, exam rankings, or reports.
For Year 10–12 students, mock exam reports and periodic parent-teacher interviews provide updates and strategies for improvement.`,
        },
      },
      {
        step: 9,
        title: {
          zh: "Step 9 假期课",
          en: "Step 9: Holiday Courses",
        },
        desc: {
          zh: `• 澳升在每个假期都会推出针对性更强的假期课。假期课将持续两周，共包含4-6节课，旨在为那些在日常学习中知识点掌握不佳或没有跟上进度的学生提供额外的辅导支持。
• 1、查漏补缺：根据学生的成绩单和评估报告，精准分析出各科目的学习情况，总结出重点、难点、遗漏点，并提供具有针对性的讲解以帮助学生查漏补缺。
2、追赶进度：对于学习能力稍显欠佳或因个人原因而导致学习进度滞后的学生，假期课是弥补差距的最佳机会。澳升致力于帮助孩子在假期中迅速追赶进度，确保他们在新学期能够顺利衔接。
3、冷门考点专项辅导：针对平时日校和澳升课程中没有涵盖的VCE冷门考点进行专项辅导，保证不放过任何一个考点，帮助学生在假期过程中拓宽知识面，全面提高认知水平。
*假期课同样开放试听。`,
          en: `Austin offers targeted holiday courses lasting two weeks (4–6 sessions). These address missed knowledge points, help students catch up, and cover VCE-specific topics not addressed in regular courses.
Services include:
1) Addressing Knowledge Gaps: Based on students' transcripts and assessment reports, teachers conduct a precise analysis of their performance in each subject, identifying key areas, difficulties, and missed topics. Tailored explanations are provided to help students fill in the gaps and reinforce their understanding.
2) Catching Up on Progress: For students who may have fallen behind due to learning difficulties or personal reasons, our holiday courses offer the perfect opportunity to close the gap. Austin is committed to helping students quickly catch up during the holiday period, ensuring a smooth transition into the new semester.
3) Specialised Tutoring for Less Common Exam Topics: We offer targeted tutoring for VCE exam topics that are not covered in regular school or Austin courses. This ensures no topic is overlooked and helps students broaden their knowledge base during the holiday period, improving their overall cognitive abilities.
*Holiday courses are also available for trial sessions.`,
        },
      },
      {
        step: 10,
        title: {
          zh: "Step 10 更新学生档案",
          en: "Step 10: Update Student Records",
        },
        desc: {
          zh: `• 在超过十年的深耕与积累中，澳升教育打造了巨量的学生数据库。从数据库中，老师、学生、以及家长们将能够精准匹配与当前学生情况高度契合的过往案例，对学生的学习成果进行阶段性预测，拟合出未来的成长趋势，从而更有针对性地查漏补缺，强化学生的学习成果。`,
          en: `Austin’s extensive database enables accurate predictions of student performance and personalised recommendations based on past cases, ensuring consistent progress and targeted improvement.`,
        },
      },
      {
        step: 11,
        title: {
          zh: "Step 11 根据考试情况二次咨询＋免费规划",
          en: "Step 11: Follow-Up Consultation + Free Planning",
        },
        desc: {
          zh: `• 学生在澳升完成一段时间的学习后，可以根据自身的学习情况再次预约学管和任课老师进行一对一咨询，并重新规划学习路线。`,
          en: `Students can schedule follow-up consultations with their academic manager or teachers for updated learning plans based on their progress.`,
        },
      },
    ],
  },
];

export default function AdmissionProcess() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  // 为每个 Part 记录当前选中的 Step Index，初始都设为 0
  const [activeSteps, setActiveSteps] = useState(
    () => steps.map(() => 0) // 数组长度与 steps 一致，每个 Part 默认选中第 0 个 Step
  );

  // 点击某个步骤时，更新对应 Part 的 activeStep
  const handleStepClick = (partIndex, stepIndex) => {
    setActiveSteps((prev) => {
      const newActiveSteps = [...prev];
      newActiveSteps[partIndex] = stepIndex;
      return newActiveSteps;
    });
  };

  return (
    <section className="py-20">
      {/* 大标题 */}
      <h2 className="text-4xl font-bold text-center mb-12">
        {lang === "zh" ? "入学服务流程" : "Admission Service Process"}
      </h2>

      {steps.map((part, i) => {
        // 当前 Part 的标题
        const partTitle = lang === "zh" ? part.title.zh : part.title.en;

        // 当前 Part 的“选中” Step 索引
        const currentStepIndex = activeSteps[i];
        // 取出对应的 Step 数据
        const currentStep = part.steps[currentStepIndex];

        return (
          <div key={i} className="mb-16">
            {/* Part 标题：居中显示 */}
            <div className="relative w-[150px] h-[150px] mb-8 justify-center mx-auto">
              <Image
                src={`/home/title-bg${part.part}.png`}
                alt="Part background"
                width={150}
                height={150}
                className="object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-center">
                <h1 className="mt-6 text-3xl uppercase">Part {part.part}</h1>
                <span className="text-sm">{partTitle}</span>
              </div>
            </div>

            {/* 分割布局：左边是 description，右边是 steps */}
            <div className="flex w-full">
              {/* 左侧 - 显示当前选中 Step 的描述 */}
              <div className="w-1/2 pr-8 border-r border-gray-300">
                <h3 className="text-xl font-bold mb-4">
                  {/* 比如显示 Step 的编号 + 标题 */}

                  {lang === "zh" ? currentStep.title.zh : currentStep.title.en}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {lang === "zh" ? currentStep.desc.zh : currentStep.desc.en}
                </p>
              </div>

              {/* 右侧 - Step 列表（只显示标题），点击切换 */}
              <div className="w-1/2 pl-8 space-y-4">
                {part.steps.map((stepData, j) => (
                  <button
                    key={j}
                    onClick={() => handleStepClick(i, j)}
                    className={`block w-full text-left p-4 rounded-lg transition border 
                      ${
                        currentStepIndex === j
                          ? "bg-primary/10 border-primary"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                  >
                    <span className="font-semibold">
                      {lang === "zh" ? stepData.title.zh : stepData.title.en}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
