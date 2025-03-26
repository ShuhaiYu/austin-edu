import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { LangContext } from "@/app/layout";

export default function Features() {
  const { lang } = useContext(LangContext) || { lang: "en" };

  const stats = [
    { num: "99.95", text: ["ATAR achieved by 6", "of our students."] },
    { num: "99", text: ["ATAR or above by 46", "of our students"] },
    { num: "90", text: ["ATAR or above by", "84% of our students"] },
  ];

  const features = [
    {
      icon: "/home/team icon.png",
      title: "Top-tier teaching team",
      desc: "Dive into our diverse range of online courses tailored to suit various interests.",
    },
    {
      icon: "/home/course icon.png",
      title: "Comprehensive and high-quality courses",
      desc: "Our curated collection covers a wide range of subjects and topics.",
    },
    {
      icon: "/home/study icon.png",
      title: "Well-equipped learning space",
      desc: "Join live lectures, interactive discussions, and group activities led by experienced.",
    },
  ];

  const achievementsText = lang === "zh" ? "查看成就" : "Our Achievements";

  return (
    <section className="py-20">
      {/* 上半部分 */}
      <div className="grid xl:grid-cols-2 gap-12 mb-20">
        {/* 左侧统计卡片 */}
        <div className="flex flex-row items-start justify-center gap-2 sm:gap-8 relative min-h-[400px]">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="text-3xl sm:text-5xl font-bold mb-2 text-white">
                    {stat.num}
                  </div>
                  <div className="h-[2px] w-16 bg-white mb-4 opacity-50" />
                  <div className="text-center">
                    {stat.text.map((line, j) => (
                      <div
                        key={j}
                        className="text-[8px] sm:text-sm font-medium text-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 右侧文字区 */}
        <div className="space-y-6 mx-auto">
          {/* 让关键词明显突出；标题居中，列表与按钮左对齐 */}
          <div className="text-center">
            <h2 className="font-bold leading-tight">
              {/* 行1: "What makes over" */}
              <div className="text-xl sm:text-2xl 2xl:text-3xl mb-2">
                {lang === "zh" ? "为什么超过" : "What makes over"}{" "}
                <span className="text-3xl sm:text-4xl 2xl:text-5xl">
                  10,000
                </span>{" "}
                {lang === "zh" ? "名学生选择" : "students choose"}
              </div>

              {/* 行2: "AUSTIN EDUCATION" */}
              <div className="text-3xl md:text-5xl 2xl:text-6xl">
                AUSTIN EDUCATION
              </div>
            </h2>
          </div>

          <ul className="text-gray-600 list-disc list-outside pl-4 space-y-2 text-left w-2/3 xl:w-full mx-auto">
            <li>
              Australia&apos;s most rigorously selected teaching team, with over
              90% consisting of high-achieving graduates and subject experts.
            </li>
            <li>
              We help students achieve top scores, ensuring visible and tangible
              progress for everyone.
            </li>
            <li>
              A well-structured curriculum and strong support system make
              learning more efficient and breakthroughs easier.
            </li>
          </ul>

          <div className="flex justify-center xl:justify-start">
            <Button size="lg">{achievementsText}</Button>
          </div>
        </div>
      </div>

      {/* Why Choose Austin */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          {lang === "zh" ? "为什么选择奥斯汀" : "Why Choose Austin"}
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          {lang === "zh"
            ? "奥斯汀教育以卓越的师资团队、全面的高质量课程和非凡的学习环境而闻名。"
            : "Austin Education is renowned for its outstanding teaching team, comprehensive high-quality course offerings, and exceptional learning environment. As a result, students often affectionately refer to it as their second day school."}
        </p>
      </div>

      {/* 功能卡片 */}
      {/* 网格布局：3列，卡片居中 */}
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 justify-center items-center">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="
              relative 
              bg-white 
              rounded-3xl 
              shadow-xl 
              transition 
              p-2 
              pt-16 
              max-w-sm
              overflow-visible
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
              <Image src={feat.icon} width={40} height={40} alt="Icon" className="p-1"/>
            </div>

            {/* 卡片内容 */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center w-2/3 mx-auto">
              {feat.title}
            </h3>
            <p className="text-gray-600 mb-12 text-center">
              {feat.desc}
            </p>

            <div className="flex justify-center">
              <Button >
                {lang === "zh" ? "了解更多" : "Learn More"}
              </Button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
