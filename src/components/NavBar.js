"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LangContext } from "@/app/layout";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

// 如果你要根据路由来判断当前选中的菜单项，可以在这里添加对应的 path
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

  // 如果需要根据当前路由判断高亮，可以在这里获取当前路由，如：
  // const pathname = usePathname(); 
  // 或者直接传递给 useRouter()

  return (
    <header className="sticky top-0 z-50 bg-background mx-auto">
      {/* 第一行：Logo + 语言切换 + 用户按钮 */}
      <div className="bg-background w-[80%] mx-auto">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* 左侧 Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="text-xl font-bold">Austin Edu</span>
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

      {/* 第二行导航：白底，等宽分布，当前项下方横线 */}
      <nav className="bg-white mx-auto mt-2 py-4 px-8 shadow-xl w-[80%] ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {menuItems.map((item) => {
            // 根据当前路由进行判断（此处仅示例，可根据实际业务逻辑改造）
            // 假设 pathname 跟 item.href 匹配时，就高亮
            // const isActive = pathname === item.href;
            // 这里先用简单写法，示意其中一个 key 为高亮:
            const isActive = item.key === "home"; // 替换成你的高亮逻辑

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

                {/* 下方横线：仅在激活时显示 */}
                {isActive && (
                  <span
                    className="
                      absolute left-1/2 bottom-0
                      block h-[4px] w-1/2 -translate-x-1/2
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
