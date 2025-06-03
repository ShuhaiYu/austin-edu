"use client";

import { useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LangContext } from "@/app/layout";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { key: "home", label_en: "Home", label_zh: "首页", href: "/" },
  {
    key: "achievements",
    label_en: "Achievements",
    label_zh: "成就",
    href: "/achievements",
  },
  { key: "courses", label_en: "Courses", label_zh: "课程", href: "/courses" },
  {
    key: "my_austin",
    label_en: "Homework System",
    label_zh: "作业系统",
    href: "/my_austin",
  },
  {
    key: "resource_hub",
    label_en: "Resource Hub",
    label_zh: "资源中心",
    href: "/resource_hub",
  },
  {
    key: "join_us",
    label_en: "Join Us",
    label_zh: "加入我们",
    href: "/join_us",
  },
  {
    key: "contact_us",
    label_en: "Contact Us",
    label_zh: "联系我们",
    href: "/contact_us",
  },
  {
    key: "about_us",
    label_en: "About Us",
    label_zh: "关于我们",
    href: "/about_us",
  },
];

export default function Header() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      if (currentScrollY < 10) {
        setIsScrolled(false);
      }
    };

    const debouncedScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "up" && lastScrollY > 100) {
      setIsScrolled(false);
    } else if (scrollDirection === "down" && lastScrollY > 100) {
      setIsScrolled(true);
    }
  }, [scrollDirection, lastScrollY]);

  function throttle(fn, wait) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall < wait) return;
      lastCall = now;
      return fn(...args);
    };
  }

  return (
    <header className="sticky top-0 z-50">
      {/* 第一行：Logo + 语言切换 + 用户按钮 */}
      <div
        className={`fixed w-full top-0 bg-background transition-all duration-300 z-50 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="w-[95%] max-w-screen-2xl mx-auto">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            {/* 左侧 Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo3.svg"
                alt="Logo"
                width={300}
                height={40}
                priority
              />
            </Link>

            {/* 右侧：语言切换 & 用户按钮 */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="https://myaustin.com.au/login.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  {lang === "zh" ? "我的账户" : "My Austin"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 导航菜单部分 - 蓝色背景，左右顶住 */}
      <div
        className={`fixed w-full bg-primary ${
          isScrolled ? "top-0" : "top-16"
        } transition-all duration-300 z-40`}
      >
        {/* 移动端菜单按钮和小屏菜单 */}
        <div className="md:hidden relative">
          <div className="flex justify-center">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="lg"
              className="my-2 border-none bg-transparent hover:bg-white/10 text-white hover:text-white"
            >
              <div className="px-32">
                <AlignJustify className="h-6 w-6" />
              </div>
            </Button>
          </div>

          {/* 折叠菜单 */}
          <div
            className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 z-50 ${
              mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <nav className="bg-white shadow-xl">
              <div className="flex flex-col space-y-2 p-4">
                {menuItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`
                        text-center py-3 text-sm font-medium transition-colors
                        ${
                          isActive
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }
                      `}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {lang === "zh" ? item.label_zh : item.label_en}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>

        {/* 大屏：横向菜单 */}
        <nav className="hidden md:block w-[95%] max-w-screen-2xl mx-auto py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`
                    relative text-center py-3 text-sm font-medium transition-colors text-white hover:text-white/80
                    ${isActive ? "text-white" : ""}
                  `}
                >
                  {lang === "zh" ? item.label_zh : item.label_en}
                  {isActive && (
                    <span className="absolute left-1/2 bottom-0 block h-[4px] w-1/2 -translate-x-1/2 bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}