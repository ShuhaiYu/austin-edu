import { useContext } from "react";
import { LangContext } from "@/app/layout";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from '@/components/ui/button'
import Link from "next/link";

export default function Header() {
  const { lang } = useContext(LangContext) || { lang: "en" };


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
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* 第一行 */}
      <div className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded" />
            <span className="text-xl font-bold">Austin Edu</span>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="gap-2">
              <span>👤</span>
              {lang === "zh" ? "我的账户" : "My Austin"}
            </Button>
          </div>
        </div>
      </div>

      {/* 第二行导航 */}
      <nav className="container hidden h-12 items-center gap-8 px-4 md:flex">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {lang === "zh" ? item.label_zh : item.label_en}
          </Link>
        ))}
      </nav>
    </header>
  );
}