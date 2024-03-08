// Resources.tsx
import React from "react";
import Link from "next/link";



const Home = () => {

  return (
    <div id="main">

      <div id="overview" className=" w-[249px] h-[487px] p-8 space-y-6 fixed">
        <h1 className="w-[249px] text-[40px] left-0 top-0 pb-4 font-semibold ">Overview</h1>
        <p className="text-[20px] leading-[30px]">Bookmarks</p>
        <p className="text-[20px] leading-[30px]">Notes</p>
        <p className="text-[20px] leading-[30px]">Viewed Docs</p>
        <div className="w-[280px] h-[0px] left-[240px] top-[90px] absolute origin-top-left rotate-90 border border-black"></div>
      </div>

    </div>

  )
}

export default Home;
