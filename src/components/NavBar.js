"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LangContext } from "@/app/layout";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

const menuItems = [
  { key: "home", label_en: "Home", label_zh: "首页", href: "/home" },
  { key: "achievements", label_en: "Achievements", label_zh: "成就", href: "/achievements" },
  { key: "courses", label_en: "Courses", label_zh: "课程", href: "/courses" },
  { key: "teacher", label_en: "Teacher", label_zh: "教师", href: "/teacher" },
  { key: "resource_hub", label_en: "Resource Hub", label_zh: "资源中心", href: "/resource_hub" },
  { key: "join_us", label_en: "Join Us", label_zh: "加入我们", href: "/join_us" },
  { key: "contact_us", label_en: "Contact Us", label_zh: "联系我们", href: "/contact_us" },
  { key: "about_us", label_en: "About Us", label_zh: "关于我们", href: "/about_us" },
];

export default function Header() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background mx-auto">
      {/* 第一行：Logo + 语言切换 + 用户按钮 */}
      <div className="bg-background w-[80%] mx-auto">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* 左侧 Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="text-xl font-bold">Austin</span>
          </div>

          {/* 右侧：语言切换 & 用户按钮 */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="gap-2">
              {lang === "zh" ? "我的账户" : "My Austin"}
            </Button>
          </div>
        </div>
      </div>

      {/* 小屏：菜单切换按钮，居中显示 */}
      <div className="md:hidden flex justify-center">
        <Button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="my-2 transition-transform duration-300 bg-background text-foreground hover:text-primary-foreground shadow-none hover:shadow-xl px-32"
        >
          <i className="fi fi-br-menu-burger "></i>
        </Button>
      </div>

      {/* 小屏：折叠菜单，利用 max-h 与 transition-all 实现丝滑动画 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-white mx-auto py-4 px-8 shadow-xl">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => {
              // 示例：这里简单将 "home" 作为激活项，实际可根据路由判断
              const isActive = item.key === "home";
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`
                    text-center py-3 text-sm font-medium transition-colors
                    ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                  `}
                  onClick={() => setMobileMenuOpen(false)} // 点击后收起菜单
                >
                  {lang === "zh" ? item.label_zh : item.label_en}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* 大屏：横向菜单 */}
      <nav className="hidden md:block bg-white mx-auto mt-2 py-4 px-8 shadow-xl w-[80%]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {menuItems.map((item) => {
            const isActive = item.key === "home"; // 替换成实际激活逻辑
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`
                  relative text-center py-3 text-sm font-medium transition-colors
                  ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                `}
              >
                {lang === "zh" ? item.label_zh : item.label_en}
                {isActive && (
                  <span
                    className="
                      absolute left-1/2 bottom-0 block h-[4px] w-1/2 -translate-x-1/2
                      bg-primary
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
