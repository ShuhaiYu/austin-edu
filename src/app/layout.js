"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import "./globals.css";

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
      <body className="bg-white text-gray-900 dark:bg-gray-100">
        <LangContext.Provider value={{ lang, setLang }}>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangContext.Provider>
      </body>
    </html>
  );
}
