import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { LangContext } from "@/app/layout";

export default function Features() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  const stats = [
    { num: "99.95", text: ["ATAR achieved by 6 of our students."] },
    { num: "99", text: ["ATAR or above by 46 of our students"] },
    { num: "90", text: ["ATAR or above by 84% of our students"] },
  ];

  const features = [
    {
      icon: "/home/team icon.png",
      title_en: "Top-tier\n teaching team",
      title_zh: "顶尖师资团队",
      desc_en:
        "Dive into our diverse range of online courses tailored to suit various interests.",
      desc_zh: "深入了解我们多样化的在线课程，满足不同兴趣需求。",
    },
    {
      icon: "/home/course icon.png",
      title_en: "Comprehensive and\n high-quality courses",
      title_zh: "全面高质量课程",
      desc_en:
        "Our curated collection covers a wide range of subjects and topics.",
      desc_zh: "我们精心策划的课程涵盖了多个学科和主题。",
    },
    {
      icon: "/home/study icon.png",
      title_en: "Well-equipped\n learning space",
      title_zh: "优质学习环境",
      desc_en:
        "Join live lectures, interactive discussions, and group activities led by experienced.",
      desc_zh: "参加由经验丰富的老师主持的直播讲座、互动讨论和小组活动。",
    },
  ];

  const achievementsText = lang === "zh" ? "查看成就" : "Our Achievements";

  return (
    <section className="py-20 relative overflow-hidden">
      {/* decorative SVG in the top-right */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none
       w-24 h-24       /* 默认手机上 6rem × 6rem */
    sm:w-32 sm:h-32 /* ≥640px 时 8rem × 8rem */
    md:w-48 md:h-48 /* ≥768px 时 12rem × 12rem */
    ">
        <Image src="/decoration/2.svg" alt="" width={200} height={200} />
      </div>
      {/* 上半部分 */}
      <div className="grid xl:grid-cols-2 gap-12 mb-20">
        {/* 左侧统计卡片 */}
        <div className="flex flex-row items-start justify-center gap-2 sm:gap-8 relative md:min-h-[400px]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative transition-all duration-300 hover:-translate-y-2"
              style={{
                // 高低错落
                marginTop: i === 0 ? "2rem" : i === 1 ? "-1rem" : "3rem",
                zIndex: 3 - i,
              }}
            >
              <div className="relative">
                {/* 图片容器 */}
                <Image
                  src={`/home/section bg${i + 1}.png`}
                  alt="Background"
                  width={247}
                  height={326}
                  className="object-contain drop-shadow-lg"
                />
                {/* 文字内容 */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center p-4 xl:p-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-2 mt-4 md:mt-6 2xl:mt-0 text-white">
                    {stat.num}
                  </div>
                  <div className="h-[2px] w-16 bg-white mb-4 opacity-100" />
                  <div className="text-center">
                    {stat.text.map((line, j) => (
                      <div
                        key={j}
                        className="text-[10px] sm:text-[12px] xl:text-lg font-medium text-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* 右侧文字区 */}
        <div className="space-y-6 mx-auto">
          <div className="text-center">
            <h2 className="font-bold leading-tight">
              {/* 行1: "What makes over" */}
              <div className="text-sm sm:text-lg lg:text-2xl xl:text-lg 2xl:text-xl mb-2">
                {lang === "zh" ? "为什么超过" : "What makes over"}{" "}
                <span className="text-2xl sm:text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl">
                  10,000
                </span>{" "}
                {lang === "zh" ? "名学生选择" : "students choose"}
              </div>

              {/* 行2: "AUSTIN EDUCATION" */}
              <div className="text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl">
                AUSTIN EDUCATION
              </div>
            </h2>
          </div>

          <ul className="text-gray-600 list-disc list-outside pl-4 space-y-2 text-left w-2/3 xl:w-full mx-auto text-sm md:text-base xl:text-sm">
            <li>
              {lang === "zh"
                ? "澳大利亚最严格筛选的师资团队，超过90%为高分毕业生和学科专家。"
                : "Australia's most rigorously selected teaching team, with over 90% consisting of high-achieving graduates and subject experts."}
            </li>
            <li>
              {lang === "zh"
                ? "我们帮助学生取得顶尖成绩，确保每个人都能看到明显和实质性的进步。"
                : "We help students achieve top scores, ensuring visible and tangible progress for everyone."}
            </li>
            <li>
              {lang === "zh"
                ? "系统化的课程结构和强大的支持体系，让学习更高效，突破更容易。"
                : "A well-structured curriculum and strong support system make learning more efficient and breakthroughs easier"}
            </li>
          </ul>

          <div className="flex justify-center xl:justify-start">
            <Button size="lg">{achievementsText}</Button>
          </div>
        </div>
      </div>

      {/* Why Choose Austin */}
      <div className="relative z-10 text-center mb-16 py-8 w-[80%] mx-auto">
        {/* 左上角装饰 */}
        <div className="absolute -top-40 md:-top-20 -left-10 z-0 pointer-events-none">
          <Image
            src="/decoration/3.svg"
            alt=""
            width={150}
            height={150}
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase">
          {lang === "zh" ? "为什么选择奥斯汀" : "Why Choose Austin"}
        </h2>
        <p className="text-sm md:text-base max-w-4xl mx-auto">
          {lang === "zh"
            ? "奥斯汀教育以卓越的师资团队、全面的高质量课程和非凡的学习环境而闻名。"
            : "Austin Education is renowned for its outstanding teaching team, comprehensive high-quality course offerings, and exceptional learning environment. As a result, students often affectionately refer to it as their second day school."}
        </p>
      </div>

      {/* 功能卡片 */}
      {/* 网格布局：3列，卡片居中 */}
      <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 justify-center items-center">
        {features.map((feat) => (
          <div
            key={feat.title_en}
            className="
              relative 
              bg-white 
              rounded-3xl 
              shadow-2xl 
              p-2 
              pt-16 
              w-[300px]
              overflow-visible
              transition-all duration-300 hover:-translate-y-2
              min-h-[400px]
            "
          >
            {/* 
              图标容器：绝对定位在卡片顶部中央，负top值让一半露出在卡片外 
              w-16 h-16 => 4rem x 4rem
            */}
            <div
              className="
                absolute 
                -top-8 
                left-1/2 
                transform 
                -translate-x-1/2 
                w-16 
                h-16 
                bg-primary 
                rounded-full 
                flex 
                items-center 
                justify-center
                
              "
            >
              <Image
                src={feat.icon}
                width={40}
                height={40}
                alt="Icon"
                className="p-1"
              />
            </div>

            {/* 卡片内容 */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center mx-auto line-clamp-2 whitespace-pre-wrap">
                {lang === "zh" ? feat.title_zh : feat.title_en}
              </h3>
              <p className="text-gray-600 mb-12 text-center ">
                {lang === "zh" ? feat.desc_zh : feat.desc_en}
              </p>

              {/* <div className="flex justify-center">
                <Button>{lang === "zh" ? "了解更多" : "Learn More"}</Button>
              </div> */}
            </div>

            <div
              className="absolute 
                bottom-16 
                left-1/2 
                transform 
                -translate-x-1/2 "
            >
              <Button size="lg">
                {lang === "zh" ? "了解更多" : "Learn More"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
