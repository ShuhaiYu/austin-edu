import { useContext } from "react";
import { LangContext } from "@/app/layout";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const langContext = useContext(LangContext);
  const currentLang = langContext?.lang || "en";

  // 示例导航菜单（可自定义或移除）
  const menuItems = [
    { key: "home", label_en: "Home", label_zh: "首页" },
    { key: "achievements", label_en: "Achievements", label_zh: "成就" },
    { key: "courses", label_en: "Courses", label_zh: "课程" },
    { key: "teacher", label_en: "Teacher", label_zh: "教师" },
    { key: "resource_hub", label_en: "Resource Hub", label_zh: "资源中心" },
    { key: "join_us", label_en: "Join Us", label_zh: "加入我们" },
    { key: "contact_us", label_en: "Contact Us", label_zh: "联系我们" },
    { key: "about_us", label_en: "About Us", label_zh: "关于我们" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* 左侧: Logo + 名称 */}
        <div className="flex items-center space-x-2">
          {/* 示例Logo，可以替换为图片 <img src="/logo.png" alt="Austin Edu" /> */}
          <div className="w-6 h-6 bg-primary rounded-sm" />
          <span className="font-bold text-lg text-gray-800">Austin Edu</span>
        </div>

        {/* 中间: 导航菜单（可选） */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.key} className="text-gray-700 hover:text-primary">
              <a href="#">
                {currentLang === "zh" ? item.label_zh : item.label_en}
              </a>
            </li>
          ))}
        </ul>

        {/* 右侧: 语言切换 */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
}