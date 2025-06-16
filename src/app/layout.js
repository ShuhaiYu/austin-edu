"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import "./globals.css";
import 'swiper/css';
import { Toaster } from "@/components/ui/sonner"

export const LangContext = createContext(null);

export default function RootLayout({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" ,scrollbarGutter: "stable"}}>
      <head>
        <title>Austin Edu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-gray-900 w-full">
        <LangContext.Provider value={{ lang, setLang }}>
          <NavBar />
          {/* 使用固定的容器宽度避免居中计算受影响 */}
          <main className="flex-1 mt-24 md:mt-32 " >
            <div className="w-[95%] max-w-screen-2xl mx-auto px-4">{children}</div>
          </main>
          <Toaster />
          <Footer />
        </LangContext.Provider>
      </body>
    </html>
  );
}