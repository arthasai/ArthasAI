// Resources.tsx
"use client";

import React, { useState } from "react";

// components
import Link from "next/link";
import Image from "next/image";
import { Search, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Pagetab from "@/app/components/Pagetab";

const handleClick1 = () => {
  window.scrollTo({ top: 30, behavior: "smooth" });
};

const handleClick2 = () => {
  window.scrollTo({ top: 60, behavior: "smooth" });
};

const handleClick3 = () => {
  window.scrollTo({ top: 90, behavior: "smooth" });
};

const Home = () => {
  return (
    <div id="main">
      <Pagetab />
      {/* Start Melvin - Search bar */}

      <div className=" top-0 flex h-[120px] items-center border-b px-8 md:px-14">
        {/* Title */}
        <div className="hidden flex-col  text-lg font-medium md:flex md:flex-row">
          <h1 className=" text-3xl text-foreground transition-colors">
            {" "}
            Dashboard{" "}
          </h1>
        </div>
        {/* Search Bar */}
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Documents, Collections..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[450px] rounded-full border-2"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Header End */}

      <main className="flex flex-1 flex-col px-8 gap-4 md:gap-8 bg-gray-50">
        <div className="flex flex-col gap-2 pb-4">
          {/* Doc Section Start */}
          <div>
            <CardHeader>
              <CardTitle className="text-[20px] font-medium">
                Recent Viewed Docs
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-6">
              <Card className="flex flex-col justify-start border-none h-60 bg-gray-200">
                <CardHeader className="flex-row gap-4 ">
                  <CardTitle className="text-base font-medium">
                    Document One
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="flex flex-col justify-start border-none h-60 bg-gray-200">
                <CardHeader className="flex-row gap-4 ">
                  <CardTitle className="text-base font-medium">
                    Document Two
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="flex flex-col justify-start border-none h-60 bg-gray-200">
                <CardHeader className="flex-row gap-4 ">
                  <CardTitle className="text-base font-medium">
                    Document Three
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="flex flex-col justify-start border-none h-60 bg-gray-200">
                <CardHeader className="flex-row gap-4 ">
                  <CardTitle className="text-base font-medium">
                    Document Four
                  </CardTitle>
                </CardHeader>
              </Card>
            </CardContent>
          </div>{" "}
          {/* Docs Section End */}
          {/* Collection Section Start*/}
          <div className="xl:col-span-2 border-none">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="text-[20px] font-medium">
                  Collections
                </CardTitle>
                {/* <CardDescription>All your collections</CardDescription> */}
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-6">
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={"#"}>
                <Card className="flex flex-col justify-center items-center border-none bg-gray-200 hover:bg-gray-300">
                  <CardHeader className="flex-row gap-4">
                    {/* <Image
                      src="/assets/folder.png"
                      alt="Collection Image"
                      width={25}
                      height={25}
                    /> */}
                    <CardTitle className="text-base font-medium">
                      Collection Name
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            </CardContent>
          </div>
          {/* Collection Section End*/}
        </div>
      </main>
    </div>
  );
};

export default Home;
