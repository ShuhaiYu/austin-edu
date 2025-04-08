"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"


export const LangContext = createContext(null);

export default function RootLayout({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <html lang="en">
      <head>
        <title>Austin Edu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-gray-900">
        <LangContext.Provider value={{ lang, setLang }}>
          <NavBar />
          <main className="flex-1 mt-32 md:mt-40 mx-auto w-[95%] max-w-screen-2xl px-4" >
            <div className="w-full px-4">{children}</div>
          </main>
          <Toaster />
          <Footer />
        </LangContext.Provider>
      </body>
    </html>
  );
}
