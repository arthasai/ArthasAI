"use client";
import React from "react";
import Link from "next/link";

export default function Pagetab() {
  return (
    <header className=" top-0 flex items-center gap-4 border-b border-t bg-background px-8 md:px-8 bg-gray-50 px-8">
      <nav className="hidden px-8 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="text-muted-foreground text-m pb-4 pt-6 transition-colors focus:text-foreground focus:underline focus:underline-offset-[18px] decoration-[3px]"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground text-m pb-4 pt-6 transition-colors focus:text-foreground focus:underline focus:underline-offset-[18px] decoration-[3px]  active:underline-offset-[18px]"
        >
          Search
        </Link>
      </nav>
    </header>
  );
}
