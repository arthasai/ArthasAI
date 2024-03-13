// Resources.tsx
"use client"
import React from "react";
import Link from "next/link";



const Home = () => {

  return (
    <div id="main">
      {/* Start Melvin - Searchbar */}
        <form id="searchbar" className="max-w-lg mx-auto mt-6">
          <label htmlFor="dashboard-search" className="mb-2 text-sm font-medium txt-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-800" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input 
              type="search" 
              id="dashboard-search" 
              className="block w-full p-3 ps-10 text-md text-gray-900 border-2 border-[#4b4b4b] rounded-full focus:outline-none" 
              placeholder="Search Documents, Notes...">
            </input>
          </div>
        </form>
      {/* End Melvin */}

      <div id="overview" className=" w-[249px] h-[487px] p-8 space-y-6 fixed">
        <h1 className="w-[249px] text-[40px] left-0 top-0 pb-4 font-semibold ">Overview</h1>
        <p className="text-[20px] leading-[30px]">Bookmarks</p>
        <p className="text-[20px] leading-[30px]">Notes</p>
        <p className="text-[20px] leading-[30px]">Viewed Docs</p>
        <div className="w-[280px] h-[0px] left-[240px] top-[90px] absolute origin-top-left rotate-90 border border-[#4b4b4b]"></div>
      </div>

    </div>

  )
}

export default Home;
