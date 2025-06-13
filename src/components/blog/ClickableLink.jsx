"use client";
import Link from "next/link";

export const ClickableLink = ({ href, children, className = "" }) => {
  return (
    <Link 
      href={href}
      className={`text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 hover:decoration-blue-800 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};