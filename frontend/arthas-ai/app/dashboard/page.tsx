// Resources.tsx
"use client";

import React, { useState } from "react";

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
      {/* Start Melvin - Search bar */}
      <form id="searchbar" className="max-w-lg mx-auto mt-6">
        <label
          htmlFor="dashboard-search"
          className="mb-2 text-sm font-medium txt-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-800"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="dashboard-search"
            className="block w-full p-3 ps-10 text-md text-gray-900 border-2 border-[#4b4b4b] rounded-full focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            placeholder="Search Documents, Notes..."
          ></input>
        </div>
      </form>
      {/* End Melvin */}

      {/*Start Laura 2 column */}
      <div id="overview" className=" ml-10 mt-20 mb-20 columns-2">
        <h1 className="fixed text-[40px] pl-249 pr-249 pb-446 pt-446 ">
          Overview
        </h1>
      </div>

      <div id="bottom content" className="mt-5">
        <div
          id="overview content"
          className=" w-[225px] h-[300px]  ml-10 gap-8 border-r border-black flex flex-col fixed"
        >
          <p className="text-[25px]" onClick={handleClick1}>
            Bookmarks
          </p>
          <p className="text-[25px]" onClick={handleClick2}>
            Notes
          </p>
          <p className="text-[25px]" onClick={handleClick3}>
            Viewed Docs
          </p>
        </div>

        <div id="bookmark content" className=" ml-[300px] ">
          <h1 className="text-[40px] mb-[50px]"> Recently Viewed Docs</h1>
          <ol></ol>

          <h1 className="text-[40px] mb-[50px]"> Collections</h1>
          <ol></ol>
        </div>
      </div>

      {/* End Laura*/}
    </div>
  );
};

export default Home;
